#### &emsp;&emsp;为什么要给URL编码？
&emsp;&emsp;作为一个 前端er，对于URL是再熟悉不过了，我们知道URL主要由协议、主机、端口、路径、参数、锚点等组成，而这些都是有标识符的，比如参数部分由 "?" 和 "#" 分割出的部分，而每对参数之间以 & 符合分割，一对参数的key 、 value又以 = 分割，那么如果我们现在想在参数中传一个value是一个URL的参数呢？如：
```HTTP
https://liu_yong.gitee.io/blogs/93/?shareurl=https://liu_yong.gitee.io/?pageNo=1&routeLabelids=1&mytarget=mobile&source=pc
```
如上URL，我们想传三个参数：
&emsp;&emsp;分享链接：shareurl=https://liu_yong.gitee.io/?pageNo=1&routeLabelids=1
&emsp;&emsp;分享目标：mytarget=mobile
&emsp;&emsp;来源平台：source=pc

&emsp;&emsp;但是，我们发现，我们的链接中的参数shareurl的value本身是一个连接，而这个连接又带了参数，就这样传递的话难免会被理解为原连接的参数，或者干脆傻傻分不清楚究竟哪些是value的，哪些是原链接的参数对了。
&emsp;&emsp;另外，URL的编码格式采用的是ASCII码，如果我们的链接中带了中午或者非ASCII码表中的字符怎么办，浏览器是丢弃还是怎么办。。。
&emsp;&emsp;编程我们就要尽量严谨，这样不但不会浪费我们的时间，还有可能因此减少很多意外的bug和减少很意外的损失，让我们的系统更加稳定、安全、强大、易于维护和扩展。。。

### &emsp;&emsp;js如何给URL编码？
&emsp;&emsp;我们给URL编码通常是用在传参数的时候给参数的key、value编码，域名和路径我们一般不会用不符合URL规范的字符。
&emsp;&emsp;这里，我们先来看看js编码、解码的几个方法：encodeURIComponent、encodeURI、escape、decodeURIComponent、decodeURI、unescape。这些方法又有什么区别？

**encodeURIComponent**: 把字符串作为 URI 组件进行编码。 该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。 其他字符（比如 ：;/?: @&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。
**decodeURIComponent()** 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。

**encodeURI**: 把字符串作为 URI 进行编码。 该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： , / ? : @ & = + $ # 。
**decodeURI()** 函数可对 encodeURI() 函数编码过的 URI 进行解码。

**escape**: 可对字符串进行编码（ Unicode格式 ）。该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： * @ - _ + . / 。其他所有的字符都会被转义序列替换。escape 已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，尽量不要使用他。
**unescape()** 函数可对通过 escape() 编码的字符串进行解码。 unescape 方法不应用于解码“统一资源标识符”(URI)。

下面我们来写下设置、获取URL参数的方法：
```JavaScript
function setURLParams(params){
    let searchs=''
    for(let i in params){
        searchs += encodeURIComponent(i)+'='+encodeURIComponent(params[i])+'&'
    }
    return searchs.slice(0,-1)
}
function getURLParams(key,search){
    let searchs=search.split('&')
    for(let i = 0,len = searchs.length;i<len;i++){
        let vals=searchs[i].split('=')
        let _tmpkey=decodeURIComponent(vals[0])
        if(_tmpkey==key){
            return decodeURIComponent(vals[1])
        }
    }
}

// 测试：
console.log(getURLParams('wd',location.search.slice(1)))
setURLParams({target:'pc','myName':'未知的名人','sdfs&fds':'*fs1-&fds'})
```

其他：
[认识 HTTP URL 及用js操作URL](https://liu_yong.gitee.io/blogs/93/)
[URI、URL、URN之间的区别和联系是什么](https://liu_yong.gitee.io/blogs/94/)

参考资料：
[encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
[encodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
[escape](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape)
[decodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
[decodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
[unescape](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape)
[RFC1738文档](https://www.ietf.org/rfc/rfc1738.txt)
[RFC3986文档](https://www.ietf.org/rfc/rfc3986.txt)
