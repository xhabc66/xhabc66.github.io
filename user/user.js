const url="https://bjsdfz22zzh.com:2110"
var type=["封禁用户","普通用户","管理员","站主"];


function get()
{
    var id=location.href.split('=')[1];
    console.log(id);
    fetch(url, {
        method: 'POST',
        body: 'get '+id,
        mode:"cors"
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        var datas=data.split(' ');
        document.getElementById('name').innerHTML=datas[0];
        document.getElementById('qm').innerHTML=datas[3];
        document.getElementById('txt').innerHTML=datas[4];
        document.getElementsByClassName('right')[0].innerHTML=id;
        document.getElementsByClassName('right')[1].innerHTML=datas[1];
        document.getElementsByClassName('right')[2].innerHTML=type[parseInt(datas[2])];
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.onload=get;
