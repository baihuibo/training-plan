//Created by baihuibo on 2017/2/20.

var arr = [1, 2, 3, 4, 5];

/**
 * Array.prototype.map
 * 对每一个元素做处理，将处理结果收集为新的数组
 * @type {Array}
 */
var arr2 = arr.map(function (item, index) {
    return item * item;
});
// console.log(arr2 , arr);


var links = document.querySelectorAll('a');

var linkTexts = Array.from(links).map(function (link) {
    return link.innerText;
});

// console.log(linkTexts);

/**
 * Array.from
 * 可以把类似数组的对象转换为真正的数组对象
 */
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// console.log(obj, Array.from(obj));


/**
 * Array.prototype.filter
 * 按照条件过滤数组的每一个元素，返回满足条件的所有元素未一个新的数组
 */
var results = arr.filter(function (item, index) {
    return item > 2;
});
// console.log(results);

/**
 * Array.prototype.every
 * 按照条件，对所有的元素做判断，当所有的判断都返回true时，返回true，当任意一次判断返回false时，返回false
 */
var result = arr.every(function (item, index) {
    return item % 1 == 0;
});
// console.log(result);

/**
 * Array.prototype.some
 * 按照条件，对所有的元素做判断，当任意一次判断返回true时，就返回true，当所有的判断都返回false时，返回false
 */
var result = arr.some(function (item, index) {
    return item % 2 == 0;
});
// console.log(result);

/**
 * Array.prototype.reduce
 * Array.prototype.reduceRight
 * 从左到右(右到左)对每一个元素做计算，将计算的结果代入下一次计算，返回最终计算结果
 */
var result = arr.reduce(function (prevValue, item, index) {
    return prevValue + item;
}, 0);

// console.log(result);

/**
 * Array.prototype.indexOf
 * Array.prototype.lastIndexOf
 * 查找元素位置，返回元素所对应的索引，如果数组中无法找到目标元素，则返回-1
 */
arr.indexOf(1);
arr.lastIndexOf(26);


/**
 * Array.of
 * 创建一个素组
 */
Array.of(1, 2, 3);

// console.log(Array.of(1, 2, 3));

/**
 * Array.prototype.copyWithin
 * 复制当前数组，覆盖自己的目标位置的元素
 *
 * @param target 替换目标的开始索引
 * @param start 复制开始索引
 * @param end 复制结束索引
 */
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

arr2.copyWithin(2, 4, 6);

/**
 * Array.prototype.fill
 * 填充数组
 * @param value
 * @param start
 * @param end
 */

var arr3 = new Array(10);
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr3.fill('b', 5);
arr3.fill('a', 0, 5);
// console.log(arr3);


/**
 * Array.prototype.find
 * 查找满足条件的元素，返回元素本身
 */
var result = arr.find(function (item, index) {
    return item % 2 == 0;
});

// console.log(result);

/**
 * Array.prototype.findIndex
 * 查找满足条件的元素，返回元素的索引位置
 */
var result = arr.findIndex(function (item, index) {
    return item % 2 == 0;
});

// console.log(result);

/**
 * Array.prototype.includes
 * 判断数组中是否包含某个元素
 * @param value
 * @param startIndex
 */
arr.includes(3);
arr.includes(3, 2);

/**
 * Array.isArray
 * 判断对象是否为数组
 * @param value
 */
Array.isArray('');

/**
 * Array.prototype.slice
 * 复制数组中的某一段，创建作为一个新的数组
 * @param startIndex
 * @param endIndex
 */
var result = arr.slice(1, -1);
console.log(result);

/**
 * Array.prototype.splice
 * 判断数组中是否包含某个元素
 * @param startIndex
 * @param deleteCount
 * @param addElements...
 */
var arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];

arr4.splice(2, 2, 1, 2, 3, 4, 5);
// console.log(arr4);

/**
 * Array.prototype.forEach
 * 循环对每一个元素执行方法
 */
arr.forEach(function (item, index) {
    console.log(item);
});



