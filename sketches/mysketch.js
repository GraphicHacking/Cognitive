 function setup (){
	var myCanvas = createCanvas(400,400);
	myCanvas.parent('mysketch_id');
}
let c = 0;
let fw = 120 , fh = 360 , fx = 60 , fy= 20; 
let gw = 20; 
function draw(){
	background(255);
	setGrill();
	setFigure();
}

function setGrill(){
	fill(c);
	noStroke();
	for ( let i = 20 ; i < 380 ; i += 40){
		rect(20,i,360,gw); }
}

function mouseClicked(){
	if ( c == 0) c = 255; 
	else c = 0;
}

function setFigure(){
	fill(226, 164, 245);
	noStroke();
	rect(fx,fy,fw,fh);
	rect(fx + 160,fy,fw,fh);
	fill(c);
	if ( c == 0)
	for ( let i = fy ; i < fy + fh ; i += 40){
		fill(0);
		rect(fx,i,fw,20);
		fill(255);
		rect(fx+160,i+20,fw,20); 
	}
}