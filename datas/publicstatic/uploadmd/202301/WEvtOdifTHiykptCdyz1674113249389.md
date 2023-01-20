&emsp;&emsp;git tag功能是一个很不错的能力，我们这里站在一个初学者入门的角度来说下该如何去使用git tag功能。
&emsp;&emsp;下面我们用自己“通俗易懂”的语言来描述我们使用tag功能的场景：
&emsp;&emsp;现在我们在自己的分支上面开发完成了相应的需求，需要把这个需求上线到生产环境去。那么我们需要把自己分支代码合并到线上分支去吧，但是就这样合并到生产分支去总得担心下万一上到生产环境后出问题了呢？万一要回滚代码呢？万一别人在我合并代码之后也合并到生产分支去了然后我还要回滚我的代码？。。。
&emsp;&emsp;这个时候我们要回滚代码那肯定要找到自己提交的记录里面从哪个记录开始到哪个记录是自己的修改吧。这个时候我们可以使用查看提交记录的功能来查看哪些是需要回滚的，哪些是需要保留的，但是作为一个闻名世界的版本控制工具还有什么更好的方式可以提供给我们了吗？
&emsp;&emsp;答案是肯定的，有。比如我们这里要讲的git 打标签功能。
&emsp;&emsp;那么我们这里git tag的功能放在一个假设的场景中来说，这个场景也可能是大家会经常遇到的其中一个。
&emsp;&emsp;现在我们上线自己的需求，那么我们要先合并自己的需求分支代码到生产分支去。于是有了如下的操作：
```JavaScript
// 我们先使用**git tag**命令查看当前项目有哪些tag(标签)：
git tag

// 我们还可以切换到生产分支上面，使用**git log**查看最近的历史记录上是否打了tag的：
git log
// 如下，历史记录后面括号里面有个tag: testtag3,代表这个历史记录是打了tag的，名称是testtag3：
commit 8daccefc1c0916acefecc5cfd72140627a2c6911 (HEAD -> master, tag: testtag3)

// 如果最近的这个历史记录没有打标签，我们可以使用**git tag**命令给他打一个：
git tag beforeMyDemandCommit
// 当然我们还可以为自己的tag加一些备注，这样我们就日后就可以更容易查看、回忆起这个tag的意义所在了：
git tag -a beforeMyDemandCommit -m "在我的需求分支合并之前的提交记录，如果到时候我的需求上线了，但是出问题了，我可以直接用这个tag来快速回滚以前的代码，实在太酷了"
// 当然我们还发现上面的备注比较长，如果都在命令行里面写有点难看了，于是其实我们还可以：
git tag -a beforeMyDemandCommit
// 如果是gitbash会自动打开一个vim编辑器，这样我们就可以编辑大量的内容来完成我们的备注了
// 随后我们合并自己的分支到生产分支上面，然后记得再一次为自己合并后的提交打一个tag，这样别人也能更清楚自己之前的是个什么tag。

// 如果之前的代码没有打tag，而我们又忘了在自己合并分支前为之前的代码打上tag，我们可以给历史版本打上tag：
git tag beforeMyDemandCommit 8daccefc1c0916acefecc5cfd72140627a2c6911 

// 那么如果是别人或者说我们自己要查看之前的tag具体详情，可以使用**git show**命令查看
git show beforeMyDemandCommit
// **git show**命令会列出tag的作者、日期、备注，对应的commit的id、作者、日期、备注、修改等。

// 如果tag很多，我们还可以过滤自己想要的tag：
git tag -l "before*"

// 接下来我们把tag同步到远程仓库去，这样别的小伙伴也能看到我们打的tag了：
git push origin beforeMyDemandCommit
// 如果有多个tag要全部推送到远程，我们还可以：
git push origin --tags

// 如果需要回滚，有了commit的id，那么就可以快速回滚喽。。。
// 当然，对于回滚，有了tag我们还有其他方式(骚操作)：
// 使用**git checkout**命令，可以切换到对应tag对应的代码，但是，这时候 git 可能会提示你当前处于一个“detached HEAD" 状态。
git checkout beforeMyDemandCommit
// 于是我们在这个tag上再切换出一个分支来，然后在新的分支上来进行新的操作。
// 因为tag相当于一个快照，所以最好不要在这个tag上进行修改操作，当然如果你在这个tag上面进行了新增、commit等操作，在你离开时git也会提示你：
// "you are leaving 1 commit behind, not connected toany of your branches......"
// 所以这时最好是切换出一个新的分支来：
git checkout -b newTmpBranch
/* 如果有甲、乙、丙依次发布了生产的代码，其中乙的代码出了问题，需要回滚，
然后自己在线下先把问题改好并且验证好了再重新上线，那么再此回滚后到乙重新上线的期间，
甲、丙的代码需要保留，于是我们就可以切换到甲提交后的tag，然后切换一个新的分支来，
然后再把丙的代码合并过去，再在这个分支上打包发布即可 */

// 当然在一个tag基础上切换出一个分支来是有更简单的方式的：
git checkout -b newTmpBranch beforeMyDemandCommit

// 如果我们有的tag已经不会再用到了，我们还可以删除无用了的tag：
git tag -d beforeMyDemandCommit

// 如果删除服务器上的tag，我们还可以：
git push origin :refs/tags/beforeMyDemandCommit
```
值得注意的几点：
&emsp;&emsp;一、git commit的提交记录通常只有在对应的分支或者合并后的分支上面才能看到，而tag却可以在其他分支也能看到并被使用
&emsp;&emsp;二、切换到tag上面后尽量再在tag上切换到一个新的分支上去做修改，不要直接在tag上做修改

&emsp;&emsp;上面结合使用场景来说了一些常用到的git tag的命令和功能，下面我们还是把git tag一些常用的命令列出来吧，这样才会更方便我们使用和记忆嘛。

**git tag TagName**:新建一个tag，如果这个tag已存在会失败，并提示“fatal: tag 'testtag1' already exists”
**git tag TagName CommitId**:给某个提交历史版本打标签
**git tag -a TagName -m "Remarks"**：打标签，并给标签写一个备注
**git tag -a TagName**：打标签，git会随后让用户在一个文件里面写备注
**git tag**：列出当前仓库本地的所有标签，不仅仅是当前分支的哟
**git show TagName**:查看标签信息
git tag -l "before*"：过滤出符合条件的tag名称
**git push origin TagName**：把tag推送到远程仓库
**git push origin --tags**：把所有tag都推送到远程仓库
**git checkout TagName**：切换到某个tag去
**git checkout -b NewBranchName TagName**:以某个tag为基准创建分支
**git tag -d TagName**：删除本地某个tag
**git push origin :refs/tags/TagName**：删除远程的某个tag