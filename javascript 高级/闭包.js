//Created by baihuibo on 2017/2/20.

// 变量的作用域
function test() {
    var a = 1;
}

test();

function nextPlus(initValue) {
    if (!initValue) {
        initValue = 0;
    }
    return function () {
        return ++initValue;
    }
}

var fn = nextPlus(5);

console.log(fn());
console.log(fn());
console.log(fn());

var a = document.querySelectorAll('a');

for (var i = 0; i < a.length; i++) {
    var link = a[i];
    link.onclick = (function (i) {
        return function () {
            alert(i);
        }
    }(i));
}


reque