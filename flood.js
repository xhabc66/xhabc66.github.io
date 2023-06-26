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

var n=10,k=4,xd=40,cs=0,lose=false,open=0;
var a=Array(1145),b=Array(1145),book=Array(1145),lei=Array(100000);
for(var i=0;i<1145;i++)a[i]=Array(1145),b[i]=Array(1145),book[i]=Array(1145),lei[i]=Array(2);
var zt=0;

function getn()
{
    document.getElementById("n").value=10;
}

function rand()
{
    return Math.round(Math.random()*65536);
}

function newOpen()
{
    document.getElementById("open").innerHTML=open+'/'+n*n;
    document.getElementById("cs").innerHTML=cs+'/'+xd;
}

function OpenGe(to)
{
    cs++;//alert("open:"+1+' '+1+' '+a[1][1]+' '+to);
    if(cs>xd){document.getElementById("win").innerHTML="You lose";lose=1;}
    if(a[1][1]!=to)
    {
    		for(var i=1;i<=n;i++)
    			for(var j=1;j<=n;j++)
    				book[i][j]=false;
    		open=0;
    		openGe(1,1,a[1][1],to,0);
    }
}

function openGe(i,j,col,to,flag)
{
    if(i<1||i>n||j<1||j>n||(a[i][j]!=col&&a[i][j]!=to)||(book[i][j])||(flag&&a[i][j]==col))
    {
    	//alert("back:"+i+' '+j+' '+a[i][j]+' '+col+' '+to+' '+(book[i][j]));
    	return false;
    }
   // alert("open:"+i+' '+j);
    open++;
    newOpen();
    if(open==n*n&&!lose)
    {
        alert("You win!");document.getElementById("win").innerHTML="You win!";
    }
    var ges=document.getElementsByTagName("td");
    var temp=a[i][j];
    a[i][j]=to;
    ges[(i-1)*n+j-1].className='n'+to;
    ges[(i-1)*n+j-1].innerHTML='0';
    book[i][j]=true;
    var fl=(temp==to);
    //if(flag)
    {
	  	openGe(i,j+1,col,to,fl);
	  	openGe(i,j-1,col,to,fl);
	    openGe(i+1,j,col,to,fl);
	    openGe(i-1,j,col,to,fl);
	  }
}



function begin()
{
	
	n=document.getElementById("n").value;n=Math.min(Math.max(4,n),100);
    k=document.getElementById("k").value;
	document.getElementById("n").value=n;k=Math.min(Math.max(2,k),8);
    document.getElementById("k").value=k;
    xd=Math.floor(n*n*k/32);cs=0;
	for(var i=1;i<=n;i++)for(var j=1;j<=n;j++)book[i][j]=0;open=0;
    lose=false;
    document.getElementById("win").innerHTML="";
    var tableHTML="";
    newOpen(0);
    for(var i=0;i<=n+1;i++)for(var j=0;j<=n+1;j++)a[i][j]=rand()%k;
    for(var i=1;i<=n;i++)
    {
        tableHTML+='<tr>';
        for(var j=1;j<=n;j++)tableHTML+='<td class="n'+a[i][j]+'"><a href="#" class="hid" onclick="OpenGe('+a[i][j]+')">?</a></td>';
        tableHTML+='</tr>';
    }
    document.getElementsByTagName("table")[0].innerHTML=tableHTML;
        document.getElementsByTagName("td")[0].innerHTML='0';

}

addLoadEvent(getn);
addLoadEvent(begin);
