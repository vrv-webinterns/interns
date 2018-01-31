function call()
{
	//var text="???";
	display('anim','???');
}


function display(id,val)
{
	document.getElementById(id).innerHTML=val;
}
window.onload=call;
setInterval(call,1000);
