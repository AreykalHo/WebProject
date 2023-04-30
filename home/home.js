// check user authentication
let login = document.getElementById("login");
// let auth = localStorage.getItem("loginStatus");
// console.log(localStorage.getItem("loginStatus"));

var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  ); // Get an array of slides

  var index = 0,
    time = 3000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("H-BYIr0qNZu0_Ijku");
})();

window.onload = function () {
  document
    .getElementById("newsletter")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("newsletter", "newsletter", this).then(
        function () {
          console.log("SUCCESS!");
          alert("Successfully subscribed to newsletter");
          window.location.reload();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

// let nextBtn = document.getElementsByClassName("slick-next");
// nextBtn[0].style.borderRadius = "15px";
// console.log(nextBtn[0]);

let auth = document.cookie
  .split("; ")
  .find((row) => row.startsWith("loginStatus="))
  .split("=")[1];
console.log(auth);

if (auth == "checked") {
  console.log(auth);

  login.textContent = "Logout";
}

login.onclick = function () {
  if (login.textContent == "Logout") {
    document.cookie =
      "loginStatus=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }
};
