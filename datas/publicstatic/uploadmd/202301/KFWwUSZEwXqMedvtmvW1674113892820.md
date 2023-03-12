&emsp;&emsp;以前常用的一种方式是使用js的内置对象JSON提供的parse和stringify配合来做的，但是对于现在而言，有一些场景可能就不太能满足我们的需求了。下面结合代码来说。
```JavaScript
let s1=Symbol('s1');
let s2=Symbol('s2');
let o1={
  userName:'object one',
  testBoolean:true,
  testNumber:1,
  testBigInt:123n,
  testUnd:undefined,
  testNull:null,
  [s1]:'s1',
  s2:s2,
  testFunction:function(){
    console.log('test')
  },
  testObj:{
    myname:'testObj'
  },
  testSet:new Set([1,2,3,4,5]),
  testMap:new Map([
    ['myname','testMap']
  ]),
  testObj1:{
    testOO:{
      test1:[
        {
          dd:'1'
        },
        {
          testao:[
            {
              name:123
            }
          ]
        }
      ]
    }
  }
};
let o2={
  testStr:'o2 str',
  testNumber:2,
  testBoolean:true,
  testNull:null,
  testUnd:undefined,
  testObj2:{
    testOO:{
      test1:[
        {
          dd:'1'
        },
        {
          testao:[
            {
              name:123
            }
          ]
        }
      ]
    }
  }
};
```
如上代码，我们定义了o1和o2两个对象。
&emsp;&emsp;如果是以前对于普通的对象的深拷贝，我们可能会使用:
```JavaScript
JSON.parse(JSON.stringify(o2));
```
这种方式来拷贝出一个新的对象来。这种方法就是先对原来的对象进行序列化，然后再从序列化的字符串创建出新的对象来,这种方式也可以对数组和对象进行深度拷贝。
&emsp;&emsp;但是现在随着js标准的不断新增，数据类型也有了新的数据类型了，这种方式主要有以下几个问题：
1、不能正确的序列化Symbol、Set、Map、function类型数据。
2、对于新增的BigInt 数据类型使用JSON.stringify来序列化甚至直接报错。
3、对于值为undefined的属性直接被忽略了。
&emsp;&emsp;也就是说，如果你的变量是确定没有上面那些特殊变化或者对于值为undefined的属性可以直接忽略的化，那么使用JSON.parse(JSON.stringify(obj));这种方式来深拷贝还是很香的。
&emsp;&emsp;但是就是要对那些比较特殊点的数据类型也进行拷贝呢，下面在下写了个自己实现的方法，代码：
```JavaScript
function deepClone(variable){
  let _type=typeof variable;
  switch(_type){
    case 'object':
      if(variable===null){
        return null;
      }
      if(variable instanceof Boolean){
        return new Boolean(variable.toString());
      }
      if(variable instanceof Number){
        return new Number(variable.toString());
      }
      if(variable instanceof String){
        return new String(variable.toString());
      }
      if(variable instanceof Date){
        return new Date(d1.getTime());
      }
      if(variable instanceof RegExp){
        console.warn('正则表达式不需要深拷贝');
        return variable;
      }
      if(variable instanceof WeakSet){
        console.warn('暂时不支持对WeakSet类型的深拷贝,被拷贝WeakSet与原WeakSet是同一个');
        return variable;
      }
      if(variable instanceof WeakMap){
        console.warn('暂时不支持对WeakMap类型的深拷贝,被拷贝WeakMap与原WeakMap是同一个');
        return variable;
      }

      if(variable instanceof Set){
        let tmp=new Set();
        variable.forEach((value)=>{
          tmp.add(deepClone(value));
        });
        return tmp;
      }
      if(variable instanceof Map){
        let tmp=new Map();
        variable.forEach((value, key)=>{
          tmp.set(key,deepClone(value));
        });
        return tmp;
      }
      if(variable instanceof Array){
        let tmp=[];
        for(let i=0,len=variable.length;i<len;i++){
          tmp.push(deepClone(variable[i]));
        }
        return tmp;
      }
      let tmpObjKeys=Reflect.ownKeys(variable);
      let tmp={};
      for(let o=0,olen=tmpObjKeys.length;o<olen;o++){
        tmp[tmpObjKeys[o]]=deepClone(variable[tmpObjKeys[o]]);
      }
      return tmp;
    case 'function':
      console.warn('暂时不支持对函数类型的深拷贝,被拷贝函数与原函数是同一个');
      return variable;
    case 'undefined':
    case 'string':
    case 'boolean':
    case 'number':
    case 'bigint':
    case 'symbol':
      return variable;
    default:
      console.warn('unknown type param');
      return;
  }
}

//测试
let o11=deepClone(o1);

let o21=deepClone(o2);
let o22=JSON.parse(JSON.stringify(o2));
//去运行看看吧，结果太多，就不贴出来了
```
&emsp;&emsp;上面的代码就是根据当前的传入参数来进行拷贝出新的对象来，对于函数、正则表达式、WeakSet、WeakMap这些我也不知道怎么拷贝好，所以就没有拷贝了。
&emsp;&emsp;同时，我们也可以看出，上面是利用了递归来对对象、数组等进行深拷贝的，但是我们知道js引擎对于递归没有特别的优化，性能可能不是很好，所以如果你的需求使用JSON.parse(JSON.stringify(obj));这种方式就能满足的话，那就没必要用自己的方法来拷贝了。