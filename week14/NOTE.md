
### 动画与手势

#### 一、初步建立动画和时间线
帧的概念
最基础的动画的能力就是每帧我们去执行一个什么样的事件。
16毫秒的常识，60帧。
```js
let tick = ()=>{
    let handler = requestAnimationFrame(tick);
    cancelAnimationFrame(handler)
    
}
```
#### 二、设计时间线
时间线是动画系统的一部分，控制动画执行的过程和状态
创建一个TimeLine的类
提供以下方法
start()
pause()
resume()
reset()
以及三个状态Inited started paused以保证一定的健壮性

### 三、给动画添加暂停和重启功能
### 四、完善动画的其他功能
### 五、对时间线进行状态管理
