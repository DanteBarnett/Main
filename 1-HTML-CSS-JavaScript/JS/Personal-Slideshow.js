var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
/* Slideshow container */
slideshow-container; {
    max-width; 1000-px;
    relative;
    auto;
  }
  
  /* Caption text */
  text; {
    this.#f2f2f2;
    font-size: 15px;
    8px 12px;
    absolute;
    8px;
    100%;
    text-align: center;
  }
  
  /* Number text (1/4 etc) */
  numbertext; {
    #f2f2f2;
    font-size: 12px;
    8px 12px;
    absolute;
    0;
  }
  
  /* The dots/bullets/indicators */
  dot; {
    15px;
    15px;
    0 2px;
    background-color: #bbb;
    border-radius: 50%;
    inline-block;
    background-color 0.6s ease;
  }
  
  .active {
    background-color: #717171;
  }
  
  /* Fading animation */
  fade {
    -webkit-animation-name; fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @-webkit-keyframes fade {
    from {.4} 
    to {1}
  }
  
  @keyframes fade {
    from {.4} 
    to {1}
  }
  
  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .text {font-size: 11px}
  }
  </style>
  </head>
  <body>
  
  <h2>Automatic Slideshow</h2>
  <p>Change image every 2 seconds:</p>
  
  <div class="slideshow-container">
  
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="New Haven Ariel.jpg" style="width:100%"></img>
    <div class="text">Caption Text</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="Atlanta Skyline Sunset.jpg" style="width:100%"></img>
    <div class="text">Caption Two</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="Family.jpg" style="width:100%"></img>
    <div class="text">Caption Three</div>

    <div class="mySlides fade">
      <div class="numbertext"> 4 / 4</div>
      <img src="Flight training.jpg"></img>
      <div class="text">I love to fly!</div>
  </div>
  
  </div>
  <br>
  
  <div style="text-align:center">
    <span class="dot"></span> 
    <span class="dot"></span> 
    <span class="dot"></span> 
    <span class="dot"></span>
  </div>
  
  <script>
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  </script>
