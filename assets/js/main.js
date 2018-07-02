$(function () {
    //设置左侧导航菜单的高度
    $('.nav-left-navbar').height($(document).height()-$('.navbar').height()-1);
    //设置右侧内容的高度
    $('.content-right').height($(document).height()-$('.navbar').height()-1);
    //默认加载首页
    $('.content-right').load('home.html');
    //在点击左侧导航菜单项，加载页面
    $('#a').click(function () {
        $('.content-right').load('a.html');
    });
    $('#b').click(function () {
        $('.content-right').load('b.html');
    });
    $('#c').click(function () {
        $('.content-right').load('c.html');
    });
});