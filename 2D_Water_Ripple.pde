
int rows;
int cols;
float[][] current;
float[][] previous;

float damp = 1;

void setup(){
  size(400, 400);
  cols = width;
  rows = height;
  current = new float[rows][cols];
  previous = new float[rows][cols];
}

void mouseDragged() {
  previous[mouseX][mouseY] = 500;
}


void draw(){
    background(0);
    
    loadPixels();
    for(int i = 1; i < cols - 1; i++){
      for(int j = 1; j < rows - 1; j++){
        current[i][j] = (previous[i-1][j] +
                      previous[i+1][j] + 
                      previous[i][j-1] + 
                      previous[i][j+1])/2 - current[i][j];
        
        current[i][j] = current[i][j] * damp;
        int index = i + j * cols;
        pixels[index] = color(current[i][j]);
      }
    }
    
    updatePixels();
      
    float[][] temp = previous;
    previous = current;
    current = temp;
}
