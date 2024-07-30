let image=["image-1.jpg","image-2.jpg","image-3.jpg","image-4.webp","image-5.jpg","image-6.jpg"];
let currentIndex=0;
let img=document.getElementById('img1');
function sliderImage(){
    currentIndex=(currentIndex-1+image.length)%image.length;
    img.src="image/"+image[currentIndex];
}
function prev(){
    setTimeout(sliderImage,100);
}
function sliderImage2(){


    currentIndex=(currentIndex+1)%image.length;
    img.src="image/"+image[currentIndex];
}
function next(){
    setTimeout(sliderImage2,100);
}