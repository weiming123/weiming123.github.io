&emsp;&emsp;在我们使用git的操作中，遇到需要回滚代码的情况几乎是难以避免的，而 git revert 功能也是非常实用的功能，掌握好 revert 的常用用法是很有必要的。

##### git revert 移除某次提交的修改
&emsp;&emsp;命令：git revert &lt;commit&gt;
&emsp;&emsp;举例：git revert bc64f61
&emsp;&emsp;tips：
&emsp;&emsp;&emsp;&emsp;一、这个命令会生成一个新的提交记录，新的提交记录的修改就是把要移除的那次需要移除的提交的修改抵消掉
&emsp;&emsp;&emsp;&emsp;二、如果工作区或暂存区还有修改未提交，那么会提示需要先提交或存储起来；
&emsp;&emsp;&emsp;&emsp;三、如果在移除的过程中发生了冲突，可以在解决了冲突后，使用 git add添加修改的冲突文件， **git revert --continue** 来继续操作，如果没有需要提交的，也可以使用 **git revert --skip** 来继续下一步，如果后续还有冲突，也同样如此，直到移除的操作全部完成；当然也可以使用 **git revert --abort** 来停止移除操作，恢复到执行git revert &lt;commit&gt;之前的状态。

##### git revert 移除某几次提交的修改
&emsp;&emsp;命令：git revert &lt;commit1&gt; &lt;commit2&gt; &lt;commit3&gt; ..
&emsp;&emsp;举例：git revert b7bc008 f6c8c08 ce73298

##### git revert 移除某几次连续的提交的修改
&emsp;&emsp;命令：git revert &lt;commit1&gt;..&lt;commit2&gt;
&emsp;&emsp;举例：git revert b7bc008...ce73298
&emsp;&emsp;tips：
&emsp;&emsp;&emsp;&emsp;一、移除的时候是移除&lt;commit1&gt;后到&lt;commit2&gt;的提交的修改的，但是不包含&lt;commit1&gt;，包含&lt;commit2&gt;；
&emsp;&emsp;&emsp;&emsp;二、移除过程中如果有冲突，不知道某次提交的修改内容，可以使用 **git show &lt;commit&gt;** 查看修改内容，git 冲突的时候会提示当前要还原的commit的id是多少，如：error: could not revert b7bc008... reset log 2，b7bc008就是要还原的commit的id；
&emsp;&emsp;&emsp;&emsp;三、过程中移除了几次提交的修改，也会响应的生成几次还原的commit记录。revert命令和reset不同的就是revert 过程中会生成新的提交记录，而reset是在指针在提交记录上前后移动，不生成新的提交记录。

##### git revert 移除某几次的提交的修改，但是不要使用还原的更改创建任何提交，还原只修改工作树和索引。
&emsp;&emsp;命令：git revert -n &lt;commit1&gt;..&lt;commit2&gt;
&emsp;&emsp;举例：git revert -n b7bc008...ce73298
&emsp;&emsp;tips：
&emsp;&emsp;还原\移除了多个commit提交的修改，但是最后我们只需要使用git add 命令，git revert --continue 就可以了，如果没有冲突的话，就只生成一个新的提交，而我们还原的两个甚至更多的提交，如果不使用-n标识，就会对应的生成多个提交来还原前面修改的提交了。
&emsp;&emsp;另外，如果产生了冲突，还是有可能会生成多个新的提交的哦。

##### git revert 移除merge的修改内容
&emsp;&emsp;命令：git revert [-m parent-number] &lt;commit&gt;…​
&emsp;&emsp;举例：git revert -m 1 63374e93eebd2b86882e5a4bb75dcd9d0e334b15
&emsp;&emsp;tips：
&emsp;&emsp;如果我们需要还原的提交的修改是merge的操作，直接使用 git revert &lt;commit&gt; 的方式是不行的，会提示我们：
error: commit  。。。 is a merge but no -m option was given.
fatal: revert failed
&emsp;&emsp;因为merge操作有两个分支，而revert不知道要还原哪个分支的提交记录的话，就没法进行还原\移除那些提交记录的修改的操作了，所以我们用-m 1来告诉git revert哪个是主线，哪个是非主线，非主线的提交就要被还原\移除了。
&emsp;&emsp;另外，这个主线是1还是2是从哪里看出来的呢？我们可以使用git show 命令查看，如果是普通的commit提交，通常会显示这个commit的id、作者、日期、备注、更改文件内容等；如果是merge的记录，则会显示merge 的commit id，备注、日期和merge的主线和合并过来的id，如：
commit 63374e93eebd2b86882e5a4bb75dcd9d0e334b15
Merge: bc64f61 72032b7
Author: unknown <test@163.com>
Date:   Sun Jul 19 11:34:21 2020 +0800

&emsp;&emsp;Merge branch 'testcopy2' into testcopy

&emsp;&emsp;如上，Merge: bc64f61 72032b7，bc64f61 就是主线的id，编号就是1；72032b7就是非主线的id，编号就是2。
&emsp;&emsp;此时，我们要把合并过来的分支的修改给还原掉，那么就可以指定1为主线，还原掉2的提交了。

参考资料：
[https://git-scm.com/docs/git-revert](https://git-scm.com/docs/git-revert)