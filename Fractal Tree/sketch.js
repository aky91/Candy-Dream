var angle = 0;
var slider;
var x = 0;

function setup() {
    
    //making canvas of 600x600
    createCanvas(600, 600);
    
    //making a slider
    slider = createSlider(0, TWO_PI, PI/4, 0.001);
}

function draw() {
    
    //coloring background 
    background(0, 153, 153);
    
    //getting angle of each branch 
    angle = slider.value();
    
    //setting andincrementing slider's value for the next time
    slider.value(x);
    x += 0.01;
    
    //translate to root of the tree(bottom of centre of canvas)
    translate(300,height);
    
    //coloring strokes
    stroke(204, 255, 255);
    
    //calling recursive fractal tree
    branch(175);
}

function branch(len){
    
    //make a line
    line(0, 0, 0,-len);
    
    //translate to the line's end
    translate(0, -len);
    
    //branch only if length is > 4 pixel 
    if(len >4){
        
        //right branch
        push();             //save current coordinates of parent's end
        rotate(angle);      //rotate coordinate system by angle
        branch(len * 0.67); //branch right
        pop();              //go back to parent's end
        
        //left branch
        push();             //save current coordinates of parent's end
        rotate(-angle);     //rotate coordinate system by angle
        branch(len * 0.67); //branch left
        pop();              //go back to parent's end
    }
}