//Created by baihuibo on 2017/2/17.

var a = 'adfa';
var A = new String('adfa');

var num = 123;
var NUM = new Number(123);

a.toUpperCase();

num.toFixed(2);

/// 如果你对一个基础类型的对象操作其属性或者方法的时候，编译器会对它做零时的包装成一个完整对象，用完之后会销毁
Number(num).toFixed();//

a.name = 1;
A.name = 1;

String(a).name = 1;

var a = new Object();
a.name = 1;
a.age = 2;
a.fn = function () {

};

Array.prototype.fnxx = function () {

};

var arr = new Array();
var arr = [1, 2, 3];

arr.push();
arr.fnxx();