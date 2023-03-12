#### 什么是标识符
我们把变量的名字叫做标识符，即标识符就是用来识别不同变量的名字。
所有 JavaScript 变量必须以唯一的名称的标识。


##### 在JavaScript中，标识符的命名规则是什么样的？
(1) 名称可包含字母、数字、下划线和美元符号
(2) 名称可以以字母、$、_ 开头，不能以数字开头
(3) 名称对大小写敏感
(4) 关键字、保留字、true、false 和 null 不能作为标识符


##### 标识符的命名有什么好的方法吗？
标识符除了用来作为程序计算之外，还有着给人方便阅读程序的作用，如果给标识符乱取一堆名称的话，可能自己在写代码的时候都容易搞混了，更何况是其他人来阅读到自己写的代码呢！
目前比较流行的命名法有匈牙利命名法、骆驼命名法（Camel-Case 也有称小驼峰命名法）、帕斯卡命名法（也有称大驼峰命名法）、下划线命名法，从实践来看，好的命名至少还要做到以下几点：
(1) 变量名应该准确的描述这个变量代表的含义
(2) 变量名要表示代表的是什么，而不是为什么或者怎么做
(3) 名字长度合适，不要太长，一般控制在十几个字符以内
(4) 不是通用或者约定俗成的缩写，不要用简写替代变量名
(5) 不要使用中文甚至中文缩写命名变量名
tips:js编程中常用的命名法是大小写驼峰法、下划线命名法。

###### 匈牙利命名法
该命名法是在每个变量名的前面加上若干表示数据类型的字符。基本原则是：变量名=属性+类型+对象描述。如n表示number，所有n开头的变量命都表示number类型。s表示String，所有变量命以s开头的都表示String类型变量。
Windows应用程序采用匈牙利命名法定义变量名。该命名法因微软公司程序员CharlesSimonyi(查尔斯·西蒙尼)而得名，以纪念这位传奇式人物。Charles Simonyi是MS Office的首席设计师，发明了匈牙利命名法，现是微软公司6位顶级设计师之一。这种方法被广泛应用于应用程序和系统软件的开发中。
这种命名法的出发点是把变量名按“属性+类型+对象”的描述顺序组合起来，以使程序员作变量时对变量的类型和其他属性有直观的了解。
匈牙利命名法也存在着一些问题，如：
(1) 现在的编辑器一般都可以提示变量类型，甚至在typescript中，如果你的变量类型不匹配，还会报错提示，所以命名上加上变量属性、类型就显得有些多余了
(2) 在代码的重构中，如果一个变量的类型改变了，那么对于该变量而言需要把所有的该变量名修改，因为该变量是把变量类型与变量名捆绑在一起 ，这样极不利于代码的移植。

###### 骆驼命名法
正如它的名称所表示的那样，是指混合使用大小写字母来构成变量和函数的名字。驼峰命名法跟帕斯卡命名法相似，只是首字母为小写，如userName。因为看上去像驼峰，因此而得名。

###### 帕斯卡命名法(pascal命名法)
混合使用大小写字母来构成变量和函数的名字，不过首字母大写，如UserName，常用在类、构造函数的变量命名中。

###### 下划线命名法
下划线命名法要求名称中的每一个逻辑断点都用一个下划线来标记，即使用下划线分割多个单词。





#### 声明变量
在 JavaScript 中创建变量通常称为"声明"变量。在JavaScript中，我们可以使用var,let,const关键字来声明变量（如果不使用关键字来声明变量，而是直接赋值，在非严格模式下会变成声明全局变量，在严格模式下，会报错）。如：
var userName;
let userAge;
变量声明之后，该变量是空的（就是undefined），因为我们只是说有这么个变量而已，但是他现在不代表任何事物，也没有任何东西。
我们也可以在声明变量时对其赋值，如：
var userName = 'zhang san';
let userAge = 18;
const User = {userName,userAge}





##### 变量的解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
结构赋值时，数组的元素是按次序排列的，变量的取值由它的位置决定；对象的属性没有次序，变量必须与属性同名，才能取到正确的值。





