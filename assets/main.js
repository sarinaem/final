// let myList = document.createElement("ul");
//     myList.classList.add("my-list");
//     let listItem1 = document.createElement("li");
//     listItem1.classList.add("listpoint")
//     listItem1.textContent = "صفحه نخست";
//     myList.appendChild(listItem1);
//     let listItem2 = document.createElement("li");
//     listItem2.classList.add("listpoint")

//     listItem2.textContent = "تماس با ما";
//     myList.appendChild(listItem2);

//     let listItem3 = document.createElement("li");
//     listItem3.classList.add("listpoint")

//     listItem3.textContent = " درباره ما";
//     myList.appendChild(listItem3);
//     let listItem4 = document.createElement("li");
//     listItem4.classList.add("listpoint")
//     listItem4.textContent = "راهنمای سایت";
//     myList.appendChild(listItem4);
//     let parentElement = document.getElementById("myParentElement");
//     parentElement.appendChild(myList);

    function showRegisterForm() {
      window.open("http://127.0.0.1:5500/index1.html", "_blank");
    }

    function sendMessage() {
      window.open("http://127.0.0.1:5500/index.html", "_blank");

    }

    function registerbutton() {
      window.open("http://127.0.0.1:5500/index.html", "_blank");
    }

    const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function slideNext() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function slidePrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);

function slideNext() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(slideNext, 4000);

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerlink');
let isRegistered = false;
if (isRegistered) {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
} else {
  let isRegistered = true;
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
}

loginLink.addEventListener('click', function() {
  
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerLink.addEventListener('click', function() {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});


window.addEventListener('DOMContentLoaded', function() {
  let aboutLi = document.getElementById('about-li');
  let iframe = document.createElement('iframe');
  iframe.src = 'aboutUs.html';
  iframe.width = '100%';
  iframe.height = '600';
  aboutLi.appendChild(iframe);

});

const house = [
  {
    image: "home1.webp",
    city: "Tehran",
    title: "خانه ویلایی ",
    price: 50000000,
    sellerName: "mina jafari",
    description: "دو اتاق خوابه، دارای پارکینگ، ۱۲۰ متر زیربنا، غیر دربست، دارای سرویس بهداشتی فرنگی و ایرانی"
  },
  {
    image: "house1.png",
    city: "kordan",
    title: "ویلای سه‌خوابه استخردار",
    price: 1600000,
    sellerName: "abbas akbari",
    description: "بدون اتاق خواب، یک تخت دو نفره، مبل تخت‌شو، استخر و دارای پارکینگ"
  },
  {
    image: "house2.webp",
    city: "rasht",
    title: "خانه دوبلکس کوچک",
    price: 10000000,
    sellerName: "mina jafari",
    description: "دو طبقه، دربست، ۲ اتاق خواب مجزا، اینترنت، پارکینگ، سیستم سرمایشی، لوازم سرو غذا، حداکثر ۱۰ نفر"
  },

  {
    image: "house8.jpeg",
    city: "amol",
    title: "خانه ساحلی ",
    price: 50000000,
    sellerName: "mina jafari",
    description: "نزدیک دریا، پارکینگ، بدون اتاق خواب"
  }
]

