


function scrollToSection(sectionId) {
  var targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

