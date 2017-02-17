//Created by baihuibo on 2017/2/17.


// 判断语句
if (aaaa) {// 表达式

}


/**
 * == 双等号为弱类型比较
 *
 *  ---- 基础类型比较
 * 值在不同类型的时候，会自动转换为相同类型然后比较
 * 1 如果俩边有一边是 number，则全部转换为 number
 * 2 如果有一边是布尔值，全部转换为 number
 * 4 实际值比较
 * 3 null 相等于 undefined，但是不和任何数据相等
 *
 * === 为强类型比较
 *  ----- 即使比较的对象为基础类型数据，三等号也强行判断其类型是否相等，不在涉及转换
 *
 * 在if的表达式中， null,undefined,'',0,NaN,false  都被算是 false
 *                '啊啊',非0,true,引用对象   都被算作 true
 */

function aa(test) {
    if (!test) {
        alert(' 参数是必须的');
    }

    if (test == '0') {

    } else if (test > 5) {

    } else {

    }

    function a() {

    }

    switch (test) {
        case 1: // === 强类型比较
            console.log('id为1，最高权限');
            break;
        case 2:
            console.log('');
            break;
        case a:
            console.log('');
            break;
        default:
            console.log('xxx');
    }
}

aa();
aa(0);
aa(false);
aa(null);
aa('');

if (aa) {

} else {

}

//


// 循环语句

// for
function a() {
    big:for (var i = 0; i < array.length; i++) {
        //初始化，   比较，            变化
        var obj = array[i];

        small:for (var j = 0; j < i.length; j++) {
            var obj1 = i[j];
            break big;
            continue big;
        }
    }

    var arr = ['a', 'b', 'c'];
    for (var index in arr) {
        // index = 0,1,2
        // typeof aa == 'object'
    }

    var obj = {name: 'bai', age: 13};
    for (var key in o) {
        if (key == 'name') {
            continue;
        }

        var value = obj[key];
    }

}


// while

while (true) {
    // ....
}

var arr = [1, 2, 3];
var len = arr.length;
while (len > -1) {
    console.log('value', arr[len]);
    len--;
}

// do while
do {
    console.log('value', arr[len]);
} while (len > -1);

var num = 100;
while (num > 0) {

}

var a = document.querySelector('a');
var pars = [];
var par = a.parentNode;
while (par) {
    pars.push(par);
    par = par.parentNode;
}
console.log(pars);

// 异常捕获语句
function test(aaa) {
    var smallStr = '';
    try {
        smallStr = aaa.toLowerCase().big();
        return new XMLHttpRequest();
    } catch (e) {
        console.log(' 变量 aaa 不存在');
    }
    return smallStr;
}


var close = false;
function mousedown() {
    try {
        return close;
    } catch (e) {
        //
    } finally {
        close = false;
    }
}

mousedown();