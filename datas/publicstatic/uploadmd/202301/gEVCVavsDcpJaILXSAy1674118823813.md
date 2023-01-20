&emsp;&emsp;Git 可以说是目前最流行的分布式版本控制系统了，或许现在使用各种可视化工具的童鞋比较多，甚至可能忘了大部分命令了都有可能，不过通过学习、熟悉git的各种命令，也能让我们更好的来了解和使用git，所以了解下git的各种命令还是很有用的，这里我们来说说branch命令常用的用法。

#### git branch 查看本地分支，列出本地所有分支，在当前分支前加*
&emsp;&emsp;命令：git branch
&emsp;&emsp;运行结果示例：
```shell
$ git branch
* master
  test1
```

#### git branch -r 列出远程分支
&emsp;&emsp;命令：git branch -r
&emsp;&emsp;运行结果示例：
```shell
$ git branch -r
  origin/HEAD -> origin/master
  origin/master
```

#### git branch -a 列出本地分支和远程分支
&emsp;&emsp;命令：git branch -a
&emsp;&emsp;运行结果示例：
```shell
$ git branch -a
* master
  test1
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```
tips:如果有远程的分支没有显示出来，可以使用命令：**git fetch origin** 或 **git pull** 命令拉取远程信息更新本地

#### git branch &lt;branchname&gt; 创建分支命令
&emsp;&emsp;命令：git branch &lt;branchname&gt;
&emsp;&emsp;举例：git branch testbranch
&emsp;&emsp;tips:如果创建的分支名在本地已经存在会提示：fatal: A branch named 't1' already exists. 并且创建失败

#### git branch -d &lt;branchname&gt; 删除分支命令
&emsp;&emsp;命令：git branch -d &lt;branchname&gt;
&emsp;&emsp;举例：git branch -d testbranch
&emsp;&emsp;tips:如果要删除的分支有新的提交没有被合并过，那么会提示：error: The branch 't1' is not fully merged. 并且删除失败，如果要删除有新提交没有被合并过的分支，可以使用命令：  **git branch -D &lt;branchname&gt;** 命令强制删除，如：git branch -D testbranch

#### git branch -m &lt;oldName&gt; &lt;newName&gt; 修改分支名称命令
&emsp;&emsp;命令：git branch -m &lt;oldName&gt; &lt;newName&gt;
&emsp;&emsp;举例：git branch -m testbranch testbranch222
&emsp;&emsp;tips：如果是修改当前分支名称，可以省略分支原名称，即：git branch -m testbranch222 ，如果是修改其他分支名称则需要分支原名称。 分支原名称必须是本地已经存在的分支，修改后的名称必须是本地不存在的分支。

其他：
[switch 切换分支、根据远程分支切换新分支等](https://liu_yong.gitee.io/blogs/79/)
[checkout 切换分支、根据远程分支切换新分支等](https://liu_yong.gitee.io/blogs/80/)

参考资料：
[https://git-scm.com/docs/git-branch](https://git-scm.com/docs/git-branch)
