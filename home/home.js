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