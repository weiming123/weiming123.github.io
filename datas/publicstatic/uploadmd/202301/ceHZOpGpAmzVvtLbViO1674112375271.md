&emsp;&emsp;Promise是js里面的一个构造函数，主要是为了用来解决以前使用回调函数嵌套多层之后导致代码难以维护和理解的问题。
&emsp;&emsp;Promise的原型上主要有then、catch、finally方法，静态方法主要有resolve,reject,race,all,allSettled。

那么我们来试着分析下如下的代码吧，看看then、catch、finally是怎么用的：
```JavaScript
<script>
<script>
'use strict';
let testRun=function(data){
	console.log('testRun:'+data)
}
/* 第一个setTimeout */
setTimeout(function(){
	/* 第一个Promise */
	Promise.resolve().then(()=>{
		console.log(15);
	});
	console.log(14);
},100);
/* 第二个Promise */
let test=new Promise((resolve, reject)=>{
	console.log(1);
	if(true){
		resolve(6);
	}else{
		reject(16);
	}
	console.log(2);
}).then(function (data){
        /* 第二个setTimeout */
	setTimeout(function(){
		console.log('推入新的宏任务队列');
	})
	console.log('data:'+data);
	return data;
},testRun).catch(error=>{
	console.log('error:'+error);
}).then(function (data){
	console.log(8);
	console.log(a)
}).catch(error=>{
	console.log('error:'+error);
}).finally(()=>{
	console.log('finally:12');
});

/* 第三个Promise */
let promise2=new Promise((resolve, reject)=>{
	console.log(3);
	if(true){
		resolve(7);
	}else{
		reject(27);
	}
	console.log(4);
}).then(function (data){
	console.log('Promise2data:'+data);
	return data;
},testRun).catch(error=>{
	console.log('Promise2error:'+error);
}).then(function (data){
	console.log(9);
	console.log(a)
}).catch(error=>{
	console.log('Promise2error:'+error);
}).finally(()=>{
	console.log('Promise2finally:13');
});

/* 第三个setTimeout */
setTimeout(function(){
	console.log(16);
},100);
console.log(5);
</script>
/* 运行结果 */
1
2
3
4
5
data:6
Promise2data:7
8
9
error:ReferenceError: a is not defined
Promise2error:ReferenceError: a is not defined
finally:12
Promise2finally:13
推入新的宏任务队列
14
15
16
```
&emsp;&emsp;我们知道js是按照从上到下依次执行的，那么这里依次从上到下的顺序我们来理一下：
1. &emsp;&emsp;1、先定义了一个匿名函数并将这个匿名函数赋值给了testRun。
2. &emsp;&emsp;2、执行了第一个setTimeout函数，设置了一个定时器，在100毫秒之后将setTimeout里面的匿名函数推入宏任务队列之中。
3. &emsp;&emsp;3、第二个Promise构造函数处使用Promise新建一个Promise对象，赋值给了test变量。执行Promise构造函数内的代码，即：console.log(1)，打印了1；执行了resolve函数，将第二个Promise的状态由pending改为fulfilled并将第一个then方法内回调函数推入微任务队列,并返回新的Promise对象；console.log(2)，打印了2.
4. &emsp;&emsp;4、第三个Promise构造函数处使用Promise新建一个Promise对象，赋值给了promise2变量。执行Promise构造函数内的代码，即：console.log(3)，打印了3；执行了resolve函数，将第三个Promise的状态由pending改为fulfilled并将第一个then方法内回调函数推入微任务队列,并返回新的Promise对象；console.log(4)，打印了4.
5. &emsp;&emsp;5、执行了第三个setTimeout函数，设置了一个定时器，在100毫秒之后将setTimeout里面的匿名函数推入宏任务队列之中。
6. &emsp;&emsp;6、执行了console.log(5);打印了5。此时，第一次加入宏任务队列的函数就执行完了。
7. &emsp;&emsp;7、循环微任务队列，执行了第二个Promise构造函数的then的回调函数，执行了第二个setTimeout函数，设置了一个定时器，在引擎允许的最小时间后将其回调函数推入宏任务队列；将新的Promise对象状态改为fulfilled，再将第二个then方法回调函数推入微任务队列。执行了第三个Promise构造函数的then的回调函数，与第二个Promise构造函数情况类似。。。如此，将Promise后面的then、catch、finally方法依次执行又放下一个回调入微任务队列，直至执行完。
8. &emsp;&emsp;8、第二个setTimeout函数的回调函数被推入宏任务队列后被加入函数调用栈执行。
9. &emsp;&emsp;9、100毫秒后，第一个setTimeout的回调函数被推入宏任务队列后被加入函数调用栈执行,Promise.resolve().then仍然是异步的，即先将then的回调函数加入微任务队列，待执行了同步的console.log(14);之后再执行的then的回调函数。
10. &emsp;&emsp;10、第三个setTimeout的回调函数被推入宏任务队列后被加入函数调用栈执行。

