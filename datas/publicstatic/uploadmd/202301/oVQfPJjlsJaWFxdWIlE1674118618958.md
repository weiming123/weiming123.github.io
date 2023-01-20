&emsp;&emsp;git 2.23 版本新增了switch、restore命令，因为git checkout 命令职责较多、不够明确，但是到目前2.27 版本，switch、restore命令还是实验性的，至少在将来一段时间内，checkout命令还是有着用武之地的，所以这里我们来看看checkout命令的一些常用用法。
&emsp;&emsp;git checkout命令的作用总结来说就是：切换分支或恢复工作区文件。

##### git checkout 撤销工作区的修改

###### &emsp;&emsp;git checkout 撤销工作区某个文件的修改
&emsp;&emsp;&emsp;&emsp;命令：git checkout [- -] [&lt;pathspec&gt;…​]
&emsp;&emsp;&emsp;&emsp;举例：git checkout - - test.js
&emsp;&emsp;&emsp;&emsp;tips：如果不用- -，有时也可以，但是如果我们有个分支的名字和文件名字重合了就不能撤销这个文件的修改了

###### &emsp;&emsp;git checkout 撤销工作区某些文件的修改
&emsp;&emsp;&emsp;&emsp;命令：git checkout [- -] [&lt;pathspec&gt;…​]
&emsp;&emsp;&emsp;&emsp;举例：git checkout - - "*.txt"
&emsp;&emsp;&emsp;&emsp;tips：撤销工作区所有.txt文件的修改

###### &emsp;&emsp;git checkout 撤销工作区所有文件的修改
&emsp;&emsp;&emsp;&emsp;命令：git checkout .

tips：
一、git checkout 撤销了工作区的修改后，git无法恢复这种撤销操作，也就是说撤销后，工作区的修改就彻底没有了，因为工作区的修改还没有纳入git管理的范畴。
二、git checkout 不能撤销没有纳入git管理的文件在工作区的修改，如果某个文件还没有被commit到仓库，只是add了，还是可以撤销其在工作区新做的修改的。
三、如果某个文件已经纳入git的管理了，在工作区删除这个文件，是可以通过git checkout来恢复的。

##### git checkout 切换分支

###### &emsp;&emsp;git checkout 切换并创建一个新的分支
&emsp;&emsp;&emsp;&emsp;命令：git checkout -b [&lt;branchName&gt;…​]
&emsp;&emsp;&emsp;&emsp;举例：git checkout -b test2
&emsp;&emsp;&emsp;&emsp;tips：如果本地仓库名为test2的分支已存在，那么会报：fatal: A branch named 'test2' already exists.

###### &emsp;&emsp;git checkout 切换到已有分支
&emsp;&emsp;&emsp;&emsp;命令：git checkout [&lt;branchName&gt;…​]
&emsp;&emsp;&emsp;&emsp;举例：git checkout test2
&emsp;&emsp;&emsp;&emsp;tips：如果本地仓库没有这个分支，那么会报：error: pathspec 'testtest' did not match any file(s) known to git

###### &emsp;&emsp;git checkout 新建一个本地分支并关联到远程分支
&emsp;&emsp;&emsp;&emsp;命令：git checkout -b &lt;branchName&gt;​ --track &lt;remote&gt;​/&lt;branchName&gt;​
&emsp;&emsp;&emsp;&emsp;举例：git checkout -b testcopy origin/testcopy
&emsp;&emsp;&emsp;&emsp;tips：如果是远程新建的分支，本地还没有这个远程分支，可以使用git remote update 或 git pull更新一下。--track 是默认选项，即建立本地分支与对应远程分支的追踪关系；如果不希望建立起追踪关系，可以使用 --no-track 。

tips:
一、如果有文件已经提交到git仓库了，现在在暂存区或工作区有新的修改但是没有提交的，切换分支的时候会报错，如：error: Your local changes to the following files would be overwritten by checkout:。。。此时需要提交了文件的修改或是撤销文件在暂存区及工作区的修改才可以切换到其他分支去。
二、如果有新增的文件还没有提交到git仓库过，只是提交到暂存区或修改还在工作区，那么这时是可以切换分支的。

##### git checkout 从tag中切换新分支
&emsp;&emsp;命令：git checkout -b &lt;branchName&gt;​ &lt;tagName&gt;​
&emsp;&emsp;举例：git checkout -b testtagbranch testtag

##### git checkout 从历史版本中切换新分支
&emsp;&emsp;命令：git checkout -b &lt;branchName&gt;​ &lt;commitId&gt;​
&emsp;&emsp;举例：git checkout -b testcommitbranch 15b3153b
&emsp;&emsp;tips：这里的版本id不一定要是本分支的历史版本里面的哦。

其他：
[git restore命令的常用用法](https://liu_yong.gitee.io/blogs/78/)
[git switch命令的常用用法](https://liu_yong.gitee.io/blogs/79/)
参考资料：
[https://git-scm.com/docs/git-checkout](https://git-scm.com/docs/git-checkout)
