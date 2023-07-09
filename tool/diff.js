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

function changesize(){document.getElementById('size').innerHTML=document.getElementById('inSi').value;}
function changenum(){document.getElementById('num').innerHTML=document.getElementById('inNum').value;}

var zm="abcdefghighlmnopqrstuvwxyz",rn;

function init()
{
    var n=Number(document.getElementById('inSi').value);
    var m=Number(document.getElementById('inNum').value);
    s="";
    bz="";
    var rm=Math.floor(Math.random()*m);
    diff="";
    for(var i=0;i<m;i++)
    {
        t=zm[Math.floor(Math.random()*26)]
        bz+=t;
        if(i==rm)diff+=zm[Math.floor(Math.random()*26)];
        else diff+=t;
    }
    if(diff==bz)
    {
        init();
        return false;
    }
    rn=Math.floor(Math.random()*n);
    
    for(var i=0;i<n;i++)
    {
        if(i!=rn)s+="<a class='cha' onclick='Open("+i+");return false;'>"+bz+"</a><br>";
        else s+="<a class='cha' onclick='Open("+i+");return false;'>"+diff+"</a><br>";
    }
    document.getElementById('diff').innerHTML=s;
    document.getElementById('border').style.paddingTop=(n*9+5)+'px';
    document.getElementById('border').style.paddingBottom=(n*9+5)+'px';
}

function Open(i)
{
    if(i==rn)alert('正确！');
    else alert("错误！");

    cha=document.getElementsByClassName('cha');
    for(var i=0;i<cha.length;i++)cha[i].onclick='return false;';
    cha[rn].style.color='red';
}

addLoadEvent(init);
addLoadEvent(changesize);
addLoadEvent(changenum);
