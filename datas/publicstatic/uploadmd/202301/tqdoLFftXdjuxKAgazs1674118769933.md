#### &emsp;&emsp;什么是 URL ？
&emsp;&emsp;URL 的全称是：Uniform Resource Locators，即：统一资源定位系统，是用于指定信息位置的表示方法。

#### &emsp;&emsp;URL 的格式是什么样的？
&emsp;&emsp;URL 组成为： <方案>:<方案描述部分>
&emsp;&emsp;程序在解释URL的时候应该视方案名称中的大写字母和小写字母一样。（例如：视“HTTP”和“http”是一样的）。

#### &emsp;&emsp;URL 目前有哪些方案？
&emsp;&emsp;**ftp：** File Transfer protocol(文件传输协议)
&emsp;&emsp;**http：** Hypertext Transfer Protocol(超文本传输协议)
&emsp;&emsp;**gopher：** The Gopher protocol(Gopher协议)
&emsp;&emsp;**mailto：** Electronic mail address(电子邮件地址)
&emsp;&emsp;**news：** USENET news(USENET新闻)
&emsp;&emsp;**nntp：** USENET news using NNTP access(使用NNTP访问的USENET新闻)
&emsp;&emsp;**telnet：** Reference to interactive sessions(交互式会话访问)
&emsp;&emsp;**wais：** Wide Area Information Servers(广域信息服务系统)
&emsp;&emsp;**file：** Host-specific file names(特殊主机文件名)
&emsp;&emsp;**prospero：** Prospero Directory Service(prospero目录服务)

#### &emsp;&emsp;什么是 HTTP URL ？
&emsp;&emsp;HTTP是一种简单的应用层协议，更多关于 HTTP 协议可以查看 [前端常用网络协议](https://liu_yong.gitee.io/blogs/49/) ，HTTP  URL 定义了 “http”方案用于通过http协议定位网络资源的语法和语义。也称网络地址、网址等

#### &emsp;&emsp;HTTP URL 的格式是什么样的？
&emsp;&emsp;HTTP URL 的格式如下：
protocol://hostname[:port]/path/[?query]

&emsp;&emsp;当然我们更常见的是如下的格式：
protocol//hostname[:port][pathname][search][hash]

**protocol**(协议): 通常是 http: 或 https:
**hostname**(主机名): 如我们网站的 www.talktocomputer.site
**port**(端口号): http协议默认是80端口，https协议默认443端口，主机 端监听该端口上的 TCP 连接建立通信(HTTP协议是应用层协议，底层是TCP协议)
**pathname**(路径): 由一或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。如果没有指定目录或文件地址，默认为“/”，
**search**(查询): 用于给动态网页（如使用 java/nodes.js 等技术制作的网站）传递参数，可有多个参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。
**hash**(信息片断): 用于指定网络资源中的片断。例如一个网页中有多个名词解释，可使用hash直接定位到某一名词解释。hash值不会被发送到主机端，因此通过普通方式访问主机端是获取不到hash值的。

#### &emsp;&emsp;通过js获取HTTP URL 的各部分数据？
&emsp;&emsp;如下url，我们通过js获取url各组成的值：
https://liu_yong.gitee.io/abaout/?category_id=1&pageNo=1&sort_order_by=sort_order#articleDetaile=88
```javascript
location.protocol//设置或返回当前 URL 的协议。
"https:"

location.host//设置或返回主机名和当前 URL 的端口号。
"www.talktocomputer.site"

location.hostname//设置或返回当前 URL 的主机名。
"www.talktocomputer.site"

location.port//设置或返回当前 URL 的端口号。http协议默认是80端口，https协议默认443端口，默认端口返回空字符串
""

location.pathname//设置或返回当前 URL 的路径部分。默认"/"
"/abaout/"

location.search//设置或返回从问号 (?) 开始的 URL（查询部分）。
"?category_id=1&pageNo=1&sort_order_by=sort_order"

location.hash//设置或返回从井号 (#) 开始的 URL（锚）。
"#articleDetaile=88"
```

参考资料：
[https://www.ietf.org/rfc/rfc1738.txt](https://www.ietf.org/rfc/rfc1738.txt)
[https://www.w3.org/Protocols/rfc2616/rfc2616.html](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
[https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F/5937042?fromtitle=URL&fromid=110640&fr=aladdin](https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F/5937042?fromtitle=URL&fromid=110640&fr=aladdin)
[https://baike.baidu.com/item/URL%E6%A0%BC%E5%BC%8F/10056474?fr=aladdin](https://baike.baidu.com/item/URL%E6%A0%BC%E5%BC%8F/10056474?fr=aladdin)
