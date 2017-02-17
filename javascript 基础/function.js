//Created by baihuibo on 2017/2/17.


// 函数声明的方法
fn();

// 1 直接声明
function fn() {

}

fn();

fn2(); // error...

// 2 预定义变量声明
var fn2 = function () {
};

fn2();

// 3 匿名声明
document.addEventListener('click', function () {
    fn();
});

// 4 动态的函数定义
const body = 'return a + b + c';
var fn3 = new Function('a', 'b', 'c', body);

fn3(1, 2, 3); // 6


/**
 * 函数声明的方式不同的区别？
 * 1 直接声明的函数，可以在所属的作用域内任意地方使用
 * 2 预定义变量声明的函数，只可以在声明变量的下边使用
 * 3 匿名的函数，无法再外部直接使用，因为无法找到它的引用
 * 4 动态的函数，可以任意创建动态函数方法
 */


function scope() {
    fnxx();

    fn2();
    var fnxx = function () {
        fn2();
    };

    fnxx();
    // ...
    // ...
    // ...
    // ...

    return 1;

    function fn2() {
    }
}

function scope() {
    var fnxx;

    function fn2() {
    }

    fn2();
    fnxx();
    fnxx = function () {
        fn2();
    }
    fnxx();

    // .....
    // .....
    // .....
}


function aaaa(a, b, c) {
    arguments == [a, b, c];
    arguments.length == 3
    arguments[0] == a;
    arguments[1] == b;

    function test(c, d, e) {
        arguments[0] == c;
    }

    test(4, 5, 6);
}

aaaa(1, 2, 3);

// 函数有什么特殊操作？

/**
 * 它有name属性，表示这个方法的名字
 * 有length属性，表示这个方法有多少个参数
 */
console.log(aaaa.length);