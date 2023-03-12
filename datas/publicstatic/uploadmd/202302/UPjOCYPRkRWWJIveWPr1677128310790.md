# 高频 JS面试题 数据类型和变量、闭包、作用域、原型链、继承
### 1. typeof NaN返回什么
- 返回Number
### 2. typeof null返回什么？为什么？
- 返回'object'
- typeof(null) = object 是 JS 在诞生设计之初留下的历史遗留 BUG 问题
- 在 JS 中进行数据底层存储的时候是用二进制存储的，这是一定的，而且它的前三位是代表存储的数据类型，而 000 是代表 object 类型也就是引用类型的数据。
- 而 null 正好全是 0，所以它巧妙的符合 object 类型的存储格式，所以在 typeof 检测的时候，它才会输出 object
### 3. null和undefined的区别
- undefined(未定义):当一个变量被声明（定义）未被赋值时，它的初始值就是undefined
- 函数没有返回值时，默认返回 undefined
- 对象中没有赋值的属性，该属性的值为 undefined。
-  调用函数时，应该提供的参数没有提供，该参数等于 undefined
- null（空）:表示一个空对象的引用
- 当变量定义好，是用来保存对象引用的，可以给他赋初始值为null
- 当一个对象使用完，需要释放时，可以将其的值设置为null（js会自动垃圾回收）
- Number(undefined)的值为NaN,Number(null)的值为0
- undefined==null //true
- undefined和null转换为boolean类型时都为false
- 都是基础数据类型，都保存在栈中
### 4. 隐式类型转换
![](/datas/publicstatic/uploadimg/202303/PNtSsLmAxDlmrrTlxRS1677659151349.png)
- 基础数据类型转换为数字进行比较
![](/datas/publicstatic/uploadimg/202303/CZcqUOrBuZYYGyDUxYK1677661848643.png)

- null和undefined不会进行值转换
![](/datas/publicstatic/uploadimg/202303/FoqqAdIFiHSPvzYTcaT1677661938382.png)
- 比较不同类型变量时，如果两侧的数据类型不同，且无valueOf方法，则按照对象->字符串->数值的规则进行隐式类型转换
![](/datas/publicstatic/uploadimg/202303/IRPOBCkjJJctfCjbbUS1677662820463.png)
- if语句中的表达式和值都会被转成boolean类型
![](/datas/publicstatic/uploadimg/202303/NwbJVQMJQCJsbEurjeX1677663307987.png)

### 5.const、let、var 区别
| col | var| let| const|
| - | - | - | - |
| 块级作用域| 不存在| 存在| 存在|
| 变量提升 | 变量提升| 不会| 不会|
| 暂时性死区| 不存在| 存在| 存在|
| 重复声明| 可以| 同一作用域不可以| 同一作用域不可以|
| 修改变量| 可以| 可以| 不可以|

注：const声明就必须初始化

### 6. const定义的值一定不能改变吗
- 不是，如果定义了一个引用类型的值，是可以改变的
- 对于基础数据类型的值（string,boolean,number）就保存在变量指向的栈内存地址，因此等同于常量
- 对于引用类型的数据（array,object）,变量所在的栈内存中保存的是引用地址指针，const能保证地址指针不发生变化，但是指针指向的数据结构是可以变化的
### 7. const 声明生成对象的时候，如何使其属性不可更改
- Object.freeze(obj) 方法可以冻结一个对象，被冻结的对象不能新增属性，删除属性，修改属性,如果对象属性中还有对象，需要层层递归
- ES6-class 设置该属性为只读（readonly）
### 8. 作用域的类型
- 全局作用域
- 局部作用域（函数作用域）
- 块级作用域
### 9.  ES6 的块级作用域
- 在if,for,{}中用let和const声明变量会形成块级作用域，{}之外的不能访问{}之内的内容
- 块级作用域中定义的变量，在if和for语句执行完毕后，变量会被销毁，不会占用内存
- 对象的{}不会形成块级作用域
### 10. 防抖和节流的区别，以及手写实现
### 11.内存泄漏的几种情况
- 全局变量
- 闭包
- 定时器未及时清除
- 事件监听
- 元素引用未被清理
- console
### 12. 深拷贝和浅拷贝
### 13. 箭头函数
### 14. call,apply,bind的区别，及手写实现
### 15. 判断两个对象是否相等 
- Objectis(obj1,obj2) 判断两个对象引用地址是否一样，一样返回true，不一样返回false
- 判断两个对象是否指向同一内存地址；使用Object.getOwnPropertyNames方法获取所有键名数组；判断两个键名数组是否相等；遍历键名是否相等
### 16. 遍历对象属性的方法有哪几种
- 遍历自身可枚举属性：Object.keys()方法，返回一个可枚举属性组成的数组
- 遍历自身所有属性（可枚举，不可枚举，非继承属性）：Object.getOwnPropertyNames()方法，返回一个数组
- 遍历可枚举的自身属性，和可继承属性：for..in
17. 


