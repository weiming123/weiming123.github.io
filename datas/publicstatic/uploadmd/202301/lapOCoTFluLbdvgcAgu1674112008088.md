下面直接上代码：
```JavaScript
/**
 * @description: 插入排序-升序,插入排序算法是稳定的算法,平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function insertionSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for (let i = 1; i < arrLength; i++) {
        let temp = _arr[i];
        let k = i - 1;
        while(k >= 0 && _arr[k] > temp){
            k--;
        }
        //腾出位置插进去,要插的位置是 k + 1;
        for(let j = i ; j > k + 1; j--){
            _arr[j] = _arr[j-1];
        }
        //插进去
        _arr[k+1] = temp;
    }
    return _arr;
}


/*上面那是常规的方法，下面这个是在下结合js数组的方法实现的，经过在下测试，速度比上面的会更快些。同时也更容易理解点
*/
function insertionSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for(let i=1;i<arrLength;i++){
        let current=_arr[i];
        for(var j=i-1;j>-1;j--){
            //从右向左找出第一个小于等于当前元素的元素
            if(current<_arr[j]){
                continue;
            }
            break;
        }
        //如果从右向左第一个小于等于当前元素的位置就在当前元素的前一位，就不用再做处理了
        if(j!=i-1){
            //将当前元素从数组取出，直接插入到从右向左第一个小于等于当前元素的位置后面
            _arr.splice(j+1,0,_arr.splice(i,1)[0]);
        }
    }
    return _arr;
}
```
&emsp;&emsp;从上面实现插入排序的代码，我们可以分析出：插入排序是稳定的排序算法，平均时间复杂度是O(n* n)，最好情况是O(n)，最坏情况是O(n*n)；空间复杂度是O(1)。
&emsp;&emsp;这里我们还说一下**折半插入排序**,
&emsp;&emsp;折半插入排序（Binary Insertion Sort）也叫二分插入排序，是对插入排序算法的一种改进。从上面插入排序的实现代码我们可以发现，在内层实现插入已排序数组的时候，我们是遍历有序数组的方式来在有序数组中插入新的元素的，而这里我们可以采用折半查找的方法来减少寻找插入点时的查找次数。
上代码：
```JavaScript

/**
 * @description: 折半插入排序-升序,折半插入排序算法是稳定的算法,平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function halveInsertionSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for(let i=1;i<arrLength;i++){
        let current=_arr[i],
            left = 0,
            right = i - 1;
        //折半查找
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(current<_arr[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        //如果从右向左第一个小于等于当前元素的位置就在当前元素的前一位，就不用再做处理了
        if(left!=i){
            //将当前元素从数组取出，直接插入到从右向左第一个小于等于当前元素的位置后面
            _arr.splice(left,0,_arr.splice(i,1)[0]);
        }
    }
    return _arr;
}
```
&emsp;&emsp;从上面实现折半插入排序的代码，我们可以分析出：折半插入排序是稳定的排序算法，平均时间复杂度是O(n* n)，最好情况是O(nlogn)，最坏情况是O(n*n)；空间复杂度是O(1)。
&emsp;&emsp;对于上面的代码值得一说的是splice其实也是移动数组元素重排的，但是我测试得出的是比自己在js代码里面来重排会更快一些，或许是因为他更底层吧。
代码请见于：https://gitee.com/liu_yong/study/tree/master/vuees