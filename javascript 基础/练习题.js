//Created by baihuibo on 2017/2/17.
function getTypes() {
    /**
     * 实现返回所有参数类型
     * window 和 document 视为 object
     */
    const result = [];
    for (var i = 0; i < arguments.length; i++) {

        var obj = arguments[i];
        var type = typeof obj;

        if (type != 'object') {
            result.push(type);
        } else if (obj === null) {
            result.push('object');
        } else if (obj === window || obj === document) {
            result.push('object')
        } else {
            type = Object.prototype.toString.call(obj).slice(8, -1);
            result.push(type.toLowerCase());
        }
    }
    return result;
}

var types = getTypes('javascript', false, ['window'], window, true, 1992, document, window, typeof null, null, /testReg/);

var equal = JSON.stringify(types) ===
    JSON.stringify(['string', 'boolean', 'array', 'object', 'boolean', 'number', 'object', 'object', 'string', 'object', 'regexp']);

alert('equal : ' + equal);