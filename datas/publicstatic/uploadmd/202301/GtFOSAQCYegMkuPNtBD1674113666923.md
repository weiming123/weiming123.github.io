&emsp;&emsp;在js里面，我们通常通过new关键字来从一个函数创建一个新的对象。在下根据自己的使用总结了下new的原理。代码实现和注释如下：
```JavaScript
function New(constructorFun){
    //如果传入的第一个参数不是函数，那么就报错
    if(typeof constructorFun!=='function'){
        throw TypeError(`${constructorFun} is not a constructor`);
    }
    //新建一个临时对象
    let tmpObj={};
    //把这个新建的对象的原型指向构造函数的prototype对象
    tmpObj.__proto__=constructorFun.prototype;
    let params=Array.from(arguments);
    //获取传给构造函数的参数，我们这里模拟的时候，第一个参数是构造函数，所以把第一个参数去掉
    params.shift();
    //使用apply执行构造函数，并且修改this指向tmpObj
    let constructorReturnValue=constructorFun.apply(tmpObj,params);
    /*
        如果构造函数内返回了一个对象，那么new就会返回这个对象；
        如果构造函数内没有返回对象，那么new就返回我们新建的临时对象
    */
    return (typeof constructorReturnValue==='object' || typeof constructorReturnValue==='function')?constructorReturnValue:tmpObj;
}
```