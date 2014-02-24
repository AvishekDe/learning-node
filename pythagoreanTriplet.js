var a, b, c;
var i, j, k;
var flag=0;
for (i=1; i<=500; i++)
{
	for(j=i+1;j<=500;j++)
	{
		for(k=j+1;k<=500;k++)
		{
			if((i*i)+(j*j)==(k*k))
			{
				//console.log((i*i)+" "+(j*j)+" "+(k*k));
				if(i+j+k==1000)
				{
					console.log(i+" "+j+" "+k);
					console.log(i*j*k);
					
				}
			}
		}
	}
}