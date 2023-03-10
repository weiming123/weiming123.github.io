###### git restore 撤销文件工作区的修改
&emsp;&emsp;命令：git restore --worktree &lt;path&gt;
&emsp;&emsp;举例：git restore --worktree test2.txt
&emsp;&emsp;tips：如果暂存区有该文件的修改，恢复到和暂存区一致；如果暂存区没有该文件，会将工作区的文件恢复到和最近的提交的一致。--worktree 也可以省掉，即：git restore &lt;path&gt;

###### git restore 撤销工作区所有文件的修改
&emsp;&emsp;&emsp;&emsp;命令：git restore .

###### git restore 撤销暂存区的修改，将文件恢复到工作区去
&emsp;&emsp;命令：git restore --staged &lt;path&gt;
&emsp;&emsp;举例：git restore --staged test2.txt

&emsp;&emsp;举例2：git restore --staged '*.txt'
&emsp;&emsp;tips：git restore 撤销暂存区某些文件的修改，将这些文件恢复到工作区去

###### git restore 将工作区内容切换到上个 commit 版本
&emsp;&emsp;命令：git restore --source=HEAD~1 .

###### git restore 将工作区内容切换到某个版本库去
&emsp;&emsp;命令：git restore --source=&lt;commit&gt; .
&emsp;&emsp;举例：git restore --source=6271090 .
&emsp;&emsp;tips：这个命令是将当前工作区的内容都恢复到了版本6271090，但是不会改变历史记录，如果有提示需要有删除的文件等，可以使用git add，然后提交生成新的提交记录，这点和revert有些类似，但是也有不同，revert可能会生成多个重做的记录，但是restore不会生成新的记录，如果有文件增删改动可能需要自己做add和commit操作。


参考资料：
[https://git-scm.com/docs/git-restore](https://git-scm.com/docs/git-restore)
