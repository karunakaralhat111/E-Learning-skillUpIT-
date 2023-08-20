// ########################### Scroll Bar Top Position of the page ##############################################

let indicator = document.querySelector(".indicator");
let topScroll = document.querySelector(".topScroll");
let documentHeight = document.documentElement.scrollHeight;
let viewportHeight = document.documentElement.clientHeight;
window.onscroll = function () {
  topScroll.style.display = "block";
  let percentagescrolled = (scrollY / (documentHeight - viewportHeight)) * 100;
  indicator.style.width = percentagescrolled + "%";

  if (percentagescrolled === 0) {
    topScroll.style.display = "none";
  }
};

//=========================================== Sticky nav bar =======================================================
let bottom_header = document.querySelector(".bottom-header");
// let herobtn = document.querySelector(".carousel_btn");
let Herosection = document.getElementById("carouselExampleFade");
// console.log(Herosection);

let obeserver = new IntersectionObserver(
  (entries) => {
    let ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    rootMargin: "-101px",
    threshold: "0",
  }
);
obeserver.observe(Herosection);

// =========================================  Scroll to Top ======================================================
const to_top = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    to_top.classList.add("active");
  } else {
    to_top.classList.remove("active");
  }
});

// ============================================= Login Form ===========================================================
document.addEventListener("DOMContentLoaded", function () {
  let index_login_btn = document.querySelector(".index_login_btn");
  let bottom_header_btn = document.querySelector(".bottom_header_btn");
  let main_wrapper = document.querySelector(".main-wrapper");

  function generatLoginForm() {
    main_enquire_wrapper.style.visibility="hidden";
    main_wrapper.style.visibility = "visible";

    let formTemplate = `
    <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-6 col-lg-6 col-xl-5 col-11 form-wrapper">  
              <form class="p-4 login_form">
                  <div class="mb-3 text-end">
                      <span class="close"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                  <div class="mb-3 formtittle">
                      <h2>Please enter your credentials</h2>
                  </div>
                  <div class="mb-3">
                      <label for="Username" class="form-label">Username:</label>
                      <input type="text" class="form-control p-3" id="Username" required>
                  </div>
                  <div class="mb-3">
                      <label for="Password" class="form-label">Password:</label>
                      <input type="text" class="form-control p-3" id="Password" required>
                  </div>
                  <div class="mb-3 text-center">
                      <button class="btn_ form_login_btn" type="submit">Login</button>
                  </div>
              </form>
      </div>
    </div>
  </div>
    `;
    main_wrapper.innerHTML = formTemplate;
    var login_form = document.querySelector(".login_form");
    var close = login_form.querySelector(".close");
    login_form.classList.add("form_active");

    close.addEventListener("click", () => {
      login_form.classList.remove("form_active");
      main_wrapper.style.visibility = "hidden";
    });
  }
  bottom_header_btn.addEventListener("click",generatLoginForm);
  index_login_btn.addEventListener("click",generatLoginForm);
});
//  ======================================== Enquire Form ==============================================================
var main_enquire_wrapper = document.querySelector(".main-enquire-wrapper");
let enquire_btn = document.querySelectorAll(".enquire_btn");
var main_wrapper = document.querySelector(".main-wrapper");

function handleform() {
  main_wrapper.style.visibility = "hidden"; 
  main_enquire_wrapper.style.visibility = "visible";

  let enqform = `
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-6 col-lg-6 col-xl-5 col-11 enquire-wrapper">  
                <form class="p-4 enquire_form">
                    <div class="mb-3 text-end">
                        <span class="close"><i class="fa-solid fa-xmark"></i></span>
                    </div>
                    <div class="mb-3 formtittle ">
                        <h2>Please enter your credentials</h2>
                    </div>
                    <div class="mb-3 ">
                        <label for="Username" class="form-label ">Name:</label>
                        <input type="text" class="form-control  p-3" id="Username" required>
                    </div>
                    <div class="mb-3 ">
                        <label for="Password" class="form-label ">Email ID:</label>
                        <input type="email" class="form-control  p-3" id="Password" required>
                    </div>
                    <div class="mb-3 ">
                        <label for="Password" class="form-label">Mobile No:</label>
                        <input type="tel" class="form-control  p-3" id="Password" required>
                    </div>
                    <div class="mb-3 text-center ">
                        <button class="btn_ form_login_btn" type="submit">Apply</button>
                    </div>
                </form>
        </div>
      </div>
    </div>
    `;
  main_enquire_wrapper.innerHTML = enqform;
  let enquire_form = document.querySelector(".enquire_form");
  let enqclose = enquire_form.querySelector(".close");

  enquire_form.classList.add("enqire_active");

  enqclose.addEventListener("click", () => {
    enquire_form.classList.remove("enqire_active");
    main_enquire_wrapper.style.visibility = "hidden"; 
  });
}

// #######============================= Toggle with navbar ========================================================
let fa_bars = document.querySelector(".fa-bars");
let navigation = document.querySelector(".navigation");
let carouselExampleCaptions = document.getElementById("carouselExampleFade");
let fa_chevron_left = document.querySelector(".fa-chevron-left");
let fa_chevron_right = document.querySelector(".fa-chevron-right");
let closebtn = navigation.querySelector(".fa-xmark");
let top_scroll = document.querySelector(".topScroll");

fa_bars.addEventListener("click", () => {
  navigation.style.display = "block";
  carouselExampleCaptions.style.display = "none";
  bottom_header.style.display = "none";
  login_form.style.display = "none";
});
closebtn.addEventListener("click", () => {
  navigation.style.display = "none";
  bottom_header.style.display = "block";
  carouselExampleCaptions.style.display = "block";
  login_form.style.display = "block";
});