###### 变量解构赋值使用场景
1、交换变量的值
2、从函数返回多个值
3、函数参数的定义
4、提取 JSON 数据
5、函数参数的默认值
6、遍历 Map 结构
7、输入模块的指定方法
8、将 rest 语法添加到解构中，Rest 属性收集那些尚未被解构模式拾取的剩余可枚举属性键。





##### var,let,const的区别是什么？
var,let,const关键字都是用来声明变量的，他们总得有点区别吧，不然都一样了，那不重复了嘛，这里我们来总结下：
(1) 作用域不一样，var是函数作用域，let、const都是块级作用域。
(2) 在全局作用域中，let、const 声明的变量不会变成全局对象的属性，var声明的变量将作为全局对象的不可配置属性被添加，这意味着它的属性描述符无法被修改，也无法使用 delete 删除。比如我们给window对象添加个属性，这个属性是可以delete删除的，但是使用var声明一个全局对象，通过window对象属性的方式也可以访问到这个变量，但是不能通过delete删除这个属性。
(3) var有变量提升，let、const没有变量提升但是会有暂时性死区。即var声明的变量在当前作用域中的声明语句之前就可以使用，而let、const声明的在声明语句之前是不能使用的，包括以前即使没有声明也可以用typeof检测变量，但是如果使用let、const声明了的变量，在声明语句之前使用typeof检测类型也会报错，这就是暂时性死区这个现象。
(4) 意义不一样，var、let是声明变量，cosnt是声明常量。var、let声明和赋值可以分开，即可以先声明，后赋值，const必须在声明的时候就赋值，并且赋值后的变量保存的值不能变（如果const声明的是基础数据类型，那么就是基础数据类型不能变，如果声明的是引用数据类型，那么就是指向引用数据类型的引用地址不能变，其实也是变量的值不能变，只是这个值是引用地址而已）。
(5) var可以重复声明变量，let、const不能重复声明变量。
(6) let、const是ES6中新增的命令，而var是很早就存在的（当然现在还不支持let、const命令的浏览器应该很少了，但是不排除某些特殊项目需要兼容老的ie浏览器的情况，浏览器对let、const的兼容情况可以从 [caniuse](https://caniuse.com/) 网站上面查看到，可以看到移动端很早就支持了，pc端的话除了ie也都支持，ie只有11部分支持）。





##### 声明风格及最佳实践
1、不使用 var，只使用 let 和 const
有助于提升代码质量，因为变量有了明确的作用域、声明位置，以及不变的值。
2、const 优先，let 次之。这样可以让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因
意外赋值导致的非预期行为。








#### 对变量提升和暂时性死区的认识

变量提升应该说是一种现象，在js的规范里面都是没有这种规定的。要认识变量提升，我们先来梳理下下面的知识点：

计算机不能直接理解高级语言，只能直接理解机器语言，所以必须要把高级语言翻译成机器语言，计算机才能执行高级语言编写的程序。

高级语言有两种执行方式：一个是编译，一个是解释，与之对应的就是编译型语言和解释性语言，两种方式只是翻译的时间不同。
编译型语言写的程序执行之前，需要一个专门的编译过程，把程序编译成为机器语言的文件，比如Java就要先编译成.class文件，运行时不用再重新编译，直接使用编译的结果就行了，因为编译只做了一次，所以编译型语言的程序在执行的时候执行效率很高。

解释性语言写的程序不需要编译，省了道工序，其在运行程序的时候才翻译，这样每执行一次就要翻译一次，执行的效率比较低。

JavaScript是一种解释性脚本语言，JavaScript的解析执行过程分为 编译，执行 两个步骤。
编译是在解释器中进行，主要是做词法分析 、语法分析，然后将代码编译成可执行码。
执行是在JavaScript引擎中进行，执行可执行码，主要分为 预解析、执行 两个过程。
预解析主要是 创建执行上下文(Execution Context，可以把它理解为当前代码的执行环境) 和 变量收集 和 分号补全等。

这里的变量收集就和我们要说的变量提升和暂时性死区有关了。
在变量收集阶段，收集的变量主要有以下几种：
1、函数的所有形参(如果我们是在函数执行上下文中)
2、所有函数声明(FunctionDeclaration, FD)
3、所有变量声明(var,let,const声明的变量，没有使用关键字声明的那种全局变量不会被提升 VariableDeclaration)
其中，他们的优先级关系为：function声明定义>函数参数>var声明的变量，这意味着function声明的函数不会被同一个执行上下文内的变量给覆盖了，而只会被function声明的函数覆盖。

我们可以想到，此时还没有真正执行执行上下文中的第一句代码，但是变量已经被声明了，不过这时var与let、const的区别就开始了，var声明的变量此时不但被声明了，而且还赋了初始值undefined，所以我们哪怕是在第十句代码使用var声明的变量，但是在第一句代码里面就可以使用这个变量了，只是此时变量值为undefined而已，这就是 **变量提升** 。而let、const声明的变量虽然此时也被声明了，但是却没有赋初始值，所以如果我们在第十一句代码使用let或者const声明的变量，但是在第一句的时候却不能使用这个变量，这就是 **暂时性死区** 。

下面我们来写代码验证下：
```JavaScript
function testHoisting(){
  console.log(th) // undefined
  var th = 10
}
testHoisting()

function testNoVariable(){
  console.log(th) // Uncaught ReferenceError: th is not defined
}
testNoVariable()

function testDeadZone(){
  console.log(th) // Uncaught ReferenceError: Cannot access 'th' before initialization
  let th=100
}
testDeadZone()
```
从上面的代码，我们使用 var 或 let 或 const 声明并赋值变量，我们可以认为这里js引擎要做三个事情：
(1) 变量声明，这个时候变量只不过是一个用于保存任意值的命名占位符；
(2) 变量初始化；
(3) 变量赋值。
而var声明的变量，是在当前语句之前就做了(1)(2)两件事情，所以我们在我们的声明赋值语句之前就可以使用变量了，而let、const声明的变量，是在当前语句之前就做了(1)这一件事情，所以使用的时候就报了“未捕获引用错误：初始化前无法访问'th'”的错误。








#### 对变量作用域的认识
变量作用域 就是 变量的可用性范围。
通常来说，一段程序代码中所用到的名字并不总是有效可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。
作用域的使用，可提高程序逻辑的局部性，增强程序的可靠性，减少名字冲突。
从作用域角度区分，变量可分为全局变量和局部变量。


##### 什么是词法作用域？什么是动态作用域？
词法作用域就是在js解释器做词法分析的时候就已经确定了作用域了，也可以说是编写代码的时候作用域就已经确定了。
动态作用域就是到执行的时候才确定作用域的。


##### JavaScript的变量作用域的认识
JavaScript是词法作用域，所以我们编写代码的时候其实就可以确定了变量的作用域了。
在 JavaScript 中, 对象和函数同样也是变量。
在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。
在ES6之前，JavaScript只有全局作用域、函数作用域和eval作用域（因为eval不推荐使用，因此也很少提及eval作用域，with作用域可以看作是全局作用域或函数作用域中的一个子作用域）。
在ES6之后，对于let、const声明的变量有了块级作用域。


###### 关于with和eval
不管是with还是eval语句都是不被推荐使用的，能用这两个语法实现的一般都可以用更好的方式来实现，所以都建议不要使用，这里我们也不多浪费时间去讨论他们了。


##### 什么是作用域链？
当一个变量在当前作用域无法找到时，便会尝试寻找其外层的作用域，如果还找不到，再继续往外寻找（只会往外寻找，不会寻找兄弟作用域，更不会往内寻找）。这种如同链条一样的寻找规则便被称为作用域链。
作用域链，是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。





#### 什么是内存泄漏
变量的值既然要占用内存，在不能再被用到之后，如果他们占用的内存却始终不能被回收，这就是内存泄漏了。
如果我们不断的声明、赋值变量，而在这些变量都不能再被使用到之后，这些变量占用的内存却始终不能被回收，那么就会导致程序占用的内存越来越多。
当内存使用率到一定程度之后，碎片就比较多，这时内核的内存分配器就比较难分配内存，甚至如果启用了交换分区，有些内存数据就要往硬盘里写，用的时候从硬盘拿，那就更慢了。
就拿 V8引擎来说，在 64 位系统下，V8 最多只能分配 1.4G；在 32 位系统中，最多只能分配 0.7G。当我们的程序占用过多内存的时候，就会导致程序越来越慢，最终甚至导致我们的程序卡死。


##### JS中常见的内存泄露有哪些：
1、意外的全局变量
2、被遗忘的计时器或回调函数
3、脱离DOM的引用
4、在全局环境引用的闭包





#### 什么是垃圾回收
我们声明的变量、对象，他们保持的数据都是需要占用内存的，基本数据类型数据值是存储在栈内存中，引用数据类型数据值是存储在堆内存中；当我们再也不需要使用到某些变量之后，那么这些变量就应该被销毁，他们存储在内存中的数据也应该销毁，占用的内存就释放出来给其他地方使用。
在JavaScript中，这种释放内存的操作是由js引擎去做的，他会定期找出那些不再继续使用的值，然后释放其内存，这就是JavaScript的垃圾回收机制。


##### 垃圾回收有哪些方式
浏览器历史上有两种垃圾回收方式，分别是：
1、引用计数(reference counting)
2、标记清除(mark-and-sweep)

引用计数是以前老的ie浏览器使用的垃圾回收方式，简单来说：引擎会有张“引用表”，保存了内存里面的资源的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放掉了。
但后来这个机制被放弃了，因为它会遇到一个严重的问题：循环引用，从而导致内存泄漏，所以被放弃了。

标记清除分为标记与清除两个阶段，首先遍历所有数据，将能可达或者间接可达的数据标记存活，然后再清理没有标记的数据，这样就完成一次清理。
JS中还有许多对此的优化：
分代回收：对对象的标记分为两组：“新对象”与“旧对象”，对于新对象，就是经常出现且迅速处理重复的工作，这种对象会被经常检查且很快就被清理，而“旧对象”，就是那些存活非常久的对象，接受检查的次数也就会越少。
增量回收：若对象数量较大，一次遍历整个对象集则会花费一些时间，且执行过程中会有一定的延迟。因此，JS引擎试图把垃圾回收机制拆分，然后在各个部位分别执行，以用来减少延迟。
空闲时间运行：垃圾回收器只在 CPU 空闲时运行，减少对执行影响的可能性



##### 变量的生命周期
当一个变量的生命周期结束之后它所指向的内存就应该被释放。
在ES6及以后，js中有全局变量和在函数中产生的局部变量以及更小的块级局部变量。
块级局部变量，如let、const在块级代码域中声明的变量，在出了块级代码域之后就结束了。
函数内的局部变量的生命周期在函数执行过后就结束了。
全局变量生命周期会持续到浏览器关闭页面。
理论上而言，在变量生命周期结束后，在下次GC（Garbage Collection）运行的时候就会回收变量占用的内存。











#### 什么是闭包
闭包是指一个函数可以记住其外部函数的变量并可以访问这些变量。
闭包这个东西，我更愿意称其为一种特定现象，因为js作用域和作用域链的规则和垃圾回收机制，在我们编码时出现的一种情况的归纳。
结合代码，讲解要领：
```JavaScript
let globalName = 'gl'
function testClosure() {
  debugger
  let userAge = 10
  let userName = 'packageName'
  console.log(globalName)
  {
    console.log(userName)
  }
  function testLocal() {
    console.log(userAge)
  }
  function testGlobalName() {
    console.log(globalName)
  }
  testLocal()
  testGlobalName()
}
testClosure()
/*
如testClosure函数执行到打印globalName变量的时候有形成闭包吗？
显然是没有的，globalName是全局变量，全局环境是要到页面关闭才会被销毁，不需要通过闭包来被保留的。
块级作用域内打印userName的时候有形成闭包吗？
没有，要函数内的函数才会形成闭包
执行到testLocal函数内，打印userAge的时候，有形成闭包吗？
有，这时的闭包是testClosure，闭包的包是哪个呢，我的理解是谁的环境被保留了，就是谁
执行到testGlobalName函数内，打印globalName的时候，有形成闭包吗？
有，这时的闭包还是testClosure，闭包里面的变量仍然是只有userAge。
*/
```



##### 闭包的作用
目前专门去应用闭包这种规则现象的场景是用来封装变量等，避免变量污染外层环境。
```JavaScript
function testClosure() {
  debugger
  let userage = 10
  let username = 'dfsdfsdfw23'
  {
    console.log(username)
  }
  function testLocal() {
    console.log(userage)
  }
  testLocal()
}
testClosure()
/*
testLocal函数执行的时候有形成闭包吗？
答案是肯定的，因为testLocal函数引用了testClosure函数内的userage变量
*/
```






#### 什么是数据类型
在计算机科学和计算机编程中，数据类型或简单的类型是数据的一个属性，它告诉编译器或解释器程序员打算如何使用数据。


##### js中的数据类型有哪些
基本数据类型：未定义（Undefined）、空（Null）、字符串（String）、数字(Number)、布尔(Boolean)、大整数（BigInt）、Symbol

引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)、Set、Map、正则（RegExp）、日期（Date）

