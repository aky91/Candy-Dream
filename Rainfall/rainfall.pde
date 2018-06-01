Rain[] arr;
int num = 1000;

void setup(){
    size(1920, 1000);
    
    arr = new Rain[num];
    
    for(int i = 0; i < num; i++)
      arr[i] = new Rain();

      
}

void draw(){
  
  background(0);
    
  for(int i = 0; i < num; i++){
    
    Rain drop = arr[i];
    
     stroke(drop.clr);
      
    line(drop.x, drop.y, drop.x-2, drop.y - 10);
    ellipse(drop.x, drop.y, 2, 2);
    fill(255);
    //rect(drop.x, drop.y, drop.w, 10);
    drop.update();
  }
  
}
