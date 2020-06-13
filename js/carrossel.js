/*Carrossel*/ 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*Fim do carrossel*/

/*Efeitos de mouse redes sociais*/
function mudaFoto(foto){
  document.getElementById("face").src = foto;
}

function trocaLogo(logo){
  document.getElementById("insta").src = logo;
}

function pegaIcone(icone){
  document.getElementById("link").src = icone;
}

/*Script imagens*/

function slide1(){
  document.getElementById('img01').src="img/img_1.png";
  setTimeout("slide2()", 1000)
  }
    
  function slide2(){
  document.getElementById('img01').src="img/img_3.png";
  setTimeout("slide3()", 1000)
  }
    
  function slide3(){
  document.getElementById('img01').src="img/img_4.png";
  setTimeout("slide1()", 1000)
  }

  /* imagem 2 */

function muda1(){
  document.getElementById('img02').src="img/img_2.png";
  setTimeout("muda2()", 1000)
}
      
function muda2(){
  document.getElementById('img02').src="img/img_4.png";
  setTimeout("muda3()", 1000)
}
      
function muda3(){
  document.getElementById('img02').src="img/img_5.png";
  setTimeout("muda1()", 1000)
}

/* imagem 3 */

function passa1(){
  document.getElementById('img03').src="img/img_3.png";
  setTimeout("passa2()", 1000)
}
      
function passa2(){
  document.getElementById('img03').src="img/img_4.png";
  setTimeout("passa3()", 1000)
}
      
function passa3(){
  document.getElementById('img03').src="img/img_5.png";
  setTimeout("passa1()", 1000)
}

/* imagem 4 */

function mexe1(){
  document.getElementById('img04').src="img/img_4.png";
  setTimeout("mexe2()", 1000)
}
      
function mexe2(){
  document.getElementById('img04').src="img/img_4.png";
  setTimeout("mexe3()", 1000)
}
      
function mexe3(){
  document.getElementById('img04').src="img/img_5.png";
  setTimeout("mexe1()", 1000)
}

/* imagem 5 */

function troca1(){
  document.getElementById('img05').src="img/img_4.png";
  setTimeout("troca2()", 1000)
}
      
function troca2(){
  document.getElementById('img05').src="img/img_4.png";
  setTimeout("troca3()", 1000)
}
      
function troca3(){
  document.getElementById('img05').src="img/img_5.png";
  setTimeout("troca1()", 1000)
}

/* vlibras interprete */

src="https://vlibras.gov.br/app/vlibras-plugin.js">
new window.VLibras.Widget('https://vlibras.gov.br/app');
