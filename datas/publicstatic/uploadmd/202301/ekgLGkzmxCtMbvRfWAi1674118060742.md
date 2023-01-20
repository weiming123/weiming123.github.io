#### &emsp;&emsp;Storage 是什么？
&emsp;&emsp;作为 Web Storage API 的接口，Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。

#### &emsp;&emsp;sessionStorage 是什么？
&emsp;&emsp;浏览器提供的操作一个域名的会话存储的对象，允许你访问一个对应当前源的 session Storage 对象。存储在 sessionStorage 里面的数据在页面会话结束时会被清除。

#### &emsp;&emsp;localStorage 是什么？
&emsp;&emsp;浏览器提供的操作一个域名的本地存储的对象，允许你访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。localStorage 类似 sessionStorage，但其区别在于：存储在 localStorage 的数据可以长期保留。

#### &emsp;&emsp;为什么要有 localStorage 和 sessionStorage ？
&emsp;&emsp;localStorage 和 sessionStorage 是HTML5新增的web前端存储数据的方法，在这之前，我们常用cookie来作为前端存储数据的方法。但是cookie相对于 localStorage 和 sessionStorage 来说有如下几个缺点：
1、使用不方便，没有对应的方法可以方便的存取存储的数据，需要我们自己去封装对应方法。
2、存储空间大小太小，通常为4KB，具体大小和浏览器自己实现有关。
3、存储的数据条数有限制，具体数量各个浏览器也可能不同。
4、与服务器端通信时，每次都会把此时域名、路径下相应cookie放在HTTP 请求头 Cookie 上，本次请求不需要的数据也可能会被带上，浪费了带宽和流量。
tips:了解更多关于Cookie 的知识可以查看:[https://liu_yong.gitee.io/blogs/88/](https://liu_yong.gitee.io/blogs/88/)

&emsp;&emsp;因此在HTML5中推出了新的前端存储数据的方式，就是 localStorage 和 sessionStorage。

#### &emsp;&emsp;localStorage 和 sessionStorage 数据的格式是什么样的？
&emsp;&emsp;它们都是以 key/value 键值对的方式存储的，键和值始终是字符串（与对象一样，整数键将自动转换为字符串）。

#### &emsp;&emsp;sessionStorage 和 localStorage 有什么区别
&emsp;&emsp;1、**生命周期**：localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。
&emsp;&emsp;2、**同一浏览器同源的不同标签页面之间的数据共享**：同一浏览器同源的不同标签页面之间的数据,localStorage 是可以共享的，也就是说我们在一个标签页设置了某个属性值，那么在另一个标签页也是可以获取到的；但是sessionStorage 在一个标签页设置了某个属性值，那么在另一个标签页也是获取不到的。

#### &emsp;&emsp;sessionStorage 有什么特点？
1、页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
2、在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 session cookies 的运行方式不同。
3、打开多个相同的URL的Tabs页面，会创建各自的sessionStorage。
4、关闭对应浏览器tab，会清除对应的sessionStorage。
5、js字符串是以 UTF-16 编码存储的

#### &emsp;&emsp;sessionStorage 和 localStorage 有什么相同点？
&emsp;&emsp;1、一个源的 localStorage 和 sessionStorage 容量上限可能因为浏览器的不同而有所不同，目前如谷歌浏览器上限是5-10M，是包括了key和value加在一起的。在下测试的时候发现谷歌和火狐 key和value加在一起 都恰好存了5M的字符，但是按照js 字符串是使用 UTF-16 编码的，测试使用的“的”这个字符，一个字符应该占了两个字节，这么算下来的话，存储空间的上限应该是10MB。
&emsp;&emsp;2、localStorage 理论上是只要用户和js不去删除存储数据就不会被清理，但是iOS从 5.1之后，移动端的Safari将localStorage数据存储在cache文件中，在操作系统的要求下，会偶尔进行清除，特别是空间不足时；其他的系统也可能会有被清理的时候，所以理论上是无法完全保证数据不会被清理的。

#### &emsp;&emsp;浏览器端js如何使用设置 localStorage 和 sessionStorage ？
&emsp;&emsp;localStorage 和 sessionStorage 都提供了 setItem 方法，可以新建或设置一条数据，使用方法：
&emsp;&emsp;storage.setItem(key,value);
&emsp;&emsp;key、value 都是字符串

#### &emsp;&emsp;浏览器端js如何获取 localStorage 和 sessionStorage ？
&emsp;&emsp;localStorage 和 sessionStorage 都提供了 setItem 方法，可以新建或设置一条数据，使用方法：
&emsp;&emsp;storage.getItem(key);
&emsp;&emsp;key是字符串，返回null或value字符串

#### &emsp;&emsp;localStorage 和 sessionStorage 有哪些常用的方法和属性？
&emsp;&emsp;setItem、getItem、removeItem、clear

### &emsp;&emsp;localStorage 实现在同一浏览器同源的不同标签页面之间的互相通信功能、注意事项(多个页面之间的通信)：
&emsp;&emsp;可以在window上面注册storage事件，同一浏览器同源的不同于当前标签页面进行localStorage.setItem\removeItem\clear操作时，就会触发当前页面的storage事件,需要注意的是：
1、当前页面localStorage 操作不会触发当前页面的storage事件
2、其他页面使用 setItem 方法设置localStorage 数据值时，如果value和之前的是一样的，那么也不会触发当前页面的storage 事件
3、删除一个根本就不存在的存储项也不会触发当前页面的storage 事件

代码示例：
```JavaScript
window.addEventListener('storage',function(event){
    console.log('---------------------');
    console.log(event);
    console.log('================');
})
```
event 对象的主要的属性：
|属性名|是否只读|数据类型|属性描述|
|-|-|-|-|
|target|是|EventTarget|事件目标(DOM 树中的最大目标)|
|type|是|DOMString|事件的类型|
|bubbles|是|Boolean|事件通常是否会出现冒泡|
|cancelable|是|Boolean|事件是否可取消|
|key|是|DOMString (string)|键更改时|
|oldValue|是|DOMString (string)|正在更改键的旧值|
|newValue|是|DOMString (string)|正在更改键的新值|
|url|是|DOMString (string)|键更改的文档的地址|
|storageArea|是|Storage|受影响的存储对象|

#### &emsp;&emsp;下面我们来封装一个浏览器端js操作 localStorage 的工具：
tips:为什么封装localStorage 而不封装sessionStorage ？因为sessionStorage 功能比较全了，而localStorage 在使用的时候，如果希望设置过期时间等，原生并未提供，所以我们这里做一下localStorage 的封装。
```JavaScript
/**
 * @description
 * @author liuyong
 */
export default class StorageLocal {
    constructor(type = "localStorage", global = window) {
        this.global = global;
        this.type = type;
        if (!this.storageAvailable[type]) {
            return `您的浏览器还不支持 ${type},建议您使用最新的谷歌或火狐浏览器查看`;
        }
    }

    /**
     * @description 获取前端缓存的值
     * @param {string} key storage缓存的key
     * @param {string} type "localStorage"或"sessionStorage"
     * @return 如果key的value已经过期或者key不存在返回null，
     *          如果存在返回value，如果存的是js对象，那么返回的也是一个新的js对象
     */
    getItem(key, type) {
        let _type = type || this.type;
        let _value = this.global[_type].getItem(key);
        if (_value) {
            try {
                let _val = JSON.parse(_value);
                if (!_val.time || _val.time + _val.maxAge >= Date.now()) {
                    return _val.value;
                } else {
                    this.removeItem(key, _type);
                }
            } catch (e) {
                return _value;
            }
        } else {
            this.removeItem(key, _type);
        }
        return null;
    }

    /**
     * @description 设置前端缓存的值
     * @param {string} key storage缓存的key
     * @param {string | boolean | number | Object | Array} value storage缓存的值
     * @param {Object} options 如：
     *      {maxAge: 3153600000000},maxAge代表最大缓存时间，默认一百年
     *      {clearAll: false},当存储的时候空间不够的时候，默认清理了过期缓存后空间仍然不够，
     *                        是否要清理之前的所有的缓存来存储当前这条数据缓存，默认为true
     * @param {string} type "localStorage"或"sessionStorage"
     * @return 如果设置成功了返回true，
     *          如果失败了返回null
     */
    setItem(key, value, options = {}, type) {
        let valStr = JSON.stringify(
            Object.assign(
                {
                    value,
                    time: Date.now(),
                    maxAge: 3153600000000,
                    clearAll: true
                },
                options
            )
        );
        let _type = type || this.type;
        try {
            this.global[_type].setItem(key, valStr);
            return true;
        } catch (e) {
            if (e.code === 22 || e.name === "QuotaExceededError") {
                console.warn(e);
                try {
                    this.clearOverDue(_type);
                    this.global[_type].setItem(key, valStr);
                    return true;
                } catch (e) {
                    console.warn(e);
                    if (options.clearAll) {
                        try {
                            this.clear(_type);
                            this.global[_type].setItem(key, valStr);
                            return true;
                        } catch (e) {
                            console.warn(e);
                            return null;
                        }
                    } else {
                        return null;
                    }
                }
            }
            console.warn(e);
            return null;
        }
    }

    /**
     * @description 清除掉过期的缓存
     * @param {string} type  "localStorage"或"sessionStorage"
     */
    clearOverDue(type) {
        let _type = type || this.type;
        let keys = Object.keys(this.global[_type]);
        for (let i = 0, len = keys.length; i < len; i++) {
            this.getItem(keys[i], _type);
        }
    }
    clear(type) {
        return this.global[type || this.type].clear();
    }
    removeItem(key, type) {
        return this.global[type || this.type].removeItem(key);
    }

    /**
     * @description 获取原始的"localStorage"或"sessionStorage"浏览器内置js对象
     * @param {string} type  "localStorage"或"sessionStorage"
     */
    getOrigin(type) {
        return this.global[type || this.type];
    }

    /**
     * @description 判断前端是否能使用"localStorage"或"sessionStorage"
     * @param {string} type  "localStorage"或"sessionStorage"
     */
    storageAvailable(type) {
        var storage;
        try {
            storage = this.global[type];
            var x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                (e.code === 22 ||
                    e.code === 1014 ||
                    e.name === "QuotaExceededError" ||
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                storage &&
                storage.length !== 0
            );
        }
    }
}




// 使用示例
import StorageLocal from "@assets/js/storageLocal.js";

let storageLocal = new StorageLocal();
storageLocal.setItem("test1", "sdfasfasfwerkjfj");
storageLocal.setItem("test2", "sdfasfasfwerkjfj", {
    maxAge: 1200000
});
storageLocal.setItem("test2", "sdfasfasfwerkjfj", {
    maxAge: 120,
    clearAll: false
});
setTimeout(() => {
    storageLocal.clearOverDue();
}, 3000);
```

其他：
[浏览器同源策略](https://liu_yong.gitee.io/blogs/96/)
[web前端存储之cookie](https://liu_yong.gitee.io/blogs/88/)

参考资料：
[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/storage_event](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/storage_event)
[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
