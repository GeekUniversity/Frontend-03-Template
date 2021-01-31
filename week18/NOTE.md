### mocha使用

学习笔记、 单元测试工具-mocha 
```js
 npm install --save-dev mocha
//编写test文件
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```
如何解决import问题 -> 利用babel register
```js
mocha --require @bebel/register
//「MODULE_NOT_FOUND」错误： 调用local的mocha即可解决
```
### Code Coverage
```json
{
  "scripts": {
    "test": "mocha --require @babel/register", === //.node_modules/.node/macha json配置默认本项目执行环境
    "coverage": "nyc npm run test"
  },
  "devDependencies": {
    "@babel/core": "^7.12.7",
    "@babel/preset-env": "^7.12.7",
    "@babel/register": "^7.12.1",
    "@istanbuljs/nyc-config-babel": "^3.0.0",
    "babel-plugin-istanbul": "^6.0.0",
    "mocha": "^8.2.1",
    "nyc": "^15.1.0"
  }
}
// .babelrc 
{
  "presets": ["@babel/preset-env"],
  "plugins": ["istanbul"]
}
// .nycrc
{
  "extends": "@istanbuljs/nyc-config-babel"
}
```