// ==UserScript==
// @name         大灰熊不喜欢的广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Grizzly
// @match        http://www.sohu.com/
// @match        https://gitee.com/
// @include         *://www.sohu.com/a*
// @grant        none
// @note   11/06/2019  删除了搜狐下方的广告
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
	};
	//清楚搜狐广告
	if(pageHost == "www.sohu.com"){
			/* body... */
			$('#right-side-bar').remove(); //删除左侧
			$('.groom-read').remove();
			$('.article-recom').remove();
	}

})();


// bak