tips:严格来讲，函数、数组、日期、正则等都是对象类型数据，不过我们在应用中，很多时候都需要区分到具体是哪种对象类型，所以这里我们在引用数据类型里面说得详细了些。


##### 基本数据类型和引用数据类型的区别是什么？
基本类型的值存在内存中，被保存在栈内存中。从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本。
引用类型的值是对象，保存在堆内存中。包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针。从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象。js不允许直接访问内存中的位置，也就是不能直接访问操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。


##### 怎么判断各个数据类型
###### (1) 判断undefined数据类型
```JavaScript
typeof testParam === 'undefined'
```

###### (2) 判断null数据类型
```JavaScript
typeof testParam === 'object' && testParam === null;
```

###### (3) 判断string数据类型
```JavaScript
typeof testParam === 'string';
```

###### (4) 判断number数据类型
```JavaScript
// 判断变量是否是number类型
typeof testParam === 'number';

// 判断变量是否是number类型且是数值类型
typeof testParam === 'number' && !Number.isNaN(testParam)

/*
判断变量是否是number类型且是有限的数值类型
在JavaScript中，数字不分为整数类型和浮点型类型，所有的数字都是由 浮点型类型。
JavaScript 采用 IEEE754 标准定义的 64 位浮点格式表示数字，
它能表示最大值（Number.MAX_VALUE）为 ±1.7976931348623157e+308，最小值（Number.MIN_VALUE）为 ±5e-324。
此格式用 64 位存储数值，其中 0 到 51 存储数字（片段），52 到 62 存储指数，63 位存储符号。
当数字运算结果超过了JavaScript所能表示的数字上限（溢出），
结果为一个特殊的无穷大（infinity）值，
在JavaScript中以Infinity表示。
同样地，当负数的值超过了JavaScript所能表示的负数范围，
结果为负无穷大，
在JavaScript中以-Infinity表示。
无穷大值的行为特性和我们所期望的是一致的：
基于它们的加、减、乘和除运算结果还是无穷大（当然还保留它们的正负号）。
*/
Number.isFinite(testParam);
// 用上面的方法判断需要注意的是，如果testParam变量未声明会报错
```

