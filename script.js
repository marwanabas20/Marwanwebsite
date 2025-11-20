// زر Hire Me بينقلك لقسم التواصل
document.getElementById('hireBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  // تأثير ظهور العناصر عند النزول
  const fadeEls = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
              entry.target.classList.add('show');
                  }
                    });
                    });

                    fadeEls.forEach(el => observer.observe(el));