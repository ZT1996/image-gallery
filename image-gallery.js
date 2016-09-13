window.onload = prepareGallery;
function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById) {
        return false;
    }
    if (!document.getElementById("image-gallery")) {
        return false;
    }
    var gallery = document.getElementById("image-gallery");
    var links = gallery.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        };
    }
}
function showPic(whichPic) {
    if(!document.getElementById('placeholder')){
        return true;
    }
    var placeHolder = document.getElementById('placeholder');
    var source = whichPic.getAttribute('href');
    placeHolder.setAttribute('src', source);
    if(!document.getElementById('description')){
        return false;
    }
    if(whichPic.getAttribute('title')){
        var text = whichPic.getAttribute('title');
    }
    else {
        text = '';
    }
    var description = document.getElementById('description');
    if(description.firstChild.nodeType === 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}
