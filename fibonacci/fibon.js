function fibSeq(NumberOfElements){
	var pd;
	var fibo=[0,1];
	if (NumberOfElements<3){
		return fibo;
	}
			for (var i=2; i<NumberOfElements; i++){
		pd=fibo[i-1]+fibo[i-2];
		fibo.push(pd);	
	}
	return fibo;
}
 function displ(fibro){
	   var divv=getElementById("main");
for (i=0;i<fibro.length;i++){
    spa=document.createElement("span");	
		   spa.innerHTML=fibro[i];
		   divv.appendChild(spa);
	   }
	      }
function vTask(task,NumberOfElements){
	var fibro;
	var fibs=fibSeq(NumberOfElements);
	switch task
	case 1
	{
	for (var i=0;i<fibs.length;i++){
	(if ((parseInt(fibs[i].toString().charAt(0)))%2)===0){
		fibro.pash(fibs[i]);	
		}
		displ(fibro);
	}}
}		  