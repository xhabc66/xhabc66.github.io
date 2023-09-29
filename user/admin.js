// 设置cookie的函数
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

window.onload=function()
{
    if(getCookie("name")=="")location.href="login.html";
}

function change()
{
    var name=getCookie("name");
    var password=document.getElementById('old').value;
    var newpassword = document.getElementById('new').value;
    var new2=document.getElementById('new2').value;
    if(newpassword!=new2)
    {
        alert("两次密码不一样");
        return false;
    }
    var requestData='change '+name+' '+password+' '+new2;

    const url = 'https://bjsdfz22zzh.com:2110';

    console.log(requestData);
    fetch(url, {
        method: 'POST',
        body: requestData,
        mode:"cors"
        })
        .then(response => response.text())
        .then(data => {
            alert(`${data}`);
            if(data=="success")
            {
                requestData = 'md5 '+new2;

                fetch(url, {
                    method: 'POST',
                    body: requestData,
                    mode:"cors"
                    })
                    .then(response => response.text())
                    .then(data => {
                        setCookie("name",name,1)
                        addCookie("password", data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
    });


}


function logout()
{
    document.cookie="name= ; password=;"
}
