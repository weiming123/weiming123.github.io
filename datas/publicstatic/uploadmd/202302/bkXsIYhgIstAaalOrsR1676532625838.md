一、在html页面中，把js代码写到script标签里面，script标签一般放在head标签里面或者放在body标签里面（如果放在html标签里面甚至放到html标签外面也可以执行），不过我们一般还是按照规范来，如：
```html
<script>
alert('这里执行了JavaScript代码')
</script>
```


二、js代码在html标签内建的事件属性值中，如：
```HTML
<img src="" alt="测试" onerror="alert('图片加载失败')" />
```


三、js代码放在以.js为扩展名的源文件中，如：
```HTML
<script src="https://cdn2.jianshu.io/shakespeare/_next/static/runtime/webpack-52e044fbd71aae4e241a.js" async=""></script>
```
tips:这里通过script标签的src属性来引入js，如果在script标签里面写了js代码，标签里面的js代码是不会执行的。


四、使用eval来执行js代码，这种情况应该比较少见，不过在某些情况下却是存在这种可能的，比如代码存放在数据库里面，前端拿到后是一段字符串，那么可以使用eval来执行这断js代码，如：
```JavaScript
eval("alert('hello')")
```

##### 这四种方式有些什么优点缺点呢？
1、写在script标签里面的js代码：
&emsp;&emsp;优点：只要html加载成功了，不需要再发起新的http请求连接去请求js文件，不会出现html加载成功了，结果因为js存放的文件有问题或者js地址错误等问题导致js加载失败的问题。
&emsp;&emsp;缺点：不利于代码重用，比如你的js代码需要在多个页面或者多个地方使用，如果每个使用的地方都复制一份代码，那么哪天想要改代码逻辑，可能就得到处找哪里有用到，还得改很多地方，也容易出错，即不利于代码扩展、维护。

2、写在html标签内建的事件属性值中：
&emsp;&emsp;优点：除了和写在script标签里面的js代码里面那些优点，另外js代码不会提前执行，因为html是在浏览器加载后，从上到下逐行解析的，解析到script标签的时候，如果是采用将js代码写在script标签里面的这种方式，也会去执行script标签里面的代码，执行完了之后才会继续解析后面的html，而写在html标签内建的事件属性值的js代码要等到触发相应事件的时候才会去执行这段js代码。
&emsp;&emsp;缺点：和写在script标签里面的js代码里面一样。

3、写在js代码放在以.js为扩展名的源文件中：
优点：
&emsp;&emsp;(1) js代码和html代码分离，方便阅读、管理； 
&emsp;&emsp;(2) js代码可以方便分模块管理，特别是项目大了之后，这点就尤为重要了，可以更方便的维护、重用代码；
&emsp;&emsp;(3) 可以更方便的用打包工具来打包、编译、分割代码；
&emsp;&emsp;(4) 将加载js的script标签放在页面body底部，可以让页面结构、样式更快的呈现在用户面前，减少用户等待、白屏时间；
&emsp;&emsp;缺点：增加了http请求数，因为http请求并发数是有限制的，如chrome在http1.1协议中，一个tcp连接只能同时加载6个http请求

4、使用eval来执行js代码:
&emsp;&emsp;优点：主要是可以把字符串转为可以执行的js代码
&emsp;&emsp;缺点：运行的js代码如果存在安全问题，比如来源的代码本身就怀有恶意；调试bug不容易调试


另外，用户是可以在浏览器里面设置禁止网页执行js代码的，此时无法执行js代码，可能导致我们页面很多功能无法正常使用，也影响用户自己使用，我们可以用noscript标签来提示用户，如：
```html
<noscript>
    <strong>本网站需要运行JavaScript，否则无法正常为您提供服务，请设置允许JavaScript运行</strong>
</noscript>
```
