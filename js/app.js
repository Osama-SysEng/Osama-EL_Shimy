// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language State & Switcher
  let currentLang = localStorage.getItem('osama_portfolio_lang') || 'ar';
  
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('osama_portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update active state in language buttons
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.innerHTML = lang === 'ar' 
        ? '<span class="font-bold">EN</span> | <span>العربية</span>' 
        : '<span class="font-bold">AR</span> | <span>English</span>';
    }

    // Translate DOM elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = translations[lang];
      for (const key of keyPath) {
        if (val) val = val[key];
      }
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Re-render assistant quick chips if present
    if (window.renderAssistantChips) {
      window.renderAssistantChips();
    }
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // 2. Theme State & Switcher (Dark / Light)
  let currentTheme = localStorage.getItem('osama_portfolio_theme') || 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('osama_portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? '<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>'
        : '<svg class="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>';
    }
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 3. Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // 4. Project Category Filtering
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-600', 'text-white'));
      btn.classList.add('active', 'bg-cyan-600', 'text-white');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 5. Contact Form Simulation & Clipboard Helpers
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sendBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = sendBtn.textContent;
      sendBtn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
      sendBtn.disabled = true;

      setTimeout(() => {
        sendBtn.textContent = originalText;
        sendBtn.disabled = false;
        contactForm.reset();
        showToast(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سيتواصل معك أسامة في أقرب وقت.' : 'Message sent successfully! Osama will reply shortly.');
      }, 1000);
    });
  }

  // Copy to clipboard helper
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(currentLang === 'ar' ? `تم نسخ ${label} إلى الحافظة!` : `${label} copied to clipboard!`);
    });
  };

  // 6. Interactive Project Modal
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalAward = document.getElementById('modal-award');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalGithub = document.getElementById('modal-github');

  window.openProjectModal = function(projectId) {
    const p = translations[currentLang].projects.items[projectId];
    if (!p || !projectModal) return;

    modalTitle.textContent = p.title;
    modalAward.textContent = p.award;
    modalDesc.textContent = p.desc;
    
    // Set appropriate image
    let imgSrc = 'assets/images/tabeeby.jpg';
    if (projectId === 'tabeeby') imgSrc = 'assets/images/tabeeby.jpg';
    else if (projectId === 'laeeb') imgSrc = 'assets/images/al-laeeb.jpg';
    else if (projectId === 'mawasilati') imgSrc = 'assets/images/mawasilati.jpg';
    else if (projectId === 'oss') imgSrc = 'assets/images/os-v1.jpg';
    else imgSrc = 'assets/images/awards-showcase.jpg';
    
    modalImage.src = imgSrc;
    modalImage.alt = p.title;

    // Tags
    modalTags.innerHTML = '';
    p.tags.forEach(t => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'text-xs bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-full px-3 py-1 font-mono';
      tagSpan.textContent = t;
      modalTags.appendChild(tagSpan);
    });

    modalGithub.href = `https://github.com/Osama-SysEng/${projectId}`;

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (modalCloseBtn && projectModal) {
    modalCloseBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // 7. Initial Setup Execution
  applyLanguage(currentLang);
  applyTheme(currentTheme);
});
