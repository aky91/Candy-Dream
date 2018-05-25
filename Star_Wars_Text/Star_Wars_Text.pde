String txt;

float y = 0;

void setup(){
  
  //size(800, 600, P3D);
  fullScreen(P3D);
  String[] lines = loadStrings("space.txt");
  txt = join(lines, "\n");
  y = height/2;
}

void draw(){
  
  background(0);
  
  translate(width/2, height/2);
  
  fill(238, 213, 75);
  textSize(width*0.05);
  textAlign(CENTER);
  rotateX(PI/4);
  float w = -width*0.8;
  text(txt, -w/2, y, w, height*10);
  y -= 1;
}
