&emsp;&emsp;git reset 常用的功能就是将当前分支头重置为&lt;commit&gt;​并可能根据&lt;mode&gt;​（模式）更新暂存区（将其重置为&lt;commit&gt;​的树）和工作树。这里&lt;commit&gt;​既可以是以前的某次提交，也可以是当前的提交记录，也可以是在我们前面的提交。如果省略&lt;mode&gt;，则默认为--mixed。

&emsp;&emsp;&lt;mode&gt;必须是这五种之一：hard、soft、mixed、merged、keep。默认模式是mixed。
&emsp;&emsp;常用的有hard、soft、mixed模式：
&emsp;&emsp;一、--soft ：重置 HEAD ，保留工作区和暂存区中的修改，并将重置 HEAD 所带来的差异放进暂存区。
&emsp;&emsp;二、--mixed ：重置 HEAD ，保留工作区的修改，并将暂存区的修改放进工作区，重置 HEAD 所带来的差异也放进工作区。
&emsp;&emsp;三、--hard：重置 HEAD ，并将当前工作区、暂存区更改为重置后的HEAD的内容，原来工作区和暂存区的修改将不会被保留，且git无法恢复没有追踪过的修改，即工作区的未add的修改就只能祭天了，当然可以试试还有没有其他工具能找到( * ^ _ ^ * )。

&emsp;&emsp;下面我们来说说git reset 的一些常用命令的用法。

##### git reset 将暂存区的文件修改放会到工作区

&emsp;&emsp;命令1：git reset -p
&emsp;&emsp;tips：将暂存区所有的修改都恢复到工作区去

&emsp;&emsp;命令2：git reset -p -- test1.txt
&emsp;&emsp;tips：将文件 test1.txt 在暂存区的修改恢复到工作区去
tips：这和git restore --staged 命令有些相似。

##### git reset 放弃工作区和暂存区的修改
&emsp;&emsp;命令：git reset --hard HEAD
&emsp;&emsp;tips：执行此命令后，工作区的修改git工具将无法恢复了，所以要谨慎操作哦

##### git reset 重置到某个版本库去，并根据版本库该&lt;commit&gt;重置工作区和暂存区
&emsp;&emsp;命令：git reset --hard &lt;commit&gt;
&emsp;&emsp;tips：执行此命令后，工作区的修改git工具将无法恢复了，所以要谨慎操作哦

##### git reset 重置到某个版本库去，并将新版本和重置前的版本的差异放入暂存区，不修改工作区，也不影响工作区的原有修改
&emsp;&emsp;命令：git reset --soft &lt;commit&gt;

##### git reset 重置到某个版本库去，并将新版本和重置前的版本的差异放入工作区，暂存区未提交的修改会被放到工作区去，工作区原有未提交的修改并不是直接被放弃，版本的差异是以合并的方式放入进去的
&emsp;&emsp;命令：git reset &lt;commit&gt;

tips：git reset 回退到以前的某个版本后，使用 **git log** 命令将不能查看到这个版本后面的commit记录了，这时可以使用 **git reflog** 命令查看最近本地所有commit 、reset 、merge 等记录

##### git 强制推送到远程仓库
&emsp;&emsp;命令：git push -f &lt;remote&gt; &lt;branch&gt;
&emsp;&emsp;举例：git push -f origin testcopy
&emsp;&emsp;tips：我们使用reset重置分支HEAD后，我们的版本可能会落后于远程仓库，如果我们的版本落后于远程仓库，直接使用git push无法推送到远程仓库，所以需要强制推送

##### git 使用远程仓库版本强制覆盖本地文件，与远程仓库保持一致
&emsp;&emsp;命令：
&emsp;&emsp;&emsp;&emsp;git fetch --all
&emsp;&emsp;&emsp;&emsp;git reset --hard &lt;remote&gt;/&lt;branch&gt;
&emsp;&emsp;&emsp;&emsp;git pull
&emsp;&emsp;tips：
&emsp;&emsp;&emsp;&emsp;如果小伙伴重置了某个分支的提交，并强制推送到了远程，而且我们拉取了重置之前版本，那么此时直接使用git pull是不能直接更新到重置后的版本去的，因为我们的版本比重置后的更前，所以只能使用上面几个命令来把自己分支的版本重置到与远程仓库保持一致。
&emsp;&emsp;&emsp;&emsp;这里，我们也能看出，如果使用reset重置了自己的版本，如果重置掉的版本没有推送到远程仓库还好，但是如果重置掉的版本已经推送到了远程仓库，我们重置后的版本落后于远程仓库了，那么就可能会比较麻烦，需要通知其他协同的小伙伴们强制更新自己本地仓库才能同步，如果其他小伙伴不知道你使用reset重置了，那么他们在下一次推送自己本地仓库到远程仓库的时候，还可能会把你重置的版本再一次推送上去，这样就要注意好沟通。

参考资料：
[https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86)
[https://git-scm.com/docs/git-reset/](https://git-scm.com/docs/git-reset/)