&emsp;&emsp;我们看到Promise仍然是需要使用回调函数的方式的，只是把以前我们需要嵌套执行的回调嵌套改成了我们可以链式调用的方式，这样可以使得我们更容易理解和阅读程序的逻辑。其中需要注意的主要就以下几点：
1. &emsp;&emsp;1、使用new Promise()方式调用时，Promise构造函数内的代码是立即执行的，构造函数内异步的函数执行完成之后按照需要调用resolve成功或reject失败回调方法，而resolve回调方法会将此时的Promise状态修改为fulfilled，reject回调方法会将此时的Promise状态修改为rejected，且一旦状态修改后，状态便不能再被修改了。
2. &emsp;&emsp;2、then、catch、finally都是异步的，是将回调加入微任务队列执行，且回调环境为当前promise,最后都返回一个新的Promise对象。
3. &emsp;&emsp;3、then方法可以有两个回调函数，第一个用于成功回调，第二个用于失败回调，不过我们通常将失败回调放到then后的catch方法里面去处理，这样更易于阅读代码，同时catch还可以捕获then中的错误。
4. &emsp;&emsp;4、如果then中已经处理了前面的错误或者失败，且then中回调也没有再抛出新的错误，那就不会再执行catch方法里的回调了。如果then没有处理前面的错误的回调函数，那么前面的错误或者失败回调或者then中的错误都会触发catch中的回调函数。
5. &emsp;&emsp;5、finally则是不管当前promise状态如何都会进入，且没有参数传入。
&emsp;&emsp;接下来我们再来说说Promise的静态方法。
&emsp;&emsp;**Promise.resolve**:
&emsp;&emsp;Promise.resolve()是接收参数的，根据参数不同，内部操作也不同，不过最终都是返回一个resolved的Promise对象。其中，如果没有参数，那就返回一个resolved状态的Promise对象，之后再接着调用then或catch也没有参数传入他们的回调函数中；参数如果是一个Promise实例对象，那么就直接返回这个实例；参数如果是一个对象，且这个对象有then方法，那么就按照resolved状态调用这个对象的then方法；参数如果不是对象或者没有then方法，那么还是返回一个resolved状态的Promise对象，且把参数传给接下来的then方法的回调函数。
&emsp;&emsp;**Promise.reject**:
&emsp;&emsp;Promise.reject()与Promise.resolve()相仿，只是是返回一个状态为rejected的Promise对象。
&emsp;&emsp;**Promise.race**:
&emsp;&emsp;Promise.race([promise1,promise2,promise3])是将多个Promise实例，包装成一个新的Promise实例，参数可以是数组，也可以是其他Iterator接口的可迭代的对象，如map、set等。可以用来当有多个异步操作，只要其中一个异步操作状态改变，那么我们这里的异步操作就要跟着改变状态时使用，且最先改变状态的那个promise的状态决定了Promise.race实例的状态。
&emsp;&emsp;**Promise.all**:
&emsp;&emsp;Promise.all([promise1,promise2,promise3])是将多个Promise实例，包装成一个新的Promise实例。可以用来当有多个异步操作，只要其中一个异步操作状态改变为rejected或者所有的异步操作状态都改变为fulfilled，那么我们这里的异步操作就要跟着改变状态时使用。
&emsp;&emsp;**Promise.allSettled**:
&emsp;&emsp;Promise.allSettled([promise1,promise2,promise3])是将多个Promise实例，包装成一个新的Promise实例。可以用来当有多个异步操作，必须要所有的异步操作都改变状态之后才执行当前的操作的情况使用，因为allSettled就是需要所有传入的异步操作都改变了状态之后才执行。和Promise.all不同的是，如果Promise.all其中的异步操作某个状态变成了rejected，那Promise.all的状态就会变成rejected返回了。不过Promise.allSettled是一个比较新的标准，目前浏览器中只有新的谷歌和火狐浏览器才支持，具体可以查看[caniuse](caniuse)。
&emsp;&emsp;需要注意的是race、all、allSettled方法里面，如果参数列表里面返回结果的promise状态开始时改为rejected，但是该promise本身对rejected状态进行了处理，如使用了catch处理后新返回的promise状态为fulfilled，那么返回到接收的race、all、allSettled对应的promise状态其实是最后的状态，也就是fulfilled。
```JavaScript
<script>
'use strict';
let p1=new Promise((resolve,reject)=>{
	reject(11);
}).then(data=>{
	console.log(data);
	return 12;
}).catch(error=>{
	console.log('p1',error);
	return 13;
});
let p2=new Promise((resolve,reject)=>{
	resolve(21);
}).then(data=>{
	console.log(data);
	return 22;
}).catch(error=>{
	console.log('p2',error);
	return 23;
});
let p3=Promise.all([p2,p1]).then(data=>{
	console.log('allthen',data);
}).catch(error=>{
	console.log('error',error);
});
</script>
/* 运行结果 */
21
p1 11
allthen (2) [22, 13]
```
