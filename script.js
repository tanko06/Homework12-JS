var i = 0, imgsrc = new Array(), preload = new Array();
imgsrc[0] = "1.jpg";
imgsrc[1] = "2.jpg";
imgsrc[2] = "3.jpg";
imgsrc[3] = "4.png";
for (var j = 0; j < imgsrc.length; j++) {
    preload[j] = new Image;
    preload[j].src = imgsrc[j];
}
function mode(param) {
    smode=param;
}
function startSlideshow() {
    if(smode == "play") {
        document.getElementById("start").disabled="disabled";
        document.getElementById("stop").disabled="";
        document.getElementById("slideshow").src=imgsrc[i];
        i++;
        setTimeout("startSlideshow()", 10000);
    }
    else if(smode == "pause") {
        document.getElementById("stop").disabled="disabled";
        document.getElementById("start").disabled="";
    }
    if(i == imgsrc.length) {
        i=0
    }
}