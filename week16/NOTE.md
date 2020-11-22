## 轮播组件、动画与手势整合
### 应用动画与手势到轮播组件
轮播组件主要实现了自动轮播和鼠标控制轮播，这里把2种情况整合到一起，默认是自动轮播，鼠标点击或者说有手势操作的时候会取消自动轮播，鼠标移开或者手势操作结束会继续自动轮播。
#### 自动轮播，
- Timeline
- Animation
  - tartValue
  - endValue
  

- mousedown
  - Recognizer
- mouseup
  - flick
  - Animation
### 为组件添加更多属性
- attributes里可以根据事件名传递相应参数，可以在合适的时候派发这些自定义事件
- CustomEvent
```js
export const STATE = Symbol('state')
export const ATTRIBUTE = Symbol('attribute')
export class Component {
  constructor() {
    this[ATTRIBUTE] = Object.create(null)
    this[STATE] = Object.create(null)
  }
  setAttribute(name, value) {
    this[ATTRIBUTE][name] = value
  }
  appendChild(child) {
    child.mountTo(this.root)
  }
  mountTo(parent) {
    if (!this.root) {
      this.render()
    }
    parent.appendChild(this.root)
  }
  triggerEvent(type, args) {
    this[ATTRIBUTE]['on' + type.replace(/^[\s\S]/, (s) => s.toUpperCase())](
      new CustomEvent(type, { detail: args })
    )
  }
}
```

### 加入Children机制
- childContainer
- Template型