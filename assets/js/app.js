function isMobile() {
  return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
}

document.documentElement.style.cursor = 'none';

// gsap cursor

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
  yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX);
  yToCursor(e.clientY);
});

// loading

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const loading = document.querySelector(".loading");

window.addEventListener('load', function () {
  sleep(1).then(() => {

    if (isMobile()) {
      loading.classList.add('hidden-mobile');
    } else {
      loading.classList.add('hidden');
    }
    setTimeout(() => {
      loading.style.display = 'none';
    }, 3400);
  });
});