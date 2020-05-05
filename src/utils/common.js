import Vue from 'vue'
window.VJsonParse = Vue.prototype.VJsonParse = function (s) {
	try {
		return JSON.parse(s);
	} catch (e) {}
	return null;
};

window.VJsonStringify = Vue.prototype.VJsonStringify = function (s) {
	try {
		return JSON.stringify(s);
	} catch (e) {}
	return null;
};

// 获取用户信息
window.getUserData = Vue.prototype.getUserData = function () { // 获取用户信息
	try {
		return {
			user_id: localStorage.getItem('user_id'),
			token: localStorage.getItem('token')
		};
	} catch (e) {}
	return null;
}

// 获取用户详细信息
window.getPersonalData = Vue.prototype.getPersonalData = function () {
	try {
		return {
			userId: localStorage.getItem('user_id'),
			token: localStorage.getItem('token'),
			type: localStorage.getItem("showBottom"),
			phone: localStorage.getItem("mobile"),
		};
	} catch (e) {}
	return null;
}

window.setPersonData = Vue.prototype.setPersonData = function (token, user_id) {
	let data = VJsonStringify({
		token: token,
		user_id: user_id
	});
	localStorage.setItem('personData', data);
}


window.removePersonData = Vue.prototype.removePersonData = function () {
	try {
		return VJsonParse(localStorage.removeItem('personData'));
	} catch (e) {}
	return null;
}

// 判断是否为空
window.isEmpty = Vue.prototype.isEmpty = function (str) {
	if (typeof str == "object") {
		return str.length == 0 || str == undefined ? true : false;
	}
	if (str === null || str === undefined || str === '' || str == " " || str.trim() == '') {
		return true;
	}
	return false;
}