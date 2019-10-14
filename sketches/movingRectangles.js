var sketch = function(p){
	p.setup = function(){
		p.createCanvas(400,400);
	};
	var c = false;
	var fw = 40 , fh = 60	 , fx = 40 , fy= 20; 
	var gw = 10; 
	var v = 3, dir = 1;
	p.setGrill = function(){
		p.fill(0);
		p.noStroke();
		for ( let i = 20 ; i < 380 ; i += 20){
			p.rect(20,i,360,gw); }
	};  

	p.mouseClicked = function(){
		c = !c;
	};

	p.setFigure = function(){
		
		if (c)
			fw = 80;
		else
			fw = 40;
		p.fill(0, 0, 255);
		p.noStroke();	
		p.rect(fx,fy,fw,fh);
		p.rect(fx + 160,fy,fw,fh);
		p.fill(255, 255 , 0);
		p.noStroke();
		p.rect(fx + 80,fy,fw,fh);
		p.rect(fx + 240,fy,fw,fh);
	};

	p.setVel = function() {
		fy += dir*v;
		if (fy >= 380-fh || fy <= 20)
			dir *= -1;
 	}
	p.draw  = function(){
		p.background(255);
		p.setGrill();
		p.setVel();
		p.setFigure();
		
	};
};

p5Man.add(new p5(sketch, 'moving_rectangles_id'));