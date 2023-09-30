function addLoadEvent(newEvent)
{
    if(typeof window.onload!='function')window.onload=newEvent;
    else
    {
        var oldEvent=window.onload;
        window.onload=function(){
            oldEvent();
            newEvent();
        }
    }
}

function setCookie(name, value, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

// 获取cookie的函数
function getCookie(name) {
    var cookieString = document.cookie;
    var cookies = cookieString.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null; // 如果找不到指定名称的cookie，则返回null
}

addLoadEvent(function(){
    document.getElementsByTagName('body')[0].innerHTML=document.getElementsByTagName('body')[0].innerHTML+'<div style="position: absolute;left:0px;top:0px;"><a href="https://xhabc66.github.io/" ><<-回到主页</a></div>';
    if(getCookie("name")!=""&&getCookie("name")!=null)document.body.innerHTML=document.body.innerHTML+'<div id="admin" style="position: absolute;top:0px;left:85%;"><a href="https://xhabc66.github.io/user/admin.html">用户管理</a></div>';
    else document.body.innerHTML=document.body.innerHTML+'<div id="admin" style="position: absolute;top:0px;left:85%;"><a href="https://xhabc66.github.io/user/login.html">登录/注册</a></div>';
})
