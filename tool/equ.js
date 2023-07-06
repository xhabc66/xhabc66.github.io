var A=Array(1001),sol=Array(1001),n=3;
for(var i=0;i<1001;i++)A[i]=Array(1001);

function ee(n)
{
	for(var i=1;i<=n;i++)
	{
		var flag=1;
		for(var j=i;j<=n;j++)
			if(A[j][i])
			{
				for(var k=1;k<=n+1;k++)
                {
                    var c=A[i][k];
                    A[i][k]=A[j][k];
                    A[j][k]=c;
                }
				flag=0;
				break;
			}
		if(flag)return 1;
		for(var j=i+1;j<=n+1;j++)A[i][j]/=A[i][i];
		A[i][i]=1;
		for(var j=i+1;j<=n;j++)
		{
			var jz=-A[j][i];
			for(var k=1;k<=n+1;k++)
				A[j][k]+=A[i][k]*jz;
		}
	}
	return 0;
}

function get(n)
{
	sol[n]=A[n][n+1];
	for(var i=n-1;i>0;i--)
	{
		var num=A[i][n+1];
		for(var j=i+1;j<=n;j++)num-=A[i][j]*sol[j];
		sol[i]=Math.floor(num*10000000000+0.5)/10000000000;
	}
}

function init()
{
    console.clear();
    for(var i=1;i<=n;i++)
    {
		for(var j=1;j<=n;j++)
			A[i][j]=parseInt(document.getElementById('n'+i+'-'+j).value);
        A[i][n+1]=parseInt(document.getElementById('c'+i).value);
    }
    if(ee(n)){alert("方程组无唯一解");return 0;}
	get(n);
	for(var i=1;i<=n;i++)document.getElementById('ans'+i).innerHTML=sol[i];
}

function newUn()
{
    s="";
    for(var i=1;i<=n;i++)
    {
        s+='<div id="n'+i+'">';
        for(var j=1;j<n;j++)
            s+='<input id="n'+i+'-'+j+'"/>a<sub>'+j+'</sub>+';
        s+='<input id="n'+i+'-'+n+'"/>a<sub>'+n+'</sub>=<input id="c'+i+'"/></div><br>';
    }
    document.getElementById('?').innerHTML=s;

    s="";
    for(var i=1;i<=n;i++)s+='a<sub>'+i+'</sub>=<a id="ans'+i+'"></a><br>';
    document.getElementById('ans').innerHTML=s;
}

function add()
{
    if(n>=400)return 0;
    n=n+1;newUn();
}

function sub()
{
    if(n<2)return 0;
    n=n-1;
    newUn();
}
