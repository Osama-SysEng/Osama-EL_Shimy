// Smart AI Assistant: "Osama AI" (مساعد أسامة الذكي)
(function() {
  const assistantKnowledge = {
    nasa: {
      ar: "🏆 فاز المهندس أسامة بلقب **الفائز المحلي (Local Winner)** في **تحدي ناسا لتطبيقات الفضاء NASA Space Apps Challenge 2025** عن مشروعه الاستثنائي **OSS Work والنموذج الهجين OS_V1**. تم اختياره من بين 551 حدثاً محلياً حول العالم! كما حصد المشروع المركز الأول في هاكاثون الذكاء الاصطناعي 2025 (Creativa × TIEC) متفوقاً على أكثر من 260 مشروعاً.",
      en: "🏆 Eng. Osama won the prestigious **Local Winner** title at the **NASA Space Apps Challenge 2025** for his breakthrough project **OSS Work and the OS_V1 Hybrid Model**, selected from 551 local events worldwide! The project also claimed 1st Place at the AI Hackathon 2025 (Creativa × TIEC) competing against 260+ elite projects."
    },
    ministers: {
      ar: "⭐ تم استعراض وعرض 3 مشاريع ابتكارية للمهندس أسامة شخصياً أمام وزراء الحكومة المصرية:\n\n1. **مشروع 'طبيبي Tabeeby'**: عُرض على **معالي وزير الصحة والسكان** بعد فوزه بالمركز الأول في Google DevFest Egypt 2025.\n2. **منصة 'اللعيب Al-La'eeb'**: عُرضت على **معالي وزير الشباب والرياضة** بعد فوزها بالمركز الأول في مبادرة مليون مبرمج مصري 2025.\n3. **تطبيق 'مواصلاتي Mawasilati'**: تم استعراضه أمام **معالي وزير النقل** بعد حصد جائزة أفضل أثر مجتمعي في مؤتمر مصر للذكاء الاصطناعي (ITIDA/MCIT).",
      en: "⭐ Three of Osama's AI innovations were presented directly to Egyptian Government Ministers:\n\n1. **Tabeeby (AI Healthcare OS)**: Presented to the **Minister of Health** after winning 1st Place at Google Developer Festival Egypt 2025.\n2. **Al-La'eeb (AI Football Scouting)**: Presented to the **Minister of Youth & Sports** after winning 1st Place in the Million Egyptian Programmers Initiative 2025.\n3. **Mawasilati (National Transport)**: Presented to the **Minister of Transport** after winning Best Social Impact at the Egypt AI Conference (ITIDA/MCIT)."
    },
    tabeeby: {
      ar: "🩺 **طبيبي (Tabeeby)** هو نظام تشغيل رعاية صحية ذكي ببنية ثلاثية الطبقات (مريض، طبيب، باحث) مشفرة بـ AES-256. يحتوي على:\n- روبوت طبي RAG مدرب على 15,000+ مستند.\n- نموذج رؤية حاسوبية (U-Net + ResNet) يحلل أشعات X-Ray و MRI و CT في أقل من 8 ثوانٍ.\n- لوحة تحكم فورية تتابع 12+ علامة حيوية لـ 50 مريضاً في وقت واحد مع محاكاة جراحية بتقنية الواقع المعزز/الافتراضي (VR/AR).",
      en: "🩺 **Tabeeby** is an AI Healthcare Operating System built with a three-tier architecture (patient/physician/researcher) and AES-256 encryption. Features:\n- RAG medical chatbot trained on 15,000+ clinical documents.\n- Computer-vision module (U-Net + ResNet) reading scans (X-Ray, MRI, CT) in under 8 seconds.\n- Real-time physician dashboard streaming 12+ vital signs across 50 concurrent patients with VR/AR surgical simulations."
    },
    os_v1: {
      ar: "🤖 **OS_V1 & OSS Work** هو وكيل ذكاء اصطناعي مكتبي مستقل ونموذج هجين (LLM + محرك وزن قرارات). أبرز مميزاته:\n- ينجز بناء أنظمة ERP كاملة في 87 ثانية!\n- يعمل بحساب مستخدم مستقل مع وصول كامل للمتصفح و GitHub.\n- يتعلم من الأنظمة القائمة عبر الهندسة العكسية (REA).\n- يدعم مدخلات ومخرجات تصل إلى 1 مليون توكن.\n- مزود بـ 6 وحدات رؤية تحاكي العين البشرية لمراقبة الفيديو وصيد الأخطاء.",
      en: "🤖 **OS_V1 & OSS Work** is an autonomous desktop AI agent and hybrid model (LLM + decision-weighing engine). Key highlights:\n- Generates complete enterprise ERP systems in 87 seconds!\n- Operates machine via dedicated user account with full browser & GitHub access.\n- Learns from existing builds via Reverse-Engineering Analysis (REA).\n- Handles 1M-token inputs/outputs.\n- Powered by 6 vision modules simulating human eyes to watch video & catch errors."
    },
    skills: {
      ar: "💻 **ترسانة المهارات التقنية لأسامة:**\n- **لغات البرمجة:** Python, C#, Dart, SQL, R\n- **أطر العمل:** FastAPI, Flask, ASP.NET Core, Flutter\n- **الذكاء الاصطناعي:** Prompt Engineering, RAG (Qdrant + Ollama), Computer Vision (OpenCV, MediaPipe, U-Net, ResNet), LLMs (GPT-4o, Gemini, Claude)\n- **الأتمتة:** n8n, Multi-Agent Orchestration, Telegram Bot API, Webhooks\n- **السحابة والأنظمة:** Docker, GitHub Actions CI/CD, Private Cloud, Linux CLI, PostgreSQL, MySQL\n- **أنظمة الشركات:** SAP, Odoo ERP, Salesforce Development\n- **إنترنت الأشياء:** Arduino, Robotics, Sensors",
      en: "💻 **Osama's Technical Skills:**\n- **Languages:** Python, C#, Dart, SQL, R\n- **Frameworks:** FastAPI, Flask, ASP.NET Core, Flutter\n- **AI & LLM:** Prompt Engineering, RAG (Qdrant+Ollama), Computer Vision (OpenCV, MediaPipe, U-Net, ResNet), GPT-4o, Gemini, Claude\n- **Automation:** n8n, Multi-Agent Orchestration, Telegram Bot API, Webhooks\n- **Cloud & DevOps:** Docker, CI/CD, Private Cloud, Linux, PostgreSQL, MySQL\n- **Enterprise:** SAP Integration, Odoo ERP, Salesforce\n- **IoT & Hardware:** Arduino, Sensors, Robotics"
    },
    contact: {
      ar: "📬 **معلومات التواصل المباشرة مع أسامة:**\n- **البريد الإلكتروني:** [ososama7979@gmail.com](mailto:ososama7979@gmail.com)\n- **الهاتف / واتساب:** [+20 115 612 4827](tel:+201156124827)\n- **جيت هاب:** [github.com/Osama-SysEng](https://github.com/Osama-SysEng)\n- **لينكد إن:** [linkedin.com/in/osama-mohamed-57159a410](https://linkedin.com/in/osama-mohamed-57159a410)\n- **الموقع الحالي:** القاهرة، مصر (متاح للعمل عن بُعد ولعقود دولية).",
      en: "📬 **Direct Contact Details:**\n- **Email:** [ososama7979@gmail.com](mailto:ososama7979@gmail.com)\n- **Phone / WhatsApp:** [+20 115 612 4827](tel:+201156124827)\n- **GitHub:** [github.com/Osama-SysEng](https://github.com/Osama-SysEng)\n- **LinkedIn:** [linkedin.com/in/osama-mohamed-57159a410](https://linkedin.com/in/osama-mohamed-57159a410)\n- **Location:** Cairo, Egypt (Available for remote and international engagements)."
    },
    experience: {
      ar: "🏢 **المسيرة المهنية للمهندس أسامة:**\n- **مسؤول إدارة أنظمة تكنولوجيا المعلومات** في شركة طبالي (يناير 2026 – الآن).\n- **استشاري تقني ومهندس نظم مستقل** مع مؤسسة ابن خلدون، هيئة الموانئ الأردنية، ومصنع أسمنت مصري خليجي (2025).\n- **مدير المكتب الفني لقطاع مشروعات القاهرة** في شركة الغرابلي للأعمال الهندسية المتكاملة GIECO (2021 – 2024).\n- **مدير تطوير تقني** في مؤسسة الجملي التعليمية (2022 – 2023).\n- **مهندس IT** في شركة المراسم الدولية (2019 – 2021) وتدرج عبر 4 ترقيات في عامين.",
      en: "🏢 **Osama's Professional Experience:**\n- **IT System Administrator** at Tabali Company (Jan 2026 – Present).\n- **Freelance Technical Consultant** across Egypt, Jordan, and the Gulf (2025).\n- **Head of Technical Office (Cairo Projects)** at GIECO (2021 – 2024).\n- **Development Manager** at El-Gamaly Educational Foundation (2022 – 2023).\n- **IT Engineer** at El-Marasem International (2019 – 2021, 4 promotions in 2 years)."
    },
    education: {
      ar: "🎓 **التعليم والشهادات:**\n- **بكالوريوس هندسة البرمجيات** — جامعة عين شمس (2026).\n- **ماجستير هندسة الروبوتات والذكاء الاصطناعي** — معهد تكنولوجيا المعلومات ITI (قيد الدراسة).\n- **الأول على الدفعة بامتياز ومرتبة الشرف** في جميع المراحل الأكاديمية.\n- حاصل على شهادات في الذكاء الاصطناعي، وتحليل البيانات (المنحة الكندية)، و Python، و TOT من الجامعة الأمريكية AUC.",
      en: "🎓 **Education & Certifications:**\n- **BSc in Software Engineering** — Ain Shams University (2026).\n- **MSc in Robotics & AI Engineering** — Information Technology Institute (ITI) · In Progress.\n- **1st in Class with Distinction and Honors** across all academic stages.\n- Multiple credentials in AI, Data Analysis (Canadian Grant), Python, and TOT (AUC)."
    }
  };

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'ar';
  }

  function matchQuery(query) {
    const q = query.toLowerCase().trim();
    const lang = getActiveLang();

    if (q.includes('ناسا') || q.includes('space') || q.includes('nasa') || q.includes('apps') || q.includes('هاكاثون')) {
      return assistantKnowledge.nasa[lang];
    }
    if (q.includes('وزير') || q.includes('وزراء') || q.includes('حكوم') || q.includes('minister') || q.includes('government')) {
      return assistantKnowledge.ministers[lang];
    }
    if (q.includes('طبيبي') || q.includes('tabeeby') || q.includes('صحي') || q.includes('طب') || q.includes('health') || q.includes('مستشفى')) {
      return assistantKnowledge.tabeeby[lang];
    }
    if (q.includes('oss') || q.includes('os_v1') || q.includes('هجين') || q.includes('وكيل') || q.includes('agent') || q.includes('desktop')) {
      return assistantKnowledge.os_v1[lang];
    }
    if (q.includes('مهار') || q.includes('لغات') || q.includes('برمج') || q.includes('skill') || q.includes('stack') || q.includes('تقني')) {
      return assistantKnowledge.skills[lang];
    }
    if (q.includes('خبر') || q.includes('عمل') || q.includes('شرك') || q.includes('تجرب') || q.includes('experience') || q.includes('job') || q.includes('career')) {
      return assistantKnowledge.experience[lang];
    }
    if (q.includes('تواصل') || q.includes('ايميل') || q.includes('هاتف') || q.includes('توظيف') || q.includes('contact') || q.includes('hire') || q.includes('phone') || q.includes('email')) {
      return assistantKnowledge.contact[lang];
    }
    if (q.includes('تعليم') || q.includes('جامع') || q.includes('شهادات') || q.includes('عين شمس') || q.includes('iti') || q.includes('education') || q.includes('degree')) {
      return assistantKnowledge.education[lang];
    }

    // Default friendly answer
    if (lang === 'ar') {
      return `شكراً لسؤالك! أنا المساعد الذكي للمهندس أسامة محمد (الشيمي). يمكنني إفادتك بمعلومات تفصيلية عن:\n- مشاريعه الخمسة الفائزة بجوائز دولية ومحلية (مثل Tabeeby، Al-La'eeb، Mawasilati، و OS_V1).\n- فوزه في تحدي ناسا Space Apps 2025.\n- خبرته في إدارة الأنظمة والأتمتة السحابية والـ ERP.\n- كيفية التواصل والتعاون التقني معه.\n\nجرّب النقر على أحد الأسئلة المقترحة أعلاه!`;
    } else {
      return `Thank you for your question! I am Eng. Osama Mohamed (El-Shimy)'s AI Assistant. I can help you with:\n- His 5 award-winning AI projects (Tabeeby, Al-La'eeb, Mawasilati, and OS_V1).\n- His NASA Space Apps Challenge 2025 Local Winner title.\n- 5+ years of experience in Systems Administration, Cloud, and ERP integration.\n- Direct contact and hiring details.\n\nTry clicking one of the suggested prompts above!`;
    }
  }

  // Setup UI elements
  document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('ai-bubble-btn');
    const windowEl = document.getElementById('ai-chat-window');
    const closeBtn = document.getElementById('ai-close-btn');
    const sendBtn = document.getElementById('ai-send-btn');
    const input = document.getElementById('ai-chat-input');
    const messagesContainer = document.getElementById('ai-messages');
    const chipsContainer = document.getElementById('ai-chips-container');

    if (!bubble || !windowEl) return;

    // Toggle chat window
    function toggleChat() {
      windowEl.classList.toggle('hidden');
      if (!windowEl.classList.contains('hidden')) {
        input.focus();
      }
    }

    bubble.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Also support triggering from nav button
    const navAssistantBtn = document.getElementById('nav-assistant-btn');
    if (navAssistantBtn) {
      navAssistantBtn.addEventListener('click', (e) => {
        e.preventDefault();
        windowEl.classList.remove('hidden');
        input.focus();
      });
    }

    // Append Message helper
    function appendMessage(text, isUser = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `flex mb-3 ${isUser ? 'justify-end' : 'justify-start'}`;

      const bubbleEl = document.createElement('div');
      bubbleEl.className = isUser 
        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2.5 max-w-[85%] text-sm shadow-md'
        : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-2.5 max-w-[88%] text-sm shadow-md whitespace-pre-line';

      bubbleEl.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      msgDiv.appendChild(bubbleEl);
      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Typing simulation
    function simulateBotResponse(query) {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'flex mb-3 justify-start items-center text-xs text-cyan-400 gap-1';
      typingDiv.id = 'ai-typing-indicator';
      typingDiv.innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span><span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 0.2s"></span><span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 0.4s"></span>';
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      setTimeout(() => {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) indicator.remove();
        const response = matchQuery(query);
        appendMessage(response, false);
      }, 550);
    }

    // Handle user input
    function handleSend() {
      const query = input.value.trim();
      if (!query) return;

      appendMessage(query, true);
      input.value = '';
      simulateBotResponse(query);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    // Render Quick Prompt Chips
    window.renderAssistantChips = function() {
      if (!chipsContainer) return;
      const lang = getActiveLang();
      const prompts = translations[lang].assistant.quickPrompts;
      chipsContainer.innerHTML = '';

      prompts.forEach((promptText) => {
        const chip = document.createElement('button');
        chip.className = 'text-xs bg-slate-800/80 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/50 rounded-full px-3 py-1.5 transition whitespace-nowrap';
        chip.textContent = promptText;
        chip.addEventListener('click', () => {
          appendMessage(promptText, true);
          simulateBotResponse(promptText);
        });
        chipsContainer.appendChild(chip);
      });
    };

    window.renderAssistantChips();
  });
})();

