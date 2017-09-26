//ES6 CODE, which will be converted to ES5 code by Babel, and will be output into temp/Script/app-es6.js

let speciesName = document.querySelector('.panel-name');
let outter = document.querySelectorAll('.outter');
console.log(outter);

[].forEach.call(outter,function(c){
	let inner = c.querySelectorAll('.inner')[0],
		next = c.querySelectorAll('.next')[0],
		prev = c.querySelectorAll('.prev')[0],
		bubblesContainer = c.querySelectorAll('.bubbles')[0],
		images = c.querySelectorAll('img'),
		species = ['Button-Mushroom','Bearded-Tooth-Mushroom','Idontknow-Mushroom','Oyster-Mushroom','Chanterelle'],
		currentImageIndex = 0,
		width = 720,
		bubbles = [];

		for(let i = 0;i< images.length;i++){
			let b = document.createElement('span');
			b.classList.add('bubble');
			bubblesContainer.appendChild(b);
			bubbles.push(b);

			b.addEventListener('click',function(){
				currentImageIndex = i;
				switchImg();
			});
		}

		function showName(){
			console.log(species[currentImageIndex]);
			speciesName.innerHTML = species[currentImageIndex];
			
		}

		function switchImg(){
			// console.log(currentImageIndex);
			inner.style.left = -width*currentImageIndex+'px';
			for(let x in bubbles){
				if(x == currentImageIndex){
					bubbles[x].classList.add('active');
				}else{
					bubbles[x].classList.remove('active');
				}
			}
		}

		function showHide(){
			if(currentImageIndex == 0){
				prev.style.visibility = 'hidden';
			}else{
				prev.style.visibility = 'visible';
			}

			if(currentImageIndex == images.length-1){
				next.style.visibility = 'hidden';
			}else{
				next.style.visibility = 'visible';
			}
		}

		next.addEventListener('click',function(){
			currentImageIndex++;
			if(currentImageIndex>=images.length){
				currentImageIndex = images.length-1;
			}
			showName();
			showHide();
			switchImg();
		});
				
		prev.addEventListener('click',function(){
			currentImageIndex--;
			if(currentImageIndex<0){
				currentImageIndex = 0;
			}	
			showName();
			showHide();
			switchImg();
		});	

		showName();
		showHide();
		switchImg();
});