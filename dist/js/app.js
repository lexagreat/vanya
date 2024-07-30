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
   // textWriting();
   tabs(".brief-form__tabs input", ".brief-form__main");
});

function textWriting() {
   var wrapper = document.querySelector(".home-hero__title");
   var text = document.querySelector(".home-hero__title h1");

   var textCont = text.textContent;
   text.style.display = "none";

   for (var i = 0; i < textCont.length; i++) {
      (function (i) {
         setTimeout(function () {
            // Created textNode to append
            var texts = document.createTextNode(textCont[i]);
            var span = document.createElement("span");
            span.appendChild(texts);

            span.classList.add("wave");
            wrapper.appendChild(span);
         }, 75 * i);
      })(i);
   }
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
