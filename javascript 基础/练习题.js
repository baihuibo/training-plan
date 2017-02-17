//Created by baihuibo on 2017/2/17.
function getTypes() {
    /**
     * 实现返回所有参数类型
     * window 和 document 视为 object
     */

}

var types = getTypes('javascript', false, ['window'], window, true, 1992, document, window, typeof null, null, /testReg/);

var equal = JSON.stringify(types) ===
    JSON.stringify(['string', 'boolean', 'array', 'object', 'boolean', 'number', 'object', 'object', 'string', 'object', 'regexp']);

alert('equal : ' + equal);