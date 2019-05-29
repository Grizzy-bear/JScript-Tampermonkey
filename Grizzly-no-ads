// ==UserScript==
// @name         大灰熊不喜欢的广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Grizzly
// @match        http://www.sohu.com/a/295529444_197250
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 判断是搜狐域名
    var hostSohu = window.location.host
    if(hostSohu == "www.sohu.com"){
        var sonDom = document.getElementById('right-side-bar');
        var parentDom = document.getElementById('article-container');
       // var sonDom2= document.getElementById('main-header');
       // var parentDom2= document.getElementsByClassName('wrapper-box')
//删除顶部广告
        //parentDom2.removeChild(sonDom2);
//删除侧边广告
        parentDom.removeChild(sonDom);
        //删除右下方标记
        var child=document.getElementById("float-btn");
        child.parentNode.removeChild(child);
    }

    // Your code here...
    // 判断百度知道域名
    var hostBaiduZhi = window.location.host

    if(hostBaiduZhi == "zhidao.baidu.com"){
    	//删除右侧
        var sonDom2 = document.querySelector('#qb-side');
        var parentDom2 = document.querySelector('#body > div > section');
       // var sonDom2= document.getElementById('main-header');
       // var parentDom2= document.getElementsByClassName('wrapper-box')
//删除顶部广告
        //parentDom2.removeChild(sonDom2);
//删除侧边广告
        parentDom2.removeChild(sonDom2);
        //删除右侧
        // var child=document.querySelector('#j-nav-menu-container > div > div > div');
        // child.parentNode.removeChild(child);
        // 删除其他问题类似
        var child2 = document.querySelector('#wgt-related');
        child2.parentNode.removeChild(child2);
        //删除底部栏目
     	var child3 = document.querySelector('body > div.wgt-footer-new > div.footer-wp');
        child3.parentNode.removeChild(child3);
    }document.querySelector('#qb-side')

})();
