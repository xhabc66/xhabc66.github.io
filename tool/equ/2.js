
var eps=Number(0.0000000001);

var a=Array(1145);
var ans=Array(1145);
var ansnum=Array(1145);
var n=3;

for(var i=0;i<1001;i++){a[i]=Array(1145);ans[i]=Array(1145);}

function js( x, n)
{
    var ans=0;
    var x1=1;
    for(var i=0;i<=n;i++)
    {
        ans+=(x1*a[n][i]);
        x1*=x;
        //cout<<ans<<'\n';
    }
    //cout<<"over\n";
    return ans;
}

function Find1( l, r, n)
{
    var mid=(l+r)/2;
    if(r-l<eps)return mid;
    else if(js(mid,n)>0)return Find1(mid,r,n);
    else return Find1(l,mid,n);
}

function Find2( l, r, n)
{console.log(l+' '+r);
    var mid=(l+r)/2;
    if(r-l<eps){console.log("back");return mid;}
    else if(js(mid,n)<0)return Find2(mid,r,n);
    else return Find2(l,mid,n);
}

function Sort( n, l, r)
{
    for (var i = l; i <= r; i++)
    {
        for (var j = i; j>=l+1; j--)
            if ( ans[n][j] < ans[n][j-1] ){
                var t = ans[n][j-1];
                ans[n][j-1] = ans[n][j];
                ans[n][j] = t;
            }
    }
}

function fabs(n)
{
    if(n<0)return -n;
    else return n;
}

function getFunc( n)
{
    if(n==1)
    {
        ans[1][0]=(-1*a[1][0]/a[1][1]);ansnum[1]=1;
        return ;
    }
    for(var i=1;i<=n;i++)a[n-1][i-1]=(a[n][i]*i);
    getFunc(n-1);
    for(var i=0;i<ansnum[n-1];i++)console.log(ans[n-1][i]);
    var num=ansnum[n-1];
    var tot=Number(-1);
    for(var i=1;i<num;i++)
    {
        if(js(ans[n-1][i-1],n)==0){ans[n][++tot]=(ans[n-1][i-1]);continue;}
        if(js(ans[n-1][i],n)==0)continue;
        if(js(ans[n-1][i-1],n)/js(ans[n-1][i],n)>0)continue;
        if(js(ans[n-1][i-1],n)>js(ans[n-1][i],n))ans[n][++tot]=(Find1(ans[n-1][i-1],ans[n-1][i],n));
        if(js(ans[n-1][i-1],n)<js(ans[n-1][i],n))ans[n][++tot]=(Find2(ans[n-1][i-1],ans[n-1][i],n));
    }
    var frt=ans[n-1][0],lst=ans[n-1][num-1];
    if(num==0)frt=2,lst=-2;
    //cout<<frt<<' '<<js(frt,n)<<' '<<(js(frt-1,n)-js(frt,n))/js(frt,n)<<'\n';
    if(js(frt,n)&&(js(frt-1,n)-js(frt,n))/js(frt,n)<0)
    {//cout<<"first\n";
        var add=Number(1);
        while(js(frt-add,n)/js(frt,n)>0)add*=2;
        if(js(frt-add,n)>js(frt,n))ans[n][++tot]=(Find1(frt-add,frt,n));
        else ans[n][++tot]=(Find2(frt-add,frt,n));
    }
    if(js(lst,n)&&(js(lst+1,n)-js(lst,n))/js(lst,n)<0)
    {//cout<<"last\n";
        var add=Number(1);
        while(js(lst+add,n)/js(lst,n)>0)add*=2;
        if(js(lst+add,n)>js(lst,n))ans[n][++tot]=(Find2(lst,lst+add,n));
        else ans[n][++tot]=(Find1(lst,lst+add,n));
    }
    Sort(n,0,tot);
    ansnum[n]=tot+1;
}

function init()
{
    if(Number(document.getElementById('n'+n).value)==0)
    {
        document.getElementById('ans').innerHTML="最高次项系数不能为0。";
        return;
    }
    for(var i=1;i<=n;i++)a[n][i]=Number(document.getElementById('n'+i).value);
    a[n][0]=Number(document.getElementById('c').value);
   // for(var i=0;i<=n;i++)console.log(a[n][i]);
    getFunc(n);
    s="";
    console.log(ansnum[n]);
    for(var i=0;i<ansnum[n];i++)ans[n][i]=Math.floor(ans[n][i]*10000000000+0.5)/10000000000;
    var tot=0;tot++;
    if(ansnum[n]>0)
    {
        s+="x<sub>1</sub>="+ans[n][0]+"<br>";
        for(var i=1;i<ansnum[n];i++)
        {
            if(ans[n][i]==ans[n][i-1])continue;
            tot++;
            s+="x<sub>"+tot+"</sub>="+ans[n][i]+"<br>";
        }
    }
    else s="无实数解。";
    document.getElementById('ans').innerHTML=s;
}

function newIn()
{
    s="";
    for(var i=n;i>0;i--)s+="<input id='n"+i+"'/>x<sup>"+i+"</sup>+";
    s+="<input id='c'/>=0&nbsp;<br>";
    document.getElementById('?').innerHTML=s;
}

function add(){if(n<1000)n++;newIn();}
function sub(){if(n>1)n--;newIn();}
