// search overlay
const searchIcon = document.querySelector(".search");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearch = document.querySelector(".close-search");
searchIcon.addEventListener("click", () => {
  searchOverlay.style.top = "0%";
  document.body.style.overflow = "hidden";

  closeSearch.addEventListener("click", () => {
    searchOverlay.style.top = "-100%";
    document.body.style.overflow = "auto";
  });

  searchOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("search-overlay")) {
      searchOverlay.style.top = "-100%";
      document.body.style.overflow = "auto";
    }
  });
});
// sticky navbar
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// scroll between the sections
const allNavLi = document.querySelectorAll(".nav-item");
const burgerMenu = document.querySelector(".collapse");

allNavLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    const targetSection = document.getElementById(e.target.dataset.section);
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    burgerMenu.classList.remove("show");
  });
});

// filter out work
const allWorkLi = document.querySelectorAll(".filter-option li");
const allImgWork = document.querySelectorAll(".box-work");

allWorkLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    removeActive(allWorkLi);
    e.target.classList.add("active");
    // hidden all images
    allImgWork.forEach((img) => {
      img.style.visibility = "hidden";
      document.querySelectorAll(e.target.dataset.cat).forEach((ele) => {
        ele.style.visibility = "visible";
      });
    });
  });
});

// remove active class
removeActive = (element) => {
  element.forEach((li) => {
    li.classList.remove("active");
  });
};

// view the image work
let popupImage = document.querySelector(".popup-image");
let imageBox = document.querySelector(".image-box");
let image = document.querySelector(".target-image");
let closeBtn = document.querySelector(".close");

allImgWork.forEach((box) => {
  box.addEventListener("click", (e) => {
    popupImage.style.left = "0px";
    document.body.style.overflow = "hidden";

    image.src = box.children[0].src;
    image.alt = box.children[0].alt;

    closeBtn.addEventListener("click", () => {
      popupImage.style.left = "-200%";
      document.body.style.overflow = "auto";
    });

    popupImage.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup-image") ||
        e.target.classList.contains("image-box")
      ) {
        popupImage.style.left = "-200%";
        document.body.style.overflow = "auto";
      }
    });
  });
});
