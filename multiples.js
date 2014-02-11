var sum, i;
sum = 0;
for(i=1;i<=1000;i++)
{
	if(i%3 == 0)
		sum = sum+i;
	if(i%5 == 0)
		sum = sum+i;
	if(i%15 == 0)
		sum = sum-i;
}

console.log(sum);
