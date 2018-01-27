     (function()
{
alert("WELCOME!");
})();
			var ul=document.getElementById("list");
			var count=ul.childElementCount;
var inBox=document.getElementById("myTxt");
inBox.addEventListener("keydown",ad);



function ad()
{
	if(event.keyCode==13)
	{
		if(inBox.value.length<1 || inBox.value=="")
		{
			alert("Enter correct text");
		}
		else
		{
			// insertItem(inBox.value);
			var item=myTxt.value;
			myTxt.value="";
			var ul=document.getElementById("list");
		//	var count=ul.childElementCount;
			console.log(ul);
			var hr=document.getElementById("hr");
			
			var li=document.createElement("li");
			var check=document.createElement("input");
			check.type="checkbox";
			check.id="chk"+count;
			
			var label=document.createElement("label");
			label.appendChild(document.createTextNode(item));
			
			var a=document.createElement("a");
			a.innerHTML="delete";
			a.href="#";
			a.className = "del";
			a.style="float:right";
			a.id = "del"+count;
				li.appendChild(check);
				li.appendChild(label);
				li.appendChild(a);
				ul.appendChild(li);
				
		}
	}
}


		var div=document.getElementById("itemcontainer");
		div.addEventListener("click", Myfun,false);

function Myfun()
{
	if(event.target.type=="checkbox")
	{
		var checkid=event.target.id;
		checkFun(checkid);
	}
	else if(event.target.classList.contains("del"))
    {
	var deleteId = event.target.id;
	deleteItem(deleteId);
    }
}

 function deleteItem(id)
{
	var dId=document.getElementById(id);
	dId.parentNode.parentNode.removeChild(dId.parentNode);
} 


function checkFun(id)
{
id=document.getElementById(id);
  if(id.checked)
   {
	label=id.nextSibling;
	label.classList.add("addLabel");
   }
  else
   {
	label.classList.remove("addLabel");
   }
}




/*vaishakshettykudlu*/