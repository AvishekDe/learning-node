var g = 600851475143;
var i;
var flag=0, pf=0;
for(i=2;i<=(g/2);i++)
{
	if(g%i==0)
	{
		for(j=2;j<=(i/2);j++)
		{
			if(i%j==0)
			{
				flag=1;
				break;
			}
		}

		if(flag==0)
		{
			pf=i;
			flag=0;
		}
	}
}
console.log(pf);
