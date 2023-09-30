const url = 'https://bjsdfz22zzh.com:2110';

window.onload=function(){
    fetch(url, {
    method: 'POST',
    body: 'getbug',
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
            
            //var s=(nowdata[4]=="not"?"":nowdata[3]);
            html=html+'<tr><td>'+nowdata[0]+'</td><td >'+nowdata[1]+'</td><td>'+nowdata[2]+'</td></tr>';
        }
        document.getElementsByTagName('tbody')[0].innerHTML=html;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}