//Created by baihuibo on 2017/2/21.

function * fn() {

}

var iterator = fn();

var arr = [1, 2, 3, 4, 5];
var iterator2 = arr.entries();// [index , itemValue]

var obj = {name: 'a', age: 12};
// console.log(iterator2.next());


/**
 * [
 *   [key , value],
 *   [key , value],
 *   ...
 * ]
 */
var iterator3 = Object.entries(obj);


for (var [index, value] of iterator2) {
    // console.log(index, value);
}


/**
 * let , const
 * 声明变量和常量
 * 拥有严格的作用域范围控制
 */

let a;
if (true) {
    a = 1;
} else {
    a = 2;
}

const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.onclick = function () {
        alert(i);
    }
}

setTimeout(function () {

}, 0);

setImmediate(function () {
    // console.log('123');
});


/**
 * Map
 * 是一个允许使用对象来作为key的索引对象组合
 */

var obj1 = {
    name: 'xxx',
    age: '123'
};

var s = new String('');

var m = new Map();
m.set(obj1, 123);
m.set(s, 123);
// console.log(m.get(s), m.has(s), m.size);
// console.log(m.get(obj1), m.has(obj1), m.size);


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 5, 10];

var set = new Set();
arr.forEach(function (item) {
    set.add(item);
});

// console.log(set, Array.from(set));


/**
 * WeakMap , WeakSet
 * 用法同 Map，Set
 * weak 模式的性能更好
 * 他们对引用对象的 引用持有 是弱的，不会阻止变量的销毁
 */


/**
 * Symbol
 * Symbol(name)  通过这种方法创建的 `标记` 是唯一的
 * Symbol.for(name)  通过这种方法创建的 `标记` 只要名字是同一个，他们是同一个实例
 */

var obj2 = {};

var fn = Symbol('fn');

obj2[fn] = function () {
    console.log('obj2.fn');
};

//
// var arr = [1, 2, 3];
//
// // iterator
//
// for (let val of arr) {
//     console.log(val);
// }

/**
 * Symbol.iterator 代送器规范
 * for of 循环时，对象必须是 iterator 对象
 * 如果不是，那么此对象必须实现 Symbol.iterator 方法来做 for of 循环
 */

var key = 'xxx';


var obj = {
    name: '1',
    age: 2,

    fn: function () {

    },

    fnxxx(){

    },

    key,

    // [fn]: xxx,

    [Symbol.iterator](){
        let self = this;
        let keys = Object.keys(self);
        let current = 0;
        return {
            next(){
                if (current != keys.length) {
                    let key = keys[current++];
                    return {value: {key, value: self[key]}, done: false}
                } else {
                    // clean 缓存的变量
                    keys = null;
                    current = null;
                    return {done: true};
                }
            }
        }
    }
};

// for (let val of obj) {
//     console.log(val);
// }

// for in  ; for; for of; // 只可以循环 支持 `iterator` 对象


var arr = ['a', 'b', 'c'];

arr.name = 1;
arr.age = 1;

if (arr[Symbol.iterator]) {
    for (let item of arr) {
        // console.log('item', item);// 取出每一个元素，无法使用 索引
        // break; continue;
        // 数组原生的只会 `iterator` 规范，所以可以使用for of
    }

    for (let i in arr) {// 不安全的数组操作
        // console.log('i', i, arr[i])
    }
}

for (let {key, value} of obj) {
    // console.log('object of out', key, value);
}

function * gid() {
    for (; true;) {
        yield Math.random().toString(16).slice(2);
    }
}

var g = gid();
console.log(g.next());



/*function * gfn() {
 yield 1;
 yield 2;
 yield 3;
 yield 4;
 yield 5;
 }

 for (let item of gfn()) {
 console.log('gfn item', item);
 }

 console.log('it', typeof iterator);*/


// console.log(obj.name);
// console.log(obj['name']);
//
// let key = 'name';
//
// console.log(obj[key]);
//
// obj.name = 'xxx';
// obj['name'] = 'xxx';
// obj[key] = 'xxx';
//
//
// var name = 'baihuibo'
// var obj = {
//     name,
//     fn(){
//
//     }
// };

/**
 * 对象解构
 */

// var name = obj.name;
// var fn = obj.fn;
//
// var {fn, name} = obj;
//
// var {x, y} = {x: 1, y: 2};
// var [x, y] = [1, 3, 5, 6, 7, 2];
//
//
// function fn({name, age}, [x, y, z]) {
//     console.log(name, age);
// }
//
// fn({
//     name: 1,
//     age: 2
// }, [1, 2, 3]);
