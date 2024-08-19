function showContent(contentId) {
  var educationBtn = document.getElementById('educationBtn');
  var experienceBtn = document.getElementById('experienceBtn');
  var educationContent = document.getElementById('education');
  var experienceContent = document.getElementById('experience');

  if (contentId === 'education') {
      educationContent.classList.add('active');
      experienceContent.classList.remove('active');
      educationBtn.classList.add('active');
      experienceBtn.classList.remove('active');
  } else {
      educationContent.classList.remove('active');
      experienceContent.classList.add('active');
      educationBtn.classList.remove('active');
      experienceBtn.classList.add('active');
  }
}

// Инициализация с показом секции "Образование"
showContent('education');
