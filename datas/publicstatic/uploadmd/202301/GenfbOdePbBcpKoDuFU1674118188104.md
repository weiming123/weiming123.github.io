&emsp;&emsp;前面在下写了下 [Promise的使用总结](https://liu_yong.gitee.io/blogs/12/) ，在那里主要是总结了下Promise的使用方法，或许有写得不够清楚的，欢迎提点，这里本来在下想写个用es5来实现Promise的代码的，不过我发现 [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) 已经写得很好了，至少比自己要好些(ε=ε=ε=┏(゜ロ゜;)┛) 。所以就不把自己的代码拿出来献丑了，我们来看下人家是怎么实现的吧(为了直接在页面测试代码，对源码整合了下，有所改动，建议可以阅读源码比对)。
```JavaScript
<script>
'use strict';
const globalNS = (function() {
	if (typeof self === 'object') {//改为判断是否等于object了，下同
		return self;
	}
	if (typeof window === 'object') {
		return window;
	}
	if (typeof global === 'object') {
		return global;
	}
	throw new ReferenceError('unable to locate global object');
})();
;(function(global){
	if(global.Promise){
		if(!global.Promise.prototype.finally){
			global.Promise.prototype.finally = promiseFinally;
		}
		if(!global.Promise.prototype.allSettled){
			global.Promise.prototype.allSettled = allSettled;
		}
		return;
	}
	/* 这里，我们可以看到,其实是为了兼容node.js环境和浏览器环境,
	另外,我们看到setTimeoutFunc其实是对setImmediate或setTimeout外包了一个函数,
	主要应该是因为setTimeout这种需要底层定时器支持的函数不能改变this指向的缘故吧,他们需要在全局对象的环境下执行,不能绑定到其他对象上去了 */
	var setTimeoutFunc = typeof setImmediate === 'function'?function(fn){setImmediate(fn)}:function(fn){setTimeout(fn,0)};
	Array.isArray = Array.isArray || function(arg) {
	    return objToString(arg) === '[object Array]';
	};

	global.Promise= function(_fn){
		
		/* 必须使用构造器调用模式调用 */
		if(!(this instanceof Promise)){
			throw new TypeError('undefined is not a promise');
		}
		
		/* Promise的唯一参数_fn必须是函数类型 */
		if(typeof _fn !=='function'){
			throw new TypeError('Promise resolver '+_fn+' is not a function');
		}
		
		/* _state值为0、1、2、3,对应Promise的pending、fulfilled、rejected三种状态以及是否是新的Promise实例 */
		this._state=0;
		
		/* Promise状态是否改变过 */
		this._handled=false;
		
		/* 传给resolve或reject传的值，或为新的Promise实例 */
		this._value=undefined;
		/* 寄存then的回调方法 */
		this._deferreds=[];
		doResolve(_fn, this);
	}
	Promise.prototype.catch = function(onRejected) {
		/* catch方法相当于一个只接收了错误回调的then方法 */
		return this.then(null, onRejected);
	};
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
		/* 返回一个新的Promise对象实例,因为Promise对象状态改变后就不能再改变,所以then/catch/finally都是返回新的promise对象. */
		var prom = new this.constructor(noop);
		handle(this, new Handler(onFulfilled, onRejected, prom));
		return prom;
	};
	
	Promise.prototype.finally = promiseFinally;
	Promise.prototype.allSettled = allSettled;
	
	Promise.all = function(arr) {
		return new Promise(function(resolve, reject) {
			if (!Array.isArray(arr)) {
				/* 我们知道，all,race的参数可以是数组，也可以是其他Iterator接口的可迭代的对象，如map、set等，
				但是es5里面不支持set、map数据，所以这里只实现了传入数据参数的处理 */
				return reject(new TypeError('Promise.all accepts an array'));
			}

			var args = Array.prototype.slice.call(arr);//将传入的参数转化为数组，赋给args变量
			if (args.length === 0) return resolve([]);//如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
			var remaining = args.length;
			/* res函数有点绕,可能需要好好理解下 */
			function res(i, val) {
				try {
					if (val && (typeof val === 'object' || typeof val === 'function')) {
						/* 我们知道调用Promise函数最后会返回一个promise对象,这个promise对象是有then方法的,
						当如如果传入的参数不是promise对象,但是具有then方法,这里也可以这么执行 */
						var then = val.then;
						if (typeof then === 'function') {
							/* 这里其实就是最后一个then方法了,如果前面传出的状态是rejected,那么这里这么执行之后,
							状态必然也是调用reject函数,那么就调用了Promise.all的reject函数,
							这样就会改变Promise.all对象实例的状态了并且去执行Promise.allreject回调函数去了.
							如果前面传出的状态是resolved,那么这里也还是会执行res,
							而且传入的值就是前面的promise对象传出的值 */
							then.call(
								val,
								function(val) {
									res(i, val);
								},
								reject
							);
							return;
						}
					}
					/* i是由循环的时候传入的i,这里可以保证返回的时候的数组值和传入的数组的对应关系,
					从上面的if语句可以看出,如果val==false或者val没有then方法,那么都会到这里来,将val当成值赋给了args[i] */
					args[i] = val;
					/* 这里每次执行完一个promise后就将remaining减1.
					这里之所以要这么做,是因为all的参数虽然是按顺序加入到res来执行的,
					但是毕竟是异步的,那么结束时间就是不一定的,所以最终谁先执行完也是不一定的,
					那么如果当前的这个执行完减一之后是0了,
					那就代表都已经执行过一遍了,所以就算是执行完了.
					而且通过上面的try...catch...语句,以及上面if里面传入的是reject函数,
					我们可以知道,如果其中一个promise状态是rejected,
					那么就会调用Promise.all的reject回调,并且把对应的原因传入reject回调,
					那样Promise.all这个promise对象的状态也就变成了rejected,
					如果有promise变成了rejected,那么最后remaining就必然会大于0了.
					不过如果直到remaining===0都没有执行reject的话或者说,
					那么就是说所有的promise对象都已经执行完成并且都是resolved的,
					那么Promise.all就也返回resolved状态,执行resolve回调函数 */
					if (--remaining === 0) {
						resolve(args);
					}
				} catch (ex) {
					reject(ex);
				}
			}

			for (var i = 0; i < args.length; i++) {
				res(i, args[i]);
			}
		});
	};
	
	Promise.resolve = function(value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}

		return new Promise(function(resolve) {
			resolve(value);
		});
	};
	
	Promise.reject = function(value) {
		return new Promise(function(resolve, reject) {
			reject(value);
		});
	};
	
	Promise.race = function(arr) {
		return new Promise(function(resolve, reject) {
			if(Array.isArray(arr)){
				/* 我们知道race只要传入的promise其中一个状态改变,race的状态就跟着变成一样的状态,
				所以这里直接循环给每一个传入发promise对象加一个then方法就可以了 */
				for (var i = 0, len = arr.length; i < len; i++) {
					Promise.resolve(arr[i]).then(resolve, reject);
				}
			}else{
				return reject(new TypeError('Promise.race accepts an array'));
			}
		});
	};
	/* _immediateFn这个方法主要是用来模拟链式调用then/catch/finally的回调函数会异步执行的效果,
	但是我们前面说promise的then/catch/finally回调函数其实是加入到微任务队列中的,
	而这里只能加入到宏任务队列了,和真正的promise可能会有一些差异,所以这也告诉我们,不要太过于依赖语法方面提供的某些语法糖之类的了. */
	Promise._immediateFn =setTimeoutFunc;
	
	Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
		if (typeof console === 'object') {
			console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
		}
	};
	function promiseFinally(callback) {
		var constructor = this.constructor;
		return this.then(
			function(value) {
				return constructor.resolve(callback()).then(function() {
					return value;
				});
			},
			function(reason) {
				return constructor.resolve(callback()).then(function() {
					return constructor.reject(reason);
				});
			}
		);
	}
	/* allSettled是新标准中promise的方法,目前promise-polyfill没有实现该方法, 在下自己加了个,写得不好或者有什么问题欢迎指点 */
	function allSettled(arr) {
		return new Promise(function(resolve, reject) {
			if (!Array.isArray(arr)) {
				return reject(new TypeError('Promise.allSettled accepts an array'));
			}

			var args = Array.prototype.slice.call(arr);//将传入的参数转化为数组，赋给args变量
			if (args.length === 0) return resolve([]);//如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
			var remaining = args.length;
			function res(i, val,status) {
				try {
					if (val && (typeof val === 'object' || typeof val === 'function')) {
						var then = val.then;
						if (typeof then === 'function') {
							then.call(
								val,
								function(val) {
									res(i, val,'fulfilled');
								},
								function(val) {
									res(i, val,'rejected');
								}
							);
							return;
						}
					}
					args[i] = {
						status,
						[status==='fulfilled'?'value':'reason']:val
					};
					if (--remaining === 0) {
						resolve(args);
					}
				} catch (ex) {
					args[i] = {
						status:'rejected',
						reason:ex
					};
					if (--remaining === 0) {
						resolve(args);
					}
				}
			}

			for (var i = 0; i < args.length; i++) {
				res(i, args[i]);
			}
		});
	}
	function objToString(arg){
		return Object.prototype.toString.call(arg);
	}
	function bind(fn, thisArg) {
	  return function() {
	    fn.apply(thisArg, arguments);
	  };
	}
	function noop() {}
	function handle(self, deferred) {
		/* self指当前Promise对象，如果self._state的值为3，把self._value赋值给self.
		如果_state值为3,那么_value值就是一个Promise对象,
		如果是一个新的Promise对象,那么新对象的_state值可能是3也可能不是3,
		如果是3,那么就等于是让现在的self等于嵌套最内层的Promise的状态,如果不是,自然就继续执行了 */
		while (self._state === 3) {
			self = self._value;
		}
		/* 这里,如果状态是0,也就是在Promise状态为pendding,
		那么就把当前这个deferred也就是then方法给存到_deferreds数组里面去,方便后面状态改变后再调用.
		其实就是处理then方法，如:
			let promise1=new Promise(...);
			promise1.then(...);
			promise1.then(...); */
		if (self._state === 0) {
			self._deferreds.push(deferred);
			return;
		}
		/* 改变_handled值,就是在标记当前Promise对象状态已经改变过了 */
		self._handled = true;
		Promise._immediateFn(function() {
			/* 这里就是根据promise对象的状态来觉得后面的回调函数了 */
			var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
			if (cb === null) {
				/* 这里如果没有回调函数或者传入的不是函数,那么就继续下一个then方法回调函数的调用,
				并且状态和值都会传递下去 */
				(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
				return;
			}
			var ret;
			/* 调用then方法回调之后,如果在回调函数内发生错误,那么就进入下一个链式调用的错误方法回调内,
			如果没有发生错误,那么就进入下一个then方法回调,并且把回调函数cb的返回值传入下一个回调函数 */
			try {
				ret = cb(self._value);
			} catch (e) {
				reject(deferred.promise, e);
				return;
			}
			resolve(deferred.promise, ret);
		});
	}
	/* 这个resolve函数不是Promise的resolve方法,不过Promise的resolve方法主要逻辑也在这里了 */
	function resolve(self, newValue) {
		/* 在这里,整个逻辑代码都包含在try...catch...块里面,如果发生异常,就会调用reject,同时在这里我们也能看到,
		即使我们在传给Promise的回调函数里面已经调用了resolve回调,Promise的状态也不一定就是fulfilled,
		所以Promise的状态是在调用了resolve或者reject的最后才改变的，不过reject后Promise的状态一定是rejected */
		try {
			/* 这里控制调用resolve时不能传入Promise实例对象本身，因为如果传入的是Promise实例对象自己，
			在调用then或者catch方法时都可能会造成无限循环 */
			if (newValue === self){
				throw new TypeError('A promise cannot be resolved with itself.');
			}
			/* 原文判断语句是这样的:newValue &&(typeof newValue === 'object' || typeof newValue === 'function'),
			但是在下觉得不太对,resolve方法中，如果传入的参数是一个Promise对象或者一个带then方法的对象，那么就按照如下if里面的过程来执行，
			如果是基本数据类型或者不具有then方法的对象，或者没有传参，就按照返回一个新的resolved状态的 Promise 对象。
			所以改成了如下形式,你觉得呢？*/
			if (
				newValue &&
				((typeof newValue === 'object' && typeof newValue.then === 'function') || typeof newValue === 'function')
			) {
				var then = newValue.then;
				/* 如果传入的参数是一个新的Promise对象，那么就不做任何修改，返回传入的这个promise对象，可以参考handle函数里面的处理 */
				if (newValue instanceof Promise) {
					self._state = 3;
					self._value = newValue;
					finale(self);
					return;
				} else if (typeof then === 'function') {//如果传入的参数是一个有then方法的对象，那么就立即执行这个对象的then方法
					doResolve(bind(then, newValue), self);
					return;
				}
			}
			/* 如果是基本数据类型或者不具有then方法的对象，或者没有传参，就按照返回一个新的resolved状态的 Promise 对象。 */
			self._state = 1;
			self._value = newValue;
			finale(self);
		} catch (e) {
			reject(self, e);
		}
	}
	/* 这个reject函数不是Promise的reject方法,不过Promise的reject方法主要逻辑也在这里了 */
	function reject(self, newValue) {
		self._state = 2;
		self._value = newValue;
		finale(self);
	}
	
	function finale(self) {
		if (self._state === 2 && self._deferreds.length === 0) {
			Promise._immediateFn(function() {
				if (!self._handled) {
					Promise._unhandledRejectionFn(self._value);
				}
			});
		}
	
		for (var i = 0, len = self._deferreds.length; i < len; i++) {
			handle(self, self._deferreds[i]);
		}
		self._deferreds = null;
	}
	
	/**
	 * 在这里,首先我们可以查看Handler函数的执行过程,我们可以看到其实就是为把当前环境的Promise对象的属性置换为新的Promise对象做准备.
	 * 如果没有resolve或者reject回调函数，那么对应的回调函数就会置为空
	 */
	function Handler(onFulfilled, onRejected, promise) {
		this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
		this.onRejected = typeof onRejected === 'function' ? onRejected : null;
		this.promise = promise;
	}
	
	/**
	 * 使用new Promise(function(resolve, reject){})时同步执行传给Promise的回调函数
	 */
	function doResolve(fn, self) {
		/* 设置变量done,用于标识Promise构造函数的回调函数的回调函数(就是new Promise((resolve, reject)=>{})里面的resolve,
		 reject回调函数)是否已经执行过了,
		只要其中一个执行过了,两个回调或catch就都不能再执行了,因为Promise的状态只能从pending>fulfilled或pending>rejected,
		且之后不能再改变为其他状态*/
		var done = false;
		/* 在try...catch...语句块里面执行我们传给Promise构造函数的回调函数,这里我们可以看到,
		如果我们的构造函数内抛出错误,Promise状态就会改变成rejected. */
		try {
			fn(
				function(value) {//这就是我们平时用的resolve回调函数
					if (done) return;
					done = true;
					resolve(self, value);//传入当前Promise实例对象和我们调用resolve回调时传入的值
				},
				function(reason) {//这就是我们平时用的reject回调函数
					if (done) return;
					done = true;
					reject(self, reason);//传入当前Promise实例对象和我们调用reject回调时传入的值
				}
			);
		} catch (ex) {
			if (done) return;
			done = true;
			reject(self, ex);//传入当前Promise实例对象和我们传入Promise回调函数允许时发生的错误
		}
	}
})(globalNS);
</script>
```

&emsp;&emsp;这里就是在下对promise-polyfill的理解分析了，主要都写道注释里面了，本来画个流程图应该更清晰的，不过奈何，小编也懒啊。。。哈哈，要是有分析得不到位的或者写得不对的地方欢迎指出来。
&emsp;&emsp;allSettled是新标准中promise的方法,目前promise-polyfill没有实现该方法, 在下自己加了个,写得不好或者有什么问题也欢迎指点。
&emsp;&emsp;你还可以注释掉if(global.Promise){这里的判断，然后结合咱们前面在 [Promise的使用总结](https://liu_yong.gitee.io/blogs/12/) 里面讲的代码运行，你会发现执行打印出来的结果和原生的不一样。这是因为真正的promise里面链式调用的回调函数是加入道微任务队列里面执行的，而这里的模仿只能加入道宏任务队列里面。这也再一次告诉我们，不要太过于依赖语法糖提供给咱们的东西
我的邮箱 [liuyongfov@163.com](mailto:liuyongfov@163.com) 。
