
   
#### 1. 重学HTML | HTML的定义：XML与SGML 
##### SGML：(Standard Generalized Markup Language，标准通用标记语言)，在web为发明之前就已经存在了，SGML是国际上定义电子文件结构和内容描述的标准。SGML具有非常复杂的文档结构，主要用于大量高度结构化数据的访问和其他各种工业领域，在分类和索引数据中非常有用。但是它不适用于Web数据描述。

##### XML：随着Web应用的不断发展，HTML的局限性也越来越明显地显现了出来，如HTML无法描述数据、可读性差、搜索时间长等。人们又把目光转向SGML，再次改造SGML使之适应现在的网络需求。随着先辈的努力，1998年2月10日，W3C(World WideⅥiebConsortium，万维网联盟)公布XML 1.0标准，XML诞生了。可以说xml是在html和sgml的基础上诞生的。

#####  XML使用一个简单而又灵活的标准格式，为基于Web的应用提供了一个描述数据和交换数据的有效手段。但是，XML并非是用来取代HTML的。HTML着重如何描述将文件显示在浏览器中，而XML与SGML相近，它着重描述如何将数据以结构化方式表示。


#### HTML 中有用的字符实体
注释：实体名称对大小写敏感！

|显示结果	|描述	|实体名称	|实体编号|
|-|-|-|-|
| | 	空格|	`&nbsp;`|	`&#160;`|
|`<	|小于号	|`&lt`;	|`&#60`;|
|> `|大于号	|`&gt;`|	`&#62;`|
|&	|和号	|`&amp;`	|`&#38;`|
|"	|引号	|`&quot;`	|`&#34;`|
|'	|撇号 |	`&apos;`| (IE不支持)`&#39;`|
|￠	|分（cent）|	`&cent;`|`	&#162;`|
|£	镑（pound）	|`&pound;`|`	&#163;`|
|¥	元（yen）	|`&yen;	`|`&#165;`|
|€	欧元（euro）	|`&euro;`|`	&#8364;`|
|§	小节	|`&sect;`|`	&#167;`|
|©	版权（copyright）	|`&copy;	`|`&#169;`|
|®	注册商标	|`&reg;	`|`&#174;`|
|™	商标	|`&trade;	`|`&#8482;`|
|×	乘号	|`&times;	`|`&#215;`|
|÷	除号	|`&divide;	`|`&#247;`|

#### 2. 重学HTML | HTML标签语义 
HTML5 中的新语义元素
这些链接指向完整的 HTML 参考手册。

|标签	|描述|
|-|-|
|`<article>`|	定义文章。
|`<aside>`	|定义页面内容以外的内容。
|`<details>`|	定义用户能够查看或隐藏的额外细节。
|`<figcaption>`|	定义 `<figure>` 元素的标题。
|`<figure>`	|规定自包含内容，比如图示、图表、照片、代码清单等。
|`<footer>`	||定义文档或节的页脚。
|`<header>`	|规定文档或节的页眉。
|`<main>`	|规定文档的主内容。
|`<mark>`	|定义重要的或强调的文本。
|`<nav>`	|定义导航链接。
|`<section>`	|定义文档中的节。
|`<summary>`	|定义 `<details> `元素的可见标题。
|`<time>`	|定义日期/时间。

 ---

