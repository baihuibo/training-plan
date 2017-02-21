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


var arr = [1, 2, 3];

// iterator

for (let val of arr) {
    console.log(val);
}

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

    [fn]: xxx,

    [Symbol.iterator](){
        let keys = Object.keys(obj);
        let current = 0;
        return {
            next(){
                if (current != keys.length) {
                    return {value: keys[current++], done: false}
                } else {
                    return {done: true};
                }
            }
        }
    }
};

// for (let val of obj) {
//     console.log(val);
// }

console.log(obj.name);
console.log(obj['name']);

let key = 'name';

console.log(obj[key]);

obj.name = 'xxx';
obj['name'] = 'xxx';
obj[key] = 'xxx';


var name = 'baihuibo'
var obj = {
    name,
    fn(){

    }
};

/**
 * 对象解构
 */

var name = obj.name;
var fn = obj.fn;

var {fn, name} = obj;

var {x, y} = {x: 1, y: 2};
var [x, y] = [1, 3, 5, 6, 7, 2];


function fn({name, age}, [x, y, z]) {
    console.log(name, age);
}

fn({
    name: 1,
    age: 2
}, [1, 2, 3]);
