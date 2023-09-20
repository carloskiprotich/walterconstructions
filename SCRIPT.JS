let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}



searchbar.onclick = () => {

    search.classList.toggle('active')
}


//IMAGE GALLERY

var fullImgBox = document.getElementById("fullImgBox")
var fullImg = document.getElementById("fullImg")

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic
}

function closeFullImg(){
    fullImgBox.style.display = "none";
    
}

//IMAGE GALLERY


//SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function (e) {
        e.preventDefault
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});