|标签|	描述
|-|-|
|`<!--...--> `|定义注释。
|`<!DOCTYPE> `|	定义文档类型。
|`<a> `|定义锚。
|`<abbr> `|定义缩写。
|`<acronym> `|定义只取首字母的缩写。
|`<address> `|定义文档作者或拥有者的联系信息。
|`<applet> `|不赞成使用。定义嵌入的 applet。
|`<area> `|	定义图像映射内部的区域。
|`<article> `|	定义文章。
|`<aside> `|	定义页面内容之外的内容。
|`<audio> `|	定义声音内容。
|`<b> `|	定义粗体字。
|`<base> `|	定义页面中所有链接的默认地址或默认目标。
|`<basefont> `|不赞成使用。定义页面中文本的默认字体、颜色或尺寸。
|`<bdi> `|	定义文本的文本方向，使其脱离其周围文本的方向设置。
|`<bdo> `|	定义文字方向。
|`<big> `|定义大号文本。
|`<blockquote> `|定义长的引用。
|`<body> `|定义文档的主体。
|`<br> `|定义简单的折行。
|`<button> `|定义按钮 (push button)。
|`<canvas> `|	定义图形。
|`<caption> `|定义表格标题。
|`<center> `|	不赞成使用。定义居中文本。
|`<cite> `|	定义引用(citation)。
|`<code> `|定义计算机代码文本。
|`<col> `|定义表格中一个或多个列的属性值。
|`<colgroup> `|定义表格中供格式化的列组。
|`<command> `|定义命令按钮。
|`<datalist> `|定义下拉列表。
|`<dd> `|定义定义列表中项目的描述。
|`<del> `|定义被删除文本。
|`<details> `|定义元素的细节。
|`<dir> `|不赞成使用。定义目录列表。
|`<div> `|定义文档中的节。
|`<dfn> `|定义定义项目。
|`<dialog> `|定义对话框或窗口。
|`<dl> `|定义定义列表。
|`<dt> `|定义定义列表中的项目。
|`<em> `|	定义强调文本。
|`<embed> `|定义外部交互内容或插件。
|`<fieldset> `|	定义围绕表单中元素的边框。
|`<figcaption> `|	定义 figure 元素的标题。
|`<figure> `|定义媒介内容的分组，以及它们的标题。
|`<font> `|不赞成使用。定义文字的字体、尺寸和颜色。
|`<footer> `|	定义 section 或 page 的页脚。
|`<form> `|定义供用户输入的 HTML 表单。
|`<frame> `|定义框架集的窗口或框架。
|`<frameset> `|定义框架集。
|`<h1> to <h6> `|定义 HTML 标题。
|`<head> `|定义关于文档的信息。
|`<header> `|	定义 section 或 page 的页眉。
|`<hr> `|定义水平线。
|`<html> `|定义 HTML 文档。
|`<i> `|定义斜体字。
|`<iframe> `|	定义内联框架。
|`<img> `|定义图像。
|`<input> `|	定义输入控件。
|`<ins> `|	定义被插入文本。
|`<isindex> `|	不赞成使用。定义与文档相关的可搜索索引。
|`<kbd> `|定义键盘文本。
|`<keygen> `|	定义生成密钥。
|`<label> `|	定义 input 元素的标注。
|`<legend> `|	定义 fieldset 元素的标题。
|`<li> `|	定义列表的项目。
|`<link> `|	定义文档与外部资源的关系。
|`<map> `|	定义图像映射。
|`<mark> `|	定义有记号的文本。
|`<menu> `|定义命令的列表或菜单。
|`<menuitem> `|定义用户可以从弹出菜单调用的命令/菜单项目。
|`<meta> `|	定义关于 HTML 文档的元信息。
|`<meter> `|	定义预定义范围内的度量。
|`<nav> `|	定义导航链接。
|`<noframes> `|	定义针对不支持框架的用户的替代内容。
|`<noscript> `|	定义针对不支持客户端脚本的用户的替代内容。
|`<object> `|定义内嵌对象。
|`<ol> `|	定义有序列表。
|`<optgroup> `|	定义选择列表中相关选项的组合。
|`<option> `|	定义选择列表中的选项。
|`<output> `|	定义输出的一些类型。
|`<p>	v定义段落。
|`<param> `|	定义对象的参数。
|`<pre> `|定义预格式文本。
|`<progress> `|定义任何类型的任务的进度。
|`<q> `|定义短的引用。
|`<rp> `|	定义若浏览器不支持 ruby 元素显示的内容。
|`<rt> `|定义 ruby 注释的解释。
|`<ruby> `|定义 ruby 注释。
|`<s> `|不赞成使用。定义加删除线的文本。
|`<samp> `|定义计算机代码样本。
|`<script> `|	定义客户端脚本。
|`<section> `|	定义 section。
|`<select> `|	定义选择列表（下拉列表）。
|`<small> `|定义小号文本。
|`<source> `|定义媒介源。
|`<span> `|定义文档中的节。
|`<strike> `|	不赞成使用。定义加删除线文本。
|`<strong> `|	定义强调文本。
|`<style> `|	定义文档的样式信息。
|`<sub> `|定义下标文本。
|`<summary> `|为 <details> 元素定义可见的标题。
|`<sup> `|	定义上标文本。
|`<table> `|	定义表格。
|`<tbody> `|	定义表格中的主体内容。
|`<td> `|	定义表格中的单元。
|`<textarea> `|	定义多行的文本输入控件。
||`<tfoot> `|定义表格中的表注内容（脚注）。
|`<th> `|	定义表格中的表头单元格。
|`<thead> `|定义表格中的表头内容。
|`<time> `|定义日期/时间。
|`<title> `|	定义文档的标题。
|`<tr> `|	定义表格中的行。
|`<track> `|	定义用在媒体播放器中的文本轨道。
|`<tt> `|	定义打字机文本。
|`<u> `|	不赞成使用。定义下划线文本。
|`<ul> `|	定义无序列表。
|`<var> `|	定义文本的变量部分。
|`<video> `|定义视频。
|`<wbr> `|	定义可能的换行符。
|`<xmp> `|	不赞成使用。定义预格式文本。


#### 3. 重学HTML | HTML语法 
![a0d8bdbd1fb9a70883a6863b3b3c76dd.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5093)

##### 合法元素
- Element: <tagname>...</tagname>
- Text: text
- Comment: <!--Comment-->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a1?>
- CDATA:<![CDATA[]]>

---

|显示结果	|描述	|实体名称	|实体编号|
|-|-|-|-|
| | 	ASCII code |	ASCII code |	`&#161;`|
|`<	|小于号	|`&lt`;	|`&#60`;|
|&	|和号	|`&amp;`	|`&#38;`|
|"	|引号	|`&quot;`	|`&#34;`|


