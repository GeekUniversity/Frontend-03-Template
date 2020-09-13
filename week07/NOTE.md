
   
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


#### 5. 浏览器API | 事件API         
#### 6. 浏览器API | Range API         
#### 7. 浏览器API | CSSOM         
#### 8. 浏览器API | CSSOM View         
#### 9. 浏览器API | 其它API         
    
