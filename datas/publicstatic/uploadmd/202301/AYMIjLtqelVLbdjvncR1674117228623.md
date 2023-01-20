&emsp;&emsp;今天在用git的时候，使用git push的时候，提示我输入用户密码，输错了两次密码，后面再使用git push的时候，就报错了，错误信息如下：

```shell
remote: xxx: Incorrect username or password (access token)
fatal: Authentication failed for 'https://gitee.com/liu_yong/study.git/'
```

这是因为我的Windows保留了git的用户密码的缘故，而保留的这个用户密码其实是错误的，输错两次后又没有再提示输入用户名和密码了，所以就报的这个错了。
下面我们来说下怎么处理：
1、删除错误的用户名和密码：先找到windows凭据，我的电脑系统是win10的，可以在开始菜单栏里面找到设置，然后在Windows设置里面搜索"windows凭据"，就会出现管理windows凭据，然后点击他来的到凭据管理器这里，我们在windows凭据里面找到远程仓库的对应的这栏，展开他就会有编辑或者删除选项，我们可以编辑正确的用户名或密码就可以了，也可以删除他，删除后我们下次使用git的时候会提示我们再次输入用户名和密码。