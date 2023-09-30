const url = 'https://bjsdfz22zzh.com:2110';

function setCookie(name, value, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function addCookie(name,value)
{
    document.cookie = name + "=" + value + "; " + document.cookie;
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



function submit(){
    var text=document.getElementById('info').value;

    var reqdata="bug "+text;

    fetch(url, {
    method: 'POST',
    body: reqdata,
    mode:"cors"
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}