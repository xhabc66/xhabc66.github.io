

// 设置cookie的函数
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

var okc="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_";

function check(name)
{
    if(name.length>20||name.length<4)return false;
    var ok=true;
    for(var i=0;i<name.length;i++)
    {
        var now=false;
        for(var j=0;j<okc.length;j++)
            if(name[i]==okc[j])
            {
                now=true;
                break;
            }
        if(now==false)
        {
            ok=false;
            break;
        }
    }

    if(parseInt(name))ok=false;
    return ok;
}

function login()
{
    var name=document.getElementById('username').value;
    
    

    var password=document.getElementById('password').value;
    const requestData = 'login '+name+' '+password;
    console.log(requestData);
    const url = 'https://bjsdfz22zzh.com:2110';

    fetch(url, {
    method: 'POST',
    body: requestData,
    mode:"cors"
    })
    .then(response => response.text())
    .then(data => {
        alert(`${data}`);
        if(data="登录成功")setCookie("name", name, 30);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function regsiter()
{
    var name=document.getElementById('name').value;

    if(check(name)==false)
    {
        alert("名称不符合规范！");
        return false;
    }
    var password=document.getElementById('pasword').value;
    var password2=document.getElementById('next').value;
    if(password!=password2)
    {
        alert("两次密码不一样");
        return false;
    }
    const requestData = 'regsiter '+name+' '+password;
    //console.log(requestData);
    const url = 'https://bjsdfz22zzh.com:2110';

    fetch(url, {
    method: 'POST',
    body: requestData,
    mode:"cors"
    })
    .then(response => response.text())
    .then(data => {
        alert(`${data}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function reg()
{
    document.getElementById('login').style.display="none";
    document.getElementById('reg').style.display="";
}
function log()
{
    document.getElementById('login').style.display="";
    document.getElementById('reg').style.display="none";
}

window.onload=function()
{
    if(getCookie('name')!=null&&getCookie('name')!=""){alert(getCookie('name'));location.href='https://xhabc66.github.io';}
}