### 4. 浏览器API | DOM API
#### Document 接口
#### 属性

1. body
2. characterSet
3. childElementCount
4. children
5. doctype
6. documentElement
7. domain
8. fullscreen
9. head
10. hidden
11. images
12. links
13. location
14. onxxxxxxxxx
15. origin
16. plugins
17. readyState
18. referrer
19. scripts
20. scrollingElement
21. styleSheets
22. title
23. visibilityState

#### 方法：

1. close()
2. createDocumentFragment()
3. createElement()
4. createTextNode()
5. execCommand()
6. exitFullscreen()
7. getElementById()
8. getElementsByClassName()
9. getElementsByName()
10. getElementsByTagName()
11. getSelection()
12. hasFocus()
13. open()
14. querySelector()
15. querySelectorAll()
16. registerElement()
17. write()
18. writeln()




### 5. 浏览器API | 事件API 
#### target.addEventListener(type,littener,
>target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted  );  // Gecko/Mozilla only
参数
##### type
    表示监听事件类型的字符串。
##### listener
    当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。有关回调本身的详细信息，请参阅The event listener callback 
##### options 可选
    一个指定有关 listener 属性的可选参数对象。可用的选项如下：
    capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
    once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
    passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看 使用 passive 改善的滚屏性能 了解更多.
     mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。
##### useCapture  可选
    Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。 当useCapture(设为true) 时，沿着DOM树向上冒泡的事件，不会触发listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。 

#### Event:冒泡和捕获

### ★★★★★ 6. 浏览器API | Range API 

★★★★★ Range 构造器 
new Range()使用 
★★★★★ fragment
#### 属性
|属性名|描述|
|-|-|
|Range.collapsed 只读|返回一个表示 Range 的起始位置和终止位置是否相同的布尔值。
|Range.commonAncestorContainer 只读|返回完整包含 startContainer 和 endContainer 的、最深一级的节点。
|Range.endContainer 只读|返回包含 Range 终点的节点。
|Range.endOffset 只读|返回一个表示 Range 终点在 endContainer 中的位置的数字。
|Range.startContainer 只读|返回包含 Range 开始的节点。
|Range.startOffset 只读|返回一个表示 Range 起点在 startContainer 中的位置的数字。


