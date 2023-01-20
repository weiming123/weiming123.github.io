&emsp;&emsp;有的时候我们可能需要在一个操作系统上安装多个版本的node.js，这里在下介绍一些可用的方法。

一，MAC或Linux上可以用n模块管理node.js版本：

具体使用方法参考 [https://www.npmjs.com/package/n](https://www.npmjs.com/package/n) 即可

二、Windows上使用nvm来管理node.js版本：

&emsp;&emsp;国内下载nvm工具可能会很慢，这里分享一个下载链接：
链接：[https://pan.baidu.com/s/1-SET1rUr7V5i9X97dxOpNA](https://pan.baidu.com/s/1-SET1rUr7V5i9X97dxOpNA)
提取码：07s2

&emsp;&emsp;国内nvm下载node和npm速度可能会很慢，可以切换镜像源：
```shell
nvm node_mirror http://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

&emsp;&emsp;下载需要添加的node.js版本：nvm install &lt;version&gt;​
如：
```shell
nvm install 14.15.0
```

&emsp;&emsp;卸载不需要添加的node.js版本：nvm uninstall &lt;version&gt;​
如：nvm uninstall 14.15.0

&emsp;&emsp;查看本地所有的node.js版本：nvm list

&emsp;&emsp;切换node.js版本：nvm use [version] [arch]
如：nvm use 14.15.0
arch是指定的版本，如nvm use 14.15.0 64，我们一般都是64位操作系统和64位的node.js，默认可以省略了

&emsp;&emsp;查看更多关于nvm的命令：nvm -h