function overlay() {
    let account = document.getElementById("account");
    account.onclick = function () {
        let e = document.getElementById("modal-overlay");
        e.style.visibility = "visible";
    }
}

function verifyPayment() {
    let verify = document.getElementById("verify");
    let close = document.getElementById("close");
    verify.onclick = function () {
        let e = document.getElementById("modal-overlay");
        e.style.visibility = "hidden";
    };

    close.onclick = function () {
        let e = document.getElementById("modal-overlay");
        e.style.visibility = "hidden";
    }

}
window.onload = function () {
    overlay();
    verifyPayment();
};