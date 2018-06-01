class Rain{
  
  int x;
  int y;
  int speed;
  int w;
  color clr;
  
  Rain(){
    x = (int)random(width);
    y = (int)random(height);
    speed = (int)random(1,10);
    
    w = speed/10;
    clr = (int)color(random(255), random(255), random(255));
  }
  
  void update(){
  
    y = y + speed;
    x++;
    
   if(y >= height){
      ellipse(x, y, 12, 12);
      y = 0;
   }
      
   if(x >= width)
     x = 0;
  }
}
