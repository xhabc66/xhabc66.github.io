var style=["","style='font-weight:normal;'","style='font-weight:bolder;'","style='font-weight:bolder;color:purple;'"];
var type=["封禁用户","普通用户","管理员","站主"];


function get()
{

    const url = 'https://bjsdfz22zzh.com:2110';

    fetch(url, {
    method: 'POST',
    body: 'query',
    mode:"cors"
    })
    .then(response => response.text())
    .then(data => {
        var userdata=data.split(';');
        var html="";
        console.log(userdata.length);
        for(var i=0;i<userdata.length-1;i++)
        {
            var nowdata=userdata[i].split(' ');
            
            var s=style[parseInt(nowdata[3])];
            var t=type[parseInt(nowdata[3])];
            html=html+'<tr><td>'+nowdata[0]+'</td><td '+s+'>'+nowdata[1]+'</td><td>'+nowdata[2]+'</td><td>'+t+'</td><tr>';
        }
        document.getElementsByTagName('tbody')[0].innerHTML=html;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.onload=function(){get();};
