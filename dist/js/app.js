(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector("html").classList.add("webp");
      } else {
         document.querySelector("html").classList.add("no-webp");
      }
   });
})();

document.addEventListener("DOMContentLoaded", () => {
   textWriting();
   tabs(".brief-form__tabs input", ".brief-form__main");
   initServicesSlider();
   initTeamSlider();
});

function textWriting() {
   const textLine = document.querySelector(".home-hero__title");
   let index = 0;
   let obj = [">hello world  <<креативная веб- студия>"];
   if (index == obj.length) {
      return;
   }
   let newArr = obj[index].split("");
   let j = 0;

   const interval = setInterval(() => {
      if (j == 12) {
         let span = document.createElement("span");
         textLine.append(span);
      }
      if (j > 12) {
         const textLineSpan = document.querySelector(".home-hero__title span");
         textLineSpan.innerHTML += newArr[j];
      }
      if (j < 12) {
         textLine.innerHTML += newArr[j];
      }
      j += 1;
      if (j == newArr.length) {
         clearInterval(interval);
      }
   }, 200);
}

function tabs(linkSelector, contentSelector) {
   const inputs = document.querySelectorAll(linkSelector);
   const contents = document.querySelectorAll(contentSelector);
   let value;
   if (inputs.length) {
      inputs.forEach((item) => {
         item.addEventListener("change", () => {
            if (item.checked) {
               value = item.value;
            }
            contents.forEach((item) => {
               item.classList.remove("active");
               if (item.getAttribute("data-tab") == value) {
                  item.classList.add("active");
               }
            });
         });
      });
   }
}

// input mask
const maskOptions = {
   mask: "+{7} 000 000 00 00",
   // lazy: false,  // make placeholder always visible
   // placeholderChar: '0'     // defaults to '_'
};
if (document.getElementById("phone")) {
   const mask = IMask(document.getElementById("phone"), maskOptions);
}
if (document.getElementById("callbackPhone")) {
   const mask = IMask(document.getElementById("callbackPhone"), maskOptions);
}

function initServicesSlider() {
   if (!document.querySelector(".services-modeling .swiper")) {
      return;
   }
   let slider = new Swiper(".services-modeling .swiper", {
      spaceBetween: 44,
      speed: 500,
      slidesPerView: 1,

      breakpoints: {
         993: {
            slidesPerView: "auto",
         },
         568: {
            slidesPerView: 2,
         },
      },
   });
}

function initTeamSlider() {
   if (!document.querySelector(".team-section .swiper")) {
      return;
   }
   let slider = new Swiper(".team-section .swiper", {
      spaceBetween: 44,
      speed: 500,
      slidesPerView: "auto",
      loop: true,
      breakpoints: {
         992: {
            loop: false,
         },
      },
   });
}