###### (5) 判断boolean数据类型
```JavaScript
typeof testParam === 'boolean';
```

###### (6) 判断bigint数据类型
```JavaScript
typeof testParam === 'bigint';
```

###### (7) 判断symbol数据类型
```JavaScript
typeof testParam === 'symbol';
```

###### (8) 判断对象是否是某个构造函数实例
```JavaScript
// 使用对象的constructor属性判断
function testFunc(){}
testParam = new testFunc()
testParam.constructor === testFunc

/*
如果使用instanceof判断可能是不对的，
因为instanceof 运算符是用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上，
这就可能出现instanceof检测构造函数的父类也是true，
如下
*/
class Father{}
class Son extends Father{}
let f1=new Father()
let s1=new Son()
f1 instanceof Father; // true
f1 instanceof Son; // false
s1 instanceof Father; // true
s1 instanceof Son; // true
```

###### (9) 判断数组(Array)数据类型
```JavaScript
Array.isArray(testParam)
```

###### (10) 判断函数(Function)数据类型
```JavaScript
typeof testParam === 'function'
// 这里需要注意的是，class类和function使用typeof来判断得到的都是function类型
// 可以通过toString来进一步区分，如
class Father{}
function testFunc(){}
Father.toString(); // 'class Father{}'
testFunc.toString(); // 'function testFunc(){}'
```

