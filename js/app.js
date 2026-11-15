// Main Application Logic & Interactive Simulators
document.addEventListener('DOMContentLoaded', () => {
  const OSAMA_PHONE = "201156124827";
  const OSAMA_EMAIL = "ososama7979@gmail.com";

  // 1. Language State & Switcher
  let currentLang = localStorage.getItem('osama_portfolio_lang') || 'ar';
  
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('osama_portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.innerHTML = lang === 'ar' 
        ? '<span class="font-bold">EN</span> | <span>العربية</span>' 
        : '<span class="font-bold">AR</span> | <span>English</span>';
    }

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
        : '<svg class="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>';
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
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 5. Gallery Filter
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-600', 'text-white'));
      btn.classList.add('active', 'bg-cyan-600', 'text-white');

      const filter = btn.getAttribute('data-filter');
      galleryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 6. Gallery Lightbox
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  window.openLightbox = function(src, caption) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (lightboxCloseBtn && lightboxModal) {
    lightboxCloseBtn.addEventListener('click', () => {
      lightboxModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // 7. Multi-Channel Contact Form Dispatch
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const channelEl = document.querySelector('input[name="dispatch-channel"]:checked');
      const selectedChannel = channelEl ? channelEl.value : 'whatsapp';

      const lang = currentLang;
      const formattedMessage = lang === 'ar'
        ? `*رسالة جديدة عبر منصة Osama:*\n` +
          `👤 *الاسم:* ${name}\n` +
          `📧 *البريد:* ${email}\n` +
          `📱 *الهاتف:* ${phone || 'غير محدد'}\n` +
          `📌 *الموضوع:* ${subject}\n\n` +
          `💬 *الرسالة:*\n${message}`
        : `*New Inquiry via Osama Platform:*\n` +
          `👤 *Name:* ${name}\n` +
          `📧 *Email:* ${email}\n` +
          `📱 *Phone:* ${phone || 'N/A'}\n` +
          `📌 *Subject:* ${subject}\n\n` +
          `💬 *Message:*\n${message}`;

      const encodedMsg = encodeURIComponent(formattedMessage);

      if (selectedChannel === 'whatsapp') {
        window.open(`https://wa.me/${OSAMA_PHONE}?text=${encodedMsg}`, '_blank');
        showToast(lang === 'ar' ? 'جاري فتح واتساب لإرسال رسالتك مباشرة لأسامة...' : 'Opening WhatsApp to send your message to Osama...');
      } else if (selectedChannel === 'email') {
        const mailtoUrl = `mailto:${OSAMA_EMAIL}?subject=${encodeURIComponent(subject + ' - منصة Osama')}&body=${encodedMsg}`;
        window.location.href = mailtoUrl;
        showToast(lang === 'ar' ? 'جاري فتح تطبيق البريد لإرسال رسالتك...' : 'Opening email client...');
      } else if (selectedChannel === 'phone') {
        window.location.href = `tel:+${OSAMA_PHONE}`;
      }

      contactForm.reset();
    });
  }

  // Toast Notification Helper
  function showToast(msg) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 4000);
  }

  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(currentLang === 'ar' ? `تم نسخ ${label} بنجاح!` : `Copied ${label} to clipboard!`);
    });
  };

  // 8. Interactive Project Modal with Architecture Pipeline & Live Simulators
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalAward = document.getElementById('modal-award');
  const modalDesc = document.getElementById('modal-desc');
  const modalImage = document.getElementById('modal-image');
  const modalTags = document.getElementById('modal-tags');
  const modalGithub = document.getElementById('modal-github');
  const modalPipelineContainer = document.getElementById('modal-pipeline-container');
  const modalSimulatorContainer = document.getElementById('modal-simulator-container');

  // Architecture pipelines definitions
  const architecturePipelines = {
    tabeeby: {
      ar: [
        { step: "1. إدخال الأشعة والعلامات الحيوية", desc: "رفع صور X-Ray/CT/MRI أو تدفق فوري لإشارات 12 علامة حيوية من حساسات المريض." },
        { step: "2. المعالجة بـ U-Net + ResNet & RAG", desc: "تجزئة الأنسجة المصابة ونموذج استرجاع المعلومات RAG عبر 15,000 مستند سريري." },
        { step: "3. القرار والتشخيص التفاعلي", desc: "توليد تقرير تشخيصي فوري في 8 ثوانٍ ومحاكاة جراحية بـ VR/AR وتنبيه طبي للطبيب." }
      ],
      en: [
        { step: "1. Vitals & Scans Ingestion", desc: "Direct DICOM/X-Ray/MRI upload and real-time streaming of 12 vital parameters." },
        { step: "2. U-Net + ResNet & RAG Inference", desc: "Deep tissue segmentation and RAG clinical queries across 15,000 medical guidelines." },
        { step: "3. Real-Time Actionable Diagnostics", desc: "Sub-8-second structured medical report, VR/AR 3D surgical view, and alerts." }
      ]
    },
    laeeb: {
      ar: [
        { step: "1. تصوير الفيديو ومطابقة الهيكل", desc: "التقاط حركة اللاعب بالفيديو واستخراج 33 نقطة هيكلية عظمية بمعدل 30fps." },
        { step: "2. حساب المؤشرات الحركية والفيزيائية", desc: "تحليل 47 مؤشر أداء ومقارنتها بقاعدة بيانات 10,000 لاعب عالمي مع حماية التزييف." },
        { step: "3. توجيه المدرب الذكي والتقييم", desc: "إنتاج تقرير أداء راداري متكامل وتقديم توجيه صوتي بالعامية والإنجليزية لتحسين الأداء." }
      ],
      en: [
        { step: "1. Video & Pose Keypoint Capture", desc: "Real-time 30fps video feed tracking 33 skeletal body landmark coordinates." },
        { step: "2. Biomechanical Analytics & Comparison", desc: "Computes 47 motion metrics benchmarked against 10,000 global pro players." },
        { step: "3. Radar Talent Score & AI Coaching", desc: "Instant radar skill rating, anti-spoofing score, and bilingual audio advice." }
      ]
    },
    mawasilati: {
      ar: [
        { step: "1. تدفق بيانات GPS والاستشعار الحركي", desc: "استقبال مواقع الحافلات وحساسات الوزن وكاميرات محطات النقل لحظياً." },
        { step: "2. خوارزميات التنبؤ والمسارات الذكية", desc: "توقع الكثافة والاختناقات المرورية قبل 30 دقيقة وإعادة توجيه الأساطيل تلقائياً." },
        { step: "3. تجربة الركاب والمساعد الصوتي", desc: "خرائط وصول دقيقة بالثانية، مسارات محسوبة، وتذاكر إلكترونية موحدة." }
      ],
      en: [
        { step: "1. Fleet GPS & Telemetry Streaming", desc: "Ingesting live GPS coordinates, axle weight sensors, and station camera streams." },
        { step: "2. Graph Algorithms & Congestion AI", desc: "Predicts traffic congestion 30 minutes in advance and dynamically reroutes buses." },
        { step: "3. Commuter Guidance & Transit Pass", desc: "Sub-minute ETAs, Egyptian dialect transit assistant, and unified payment." }
      ]
    },
    oss: {
      ar: [
        { step: "1. استيعاب المتطلبات والهندسة العكسية", desc: "تحليل مستندات العمل وقواعد البيانات عبر محرك الهندسة العكسية REA." },
        { step: "2. التفكير الهجين والتوليد الذاتي", desc: "توزيع مهام البناء بين نموذج لغوي ومحرك ترجيح قرارات يولد نظام ERP في 87 ثانية." },
        { step: "3. التشغيل الذاتي والمراقبة البصرية", desc: "تنفيذ الأوامر، فحص الكود واختباره عبر 6 عدسات رؤية تحاكي عين المطور البشري." }
      ],
      en: [
        { step: "1. Requirements Ingestion & REA", desc: "Disassembles business specs and schemas via Reverse-Engineering Analysis (REA)." },
        { step: "2. Hybrid Reasoning & ERP Generation", desc: "Pairs LLM context with discrete decision weighting to build full ERPs in 87s." },
        { step: "3. Autonomous Execution & Vision Testing", desc: "Executes OS terminal, browses docs, and validates UI with 6 vision modules." }
      ]
    }
  };

  window.openProjectModal = function(projectId) {
    const lang = currentLang;
    const p = translations[lang].projects.items[projectId];
    if (!p || !projectModal) return;

    modalTitle.textContent = p.title;
    modalAward.textContent = p.award;
    modalDesc.textContent = p.desc;
    
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

    // Render Architecture Pipeline
    if (modalPipelineContainer) {
      modalPipelineContainer.innerHTML = '';
      const pipelineData = architecturePipelines[projectId];
      if (pipelineData) {
        const steps = pipelineData[lang];
        let pipelineHtml = `
          <div class="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80">
            <h4 class="text-xs font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span>⚙️</span>
              <span>${lang === 'ar' ? 'كيف يعمل المشروع (معمارية خطوة بخطوة):' : 'How It Works (Step-by-Step Architecture):'}</span>
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        `;
        steps.forEach(s => {
          pipelineHtml += `
            <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span class="text-xs font-bold text-white block">${s.step}</span>
              <p class="text-[11px] text-slate-400 leading-relaxed">${s.desc}</p>
            </div>
          `;
        });
        pipelineHtml += `</div></div>`;
        modalPipelineContainer.innerHTML = pipelineHtml;
      }
    }

    // Render Live Interactive Simulator
    if (modalSimulatorContainer) {
      modalSimulatorContainer.innerHTML = '';
      renderProjectSimulator(projectId, lang);
    }

    modalGithub.href = `https://github.com/Osama-SysEng/${projectId}`;

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  // Helper to render interactive sandbox simulator per project
  function renderProjectSimulator(projectId, lang) {
    if (!modalSimulatorContainer) return;

    if (projectId === 'tabeeby') {
      modalSimulatorContainer.innerHTML = `
        <div class="mt-4 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-cyan-300">🧪 محاكي فحص الأشعة الطبية التفاعلي (Tabeeby AI Scanner)</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">U-Net v4.2 Online</span>
          </div>
          <p class="text-xs text-slate-300">اختر نوع الأشعة واضغط على زر الفحص لتشغيل النموذج وعرض التحليل في الوقت الفعلي:</p>
          <div class="flex flex-wrap gap-2">
            <button onclick="runTabeebySim('Chest X-Ray')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-900 text-xs text-slate-200 border border-slate-700 transition">فحص أشعة الصدر (X-Ray)</button>
            <button onclick="runTabeebySim('Brain MRI')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-900 text-xs text-slate-200 border border-slate-700 transition">فحص رنين الدماغ (MRI)</button>
            <button onclick="runTabeebySim('Lung CT Scan')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-900 text-xs text-slate-200 border border-slate-700 transition">فحص مقطعية الرئة (CT)</button>
          </div>
          <div id="tabeeby-sim-output" class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono min-h-[70px] flex items-center justify-center">
            اضغط على أحد أزرار الفحص لتشغيل المحاكي...
          </div>
        </div>
      `;
    } else if (projectId === 'laeeb') {
      modalSimulatorContainer.innerHTML = `
        <div class="mt-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-emerald-300">⚽ محاكي تقييم المواهب الكروية (Al-La'eeb Pose Tracker)</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">30 FPS Stream</span>
          </div>
          <p class="text-xs text-slate-300">اختر مهارة اللاعب لتشغيل تتبع 33 نقطة هيكلية عظمية وحساب تقرير الأداء:</p>
          <div class="flex flex-wrap gap-2">
            <button onclick="runLaeebSim('دقة التسديد والانحناء')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-900 text-xs text-slate-200 border border-slate-700 transition">تحليل التسديد والانحناء</button>
            <button onclick="runLaeebSim('المراوغة وتغيير الاتجاه')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-900 text-xs text-slate-200 border border-slate-700 transition">تحليل المراوغة والسرعة</button>
            <button onclick="runLaeebSim('التمركز والوعي المكاني')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-900 text-xs text-slate-200 border border-slate-700 transition">تحليل التمركز الميداني</button>
          </div>
          <div id="laeeb-sim-output" class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono min-h-[70px] flex items-center justify-center">
            اختر مهارة لبدء التتبع الهيكلي وحساب تقرير الرادار...
          </div>
        </div>
      `;
    } else if (projectId === 'oss') {
      modalSimulatorContainer.innerHTML = `
        <div class="mt-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-purple-300">🤖 طرفية تشغيل الوكيل المكتبي OS_V1 Autonomous Terminal</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">NASA Winner Spec</span>
          </div>
          <p class="text-xs text-slate-300">اختر أمر التوليد وشاهد الوكيل يبني النظام ذاتياً بالهندسة العكسية:</p>
          <div class="flex flex-wrap gap-2">
            <button onclick="runOssSim('erp-finance')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-900 text-xs text-slate-200 border border-slate-700 transition">بناء وحدة مالية ومحاسبية كاملة (87s)</button>
            <button onclick="runOssSim('reverse-db')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-900 text-xs text-slate-200 border border-slate-700 transition">الهندسة العكسية لمخطط قاعدة بيانات ضخمة</button>
            <button onclick="runOssSim('vision-audit')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-900 text-xs text-slate-200 border border-slate-700 transition">فحص الشاشة بصرياً وصيد الأخطاء البرمجية</button>
          </div>
          <div id="oss-sim-output" class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono min-h-[70px] flex items-center justify-center">
            اختر أمراً لتشغيل طرفية OS_V1 الفورية...
          </div>
        </div>
      `;
    } else if (projectId === 'mawasilati') {
      modalSimulatorContainer.innerHTML = `
        <div class="mt-4 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-amber-300">🚍 محاكي توزيع أساطيل النقل الذكي (Mawasilati Live Dispatch)</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Real-time IoT Active</span>
          </div>
          <p class="text-xs text-slate-300">اختر سيناريو حركة المرور لاختبار توجيه الحافلات الفوري:</p>
          <div class="flex flex-wrap gap-2">
            <button onclick="runMawasilatiSim('peak-hour')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-900 text-xs text-slate-200 border border-slate-700 transition">ذروة الصباح وتكدس المحطات (+35% سعة)</button>
            <button onclick="runMawasilatiSim('road-block')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-900 text-xs text-slate-200 border border-slate-700 transition">إغلاق طريق رئيسي وإعادة التوجيه التلقائي</button>
          </div>
          <div id="mawasilati-sim-output" class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono min-h-[70px] flex items-center justify-center">
            اختر سيناريو لتشغيل محاكي الأسطول...
          </div>
        </div>
      `;
    }
  }

  // Interactive Simulator Implementations
  window.runTabeebySim = function(scanType) {
    const out = document.getElementById('tabeeby-sim-output');
    if (!out) return;
    out.innerHTML = `<span class="text-cyan-400">⏳ جاري تحميل صورة ${scanType} وتشغيل طبقات U-Net + ResNet...</span>`;
    setTimeout(() => {
      out.innerHTML = `
        <div class="w-full text-right space-y-1">
          <p class="text-emerald-400 font-bold">✅ اكتمل الفحص الطبي خلال 4.2 ثانية (دقة المطابقة 99.4%):</p>
          <p class="text-slate-200">• نوع الفحص: ${scanType} · خوارزمية التجزئة: U-Net v4.2</p>
          <p class="text-slate-300">• التشخيص الأولي: لا توجد مؤشرات اعتلالية حرجة، كفاءة الأنسجة طبيعية 98%.</p>
          <p class="text-cyan-400">• تم توليد ملخص RAG وإرسال نسخة مشفرة AES-256 للملف الطبي للمريض.</p>
        </div>
      `;
    }, 900);
  };

  window.runLaeebSim = function(skillType) {
    const out = document.getElementById('laeeb-sim-output');
    if (!out) return;
    out.innerHTML = `<span class="text-emerald-400">⏳ جاري معالجة الفيديو واستخراج الـ 33 نقطة هيكلية لمقياس ${skillType}...</span>`;
    setTimeout(() => {
      out.innerHTML = `
        <div class="w-full text-right space-y-1">
          <p class="text-emerald-400 font-bold">✅ اكتمل تحليل الأداء الحركي (30 FPS Stream):</p>
          <p class="text-slate-200">• المهارة: ${skillType} · مقياس الرادار: 89/100 (شريحة المواهب الاستثنائية)</p>
          <p class="text-slate-300">• زاوية تسارع الجذع: 34.2° · سرعة انطلاق الكرة: 92 كم/س · موثوقية الفيديو: 100%</p>
          <p class="text-cyan-400">• توصية المدرب الذكي: زيادة توازن القدم اليسرى أثناء الدوران بمقدار 5°.</p>
        </div>
      `;
    }, 900);
  };

  window.runOssSim = function(command) {
    const out = document.getElementById('oss-sim-output');
    if (!out) return;
    out.innerHTML = `<span class="text-purple-400">⚡ OS_V1 Terminal: Executing prompt '${command}' across 6 vision lenses...</span>`;
    setTimeout(() => {
      out.innerHTML = `
        <div class="w-full text-left font-mono space-y-1" dir="ltr">
          <p class="text-emerald-400">[OS_V1 Engine] REA Analysis Complete (Time: 2.1s)</p>
          <p class="text-slate-300">> Generating microservices architecture (FastAPI + PostgreSQL)...</p>
          <p class="text-slate-300">> Auto-writing 18 CRUD endpoints & data validation schemas...</p>
          <p class="text-cyan-400">> 6 Vision Modules: Zero UI visual anomalies detected. ERP ready in 87 seconds!</p>
        </div>
      `;
    }, 1000);
  };

  window.runMawasilatiSim = function(scenario) {
    const out = document.getElementById('mawasilati-sim-output');
    if (!out) return;
    out.innerHTML = `<span class="text-amber-400">⏳ جاري تطبيق خوارزميات توجيه الركاب لسيناريو ${scenario}...</span>`;
    setTimeout(() => {
      out.innerHTML = `
        <div class="w-full text-right space-y-1">
          <p class="text-emerald-400 font-bold">✅ تم تحديث خطة المسارات الحية بنجاح:</p>
          <p class="text-slate-200">• خفض زمن انتظار الركاب بمقدار 8 دقائق · تحويل مسار 14 حافلة ديناميكياً</p>
          <p class="text-slate-300">• إرسال إشعارات فورية لـ 4,200 راكب عبر تطبيق مواصلاتي بالعامية المصرية.</p>
        </div>
      `;
    }, 900);
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

  // 9. Initial Setup Execution
  applyLanguage(currentLang);
  applyTheme(currentTheme);
});
