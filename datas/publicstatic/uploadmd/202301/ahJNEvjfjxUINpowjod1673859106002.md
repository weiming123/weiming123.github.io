#### canvas介绍
HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。canvas是一个矩形区域，我们可以控制其每一像素。
只要浏览器支持，canvas目前支持2d/3d上下文，3d上下文一般就是webgl。我们这里主要讲canvas在2d环境下的知识。
#### ```<canvas>```基本使用
就像span元素那样，做html里面添加canvas画布只要这句话就可以了：
```html
<canvas id="mycanvas" class="mycanvas">
    OH！！您的浏览器居然不支持Canvas绘图功能！建议使用最新的Chrome浏览器！
</canvas>
```
如果浏览器支持canvas就会渲染画布，不会显示元素包含的那句话;如果浏览器不支持canvas，就会显示元素包含的那句话。元素中间包含的那句话你也可以用img这些元素来代替，不支持的浏览器会直接渲染canvas元素包含的元素。
另外，canvas的宽高不要用css来设置，要做元素上直接使用width/height属性设置，或者通过js来设置，可以看我的demo里面的代码。
#### 获取2d渲染上下文
getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
如：
```javascript
let mycanvas = document.getElementById('mycanvas'),
        context = mycanvas.getContext('2d');

```
这里如果浏览器不支持canvas，那么会报错，因为不支持canvas就没有getContext方法了。我们可以通过：
```javascript
let context;
if (mycanvas.getContext){
  context = mycanvas.getContext('2d');
  //支持时需要执行的代码
} else {
  //不支持canvas时执行的代码
}
```
我们这里就先来个hello world，算是开头了吧。

代码见：[https://gitee.com/liu_yong/study/blob/master/html5/canvas/views/helloworld.ejs](https://gitee.com/liu_yong/study/blob/master/html5/canvas/views/helloworld.ejs)