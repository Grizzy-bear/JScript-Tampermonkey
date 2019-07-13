// ==UserScript==
// @name         大灰熊不喜欢的广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Grizzly
// @match        http://www.sohu.com/
// @match        https://gitee.com/
// @include         *://www.sohu.com/a*
// @include         *://ac.qq.com/*
// @include         *://www.360doc.com/*
// @include         *://www.jb51.net/softs*

// @grant        none
// @note   11/06/2019  删除了搜狐下方的广告
// @note   15/06/2019  删除了网易邮箱下方的广告
// @note   16/06/2019  关闭网易邮箱广告，腾讯漫画付费观看
// @note   18/06/2019  删除360文库广告
// @note   14/07/2019  删除脚本之家下载界面的广告

// @require    https://cdn.bootcss.com/jquery/3.4.1/jquery.js
// @require    https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js

// ==/UserScript==



(function () {
	var $ = window.jQuery;
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
	if (pageHost == "www.sohu.com") {
		/* body... */
		$('#right-side-bar').remove(); //删除左侧
		$('.groom-read').remove();
		$('.article-recom').remove();
		$('#user-post').remove();
	}
	// 清楚网易邮箱网页广告
	// var href_reg = new RegExp(/https\:\/\/mail.163.com\/js6\/main.jsp/);
	// 去除漫画限制
	if (pageHost == "ac.qq.com"){
        window.delads = function (){
            document.querySelector('#iframeMask').remove();
        }
        window.setTimeout("delads()", 60);
        window.setTimeout(function() { document.querySelector('#checkVipFrame').remove(); document.querySelector('#roastBarWrap > div.roast-bar').remove();}, 60);

	};
	// 删除360文库广告
	if (pageHost == "www.360doc.com"){
        // window.delads = function (){
        //     document.querySelector('#iframeMask').remove();
        // }
        // window.setTimeout("delads()", 60);
        window.setTimeout(function() { document.querySelector('.a_right').remove();document.querySelector('.header').remove();}, 60);

	};
	if(pageHost == "www.jb51.net"){
		// 删除软件页面部分的广告
		var softsAddress = "https://" + pageHost + "/softs" ;
		var KeyWord = new RegExp('/softs/')
		if(KeyWord.test(pageHref) == true){
			window.setTimeout(function() { document.querySelector('.tonglan').remove();}, 60);
		}
		
	};
})();


// bak
