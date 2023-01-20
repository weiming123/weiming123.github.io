&emsp;&emsp;有的东西看着挺常见的，但是如果不去归纳总结一下，一时半会还真未必就能全想起来。就像有时一个很熟悉的人，甚至熟得不能再熟了，突然想给别人介绍他的名字的时候，却突然想不起来他叫什么名字呢？！
&emsp;&emsp;前面我们总结了下js遍历数组的方法,在这里，我们来总结下，js遍历对象都有些什么方法。
我们还是先声明一个对象，用于测试，如下：
```JavaScript
let testSymbolKey=Symbol('testSymbolKey'),
    testPrototypeSymbolKey=Symbol('testPrototypeSymbolKey');
function TestObj(){
	this.username='testname';
	this.age=28;
	this.sort=100;
	this.address='test address';
	this.testFunction=function(){
        console.log('test function');
    }
	this.tmpObj={
		attr1:1
	}
	this[testSymbolKey]='owntestSymbolKey';
}
TestObj.prototype.enumAttr1=1000;
TestObj.prototype[testPrototypeSymbolKey]='testPrototypeSymbolKey';
TestObj.prototype.enumFunction=function(){
	console.log('enum function');
}
let testObj=new TestObj();
Object.defineProperty(testObj, "sex", {
    value: "man",
    enumerable: false
});
```
一、**for...in**:循环遍历对象自身的和原型链上的可枚举属性(不含Symbol属性)，如下：
```JavaScript
for(let _key in testObj){
    console.log(_key+':'+testObj[_key]);
}
/*
username:testname
age:28
sort:100
address:test address
testFunction:function(){
        console.log('test function');
    }
tmpObj:[object Object]
enumAttr1:1000
enumFunction:function(){
	console.log('enum function');
}
*/
```
二、**Object.keys()**:返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。兼容ie9及以上浏览器。如下：
```JavaScript
Object.keys(testObj);
//Array(6) [ "username", "age", "sort", "address", "testFunction", "tmpObj" ]
//我们看到这里testObj对象原型对象上的属性和方法没有被返回到数组中去
```
三、**Object.values()**:返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的值。兼Edge14及以上浏览器。如下：
```JavaScript
Object.values(testObj);
//Array(6) [ "testname", 28, 100, "test address", testFunction(), {…} ]
```
四、**Object.getOwnPropertyNames()**:返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。如下：
```JavaScript
Object.getOwnPropertyNames(testObj);
//Array(7) [ "username", "age", "sort", "address", "testFunction", "tmpObj", "sex" ]
```
五、**Object.getOwnPropertySymbols()**:返回一个数组，包含对象自身的所有 Symbol 属性的键名。如下：
```JavaScript
Object.getOwnPropertySymbols(testObj);
//Array [ Symbol(testSymbolKey) ]
```
六、**Reflect.ownKeys()**:返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。如下：
```JavaScript
Reflect.ownKeys(testObj);
//Array(8) [ "username", "age", "sort", "address", "testFunction", "tmpObj", "sex", Symbol(testSymbolKey) ]
```
七、**Object.entries()**:返回一个数组(不含Symbol属性)，包括对象自身可枚举属性的键值对数组。兼Edge14及以上浏览器。如下：
```JavaScript
Object.entries(testObj);
//Array(6) [["username","testname"],[ "age", 28 ],[ "sort", 100 ],[ "address", "test address" ],[ "testFunction", testFunction() ],[ "tmpObj", {…} ]]
```
&emsp;&emsp;我们看到，有不少方法是将对象属性或值转换为数组返回，而后我们可以按照数组的方式来遍历对象了，至于遍历数组的方法大家可以查看前面的 [js遍历数组的常用方法](https://liu_yong.gitee.io/blogs/17/)
