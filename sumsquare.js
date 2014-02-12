var n=100;
var sq1, sq2=0, i, sum=0;
for(i=1;i<=n;i++)
{
	sum=sum+i;
}
sq1= sum*sum;

for(i=1;i<=n;i++)
{
	j=i*i;
	sq2=sq2+j;
}

console.log(sq1-sq2);