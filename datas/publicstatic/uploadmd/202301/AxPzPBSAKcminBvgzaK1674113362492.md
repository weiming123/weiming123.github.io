&emsp;&emsp;首先，看下需求是什么：
```
    实现一个LazyMan，可以按照以下方式调用:

    LazyMan('Hank');输出:
    Hi! This is Hank!

    LazyMan('Hank').sleep(10).eat('dinner');输出:
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10s!
    Eat dinner~

    LazyMan('Hank').eat('dinner').eat('supper');输出:
    Hi This is Hank!
    Eat dinner~
    Eat supper~

    LazyMan('Hank').sleepFirst(5).eat('supper');输出:
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper~

    以此类推。 
```
代码如下：
```JavaScript
function LazyMan(uname){
  class _lazyMan{
    constructor(uname){
      this.tasks=[];
      let fn=()=>{
        console.log("Hi! This is " + uname + "!");
        this.next()
      }
      this.tasks.push(fn);
      setTimeout(()=>{
        this.next();
      }, 0);
    }
    next(){
      let fn=this.tasks.shift();
      typeof fn=='function' && fn();
    }

    eat(something){
      let fn=()=>{
        console.log("Eat " + something + "~");
        this.next()
      }
      this.tasks.push(fn);
      return this;
    }
    sleep(time){
      let fn=()=>{
        setTimeout(()=>{
          console.log("Wake up after " + time + "s!");
          this.next();
        }, time * 1000);
      }
      this.tasks.push(fn);
      return this;
    }
    sleepFirst(time){
      let fn=()=>{
        setTimeout(()=>{
          console.log("Wake up after " + time + "s!");
          this.next();
        }, time * 1000);
      }
      this.tasks.unshift(fn);
      return this;
    }
  }
  return new _lazyMan(uname);
}
```
分析：根据需求来看的话，最主要的是这么几个功能：
&emsp;&emsp;1、可以链式调用，这个其实还可以用promise实现的，不过自己在方法内返回当前对象也可以实现链式调用。
&emsp;&emsp;2、按顺序执行链式调用的方法，即使链式调用的方法其中有些有异步的操作，这也是为什么用了一个类似函数调用栈的东西，通过循环执行调用栈里面的方法来保证执行的顺序。
&emsp;&emsp;3、sleepFirst方法可以插队，也就是执行了sleepFirst方法后，sleepFirst内的回调函数要先执行。因为我们使用了一个数组来存我们的回调函数，同时保证按照数组内的顺序来执行，那么只要把sleepFirst内的回调函数放到数组第一位去其实就可以了。
&emsp;&emsp;4、在constructor里面的回调函数为什么要放到setTimeout里面去呢？因为如果不放到任务队列里面去，就会先执行constructor里面的回调函数了，那么我们调用sleepFirst的时候就不能先延迟再执行constructor的回调函数了。