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

var n,lose=false,open=0;
var a=Array(1145),b=Array(1145),book=Array(1145),lei=Array(100000);
for(var i=0;i<1145;i++)a[i]=Array(1145),b[i]=Array(1145),book[i]=Array(1145),lei[i]=Array(2);
var zt=0;

function change()
{
    zt=!zt;
    var change1=document.getElementById("change");
    if(change1.innerHTML=="转为标记模式")change1.innerHTML="转为查看模式";
    else change1.innerHTML="转为标记模式";
}

function getn()
{
    document.getElementById("n").value=20;
}

function rand()
{
    return Math.round(Math.random()*65536);
}

function Random(i)
{
    var x=rand()%n+1,y=rand()%n+1;
    var b=0;
    for(var j=0;j<1000;j++){x=rand()%n+1,y=rand()%n+1;if(a[x][y]==0){b=1;break;}}
    if(b){a[x][y]=-1;lei[i][0]=x;lei[i][1]=y;/*alert(i+':'+lei[i][0]+' '+lei[i][1]);*/return 1;}
    return 0;
}

function sum(i,j)
{
    return a[i-1][j-1]+a[i-1][j]+a[i-1][j+1]+a[i][j-1]+a[i][j+1]+a[i+1][j-1]+a[i+1][j]+a[i+1][j+1];
}

function Boom()
{
    var ges=document.getElementsByTagName("td");
    for(var i=1;i<=n*n/10;i++)
    {
        var boom=ges[(lei[i][0]-1)*n+lei[i][1]-1];
        if(boom.className=="boom")continue;
	boom.innerHTML="Boom!";
        boom.className="no";
    }
}

function Open()
{
    win=true;
    document.getElementById("win").innerHTML="You Win!";
    var ges=document.getElementsByTagName("td");
    for(var i=1;i<=n*n/10;i++)
    {
        var boom=ges[(lei[i][0]-1)*n+lei[i][1]-1];
        boom.innerHTML="Here!";
        boom.className="yes";
    }
}

function newOpen()
{
    document.getElementById("open").innerHTML=open+'/'+n*n;
}

function allOpen()
{
	var ges=document.getElementsByTagName("td");
	for(var i=1;i<=n;i++)
		for(var j=1;j<=n;j++)
		{
			if(a[i][j]==-1)continue;
			ges[(i-1)*n+j-1].innerHTML=b[i][j];
			ges[(i-1)*n+j-1].className='n'+b[i][j];
		}
}

function openGe(i,j)
{
    if(lose)return false;
    if(i<1||i>n||j<1||j>n||book[i][j])return false;
    var ges=document.getElementsByTagName("td");
    if(zt)
    {
        if(ges[(i-1)*n+j-1].className=="open")ges[(i-1)*n+j-1].className="";
        else ges[(i-1)*n+j-1].className="open";
        return false;
    }
    else if(ges[(i-1)*n+j-1].className=="open")return false;
    
    
	if(a[i][j]==-1)
    {
        ges[(i-1)*n+j-1].innerHTML="Boom!";
        ges[(i-1)*n+j-1].className="boom";
        lose=true;
        alert("You lose");
        
        Boom();
        allOpen();
	    return false;
    }
		open++;newOpen();    book[i][j]=1;
	if(open>=n*n-Math.floor(n*n/10))
    {
        alert("You win!");
       
        Open();
         allOpen();
    }

    
    if(b[i][j]==0)
    {
        ges[(i-1)*n+j-1].innerHTML="0";
        ges[(i-1)*n+j-1].className="n"+b[i][j];
        openGe(i+1,j+1);openGe(i,j+1);
        openGe(i+1,j-1);openGe(i,j-1);
        openGe(i-1,j+1);openGe(i+1,j);
        openGe(i-1,j-1);openGe(i-1,j);
    }
    else 
    {
        ges[(i-1)*n+j-1].innerHTML=b[i][j];
        ges[(i-1)*n+j-1].className="n"+b[i][j];
    }
}



function begin()
{
	n=document.getElementById("n").value;n=Math.min(Math.max(10,n),100);
	document.getElementById("n").value=n;
	for(var i=1;i<=n;i++)for(var j=1;j<=n;j++)book[i][j]=0;open=0;
    win=lose=false;
    document.getElementById("win").innerHTML="";
    var tableHTML="";
    newOpen(0);
    for(var i=0;i<=n+1;i++)for(var j=0;j<=n+1;j++)a[i][j]=0;
    for(var i=1;i<=n*n/10;i++)Random(i);
    for(var i=1;i<=n;i++)for(var j=1;j<=n;j++)b[i][j]=-sum(i,j);
    for(var i=1;i<=n;i++)
    {
        tableHTML+='<tr>';
        for(var j=1;j<=n;j++)tableHTML+='<td><a href="#" onclick="openGe('+i+','+j+');return false;">?</a></td>';
        tableHTML+='</tr>';
    }
    document.getElementsByTagName("table")[0].innerHTML=tableHTML;
}

addLoadEvent(getn);
addLoadEvent(begin);

function help()
{
    alert("按 t 切换模式。");
    alert("按 h 查看帮助。");
}


document.onkeydown=function(){
    var key=event.keyCode;
    if(key==72)help();
	else if(key==84)change();
}


