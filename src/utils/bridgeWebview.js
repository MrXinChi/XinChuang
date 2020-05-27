//不需要ipad的

// import Vue from 'vue'
// // 判断ios或者安卓
// window.globalPhoneType = Vue.prototype.globalPhoneType = function () {
//   var u = navigator.userAgent;
//   console.log(u)
//   if ((u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)) {
//     return 'Android';
//   } else if ((u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1)) {
//     return 'Ios';
//   }
// }

// window.globalWebView = Vue.prototype.globalWebView = function (methods, parms) {
//   parms = parms == undefined ? '' : parms
//   console.log(methods,parms)
//   switch (globalPhoneType()) {
//     case 'Android':
//       if (parms == '') {
//         radio[methods]();
//       } else {
//         radio[methods](parms);
//       }
//       break;
//     case 'Ios':
//       parms = parms == '' ? [] : parms
//       window.webkit.messageHandlers[methods].postMessage(parms);
//       break;
//   }
// }

import Vue from 'vue'
// 判断ios或者安卓
window.globalPhoneType = Vue.prototype.globalPhoneType = function () {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsAndroid = sUserAgent.match(/android/i) =="android";
  // var bIsIpad = sUserAgent.match(/ipad/i) =="ipad";
  // var bIsIphoneOs = sUserAgent.match(/iphone os/i) =="iphone os";
  if(bIsAndroid){
	  return 'Android';
  }else{
	 return 'Ios';
  }
  // if ((u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)) {
  //   return 'Android';
  // } else if ((u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1)) {
  //   return 'Ios';
  // }
}

window.globalWebView = Vue.prototype.globalWebView = function (methods, parms) {
  parms = parms == undefined ? '' : parms;
  switch (globalPhoneType()) {
    case 'Android':
      if (parms == '') {
        radio[methods]();
      } else {
        radio[methods](parms);
      }
      break;
    case 'Ios':
      parms = parms == '' ? [] : parms
      window.webkit.messageHandlers[methods].postMessage(parms);
      break;
  }
}