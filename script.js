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

// linking pages
 function redirectToLink(url){
  window.location.href=url;
 }
// ============================================= Login Form ===========================================================
  var bottom_header_btn = document.querySelector(".bottom_header_btn");
  var form_wrapper = document.querySelector(".form-wrapper");
  var index_login_btn = document.querySelector(".index_login_btn");

  var login_form=document.querySelector('.login_form');
  var close = login_form.querySelector(".close");


  bottom_header_btn.addEventListener("click", ()=>{
    enquire_wrapper.classList.remove("zoom");
    form_wrapper.style.display="block";
    enquire_wrapper.style,display="none";
    setTimeout(()=>{
      form_wrapper.classList.add("zoom");
    },10);
  })

  close.addEventListener("click",()=>{
    setTimeout(()=>{
      form_wrapper.classList.remove("zoom");
    },10)
  })

  index_login_btn.addEventListener("click",()=>{
    enquire_wrapper.classList.remove("zoom");
    form_wrapper.style.display="block";
    enquire_wrapper.style,display="none";
    setTimeout(()=>{
      form_wrapper.classList.add("zoom");
    },10);
  })
  // ========================================  enquire form =================================================
  var enquire_wrapper=document.querySelector(".enquire-wrapper");
  var enquire_form=enquire_wrapper.querySelector(".enquire_form");
  var enqclose=enquire_form.querySelector(".close");
   function handleform(){
    form_wrapper.classList.remove("zoom");
    enquire_wrapper.style.display="block";
    form_wrapper.style.display="none";
    setTimeout(()=>{
      enquire_wrapper.classList.add("zoom");
    },10)
   }
   enqclose.addEventListener("click",()=>{
    setTimeout(()=>{
      enquire_wrapper.classList.remove("zoom");
    },10)
   })

// =================================== Toggle with navbar ========================================================
let fa_bars = document.querySelector(".fa-bars");
let navigation = document.querySelector(".navigation");
let carouselExampleCaptions = document.getElementById("carouselExampleFade");
let fa_chevron_left = document.querySelector(".fa-chevron-left");
let fa_chevron_right = document.querySelector(".fa-chevron-right");
let closebtn = navigation.querySelector(".fa-xmark");
let top_scroll = document.querySelector(".topScroll");
let card_slider =document.querySelector(".card-slider");
fa_bars.addEventListener("click", () => {
  navigation.style.display = "block";
  carouselExampleCaptions.style.display = "none";
  bottom_header.style.display = "none";
  login_form.style.display = "none";
  // card_slider.style.display = "none";
});
closebtn.addEventListener("click", () => {
  navigation.style.display = "none";
  bottom_header.style.display = "block";
  carouselExampleCaptions.style.display = "block";
  login_form.style.display = "block";
  // card_slider.style.display = "block";

});
// ====================================================== Change Hero Section Background ===========================================
