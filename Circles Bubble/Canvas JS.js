// JavaScript Document
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

/*
c.fillStyle='rgba(255,0,0,0.1)';
c.fillRect(100,100,100,100);
c.fillStyle='rgba(0,255,0,0.1)';
c.fillRect(200,200,50,50);
c.fillStyle='rgba(0,0,255,0.1)';
c.fillRect(250,250,25,25)
console.log(canvas);

//line
c.beginPath();
c.moveTo(0,0);
c.lineTo(275,275);
c.strokeStyle="CornFlowerBlue";
c.stroke();

//circle
c.beginPath();
c.arc(window.innerWidth/2,window.innerHeight/2,window.innerHeight*0.1,0,Math.PI*2,false);
c.strokeStyle='NavyBlue';
c.stroke();

for(var i=0;i<5;i++){
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	c.beginPath();
	c.arc(x,window.innerHeight/2,30,0,Math.PI*2,false);
	c.strokeStyle="blue";
	c.stroke();
	
	}
*/	
var mouse={
	x:undefined,
	y:undefined
	}
	
var colorArray=[
	'#2C3E50',
	'#E74C3C',
	'#ECF0F1',
	'#3498DB',
	'#2980B9',
];	

window.addEventListener('mousemove',function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	console.log(mouse);
	
	});
	
window.addEventListener('resize',function(){
	canvas.height=window.innerHeight;
	canvas.width=window.innerWidth;
	
	})	

function Circle(x,y,vx,vy,r){
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.r=r;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw=function(){
		c.beginPath();
		c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		c.fillStyle=this.color;
		c.fill();
		}
		
	this.update=function(){
			if(this.x+this.r>innerWidth){
			this.vx=-this.vx;
			}
			if(this.x-this.r<0){
			this.vx=-this.vx;
			}
			if(this.y+this.r>innerHeight ||this.y-this.r<0){
			this.vy=-this.vy;
			}	
		
			this.x+=this.vx;
			this.y+=this.vy;
			
			if(mouse.x-this.x<90&&mouse.x-this.x>-90&&mouse.y-this.y<90&&mouse.y-this.y>-90){
				if(this.r<60){
					this.r+=2;
					}
				}else if(this.r>20){
					this.r-=1;
					}
		
			
			this.draw();
		}
	}


var circleArray=[];
for(var i=0;i<500;i++){
	var r=Math.random()*10+10;
	var x=Math.random()*(innerWidth-2*r)+r;
	var y=Math.random()*(innerHeight-2*r)+r;
	var vy=(Math.random()-0.5)*3;
	var vx=(Math.random()-0.5)*3;
	
	circleArray.push(new Circle(x,y,vx,vy,r));
	
	}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i=0;i<circleArray.length;i++){
		circleArray[i].update();
	}
}

animate();