window.onload=function(){
    s="";
    for(var i=0;i<100;i++)
    {
        s+='<tr>'
        for(var j=0;j<100;j++)s+='<td></td>';
        s+='</tr>'
    }
    document.getElementById('func').innerHTML=s;
}

var bl=1,left=0,right=100,top_=100,under=0,n=2;
var yuan=Array(1145);

function mi(x)
{
    var ans=0;
    var sum=1;
    for(var i=0;i<=n;i++)
    {
        ans+=(sum*yuan[i]);
        sum*=x;
    }
    return ans;
}

function func()
{
    for(var i=0;i<=n;i++)yuan[i]=Number(document.getElementById('n'+i).value);
    ge=document.getElementsByTagName('td')
    for(var i=0;i<10000;i++)ge[i].className='no';
    for(var i=0;i<100;i++)
    {
        var y=bl*i;
        var minn=Math.abs(mi(0)-y),mini=0;
        
        for(var j=99;j>-2;j--)
        {
            var x=bl*j;
            var t=Math.abs(mi(x)-y);
            if(t<minn)minn=t,mini=j;
        }
        for(var j=0;j<=100;j++)
        {
            var x=bl*j;
            var t=Math.abs(mi(x)-y);
            if(t<minn)minn=t,mini=j;
        }
        console.log(mini+'->'+i);
        if(mini<100&&mini>=0)ge[(99-i)*100+mini].className='yes';
    }
    for(var i=0;i<100;i++)
    {
        var x=bl*i;
        var t=mi(x);
        //console.log(t);
        
        var minn=Math.abs(t),mini=0;
        for(var j=99;j>-2;j--)
        {
            var y=bl*j;
            if(Math.abs(y-t)<minn)minn=Math.abs(y-t),mini=j;
        }
        for(var j=0;j<=100;j++)
        {
            var y=bl*j;
            if(Math.abs(y-t)<minn)minn=Math.abs(y-t),mini=j;
        }
       // alert("y:"+mini+" x:"+i);
        if(mini<100&&mini>=0)ge[(99-mini)*100+i].className='yes';
    }
}

function size()
{
    document.getElementById('size').innerHTML="<a>宽度："+left+'~'+right+'</a>&nbsp;<a>高度：'+under+'~'+top_+'</a>';
}

function plu(){bl*=2;top_*=2;right*=2;func();size();}
function sub(){bl/=2;top_/=2;right/=2;func();size();}

function outinput()
{
    s="y="
    for(var i=n;i>1;i--)s+='<input id="n'+i+'" />x<sup>'+i+'</sup>+';
    s+='<input id="n1" />x+<input id="n0" />';
    document.getElementById('inputfunc').innerHTML=s;
}

function jia()
{
    if(n<1000)n++;
    outinput();
}

function jian()
{
    if(n)n--;
    outinput();
}
