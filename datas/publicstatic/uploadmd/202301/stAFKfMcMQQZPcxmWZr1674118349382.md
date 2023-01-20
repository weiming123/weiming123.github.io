&emsp;&emsp;前面网站上有个复制、粘贴的控制，就是在你复制网页上面的内容的时候，在复制的内容下面加一个如下的提示：
```JavaScript
————————————————
版权声明:原文出自 [ 爱生活爱编程 ] 转载请注明出处并保留原文链接。
原文链接:https://liu_yong.gitee.io/blogs/98/
```

&emsp;&emsp;其实这个对于复制者也没多少限制，但是朋友说有这个东西感觉不方便复制了，所以就决定去掉这个功能了，下面把实现的代码给贴出来，如果有需要的朋友可以看看，如果发现不好的地方欢迎指出、交流，邮箱：[liuyongfov@163.com](mailto:liuyongfov@163.com)

**js 实现复制、粘贴功能：**
```JavaScript
function addCopyRight() {
	let _body = document.body,
		selection = window.getSelection ? window.getSelection() : document.selection.createRange().text,
		blogName = '[ 爱生活爱编程 ]';
	if (window.clipboardData) {
		//兼容ie
		let pagelink ="\r\n————————————————\r\n版权声明:原文出自 "+blogName+" 转载请注明出处并保留原文链接。\r\n原文链接:"+document.location.href,
			copyText = selection + pagelink;
		window.clipboardData.setData ("Text", copyText);
		return false;
	} else {
		let pagelink ="<br />————————————————<br />版权声明:原文出自 "+blogName+" 转载请注明出处并保留原文链接。<br />原文链接:"+document.location.href,
			copyText = selection + pagelink,
			newDiv = document.createElement('div');
		newDiv.style.cssText=';position=absolute;left:-99999px;';
		_body.appendChild(newDiv);
		newDiv.innerHTML = copyText;
		selection.selectAllChildren(newDiv);
		window.setTimeout(function() {
			_body.removeChild(newDiv);
		},0);
	}
}


// 使用
document.oncopy = addCopyRight;
```

另外，在页面上**按F12、Ctrl+Shift+C、鼠标右键 等方式不能打开浏览器开发者模式**，是用的下面的代码控制的，有需要的朋友也可以看看，同样，如果发现不好的地方欢迎指出、交流，邮箱：[liuyongfov@163.com](mailto:liuyongfov@163.com)
```JavaScript
copyrightProtect(){
	document.onkeydown=function(e){
		var e = e || window.event;
		if(e.keyCode==123){
			return false;
		}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
			return false;
		}else if((e.ctrlKey)&&(e.keyCode==85)){
			return false;
		}else if((e.ctrlKey)&&(e.keyCode==83)){
			return false;
		}
	}
	document.oncontextmenu=function(e){
		return false;
	}
}
```
