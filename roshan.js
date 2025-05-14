const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navlinks');

hamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('active');
});
const text = "Hi, I am Mr.Z";
const typee = document.getElementById('type');
let index = 0;

function typp(){
    if (index < text.length) {
        typee.textContent += text.charAt(index);
        index++;
        setTimeout(typp,200);
    }
}
typp();
