&emsp;&emsp;我们这里来说下vscode 配置 EditorConfig来统一编辑器的代码格式。

&emsp;&emsp;**为什么要配置EditorConfig呢？**
&emsp;&emsp;我们做团队开发的时候，因为考虑到配合的问题，代码风格最好是统一的，不仅仅是因为看着好看一些，有些同事用的编辑器可以自动格式化，如果和其他同事的风格不统一，可能导致格式化后的代码格式不一样，导致git提交的时候会有很多的变动，而且很多变动可能还仅仅是格式的变动，和业务没有关系，这种变动我们通常认为是应当避免的，因为这可能会扰乱我们后期分析代码历史变动原因等。

&emsp;&emsp;**来自EditorConfig官方对EditorConfig的定义**
&emsp;&emsp;EditorConfig有助于为跨不同编辑器和IDE从事同一项目的多个开发人员维护一致的编码样式。EditorConfig项目包括用于定义编码样式的文件格式和使编辑器能够读取文件格式并坚持定义样式的文本编辑器插件集合。EditorConfig文件易于读取，并且与版本控制系统工作良好。

下面我们说是如何使用EditorConfig：

有一些编辑器直接配置一个.editorconfig配置文件就可以使用了，比如webstorm；有一些编辑器需要安装插件，然后再配置.editorconfig配置文件才可以使用，比如vscode、atom，更多关于是否需要安装插件可以查看 EditorConfig 官网，我们这里说下vscode上面怎么配置：

一、在vscode上安装插件：EditorConfig for Visual Studio Code

二、配置.editorconfig（其他编辑器配置的.editorconfig文件是一样的），示例和说明如下：

下面贴下在下的.editorconfig文件内容及各个属性介绍：
```shell
#设置当前文件是否是最顶层.editorconfig配置文件。
#当打开一个文件的时候，EditorConfig会在打开的文件目录或者文件的父祖目录查找.editorconfig文件，
#直到到达根文件路径或者某个.editorconfig文件有root = true标志为止。
#EditorConfig文件自上而下读取，按照就近优先原则，
#匹配EditorConfig部分中的属性按读取顺序应用，因此在更近的文件中的属性优先。
root = true

#[]表示匹配哪些文件。
#如*匹配任何文件名，但路径分隔符除外；
#如**匹配任何文件名
#如?匹配任何一个字符
#如[name]匹配任何名称中的单个字符
#如[!name]匹配任何不具名的字符
#如{s1,s2,s3}匹配给定的任何字符串(用逗号分隔)(可从EditorConfig Core 0.11.0获得)
#如{num1..num2}	匹配num 1和num 2之间的任意整数，其中num 1和num 2可以是正整数或负整数。
[*]

#设置文件字符集。
charset = utf-8

#设置为tab或空格(space)。比如定义为tab时，缩进就使用tab来进行缩进
indent_style = tab

#定义用于每个缩进是几个空格宽度。
#比如2就代表缩进2个空格宽度，如果是使用tab来进行缩进就代表一个tab是2个空格。
indent_size = 2

#设置为lf、cr或crlf以控制行符的表示方式，也就是换行符是lf还是crlf还是cr。
end_of_line = lf

#设置为true，文件在保存时以换行符结尾;设置为false，文件结尾没有换行符。
insert_final_newline = true

#设置为true，删除换行符之前的任何空格字符；设置为false不会对换行符之前的空格做什么操作。
trim_trailing_whitespace = true
```


参考资料：
[https://editorconfig.org/](https://editorconfig.org/)