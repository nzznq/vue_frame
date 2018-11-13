/**
 * 判断是否为数组
 * @param obj 要判断的数据
 * @returns
 */
const _isArray = function(obj) { 
	return Object.prototype.toString.call(obj) === '[object Array]'; 
};

/**
 * 判断是否为空对象
 * @param obj 要判断的对象
 * @returns boolean
 */
const _isEmptyObject = function(obj) {
	if(obj instanceof Object){
		for(var key in obj){
			return false;
		}
		return true;			
	}
};

/**
 * 判断是否为空
 * @param obj 要判断的数据
 * @returns boolean
 */
const isNull = function(obj) {
	if (obj === undefined || obj === "undefined" || obj === null || obj === "null" || obj === "" || obj === "{null}" || _isEmptyObject(obj) ) {
		return true;
	}
	if(_isArray(obj)){
		return obj.length == 0;
	}
	return false;
};

/**
 * 获取URL参数
 * @param url 地址; 参数为空时url默认为当前地址
 * @returns 参数JSON数据
 */
const getUrlParam = function (url) {
	url = url ? url : window.location.href;
	let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
	for (var i = 0, _len = _arrS.length; i < _len; i++) {
		let pos = _arrS[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		let name = _arrS[i].substring(0, pos), 
		value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
		_rs[name] = value;
	}
	return _rs;
},

/**
 * 判断是否为方法对象
 * @param obj 要判断的数据
 * @returns boolean
 */
const isFunction = function(obj) {
	try {
		if (typeof eval(obj) == "function")
			return true;
	} catch (e) {
	}
	return false;
};

export {
	isFunction,
	getUrlParam,
	isNull
}

export default {
	isFunction,
	getUrlParam,
	isNull
};



