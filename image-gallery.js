function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
//理解-----------------------------------------
//将被插入的新元素,新元素将被插入到他的后面去的目标元素
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var images = document.createElement('img');
    images.setAttribute('id', 'placeholder');
    images.setAttribute('src', 'pictures/state.jpg');
    images.setAttribute('alt', 'my image gallery');
    var para = document.createElement('p');
    para.setAttribute('id', 'description');
    var txt = document.createTextNode('choose an image');
    para.appendChild(txt);
    var gallery = document.getElementById('image-gallery');
    insertAfter(para,gallery);
    insertAfter(images,gallery);
}
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
    if (!document.getElementById('placeholder')) {
        return true;
    }
    var placeHolder = document.getElementById('placeholder');
    var source = whichPic.getAttribute('href');
    placeHolder.setAttribute('src', source);
    if (!document.getElementById('description')) {
        return false;
    }
    if (whichPic.getAttribute('title')) {
        var text = whichPic.getAttribute('title');
    }
    else {
        text = '';
    }
    var description = document.getElementById('description');
    if (description.firstChild.nodeType === 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
