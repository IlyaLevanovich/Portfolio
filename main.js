window.onload = function() {
    let x = document.querySelector("#my-top-nav");
    document.querySelector("#menu").onclick = function() {
        x.classList.toggle('responsive');
    }
}