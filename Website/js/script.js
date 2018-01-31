var count=0;
function create()
{
	
	count++
	if(count<=1){
	var image1=document.createElement("IMG");
	image1.setAttribute("src","webpage/2nd.png");
	image1.style.position = "absolute";
	image1.style.top = "23%";
	image1.style.left = "16%";
	var x=document.createElement('A');
	x.setAttribute("href","webdev.html");
	x.appendChild(image1);
	//image1.setAttribute("left","100");
	image1.setAttribute("class","Dimg");
	document.body.appendChild(x);
	
	
	var image2=document.createElement("IMG");
	image2.setAttribute("src","webpage/3rdbutton.png");
	image2.style.position = "absolute";
	image2.style.right="16%";
	image2.style.top = "28%"
	var y=document.createElement('A');
	y.setAttribute("href","android.html");
	y.appendChild(image2);
	image2.setAttribute("class","dimg1");
	//image2.setAttribute("left","40");
	document.body.appendChild(y);
	
	var image3=document.createElement("IMG");
	image3.setAttribute("src","webpage/4thbutton.png");
	image3.style.position = "absolute";
	image3.style.left="19%";
	image3.style.top = "52%"
	var z=document.createElement('A');
	z.setAttribute("href","csharp.html");
	z.appendChild(image3);
	image3.setAttribute("class","dimg2");
	//image2.setAttribute("left","40");
	document.body.appendChild(z);
	
	var image4=document.createElement("IMG");
	image4.setAttribute("src","webpage/5th.png");
	image4.style.position = "absolute";
	image4.style.right="20%";
	image4.style.top = "51%"
	var w=document.createElement('A');
	w.setAttribute("href","networking.html");
	w.appendChild(image4);
	image4.setAttribute("class","dimg3");
	//image2.setAttribute("left","40");
	document.body.appendChild(w);


	}
}
