
'use strict';

// ------------------------------------- X -----------X-------Saving 10 Items in mongodb -----------X--------- X ------------------------------------------

//  Saving 1st Items in mongodb

document.getElementById('insertDataBtn1').addEventListener('click', async (e) => {
   e.preventDefault();
       try{
            //  const formData = new FormData(e.target);
             const response = await fetch('/insertData1', {
             method: 'POST',
            //  body: formData ,
             headers: {'Content-Type': 'application/json'},
           });

           if (response.ok) {
              alert('Order placed successfully');
            } else {
               alert('Failed to place order');
            }
         } catch (error) {
                  console.error(error);
                  alert('Error placing order');
            }
       const data = await response.json();
       console.log(data);
    });


//  Saving 2nd Items in mongodb

document.getElementById('insertDataBtn2').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData2', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });



//  Saving 3rd Items in mongodb

document.getElementById('insertDataBtn3').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData3', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 4th Items in mongodb

document.getElementById('insertDataBtn4').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
           
            const response = await fetch('/insertData4', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 5th Items in mongodb

document.getElementById('insertDataBtn5').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData5', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 6th Items in mongodb

document.getElementById('insertDataBtn6').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData6', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 7th Items in mongodb

document.getElementById('insertDataBtn7').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData7', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 8th Items in mongodb

document.getElementById('insertDataBtn8').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData8', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 9th Items in mongodb

document.getElementById('insertDataBtn9').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
           
            const response = await fetch('/insertData9', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });


//  Saving 10th Items in mongodb

document.getElementById('insertDataBtn10').addEventListener('click', async (e) => {
  e.preventDefault();
      try{
            
            const response = await fetch('/insertData10', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          });

          if (response.ok) {
             alert('Order placed successfully');
           } else {
              alert('Failed to place order');
           }
        } catch (error) {
                 console.error(error);
                 alert('Error placing order');
           }
      const data = await response.json();
      console.log(data);
   });




// Total Items Count
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
// const cartCount = document.getElementById('cart-count');

let itemCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemCount++;
        cartCount.innerText = itemCount;
    });
});



// Total Amount Count
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const totalElement = document.getElementById('total');
  let total = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const price = parseFloat(button.previousElementSibling.textContent.slice(1)); // Extracting price without '$' sign
      total += price;
      totalElement.textContent = total.toFixed(2); // Displaying total with 2 decimal places
    });
  });
});














/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});