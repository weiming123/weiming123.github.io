&emsp;&emsp;文件操作是 node.js 里面非常重要的一系列API了，我们这里来说下一些常用的 API，这里是基于node 14的版本，我们的示例代码也是在windows10、node.js v14.15.0 版本上运行通过了的。

&emsp;&emsp;node.js 里面文件、文件夹操作主要通过文件系统fs模块提供支持，fs模块支持以标准POSIX函数建模的方式与文件系统进行交互。 

&emsp;&emsp;node.js 所有文件系统操作都具有同步、回调和基于 promise 三种形式来执行，并且获得相应执行结果。

&emsp;&emsp;下面大致说下这三种执行形式：

&emsp;&emsp;一、同步
&emsp;&emsp;&emsp;&emsp;说明：同步代码会阻塞node.js的事件循环和JavaScript的执行，知道文件操作完成返回结果，当然也可能是抛出异常，我们可以把文件操作放在 try…catch 块里面，通过catch来捕获这种异常，如果我们不通过 try…catch 捕获异常，那么他会继续向上层环境抛出。
&emsp;&emsp;除了 fs.FSWatcher() 和那些显式同步的使用 libuv 的线程池的API，其他文件系统的API使用同步的方式可能会对程序性能产生很大不好的影响。

&emsp;&emsp;示例代码：
```JavaScript
const fs = require('fs');
try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
```

&emsp;&emsp;二、回调
&emsp;&emsp;&emsp;&emsp;说明：
&emsp;&emsp;&emsp;&emsp;1、回调方式调用方法时，将完成后的回调函数作为其最后一个参数，并异步调用该函数，不会阻塞node.js的事件循环和函数后面的JavaScript代码执行
&emsp;&emsp;&emsp;&emsp;2、完成后的回调函数接收到的参数个数和参数数据取决于方法，但第一个参数始终是代表异常情况的数据，如果第一个参数为null或未定义则代表操作执行成功，否则代表操作执行异常。

&emsp;&emsp;示例代码：
```JavaScript
const fs = require('fs');
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
```

&emsp;&emsp;三、fs Promises API
&emsp;&emsp;&emsp;&emsp;说明：fs.promises API 提供了一组可选的异步文件系统方法。
fs.promises API返回一个 Promise 对象而不是回调函数，包括异常信息或文件操作返回的数据等，具体返回数据是由对应方法决定的。
这种形式不会阻塞node.js事件循环和后续JavaScript执行。
API 可以通过 require('fs').promises 或 require('fs/promises') 访问。

&emsp;&emsp;示例代码：
```JavaScript
const fs = require('fs/promises');
(async function(path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello');
```

&emsp;

&emsp;&emsp;因为同步的方式调用api对性能影响很大，而现在我们写js也很多都是用的es6及以上的版本了，或者是干脆用typescript 转js这类写法，所以用promise形式的api的时候更多一些，而相同功能主要就是用法或者名称不一样，所以我们这里也主要介绍想关功能在结合async await的promise形式的用法。

&emsp;下面我们来说说fs.promises 一些常用的用法和常用的API。

&emsp;&emsp;**一、通过 fs.promises.open 返回的对象实例来操作文件。**
```JavaScript
const fs = require('fs');
const fsPromises = fs.promises;

async function test1() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('test.txt', 'r+');
    console.log(await filehandle.readFile({encoding:'utf8'}))
    await filehandle.appendFile('test first line.\n')
    // filehandle.chmod(0o400)
    await filehandle.appendFile('test second line.\n')
    await filehandle.writeFile('test three line.\n',{encoding:'utf8'})
    await filehandle.write('test four line.\n')
    console.log(await filehandle.stat())
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}

test1()
```
如上示例，我们介绍下 FileHandle 方式来操作文件的一些常用的API：
1、fsPromises.open(path, flags[, mode])
&emsp;&emsp;异步方式打开文件，返回一个promise对象，当promise对象状态 resolved 后，生成一个FileHandle对象。
&emsp;&emsp;flags 是规定以什么方式打开文件后，后续可以做什么操作。 更多关于flags的使用可以参考：[https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags)
&emsp;&emsp;mode 是设置文件模式，但仅限于创建文件时。




&emsp;&emsp;**二、fs.promises对象本身挂载了一些方法，可以通过这些方法来操作文件、文件。**


参考资料：
[File system](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_stat_path_options_callback)