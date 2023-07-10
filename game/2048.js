var a=Array(1001),t1=Array(1001),t2=Array(1002),n=4;
var score=0,ls=0,win=false,lose=false,maxsc=0;
var txt=["0","2","4","8","16","32","64","128","256","512","1024","2048","You win!","You lose"];
var n2=[1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192];
var OI=["","CE","评测中","ILE","OLE","UKE","MLE","TLE","RE","WA","PC","AC","AKIOI","AFO"];

for(var i=0;i<1001;i++)a[i]=Array(1001);

function move()
{
    var k=1;

    for(var i=1;i<=n;i++)
    {
        if (t1[i]==0)continue;
        else if (i==n)t2[k++]=t1[i];
        else
        {
            var j=i+1;
            while ((t1[j]==0)&&(j<n))j++;
            if (t1[i]==t1[j])t2[k++]=t1[i]+1,score+=n2[t1[i]],i=j;
            else t2[k++]=t1[i],i=j-1;
        }
    }
    for(var m=k;m<=n;m++)t2[m]=0;    
}

function up()
{
    for(var c=1;c<=n;c++)
    {
        for(var r=1;r<=n;r++)
            t1[r]=a[r][c];
        move();
        for(var r=1;r<=n;r++)
            a[r][c]=t2[r];    
    }
}


function down()
{
    for(var c=1;c<=n;c++)
    {
        for(var r=1;r<=n;r++)
            t1[r]=a[n-r+1][c];
        move();
        for(var r=1;r<=n;r++)
            a[n-r+1][c]=t2[r];
    }
}

function left()
{
    for(var r=1;r<=n;r++)
    {
        for(var c=1;c<=n;c++)
            t1[c]=a[r][c];
        move();
        for(var c=1;c<=n;c++)
            a[r][c]=t2[c];    
    }
}


function right()
{
    for(var r=1;r<=n;r++)
    {
        for(var c=1;c<=n;c++)
            t1[c]=a[r][n-c+1];
        move();
        for(var c=1;c<=n;c++)
            a[r][n-c+1]=t2[c];    
    }
}

function rand()
{
    return Math.round(Math.random()*65536);
}

function Random()
{
    var x=rand()%n+1,y=rand()%n+1,num=(rand()%100>90?(rand()%100>95?3:2):1);
    var b=0;
    for(var i=0;i<1000;i++){x=rand()%n+1,y=rand()%n+1;if(a[x][y]==0){b=1;break;}}
    if(b){a[x][y]=num;return 1;}
    return 0;
}

function Print()
{
    maxsc=Math.max(maxsc,score/(n*n*n/64.0));
    document.getElementById("score").innerHTML="您的分数："+score/(n*n*n/64.0);
    document.getElementById("max").innerHTML="累计最高分数："+maxsc;
    var num=document.getElementsByTagName("td");
    for(var i=0;i<num.length;i++)
    {
        num[i].innerHTML=txt[a[Math.floor(i/n)+1][i%n+1]];
        num[i].className='n'+a[Math.floor(i/n)+1][i%n+1];
    }
}

function  check()
{
    var cnt=0;
    for(var i=1;i<=n;i++)
        for(var j=1;j<=n;j++)
            if(a[i][j]==0)cnt++;
            else if(a[i][j]>=11)return 1145;
    var b1=(cnt>0),b2=false;
    for(var i=1;i<=n;i++)
        for(var j=1;j<=n;j++)
            for(var k=1;k<=n;k++)
                for(var l=1;l<=n;l++)
                {

                    if((Math.abs(i-k)>1)||(Math.abs(j-l)>1)||(Math.abs(i-k)+Math.abs(j-l)>1)||(i==k&&j==l)){
                        continue;}
                    if(a[i][j]==a[k][l])
                        b2=true;
                }
    //alert(b1+' '+b2+' ');
    //alert((!b1)&&(!b2));
    return (!b1)&&(!b2);
}

function afterMove()
{
    Random();Random();
    Print();
    var is=check();
    if(is==1145&&!win){
        win=true;
        alert(txt[12]);
        document.getElementById("win").innerHTML=txt[12];
    }
    else if(is&&!win&&!lose)
    {
        lose=true;
        alert(txt[13]);
    }
}

function is_up()
{
    up();
    afterMove();
}

function is_down()
{
    down();
    afterMove();
}

function is_left()
{
    left();
    afterMove();
}

function is_right()
{
    right();
    afterMove();
}

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

function help()
{
    alert("上下左右键移动。");
    alert("按 h 查看帮助。");
}

//addLoadEvent(test);

document.onkeydown=function(){
    var key=event.keyCode;
    if(key==37)is_left();
    else if(key==38)is_up();
    else if(key==39)is_right();
    else if(key==40)is_down();
    else if(key==72)help();
}

function init()
{
    n=4;
    score=0;
    var tableHTML="";
    for(var i=1;i<=n;i++)
    {
        tableHTML+='<tr>';
        for(var j=1;j<=n;j++)tableHTML+='<td></td>';
        tableHTML+='</tr>';
    }
    document.getElementsByTagName("table")[0].innerHTML=tableHTML;
    win=lose=false;
    document.getElementById("win").innerHTML="";
    for(var i=1;i<14;i++)txt[i]=document.getElementById(i+" ").value;
    for(var i=0;i<n*n;i++){a[Math.floor(i/n)+1][i%n+1]=0;}
    Random();
    Random();
    Print();
}

function initClassic()
{
    for(var i=1;i<12;i++)document.getElementById(i+" ").value=n2[i];
    document.getElementById("12 ").value="You win!";
    document.getElementById("13 ").value="You lose";
}

function initOI()
{
    for(var i=1;i<14;i++)document.getElementById(i+" ").value=OI[i];
}

function initNumber()
{
    for(var i=1;i<12;i++)document.getElementById(i+" ").value=i;
    document.getElementById("12 ").value="You win!";
    document.getElementById("13 ").value="You lose";
}

addLoadEvent(initClassic);
addLoadEvent(init);
