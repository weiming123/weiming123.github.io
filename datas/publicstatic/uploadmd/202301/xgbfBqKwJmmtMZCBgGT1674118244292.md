因为windows、Linux、Mac操作系统结束一行的符号不一样，可能导致我们在不同的操作系统下，编辑了同一个代码文件的某几行代码，结果却是整个文件都会出现改动需要提交的情况，而git core.autocrlf 配置项可以在提交和检出代码时自动转换换行符号，也就是说git core.autocrlf 配置项就是为了解决这个问题而出现的。

core.autocrlf 配置项有三个可选值：
true：提交时自动地把回车和换行转换成换行，而在检出代码时把换行转换成回车和换行。
input：提交时把回车和换行转换成换行，检出时不转换。
false：取消此功能，即不做转换处理。

Windows 使用回车（CR）和换行（LF）两个字符来结束一行，而 macOS 和 Linux 只使用换行（LF）一个字符，所以大家通常的做法是：

在Windows上设置：
```shell
git config --global core.autocrlf true
```

在macOS 和 Linux 上设置：
```shell
git config --global core.autocrlf input
```

**Tips**：
这里我们另外说下前面在下做的vite vue3 项目配置eslint和prettier还有项目配置的EditorConfig，都是把项目里面的结束一行的符号设置成了LF的，这意味着如果我们提交了代码，别人拉取了代码下来，如果拉取代码的人是在Windows上面，那一旦修改了某个文件，就会出现这个文件都提示要修改的情况，这种情况我们就需要我们配置一下**core.autocrlf** ：
```shell
git config --global core.autocrlf false
```
如果你在Windows系统上拉取了我练习的代码，你可能会发现你只要打开一个文件就会报下面的错：
```shell
Delete `␍`eslintprettier/prettier
```
这是也是因为 git core.autocrlf 配置项在windows默认转换了结束符为crlf，而我们的**eslint**和**prettier**又配置的是以lf为换行符的校验规则，**EditorConfig**也会让编辑器默认按lf换行符保存，最终可能会导致你一保存就整个文件都修改了，整个文件所有代码都需要提交的尴尬情况，这种情况我们也可以将core.autocrlf 配置为false，然后重新拉取一遍就可以了。

其他：
[vscode 配置 EditorConfig ](https://liu_yong.gitee.io/blogs/150/)
[vite vue3 项目配置eslint、prettier](https://liu_yong.gitee.io/blogs/152/)

[练习代码源码gitee地址](https://gitee.com/liu_yong/study/tree/master/vite2vue3study)

参考资料
[https://www.baidu.com/link?url=v4ND0ALSLJ6oYKBn_zA6U-f7EJRVuyRQu_MiMeEiEJ3wctRYFxrPUhACAXV7xYP6r_nMBXxSeht54KUoKuTouoZrj0FG0p9lNDQO0TN1Yc-kOis8boQwdhwSVdfli1CB&wd=&eqid=da346eeb0001c76f00000003614c7f64](https://www.baidu.com/link?url=v4ND0ALSLJ6oYKBn_zA6U-f7EJRVuyRQu_MiMeEiEJ3wctRYFxrPUhACAXV7xYP6r_nMBXxSeht54KUoKuTouoZrj0FG0p9lNDQO0TN1Yc-kOis8boQwdhwSVdfli1CB&wd=&eqid=da346eeb0001c76f00000003614c7f64)
