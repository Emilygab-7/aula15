//função responsável para rodar um código
function setup() {
  createCanvas(400, 400);//responsável para criar a tela
background("red");//cor de fundo
}

//responsável por desenhar na tela
function draw() {
  stroke("E3EE22");
   //altera cor da borda do desenho
  fill("yellow");// cor preenchimento do desenho
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}