#### 定位方法
|方法|描述|
|-|-|
|Range.setStart()|设置 Range 的起点。
|Range.setEnd()|设置 Range 的终点。
|Range.setStartBefore()|以其它节点为基准，设置 Range 的起点。
|Range.setStartAfter()|以其它节点为基准，设置 Range 的起点。
|Range.setEndBefore()|以其它节点为基准，设置 Range 的终点。
|Range.setEndAfter()|以其它节点为基准，设置 Range 的终点。
|Range.selectNode()|使 Range 包含某个节点及其内容。
|Range.selectNodeContents()|使 Range 包含某个节点的内容。
|Range.collapse()|将 Range 折叠至其端点（boundary points，起止点，指起点或终点，下同）之一。

#### 编辑方法
通过以下方法，可以从 Range 中获得节点，改变 Range 的内容。
|方法|描述|
|-|-|
|Range.cloneContents()|返回一个包含 Range 中所有节点的文档片段。
|Range.deleteContents()|从文档中移除 Range 包含的内容。
|Range.extractContents()|把 Range 的内容从文档树移动到一个文档片段中。
|Range.insertNode()|在 Range 的起点处插入一个节点。
|Range.surroundContents()|将 Range 的内容移动到一个新的节点中。

#### 其他方法
|方法|描述|
|-|-|
|Range.compareBoundaryPoints()|比较两个 Range 的端点。
|Range.cloneRange()|返回拥有和原 Range 相同的端点的克隆 Range 对象。
|Range.detach()|将 Range 从使用状态中释放，改善性能。
|Range.toString()|把 Range 的内容作为字符串返回。

![9a751c5cb42aa39cce8f1d2ddf11bc0a.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5095)
![2522373234cdb0579abb7203db1c63dd.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5096)
![76df486de257630bbd98cfa24f8fb8b8.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5097)
```html
<!--请把a里面的子元素倒序-->
<div id='a'>
    <span>1</span>
    <p>2</p>
    <a>3</a>
    <div>4</div>
</div>
<!--普通方法-->
<script>
let element = document.getElementById("a")
function  reverseChildren(element){
    let children = Array.protoype.slice.call(element.childNodes)
    for(let child of children){
        element.removeChild(child)
    }
    // element.innerHTML=""
    children.reverse()
    for(let child of children){
        element.appendChild(child)
    }
    
}
reverseChildren(element);
</script>
<!--次优方法-->
<script>
let element = document.getElementById("a")
function  reverseChildren(element){
    var l = element.childNodes.length;
    while(l-- >0){
        element.appendChild(element.childNodes[l])
    }
}
reverseChildren(element);
</script>
<!--使用 Range 性能最优-->
<script>
let element = document.getElementById("a")
function  reverseChildren(element){
    let range = new Range();
    range.selectNodeContents(element);
    
    let fragment = range.extractContents();
    var l = fragment.childNodes.length;
    while(l-- >0){
        fragment.append(fragment.childNodes[l])
    }
    element.appendChild(fragment); 
}
reverseChildren(element);
</script>
```



### 7. 浏览器API | CSSOM  
#### styleSheets
    document.styleSheets[0].cssRules
    document.styleSheets[0].insertRule("p {color:pink;},0)
    document.styleSheets[0].removeRule(0)
![c1fd04430dd4f29a29c79d87264f70f4.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5100)
![2b60b709b09a972bce74ae62a76771c0.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5101)
#### ★★★★ getComputedStyle()方法可以获取CSS3动画的任意运行时态，从而任意时间中断动画。。。
 
### 8. 浏览器API | CSSOM View  
![6effd66bc934aae0a0ce24c72edb6c2c.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5103)
![7e4393dbc45cb47ab5e362f1c0cfff69.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5104)
![00f2a468e6490b50af5514a0a59407d9.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5105)
![3d4cf56b121a26f80a71f969d70c80c5.png](evernotecid://2393A90F-1FE0-42B1-A655-82D09E31A7AF/appyinxiangcom/307379/ENResource/p5106)
#####★★ DPR window.devicedPixelRatio window.innerHeight
####★★★★★ element.getClientRects() //获取BFC
####★★★★ getBoundingClientRect() //获取BFC
### 9. 浏览器API | 其它API         
           
    
