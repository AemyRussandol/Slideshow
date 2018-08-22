var i = 0;
var images = [];


images[0] = "img/slide1.jpg";
images[1] = 'img/slide2.jpg';
images[2] = 'img/slide3.jpg';
images[3] = 'img/slide4.jpg';
images[4] = 'img/slide5.jpg';
images[5] = 'img/slide6.jpg';


function changeImg() {
    document.getElementById("slide").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", 1000);
}

window.onload = changeImg;