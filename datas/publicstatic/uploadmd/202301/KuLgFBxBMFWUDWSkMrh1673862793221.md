&emsp;&emsp;html页面中引入css样式有四种方法，我们来看看这些引入方式，并且分析下他们的优劣。
&emsp;&emsp;**内联方式**
&emsp;&emsp;直接在HTML标签中的style属性中添加css。如：
```html
<div id="app" style="background-color: transparent;"></div>
```
&emsp;&emsp;**嵌入方式**
&emsp;&emsp;在html页面中加入style标签，在style标签里面书写css样式。这种方式也是现在很多打包工具最后打包成网页后常用的方式。如：
```html
<style>
  body{
    background-color: #f00;
  }
</style>
```
&emsp;&emsp;**链接方式**
&emsp;&emsp;链接方式指的是使用html头部的head标签引入外部的css文件,也是以前我们做多页应用时常用的方式。如：
```html
<link rel='stylesheet' href='/css/common.css' />
```
&emsp;&emsp;**导入方式**
&emsp;&emsp;导入方式指的是使用css规则引入外部css文件。如：
```html
@import url(/css/common.css);
```
&emsp;&emsp;四种引入方式比较：
优点：
&emsp;&emsp;1. 内联方式的优先级高；js中可以通过dom.style.backgroundColor的方式来设置或获取值。
&emsp;&emsp;2. 嵌入方式优先级比内联样式次之，html、css集中在一个html文件里面，方便查看。
&emsp;&emsp;3. 链接方式css代码只存在于单独的css文件中，具有良好的可维护性，需要修改公共样式时，只需要修改公共样式文件里面的css代码就可以了；
&emsp;&emsp;&emsp;&emsp;当多个页面想要引入同一个css文件时，可以轻易引入，利于css的重用；
&emsp;&emsp;&emsp;&emsp;浏览器可以缓存css文件，在加载新页面或刷新页面时，浏览器可以使用缓存的css文件，不必重新下载；
&emsp;&emsp;&emsp;&emsp;HTML 文件被加载时，link 引用的文件会同时被加载，方便页面在加载了部分HTML时渲染展示部分页面给用户浏览；
&emsp;&emsp;&emsp;&emsp;利于seo，搜索引擎爬取网页时可以少下载些数据；
&emsp;&emsp;&emsp;&emsp;浏览器下载html文件时，可以分开下载html和css文件，加快下载速度。
缺点：
&emsp;&emsp;1. 内联方式样式写到style属性里面，不利于重用，也不利于html的维护；内联方式的css优先级过高，不利于后期修改重写，如切换class时修改标签样式。
&emsp;&emsp;2. 嵌入方式只对当前文档有效，如果多个文档需要引入相同的css时，只有重复写css代码，这样会导致代码冗余；如果html页面是后端渲染的动态替换的文件，不利于浏览器缓存css文件；不利于seo。
&emsp;&emsp;3. 导入方式是在css里面引入css文件，如果需要兼容低版本浏览器，浏览器不支持此方式；导入语句要写在样式表的开头，否则无法正确导入外部文件；需要等页面全部下载完毕再被加载，不利于首屏渲染，甚至可能导致页面闪烁。
&emsp;&emsp;从上面分析，我们可以看出来，页面中，我们应该尽量使用link链接方式来引入css样式。