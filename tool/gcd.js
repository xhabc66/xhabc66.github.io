function gcd(a,b)
{
    if(b==0)return a;
    return gcd(b,a%b);
}

function lcm(a,b)
{
    return a/gcd(a,b)*b;
}

function init()
{
    a=parseInt(document.getElementById('first').value);
    b=parseInt(document.getElementById('second').value);
    document.getElementById('gcd').innerHTML=gcd(a,b);
    document.getElementById('lcm').innerHTML=lcm(a,b);
}
