function is_br(i,n)
{
    if(n<25)return false;
    else if(n<100)return (i%10==9);
    else if(n<1000)return (i%Math.floor(Math.sqrt(n))==Math.floor(Math.sqrt(n))-1);
    else return i%40==39;
}

even=1,odd=1;

function random()
{

    s="";
    n=document.getElementById('num').value;
    min=document.getElementById('min').value;
    max=document.getElementById('max').value;
    if(!n||!min||!max)
    {
        alert("卡BUG？没门！");
        return false;
    }
    n=Number(n),min=Number(min),max=Number(max);
    if(!n||!min||!max)
    {
        alert("卡BUG？没门！");
        return false;
    }
    even=document.getElementById('even').checked;
    odd=document.getElementById('odd').checked;
    if(!(even||odd))even=true,odd=true;
    if((max-min)==0)
    {
        if(max%2==1)even=true;
        else odd=true;
    }
    document.getElementById('odd').checked=odd;
    document.getElementById('even').checked=even;
    for(var i=0;i<n;i++)
    {
        t=Math.round(Math.random()*(max-min))+min;
        while(!(max-min==0||(t%2==1&&even)||(t%2==0&&odd)))t=Math.round(Math.random()*(max-min))+min;
        s+=(t+' ');
        if(is_br(i,n))s+='<br>';
    }
    document.getElementById('res').innerHTML=s;
}

