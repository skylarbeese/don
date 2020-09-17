let galleryImages = document.querySelectorAll('.gallery-img')
let getLatestOpenedImage;
let windowWidth = window.innerWidth;

if(galleryImages) {
	galleryImages.forEach(function(image, index) {
       image.onclick = function() {
       	//alert('it works')
 


       let getElementCss = window.getComputedStyle(image);
       	let getFullImageUrl = getElementCss.getPropertyValue('background-image');
       	let getImgUrlPos = getFullImageUrl.split('/two/small/')
       	let setNewImgUrl = getImgUrlPos[1].replace('")', '');
       	//alert('getImgUrlPos'[1])


       	getLatestOpenedImage = index + 1;

       	let container = document.body;
       	let newImgWindow = document.createElement('div')


       	container.appendChild(newImgWindow)
       	newImgWindow.setAttribute('class', 'img-window')
       	newImgWindow.setAttribute('onclick', 'closeImg()')



       	let newImg = document.createElement('img')
       	newImgWindow.appendChild(newImg)
       	newImg.setAttribute('src','two/' + setNewImgUrl)

      	newImg.onload = function() {
       	 let imgWidth = this.width;
         let calcImgToEdge = ((windowWidth - imgWidth) / 2) -80;



       	let newNextBtn = createElement('a')
       	let btnNextText = document.createTextNode('next')
       	newNextBtn.appendChild(btnNextText)
       	container.appendChild(newNextBtn)
       	newNextBtn.setAttribute('class','img-btn-next')
    	newNextBtn.setAttribute('onclick','changeImg()')
        newNextBtn.style.cssText = 'right: '+ calcImgToEdge + 'px;'

    	let newPrevBtn = createElement('a')
       	let btnPrevText = document.createTextNode('prev')
       	newPrevBtn.appendChild(btnPrevText)
       	container.appendChild(newPrevBtn)
       	newPrevBtn.setAttribute('class','img-btn-prev')
    	newPrevBtn.setAttribute('onclick','changeImg()')
    	 newPrevBtn.style.cssText = 'left: '+ calcImgToEdge + 'px;'
       	} 

             	
       }
	})
}

function closeImg() {
	document.querySelector('.img-window').remove()
} 

