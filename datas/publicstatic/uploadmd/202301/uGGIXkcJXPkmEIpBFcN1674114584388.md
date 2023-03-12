##### 一、安装nrm
使用全局安装nrm就可以了，如下：
```shell
npm install -g nrm
```

##### 二、使用nrm
&emsp;&emsp;1、查看nrm管理的源：
```shell
nrm ls

* npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry
```

&emsp;&emsp;2、设置npm使用哪个源：
```shell
nrm use cnpm  //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/
```

&emsp;&emsp;3、添加源：
```shell
nrm add <registry> <url> [home]
```

&emsp;&emsp;更多nrm用法可以使用 **nrm -h** 命令查看，这里就不赘述了，也可以查看nrm官方文档[https://www.npmjs.com/package/nrm](https://www.npmjs.com/package/nrm)、[https://github.com/Pana/nrm](https://github.com/Pana/nrm)

&emsp;&emsp;我目前是在Windows10上面使用的nrm，说说可能遇到的问题吧：

&emsp;&emsp;一、**安装时报错了**：
```shell
C:\Users\Administrator>npm install -g nrm
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated mkdirp@0.3.5: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated coffee-script@1.7.1: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm ERR! code EPERM
npm ERR! syscall rename
npm ERR! path C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json.916894108
npm ERR! dest C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, rename 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json.916894108' -> 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json'
npm ERR!  [OperationalError: EPERM: operation not permitted, rename 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json.916894108' -> 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json'] {
npm ERR!   cause: [Error: EPERM: operation not permitted, rename 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json.916894108' -> 'C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\node_modules\jsprim\package.json'] {
npm ERR!     errno: -4048,
npm ERR!     code: 'EPERM',
npm ERR!     syscall: 'rename',
npm ERR!     path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\nrm\\node_modules\\jsprim\\package.json.916894108',
npm ERR!     dest: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\nrm\\node_modules\\jsprim\\package.json'
npm ERR!   },
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'rename',
npm ERR!   path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\nrm\\node_modules\\jsprim\\package.json.916894108',
npm ERR!   dest: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\nrm\\node_modules\\jsprim\\package.json',
npm ERR!   parent: 'nrm'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2021-03-07T09_36_12_254Z-debug.log
```
&emsp;&emsp;安装居然报错了，从报错来看像是因为被操作系统拒绝了操作，像是没有权限或者是要修改的文件正在被使用，于是尝试了以管理员的身份来运行，结果还是不行，于是尝试清理缓存，看看是不是有资源被占用着，如下：
```shell
C:\Users\Administrator> npm cache clean -force
npm WARN using --force I sure hope you know what you are doing.
```
&emsp;&emsp;随后再次安装，结果还是报上面的错，突然想起自己还安装了杀毒软件的呢，于是先尝试把360杀毒关了(我电脑上还有个360安全卫士和腾讯的电脑管家没关)，此时再次尝试安装，成功了！哈哈(Ｔ▽Ｔ)

&emsp;&emsp;二、**使用时报错了**：
```shell
C:\Users\Administrator>nrm ls
internal/validators.js:124
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
    ^

[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
  at validateString (internal/validators.js:124:11)
  at Object.join (path.js:375:7)
  at Object.<anonymous> (C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
  at Module._compile (internal/modules/cjs/loader.js:1063:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  at Module.load (internal/modules/cjs/loader.js:928:32)
  at Function.Module._load (internal/modules/cjs/loader.js:769:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  at internal/main/run_main_module.js:17:47
] {
  code: 'ERR_INVALID_ARG_TYPE'
}
```
&emsp;&emsp;如上，使用 **nrm ls** 命令报错了，不仅仅是nrm ls命令报错，nrm -h 、nrm add 等命令也报了上面那样的错。其实从上面报的错，我们就可以看出他是什么意思：
path方法的参数必须是字符串类型，但是接收到了一个undefined，然后从上面的报错信息，我们找到了“at Object.<anonymous> (C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)”这个文件，按照路径打开，找到17行20列，我们可以看到如下代码：
```JavaScript
const NRMRC = path.join(process.env.HOME, '.nrmrc');
```
**说说原因：** 我的操作系统是windows10 64位,node.js v14.16.0，我想可能和操作系统有关吧，你也可以把process.env打印出来，就会发现process.env.HOME是undefined的，他这里其实是要找到nrm的配置文件：.nrmrc，我在自己操作系统找了下，在“C:\Users\Administrator”下找到了.nrmrc文件，而“process.env.HOME”应该是node获取用户的home路径，但是在win10上面该用USERPROFILE，即process.env.USERPROFILE，USERPROFILE用于存储用户的应用程序和操作系统配置文件和个性化设置.

**解决方法：**
```JavaScript
/*
C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20
第17行代码原本是这样的：
const NRMRC = path.join(process.env.HOME, '.nrmrc');
但是，win10上面process.env.HOME 是undefined，所以我们可以改成如下代码：
*/
const NRMRC = path.join(process.env.USERPROFILE || process.env.HOME, '.nrmrc');
```
&emsp;&emsp;改完之后，我们就可以再使用命令行看下效果啦：
```shell
C:\Users\Administrator>nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```
&emsp;&emsp;我们看到，已经OK啦！