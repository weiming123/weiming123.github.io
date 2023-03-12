&emsp;&emsp;我们知道，HTTP协议中，客户端和服务器处理时起至关重要作用的信息几乎都在报文首部。请求首部字段是从客户端往服务器端发送的请求报文中所使用的字段，用于补充请求的附加信息、客户端信息、对响应内容香港的优先级等内容。这里，我把一些常用的http请求头总结了下。
|请求字段|说明|示例|
|-|-|-|
|Accept|通知服务器，用户代理能够处理的媒体类型及媒体类型的相对优先级。可使用 type/subtype 这种形式一次指定多种媒体类型。可设置q值代表权重值，默认为1.0，取值范围是0~1，精确到千分位，表示当服务器提供多种内容时，将会首先返回权重值最高的媒体类型。具体可参见[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)|Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8|
|Accept-Charset|用来通知服务器用户代理支持的字符集及字符集的相对优先顺序。另外，可一次性指定多种字符集。与Accept相同的是可用权重q值来表示相对优先级。|Accept-Charset:utf-8|
|Accept-Encoding|告知服务器用户代理支持的内容编码及内容编码的优先级顺序。可一次性指定多种内容编码。常用的如：gzip：由文件压缩程序gzip生成的编码格式；compress：由Unix文件压缩程序compress生成的编码格式；deflate：组合使用zlib格式及由deflate压缩算法生成的编码格式；identity：不执行压缩或不会变化的默认编码格式。|Accept-Encoding:gzip,deflate|
|Accept-Language|告知服务器用户代理能够处理的自然语言集，以及自然语言集的相对优先级。可一次性指定多种自然语言集。|Accept-Language:zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2|
|Host|表示服务器的域名以及服务器所监听的端口号。如果网站是用的80端口或https443端口，则端口号可以省略。|Host:www.talktocomputer.site|
|User-Agent|浏览器的身份标识字符串|User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0|
|Connection|表示是否需要持久连接。http1.0默认是短连接，即发送一次http请求就会建立、断开一次tcp连接。http1.1默认是长连接，即tcp连接建立后可以发送多个http请求响应，连接在空闲一段时间后或者设置close之后关闭|Connection:keep-alive|
|Cookie|服务器或前端设置的cookie内容|Cookie: PHPSESSID =9k0el0iptft8g74cnsklh2obb1|
|Cache-Control|用来指定当前的请求/回复中的，是否使用缓存机制。|Cache-Control: no-cache|
|Content-Length|请求体的长度|Content-Length:348|
|Transfer-Encoding|文件传输编码。如果设置了Transfer-Encoding，那么Content-Length会被忽视，因为实体长度不一定等于编码后的传输长度|Transfer-Encoding:chunked|
|Content-Type|表示请求的资源属于什么MIME类型。|Content-Type: application/x-www-form-urlencoded|
|Referer|表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。Referer其实是Referrer这个单词，但RFC制作标准时给拼错了，后来也就将错就错使用Referer了。|Referer: https://www.baidu.com|