###### (11) 判断Set数据类型
```JavaScript
Object.prototype.toString.call(testParam) === '[object Set]'
```

###### (12) 判断Map数据类型
```JavaScript
Object.prototype.toString.call(testParam) === '[object Map]'
```

###### (13) 判断正则（RegExp）数据类型
```JavaScript
Object.prototype.toString.call(testParam) === '[object RegExp]'
```

###### (14) 判断日期（Date）数据类型
```JavaScript
Object.prototype.toString.call(testParam) === '[object Date]'
```


##### 基本数据类型和引用数据类型区别是什么？
基本数据类型的值直接存储在栈内存中，值与值之间是独立的，修改一个变量不会影响复制的变量，如：
```JavaScript
function changeCopyValue(originValue){
  originValue = 10;
  console.log(originValue); // 打印10
}
let origin = 30
changeCopyValue(origin)
let copyValue = origin
copyValue = 50
console.log(copyValue) // 打印50
console.log(origin) // 打印30
```
引用数据类型变量值是保存在栈内存中的一个引用指针，保存的引用指针是堆内存中的引用地址标识，通过这个引用指针可以快速找到保存在堆内存的对象。复制引用数据类型的变量，复制的是保存在栈内存中的引用地址，而堆内存内的对象数据还是只有一份，即两个变量都指向同一个堆内存中的对象。如
```JavaScript
let initialObject = {
  name: 'init name'
}
let copyObject = initialObject
// 复制的变量和原来的变量指向的是同一个对象
// 这也是我们常说的浅拷贝，
// 意味着只是复制了引用地址而已，但是指向的对象却还是同一个
console.log(copyObject.name) // init name
console.log(initialObject.name) // init name
copyObject.name = 'copy name'
// 修改对象的name属性，因为两个变量指向的是同一个对象，
// 两个变量的属性其实都是一个对象的属性，所以打印看起来都改变了
console.log(copyObject.name) // copy name
console.log(initialObject.name) // copy name
copyObject = {
  age: 18
}
copyObject.name='copy new name'
// copyObject 的指针指向新的对象后，和之前复制的变量就不在是同一个对象了
console.log(copyObject) // {age: 18, name: 'copy new name'}
console.log(initialObject) // {name: 'copy name'}
```




