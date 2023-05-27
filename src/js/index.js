const modalContainer = document.getElementById("modalContainer");
const modalOverlay = document.getElementById("modalOverlay");
const modalButton = document.getElementById("modalButton");
const closeModalX = document.getElementById("closeModalX");
const closeModal = document.getElementById("closeModal");
const scrollElements = document.querySelectorAll(".scroll-in");

modalButton.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
});

closeModalX.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalContainer.classList.add("hidden");
  }
});

const elementInViewport = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInViewport(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

// const updateOpacity = () => {
//   scrollElements.forEach((el) => {
//     const elementTop = el.getBoundingClientRect().top;
//     const windowHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const opacity = (windowHeight - elementTop) / windowHeight;
//     el.style.opacity = opacity;
//   });
// };

const updateOpacity = () => {
  scrollElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const scrollPosition = (windowHeight - elementTop) / windowHeight;
    el.style.opacity = scrollPosition >= 0 ? scrollPosition : 0;
  });
};

// let throttleTimer;
let isScrolling = false;

// const throttle = (callback, time) => {
//   if (throttleTimer) return;

//   throttleTimer = true;
//   setTimeout(() => {
//     callback();
//     throttleTimer = false;
//   }, time);
// };

const throttle = (callback, time) => {
  if (isScrolling) return;

  isScrolling = true;
  setTimeout(() => {
    callback();
    isScrolling = false;
  }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(() => {
      handleScrollAnimation();
      updateOpacity();
    }, 250);
  }
});
