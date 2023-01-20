&emsp;&emsp;&lt;meta&gt; 标签位于文档的头部，不包含任何内容，是html语言head区的一个辅助性标签。<meta> 元素可提供有关页面的元信息，比如针对搜索引擎和更新频度的描述和关键词。

&emsp;&emsp;html5中meta标签共有四个属性，它们分别是charset、content、http-equiv、name属性。meta标签的作用有：搜索引擎优化（SEO），响应式设计，定义页面使用语言，自动刷新并指向新的页面，实现网页转换时的动态效果，控制页面缓存等。

#### &emsp;&emsp;一、charset属性：

&emsp;&emsp;在html4中设定页面使用的字符集:
```html
<meta http-equiv="content-type" content="text/html; charset=utf-8">
```

&emsp;&emsp;html5中设定页面使用的字符集：
```html
<meta charset="utf-8">
```

#### &emsp;&emsp;二、content属性：

&emsp;&emsp;这个属性定义与http-equiv属性或者name属性相关的元信息。

#### &emsp;&emsp;三、name属性：

&emsp;&emsp;(1) keywords (关键字)：keywords用来告诉搜索引擎你网页的关键字是什么，虽然现在权重越来越低，但是再低都是有权重的。
```html
<meta name="keywords" content="关键字">
```

&emsp;&emsp;(2) description (网页内容描述) ：description用来告诉搜索引擎你的网站主要内容。
```html
<meta name="description" content="你的网页的内容">
```

&emsp;&emsp;(3) author (作者) ：标注网页的作者。
```html
<meta name="author" content="网页作者">
```

&emsp;&emsp;(4) generator (软件制作) ：代表说明网站的采用的什么软件制作。
```html
<meta name="generator" content="信息参数"/>
```

&emsp;&emsp;(5) revised (定义页面的最新版本) 
```html
<meta name="revised" content="weiming, 2016/7/9/" />
```

&emsp;&emsp;(6) copyright (网站版权信息) ：代表说明网站版权信息。
```html
<meta name="copyright" content="" />
```

&emsp;&emsp;(7) revisit-after (网站重访) ：告诉搜索引擎多少天来收录一次数据
```html
<meta name="revisit-after" content="5days" />
```

&emsp;&emsp;(8) robots (机器人向导) ：robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。比如我们有的后台管理系统就不需要搜索引擎收录。
```html
<meta name="robots" content="none">
```
content具体参数如下：
all：文件将被检索，且页面上的链接可以被查询；
none：文件将不被检索，且页面上的链接不可以被查询；
index：文件将被检索；
follow：页面上的链接可以被查询；
noindex：文件将不被检索，但页面上的链接可以被查询；
nofollow：文件将被检索，但页面上的链接不可以被查询。

&emsp;&emsp;(9) format-detection (格式检测) ：检测html里的一些格式。
```html
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="telephone=no,email=no,adress=no" />
```
content具体参数如下：
telephone，禁止了把数字转化为拨号链接，默认开启；
email，禁止作为邮箱地址，默认开启；
adress，禁止跳转至地图，默认开启。

&emsp;&emsp;(10) X-UA-Compatible ：如果用户有你设置的浏览器,优先使用设置的浏览器来渲染页面。如下，优先使用ie最新的版本或chrome内核渲染页面。
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

&emsp;&emsp;(11) renderer (浏览器内核控制) ：控制浏览器选择何种内核渲染。如下，优先使用webkit内核渲染页面。
```html
<meta name="renderer" content="webkit|ie-comp|ie-stand" />
```

&emsp;&emsp;(12) viewport (视窗) ：设置视窗布局。
```html
<meta name=”viewport” content=”width=device-width,initial-scale=1″ />
```
content具体参数如下：
width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）；  
height：和 width 相对应，指定高度；  
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例；  
maximum-scale：允许用户缩放到的最大比例；  
minimum-scale：允许用户缩放到的最小比例；  
user-scalable：用户是否可以手动缩放，值为"yes"或"no"。

#### &emsp;&emsp;四、http-equiv属性：

&emsp;&emsp;(1) expires (期限) ：可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。必须使用GMT的时间格式，或直接设为0(数字表示多少时间后过期)。
```html
<meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT">
```

&emsp;&emsp;(2) refresh (刷新) ：自动刷新并指向新页面。如下，停留3秒后，自动刷新到百度。
```html
<meta http-equiv="Refresh" content="3;URL=http://www.baidu.com">
```

&emsp;&emsp;(3) set-cookie (cookie设定) ：设置cookie过期时间，如果cookie过期，那么存盘的cookie将被删除。必须使用GMT的时间格式。
```html
<Meta http-equiv="Set-Cookie" Content="cookievalue=xxx; expires=Mon,12 August 20016 00:00:00 GMT>
```

&emsp;&emsp;(4) pragma (cache模式) ：禁止浏览器从本地计算机的缓存中访问页面内容。
```html
<meta http-equiv="Pragma" content="no-cache"> 
```

&emsp;&emsp;(5) window-target (显示窗口的设定) ：强制页面在当前窗口以独立页面显示。如下：防止别人在框架里调用自己的页面。
```html
<meta http-equiv="Window-target" content="_top">
```
content具体参数如下：
_blank 在新窗口显示 ；  
_top 当前整个窗口显示 ；  
_parent 父容器显示，比如框架嵌套 ；  
_self 当前容器显示，比如框架嵌套。

&emsp;&emsp;(6) Cache-Control (缓存机制) ：指定请求和响应遵循的缓存机制。
```html
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-siteapp" />避免转码
```
content具体参数如下：
no-cache指示请求或响应消息不能缓存；  
no-store用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存；  
max-age指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应；  
min-fresh指示客户机可以接收响应时间小于当前时间加上指定时间的响应；  
max-stale指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。

&emsp;&emsp;(7) Page-Enter、Page-Exit (进入与退出) ：页面被载入和调出时的一些特效，但是所加网页不能是一个Frame页
```html
<meta http-equiv="Page-Enter" content="revealTrans(duration=0.5,transition=10)" />
<meta http-equiv="Page-Exit" content="revealTrans(duration=0.5,transition=10)" />
```
content具体参数如下：
duration表示滤镜特效的持续时间（单位：秒）。
transition滤镜类型。表示使用哪种特效，取值为0-23:

0矩形缩小

1矩形扩大

2 圆形缩小

3 圆形扩大

4 下到上刷新

5 上到下刷新

6 左到右刷新

7 右到左刷新

8 竖百叶窗

9 横百叶窗

10 错位横百叶窗

11 错位竖百叶窗

12 点扩散

13 左右到中间刷新

14 中间到左右刷新

15 中间到上下

16 上下到中间

17 右下到左上

18 右上到左下

19 左上到右下

20 左下到右上

21 横条

22 竖条

23 以上22种随机选择一种

&emsp;&emsp;(8) imagetoolbar (图片工具栏) ：指定是否显示图片工具栏。当为false代表不显示，当为true代表显示。
```html
<meta http-equiv="imagetoolbar" content="false" />
```