function addLoadEvent(event)
{
    if(typeof window.onload=='undefined')window.onload=event;
    else
    {
        var old=window.onload;
        window.onload=function(){
            old();
            event();
        }
    }
}

addLoadEvent(function(){
    document.getElementsByTagName('body')[0].innerHTML=document.getElementsByTagName('body')[0].innerHTML+'<a href="https://xhabc66.github.io/" style="position: absolute;left:0px;top:0px;"><<-回到主页</a>';
})
