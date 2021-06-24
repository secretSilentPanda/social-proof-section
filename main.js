const testimony_cards = document.querySelectorAll(".testimonial"); //select the testimonial cards
const rating_cards = document.querySelectorAll(".rating__item"); //select the rating cards
const content = document.querySelector(".content"); //select the heading and short text

//  Animate.css needs the "animate__animated" class for the animation to work. So adding it at the beginning. The particular animation's classs will be added dynamically. This class is kind of a master switch

rating_cards.forEach((card) => card.classList.add("animate__animated"));
testimony_cards.forEach((card) => card.classList.add("animate__animated"));
content.classList.add("animate__animated");

window.onload = appear;
window.onresize = appear;

function appear() {
  if (window.innerWidth < 1050) {
    // add the classes for desktop to mobile animation and remove the mobile to desktop classes
    content.classList.remove("animate__fadeInRight");
    content.classList.add("animate__fadeIn");

    rating_cards.forEach((card) => {
      card.classList.remove("animate__fadeInLeft");
      card.classList.add("animate__fadeInDown");
    });

    testimony_cards.forEach((card) => {
      card.classList.add("animate__fadeInDown");
      card.classList.remove("animate__bounceIn");
    });
  }

  if (window.innerWidth > 1050) {
    // remove the classes for desktop to mobile animation and add the mobile to desktop classes

    content.classList.add("animate__fadeInRight");
    content.classList.remove("animate__fadeIn");

    rating_cards.forEach((card) => {
      card.classList.add("animate__fadeInLeft");
      card.classList.remove("animate__fadeInDown");
    });

    testimony_cards.forEach((card) => {
      card.classList.remove("animate__fadeInDown");
      card.classList.add("animate__bounceIn");
    });
  }
}
