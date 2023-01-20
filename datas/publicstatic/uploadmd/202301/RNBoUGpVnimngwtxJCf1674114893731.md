#### &emsp;&emsp;Cookie 是什么？
&emsp;&emsp;Cookie 是存储在电脑里面的文本文件中的数据。

#### &emsp;&emsp;为什么要有 Cookie？
&emsp;&emsp;因为http是无状态的协议，所以要想知道来访问网站的用户是哪个的话，就必须要有一个能标识用户身份的变量，于是cookie诞生了：当用户访问网站的时候，服务器可以指定浏览器存储一些数据，如session id等，用户在每一次访问网站的时候都会把这个网站存储的cookie都发送到服务器，这样服务器端根据这些标识数据就能知道谁是谁了。

#### &emsp;&emsp;Cookie 数据的格式是什么样的？
&emsp;&emsp;Cookie 是一系列的名称/值对组成，形式为 cookie-name=cookie-value。名称/值对之间用分号和空格 (' ; ')隔开。而每条Cookie数据都可以指定如下的属性：
&emsp;&emsp;**name** (必须)：要创建或覆盖的cookie的名字。
&emsp;&emsp;**value** (必须)：要存储的数据的值。
&emsp;&emsp;**Expires/Max-Age** (非必须，默认会话cookie，网页关闭结束): 指定了cookie的有效时间。默认情况下cookie是暂时存在的，他们存储的值只在浏览器会话期间存在，当用户退出浏览器后这些值也会丢失，如果想让cookie存在一段时间，就要为cookie设置一个有效时间。
&emsp;&emsp;**Expires** (非必须)：cookie 的最长有效时间，形式为符合 HTTP-date 规范的时间戳。参考 Date 可以获取详细信息。如果没有设置这个属性，那么表示这是一个会话期 cookie 。一个会话结束于客户端被关闭时，这意味着会话期 cookie 在彼时会被移除。然而，很多Web浏览器支持会话恢复功能，这个功能可以使浏览器保留所有的tab标签，然后在重新打开浏览器的时候将其还原。与此同时，cookie 也会恢复，就跟从来没有关闭浏览器一样。
&emsp;&emsp;**Max-Age** (非必须): 在 cookie 失效之前需要经过的秒数。秒数为 0 或 -1 将会使 cookie 直接过期。一些老的浏览器（ie6、ie7 和 ie8）不支持这个属性。对于其他浏览器来说，假如二者 （指 Expires 和Max-Age） 均存在，那么 Max-Age 优先级更高。（注意大小写，前面我用小写的max-age，结果一直没起作用，直到用Max-Age才生效）
&emsp;&emsp;**Domain** (非必须，默认当前域名): 指定 cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。与之前的规范不同的是，域名之前的点号会被忽略。假如指定了域名，那么相当于各个子域名也包含在内了。
&emsp;&emsp;**Path** (非必须，默认当前路径): 指定一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。字符  %x2F ("/") 可以解释为文件目录分隔符，此目录的下级目录也满足匹配的条件（例如，如果 path=/docs，那么 "/docs", "/docs/Web/" 或者 "/docs/Web/HTTP" 都满足匹配的条件）。
&emsp;&emsp;**Secure** (非必须，默认HTTP中即可传输): 一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器。然而，保密或敏感信息永远不要在 HTTP cookie 中存储或传输，因为整个机制从本质上来说都是不安全的，比如前述协议并不意味着所有的信息都是经过加密的。 注意：非安全站点（http:）已经不能再在 cookie 中设置 secure 指令了（在Chrome 52+ and Firefox 52+ 中新引入的限制）。
&emsp;&emsp;**HttpOnly** (非必须，默认js脚本可以设置、获取cookie): 设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由  Document.cookie 属性、XMLHttpRequest 和  Request APIs 进行访问，以防范跨站脚本攻击（XSS）。
&emsp;&emsp;**SameSite** (非必须，默认Lax（支持的浏览器）或 None): 设定一条 cookie 能否随着跨域请求一起发送，这样可以在一定程度上防范（CSRF）跨站请求伪造攻击。SameSite 可以有下面三种值：
&emsp;&emsp;&emsp;&emsp;**None**：浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
&emsp;&emsp;&emsp;&emsp;**Strict**：浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）
&emsp;&emsp;&emsp;&emsp;**Lax**：与 Strict 类似，当用户从外部站点导航至URL时（例如通过链接）发送。在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到URL时才会发送。如 link 链接。

#### &emsp;&emsp;Cookie 有什么特点？
&emsp;&emsp;1、数据存储在客户端，如果用户删除缓存或浏览器可能会清空数据
&emsp;&emsp;2、每次http请求的时候都会在请求头上带上当前域名的cookie数据，对于当前请求不需要的cookie数据，是在浪费流量
&emsp;&emsp;3、删除cookie的方式通常是使这条数据过期，但是浏览器可能不会立即删除这条数据，这就可能会导致在删除一条cookie数据后，还能再立即去获取这条cookie数据的值。

#### &emsp;&emsp;服务器端如何设置 Cookie？
&emsp;&emsp;服务器端可以在http响应头里设置 Set-Cookie 响应头，在这个响应头里面设置Cookie数据。如在node.js中设置cookie：response.setHeader('Set-Cookie', ['pageFrom=www.talktocomputer.site; HttpOnly', 'language=zh-cmn-Hans; HttpOnly']);

#### &emsp;&emsp;浏览器端js如何使用设置 Cookie？
&emsp;&emsp;浏览器端可以使用js脚本设置 Cookie 数据，如：document.cookie = "pageSource=null; secure"，如某条数据设置为 HttpOnly，那么这条数据js是不能修改的。