##### 认识JavaScript类型转换
JavaScript是一种弱类型编程语言，弱类型是指数据类型可以被忽略，一个变量可以赋不同数据类型的值。
JavaScript可以自由的进行数据类型转换，也提供了多种显式转换的方式。
一般来说，约束越强越不容易出错，但编写程序时也越麻烦。而可以自由转换数据类型，有时会比较方便根据逻辑需要转换类型使用，但是也可能会在某些时候程序的运行结果和我们预期的差别很大，造成我们的逻辑错误，如：
```JavaScript
function add(a,b){
  return a+b;
}
add(1,'2')
/*
我们预期add函数运算结果是两个数相加，结果是3
但是因为传入的参数其中一个是字符类型，
运行结果变成了'12'，
这就导致了我们程序运行结果不符合我们的预期了
*/
```


##### 变量转换为其他类型时会如何表现呢
通常类型的自动转换发生在语句运行时需要的是某个类型，那么js就会尝试去将变量转换为需要的类型，然后再进行后面的运算，如
```JavaScript
let testParam = 10
if(testParam){
  console.log(testParam)
}

testParam 本来只是一个number类型的变量，
但是if需要的表达式值是是boolean类型的，
这里js就会尝试把testParam转换为boolean类型值后，
再进行运算
```


###### (1) undefined 的类型转换
```JavaScript
undefined 转换为其他类型时对应的值是：
undefined -> string = 'undefined'
undefined -> number = NaN
undefined -> boolean = false

undefined 做+运算时，
如果相加的另一个变量类型是undefined、null、number、boolean类型，
就会先分别转换为number类型再相加，
当然NaN加另一个number类型，最后结果还是NaN；
如果相加的另一个变量类型是string、引用数据类型，
那么相加的变量都会先转换为字符串，然后再相加，如
console.log(undefined+{}); // 'undefined[object Object]'
如果相加的另一个变量类型是bigint、symbol类型，那么就会报错，如
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(undefineTest1+1n);
// Uncaught TypeError: Cannot convert a Symbol value to a number
console.log(undefineTest1+Symbol('s'));
```

