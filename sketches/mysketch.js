
var sketch1 = function(p){
	p.setup = function(){
		p.createCanvas(400,400);
	};
	var c = 0;
	var fw = 120 , fh = 360 , fx = 60 , fy= 20; 
	var gw = 20; 
	p.draw  = function(){
		p.background(255);
		p.setGrill();
		p.setFigure();
	};

	function setGrill(){
		fill(c);
		noStroke();
		for ( let i = 20 ; i < 380 ; i += 40){
			rect(20,i,360,gw); }
	};

	p.mouseClicked = function(){
		if (c == 0) c = 255; 
		else c = 0;
	};

	p.setFigure = function(){
		fill(226, 164, 245);
		noStroke();
		rect(fx,fy,fw,fh);
		rect(fx + 160,fy,fw,fh);
		if ( c == 0)
		for ( let i = fy ; i < fy + fh ; i += 40){
			fill(0);
			rect(fx,i,fw,20);
			fill(255);
			rect(fx+160,i+20,fw,20); 
		};
	};
};

p5Man.add(new p5(sketch, 'mysketch_id'));