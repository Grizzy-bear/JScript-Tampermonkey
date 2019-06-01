// ==UserScript==
// @name         大灰熊不喜欢的广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Grizzly
// @match        http://www.sohu.com/
// @match        https://gitee.com/
// @grant        none
// ==/UserScript==





(function() {
	/* body... */
var refreshTime = 500;
	var pageHref = window.location.href;
	var pageHost = window.location.host;
	// 处理gitee
	if (pageHost == "gitee.com") {

		setInterval(function () {
			/* body... */
			$('.gitee-stars-main-widget').remove() //删除左侧
			/* body... */
		// var abs1 = document.querySelector('#users-events > div.g-wxad__wrapper')
		// abs1.parentNode().removeChild(abs1);
			$('.g-wxad__wrapper').remove();
            $('.ent-poster').remove();
		}, refreshTime)
		clearInterval(null)
	}

})();
