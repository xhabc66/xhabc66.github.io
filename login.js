var loginhtml='<h2 class="inl underline point" onclick="return false;">用户登录</h2>&emsp; <h2 class="inl nobold point" onclick="reg();return false;">用户注册</h2>&emsp;<h2 class="inl point nobold" style="display: none;" onclick="location.href = ">修改密码</h2>&emsp;<p>用户名</p><input id="username" class="input" placeholder="请输入用户名(必填)"><p>密&emsp;码</p><input id="password" class="input" type="password" placeholder="请输入密码(必填)"><p>忘记密码？请联系管理员：haohao20210607@163.com</p><button type="button" class="blue" onclick="login()">登&emsp;录</button>';
var reghtml='<h2 class="inl nobold point" onclick="log();return false;">用户登录</h2>&emsp;<h2 class="inl underline point" onclick="return false;">用户注册</h2>&emsp;<h2 class="inl point nobold" style="display: none;" onclick="location.href = ">修改密码</h2>&emsp;<p>用户名</p><input id="username" class="input" placeholder="请输入用户名(必填)"><p>密&emsp;码</p><input id="password" class="input" type="password" placeholder="请输入密码(必填)"><p>再次输入密码</p><input id="next" class="input" type="password" placeholder="请输入密码(必填)"><br><br><button type="button" class="blue" onclick="regsiter()">注&emsp;册</button>';


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
        setCookie("name", name, 30);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function regsiter()
{
    var name=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var password2=document.getElementById('next').value;
    if(password!=password2)
    {
        alert("两次密码不一样");
        return false;
    }
    const requestData = 'regsiter '+name+' '+password;
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
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function reg(){document.getElementsByClassName('inl')[0].innerHTML=reghtml;}
function log(){document.getElementsByClassName('inl')[0].innerHTML=loginhtml;}
