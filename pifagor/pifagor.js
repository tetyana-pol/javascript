
   var mon=document.getElementById("main");
   for (var i=1; i<=9;i++){
var	row=document.createElement("div");
	row.setAttribute("class","row");
	
	   for (var j=1; j<=9;j++){
		   var prod=i*j;
	   var cell=document.createElement("div");
       cell.setAttribute("class","cell");
       cell.innerHTML=prod;
       row.appendChild(cell);	   
	   }
	 mon.appendChild(row);  
	}