#### &emsp;&emsp;服务器端如何获取 Cookie？
&emsp;&emsp;服务器端可以在http请求头里通过 Cookie 请求头来查看客户端发往服务器端的 Cookie 数据；Cookie 每条数据是以 名称/值对 的方式存储的，如果有多条数据，名称/值对 之间用分号和空格 ('; ')隔开；如果用户设置了隐私模式，可能会没有这个请求头。

#### &emsp;&emsp;浏览器端js如何获取 Cookie？
&emsp;&emsp;浏览器端可以使用js脚本获取 Cookie 数据，如：document.cookie；它会返回当前域名下所有的js能访问的cookie，如某条数据设置为 HttpOnly，那么这条数据js是不能访问到的。

#### &emsp;&emsp;下面我们来封装一个浏览器端js操作 Cookie 的工具，写得不好的欢迎轻拍，愿意与大家一起进步,邮箱: [liuyongfov@163.com](mailto:liuyongfov@163.com)：

```javascript
/**
 * @description 操作cookie的工具，注意：
 *  一、所有的key不允许为空字符串；
 *  二、所有的key不允许前后空格，会自动去除前后空格；
 *  三、所有的key以字符串类型存储
 *  四、删除cookie的方式通常是使这条数据过期，但是浏览器可能不会立即删除这条数据，我们这里把删除的cookie的值置为空字符串，但是在一个会话内可能还能获取到这条数据的key，值为undefined
 *  五、考虑到一个浏览器可能打开当前网站多个页面的情况，没有将cookie数据缓存到内存中来，因为那样可能会导致数据不准确
 * @author liuyong
 */
class CookieStorage {
    getAllKeys() {
        let _cookie = document.cookie;
        if (!_cookie) {
            return [];
        }
        let _arr = _cookie.split(/;\s*/);
        let _cookieKeys = [];
        for (let i = 0, len = _arr.length; i < len; i++) {
            let _tarr = _arr[i].split("=");
            _cookieKeys.push(_tarr[0]);
        }
        return _cookieKeys;
    }
    key(_index) {
        if (typeof _index === "undefined") {
            console.error(
                "Failed to execute 'setItem' on 'Storage': 1 argument required, but only 0 present."
            );
            return false;
        }
        let _cookie = document.cookie;
        if (!_cookie) {
            return null;
        }
        let _arr = _cookie.split(/;\s*/);
        let _tmp = _arr[_index];
        if (_tmp) {
            return _tmp.split("=")[0];
        } else {
            return null;
        }
    }
    setItem(_key, _val, props) {
        if (typeof _key === "undefined") {
            console.error(
                "Failed to execute 'setItem' on 'Storage': key is required"
            );
            return false;
        }
        _key = _key.toString().trim();
        if (_key === "") {
            console.error("key不能为空字符串或全是空格的字符串");
            return false;
        }
        if (typeof _val === "undefined") {
            console.error(
                "Failed to execute 'setItem' on 'Storage': 2 argument is required, but only 1 present."
            );
            return false;
        }
        _val = encodeURIComponent(_val);
        let _data = `${_key}=${_val}`;
        if (typeof props === "object" && props !== null) {
            let _propKeys = Object.keys(props);
            for (let i = 0, len = _propKeys.length; i < len; i++) {
                _data += `;${_propKeys[i]}=${props[_propKeys[i]]}`;
            }
        }
        document.cookie = _data;
        return true;
    }
    getItem(_key) {
        if (typeof _key === "undefined") {
            console.error(
                "Failed to execute 'getItem' on 'Storage': 1 argument required, but only 0 present."
            );
            return false;
        }
        _key = _key.toString().trim();
        if (_key === "") {
            console.error("key不能为空字符串或全是空格的字符串");
            return false;
        }
        let _cookie = document.cookie;
        if (!_cookie) {
            return null;
        }
        let _arr = _cookie.split(/;\s*/);
        for (let i = 0, len = _arr.length; i < len; i++) {
            let _tmp = _arr[i];
            let _tarr = _tmp.split("=");
            if (_tarr[0] === _key) {
                return _tarr[1] ? decodeURIComponent(_tarr[1]) : null;
            }
        }
        return null;
    }
    removeItem(_key) {
        return this.setItem(_key, "", {
            Expires: "Thu, 01 Jan 1970 00:00:00 GMT",
            "Max-Age": -1
        });
    }
    clear() {
        this.getAllKeys().forEach(item => {
            this.removeItem(item);
        });
    }
}
export let cookieStorage = new CookieStorage();
```

接下来我们写代码测试下上面的工具：
```javascript
import { cookieStorage } from "@assets/js/storageCookie.js";

console.log(cookieStorage.key(0));
console.log(cookieStorage.getAllKeys());
for (let i = 0; i < 100; i++) {
    cookieStorage.setItem("test" + i, `testvalue${i}；测试：${i}`);
}
console.log(cookieStorage.getAllKeys());
console.log(cookieStorage.getItem("test50"));
cookieStorage.removeItem("test50");
console.log("remove test50 datas");
console.log(cookieStorage.getItem("test50"));
cookieStorage.clear();
console.log("clear all cookie datas");
console.log(cookieStorage.getAllKeys());
console.log(cookieStorage.getItem("test50"));
cookieStorage.setItem("testset", `testsetvalue；测试cookie属性`, {
    "Max-Age": 3600,
    Path: "/test",
    SameSite: "Strict"
});
```

参考资料：
[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview)
[https://baike.baidu.com/item/HTTP/243074](https://baike.baidu.com/item/HTTP/243074)
[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie)
[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie)
[https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)