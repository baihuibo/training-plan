//Created by baihuibo on 2017/2/21.

var a = {};
var b = {name: '1', age: '2', ids: {id1: '1', id3: '33'}};

/**
 * 浅复制对象
 * 吧 b 的属性复制给 a
 */
Object.assign(a, b);


/**
 * 判断俩个对象是否相等
 */
// console.log('is', Object.is(NaN, NaN));

/**
 * 获取对象的 class 类型
 */
// console.log('classof', Object.classof(null));

/**
 * 创建一个对象，使其继承参数对象
 */
// var c = Object.create(Array.prototype);

// console.log(c, c.push(1), c.push, c.length, Array.isArray(c));


/**
 * getter setter
 * 用来拦截属性的获取和设置
 */
var d = {
    get name() {
        console.log('name getter');
        return this._name + '!!!!!!';
    },
    set name(value) {
        console.log('name setter', value);
        this._name = value;
    },

    id: 123123
};

// console.log(d.name);

/**
 * 获取所有属于自己的属性，不计算继承的属性
 */


Object.freeze(d);

console.log(d.id);
d.id = 'bbb';
console.log(d.id);


/**
 * 给对象定义属性和配置它的属性描述
 */

/*

 Object.defineProperty(d, 'age', {
 value: 123,
 enumerable: false,
 writable: false
 });


 Object.defineProperties(d , {
 age : {
 value : ''
 },
 sse : {

 }
 });
 */


// console.log(Object.keys(d));

console.log('d.age', d.age);


/**
 * 锁定一个对象，此对象将不允许在扩展或者删除任何属性和方法，原有的属性修改不影响
 */
// Object.seal(d);

/**
 * 冻结一个对象，此对象不允许扩展，也不允许任何修改属性操作，变为只读对象
 */
// Object.freeze(d);