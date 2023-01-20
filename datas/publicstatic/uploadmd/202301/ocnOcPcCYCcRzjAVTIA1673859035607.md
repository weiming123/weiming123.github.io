这里，我们先列下会学到用到canvas的属性和方法：
1. fillStyle:设置或返回用于填充绘画的颜色、渐变或模式。
2. strokeStyle:设置或返回用于笔触的颜色、渐变或模式。
3. lineCap:设置或返回线条末端线帽的样式。属性值可取：butt (默认。向线条的每个末端添加平直的边缘),round(向线条的每个末端添加圆形线帽),square(向线条的每个末端添加正方形线帽)。注意："round" 和 "square" 值会使线条略微变长。
4. lineJoin:设置或返回所创建边角的类型，当两条线交汇时。属性值可取：bevel(创建斜角),round(创建圆角),miter(默认。创建尖角)。注意："miter" 值受 miterLimit 属性的影响。
5. miterLimit:设置或返回最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。只有当 lineJoin 属性为 "miter" 时，miterLimit 才有效。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示。
6. lineWidth:设置或返回当前线条的宽度，以像素计。属性值为number类型，不带单位。
7. beginPath:方法开始一条路径，或重置当前的路径。
8. closePath:方法创建从当前点到开始点的路径。
9. moveTo:方法把路径移动到画布中的指定点，不创建线条。moveTo(x,y),x,y分别是指定点的x,y坐标。
10. lineTo:方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。lineTo(x,y),x,y分别是新点的x,y坐标。
11. fill：方法填充当前的图像（路径）。默认颜色是黑色，可以使用 fillStyle 属性来填充另一种颜色/渐变。注意：如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径（正如 closePath() 一样），然后填充该路径。
12. save：方法保存当前环境的状态。
13. restore：方法返回之前保存过的路径状态和属性。
14. stroke:方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色，可以使用 strokeStyle 属性来绘制另一种颜色/渐变。
另外canvas画布的左上角为笛卡尔坐标系的原点，且y轴的正方向向下，x轴的正方向向右。
#### 结合实例，讲解要领
现在，我们开始一边写实例，一边讲解怎么用上面的属性和方法，这里所给出的都是部分代码，完整代码请见[https://gitee.com/liu_yong/study/blob/master/html5/canvas/views/linesegment.ejs](https://gitee.com/liu_yong/study/blob/master/html5/canvas/views/linesegment.ejs) 。
- 我们先来画一条普通的线段：
```javascript
        cxt.moveTo(10,5);
        cxt.lineTo(100,5);
        cxt.stroke();
```
这样，一条最普通的线段就画出来了。我们先设定我们的行为：使用moveTo先将画笔移动到(10,5)点，然后再落笔画到(100,5)这个点，通过两个点就确定了一条线段，这样就设定好了我们画画的过程和一切细节，然后就调用stroke()真正的画了。如果你也练习了这段代码，可以看到画出了一条线段，建议自己练习下，不然编程这种事情看终究还是很难掌握的。
- 我们接着来画一条粗线段
```javascript
        cxt.moveTo(110,5);
        cxt.lineTo(210,5);
        cxt.lineWidth=10;
        cxt.stroke();
```
此时，我们发现，在我们的canvas画布上又多了一条粗的线段，不过让我们意外的是，第一条线段也变粗了。
原来，canvas是基于状态的绘制，在每次绘制的时候就会把之前设置的状态再绘制一次。所以第一次调用stroke()的时候，canvas画了一条细的线段，第二次调用stroke()的时候，lineWidth已经被设置为了10px，所以第二次绘制的时候，第一条线段和第二条线段绘制出来都是宽度为10px的线段了。
那么要如何解决这个问题，实现我们想要画两条线段，且一细一粗呢？
这里我提供两种方法：
1. 一种是利用新开一条路径的方式，给每条路径都添加自己的属性值，代码如下：
```javascript
// 画一条普通的线段
        cxt.beginPath();
        cxt.moveTo(10,5);
        cxt.lineTo(100,5);
        cxt.lineWidth=1;
        cxt.stroke();

// 画一条粗线段
        cxt.beginPath();
        cxt.moveTo(110,5);
        cxt.lineTo(200,5);
        cxt.lineWidth=10;
        cxt.stroke();
```
这种方法绘制第二条线段的时候，其实还是会绘制第一条线段，只是通过beginPath()开始了一条新路径之后，两条路径可以设置不同的属性值，所以可以达到我们绘制一条细线段一条粗线段的目的。这里的关键点就在于：
```javascript
// 画一条普通的线段
        cxt.beginPath();
        ...
        cxt.lineWidth=1;
        ...
```
2.第二种是利用save方法把当前环境状态保存起来，然后新开一条路径，在新路径上设置相关状态，画完之后再将状态还原回去，代码示例如下：
```javascript
        // 画一条普通的线段
        cxt.save();
        cxt.beginPath();
        cxt.moveTo(10,5);
        cxt.lineTo(100,5);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
        // 画一条粗线段
        cxt.save();
        cxt.beginPath();
        cxt.moveTo(110,5);
        cxt.lineTo(200,5);
        cxt.lineWidth=10;
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
```
这种办法的好处是能尽量减少对其他部分绘制的影响，我们后面举例的时候会尽量采用这种方式来绘制。关键代码：
```javascript
        // 画一条普通的线段
        cxt.save();
        cxt.beginPath();
        ...
        cxt.closePath();
        cxt.restore();
```
- 我们再来画一个正方形，代码如下：
```javascript
 let lineSegment=function(cxt,{mov=[0,0],lineto=[[0,0]],lineWidth=1,strokeStyle='#000',lineCap='butt',lineJoin='miter',miterLimit=10}={}){
        cxt.save();
        cxt.beginPath();
        cxt.moveTo(mov[0],mov[1]);
        for(let i=0,len=lineto.length;i<len;i++){
            cxt.lineTo(lineto[i][0],lineto[i][1]);
        }
        cxt.lineWidth=lineWidth;
        cxt.strokeStyle=strokeStyle;
        cxt.lineJoin=lineJoin;
        cxt.miterLimit=miterLimit;
        cxt.lineCap=lineCap;
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    };
lineSegment(cxt,{
            mov:[50,50],
            lineto:[[250,50],[250,250],[50,250]],
            lineWidth:10
        })
```