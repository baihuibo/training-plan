//Created by baihuibo on 2017/2/21.


/**
 * 默认this指向当前的执行上下文环境
 * 在浏览器中，全局上下文环境指的是 window 对象
 * 在nodejs环境中，全局指的是  global 对象
 */
function a() {
    console.log('a', this === window);
}

// a();


function A() {
    console.log('A', this === window);
}

A.prototype.fn = function () {
    console.log('A.fn', this);
    console.log('A.fn', this === window);
};

A.prototype.fn2 = function () {
    console.log('A.fn2', this);
}.bind('你好');


// var a1 = new A;
// a1.fn();
// a1.fn2();


/**
 * 之后的参数可以预置参数
 */

function test(a, b, c, d) {
    return a + b + c + d;
}


var test1 = test.bind(null);

// console.log('test1', test1(3, 4, 2, 1));
// console.log('test1', test1(4, 5, 2, 1));


/**
 * call   调用一个方法，并且指定它的this对象
 * apply  调用一个方法，指定它的this，参数需要用数组方式传递
 */

// console.log(test.call(null, 1, 2, 3, 4));
// console.log(test.apply(null, [1, 2, 3, 4]));

function test2() {
    return Math.max.apply(Math, arguments);
}

var slice = [].slice;

var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// [].push.call(obj, 'd', 'e', 'f');

// console.log(obj);

// console.log(test2(1, 2, 3));

// console.log(slice.call(['a', 'b', 'c'], 1, 2));

