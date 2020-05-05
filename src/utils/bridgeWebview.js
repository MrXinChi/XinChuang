import Vue from 'vue'
// 判断ios或者安卓
window.globalPhoneType = Vue.prototype.globalPhoneType = function () {
  var u = navigator.userAgent;
  if ((u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)) {
    return 'Android';
  } else if ((u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1)) {
    return 'Ios';
  }
}

window.globalWebView = Vue.prototype.globalWebView = function (methods, parms) {
  parms = parms == undefined ? '' : parms
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