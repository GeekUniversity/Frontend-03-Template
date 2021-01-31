学习笔记
### 1. CSS总论 | CSS语法的研究
> ![c26208dc094ab997c8ecf023e1de26db.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p4506)

#### CSS 总体结构
- @charset
- @import
- rules
    - @media
    - @page
    - rule
### 2. CSS总论 | CSS @规则的研究

At-rules
- @charset ： https://www.w3.org/TR/css-syntax-3/
- @import ：https://www.w3.org/TR/css-cascade-4/
- @media ：https://www.w3.org/TR/css3-conditional/
- @page ： https://www.w3.org/TR/css-page-3/
- @counter-style ：https://www.w3.org/TR/css-counter-styles  - @keyframes ：https://www.w3.org/TR/css-animations-1/
- @fontface ：https://www.w3.org/TR/css-fonts-3/
- @supports ：https://www.w3.org/TR/css3-conditional/
- @namespace ：https://www.w3.org/TR/css-namespaces-3/



### 3. CSS总论 | CSS规则的结构
- 选择器
- 声明
    - key
    - value 

### 4. CSS总论 | 收集标准
#### 地址：https://www.w3.org/TR/?tag=css 
#### 过滤CSS标准的代码 code 如下 

### 5. CSS总论 | CSS总论总结

### 6. CSS选择器 | 选择器语法
• 简单选择器
    • * • div svg|a
    • .cls
    • #id
    • [attr=value]
    • :hover
    • ::before

• 复合选择器
    • <简单选择器><简单选择器><简单选择器> • * 或者 div 必须写在最前面
• 复杂选择器
    • <复合选择器><sp><复合选择器> 
    • <复合选择器>">"<复合选择器> 
    • <复合选择器>"~"<复合选择器> 
    • <复合选择器>"+"<复合选择器> 
    • <复合选择器>"||"<复合选择器>

### 7. CSS选择器 | 选择器的优先级

### 8. 伪类
伪类
• 链接/行为
    • :any-link
    • :link :visited
    • :hover
    • :active
    • :focus
    • :target
• 树结构
    • :empty
    • :nth-child()
    • :nth-last-child()
    • :first-child :last-child :only-child
• 逻辑型
    • :not伪类
    • :where :has

### 9. 伪元素
• ::before
• ::after
• ::first-line
• ::first-letter

#### 为什么first-letter可以设置float之类的，而first-line不行呢？
答：一行可以有多个::first-letter伪元素，只能有一个::first-line伪元素。所以first-letter可以设置float之类的，而first-line不行

#### 作业：编写一个match函数
```js
function match(selector, element) {
return true;
}
match("div #id.class", document.getElementById("id"));
```