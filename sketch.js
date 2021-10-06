var colors="646e78-8d98a7-dcccbb-eab464-a7754d".split("-").map(a=>"#"+a)

function planet(x,y) {
  
  push()
  translate(x,y)
  for(var i=0;i<20;i++){
    let j=random(colors)
    fill(j)
    
    drawingContext.shadowColor=color(j);
    drawingContext.shadowBlur=30;
    
    let xx=noise(i,frameCount)*100
    let dd=noise(i,frameCount,100)*3*PI
    let rr=noise(i,100,frameCount/0.5)*10
    

    ellipse(xx*cos(dd),xx*sin(dd),rr)
    
  }
  pop()
  
}

function draw(){
  createCanvas(windowWidth,windowHeight);
  background(0)
  blendMode(SCREEN)
  planet(width/2,height/2,20)
}
