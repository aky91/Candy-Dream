
Star[] stars = new Star[1000];
float speed;
int bgcolor;

void setup(){
  size(800, 800);
  
  for(int i = 0; i < stars.length; i++)
    stars[i] = new Star();
    
  speed = 0;
}

void draw(){
  background(0);
  //speed = map(mouseX, 0, width, 0, 50);
  
  if(speed <= 100)
    speed += 0.1;
  
  //change bg color according to speed
  bgcolor = (int)map(speed, 0, 100, 0, 255);

  background(bgcolor);
  
  translate(width/2, height/2);
  
  for(int i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}
