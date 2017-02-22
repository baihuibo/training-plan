//Created by baihuibo on 2017/2/22.

/**
 * window 对象是在浏览器环境中的全局对象
 * 所有的全局变量都是属于全局对象的属性
 *
 */


var a = new Array;
var d = new Date();


window.angular_version = 1;


/// nodejs


/**
 * window对象的top属性总是指向它们最外层(顶级)的窗口window对象
 * window对象的parent指向它的父级 window 对象
 *
 * 它们的默认值指向它自己
 *
 * 所以，如果top或者parent不在等于自己的window时，表示它被iframe框架载入，不是正常访问
 */
if (window.top !== window) {
    // 发现被套入iframe访问
    window.top.location = window.location.href;
}
window.parent == window;


function ajax(url, data) {
    // ?name=xx&key=value

    var fd = new FormData();
    fd.append('username', 'xxxx');
    var file = document.querySelector('#file');
    console.log(file);
    window.file = file;
    if (file.files.length) {
        Array.from(file.files).forEach(function (file) {
            fd.append('file', file);
        });
    }

}


/**
 * document.anchors 获取页面中所有的 a 标签，并且带有 name属性的 标签
 * document.links 获取页面中所有的 a,area 标签
 * document.forms 获取页面中所有的 form 标签
 * document.images 获取页面中所有的 img 标签
 * document.body 获取页面中 body 标签
 * document.head 获取页面中 head 标签
 * document.documentElement 获取页面中 html 标签
 * document.cookie 设置或获取页面的cookie, 一个安全的信息存储器，存储大小限制在4kb
 *
 *
 * document.write writeln 一定要在dom准备就绪之前执行才是添加内容，否则会替换当前所有的代码
 */


/**
 * 浏览器导航器对象 navigator
 * 提供了 当前浏览器和当前运行系统的 信息
 * plugins
 * appName
 * appVersion
 * userAgent
 * platform
 * language
 * languages 本地语言
 */


/**
 * 获取屏幕信息对象 screen
 * avaiHeight,avaiWidth
 * width, height
 */

/**
 * location 地址对象
 * hash,host,hostname,href,pathname,port,protocol,search
 *
 * a link标签拥有 location对象的所有特性
 * a 几乎可以当做location对象来使用作为路径解析器
 */


/**
 * history 用来记录浏览历史的对象
 * 它有 length 长度用来表示已经记录多少个浏览器历史
 * back() 和 forward() 方法可以控制浏览器访问历史对象的顺序
 * go() 传入一个数字来让history对象跳转到目标历史对象
 *
 * pushState({} , '' , 'xxx');  它可以动态的创建一个 history对象
 *              并且，不会发生页面跳转，不会重新加载页面, 是一种更优化的页面加载技术
 *
 * replaceState() 替换当前页面的pathname
 *
 * window.onhashchange()  当url 的#后面发生变化时，触发此事件
 * window.onpopstate()  当url 发生变化时(忽略hash)，触发此事件, 当用js执行 (history.pushState)的时候，不会触发 popstate事件
 *
 * angular react history 跳转路由页面
 */

window.onhashchange = function () {
    // console.log('current hash', location.hash);
};

window.onpopstate = function () {
    console.log('popstate change');
};

