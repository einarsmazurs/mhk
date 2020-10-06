const testimonialSlides = document.querySelectorAll(
  ".slider__testimonial--slide"
);
const prev = document.querySelector(".slider-arrow__left");
const next = document.querySelector(".slider-arrow__right");
const testimonialSlidesLength = testimonialSlides.length;

const prevSlide = () => {
	const current = document.querySelector(".current");
	current.classList.remove("current");
	if (current.previousElementSibling) {
		current.previousElementSibling.classList.add("current");
	} else {
    testimonialSlides[testimonialSlidesLength - 1].classList.add("current");
	}
};

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    testimonialSlides[0].classList.add("current");
  }
};

prev.addEventListener("click", (e) => {
  prevSlide();
});

next.addEventListener("click", (e) => {
  nextSlide();
});
