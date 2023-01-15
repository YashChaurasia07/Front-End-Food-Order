let menu =  document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeout(){
//     setInterval(loader,300);
// }
// window.onload = fadeout();  