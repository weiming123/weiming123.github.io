#### &emsp;&emsp;问题：求 100 之内的素数

tips:

##### &emsp;&emsp;什么是素数？

&emsp;&emsp;素数又称质数，一个大于 1 的自然数，除了 1 和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数。

##### &emsp;&emsp;如何判断一个数是不是素数？

&emsp;&emsp;在一般领域，对正整数 n，如果用 2 到这个数的平方根
之间的所有整数去除，均无法整除，则 n 为质数。
&emsp;&emsp;质数大于等于 2 不能被它本身和 1 以外的数整除

&emsp;&emsp;实现代码:

```JavaScript
/**
 * @Description: 判断一个自然数是否是质数
 * @params: 自然数
 * @retrun: boolean(true:是质数，false:不是质数)
 */
function isPrime(num:number):boolean{
    let numSqrt=Math.sqrt(num);
    for(let i = 2;i<numSqrt+1;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

/**
 * @Description: 判断两个数字(包含n1，不包含n2)之间的质数有哪些，并返回这两个数字之间的所有质数组成的列表
 * @params: (n1,n2) 都是大于1的自然数，n1:查找大于等于n1的质数，n2：查找小于n2的质数
 * @retrun: 列表
 */
function rangeNumPrime(n1:number,n2:number):number[]{
    if(n1<2){
        console.error("素数范围是大于1的自然数")
        return []
    }
    if(n1>=n2){
        console.error("第二个参数必须大于第一个参数")
        return []
    }
    let primeNums=[]
    for(let num =n1;num<n2;num++){
        if(isPrime(num)){
            primeNums.push(num)
        }
    }
    return primeNums
}

// 测试运行结果
console.log(`100之内的素数有：${rangeNumPrime(2,100).toString()}`)
// 100之内的素数有：3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
```


#### &emsp;&emsp;问题：对10个数进行排序

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 插入排序
 * @params: number[]
 * @retrun: number[]
 */
