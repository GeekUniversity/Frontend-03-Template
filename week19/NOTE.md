### 使用 nodejs 建立 http server

使用express和node自带的http库创建http服务器。

分别创建三个程序：
- web server 提供静态文件服务
- publish server 身份验证和更新web server的文件
- publish tool 提供发布上传功能

### nodejs的流（Stream）

nodejs的流分成5类：
- 可读流（例如`fs.ReadStream`, ）
- 可写流（例如`fs.WriteStream`, `http.ServerResponse`）
- 双重流（可以读也可以写，例如`net.Socket`）
- 转换流

### 压缩和解压缩

使用[archiver](https://www.npmjs.com/package/archiver)创建压缩包的流：

```javascript
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});
archive.directory('subdir/', false);
archive.finalize();
archive.pipe(writeable_stream);
```
使用[unzipper](https://www.npmjs.com/package/unzipper)创建解压文件的流：

```javascript
let unzipStream = unzipper.Extract({path: path.join(__dirname, '../server/public/')});

await new Promise((resolve, reject) => {
  // `ctx.req`     is Node's request object.
  // `ctx.request` is Koa Request object.
  ctx.req.pipe(unzipStream);
  unzipStream.on('finish', resolve);
  unzipStream.on('error', reject);
});
```

### GitHub OAuth
- 首先要申请一个GitHub App，设置认证通过后的回调api
- 在client端调用https://github.com/login/oauth/authorize，这里要在浏览器里调用，可以简单用Node.js的child_process执行child_process.exec(`start https://github.com/login/oauth/authorize?client_id=${GitHub App申请的client_id}`)（Windows下用start表示在浏览器里打开）。当然也可以用无头浏览器来实现，这一步会得到一个code
- 前面设置的回调api要在server端实现，接收到code之后再加上GitHub App申请的client_id和client_secret换取token，调用api为https://github.com/login/oauth/access_token，需要用https库调用
- 得到这个token后实际上server就可以调用GitHub的api获取身份相关信息，判断身份通过就可以执行之前的上传文件操作了。当然client端需要知道上传时机，可以简单在client端实现一个服务器，server在获取token后回传请求把token传给client，client再回传token给server并把文件上传就可以了
> https://docs.github.com/cn/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps
