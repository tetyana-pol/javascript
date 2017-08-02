function Square(nam, koord1, koord2,weih,heig, color){
	this.nam=nam;
	this.koord1=koord1;
	this.koord2=koord2;
	this.weih=weih;
	this.heig=heig;
	this.color=color;
	this.move=move;
	this.show=show;
	
}

 
 function show(){
	 var main=document.getElementById("main");
	 var div=document.createElement("div");
	 div.style="position:absolute;"+"left:"+this.koord1+"px;"+"top:"+this.koord2+"px;"
	 +"width:"+this.weih+"px;"+"height:"+this.heig+"px;"
	    +"background-color:"+this.color+";border:1px solid;";
	 main.appendChild(div);
 }
 function move(addx,addy){
		this.koord1+=addx;
		this.koord2+=addy;
		this.show();
	}