//Created by baihuibo on 2017/2/17.

// 基础类型数据
var str = "asdfasdfa";
var bool = true;
var num = 1;
var n = null;
var undef = undefined;

if ("a" == "a") {
    console.log('true');
}

// 复杂类型对象
var reg = /adsfa/;
var obj = {id: 1};

/**
 * 因为每一个复杂类型的对象，都是独立的，唯一的
 */
var a = /a/;
var b = /a/;
if (a == b) {

}

if (/a/ == /a/) {

} else {
    console.log('正则比较 false');
}

/**
 * 复杂类型的对象和基础类型的对象比较有什么不同？
 * 1 基础类型的对象比较规则是 对比俩个直接的值是否相等
 * 2 复杂类型的对象比较，是比较俩个对象是否为同一个引用
 *
 * 3 typeof 的缺陷，只可以判断出基础类型的对象和复杂对象，但是复杂对象无法细分
 */

function getType(data) {
    let type = typeof data;
    if (type != 'object') {
        return type;
    }

    type = Object.prototype.toString.call(data);

    return type.slice(8, -1).toLowerCase();
}