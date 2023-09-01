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
function redirectToLink(url) {
  window.location.href = url;
}

// ============================================= Login Form ===========================================================
var bottom_header_btn = document.querySelector(".bottom_header_btn");
var form_wrapper = document.querySelector(".form-wrapper");
var index_login_btn = document.querySelector(".index_login_btn");

var login_form = document.querySelector(".login_form");
var close = login_form.querySelector(".close");

bottom_header_btn.addEventListener("click", () => {
  enquire_wrapper.classList.remove("zoom");
  form_wrapper.style.display = "block";
  enquire_wrapper.style, (display = "none");
  setTimeout(() => {
    form_wrapper.classList.add("zoom");
  }, 10);
});

close.addEventListener("click", () => {
  setTimeout(() => {
    form_wrapper.classList.remove("zoom");
  }, 10);
});

index_login_btn.addEventListener("click", () => {
  enquire_wrapper.classList.remove("zoom");
  form_wrapper.style.display = "block";
  enquire_wrapper.style, (display = "none");
  setTimeout(() => {
    form_wrapper.classList.add("zoom");
  }, 10);
});
// ========================================  enquire form =================================================
var enquire_wrapper = document.querySelector(".enquire-wrapper");
var enquire_form = enquire_wrapper.querySelector(".enquire_form");
var enqclose = enquire_form.querySelector(".close");
function handleform() {
  form_wrapper.classList.remove("zoom");
  enquire_wrapper.style.display = "block";
  form_wrapper.style.display = "none";
  setTimeout(() => {
    enquire_wrapper.classList.add("zoom");
  }, 10);
}
enqclose.addEventListener("click", () => {
  setTimeout(() => {
    enquire_wrapper.classList.remove("zoom");
  }, 10);
});

// =================================== Toggle with navbar ========================================================
let fa_bars = document.querySelector(".fa-bars");
let navigation = document.querySelector(".navigation");
let carouselExampleCaptions = document.getElementById("carouselExampleFade");
let fa_chevron_left = document.querySelector(".fa-chevron-left");
let fa_chevron_right = document.querySelector(".fa-chevron-right");
let closebtn = navigation.querySelector(".fa-xmark");
let top_scroll = document.querySelector(".topScroll");
// let card_slider =document.querySelector(".card-slider");
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
window.onload = function () {
  let BackgroundImages = {
    hero4: "images/hero_slider_bg_1.jpg",
  };

  // Function to change the background image of a specific hero section
  function changeBackground(heroId, imageUrl) {
    const heroElement = document.querySelector(".herosectionIV");
    // console.log(heroElement);
    let gradientColors = "linear-gradient(45deg, #ffffff81, #48474761)";

    if (heroElement) {
      // heroElement.style.backgroundImage = `url(${imageUrl})`;
      heroElement.style.background = `${gradientColors},url(${imageUrl})`;
      heroElement.style.backgroundSize = "cover";
    }
  }

  // Check which hero section to target based on the current page
  const currentPage = window.location.pathname; // Get the current page URL
  if (currentPage.includes("WebDesigning.html")) {
    changeBackground("hero4", BackgroundImages.hero4);
  }
  // Add more conditions for other pages if needed

  // ======================================================== Dynamic Card ========================================




  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./card.json", true);
  xmlhttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      var jsonData = JSON.parse(xmlhttp.responseText);
      var dataArray=jsonData.PageIIICardData;
      console.log(dataArray)
      var WebDesigningCardsRow = document.getElementById("WebDesigningCardsRow");
      console.log(WebDesigningCardsRow);

      WebDesigningCardsRow.innerHTML = dataArray.map((x)=> {
        console.log() 	
        var {overlay,hoverBtnI,hoverH3,hoverDis,hoverBtnIIanchor,cardImg,cardBodyBtn,cardTittle,cardfooterBtn} = x;
        return `
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 my-3" data-aos="fade-up">
        <div class="card-box">
            <div class="hovercard-box ${overlay}">
                <button>${hoverBtnI}</button>
                <h3>${hoverH3}</h3>
                <p class="hovercard-dis">
                    ${hoverDis}
                </p>
                <div class="hovercard-bottom d-flex justify-content-between align-items-center">
                    <div class="hovercard-icon-container">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="hovercard-btn-container">
                        <a  class="btn_" onclick="handleform()">${hoverBtnIIanchor}</a>
                    </div>
                </div>
            </div>
            <div class="card-img">
                <img src="${cardImg}" alt="fundamental_img">
            </div>
            <div class="card-certificate-badge">
                <span class="badge"> </span>
                <span class="certificate"></span>
            </div>
            <div class="card-body">
                <div class="btncontainer">
                    <a href="#" class="feature-btn"> <span><i class="fa-solid fa-star"></i></span>
                        FEATURED</a>
                    <p class="mt-4">${cardBodyBtn}</p>
                </div>
                <div class="card-tittle">
                    <h1>${cardTittle}</h1>
                </div>
                <div class="card_footer">
                    <img src="images/PROFILE_SKILLUP_LOGO-02.jpg" class="img-fluid" alt="profilelogo">
                    <p>skillupitacademy</p>
                </div>
                <div class="card_footer_btn">
                    <span>${cardfooterBtn}</span>
                </div>
            </div>
        </div>
    </div> `;
      }).join("")
        //  pageIIIData.map( (elm)=> {
        //     console.log(elm)
        //  })


    }
  };
  xmlhttp.send();
};
