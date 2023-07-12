window.onload=function(){
    s="";
    for(var i=0;i<101;i++)
    {
        s+='<tr>'
        for(var j=0;j<101;j++)s+='<td></td>';
        s+='</tr>'
    }
    document.getElementById('func').innerHTML=s;
    ge=document.getElementsByTagName('td');
    for(var i=0;i<=100;i++)ge[i*101+51].className='y';
    for(var i=0;i<=100;i++)ge[5151+i].className='x';
    ge[5202].className='center';
}

var bl=1,left=-50,right=50,top_=50,under=-50,n=2;
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
    ge=document.getElementsByTagName('td');
    for(var i=0;i<10201;i++)ge[i].className='no';
    for(var i=0;i<=100;i++)ge[i*101+51].className='y';
    for(var i=0;i<=100;i++)ge[5151+i].className='x';
    ge[5202].className='center';
    for(var i=-50;i<51;i++)
    {
        var y=bl*i;
        var minn=Math.abs(mi(0)-y),mini=Array(100),num=0;
        for(var j=-51;j<=51;j++)
        {
            var x=bl*j;
            var t=Math.abs(mi(x)-y);
            if(t<minn)minn=t;
        }
        for(var j=-51;j<=51;j++)
        {
            var x=bl*j;
            var t=mi(x);
            var tmin=(mi(x-bl)+mi(x))/2,tmax=(mi(x+bl)+mi(x))/2;
            if((tmin<=y&&tmax>=y)||(tmin>=y&&tmax<=y))mini[num]=j,num++;
            if(t<=tmin&&t<=tmax&&y<=Math.min(tmin,tmax)&&y>=t)mini[num]=j,num++;
            if(t>=tmin&&t>=tmax&&y>=Math.max(tmin,tmax)&&y<=t)mini[num]=j,num++;
        }
        console.log('gh '+i);
        for(var k=0;k<num;k++)
            if(mini[k]<51&&mini[k]>=-50){
                ge[(50-i)*101+mini[k]+51].className='yes';console.log(mini[k]);}
    }
    for(var i=-50;i<51;i++)
    {
        var x=bl*i;
        var t=mi(x);
        //console.log(t);
        
        var minn=Math.abs(t),mini=0;
        for(var j=50;j>-52;j--)
        {
            var y=bl*j;
            if(Math.abs(y-t)<minn)minn=Math.abs(y-t),mini=j;
        }
        for(var j=-50;j<=51;j++)
        {
            var y=bl*j;
            if(Math.abs(y-t)<minn)minn=Math.abs(y-t),mini=j;
        }
        console.log("y:"+mini+" x:"+i);
        if(mini<51&&mini>=-50)ge[(50-mini)*101+i+51].className='yes';
    }
    
}

function size()
{
    document.getElementById('size').innerHTML="<a>宽度："+left+'~'+right+'</a>&nbsp;<a>高度：'+under+'~'+top_+'</a>';
}

function plu(){bl*=2;under*=2;left*=2;top_*=2;right*=2;func();size();}
function sub(){bl/=2;under/=2;left/=2;top_/=2;right/=2;func();size();}

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
