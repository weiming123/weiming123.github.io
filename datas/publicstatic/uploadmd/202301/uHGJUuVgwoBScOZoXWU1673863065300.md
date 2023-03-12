冒泡排序算法的原理如下：
&emsp;&emsp;1、比较相邻的元素。如果第一个比第二个大，就交换他们两个。
&emsp;&emsp;2、对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
&emsp;&emsp;3、针对所有的元素重复以上的步骤，除了最后一个。
&emsp;&emsp;4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

废话不多说，上代码：
```JavaScript
/**
 * @description: 冒泡排序-升序,冒泡排序算法是稳定的算法
 * @param {Array}
 * @return: Array
 */
function bubbleSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    //循环整个数组，每一次找到一个最大值，由于最后交换时是前后两个交换，所以其实之需要arrLength - 2 次外层循环
    for (let i = 0, ilen = arrLength - 1; i < ilen; i++) {
	//把0至arrLength - i - 1再循环一次，找出这个子集里面最大的数，并移动到这个子集的最后一个位置上去，
	//arrLength - i - 1之后的集合其实就是已经排好序了的了，因为每一次内层循环都会把当前子集最大的数移到最后一位
        for (let j = 0; j < arrLength - i - 1; j++) {
            if (_arr[j] > _arr[j + 1]) {
                let temp = _arr[j];
                _arr[j] = _arr[j + 1];
                _arr[j + 1] = temp;
            }
        }
    }
    return _arr;
}
```
&emsp;&emsp;从冒泡排序算法的思想和我们这里实现的代码来也可以看出，冒泡排序是稳定的算法，即两个相等的数在经过冒泡排序之后他们的前后位置排序之前是一样的；它的平均时间复杂度是O(n* n)，最好情况是O(n)，最坏情况是O(n*n)；空间复杂度是O(1)。
&emsp;&emsp;我在自己电脑上测试的时候，对一个五万个随机数字的数组排序，冒泡排序算法需要253ms，快速排序只需要7ms，数组长度越大，差距就越明显。
&emsp;&emsp;代码请见于：https://gitee.com/liu_yong/study/tree/master/vuees/src/assets/js/sort.js