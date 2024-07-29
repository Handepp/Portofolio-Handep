
function toggle_detail(e){
    let button = e.target;

    let parent = button.parentElement.parentElement;
    let child = parent.children

    if (button.classList.contains('active')) {
        button.innerHTML = "Buka"
        button.classList.remove("active")
    }
    else{
        button.innerHTML = "Tutup"
        button.classList.add("active")
    }

    $(child[1]).slideToggle()
}


var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");

function img_modal(e){
    let sertif = e.target;
    let sertif_parent = sertif.closest('#sertifikat');
    let sertif_child = sertif_parent.children[2]
    let span = document.getElementsByClassName("close")[0];


    sertif_child.style.display = "block";
    modalImg.src = sertif.src
    // captionText.innerHTML = this.alt;


    span.onclick = function() {
        sertif_child.style.display = "none";
    }
    
}

document.addEventListener('scroll',() => {
    const header=document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})
