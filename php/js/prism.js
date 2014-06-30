//-------------
//-- variables géné
//-------------


//-------------
//-- variables intro
//-------------

var intro_setInterval;

//-- pour accélérometre--------------
var tiltLR, tiltFB, dir, motUD;
var pOrientation;

//-------------
//-- au chargement
//-------------
window.addEventListener("DOMContentLoaded", function() {
													 	

	//------------------------
	//---- accelerometre (script standard pour plusieurs tablettes) ----//
	//------------------------
	//-- orientation ------------------
	if (window.DeviceOrientationEvent) {
		pOrientation=true;
		
		// ***** l'iPad correspond à ce cas-là **** ----------
		
	  	// Listen for the deviceorientation event and handle DeviceOrientationEvent object
	  	window.addEventListener('deviceorientation', function(eventData) {
			// gamma is the left-to-right tilt in degrees, where right is positive
			tiltLR = eventData.gamma;
		
			// beta is the front-to-back tilt in degrees, where front is positive
			tiltFB = eventData.beta;
		
			// alpha is the compass direction the device is facing in degrees
			dir = eventData.alpha
		
			// deviceorientation does not provide this data
			motUD = null;
		
			// call our orientation event handler
			
			deviceOrientationHandler(tiltLR, tiltFB, dir, motUD);
	  	}, false);

	} else if (window.OrientationEvent) {
		pOrientation=true;
		
	  	// Listen for the MozOrientation event and handle OrientationData object
	 	 window.addEventListener('MozOrientation', function(eventData) {
			// x is the left-to-right tilt from -1 to +1, so we need to convert to degrees
			tiltLR = eventData.x * 90;
		
			// y is the front-to-back tilt from -1 to +1, so we need to convert to degrees
			// We also need to invert the value so tilting the device towards us (forward) 
			// results in a positive value. 
			tiltFB = eventData.y * -90;
		
			// MozOrientation does not provide this data
			dir = null;
		
			// z is the vertical acceleration of the device
			motUD = eventData.z;
			
			// call our orientation event handler
			deviceOrientationHandler(tiltLR, tiltFB, dir, motUD);
	  	}, false);

	} else {
 		 pOrientation=false;
	}	
	

	
});


//--------------------
//-- gestion de l'opacité du calque couleur
//--------------------

function deviceOrientationHandler(vtiltLR, vtiltFB, vdir, vmotUD){
	var vDist, vOpacity;
	var expires = new Date();
	
	// calcul de la droite qui défini l'image en fonction de l'orientation
	
	
	
		var va=(1.0-8.0)/(-45-45);
		var vb=1.0 - va*(-45);
		
		var vImage = va*vtiltLR + vb;
		
		vImage = Math.floor(vImage);
		// controle
		if (vImage<1){
			vImage=1;
		}else{
		}
		if (vImage>8){
			vImage=8;
		}else{
		}	
	/*
	if (EtapeDecouverte=="cherche"){
		vDist = Math.sqrt(((ObjectifLR-vtiltLR)*(ObjectifLR-vtiltLR))+((ObjectifFB-vtiltFB)*(ObjectifFB-vtiltFB)));
		if (vDist>60){
			vDist=60;
		}else{
		}
		
		
		
		vOpacity = (va*vDist) + vb;
		if (vOpacity==0){
			vOpacity = 0.0000001;
		}else{
		}
		
		if (vOpacity>=0.8){
			EtapeDecouverte="trouve";
		}else{
		}
	}else{
	}
	
	if (EtapeDecouverte=="debut"){
		
		var difference = expires.getTime() - topChrono;
		if(difference > 3000) {
			 ObjectifLR=45*Math.random();
			 ObjectifFB=45*Math.random();
			 
			 if (vtiltLR>0){
				 ObjectifLR=-ObjectifLR;
			 }else{
			 }
			 if (Math.random()<0.5){
				 //ObjectifFB=-ObjectifFB;
			 }else{
			 }
			 
			 EtapeDecouverte="cherche";
			 $("#imageFixeColor").css("opacity", 0.0001);
			 //$("#imageFixeColor").css("visibility", "visible");
		} else {
		}
		
		if(difference > 1000) {
			if (opaciteMemo>0.1){
				opaciteMemo=opaciteMemo-0.05;
			}else{
				opaciteMemo= 0.0001;
			}
		} else {
		}
		vOpacity=opaciteMemo;
	}else{
	}
	
	//var vVal = Math.abs(vtiltFB);
	//var va = 1/90;
	//var vOpacity = va*vVal*2;
	*/
	// rendre tout invisible
	for(i=1;i<=8;i++){
		$("#img"+i).css('visibility','hidden');
		$("#img"+i).css('display','none');
	}
		$("#img"+vImage).css('visibility','visible');
		$("#img"+vImage).css('display','block');
	
	
	$("#controle").html(vtiltLR+"<BR />"+vImage);

}
