// Find the lcm of a range of numbers
var a= new Array();
var b= new Array();
var c= new Array();
var n=20;
var i, j, ca=0, cb=0, cc=0, len=0, n, fin=1;

// Generating prime numbers
for(i=2;i<20;i++)
{
	for(j=2;j<=i;j++)
	{
		if(i%j==0) break;
	}
	if(j==i)
	{
		a[ca]=j;
		ca++;
	}
}

for(i=0;i<20;i++)
{
	if(a[i]<=20) len++;
}

for(i=0;i<len;i++)
{
	b[i]=0;
	c[i]=0;
}

ca=0;
for(i=2;i<=20;i++)
{
	n=i;
	while(n>1)
	{
		if(n%a[ca]==0)
		{
			c[ca]++;
			n=n/a[ca];
		}
		else
		{
			ca++;
		}
	}
	for(j=0;j<len;j++)
	{
		if(c[j]>b[j])
			b[j]=c[j];
	}
	for(j=0;j<len;j++)
		c[j]=0;
	ca=0;
}

for(i=0;i<len;i++)
{
	fin=fin*Math.pow(a[i],b[i]);
}

console.log(fin);