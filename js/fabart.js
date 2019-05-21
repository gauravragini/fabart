function f1(e)
{
	 var x = document.getElementsByClassName('p');
	  var y= document.getElementsByClassName('s');
	   var z = document.getElementsByClassName('c')
	    var w = document.getElementsByClassName('ct');

     if(e.id=='A')
     {
     	for (var i=0; i<y.length; i+=1)
		 	 y[i].style.display = 'inline-block';
       for (var i=0; i<w.length; i+=1)
		 	 w[i].style.display = 'none';
		for (var i=0; i<x.length; i+=1)
		 	 x[i].style.display = 'none';
		for (var i=0; i<z.length; i+=1)
		  	z[i].style.display = 'none';
         
     }
      if(e.id=='B')
     {

     	for (var i=0; i<x.length; i+=1)
		 	 x[i].style.display = 'inline-block';
       for (var i=0; i<y.length; i+=1)
		 	 y[i].style.display = 'none';
		for (var i=0; i<z.length; i+=1)
		 	 z[i].style.display = 'none';
		for (var i=0; i<w.length; i+=1)
		  	w[i].style.display = 'none';
     }
      if(e.id=='C')
     {

     	for (var i=0; i<z.length; i+=1)
		 	 z[i].style.display = 'inline-block';
       for (var i=0; i<w.length; i+=1)
		 	 w[i].style.display = 'none';
		for (var i=0; i<y.length; i+=1)
		 	 y[i].style.display = 'none';
		for (var i=0; i<x.length; i+=1)
		  	x[i].style.display = 'none';
     }
      if(e.id=='D')
     {

     	for (var i=0; i<w.length; i+=1)
		 	 w[i].style.display = 'inline-block';
       for (var i=0; i<x.length; i+=1)
		 	 x[i].style.display = 'none';
		for (var i=0; i<y.length; i+=1)
		 	 y[i].style.display = 'none';
		for (var i=0; i<z.length; i+=1)
		  	z[i].style.display = 'none';
     }	

       if(e.id=='E')
     {

     	for (var i=0; i<w.length; i+=1)
		 	 w[i].style.display = 'inline-block';
       for (var i=0; i<x.length; i+=1)
		 	 x[i].style.display = 'inline-block';
		for (var i=0; i<y.length; i+=1)
		 	 y[i].style.display = 'inline-block';
		for (var i=0; i<z.length; i+=1)
		  	z[i].style.display = 'inline-block';
     }	
}
