&emsp;&emsp;**git stash命令的作用总结来说就是**：将工作区的修改保存到一个特定的空间去，然后将工作区的修改撤销掉。需要注意的是，只能保存git已经跟踪的文件，新建文件并且没有commit过的就无法保存了，而 git stash 暂存起来的修改是可以应用到当前或者其他分支上面去的。

下面，我们就来说说 git stash 常用的命令：

##### git stash 暂存工作区git已跟踪的文件修改
&emsp;&emsp;命令：git stash [save message]
&emsp;&emsp;举例1：git stash
&emsp;&emsp;举例2：git stash save "test stash command"
&emsp;&emsp;tips：git stash 后跟 save "test stash command" ，可以给我们暂存的内容加个备注，如果不是暂存后立即使用并且很快就删除的暂存内容，我们建议都加上备注内容，方便我们以后自己回忆起为何要暂存、暂存的是什么等。

##### git stash list 查看所有暂存条目
&emsp;&emsp;命令：git stash list
&emsp;&emsp;tips：查看的是当前还存在的，不管是在哪个分支上建立的stash 暂存，都可以查看，stash 暂存也可以应用于任何分支

##### git stash show 查看某条目修改情况
&emsp;&emsp;命令：git stash show [options] [stash]

&emsp;&emsp;命令：git stash show
&emsp;&emsp;tips：查看最近的stash暂存的修改情况，只展示修改的文件名、修改处、文件修改数量、插入、删除数量等简略信息。

&emsp;&emsp;命令：git stash show &lt;stash&gt;​ 
&emsp;&emsp;举例：git stash show stash@{0}
&emsp;&emsp;tips：查看stash@{0}暂存的修改情况，只展示修改的文件名、修改处、文件修改数量、插入、删除数量等简略信息。

&emsp;&emsp;命令：git stash show -a
&emsp;&emsp;tips：查看最近的stash暂存的**详细的修改情况**。

&emsp;&emsp;命令：git stash show &lt;stash&gt;​ -a
&emsp;&emsp;举例：git stash show stash@{0} -a
&emsp;&emsp;tips：查看stash@{0}暂存的**详细的修改情况**。

##### git stash pop 应用某条暂存的修改并删除该条暂存
&emsp;&emsp;命令：git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]

&emsp;&emsp;举例1：git stash pop
&emsp;&emsp;tips：应用stash最近的暂存的一个条目修改到当前分支上，并删除该条目

&emsp;&emsp;举例2：git stash pop stash@{1}
&emsp;&emsp;tips：应用stash@{1}暂存的一个条目修改到当前分支上，并删除该条目

##### git stash drop 删除某条暂存
&emsp;&emsp;命令：git stash drop [-q|--quiet] [&lt;stash&gt;​]
&emsp;&emsp;举例：git stash drop stash@{2}

##### git stash apply 应用某条暂存到当前分支
&emsp;&emsp;命令：git stash apply [&lt;stash&gt;​]
&emsp;&emsp;举例：git stash apply stash@{2}

##### git stash clear 清空所有的暂存条目
&emsp;&emsp;命令：git stash clear


我们再举个例子，在实际的情况中stash可能的用法：

&emsp;&emsp;当我们在修改代码的时候，本来应该在我们的需求分支上面去修改的，但是我们当前分支是生产分支，而我们又不小心把生成分支当成是自己的需求分支了，并且已经修改了很多代码了，我们现在有什么快捷的办法把我们的修改应用到我们需求分支上面去呢？
&emsp;&emsp;这时我们就可以如下操作：
1、git stash (暂存在生产分支的修改：如果有已经commit的需要先使用 [git cherry-pick](https://liu_yong.gitee.io.site/blogs/84/) 命令迁移这些commit,生产分支的commit记录可以使用 [git reset](https://liu_yong.gitee.io/blogs/82/) 恢复；如果还未commit但是有add 的修改，那么可以使用 [git 撤销暂存区的修改](https://liu_yong.gitee.io/blogs/76/) 方式来恢复到工作区，然后再暂存起来)
2、git checkout 切换到需求分支(git stash后如果有新建的文件没有被暂存起来，不用管他们，直接切换分支即可[点我查看 git checkout 更多用法](https://liu_yong.gitee.io/blogs/80/)。git 2.23 版本后也可以使用git switch命令来切换分支等[点我查看 git switch 更多用法](https://liu_yong.gitee.io/blogs/79/))
3、git stash pop(将刚刚暂存的修改应用到需求分支即可)


参考资料：
[https://git-scm.com/docs/git-stash](https://git-scm.com/docs/git-stash)
