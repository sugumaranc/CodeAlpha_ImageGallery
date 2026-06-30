const images=[
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg",
"images/image4.jpg",
"images/image5.jpg"
];

let current=0;

function openImage(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[current];
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

function nextImage(){
current=(current+1)%images.length;
document.getElementById("lightbox-img").src=images[current];
}

function prevImage(){
current=(current-1+images.length)%images.length;
document.getElementById("lightbox-img").src=images[current];
}