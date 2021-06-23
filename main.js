const testimony_cards = document.querySelectorAll(".testimonial");
const rating_cards = document.querySelectorAll(".rating__item");
const content = document.querySelector(".content");

rating_cards.forEach((card) => card.classList.add("animate__animated"));
testimony_cards.forEach((card) => card.classList.add("animate__animated"));
content.classList.add("animate__animated");

window.onresize = appear;

function appear() {
  if (window.innerWidth < 1050) {
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