function insertionSortAsc(arr:number[]):number[] {
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
        let j=i-1;
        for(;j>-1;j--){
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

/**
 * @Description: 对10个数进行排序
 * @params: number[]
 * @retrun: void
 */
function test(arr:number[]){
    let _arr=insertionSortAsc(arr)
    console.log(`${arr} 排序后的顺序是${_arr}`)
}

// 测试运行结果
test([1,45,564,234,45,234,2342,765,234,213])
// 1,45,564,234,45,234,2342,765,234,213 排序后的顺序是1,45,45,213,234,234,234,564,765,2342
```
这里题目说的是对10个数排序，所以我们选择了插入排序法来完成




#### &emsp;&emsp;问题：有一个已经排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 对一个已经排好序的数组，现输入一个数，要求按原来的规律将它插入数组中
 * @params: number[]
 * @params: number
 * @retrun: number[]
 */
function insertSort(arr:number[],num):number[] {
    let _arr=arr.concat()
    if(_arr[_arr.length-1]<_arr[0]){
        for(let i=0;i<_arr.length;i++){
            if(_arr[i]<num){
                _arr.splice(i,0,num)
                return _arr
            }
        }
        _arr.unshift(num)
    }else{
        for(let i=0;i<_arr.length;i++){
            if(_arr[i]>num){
                _arr.splice(i,0,num)
                return _arr
            }
        }
        _arr.push(num)
    }
    return _arr
}

/**
 * @Description: 有一个已经排好序的数组。现输入一个数，要求按原来的规律将它插入数组中
 * @params: number[]
 * @params: number
 * @retrun: void
 */
function test(arr:number[],num:number){
    let _arr=insertSort(arr,num)
    console.log(`${arr} 插入后结果是：${_arr}`)
}

// 测试运行结果
test([1,3,3453,453345,4534533],10)
// 1,3,3453,453345,4534533 插入后结果是：1,3,10,3453,453345,4534533

test([1,3,3453,453345,4534533].reverse(),10)
// 4534533,453345,3453,3,1 插入后结果是：4534533,453345,3453,10,3,1
```
我们这里是遍历的方式来找出适合我们插入的数字的位置的，你还可以试下用二分法的思想来插入，如果数组长度非常大的话，二分法的效率可能会高很多



#### &emsp;&emsp;问题：一个5位数，判断它是不是回文数。即12321是回文数，个位与万位相同，十位与千位相同。

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 判断一个数字是否是回文数
 * @params: number
 * @retrun: boolean
 */
function palindromenumber(num:number=1):boolean{
    if(num<1 && Math.floor(num)!==num){
        console.error('请输入正整数')
        return false
    }
    let tmp=num.toString().split('')
    let len=tmp.length
    for(let i=0;i<len;i++){
        if(i>=len-1-i){
            break
        }
        if(tmp[i]!==tmp[len-1-i]){
            return false
        }
    }
    return true
}

// 测试运行结果
console.log(palindromenumber(12321))
// true
console.log(palindromenumber(123))
// false
```



&emsp;&emsp;**问题**：判断101-200之间有多少个素数，并输出所有素数。

tips:
##### &emsp;&emsp;什么是素数？
&emsp;&emsp;素数又称质数，一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数。
##### &emsp;&emsp;如何判断一个数是不是素数？
&emsp;&emsp;在一般领域，对正整数n，如果用2到这个数的平方根
之间的所有整数去除，均无法整除，则n为质数。
&emsp;&emsp;质数大于等于2 不能被它本身和1以外的数整除

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 判断一个自然数是否是质数
 * @params: 自然数
 * @retrun: boolean(true:是质数，false:不是质数)
 */
function isPrime(num:number):boolean{
    let numSqrt=Math.sqrt(num);
    for(let i = 2;i<numSqrt+1;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

/**
 * @Description: 判断两个数字(包含n1，不包含n2)之间的质数有哪些，并返回这两个数字之间的所有质数组成的列表
 * @params: (n1,n2) 都是大于1的自然数，n1:查找大于等于n1的质数，n2：查找小于n2的质数
 * @retrun: 列表
 */
function rangeNumPrime(n1:number,n2:number):number[]{
    if(n1<2){
        console.error("素数范围是大于1的自然数")
        return []
    }
    if(n1>=n2){
        console.error("第二个参数必须大于第一个参数")
        return []
    }
    let primeNums=[]
    for(let num =n1;num<n2;num++){
        if(isPrime(num)){
            primeNums.push(num)
        }
    }
    return primeNums
}

// 以列表的形式打印出101(包含)到200(不包含)的质数
console.log(rangeNumPrime(101,200))

// 打印結果
[
  101, 103, 107, 109, 113,
  127, 131, 137, 139, 149,
  151, 157, 163, 167, 173,
  179, 181, 191, 193, 197,
  199
]
```


#### &emsp;&emsp;问题：一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在 第10次落地时，共经过多少米？第10次反弹多高？

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 经过times次反弹后，算出经过了多少距离和当次高度
 * @params: (number)初始高度
 * @params: (number)反跳次数
 * @retrun: object
 */
function moutionComputing(initHeight:number=0,times:number=0):object{
    let totalLength=0
    let reboundHeight=initHeight
    while(reboundHeight>0 && times>0){
        --times
        totalLength +=reboundHeight*1.5
        reboundHeight=reboundHeight/2
    }
    return {
        totalLength,
        reboundHeight
    }
}

// 测试运行结果
let tmp=moutionComputing(100,10)
console.log(`从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，它在 第10次落地时，共经过${tmp.totalLength}米,第10次反弹${tmp.reboundHeight}米？`)

// 从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，它在 第10次落地时，共经过299.70703125米,第10次反弹0.09765625米？
```


#### &emsp;&emsp;问题：输入三个整数x,y,z，请把这三个数由小到大输出

&emsp;&emsp;tips:最简单的办法就是直接排序就可以了，我们这里使用js自带的sort排序就可以了，代码比较简单，

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 传入三个整数x,y,z，把这三个数由小到大输出
 * @params: (number) x
 * @params: (number) y
 * @params: (number) z
 * @retrun: void
 */
function printSortNum(x:number,y:number,z:number):void{
    let arr=[x,y,z]
    arr.sort((prev,curr)=>{
        return prev - curr
    })
    console.log(arr.toString())
}

// 测试运行结果
printSortNum(2,546,23)
// 2,23,546
```



&emsp;&emsp;**问题**：输出所有的"水仙花数"

tips:
##### &emsp;&emsp;什么是水仙花数？
&emsp;&emsp;水仙花数（Narcissistic number）也被称为超完全数字不变数（pluperfect digital invariant, PPDI）、自恋数、自幂数、阿姆斯壮数或阿姆斯特朗数（Armstrong number），水仙花数是指一个 3 位数，它的每个位上的数字的 3次幂之和等于它本身（例如：1^3 + 5^3+ 3^3 = 153）

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 判断一个自然数是否是阿姆斯特朗数
 * @params: num 自然数
 * @retrun: boolean(true:是阿姆斯特朗数，false:不是阿姆斯特朗数)
 */
function isNarcissisticNumber(num:number):boolean{
    let _arr:any[]=num.toString().split('')
    let sum=0;
    let len=_arr.length;
    _arr.forEach(item=>{
        sum +=Math.pow(item,len)
    })
    if(sum===num){
        return true
    }
    return false
}

/**
 * @Description: 打印区间内阿姆斯特朗数
 * @params: n1 自然数
 * @params: n2 自然数,需大于n1
 * @retrun: []
 */
function printTestNarcissisticNumber(n1:number,n2:number){
    let tmp:number[]=[]
    for(let i= n1;i<n2;i++){
        if(isNarcissisticNumber(i)){
            tmp.push(i)
        }
    }
    return tmp
}

// 运行打印结果
console.log(`水仙花数： ${printTestNarcissisticNumber(100,1000).toString()}`)
水仙花数： 153,370,371,407

console.log(`四叶玫瑰数： ${printTestNarcissisticNumber(1000,10000).toString()}`)
四叶玫瑰数： 1634,8208,9474

console.log(`五角星数： ${printTestNarcissisticNumber(10000,100000).toString()}`)
五角星数： 54748,92727,93084
```



#### &emsp;&emsp;问题：两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。已抽签决定比赛名单。有人向队员打听比赛的名单。a说他不和x比，c说他不和x,z比，请编程序找出三队赛手的名单。
&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 乒乓球队进行比赛名单问题
 * 两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。
 * 已抽签决定比赛名单。有人向队员打听比赛的名单。a说他不和x比，c说他不和x,z比，请编程序找出三队赛手的名单。
 * @params: null
 * @retrun: void
 */
function competitionList():void{
    let firstTeam={
        a:{
            name:'a',
            impossibleOpponent:['x'],
            possibleRivals:[],
            rival:''
        },
        b:{
            name:'b',
            impossibleOpponent:[],
            possibleRivals:[],
            rival:''
        },
        c:{
            name:'c',
            impossibleOpponent:['x','z'],
            possibleRivals:[],
            rival:''
        }
    }
    let secondTeam=['x','y','z']
    for(let i=0;i<secondTeam.length;i++){
        for(let p1 in firstTeam){
            if(firstTeam[p1].impossibleOpponent.indexOf(secondTeam[i])===-1 && firstTeam[p1].possibleRivals.indexOf(secondTeam[i])===-1){
                firstTeam[p1].possibleRivals.push(secondTeam[i])
            }
        }
    }
    let hadRival=[]
    while(true){
        let meaningfulOperation=0
        for(let p1 in firstTeam){
            if(firstTeam[p1].possibleRivals.length===1){
                firstTeam[p1].rival=firstTeam[p1].possibleRivals[0]
                hadRival.push(firstTeam[p1].rival)
                ++meaningfulOperation
                firstTeam[p1].possibleRivals.length=0
            }else{
                for(let r =0;r<firstTeam[p1].possibleRivals.length;r++){
                    if(hadRival.indexOf(firstTeam[p1].possibleRivals[r])>-1){
                        firstTeam[p1].possibleRivals.splice(r,1)
                        --r
                        ++meaningfulOperation
                    }
                }
            }
        }
        if(meaningfulOperation===0){
            break;
        }
    }
    let printStr=''
    for(let p1 in firstTeam){
        printStr += `${printStr?',':''}${firstTeam[p1].name}的对手是${firstTeam[p1].rival}`
    }
    console.log(printStr)
}

// 测试运行结果
competitionList()
// a的对手是z,b的对手是x,c的对手是y
```



#### &emsp;&emsp;问题：取一个整数a从右端开始的4～7位。

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 取一个整数a从右端开始的4～7位
 * @params: number
 * @retrun: void
 */
function test(num:number) {
    let str=num.toString()
    if(str.length<7){
        console.log(`${num} 的长度小于7位`)
        return
    }
    console.log(`${num} 的从右端开始的4～7位是：${num.toString().substr(-7,3)}`)
}

// 测试运行结果
test(1234567);
1234567 的从右端开始的4～7位是：123
```



#### &emsp;&emsp;问题：猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个 第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 猴子吃桃问题
 * @params: null
 * @retrun: void
 */
function monkeyEatingPeach():void{
    let peachesNum=1
    for(let i=0;i<9;i++){
        peachesNum = (peachesNum+1)*2
    }
    console.log(`第一天共摘了${peachesNum}桃子`)
}

// 测试运行结果
monkeyEatingPeach()
// 第一天共摘了1534桃子
```



#### &emsp;&emsp;问题：将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5。

tips:
##### &emsp;&emsp;什么是正整数？
&emsp;&emsp;和整数一样，正整数也是一个可数的无限集合。在数论中，正整数，即1、2、3……；但在集合论和计算机科学中，自然数则通常是指非负整数，即正整数与0的集合，也可以说成是除了0以外的自然数就是正整数。正整数又可分为质数，1和合数。正整数可带正号（+），也可以不带。

##### &emsp;&emsp;什么是质因数？
&emsp;&emsp;质因数（素因数或质因子）在数论里是指能整除给定正整数的质数。除了1以外，两个没有其他共同质因子的正整数称为互质。因为1没有质因子，1与任何正整数（包括1本身）都是互质。正整数的因数分解可将正整数表示为一连串的质因子相乘，质因子如重复可以用指数表示。根据算术基本定理，任何正整数皆有独一无二的质因子分解式 [1]  。只有一个质因子的正整数为质数。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 将一个正整数分解质因数
 * @params: (number) 自然数
 * @retrun: (Array) 质因数组成的数组
 */
function primeFactor(num:number):number[]{
    if(num<1 || Math.round(num)!=num){
        console.error('参数必须是一个正整数')
        return []
    }
    let primes:number[]=[]
    let tmp:number=num
    for(let i=2;i<num;i++){
        if(i>=tmp){
            primes.push(tmp)
            break;
        }
        while(tmp%i===0){
            primes.push(i)
            tmp=tmp/i
        }
        if(tmp<2){
            break;
        }
    }
    return primes
}

/**
 * @Description: 打印一个数的分解质因数
 * @params: (number) 
 * @retrun: void
 */
function printPrimes(num:number):void{
    let primes=primeFactor(num)
    if(primes.length>0){
        console.log(`${num}的分解质因数结果：${num}=${primes.join('*')}`)
    }else{
        console.log(`${num}是一个质数`)
    }
}

//运行结果
printPrimes(90)
90的分解质因数结果：90=2*3*3*5

printPrimes(900)
900的分解质因数结果：900=2*2*3*3*5*5
```


#### &emsp;&emsp;问题：输入两个正整数m和n，求其最大公约数和最小公倍数。

tips:
##### &emsp;&emsp;倍数和约数
&emsp;&emsp;如果数a能被数b整除，a就叫做b的倍数，b就叫做a的约数。约数和倍数都表示一个整数与另一个整数的关系，不能单独存在。

##### &emsp;&emsp;什么是最大公约数？
&emsp;&emsp;几个整数中公有的约数，叫做这几个数的公约数；其中最大的一个，叫做这几个数的最大公约数。例如：12、16的公约数有1、2、4，其中最大的一个是4，4是12与16的最大公约数，一般记为（12，16）=4。12、15、18的最大公约数是3，记为（12，15，18）=3。

##### &emsp;&emsp;什么是最小公倍数？
&emsp;&emsp;几个自然数公有的倍数，叫做这几个数的公倍数，其中最小的一个自然数，叫做这几个数的最小公倍数。例如：4的倍数有4、8、12、16，……，6的倍数有6、12、18、24，……，4和6的公倍数有12、24，……，其中最小的是12，一般记为[4，6]=12。12、15、18的最小公倍数是180。记为[12，15，18]=180。若干个互质数的最小公倍数为它们的乘积的绝对值。

##### &emsp;&emsp;求最大公约数和最小公倍数有什么方法？
1、质因数分解法
2、短除法
3、辗转相除法
4、更相减损法

&emsp;&emsp;**质因数分解法** 的实现代码：
```JavaScript
/**
 * @Description: 将一个正整数分解质因数
 * @params: (number) 自然数
 * @retrun: (Array) 质因数组成的数组
 */
function primeFactor(num:number):number[]{
    if(num<1 || Math.round(num)!=num){
        console.error('参数必须是一个正整数')
        return []
    }
    let primes:number[]=[1]
    let tmp:number=num
    for(let i=2;i<=num;i++){
        if(i>=tmp){
            primes.push(tmp)
            break;
        }
        while(tmp%i===0){
            primes.push(i)
            tmp=tmp/i
        }
        if(tmp<2){
            break;
        }
    }
    return primes
}

/**
 * @Description: 获取两个数的最小公倍数和最小公约数
 * @params: (number) 
 * @params: (number) 
 * @retrun: void
 */
function printPrimes(num1:number,num2:number):void{
    let primes1=primeFactor(num1)
    let primes2=primeFactor(num2)
    let commonPrimes=[]
    let diffPrimes=[]
    while(primes1.length>0){
        let tmp=primes1.shift()
        if(primes2.length==0){
            diffPrimes.push(tmp)
        }else{
            let ind2=primes2.indexOf(tmp)
            if(ind2>-1){
                commonPrimes.push(primes2.splice(ind2,1)[0])
            }else{
                diffPrimes.push(tmp)
            }
        }
    }
    if(primes2.length>0){
        diffPrimes = diffPrimes.concat(primes2)
    }
    let maxCommonDivisor=commonPrimes.reduce((total,val)=>{
        return total*val
    })
    let LeastCommonMultiple=commonPrimes.concat(diffPrimes).reduce((total,val)=>{
        return total*val
    })
    console.log(`${num1}和${num2}的最大公约数是：(${num1},${num2})=${maxCommonDivisor}`)
    console.log(`${num1}和${num2}的最小公倍数是：[${num1},${num2}]=${LeastCommonMultiple}`)
}

printPrimes(12,16)

// 运行测试
printPrimes(12,16)
12和16的最大公约数是：(12,16)=4
12和16的最小公倍数是：[12,16]=48
```

&emsp;&emsp;**辗转相除法** 的实现代码：
```JavaScript
/**
 * @Description: 根据辗转相除法计算两个数的最大公约数
 * @params: (number) num1
 * @params: (number) num2
 * @retrun: (number) 最大公约数
 */
function greatestCommonDivisor(num1:number,num2:number):number{
    let remainder:number=num2
    while(remainder!==0){
        num2=remainder
        remainder=num1%num2
        num1=num2
    }
    return num2
}

/**
 * @Description: 计算两个数的最小公倍数
 * @params: (number) num1
 * @params: (number) num2
 * @retrun: (number) 最小公倍数
 */
function leastCommonMultiple(num1:number,num2:number):number{
    let remainder:number=greatestCommonDivisor(num1,num2)
    return num1*num2/remainder
}

function printTest(num1:number,num2:number){
    let maxCommonDivisor=greatestCommonDivisor(num1,num2)
    let _leastCommon=leastCommonMultiple(num1,num2,maxCommonDivisor)
    console.log(`${num1}和${num2}的最大公约数是：(${num1},${num2})=${maxCommonDivisor}`)
    console.log(`${num1}和${num2}的最小公倍数是：[${num1},${num2}]=${_leastCommon}`)
}

// 测试运行结果
printTest(120, 24);
120和24的最大公约数是：(120,24)=24
120和24的最小公倍数是：[120,24]=120

printTest(10, 23);
10和23的最大公约数是：(10,23)=1
10和23的最小公倍数是：[10,23]=230
```


#### &emsp;&emsp;问题：有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 有1、2、3、4个数字，返回由互不相同且无重复数字的三位数组成的数组
 * @retrun: array
 */
function diffNumber():number[]{
    let tmp:number[]=[]
    for(let i=1;i<5;i++){
        for(let j=1;j<5;j++){
            if(i==j){
                continue
            }
            for(let k=1;k<5;k++){
                if(i==k || j==k){
                    continue
                }
                tmp.push(i*100+j*10+k)
            }
        }
    }
    return tmp
}

// 测试运行结果
let tmpDiffNum=diffNumber()
console.log(`有1、2、3、4个数字，能组成${tmpDiffNum.length}个互不相同且无重复数字的三位数,是：${tmpDiffNum.toString()}`)

// 有1、2、3、4个数字，能组成24个互不相同且无重复数字的三位数,是：123,124,132,134,142,143,213,214,231,234,241,243,312,314,321,324,341,342,412,413,421,423,431,432
```



#### &emsp;&emsp;问题：分别统计出一个字符串中英文字母、空格、数字和其它字符的个数。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 分别统计出一个字符串中英文字母、空格、数字和其它字符的个数
 * @params: (string) str
 * @retrun: (map)
 */
function greatestCommonDivisor(str:string){
    let map=new Map<any, number>()
    str.split('').forEach(item=>{
        map.set(item,(map.get(item) || 0)+1)
    })
    map.forEach((val,key)=>{
        console.log(`字符 ${key} 有 ${val} 个`)
    })
}


// 运行结果
greatestCommonDivisor(`sfasdf4234@##@!$%$&&**&(*&~<>?:"|   
dfsd
dfasft
dfqwr23
  `)
字符 s 有 4 个
字符 f 有 6 个
字符 a 有 2 个
字符 d 有 5 个
字符 4 有 2 个
字符 2 有 2 个
字符 3 有 2 个
字符 @ 有 2 个
字符 # 有 2 个
字符 ! 有 1 个
字符 $ 有 2 个
字符 % 有 1 个
字符 & 有 4 个
字符 * 有 3 个
字符 ( 有 1 个
字符 ~ 有 1 个
字符 < 有 1 个
字符 > 有 1 个
字符 ? 有 1 个
字符 : 有 1 个
字符 " 有 1 个
字符 | 有 1 个
字符   有 5 个
字符 
 有 4 个
字符 t 有 1 个
字符 q 有 1 个
字符 w 有 1 个
字符 r 有 1 个
```



#### &emsp;&emsp;问题：求s=a+aa+aaa+aaaa+aa…a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 传入一个数字，计算出这个数字从一位到多为重复组成的数字的和
 * @params: (number) num
 * @retrun: (number)
 */
function getMajoritySum(num:number,totalSum:number=5):number {
    let ind=0
    let sum=0
    while(totalSum>0){
        sum+=num*totalSum*Math.pow(10,ind)
        ++ind
        --totalSum
    }
    return sum
}

// 测试运行
console.log(getMajoritySum(2))
24690

console.log(getMajoritySum(1,1))
1
```
&emsp;&emsp;从上面的代码的实现思路其实是这样的：
如果要计算(2+22+222+2222+22222) 这个式子的和，那么我们看成是如下的式子的和:
(2*5+2*4*10+2*3*100+2*2*1000+2*1*10000)



#### &emsp;&emsp;问题：有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13…求出这个数列的前20项之和
&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 分数序列求和
 * @params: number
 * @retrun: number
 */
function sequencesSummation(itemlen:number=20):number{
    if(itemlen<1 && Math.floor(itemlen)!==itemlen){
        console.error('获取前多少项之和应为正整数')
        return
    }
    let sum:number=0
    let currDenominator=2
    let currMolecule=1
    for(let i=1;i<=itemlen;i++){
        sum+= currDenominator/currMolecule
        let tmp=currMolecule
        currMolecule=currDenominator
        currDenominator += tmp
    }
    return sum
}

// 测试运行结果
console.log(`前20项之和是：${sequencesSummation(20)}`)
// 前20项之和是：32.66026079864164
```



#### &emsp;&emsp;问题：求1+2!+3!+…+20!的和

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 累乘
 * @params: number
 * @retrun: number
 */
function multiply(itemlen:number=20):number{
    if(itemlen<1){
        console.error('计算累乘的项数须为正整数')
        return 0
    }
    if(itemlen<1){
        return 1
    }
    let sum:number=0
    for(let i=1;i<=itemlen;i++){
        let tmp=1
        for(let j=1;j<=i;j++){
            tmp *=j
        }
        sum += tmp;
    }
    return sum
}

// 测试运行结果
console.log(`前20项之和是：${multiply(20)}`)
// 前20项之和是：2561327494111820300
```



#### &emsp;&emsp;问题：企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，求应发放奖金总数？

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 企业发放的奖金问题，返回应发放奖金总数
 * @retrun: number
 */
function getBounus(profit:number=0):number{
    let sumBounus=0;
    if(profit>1000000){
        sumBounus +=(profit-1000000)*0.01
        profit = 1000000
    }
    if(profit>600000){
        sumBounus +=(profit-600000)*0.015
        profit=600000
    }
    if(profit>400000){
        sumBounus +=(profit-400000)*0.03
        profit=400000
    }
    if(profit>200000){
        sumBounus +=(profit-200000)*0.05
        profit=200000
    }
    if(profit>100000){
        sumBounus +=(profit-100000)*0.075
        profit=100000
    }
    if(profit<=100000){
        sumBounus +=profit*0.1
    }
    return sumBounus
}

// 测试运行结果
let tmpBounus=getBounus(2200000)
console.log(`当月利润2200000元时，求应发放奖金总数为：${tmpBounus}`)
// 当月利润2200000元时，求应发放奖金总数为：51500

let tmpBounus2=getBounus(200000)
console.log(`当月利润200000元时，求应发放奖金总数为：${tmpBounus2}`)
// 当月利润200000元时，求应发放奖金总数为：17500
```




#### &emsp;&emsp;问题：学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 获取一个分数对应的等级
 * @params: (number) 自然数
 * @retrun: (string) 等级
 */
function getScoreGrade(num:number):string{
    if(num>=90){
        return 'A'
    }
    if(num>=60){
        return 'B'
    }
    return 'C'
}

/**
 * @Description: 打印一个分数的等级
 * @params: (number) 
 * @retrun: void
 */
function printScoreGrade(num:number):void{
    let grade=getScoreGrade(num)
    console.log(`您的分数等级是${grade}`)
}

// 运行结果
printScoreGrade(90)
您的分数等级是A
```



#### &emsp;&emsp;问题：利用递归方法求5!

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 利用递归方法求阶乘
 * @params: number
 * @retrun: number
 */
function factorial(num:number=5):number{
    if(num===1){
        return 1
    }
    return num*factorial(num-1)
}

// 测试运行结果
console.log(`5的阶乘是：${factorial(5)}`)
5的阶乘是：120
```

&emsp;&emsp;在js里面，因为递归的方式是没有被底层引擎优化的，当需要递归的层数多了后会占用较多的内存，影响性能，我们下面再尝试使用循环的方式来实现阶乘：
```JavaScript
/**
 * @Description: 利用循环的方式求阶乘
 * @params: number
 * @retrun: number
 */
function factorial(num:number=5):number{
    let proNum:number=1
    for(let i=1;i<=num;i++){
        proNum *= i
    }
    return proNum
}

// 测试运行结果
console.log(`5的阶乘是：${factorial(5)}`)
5的阶乘是：120
```



#### &emsp;&emsp;问题：打印出杨辉三角形（要求打印出10行如下图）

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 计算杨辉三角形各行数字
 * @params: number
 * @retrun: Array<Array<number>>
 */
function triangleYanghui(num:number):Array<Array<number>> {
    if(num<1){
        console.log(`杨辉三角形行数不应低于1`)
        return [[]]
    }
    let triangle:Array<Array<number>>=[]
    for(let i=0;i<num;i++){
        let tmp:number[]=[]
        for(let j=1;j<=i+1;j++){
            if(j===1 || j===i+1){
                tmp.push(1)
            }else{
                tmp.push(triangle[i-1][j-2]+triangle[i-1][j-1])
            }
        }
        triangle.push(tmp)
    }
    return triangle
}

/**
 * @Description: 打印出杨辉三角形
 * @params: number
 * @retrun: void
 */
function test(num:number,sizeSeat:number=5):void {
    let _arr=triangleYanghui(num)
    let printStr=''
    let maxCol=_arr[_arr.length-1].length
    let space=' '
    for(let i=0;i<_arr.length;i++){
        printStr += space.repeat(sizeSeat * ((maxCol / 2) - (_arr[i].length / 2)));
        for(let j=0;j<_arr[i].length;j++){
            let str=_arr[i][j].toString()
            printStr += (space.repeat(Math.floor((sizeSeat - str.length) / 2)) + str+space.repeat(Math.ceil((sizeSeat - str.length) / 2)));
        }
        if(i<_arr.length-1){
            printStr+='\n'
        }
    }
    console.log(printStr)
}

// 测试运行结果
test(10)
                        1  
                      1    1  
                   1    2    1  
                 1    3    3    1  
              1    4    6    4    1  
            1    5   10   10    5    1  
         1    6   15   20   15    6    1  
       1    7   21   35   35   21    7    1  
    1    8   28   56   70   56   28    8    1  
  1    9   36   84   126  126  84   36    9    1  
```



#### &emsp;&emsp;问题：请输入星期几的第一个字母来判断一下是星期几，如果第一个字母一样，则继续判断第二个字母。

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 第一个字母来判断一下是星期几，如果第一个字母一样，则继续判断第二个字母。
 * @params: string
 * @retrun: string[]
 */
function whatDay(str:string):string[] {
    let weekDay=[
        {
            en:'monday',
            zh: '星期一'
        },
        {
            en:'tuesday',
            zh: '星期二'
        },
        {
            en:'wednesday',
            zh: '星期三'
        },
        {
            en:'thursday',
            zh: '星期四'
        },
        {
            en:'friday',
            zh: '星期五'
        },
        {
            en:'saturday',
            zh: '星期六'
        },
        {
            en:'sunday',
            zh: '星期日'
        }
    ]
    let days:string[]=[]
    for(let i=0;i<weekDay.length;i++){
        // 按照题目是想一个字母一个字母的判断，但是其实我们直接判断输入的字符串是不是前几个字母会更简单些
        if(weekDay[i].en.indexOf(str.toLowerCase())===0){
            days.push(weekDay[i].zh)
        }
    }
    return days
}


/**
 * @Description: 测试，我们这里偷了个懒，用传入whatDay函数的字符代替了输入的字符，打印出对应的判断结果
 * @params: string
 * @retrun: void
 */
function test(str):void{
    let tmp=whatDay(str);
    if(tmp.length===0){
        console.log('你输入的字符找不到对应的星期几哟')
    }else if(tmp.length>1){
        console.log('你输入的字符找到多个对应的星期哟，还需要继续输入哟')
    }else{
        console.log(`答案是：${tmp[0]}`)
    }
}

// 测试运行结果
test('s')
// 你输入的字符找到多个对应的星期哟，还需要继续输入哟

test('sa')
// 答案是：星期六
```



#### &emsp;&emsp;问题：输出9*9口诀乘法表

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 输出9*9口诀乘法表
 * @params: null
 * @retrun: void
 */
function printMultiTable():void{
    for(let i=1;i<10;i++){
        let rowStr=''
        for(let j=1;j<=i;j++){
            rowStr += `${i}*${j}=${i*j}${i*j<10?' ':''}  `
        }
        console.log(rowStr)
    }
}

// 测试运行结果
printMultiTable()
/*
1*1=1   
2*1=2   2*2=4   
3*1=3   3*2=6   3*3=9   
4*1=4   4*2=8   4*3=12  4*4=16  
5*1=5   5*2=10  5*3=15  5*4=20  5*5=25  
6*1=6   6*2=12  6*3=18  6*4=24  6*5=30  6*6=36  
7*1=7   7*2=14  7*3=21  7*4=28  7*5=35  7*6=42  7*7=49  
8*1=8   8*2=16  8*3=24  8*4=32  8*5=40  8*6=48  8*7=56  8*8=64  
9*1=9   9*2=18  9*3=27  9*4=36  9*5=45  9*6=54  9*7=63  9*8=72  9*9=81 
*/
```



#### &emsp;&emsp;问题：将一个数组逆序输出

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 数组逆序
 * @params: number[]
 * @retrun: number[]
 */
function reverseArray(arr:number[]):number[] {
    let _arr=arr.concat()
    let len=_arr.length
    for(let i=0;i<len/2;i++){
        [_arr[i],_arr[len-i-1]]=[_arr[len-i-1],_arr[i]]
    }
    return _arr
}

/**
 * @Description: 将一个数组逆序输出
 * @params: number[]
 * @retrun: void
 */
function test(arr:number[]){
    let _arr=reverseArray(arr)
    console.log(`${arr} 逆序后结果是：${_arr}`)
}

// 测试运行结果
test([1,3,6,8,21,12,1])
// 1,3,6,8,21,12,1 逆序后结果是：1,12,21,8,6,3,1
```
js里面数组逆序可以直接用reverse 方法实现，我们这里其实相当于是自己实现了个reverse方法。。。




#### &emsp;&emsp;问题：输入某年某月某日，判断这一天是这一年的第几天？

&emsp;&emsp;tips:
##### 公历中的闰年是什么？
&emsp;&emsp;闰年（Leap Year）是为了弥补因人为历法规定造成的年度天数与地球实际公转周期的时间差而设立的。补上时间差的年份为闰年。闰年共有366天，其中2月份有29天。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 根据传入的年、月、日，返回该日期是该年中的第多少天
 * @params: (number) 年份
 * @params: (number) 月份
 * @params: (number) 月份中的天数
 * @retrun: (number) 当年中的第多少天
 */
function getYearsDays(year:number,month:number,day:number):number{
    let leapYearNum=year%4===0?1:0
    let beforMonthDays=0
    switch(month){
        case 1:
            if(day<1 || day>31){
                console.error(`请传入1月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=0
        break
        case 2:
            if(day<1 || day>28+leapYearNum){
                console.error(`请传入2月份正确的天数，月份范围内天数1-${28+leapYearNum}，您的天数是${day}`)
                return 0
            }
            beforMonthDays=31
        break
        case 3:
            if(day<1 || day>31){
                console.error(`请传入3月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=59+leapYearNum
        break
        case 4:
            if(day<1 || day>30){
                console.error(`请传入4月份正确的天数，月份范围内天数1-30，您的天数是${day}`)
                return 0
            }
            beforMonthDays=90+leapYearNum
        break
        case 5:
            if(day<1 || day>31){
                console.error(`请传入5月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=120+leapYearNum
        break
        case 6:
            if(day<1 || day>30){
                console.error(`请传入6月份正确的天数，月份范围内天数1-30，您的天数是${day}`)
                return 0
            }
            beforMonthDays=151+leapYearNum
        break
        case 7:
            if(day<1 || day>31){
                console.error(`请传入7月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=181+leapYearNum
        break
        case 8:
            if(day<1 || day>31){
                console.error(`请传入8月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=212+leapYearNum
        break
        case 9:
            if(day<1 || day>30){
                console.error(`请传入9月份正确的天数，月份范围内天数1-30，您的天数是${day}`)
                return 0
            }
            beforMonthDays=243+leapYearNum
        break
        case 10:
            if(day<1 || day>31){
                console.error(`请传入10月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=273+leapYearNum
        break
        case 11:
            if(day<1 || day>30){
                console.error(`请传入11月份正确的天数，月份范围内天数1-30，您的天数是${day}`)
                return 0
            }
            beforMonthDays=304+leapYearNum
        break
        case 12:
            if(day<1 || day>31){
                console.error(`请传入12月份正确的天数，月份范围内天数1-31，您的天数是${day}`)
                return 0
            }
            beforMonthDays=334+leapYearNum
        break
        default:
            console.error(`请传入月份正确的月份，月份范围是1-12，您的月份是${month}`)
        return 0
    }
    return beforMonthDays+day
}

/**
 * @Description: 打印出传入的年、月、日是该年中的第多少天
 * @params: (string) 2020年8月22日
 * @retrun: void
 */
function printDays(time:string):void{
    let _arr1=time.replace(/\D/g,' ').split(' ');
    let times:number[]=[
        parseInt(_arr1[0]),
        parseInt(_arr1[1]),
        parseInt(_arr1[2])
    ]
    let days=getYearsDays.apply(this,times)
    if(days!==0){
        console.log(`${time} 这一天是这一年的第${days}天`)
    }
}

// 测试运行结果
printDays('2020年8月22日')
// 2020年8月22日 这一天是这一年的第235天
```


&emsp;&emsp;**问题**：有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？

&emsp;&emsp;实现代码：
```JavaScript
function rabbitsComputed(month:number):number{
    if(month < 1){
        return 0
    }
    if(month < 3){
        return 1
    }
    let a:number=1
    let b:number=2
    for(let i=3;i<month;i++){
        [a,b]=[b,a+b]
    }
    return a+b
}

function printEveryMonthNumber(endMonth:number):void{
    for(let i=1;i<endMonth;i++){
        let rabbitNum:number=rabbitsComputed(i)
        console.log(`第${i}月有${rabbitNum}对兔子`)
    }
}

printEveryMonthNumber(12)

// 输出结果
第1月有1对兔子
第2月有1对兔子
第3月有3对兔子
第4月有5对兔子
第5月有8对兔子
第6月有13对兔子
第7月有21对兔子
第8月有34对兔子
第9月有55对兔子
第10月有89对兔子
第11月有144对兔子
第12月有233对兔子
```
我们知道，这个问题其实就是一个 斐波那契数列 ，从第三项开始，每一项等于前两项之和。。。上面的函数就是实现这个过程。。。



#### &emsp;&emsp;问题：打印出如下图案（菱形）
&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 打印出菱形图案
 * @params: number
 * @params: number
 * @retrun: void
 */
function diamondPattern(maxRow:number=5,space:number=1):void{
    let col=maxRow * 2-1;
    let spaceStr=' '
    let flagStr='*'
    for(let i=maxRow%(space*2); i <= col; i += 2*space){
        let rowStr=spaceStr.repeat(Math.abs(maxRow - i) / 2) + flagStr.repeat((i - maxRow) > 0 ? (col - i+1) : i)
        console.log(rowStr)
    }
}

// 测试运行结果
diamondPattern(5)
  *
 ***
*****
 ***
  *


diamondPattern(6,2)
  **
******
  **
```


#### &emsp;&emsp;问题：一个数如果恰好等于它的因子之和，这个数就称为"完数"。例如6=1＋2＋3.编程 找出1000以内的所有完数

tips:
##### &emsp;&emsp;什么是因子？
假如整数n除以m，结果是无余数的整数，那么我们称m就是n的因子。 需要注意的是，唯有被除数，除数，商皆为整数，余数为零时，此关系才成立。反过来说，我们称n为m的倍数。

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 找出小于参数的所有完数
 * @params: (number) num
 * @retrun: (array)
 */
function getPerfectNumber(num:number):number[] {
    let perfects:number[]=[]
    for(let i=2;i<num;i++){
        let sum=0
        for(let j=1;j<i;j++){
            if(i%j===0){
                sum+=j
            }
        }
        if(sum===i){
            perfects.push(sum)
        }
    }
    return perfects
}

function printPerfects(num:number){
    console.log(`${num} 内的完数有：${getPerfectNumber(1000).join(',')}`)
}

// 测试运行结果
printPerfects(1000)
1000 内的完数有：6,28,496
```



#### &emsp;&emsp;问题：一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，请问该数是多少？

&emsp;&emsp;tips:
##### 什么是完全平方数？
&emsp;&emsp;完全平方指用一个整数乘以自己例如1*1，2*2，3*3等，依此类推。若一个数能表示成某个整数的平方的形式，则称这个数为完全平方数。完全平方数是非负数，而一个完全平方数的项有两个。

&emsp;&emsp;**思路：**
根据题目可以列出计算表达式：

设这个整数为x，那么就有：
x+100=n^2^
x+100+168=m^2^
即：m^2^-n^2^=168
即：(m-n)*(m+n)=168

那么我们将168分解为两个乘数相乘的方式来表达就是：
168
=1 * 168
=2 * 84
=3 * 56
=4 * 42
=6 * 28
=7 * 24
=8 * 21
=12 * 14

因为n+m和n-m的奇偶性是相同的，不可能一个奇数一个偶数，因此符号条件的表达式就只有：
2 * 84、4 * 42、6 * 28、12 * 14
如第一个表达式2 * 84，那么我们就可以表示为：
m-n=2，m+n=84，解出来，m=43，n=41
或：
m-n=84，m+n=2，解出来，m=43，n=-41
然而，不管n的正负，对于我们要计算出x的值来都没有影响，因为n取平方后都是一个非负整数

那么上面的计算过程用TypeScript 来实现，就是如下代码了：
&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 将一个正整数分解成两个因数
 * @params: (number) 自然数
 * @retrun: (Array) 因数组成的数组
 */
function decompositionFactor(num:number):Array<Array<number>>{
    if(num<1 || Math.round(num)!=num){
        console.error('参数必须是一个正整数')
        return []
    }
    let primes:Array<Array<number>>=[]
    let maxPrime=num;
    for(let i=1;i<=num;i++){
        if(i>=maxPrime){
            break
        }
        if(num%i===0){
            maxPrime=num/i
            primes.push([i,maxPrime])
        }
    }
    return primes
}

/**
 * @Description: 一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，求解该数
 * @params: (number) 自然数
 * @params: (number) 自然数
 * @retrun: (Array) 解数组成的数组
 */
function separate(addnum1:number,addnum2:number):number[]{
    let dePrimes=decompositionFactor(addnum2)
    // 过滤出奇、偶相同的因数
    let multiDecom:Array<Array<number>>=[]
    for(let i=0;i<dePrimes.length;i++){
        let tmpArr=dePrimes[i]
        if((tmpArr[0]%2===0 && tmpArr[1]%2===0) || tmpArr[0]%2!==0 && tmpArr[1]%2!==0){
            multiDecom.push(tmpArr)
        }
    }
    let _separate:number[]=[]
    for(let j=0;j<multiDecom.length;j++){
        let mulTmpArr=multiDecom[j]
        _separate.push(Math.pow((mulTmpArr[0]+mulTmpArr[1])/2,2)-addnum2-addnum1)
    }
    return _separate
}

// 测试运行结果
console.log(`一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，这个数可以是：${separate(100,168).toString()}`)
// 一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，这个数可以是：1581,261,21,-99
```


#### &emsp;&emsp;问题：求一个3*3矩阵对角线元素之和

&emsp;&emsp;实现代码:
```JavaScript
/**
 * @Description: 求一个3*3矩阵对角线元素之和
 * @params: Array<Array<number>>
 * @retrun: number
 */
function sumDiagonal(arr:Array<Array<number>>):number {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let sum1:number=0
    let sum2:number=0
    let arrLen=arr.length
    for(let i=0;i<arrLen;i++){
        sum1 += arr[i][i]
        sum2 += arr[i][arrLen-1-i]
    }
    return sum1+sum2
}

/**
 * @Description: 求一个3*3矩阵对角线元素之和
 * @params: Array<Array<number>>
 * @retrun: void
 */
function test(arr:Array<Array<number>>){
    let sum=sumDiagonal(arr)
    console.log(`
    ${arr.map(item=>{return item[0]})}
    ${arr.map(item=>{return item[1]})}
    ${arr.map(item=>{return item[2]})}
    斜对角线和是：${sum}`)
}

// 测试运行结果
test([[1,2,3],[4,5,6],[7,8,9]])

    1,4,7
    2,5,8
    3,6,9
    斜对角线和是：30
```
我们可以看出来，求一个3*3矩阵对角线元素之和其实就是求一个二维数组的两条斜对角线之和。



#### &emsp;&emsp;问题：给一个不多于5位的正整数，要求：一、求它是几位数，二、逆序打印出各位数字。

&emsp;&emsp;实现代码，方式一：
```JavaScript
/**
 * @Description: 分解数字的每位数字并逆序打印返回
 * @params: number
 * @retrun: array
 */
function numberDecompose(num:number=1):number[]{
    if(num<1 && Math.floor(num)!==num){
        console.error('请输入正整数')
        return []
    }
    return num.
            toString().
            split('').
            reverse().
            map(item=>{
                return parseInt(item)
            })
}

// 测试运行结果
console.log(numberDecompose(54321).join(' '))
1 2 3 4 5
```

&emsp;&emsp;实现代码，方式二：
```JavaScript
/**
 * @Description: 分解数字的每位数字并逆序打印返回
 * @params: number
 * @retrun: array
 */
function numberDecompose(num:number=1):number[]{
    if(num<1 && Math.floor(num)!==num){
        console.error('请输入正整数')
        return []
    }
    let tmp:number[]=[]
    while(num>=1){
        tmp.push(num%10)
        num=Math.floor(num/10)
    }
    return tmp
}

// 测试运行结果
console.log(numberDecompose(54321).join(' '))
1 2 3 4 5
```



#### &emsp;&emsp;问题：有5个人坐在一起，问第5个人多少岁？他说比第4个人大2岁。问第4个人岁数，他说比第3个人大2岁。问第3个人，又说比第2人大2岁。问第2个人，说比第1个人大2岁。最后问第1个人，他说是10岁。请问第5个人多大？

&emsp;&emsp;实现代码：
```JavaScript
/**
 * @Description: 有5个人坐在一起，问第5个人多少岁？他说比第4个人大2岁。
 * 问第4个人岁数，他说比第3个人大2岁。问第3个人，又说比第2人大2岁。
 * 问第2个人，说比第1个人大2岁。最后问第1个人，他说是10岁。
 * 请问第5个人多大？
 * @params: number
 * @retrun: number
 */
function acquisitionAge(num:number=1):number{
    if(num===1){
        return 10
    }
    return acquisitionAge(num-1)+2
}

// 测试运行结果
console.log(`第五个人的年龄是${acquisitionAge(5)}岁`)
// 第五个人的年龄是18岁
```




参考资料：
[https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fromtitle=%E7%B4%A0%E6%95%B0&fromid=115069&fr=aladdin](https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fromtitle=%E7%B4%A0%E6%95%B0&fromid=115069&fr=aladdin)

[https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fr=aladdin](https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fr=aladdin)

[https://baike.baidu.com/item/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0/2746160?fr=aladdin](https://baike.baidu.com/item/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0/2746160?fr=aladdin)

[https://baike.baidu.com/item/%E6%AD%A3%E6%95%B4%E6%95%B0/8461335?fr=aladdin](https://baike.baidu.com/item/%E6%AD%A3%E6%95%B4%E6%95%B0/8461335?fr=aladdin)
[https://baike.baidu.com/item/%E8%B4%A8%E5%9B%A0%E6%95%B0/6192269?fr=aladdin](https://baike.baidu.com/item/%E8%B4%A8%E5%9B%A0%E6%95%B0/6192269?fr=aladdin)


[https://baike.baidu.com/item/%E6%9C%80%E5%A4%A7%E5%85%AC%E7%BA%A6%E6%95%B0/869308?fr=aladdin](https://baike.baidu.com/item/%E6%9C%80%E5%A4%A7%E5%85%AC%E7%BA%A6%E6%95%B0/869308?fr=aladdin)
[https://baike.baidu.com/item/%E6%9C%80%E5%B0%8F%E5%85%AC%E5%80%8D%E6%95%B0/6192375?fr=aladdin](https://baike.baidu.com/item/%E6%9C%80%E5%B0%8F%E5%85%AC%E5%80%8D%E6%95%B0/6192375?fr=aladdin)

[https://baike.baidu.com/item/%E9%97%B0%E5%B9%B4/27098?fr=aladdin](https://baike.baidu.com/item/%E9%97%B0%E5%B9%B4/27098?fr=aladdin)

[https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145?fr=aladdin](https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145?fr=aladdin)

[https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0/8025061?fr=aladdin](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0/8025061?fr=aladdin)