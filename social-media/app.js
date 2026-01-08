// LIVE TIME
function updateTime() {
  document.getElementById("liveTime").innerText =
    "Company Time: " + new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

/* ============================
   INFINITE BLOG SLIDER (3 POSTS)
   ============================ */

const track = document.querySelector(".slider-track");
const slides = Array.from(document.querySelectorAll(".blog-item"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1;
let slideWidth;

// Clone first & last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = Array.from(track.children);

function setSlideWidth() {
  slideWidth = allSlides[0].getBoundingClientRect().width + 20; // 20 = margin
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

window.addEventListener("resize", setSlideWidth);
setSlideWidth();

// Move slider
function moveToIndex() {
  track.style.transition = "transform 0.45s ease";
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

// Next / Prev buttons
nextBtn.onclick = () => {
  if (index >= allSlides.length - 1) return;
  index++;
  moveToIndex();
};

prevBtn.onclick = () => {
  if (index <= 0) return;
  index--;
  moveToIndex();
};

// Seamless loop reset
track.addEventListener("transitionend", () => {
  if (allSlides[index].classList.contains("clone")) {
    track.style.transition = "none";

    if (index === allSlides.length - 1) {
      index = 1;
    } else if (index === 0) {
      index = allSlides.length - 2;
    }

    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
});

// Auto-rotate forever
setInterval(() => {
  index++;
  moveToIndex();
}, 6000);

/* ============================
   CHAT BUTTON HANDLER
   ============================ */

const chatButton = document.getElementById("chatButton");
const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");

// Show popup when chat button is clicked
chatButton.addEventListener("click", () => {
  popupOverlay.classList.add("active");
});

// Close popup when close button is clicked
popupClose.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});

// Close popup when clicking outside the popup content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
    popupOverlay.classList.remove("active");
  }
});