###### (2) null 的类型转换
```JavaScript
null 转换为其他类型时对应的值是：
null -> string = 'null'
null -> number = 0
null -> boolean = false

null 做+运算时，
如果相加的另一个变量类型是undefined、null、number、boolean类型，
就会先分别转换为number类型再相加；
如果相加的另一个变量类型是string、引用数据类型，
那么相加的变量都会先转换为字符串，然后再相加，如
console.log(null+{}); // 'null[object Object]'
如果相加的另一个变量类型是bigint、symbol类型，那么就会报错
```

###### (3) string 的类型转换
```JavaScript
string类型值转换为其他类型时对应的值是：
string -> number = Number(param)
举例：
console.log(Number('')) // 0
console.log(Number('12')) // 12
console.log(Number('12a')) // NaN
string -> boolean = Boolean(param)
举例：
console.log(Boolean('')) // false
console.log(Boolean('0')) // true
console.log(Boolean('1')) // true
console.log(Boolean('a')) // true
string类型变量和其他所有类型相加时都会先转换为string类型再相加
```

###### (4) number 的类型转换
```JavaScript
number -> string = String(number)
举例：
console.log(String(0)) // '0'
console.log(String(1)) // '1'
console.log(String(10)) // '10'
console.log(String(0b10)) // '2'
console.log(String(0o10)) // '8'
console.log(String(0x10)) // '16'
number -> boolean = Boolean(param)
举例：
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(10)) // true
```

###### (5) boolean 的类型转换
```JavaScript
boolean -> string = String(boolean)
举例：
console.log(String(true)) // 'true'
console.log(String(false)) // 'false'
boolean -> number = Number(boolean)
举例：
console.log(Number(true)) // 1
console.log(Number(false)) // 0
```

###### (6) bigint 的类型转换
```JavaScript
bigint类型不能与普通数值进行混合运算，
因为这样可能会丢失精度信息，
这也是为什么在和undefined、null、number、boolean相加时会报错的原因，
因为这四个基础数据类型都是自动转换为number类型的
如果是进行手动转换或者是与字符相加，那么和number类型是一样的，如
console.log(1n+{}) // '1[object Object]'
console.log(Boolean(1n)) // true
console.log(Boolean(0n)) // false
console.log(Number(1n)) // 1
console.log(String(1n)) // '1'
```

###### (7) symbol 的强制转换
```JavaScript
symbol表示独一无二的值，
理论上是不需要做什么运算的，
不过如果出现了类型转换的时候会发生什么呢，
比如if(Symbol('t')){}
let sy1=Symbol('sy1')
symbol -> string = String(symbol)
console.log(String(sy1)) // 'Symbol(sy1)'
console.log(sy1+'') // VM1887:1 Uncaught TypeError: Cannot convert a Symbol value to a string
symbol -> boolean = Boolean(symbol)
console.log(Boolean(sy1)) // true
if(sy1){
console.log('sdsd') // 打印 sdsd
}
```

