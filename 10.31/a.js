(function (document) {
    var viewport;
    var obj = {
        init: function (id) {
            viewport = document.querySelector("#" + id);
        },
        addChild: function (child) {
            viewport.appendChild(child);
        },
        removeChild: function (child) {
            viewport.removeChild(child);
        }
    }   ;
    window.jView = obj;
})(document);