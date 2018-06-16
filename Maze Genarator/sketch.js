// Akash Yadav
// @Hudson Lane, Delhi
// 15 June 2018

//https://p5js.org
//Maze Generator : Recursive backtracker

let cols, rows;
let w = 40;
let grid = [];
let stack = [];

let current;

function setup() {
    
    frameRate(5);
    
	createCanvas(400, 400);
    
    cols = floor(width/w);
    rows = floor(height/w); 
    
    for(let y = 0; y < rows; y++){
        for(let x = 0; x < cols; x++){
            let cell = new Cell(x, y);
            grid.push(cell);
        }
    } 
    
    current = grid[0];
}

function draw() {
    
    background(125);
    stroke(255);
    fill(175);
    
    for(let i = 0; i < grid.length; i++)
        grid[i].show();
    
    current.visited = true;
    current.highlight();
    let next = current.checkNeighbours();
    
    if(next){
        next.visited = true;
        
        stack.push(current);
        
        removeWalls(current, next);
        
        current = next;
    
    } else if (stack.length > 0){
        
         current = stack.pop();
    }
}

function index(i, j){
    
    if(i < 0 || j < 0 || i > cols-1 || j > rows - 1 )
        return -1;
    
    return i + j * cols;
}

function Cell(i, j){
    
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
    
    this.highlight = function(){
        
        let x = this.i * w;
        let y = this.j * w;
        
        noStroke();
        fill(255,0,0, 150);
        rect(x, y, w, w);
    }
    
    this.show = function() {
        let x = this.i * w;
        let y = this.j * w;
        
        stroke(255);
        
        if(this.walls[0])
            line(x  ,   y , x+w, y  );
        
        if(this.walls[1])
            line(x+w,   y , x+w, y+w);
        
        if(this.walls[2])
            line(x+w, y+w ,   x, y+w);
        
        if(this.walls[3])
            line(x  , y+w ,   x, y  );
        
        if(this.visited){
            noStroke();
            fill(0, 206, 209,100);
            rect(x, y, w, w);
        }
    }
    
    this.checkNeighbours = function(){
        
        let neighbours = [];
        
        let top    = grid[index(i   , j-1)];
        let right  = grid[index(i+1 , j  )];
        let bottom = grid[index(i   , j+1)];
        let left   = grid[index(i-1 , j  )];
        
        if(top && !top.visited)
            neighbours.push(top);
        
        if(right && !right.visited)
            neighbours.push(right);
        
        if(bottom && !bottom.visited)
            neighbours.push(bottom);
        
        if(left && !left.visited)
            neighbours.push(left);
        
        if(neighbours.length > 0){
            
            let r = floor(random(0, neighbours.length));
            
            return neighbours[r];
        
        } else 
            return undefined;
    }
}


function removeWalls(a, b){
    
    let x = a.i - b.i;
    
    if(x == 1){ // b is on left of a
        
        a.walls[3] = false;
        b.walls[1] = false;

    } else if(x == -1){ // b is on right of a
        
        a.walls[1] = false;
        b.walls[3] = false;
    }
    
    let y = a.j - b.j;
    
    if(y == 1){ // b is on top of a
        a.walls[0] = false;
        b.walls[2] = false;

    } else if(y == -1){ // b is on bottom of a
        
        a.walls[2] = false;
        b.walls[0] = false;
    }
}



