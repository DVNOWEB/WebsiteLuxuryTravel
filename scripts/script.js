// Navbar tab and mobile
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active')
}

// Video switch
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
  btn.onclick = () =>{
    let src = btn.getAttribute('data-src')

    document.querySelector('.about .video-container .video').src = src
  }
})

// OWL CAROUSEL AUTOPLAY
let owl = $('.owl-carousel');
owl.owlCarousel({
    items:6, 
  
    loop:true,
    // margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

// Slider comments
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 9000);
}