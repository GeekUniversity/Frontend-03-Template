### 1. CSS排版 | 盒    
>HTML代码中可以书写开始**标签**，结束**标签**，和自封闭**标签**。
一对起止**标签**，表示一个**元素**。
DOM树中存储的是**元素**和其它类型的节点（Node）。
CSS选择器选中的是**元素**。
CSS选择器选中的**元素**，在排版时可能产生多个**盒**。
排版和渲染的基本单位是**盒**。
- 盒模型
### 2. CSS排版 | 正常流  
- 正常流排版
    • 收集盒进行
    • 计算盒在行中的排布
    • 计算行的排布 
### 3. CSS排版 | 正常流的行级排布
### 4. CSS排版 | 正常流的块级排布 
    - float与clear
    - margin折叠
### 5. CSS排版 | BFC合并
-Block
• Block Container：里面有BFC的 
• 能容纳正常流的盒，里面就有BFC，想想有哪些？ 
• Block-level Box：外面有BFC的 
• Block Box = Block Container + Block-level Box：
里外都有BFC的

Block Container
• block
• inline-block
• table-cell
• flex item
• grid cell
• table-caption


### 6. CSS排版 | Flex排版
Flex排版
• 收集盒进行
• 计算盒在主轴方向的排布
• 计算盒在交叉轴方向的排布

Animation
• animation-name 时间曲线
• animation-duration 动画的时长；
• animation-timing-function 动画的时间曲线；
• animation-delay 动画开始前的延迟；
• animation-iteration-count 动画的播放次数；
• animation-direction 动画的方向。
         


### 7. CSS动画与绘制 | 动画  
#### Animation
• @keyframes定义
• animation: 使用

#### Transition
• transition-property 要变换的属性；
• transition-duration 变换的时长；
• transition-timing-function 时间曲线；
• transition-delay 延迟。

#### cubic-bezier

### 8. CSS动画与绘制 | 颜色   
CMYK与RGB
HSL与HSV
### 9. CSS动画与绘制 | 绘制

####  几何图形
• border
• box-shadow
• border-radius

#### 文字
• font
• text-decoration
#### 位图
• background-image

##### 应用技巧
• data uri + svg
• data:image/svg+xml,<svg width="100%" height="100%" version="1.1" 
xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="150" 
rx="200" ry="80" style="fill:rgb(200,100,50); 
stroke:rgb(0,0,100);stroke-width:2"/> </svg>