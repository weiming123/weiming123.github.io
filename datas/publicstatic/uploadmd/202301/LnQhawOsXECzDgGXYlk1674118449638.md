#### &emsp;&emsp;什么是同源？
&emsp;&emsp;URL由协议、主机（域名）、端口、路径、参数、锚点等组成，如果两个URL的协议、主机（域名）和端口都相同，则这两个 URL 是同源的。相反，只要协议，主机（域名），端口有任何一个的不同，就是不同源的。
&emsp;&emsp;在页面中通过 about:blank 或 javascript: URL 执行的脚本会继承打开该 URL 的文档的源，因为这些类型的 URLs 没有包含源服务器的相关信息。
&emsp;&emsp;例如，about:blank 通常作为父脚本写入内容的新的空白弹出窗口的 URL（例如，通过  Window.open()  ）。 如果此弹出窗口也包含 JavaScript，则该脚本将从创建它的脚本那里继承对应的源。

#### &emsp;&emsp;什么是浏览器同源策略？
&emsp;&emsp;浏览器基于安全考虑，限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。
&emsp;&emsp;web前端常说的跨域其实就是因为 **浏览器同源策略** 的限制。

#### &emsp;&emsp;为什么浏览器要有同源策略？
&emsp;&emsp;浏览器的同源策略其实就是为了增加web网站的安全性而添加的。同源策略是浏览器的一个重要的安全策略，它能帮助阻隔恶意文档，减少可能被攻击的媒介。
&emsp;&emsp;想像一下，如果我们能在浏览器上任意的访问其他源的资源、后端接口、前端内容。。。那么会造成多少问题。
&emsp;&emsp;**任意的访问其他源的资源：** 如果我在自己网站上放很多免费的游戏、小说、视频等等，吸引用户来浏览器之类的，我的页面在这个会去尝试冒用用户身份请求各个银行转账的接口、盗取各种用户信息等等，哦，甚至盗你QQ(●'◡'●)
&emsp;&emsp;**任意的访问其他源的后端接口：** 可能轻易就可能造成DDOS、SQL注入等攻击等效果了。只要用各种免费手段扩大用户量就行了
&emsp;&emsp;**任意的访问其他源的前端内容：** 自己网站不放什么东西，但是用户浏览器的时候去盗取别人网站的内容来增加自己网站的流量等，不但节省了自己服务器成本还节省了填充内容的时间等等。。。
&emsp;&emsp;。。。
&emsp;&emsp;总之，如果没有浏览器同源策略，那么上面的那些攻击将会非常容易，黑客入门门槛可能又低了很多了，当然，也可能浏览器就直接下架了。。。(●ˇ∀ˇ●)

#### &emsp;&emsp;那么非同源的资源是否就一定不能读写了呢？
&emsp;&emsp;其实就是跨域是否一定行不通了呢？
&emsp;&emsp;当然不是了。
&emsp;&emsp;跨域依然是有很多方法可以在合规的情况下被允许的，比如HTML5 里面的CORS、服务器端转发、JSONP 等等，另外还有一些HTML标签也是不受限制的，如 img、iframe、script、link、video等，这些标签可以加载非同源的资源。
&emsp;&emsp;关于跨域的手段和方法我们在其他文章再做分析。


其他：
[认识 HTTP URL 及用js操作URL](https://liu_yong.gitee.io/blogs/93/)
[URI、URL、URN之间的区别和联系是什么](https://liu_yong.gitee.io/blogs/94/)

参考资料：
[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
[同源策略](https://baike.baidu.com/item/%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5/3927875?fr=aladdin)
