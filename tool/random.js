function is_br(i,n)
{
    if(n<25)return false;
    else if(n<100)return (i%10==9);
    else if(n<1000)return (i%Math.floor(Math.sqrt(n))==Math.floor(Math.sqrt(n))-1);
    else return i%40==39;
}

function random()
{
    s="";
    n=parseInt(document.getElementById('num').value);
    min=parseInt(document.getElementById('min').value);
    max=parseInt(document.getElementById('max').value);
    console.log(n+' '+min+' '+max);
    for(var i=0;i<n;i++)
    {
        t=Math.round(Math.random()*(max-min))+min;
        s+=(t+' ');
        if(is_br(i,n))s+='<br>';
    }
    document.getElementById('res').innerHTML=s;
}
