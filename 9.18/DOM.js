function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}//不太懂

function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    var abbreviations = document.getElementsByTagName('abbr');
    var defs = [];
    for (var i = 0; i < abbreviations.length; i++) {
        if (abbreviations[i].length < 1) continue;
        var definition = abbreviations[i].getAttribute('title');
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement('dl');//dl是创建一个列表
    for (key in defs) {//遍历对象的可枚举属性
        var def = defs[key];
        var dtitle = document.createElement('dt');//dt是列表的标题或者要解释的内容
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement('dd');//dd是列表的内容
        var ddesc_text = document.createTextNode(def);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    var header = document.createElement('h2');
    var header_text = document.createTextNode('abbreviations');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCitations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    var quotes = document.getElementsByTagName('blockquote');
    for (let i = 0; i < quotes.length; i++) {
        let url = quotes[i].getAttribute('cite');
        var quoteChild = quotes[i].getElementsByTagName('*');
        var elem = quoteChild[quoteChild.length - 1];
        let link = document.createElement('a');
        let linkText = document.createTextNode('source');
        link.appendChild(linkText);
        link.setAttribute('href', url);
        let superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

function displayAccesskeys() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    let links = document.getElementsByTagName('a');
    let akeys = [];
    for (let i = 0; i < links.length; i++) {
        if (!links[i].getAttribute('accesskey')) continue;
        var key = links[i].getAttribute('accesskey');
        akeys[key] = links[i].lastChild.nodeValue;
    }
    var unorderedList = document.createElement('ul');
    for (key in akeys) {
        let text = akeys[key];
        var str = key + ':' + text;
        var item = document.createElement('li');
        var itemText = document.createTextNode(str);
        item.appendChild(itemText);
        unorderedList.appendChild(item);
    }
    let content = document.createElement('h3');
    var contentText = document.createTextNode('AccessKeys');
    content.appendChild(contentText);
    document.body.appendChild(content);
    document.body.appendChild(unorderedList);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);