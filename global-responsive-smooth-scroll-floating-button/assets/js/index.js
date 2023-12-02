const btnScrollToTop = document.querySelector(".btnScrollToTop");
const header = document.getElementById("header");

btnScrollToTop.addEventListener("click", function() { 
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}); 

window.addEventListener("scroll", () => { 
  if (window.scrollY > 100) { 
    btnScrollToTop.classList.add("active");
    if(window.scrollY > 3400) {
      btnScrollToTop.classList.add("stop");
    } else {
      btnScrollToTop.classList.remove("stop");
    }
  } else { 
    btnScrollToTop.classList.remove("active"); 
  }
  if (window.scrollY > 160) {
    header.classList.add("header-top");
  } else {
    header.classList.remove("header-top");
  }
});

// Smooth scroll function
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const headerHeight = 90;
      const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-lists a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = link.getAttribute('href');
            smoothScroll(targetSection);
        });
    });
});

const sideBar = document.querySelector('.sidebar');
const hamBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

hamBtn.addEventListener("click", function() {
  sideBar.classList.toggle('show');
});

closeBtn.addEventListener("click", function() {
  sideBar.classList.remove('show');
})