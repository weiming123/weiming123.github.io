&emsp;&emsp;废话不多说，上代码：
```JavaScript
/**
 * @description: 对象、数组的两个key交换值
 * @param {Object,i,j} 
 * @return: void
 */
function exchangeArray(obj,i,j){
    let tmp=obj[i];
    obj[i] = obj[j];
    obj[j]=tmp;
}

/**
 * @description: 快速排序-升序,快速排序算法是不稳定的算法
 * @param {Array} 
 * @return: Array
 */
function quickSortAsc(arr) {
    let sort=function(sarr, left=0, right=arr.length-1){
        if(left<right && sarr.length>1){
            //左边的索引小于右边的索引时，说明还需要排序，不然就是已经整理完了
            let _left=left,
                _right=right+1,
                mid=Math.floor((left+right)/2),
                pivot = sarr[mid];
            //取无序数组中间一个数为基准，这里是取的Math.floor((left+right)/2)
            //主要是如果数组本身就是有序的，那么取中间一个数做基准是最恰当的
            for(let i=left;i<_right;i++){
                if(sarr[i]<pivot){
                    //把所有小于等于基准的数都放到数组前面去
                    _left!=i && exchangeArray(sarr,_left,i);
                    //移动pivot的索引，方便后面放到_left位置去
                    if(_left==mid){
                        mid=i;
                    }
                    ++_left;
                }
            }
            //把所有小于基准的数都放到数组_left前面去了
            //现在把基准放到数组_left的位置处
            exchangeArray(sarr,_left,mid);
            //接下来递归排序基准左右两边的数组
            sort(sarr, left, _left-1);
            sort(sarr, _left+1, right);
        }
    }
    //复制一个新的数组，后面返回排序过的新数组
    let _arr=arr.concat();
    sort(_arr);
    return _arr;
}
```
&emsp;&emsp;从快速排序算法的思想和代码也可以看出，快速排序是不稳定的算法，也就是两个相等的数在经过快速排序之后他们的前后位置可能和排序之前不一样了。
&emsp;&emsp;算法只是思想而已，但是实现算法可能各又不同，有的算法的实现可能耗费的时间和需要占用的空间是不一样的。
&emsp;&emsp;这里quickSortAsc的实现，最坏的情况是，每次所选的中间数是当前序列中的最大或最小元素，这使得每次划分所得的子表中一个为空表，另一子表的长度为原表的长度-1。这样，长度为n的数据表的快速排序需要经过n趟划分，使得整个排序算法的时间复杂度为O(n2)。
&emsp;&emsp;快速排序的平均时间复杂度是O(nlogn)，最好情况是O(nlogn)，最坏情况是O(n*n)；空间复杂度为O(logn))。
&emsp;&emsp;代码请见于：[https://gitee.com/liu_yong/study/tree/master/vuees/src/assets/js/sort.js](https://gitee.com/liu_yong/study/tree/master/vuees/src/assets/js/sort.js)