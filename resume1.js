var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(var i=0; i<navMenuAnchorTags.length; i++){
	navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        interval = setInterval(scrollVertically,20,targetSection);

	})
}
function scrollVertically(targetSection){
	var targetSectionCordinates = targetSection.getBoundingClientRect();
        	if(targetSectionCordinates.top <= 0){
        		clearInterval(interval);
        		return;
        	}
        	window.scrollBy(0,50);
}

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars (){
   for(var bar of progressBars){
   	bar.style.width = 0 + "%";
   }
}
initialiseBars();

function fillBars(){
	for(let bar of progressBars){
			let targetWidth = bar.getAttribute('data-bar-width');
            let currentWidth = 0;
            let interval = setInterval(function(){
            	if(currentWidth>targetWidth){
            		clearInterval(interval);
            		return;
            	}
            	else{
            		currentWidth++;
            		   	bar.style.width = currentWidth + "%";

            	}
            },7)
	}

}


function checkScroll(){
	// We have to check wheather skill container is visible
	var cordinates = skillsContainer.getBoundingClientRect();
	if(!animationDone && cordinates.top < window.innerHeight){
		animationDone = true;
		console.log('skill section visible');
		fillBars();
	}else if(cordinates.top>window.innerHeight){
		animationDone = false;
		initialiseBars();
	}

}