环境：vue2.x,vant2.x

咱也不废话，先说说解决办法：用一个div把van-popup包裹起来。

下面说说过程(废话)：

项目内使用到了vant的van-popup组件，而使用的人为了组件内的配置、方法内重用，于是在自己项目内单独封装了一个组件，这个组件内就只有一个van-popup以及van-popup弹层内的内容，代码示例如下：
组件testComponent.vue:
```javascript
<template>
  <van-popup
    v-model="show"
    :lazy-render="false"
    class="protocol-popup"
    position="right"
    get-container="body"
  >
    <p>我是一句测试的话</p>
  </van-popup>
</template>
```

当然，真正的代码不可能是这样的，这里只是为了方便大家看，这么简化了而已。
然后在页面上引入了这个testComponent组件，传show参数控制弹层显示隐藏，然而在隐藏的时候缺报了个错，错误提示如下：
```shell
[Vue warn]:Error in beforeDestroy hook:"HierarchyRequestError:Failed to execute 'appendChild' on 'Node':The new child element contains the parent."  ...
DOMException{stack:"Error:Failed to execute 'a...
```

虽然这个错误不影响到我们主要效果的实现，但是作为一个有代码洁癖的程序猿，不可能在这么明显报错的情况下还视而不见吧，于是在下跟踪了下错误。。。
发现在vant的源代码一个文件里面有这么一句话，
文件相对位置：node_modules\vant\es\mixins\popup\index.js
代码：
```javascript
beforeDestroy: function beforeDestroy() {
    this.close();
    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
```

如果你在mounted里面去打印这几个参数的话，就会发现：
this.getContainer其实是：body
this.$parent其实是：testComponent组件实例
this.$parent.$el 其实是：组件的根元素对象，这里就是van-popup
this.$el 其实是：van-popup实例
于是我们发现，这里的this.$parent.$el.appendChild(this.$el);其实就是自己appendChild了自己，这就是为什么会发生DOM报错了，那么解决问题其实也简单，就是在testComponent组件不要直接用van-popup，加个div包裹起来就可以了。如：
```javascript
<template>
  <div>
    <van-popup
      v-model="show"
      :lazy-render="false"
      class="protocol-popup"
      position="right"
      get-container="body"
    >
      <p>我是一句测试的话</p>
    </van-popup>
  </div>
</template>
```