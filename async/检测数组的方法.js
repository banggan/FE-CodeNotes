1、Array.isArray(arr)
2、arr.constructor===Array
//constructor和instanceof貌似很好的两个检测数组的方法，
//当多个frame中回来跳，由于每一个frame都有自己的一套执行环境，
//跨frame实例化的对象彼此并不共享原型链，
//通过instanceof操作符和constructor属性检测的方法自然会失败
3、arr.instanceof Array 判断某个构造函数的 prototype 属性是否存在另外一个要检测对象的原型链上
//[[Class]] 的值只可能是下面字符串中的一个：
//Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String
4、Object.prototype.toString.call(arr)== 'Object Array'
//最佳方法
var isArray = (function () { 
	if (Array.isArray) { return Array.isArray; } 
	var objectToStringFn = Object.prototype.toString;	
	var arrayToStringResult = objectToStringFn.call([]); 
	return function (subject) { 
		return objectToStringFn.call(subject) === arrayToStringResult; 
	}; 	
    }()); 
