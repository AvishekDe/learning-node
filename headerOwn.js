var s = require('net').Socket();
s.connect(80, process.argv[2]);
s.write('GET / HTTP/1.1\r\nHost: '+process.argv[2]+'\r\n\r\n');

s.on('data', function(d){
	var str= d.toString();
	var a, i=0;
	
	while(true)
	{
		a=str.charAt(i);
		if(str.substring(i,i+2)=="<!")
			break;
		else
			process.stdout.write(a);
		i++;
	}

	//console.log(str);
	
});

s.end();
