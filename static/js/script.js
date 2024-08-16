
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

    console.log(sertif)
    // console.log(sertif_parent)
    console.log(sertif_child)



    sertif_child.style.display = "block";
    modalImg.src = sertif.src
    // captionText.innerHTML = this.alt;


    span.onclick = function() {
        sertif_child.style.display = "none";
    }
    
}

function img_modal_project(e){
    let gambar = e.target
    let gambar_modal = document.getElementById("myModal")
    // let sertif_parent = sertif.closest('#sertifikat');
    // let sertif_child = sertif_parent.children[2]
    let span = document.getElementsByClassName("close")[0];


    gambar_modal.style.display = "block";
    modalImg.src = gambar.src
    // captionText.innerHTML = this.alt;


    span.onclick = function() {
        gambar_modal.style.display = "none";
    }
    
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header'); // Menggunakan querySelector
    const navbar = document.querySelector('.navbar-toggler');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navbar.classList.remove('navbar-up')
    } else {
        header.classList.remove('scrolled');
        navbar.classList.add('navbar-up')
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.nama.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    console.log("pesan terkirim");
    const mailtoLink = `mailto:handep789@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    
    window.location.href = mailtoLink;
});
