&emsp;&emsp;用在不同的场景的时候，我们也可以有不同的实现，比如如果我们缓存的是任务的id，那么可以直接用一个数组来保存需要缓存或者说现在需要清理掉的任务；又比如如果我们缓存的是具体值，那么也可以用 key-value 的方式来作为缓存方式。
&emsp;&emsp;这里我们用代码来实现下缓存 key-value 的方式的数据：
```JavaScript
/*
 * @Author: liuyong
 * @Description: FIFO队列算法实现缓存
 */
class FIFOCache{
  constructor(maxCacheNum=10){
    this.maxCacheNum = maxCacheNum;
    this.cache = {};
    this.keys = [];
  }
  set(key,value){
    if(typeof value === 'undefined'){
      throw TypeError('value must be not undefined');
    }
    let cache = this.cache;
    let keys = this.keys;
    if(keys.indexOf(key) > -1){
      this.delete(key);
    }else if (keys.length === this.maxCacheNum) {
      delete cache[keys.shift()];
    }
    cache[key] = value;
    keys.push(key);
  }
  delete(key){
    let cache = this.cache;
    let keys = this.keys;
    for(let i=0,len=keys.length;i<len;i++){
      if(keys[i]===key){
        delete cache[keys.splice(i,1)[0]];
        return true;
      }
    }
    return false;
  }
  get(key){
    return this.cache[key];
  }
  clear(){
    this.cache={};
    this.keys.length=0;
  }
  getAllKeys(){
    return this.keys.concat();
  }
}
```
&emsp;&emsp;程序员嘛，不求源码就求那什么码，看到源码相信大家就已经明白大概是怎么回事了，其中值得注意的有这么几个地方：
1、在set方法里面，如果value是undefined那么就不再缓存了，毕竟缓存个undefined也没有意义。还要如果缓存的key已经存在了，那么需要验证下，我这里是把已经存在的删除了再新存，这样做的好处是新添加的会放到后面来，后面再超出缓存限制后不会删除这个新增加的，哪怕他在新增之前其实已经缓存过了。
2、delete方法有返回值，可以让你判断是否删除成功，或者说缓存里面是否还有对于这个key的缓存值。
3、getAllKeys方法返回的数组是和对象内的数组不是同一个数组了(我们这里存的可以默认是以字符串作为key的)，因为数组是引用数据类型，我们不希望在对返回的数组做某些修改的时候影响到了我们这个缓存对象里面的数组，所以getAllKeys方法返回的数组是一个新的数组了。