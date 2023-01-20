&emsp;&emsp;安装上了ubuntu操作系统，需要使用root权限的时候，第一次使用了su命令，但是结果提示如下：
```shell
test@test-ubuntu:~$ su
密码： 
su: 认证失败
```

&emsp;&emsp;这时候出现 su: 认证失败 的的原因通常都是因为root没有默认密码，需要手动设定，而我们又还没有设置root密码导致的。

&emsp;&emsp;此时以安装ubuntu时输入的用户名登陆(如果你还每创建国其他用户，那么就是当前用户啦)，该用户在admin组中，有权限给root设定密码。此时我们可以在terminal 终端中这样操作：
```shell
test@test-ubuntu:~$ sudo passwd
[sudo] test 的密码： 
新的 密码： 
重新输入新的 密码： 
passwd：已成功更新密码
```
&emsp;&emsp;我们可以看到使用 sudo passwd root 命令就可以设置root的密码了，root 可以省略，成功更新后，下次再使用su命令切换root时就只需要输入密码就可以了。