"use strict";
const banners = document.querySelectorAll('.slidebanner > [class^="img-d"]');
const sideImgs = document.querySelectorAll(
  '.slidebanner > [class^="side-img"]',
);

let current = 0;
const total = banners.length;

function showSlide(index) {
  banners.forEach((banner, i) => {
    banner.style.display = i === index ? "block" : "none";
  });
  sideImgs.forEach((side, i) => {
    side.style.display = i === index ? "grid" : "none";
  });
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

banners.forEach((banner) => {
  const rightBtn = banner.querySelector(".right");
  const leftBtn = banner.querySelector(".left");

  if (rightBtn) rightBtn.onclick = nextSlide;
  if (leftBtn) leftBtn.onclick = prevSlide;
});

showSlide(current);
