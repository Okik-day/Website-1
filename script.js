var errorImage;
var newSlideshowImageElement;

var loadImagesInfo;
var extraLoadImagesInfo = 1;

var currentImageSlideshowCount = 1;
var setSlideshowInterval;

var imagesToSlideshow = ['images/Mountain01.jpg', 'images/NasaSpace.jpg', 'images/nature.jpg', 'images/Ocean.jpg', 'images/parachuting.jpg']

window.addEventListener('scroll', function(){
    if(document.body.scrollTop || document.documentElement.scrollTop >= 10){
        document.getElementById('top_bar').style.top = '-0px';
        document.getElementById('top_bar').style.transform = 'scale(0.95)';
        document.getElementById('top_bar').style.backgroundColor = 'rgba(166, 165, 165, 0.739)'
    }else{
        document.getElementById('top_bar').style.transform = 'scale(1)'
        document.getElementById('top_bar').style.top = '10px';
        document.getElementById('top_bar').style.backgroundColor = 'rgba(0, 0, 0, 0.504)';
        
    }
});

loadImages();

imageSlideshow();
setSlideshowInterval = setInterval(imageSlideshow, 4000)


/* checkSlideshowTimer = setInterval(() => {
    let sC = document.getElementById('slideshowContainer').getBoundingClientRect();

    if(sC.top > -sC.height && document.getElementById('slideshowImage').style.animationPlayState == 'paused'){
     imageSlideshow()
    }
}, 1000);
*/

function closeModal(){
    document.getElementById('modalContainer1').classList.add('displayNone');
    document.getElementById('modalImage1').src = '';
}

function modalizeImage(imageX){
    let imagePath = imageX.src;
    document.getElementById('modalImage1').src = imagePath;
    document.getElementById('modalContainer1').classList.remove('displayNone');

    function position(){
        let toApplyH = screen.availHeight - document.getElementById('modalImage1').getBoundingClientRect().height;

        document.getElementById('modalImage1').style.marginTop = ((toApplyH/screen.height*100)/2) + 'vh'

        if(screen.height < 800 && screen.width > 1200){
            document.getElementById('modalImage1').style.marginTop = ((toApplyH/screen.height*100)/5) + 'vh'
        }
       imageX.hover;
    }
    
    imageTopMargin = setInterval(() => {
        position();
        clearInterval(imageTopMargin);
    }, 500);
}



function errorFunc(thisImg){
       thisImg.innerHTML = 'Couldn\'t find image, try reloading webpage';
}

function loadImages(){

    if(loadImagesInfo != 'loaded<10' && imagesToSlideshow.length <= 10){
        let perNow = performance.now();
    for(let i = 0; i < imagesToSlideshow.length; i++){
        newSlideshowImageElement = document.createElement('img');
        
        newSlideshowImageElement.id = `slideshowImage_${i+1}`
        newSlideshowImageElement.style = 'max-width: 100%; max-height: 100%; border-radius: 30px; animation-name: slideshowImage; animation-duration: 4s; animation-iteration-count: infinite; animation-play-state: paused; ';
        newSlideshowImageElement.classList.add('displayNone');
        newSlideshowImageElement.src = imagesToSlideshow[i];
        document.getElementById('slideshowContent').append(newSlideshowImageElement);

        document.getElementById(`slideshowImage_${i+1}`).addEventListener('error', errorFunc(this));

    }
    loadImagesInfo = 'loaded<10'
    
   console.log('simply loadImages ran for ' + (performance.now()-perNow).toFixed(2) + '  seconds');

}

 if(imagesToSlideshow.length > 10){

 if((imagesToSlideshow.length-(extraLoadImagesInfo+10)) < 0){
    let perNow = performance.now();

    for(let i = extraLoadImagesInfo; i < (imagesToSlideshow.length); i++){
        newSlideshowImageElement = document.createElement('img');

        newSlideshowImageElement.id = `slideshowImage_${i+1}`
        newSlideshowImageElement.style = 'max-width: 100%; max-height: 100%; border-radius: 30px; animation-name: slideshowImage; animation-duration: 4s; animation-iteration-count: infinite; animation-play-state: paused; ';
        newSlideshowImageElement.classList.add('displayNone');
       newSlideshowImageElement.src = imagesToSlideshow[i];
        document.getElementById('slideshowContent').append(newSlideshowImageElement);

        document.getElementById(`slideshowImage_${i+1}`).addEventListener('error', errorFunc(this));

    }
    extraLoadImagesInfo = 0;

    console.log('Rounding loadImages-> ran for ' + (performance.now()-perNow).toFixed(2) + '  seconds')
 }

    else{
    let perNow = performance.now();

    for(let i = extraLoadImagesInfo; i < extraLoadImagesInfo+10; i++){
        newSlideshowImageElement = document.createElement('img');

        newSlideshowImageElement.id = `slideshowImage_${i+1}`
        newSlideshowImageElement.style = 'max-width: 100%; max-height: 100%; border-radius: 30px; animation-name: slideshowImage; animation-duration: 4s; animation-iteration-count: infinite; animation-play-state: paused ';
        newSlideshowImageElement.classList.add('displayNone');
        newSlideshowImageElement.src = imagesToSlideshow[i];
        document.getElementById('slideshowContent').append(newSlideshowImageElement);

        document.getElementById(`slideshowImage_${i+1}`).addEventListener('error', errorFunc(this));

    }
    extraLoadImagesInfo = extraLoadImagesInfo+10;

    console.log('loadImages another ten-> ran for ' + (performance.now()-perNow).toFixed(2) + '  seconds')
}

}
console.log(document.getElementById('slideshowContent'));
}



 function imageSlideshow(){
if(currentImageSlideshowCount == extraLoadImagesInfo+10){loadImages()};



if(currentImageSlideshowCount == 1){
    console.log(document.getElementById('slideshowContent').innerHTML)
    document.getElementById('slideshowContent').innerHTML = null;
    console.log(document.getElementById('slideshowContent').innerHTML)
    async function imageSlideshow(){
        await loadImages();
    }
    console.log(document.getElementById('slideshowContent').innerHTML)

}

if (currentImageSlideshowCount == imagesToSlideshow.length) {
       
       if(document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`) != null) {
       
            document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`).classList.add('displayNone');

            document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`).style.animationPlayState = 'paused'
    
}
       document.getElementById(`slideshowImage_${currentImageSlideshowCount}`).classList.remove('displayNone')

        document.getElementById(`slideshowImage_${currentImageSlideshowCount}`).style.animationPlayState = 'running';

        currentImageSlideshowCount = 0;
        
    }
    
    
    
   if(currentImageSlideshowCount != imagesToSlideshow.length) {
   if(document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`) != null) {
       
document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`).classList.add('displayNone');

document.getElementById(`slideshowImage_${currentImageSlideshowCount-1}`).style.animationPlayState = 'paused'
    
}

document.getElementById(`slideshowImage_${currentImageSlideshowCount}`).classList.remove('displayNone');

document.getElementById(`slideshowImage_${currentImageSlideshowCount}`).style.animationPlayState = 'running';

}
console.log(currentImageSlideshowCount, 'image')

currentImageSlideshowCount = currentImageSlideshowCount+1;


}