###### (8) 对象 的类型转换
```JavaScript
对象也不是拿来直接做运算的，所以如果发生类型转换，
是先调对象的toString方法，然后再做类型转换，如
class TestObject{
    toString(){
        return 'this is mine toString function'
    }
}
const tObject = new TestObject()
console.log(tObject+'') // 'this is mine toString function'
console.log(Symbol(tObject)) // Symbol(this is mine toString function)
```







下面我们来做一些题来巩固下学到的知识吧：

##### 使用 + 或一元加运算符是将字符串转换为数字的最快方法吗？
根据MDN文档，+是将字符串转换为数字的最快方法，因为如果值已经是数字，它不会执行任何操作。

##### null 和 undefined 的区别

undefined 类型只有一个值，就是特殊值 undefined。当使用 var 或 let 声明了变量但没有初始化时，就相当于给变量赋予了 undefined 值

null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，这也是给 typeof 传一个 null 会返回"object"的原因。在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。这样，只要检查这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用。undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等，用等于操作符（==）比较 null 和 undefined 始终返回 true。





##### 为什么 typeof null 是 object？
从底层JavaScript实现来说，在 JavaScript 初始版本中，值以 32位 存储。前 3位 表示数据类型的标记，其余位则是值。
对于所有的对象，它的前3位都以 000 作为类型标记位。在 JavaScript 早期版本中，null 被认为是一个特殊的值，用来对应 C 中的 空指针。但 JavaScript 中没有 C 中的指针，所以 null意味着什么都没有或者void 并以全0(32个)表示。
因此每当 JavaScript 读取 null 时，它前端的 3位 将它视为 对象类型 ，这也是为什么 typeof null 返回 'object' 的原因。

从逻辑上来讲，null代表空对象，有一种万物起源于无的哲理的感觉，而JavaScript里面的一切都是对象。





##### 相等运算符(==) 、 严格相等运算符(===) 和 Object.is() 方法 的区别

相等运算符(==) 检查两个变量值是否相等，如果比较的两个变量数据类型不同， 会自动转换成相同的数据类型后再进行比较。

严格相等运算符(===) 检查两个变量是否具有相似的数据类型和值。例如 (“3” ===3) 将返回 false。
```JavaScript
+0 === -0 //true
NaN === NaN // false
```

Object.is() 方法比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。如：
```JavaScript
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

对于基础类型，==操作符会先把两边的变量进行类型强制转换成相同的类型再比较是否相等；===操作符则不会进行类型转换，而是直接进行比较。
对于array, object这些引用数据类型，==和 ===是没有区别的，因为它们比较的是 “指针地址” 。
对于基础类型和高级类型，== 和 ===是有区别的；==操作符会先把高级类型转换为基础类型之后，进行值的比较；===操作符则不会进行转换，类型不同，直接返回false



##### 如何判断一个数据是NaN
1、Number.isNaN()只有对于NaN才返回true，非NaN一律返回false，如：
Number.isNaN(NaN) // true
2、利用 NaN 是唯一一个不等于任何自身的特点 NaN!==NaN // true
3、利用ES6中提供的 Object.is() 方法（同值相等），如：
Object.is(NaN, NaN) // true


##### 根据instanceof原理，实现一个instanceof的函数：
```JavaScript
function _instanceof(L, R) {
  if (typeof L !== 'object') return false

  L = L.__proto__
  R = R.prototype

  while (true) {
    if (L === null) return false

    if (L === R) return true

    L = L.__proto__
  }
}
```



##### 下面代码的运行结果是什么
```JavaScript
var userAge = 23
function testAge(){
  console.log(userAge)
  var userAge = 18
}
testAge() // 打印：undefined

let userName = 'testname'
function test(){
  console.log(userName)
  let userName = 'liu'
}
test()
//打印报错： Uncaught ReferenceError: Cannot access 'userName' before initialization
```

