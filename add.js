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

addLoadEvent(function(){
    document.getElementsByTagName('body')[0].innerHTML=document.getElementsByTagName('body')[0].innerHTML+'<a href="https://xhabc66.github.io/" style="position: absolute;left:0px;top:0px;"><<-回到主页</a>';
})
