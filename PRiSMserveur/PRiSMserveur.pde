import processing.serial.*;

import processing.video.*;

// pour serveur
import processing.net.*;



Capture cam1;
Capture cam2;
Capture cam3;
Capture cam4;
Capture cam5;
Capture cam6;
Capture cam7;
Capture cam8;

int camNb = 8;

int camFrameWidth = 320;
int camFrameHeight = 240;
int laValue;

PImage[] imgToSave = new PImage[camNb];


Server myServer;

Serial myPort; // The serial port:
int inByte = -1;

void setup() {
  
  myPort = new Serial(this, Serial.list()[2], 9600);
  laValue= 0; // 
  
  size(1280, 480); // , P2D

  String[] cameras = Capture.list();

  if (cameras.length == 0) {
    println("There are no cameras available for capture.");
    exit();
  } 
  else {
    println("Available cameras:");
    for (int i = 0; i < cameras.length; i++) {
    println(cameras[i]);
      
    }

    // The camera can be initialized directly using an element
    // from the array returned by list():
    cam1 = new Capture(this, cameras[6]);
    cam1.start();     

    cam2 = new Capture(this, cameras[6]);
    cam2.start();     

    cam3 = new Capture(this, cameras[6]);
    cam3.start();    

    cam4 = new Capture(this, cameras[6]);
    cam4.start(); 

    cam5 = new Capture(this, cameras[6]);
    cam5.start(); 

    cam6 = new Capture(this, cameras[6]);
    cam6.start(); 

    cam7 = new Capture(this, cameras[6]);
    cam7.start(); 

    cam8 = new Capture(this, cameras[6]);
    cam8.start();  

    for (int i=0; i<camNb; i++) {
      imgToSave[i] = createImage(camFrameWidth, camFrameHeight, RGB);
    }
   
    
  }  
  
  // socket serveur
  myServer = new Server(this, 6100); 

}

void draw() {
   if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[0] = cam1.get();
  image(imgToSave[0], 0, 0, 320, 240);

  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[1] = cam1.get();
  image(imgToSave[1], 320, 0, 320, 240);
  
  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[2] = cam1.get();
  image(imgToSave[2], 640, 0, 320, 240);
  
  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[3] = cam1.get();  
  image(imgToSave[3], 960, 0, 320, 240);
  
  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[4] = cam1.get();
  image(imgToSave[4], 0, 240, 320, 240);
  
  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[5] = cam1.get();
  image(imgToSave[5], 320, 240, 320, 240);

  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[6] = cam1.get();
  image(imgToSave[6], 640, 240, 320, 240);

  if (cam1.available() == true) {
    cam1.read();
  }
  imgToSave[7] = cam1.get();  
  image(imgToSave[7], 960, 240, 320, 240);


  /**/
  // The following does the same, and is faster when just drawing the image
  // without any additional resizing, transformations, or tint.
  //set(0, 0, cam);
    
    
    while (myPort.available () > 0) {
    inByte = myPort.read();
     //println(inByte);
  }
  
  // -- controle
  if (laValue==inByte){
    // rien car meme valeur
  }else{
    if (inByte==49){
      // on lance la captation
      lanceCaptation();
    }else{
      // c'est 0 donc rien
    }
    laValue = inByte;
  }
  
}

void lanceCaptation() {

  
  String date = +day()+"_"+hour()+"_"+minute()+"_"+second();
  for (int i=0; i<camNb; i++) {
    imgToSave[i].save("PRiSM-"+date+"/img"+(i+1)+".jpg");
  }
  
  String dossier = +day()+"_"+hour()+"_"+minute()+"_"+second();
  //String date = "16_14_32_35";
  myServer.write(dossier);
  println("envoi");
}

