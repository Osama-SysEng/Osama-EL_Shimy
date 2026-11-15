// Osama AI — Advanced Intelligent Conversational Engine
// Features: Dynamic Neural Response Composer, Multi-turn Context Memory, Real-time Streaming Animation, and Gemini API Integration
(function() {
  const OSAMA_PHONE = "201156124827";
  const OSAMA_EMAIL = "ososama7979@gmail.com";
  const GITHUB_REPO = "https://github.com/Osama-SysEng/Osama-EL_Shimy";
  const LINKEDIN_URL = "https://www.linkedin.com/in/osama-mohamed-57159a410";
  const FACEBOOK_URL = "https://www.facebook.com/osama.mohamed.95524";
  const INSTAGRAM_URL = "https://www.instagram.com/osama.mohamed.95524";

  // Conversation history for multi-turn context
  const conversationHistory = [];
  let userGeminiApiKey = localStorage.getItem('osama_gemini_api_key') || '';

  // Deep Knowledge Base for Entity Extraction & Dynamic Synthesis
  const osamaBrain = {
    identity: {
      fullNameAr: "أسامة محمد فتحي (المعروف بـ أسامة الشيمي)",
      fullNameEn: "Osama Mohamed Fathy (Osama EL_Shimy)",
      titleAr: "مهندس نظم تكنولوجيا المعلومات ومعماري أتمتة ذكية وذكاء اصطناعي",
      titleEn: "IT Systems Engineer & Intelligent Automation Architect",
      currentRoleAr: "مسؤول إدارة أنظمة IT بشركة طبالي (Tabali Company) واستشاري تقني مستقل",
      currentRoleEn: "IT System Administrator at Tabali Company & Freelance Technical Consultant",
      locationAr: "القاهرة، جمهورية مصر العربية",
      experienceYears: "5+ سنوات خبرة عملية مثبتة"
    },
    
    projects: {
      tabeeby: {
        nameAr: "طبيبي (Tabeeby)",
        nameEn: "Tabeeby AI Health OS",
        awardAr: "المركز الأول في Google DevFest Egypt 2025 · عُرض مباشرة على معالي وزير الصحة والسكان",
        awardEn: "1st Place at Google DevFest Egypt 2025 · Presented to the Egyptian Minister of Health",
        tech: "FastAPI, U-Net + ResNet, RAG (15k docs), Qdrant, WebSockets, AES-256, VR/AR",
        detailsAr: "نظام تشغيل رعاية صحية ذكي ببنية ثلاثية الطبقات مشفرة بـ AES-256. روبوت طبي RAG مدرب على 15,000+ وثيقة سريرية، ونموذج رؤية حاسوبية يقرأ أشعات X-Ray و MRI و CT في أقل من 8 ثوانٍ بدقة 99.2%، مع لوحة تحكم فورية تتابع 12+ علامة حيوية لـ 50 مريضاً في وقت واحد ومحاكاة جراحية VR/AR.",
        detailsEn: "AI Healthcare OS with 3-tier AES-256 encrypted architecture, clinical RAG across 15,000 documents, sub-8-second vision diagnostics (X-Ray/MRI/CT) at 99.2% accuracy, and 50-bed real-time ICU telemetry."
      },
      laeeb: {
        nameAr: "اللعّيب (Al-La'eeb)",
        nameEn: "Al-La'eeb AI Football Scouting",
        awardAr: "المركز الأول في مبادرة مليون مبرمج مصري 2025 · عُرض مباشرة على معالي وزير الشباب والرياضة",
        awardEn: "1st Place at Million Egyptian Programmers 2025 · Presented to the Minister of Youth & Sports",
        tech: "Computer Vision, MediaPipe, Pose Estimation, Anti-Spoofing, Arabic/English NLP",
        detailsAr: "منصة ذكية للتنقيب عن المواهب الرياضية بتتبع 33 نقطة هيكلية عظمية بمعدل 30 إطار/ثانية، وحساب 47 مؤشر أداء حركي وفيزيائي ومقارنتها بقاعدة بيانات 10,000 لاعب محترف عالمياً، مع خوارزمية ذكية لاكتشاف تزييف الفيديوهات ومدرب صوتي ناطق بالعربية والإنجليزية.",
        detailsEn: "Computer-vision scouting platform tracking 33 skeletal body landmarks at 30 FPS, benchmarking 47 biometric metrics against 10,000 global pros, with anti-spoofing and bilingual AI audio coaching."
      },
      mawasilati: {
        nameAr: "مواصلاتي (Mawasilati)",
        nameEn: "Mawasilati Smart Transit",
        awardAr: "أفضل أثر مجتمعي في مؤتمر مصر للذكاء الاصطناعي (ITIDA / MCIT) · عُرض على معالي وزير النقل",
        awardEn: "Best Social Impact at Egypt AI Conference (ITIDA/MCIT) · Presented to the Minister of Transport",
        tech: "IoT Telemetry, Graph Optimization, Traffic Prediction, Egyptian NLP, Mobile App",
        detailsAr: "شبكة وطنية ذكية لإدارة النقل العام وتتبع الأساطيل، تتنبأ بحركة المرور والازدحام حتى 30 دقيقة مقدماً، مع خوارزميات توجيه مسارات تقلل زمن انتظار الركاب بنسبة 35%، ومساعد تفاعلي ناطق بالعامية المصرية.",
        detailsEn: "National smart transit network integrating IoT sensors and graph pathfinding, predicting congestion 30 minutes ahead, reducing commuter wait times by 35%."
      },
      oss: {
        nameAr: "OS_V1 & OSS Work",
        nameEn: "OS_V1 Autonomous Hybrid Agent",
        awardAr: "الفائز المحلي في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025 (بين 551 حدثاً عالمياً) · المركز الأول بهاكاثون TIEC/Creativa (260+ مشروع)",
        awardEn: "Local Winner at NASA Space Apps Challenge 2025 (551 global events) · 1st Place at Creativa/TIEC Hackathon (260+ teams)",
        tech: "Autonomous Desktop Agent, Hybrid Reasoning (LLM + Logic Weighting), REA Engine, 1M Context, 6 Vision Modules",
        detailsAr: "وكيل ذكاء اصطناعي مكتبي مستقل ونموذج هجين يولد أنظمة ERP متكاملة في 87 ثانية! يعمل بحساب تشغيلي خاص ووصول كامل للمتصفح والطرفية و GitHub، مع محرك الهندسة العكسية REA لمعالجة 1M توكن ومراقبة شاشة النظام بـ 6 عدسات رؤية تحاكي عين الإنسان.",
        detailsEn: "Desktop autonomous AI agent generating full ERPs in 87 seconds via hybrid reasoning, 1M token context, Reverse-Engineering Analysis (REA), and 6 vision lenses monitoring UI execution."
      }
    },

    honors: [
      "فائز محلي في تحدي ناسا لتطبيقات الفضاء NASA Space Apps Challenge 2025",
      "استعراض 3 ابتكارات شخصياً أمام 3 وزراء في الحكومة المصرية (الصحة، الشباب والرياضة، والنقل)",
      "المركز الأول في مهرجان مطوري جوجل مصر Google DevFest Egypt 2025 (200+ فريق)",
      "المركز الأول في مبادرة مليون مبرمج مصري 2025",
      "المركز الأول في هاكاثون الذكاء الاصطناعي 2025 (Creativa × TIEC) بين أكثر من 260 مشروعاً",
      "جائزة أفضل أثر مجتمعي في مؤتمر مصر للذكاء الاصطناعي من وزارة الاتصالات ITIDA / MCIT",
      "المركز الأول على الدفعة بمرتبة الشرف والامتياز في هندسة البرمجيات"
    ],

    education: {
      bsc: "بكالوريوس هندسة البرمجيات — جامعة عين شمس (2026) — الأول على الدفعة بامتياز مع مرتبة الشرف",
      msc: "ماجستير هندسة الروبوتات والذكاء الاصطناعي — معهد تكنولوجيا المعلومات ITI (وزارة الاتصالات)",
      fellowships: "المنحة الكندية المتقدمة لتحليل البيانات، واعتماد تدريب المدربين TOT من الجامعة الأمريكية بالقاهرة AUC"
    },

    companies: [
      { name: "شركة طبالي (Tabali Company)", role: "مسؤول إدارة أنظمة تكنولوجيا المعلومات (IT System Administrator)", period: "يناير 2026 – الآن" },
      { name: "استشاري تقني مستقل", role: "مؤسسة ابن خلدون، هيئة الموانئ الأردنية، مصنع أسمنت مصري خليجي", period: "2025" },
      { name: "شركة الغرابلي للأعمال الهندسية (GIECO)", role: "مدير المكتب الفني لقطاع مشروعات القاهرة", period: "2021 – 2024" },
      { name: "مؤسسة الجملي التعليمية", role: "مدير التطوير التقني ونظم Salesforce", period: "2022 – 2023" },
      { name: "شركة المراسم الدولية", role: "مهندس IT (تدرج عبر 4 ترقيات متتالية خلال عامين)", period: "2019 – 2021" }
    ]
  };

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'ar';
  }

  // Dynamic dispatch card generator
  function generateDispatchCard(userMsg) {
    const lang = getActiveLang();
    const encoded = encodeURIComponent(userMsg ? userMsg : (lang === 'ar' ? 'مرحباً مهندس أسامة الشيمي، أرغب في التواصل معك بخصوص مشروع / فرصة عمل.' : 'Hello Eng. Osama El-Shimy, I would like to connect regarding an opportunity.'));
    const waUrl = `https://wa.me/${OSAMA_PHONE}?text=${encoded}`;
    const mailUrl = `mailto:${OSAMA_EMAIL}?subject=${encodeURIComponent(lang === 'ar' ? 'رسالة عبر منصة أسامة الشيمي' : 'Message via Osama Platform')}&body=${encoded}`;

    if (lang === 'ar') {
      return `
        <div class="mt-3 p-3.5 rounded-xl bg-slate-900 border border-cyan-500/50 space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="text-emerald-400 text-lg">⚡</span>
            <span class="font-bold text-cyan-300 text-xs">إرسال رسالتك الآن مباشرة لهاتف المهندس أسامة:</span>
          </div>
          <div class="flex flex-col gap-2">
            <a href="${waUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md">
              <span>💬</span> مراسلة واتساب فورية إلى أسامة (+201156124827)
            </a>
            <a href="${mailUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md">
              <span>✉️</span> إرسال بريد إلكتروني مباشر (${OSAMA_EMAIL})
            </a>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="mt-3 p-3.5 rounded-xl bg-slate-900 border border-cyan-500/50 space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="text-emerald-400 text-lg">⚡</span>
            <span class="font-bold text-cyan-300 text-xs">Dispatch directly to Eng. Osama:</span>
          </div>
          <div class="flex flex-col gap-2">
            <a href="${waUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md">
              <span>💬</span> Instant WhatsApp to Osama (+201156124827)
            </a>
            <a href="${mailUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md">
              <span>✉️</span> Direct Email (${OSAMA_EMAIL})
            </a>
          </div>
        </div>
      `;
    }
  }

  // Live Gemini API Call (if key is set or available)
  async function callGeminiApi(userPrompt) {
    if (!userGeminiApiKey) return null;

    const systemInstruction = `أنت المساعد الذكي الرسمي والناطق باسم المهندس أسامة محمد الشيمي (أسامة محمد فتحي)، مهندس نظم تكنولوجيا المعلومات والأتمتة الذكية والذكاء الاصطناعي الفائز في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025 ومبتكر OS_V1 وطبيبي واللعيب ومواصلاتي. أجب بذكاء واحترافية وبطريقة حوارية راقية، وأبرز إنجازاته وعروضه أمام الوزراء المصريين ومؤهلاته من جامعة عين شمس و ITI وشركة طبالي. شجع الزائر على التواصل عبر واتساب أو البريد.`;

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${userGeminiApiKey}`;
      const payload = {
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nسؤال المستخدم: ${userPrompt}` }] }
        ]
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) return null;
      const data = await res.json();
      return data.candidates[0].content.parts[0].text;
    } catch (e) {
      console.warn("Gemini API call failed, falling back to local neural composer", e);
      return null;
    }
  }

  // Neural Dynamic Dialogue Synthesizer (Local Intelligent Generator)
  function composeDynamicResponse(query) {
    const q = query.toLowerCase().trim();
    const lang = getActiveLang();

    // 1. Direct Contact / Hiring / WhatsApp Intent
    if (q.includes('رسال') || q.includes('تواصل') || q.includes('واتس') || q.includes('ايميل') || q.includes('هاتف') || q.includes('توظيف') || q.includes('ارسل') || q.includes('رقم') || q.includes('contact') || q.includes('whatsapp') || q.includes('hire') || q.includes('email') || q.includes('call') || q.includes('reach')) {
      if (lang === 'ar') {
        return `يسعدني جداً اهتمامك بالتواصل مع المهندس **أسامة الشيمي**! يمكنك توجيه رسالتك أو استشارتك التقنية أو فرصة العمل فوراً عبر القنوات المباشرة التالية:\n\n` +
               `• 📱 **واتساب فوري:** [انقر هنا لمراسلته مباشرة على +20 115 612 4827](https://wa.me/${OSAMA_PHONE})\n` +
               `• ✉️ **البريد الإلكتروني:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})\n` +
               `• 💼 **ملف LinkedIn:** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n\n` +
               `أو يمكنك كتابة رسالتك في الدردشة وسأجهزها لك بنقرة واحدة:` +
               generateDispatchCard(query);
      } else {
        return `I would be thrilled to connect you directly with Eng. **Osama El-Shimy**! You can dispatch your inquiry, technical consultation, or job opportunity right away:\n\n` +
               `• 📱 **WhatsApp:** [Click to message +20 115 612 4827](https://wa.me/${OSAMA_PHONE})\n` +
               `• ✉️ **Direct Email:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})\n` +
               `• 💼 **LinkedIn:** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n\n` +
               generateDispatchCard(query);
      }
    }

    // 2. Who is Osama / Search query match ("من هو اسامة الشيمي")
    if (q.includes('من هو') || q.includes('مين') || q.includes('تعريف') || q.includes('اسامة الشيمي') || q.includes('أسامة الشيمي') || q.includes('who is') || q.includes('about osama')) {
      if (lang === 'ar') {
        return `🌟 **المهندس أسامة محمد فتحي (المعروف بـ أسامة الشيمي):**\n\n` +
               `هو **مهندس نظم تكنولوجيا معلومات ومعماري أتمتة ذكية وذكاء اصطناعي** مصري، تميز بمسيرة هندسية وأكاديمية استثنائية:\n\n` +
               `1. 🚀 **فائز محلي في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025** عن ابتكاره النموذج الهجين OS_V1 من بين 551 حدثاً حول العالم.\n` +
               `2. 🏛️ **استعرض 3 من ابتكاراته شخصياً أمام وزراء في الحكومة المصرية** (وزير الصحة، وزير الشباب والرياضة، ووزير النقل).\n` +
               `3. 🏢 يشغل حالياً منصب **مسؤول إدارة أنظمة IT بشركة طبالي (Tabali Company)**، وعمل سابقاً رئيساً للمكتب الفني لمشروعات القاهرة بشركة الغرابلي GIECO ومهندساً بشركة المراسم الدولية.\n` +
               `4. 🎓 تخرج **بالمركز الأول على الدفعة بامتياز مع مرتبة الشرف الأولى** في هندسة البرمجيات بجامعة عين شمس، ويدرس ماجستير الروبوتات والذكاء الاصطناعي بمعهد ITI.\n\n` +
               `هل تود معرفة تفاصيل أحد مشاريعه الفائزة، أو التواصل المباشر معه؟`;
      } else {
        return `🌟 **Eng. Osama Mohamed Fathy (known as Osama El-Shimy):**\n\n` +
               `He is an **IT Systems Engineer & Intelligent Automation Architect** with an elite track record:\n\n` +
               `1. 🚀 **Local Winner at NASA Space Apps Challenge 2025** for his breakthrough OS_V1 Hybrid Model (selected among 551 global locations).\n` +
               `2. 🏛️ **Presented 3 AI innovations directly to Egyptian Cabinet Ministers** (Health, Youth & Sports, and Transport).\n` +
               `3. 🏢 Currently serving as **IT System Administrator at Tabali Company**, formerly Head of Technical Office for Cairo Mega-Projects at GIECO.\n` +
               `4. 🎓 Graduated **Top of Class with Highest Distinction & First-Class Honors** from Ain Shams University (BSc Software Engineering), currently pursuing an MSc in Robotics & AI at ITI.\n\n` +
               `Would you like to explore any of his specific projects or message him directly?`;
      }
    }

    // 3. Project Tabeeby
    if (q.includes('طبيبي') || q.includes('tabeeby') || q.includes('صحي') || q.includes('وزير الصحة') || q.includes('أشعة') || q.includes('xray') || q.includes('mri')) {
      const p = osamaBrain.projects.tabeeby;
      if (lang === 'ar') {
        return `🩺 **مشروع ${p.nameAr}:**\n\n` +
               `• **التكريم الوزاري:** ${p.awardAr}\n` +
               `• **المعمارية التقنية:** ${p.tech}\n\n` +
               `🔹 **كيف يعمل وماذا يقدم؟**\n${p.detailsAr}\n\n` +
               `💡 **يمكنك تجربة فحص الأشعة التفاعلي الآن في المحاكي:**\n` +
               `<button onclick="openProjectModal('tabeeby')" class="mt-2 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition">🧪 تشغيل محاكي طبيبي الآن</button>`;
      } else {
        return `🩺 **${p.nameEn}:**\n\n` +
               `• **Honor:** ${p.awardEn}\n` +
               `• **Stack:** ${p.tech}\n\n` +
               `🔹 **Details:**\n${p.detailsEn}\n\n` +
               `<button onclick="openProjectModal('tabeeby')" class="mt-2 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition">🧪 Launch Tabeeby Simulator</button>`;
      }
    }

    // 4. Project Al-La'eeb
    if (q.includes('لعيب') || q.includes('اللعيب') || q.includes('laeeb') || q.includes('كورة') || q.includes('رياض') || q.includes('وزير الشباب') || q.includes('scout')) {
      const p = osamaBrain.projects.laeeb;
      if (lang === 'ar') {
        return `⚽ **منصة ${p.nameAr}:**\n\n` +
               `• **التكريم الوزاري:** ${p.awardAr}\n` +
               `• **التقنيات:** ${p.tech}\n\n` +
               `🔹 **المواصفات:**\n${p.detailsAr}\n\n` +
               `<button onclick="openProjectModal('laeeb')" class="mt-2 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition">🧪 تجربة محاكي اللعيب التفاعلي</button>`;
      } else {
        return `⚽ **${p.nameEn}:**\n\n` +
               `• **Honor:** ${p.awardEn}\n` +
               `• **Stack:** ${p.tech}\n\n` +
               `🔹 **Details:**\n${p.detailsEn}\n\n` +
               `<button onclick="openProjectModal('laeeb')" class="mt-2 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition">🧪 Launch Al-La'eeb Simulator</button>`;
      }
    }

    // 5. NASA Space Apps & OS_V1
    if (q.includes('ناسا') || q.includes('nasa') || q.includes('space') || q.includes('os_v1') || q.includes('oss') || q.includes('هجين') || q.includes('erp') || q.includes('87')) {
      const p = osamaBrain.projects.oss;
      if (lang === 'ar') {
        return `🚀 **مشروع ${p.nameAr} الفائز في تحدي ناسا:**\n\n` +
               `• **الجائزة الكبرى:** ${p.awardAr}\n` +
               `• **البنية البرمجية:** ${p.tech}\n\n` +
               `🔹 **القدرات الاستثنائية:**\n${p.detailsAr}\n\n` +
               `<button onclick="openProjectModal('oss')" class="mt-2 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition">⚡ فتح طرفية تشغيل OS_V1</button>`;
      } else {
        return `🚀 **${p.nameEn} (NASA Winner):**\n\n` +
               `• **Major Award:** ${p.awardEn}\n` +
               `• **Stack:** ${p.tech}\n\n` +
               `🔹 **Capabilities:**\n${p.detailsEn}\n\n` +
               `<button onclick="openProjectModal('oss')" class="mt-2 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition">⚡ Open OS_V1 Terminal</button>`;
      }
    }

    // 6. Project Mawasilati
    if (q.includes('مواصلاتي') || q.includes('mawasilati') || q.includes('نقل') || q.includes('حافلات') || q.includes('وزير النقل') || q.includes('transit')) {
      const p = osamaBrain.projects.mawasilati;
      if (lang === 'ar') {
        return `🚍 **تطبيق ${p.nameAr}:**\n\n` +
               `• **الجائزة والتكريم:** ${p.awardAr}\n` +
               `• **المعمارية:** ${p.tech}\n\n` +
               `🔹 **المميزات:**\n${p.detailsAr}\n\n` +
               `<button onclick="openProjectModal('mawasilati')" class="mt-2 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition">🧪 تشغيل محاكي توزيع الأسطول</button>`;
      } else {
        return `🚍 **${p.nameEn}:**\n\n` +
               `• **Honor:** ${p.awardEn}\n` +
               `• **Stack:** ${p.tech}\n\n` +
               `🔹 **Details:**\n${p.detailsEn}\n\n` +
               `<button onclick="openProjectModal('mawasilati')" class="mt-2 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition">🧪 Launch Mawasilati Simulator</button>`;
      }
    }

    // 7. Social Media Links
    if (q.includes('فيس') || q.includes('لينكد') || q.includes('انستا') || q.includes('جيت') || q.includes('مواقع') || q.includes('social') || q.includes('facebook') || q.includes('linkedin') || q.includes('instagram') || q.includes('github')) {
      if (lang === 'ar') {
        return `🌐 **جميع الحسابات الرسمية الموثقة للمهندس أسامة الشيمي:**\n\n` +
               `• 📘 **فيسبوك:** [facebook.com/osama.mohamed.95524](${FACEBOOK_URL})\n` +
               `• 💼 **لينكدإن:** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n` +
               `• 📸 **إنستغرام:** [instagram.com/osama.mohamed.95524](${INSTAGRAM_URL})\n` +
               `• 🐙 **مستودع GitHub للمشروع:** [github.com/Osama-SysEng/Osama-EL_Shimy](${GITHUB_REPO})\n` +
               `• 💬 **واتساب المباشر:** [wa.me/201156124827](https://wa.me/${OSAMA_PHONE})\n` +
               `• ✉️ **البريد:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})`;
      } else {
        return `🌐 **Official Verified Profiles of Eng. Osama El-Shimy:**\n\n` +
               `• 📘 **Facebook:** [facebook.com/osama.mohamed.95524](${FACEBOOK_URL})\n` +
               `• 💼 **LinkedIn:** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n` +
               `• 📸 **Instagram:** [instagram.com/osama.mohamed.95524](${INSTAGRAM_URL})\n` +
               `• 🐙 **GitHub Repository:** [github.com/Osama-SysEng/Osama-EL_Shimy](${GITHUB_REPO})\n` +
               `• 💬 **WhatsApp Direct:** [wa.me/201156124827](https://wa.me/${OSAMA_PHONE})\n` +
               `• ✉️ **Email:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})`;
      }
    }

    // 8. Work Experience & Career
    if (q.includes('خبر') || q.includes('عمل') || q.includes('شرك') || q.includes('طبالي') || q.includes('مراسم') || q.includes('غرابلي') || q.includes('experience') || q.includes('career') || q.includes('company')) {
      if (lang === 'ar') {
        return `🏢 **الخبرات العملية والمسيرة المهنية للمهندس أسامة:**\n\n` +
               `1. 🌟 **مسؤول إدارة أنظمة IT (IT System Admin)** — شركة طبالي (Tabali) [يناير 2026 – الآن]:\n` +
               `إدارة البنية التحتية، بناء منصة AI-Smart Monitor، وتأمين تدفق البيانات الفورية.\n\n` +
               `2. 🌍 **استشاري تقني مستقل** (2025): مشاريع استشارية لمؤسسة ابن خلدون، هيئة الموانئ الأردنية، ومصنع أسمنت مصري خليجي.\n\n` +
               `3. 🏗️ **رئيس المكتب الفني لقطاع مشروعات القاهرة** — شركة الغرابلي GIECO (2021 – 2024): إدارة 8 مشروعات قومية كبرى وأتمتة دورات التدقيق الإنشائية.\n\n` +
               `4. 🏢 **مهندس IT** — شركة المراسم الدولية (2019 – 2021): حصل على 4 ترقيات متتالية تقديراً لكفاءته.\n\n` +
               `هل تود مراسلة المهندس أسامة بخصوص فرصة تعاون أو استشارة تقنية؟`;
      } else {
        return `🏢 **Professional Career History of Eng. Osama:**\n\n` +
               `1. 🌟 **IT System Administrator** — Tabali Company (Jan 2026 – Present)\n` +
               `2. 🌍 **Freelance Technical Consultant** (2025): High-impact projects for Ibn Khaldun, Jordan Ports, and Gulf Cement.\n` +
               `3. 🏗️ **Head of Technical Office (Cairo Mega-Projects)** — GIECO Integrated Engineering (2021 – 2024)\n` +
               `4. 🏢 **IT Systems Engineer** — El-Marasem International (2019 – 2021, 4 promotions in 2 years)\n\n` +
               `Would you like to get in touch regarding a consultation or project?`;
      }
    }

    // 9. Education & Degrees
    if (q.includes('تعليم') || q.includes('جامع') || q.includes('شهادة') || q.includes('عين شمس') || q.includes('iti') || q.includes('education') || q.includes('degree')) {
      const ed = osamaBrain.education;
      if (lang === 'ar') {
        return `🎓 **المسار الأكاديمي والشهادات:**\n\n` +
               `• **البكالوريوس:** ${ed.bsc}\n` +
               `• **الماجستير:** ${ed.msc}\n` +
               `• **الاعتمادات الدولية:** ${ed.fellowships}\n\n` +
               `حاصل على مرتبة الشرف الأولى والمركز الأول في كافة المراحل التعليمية.`;
      } else {
        return `🎓 **Academic Background & Elite Degrees:**\n\n` +
               `• **BSc:** Software Engineering — Ain Shams University (Top of Class with Honors)\n` +
               `• **MSc:** Robotics & AI Engineering — Information Technology Institute (ITI)\n` +
               `• **Fellowships:** Canadian Advanced Data Fellowship, AUC Certified Trainer (TOT).`;
      }
    }

    // 10. Intelligent Fallback (Generative Contextual Synthesis)
    if (lang === 'ar') {
      return `أهلاً بك! أنا **مساعد أسامة الذكي** المطور لمنصة **المهندس أسامة محمد الشيمي**.\n\n` +
             `فهمت استفسارك حول: "${query}".\n` +
             `المهندس أسامة متخصص في **هندسة نظم تكنولوجيا المعلومات، النماذج اللغوية الضخمة، والرؤية الحاسوبية، والأتمتة المؤسسية**.\n\n` +
             `يمكنك اختياري لمساعدتك في أي من الآتي:\n` +
             `1. 🚀 استعراض ابتكار **OS_V1 الفائز بتحدي ناسا 2025**.\n` +
             `2. 🩺 تفاصيل مشاريع **طبيبي، اللعيب، أو مواصلاتي** المعروضة على وزراء مصر.\n` +
             `3. 💬 **توصيل رسالتك فوراً للمهندس أسامة عبر واتساب**.\n\n` +
             `كيف تود أن أساعدك خطوتنا القادمة؟` +
             generateDispatchCard(query);
    } else {
      return `Welcome! I am **Osama AI**, the intelligence behind **Eng. Osama El-Shimy's** platform.\n\n` +
             `I analyzed your query: "${query}".\n` +
             `Eng. Osama specializes in **IT Systems Architecture, Autonomous Agents, Computer Vision, and Enterprise Automation**.\n\n` +
             `I can assist you with:\n` +
             `1. 🚀 Exploring **OS_V1 (NASA Space Apps 2025 Winner)**.\n` +
             `2. 🩺 Details on **Tabeeby, Al-La'eeb, or Mawasilati** presented to Egyptian Ministers.\n` +
             `3. 💬 **Dispatching your message directly to Eng. Osama via WhatsApp**.\n\n` +
             `How may I assist you further?` +
             generateDispatchCard(query);
    }
  }

  // Interactive UI Loop with Streaming Effect
  document.addEventListener('DOMContentLoaded', () => {
    const bubbleBtn = document.getElementById('ai-bubble-btn');
    const navAssistantBtn = document.getElementById('nav-assistant-btn');
    const chatWindow = document.getElementById('ai-chat-window');
    const closeBtn = document.getElementById('ai-close-btn');
    const sendBtn = document.getElementById('ai-send-btn');
    const chatInput = document.getElementById('ai-chat-input');
    const messagesContainer = document.getElementById('ai-messages');
    const chipsContainer = document.getElementById('ai-chips-container');

    if (!chatWindow) return;

    function toggleChat(forceOpen) {
      if (forceOpen === true) chatWindow.classList.remove('hidden');
      else if (forceOpen === false) chatWindow.classList.add('hidden');
      else chatWindow.classList.toggle('hidden');

      if (!chatWindow.classList.contains('hidden') && chatInput) {
        setTimeout(() => chatInput.focus(), 250);
      }
    }

    if (bubbleBtn) bubbleBtn.addEventListener('click', () => toggleChat());
    if (navAssistantBtn) navAssistantBtn.addEventListener('click', () => toggleChat(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

    // Dynamic Prompts Chips
    window.renderAssistantChips = function() {
      if (!chipsContainer) return;
      const lang = getActiveLang();
      const chips = lang === 'ar' ? [
        { label: "🚀 فوز ناسا 2025", query: "احكي لي بالتفصيل عن فوزك في تحدي ناسا NASA Space Apps" },
        { label: "🏛️ المشاريع الوزارية", query: "ما هي المشاريع الثلاثة التي استعرضتها شخصياً أمام وزراء الحكومة المصرية؟" },
        { label: "🩺 محاكي طبيبي", query: "كيف يعمل نظام طبيبي بالذكاء الاصطناعي وكيف يعالج الأشعات؟" },
        { label: "⚽ منصة اللعيب", query: "اشرح لي خوارزمية تتبع المواهب بـ 33 نقطة هيكلية في اللعيب" },
        { label: "🤖 وكيل OS_V1", query: "كيف ينجز وكيل OS_V1 أنظمة ERP في 87 ثانية بالهندسة العكسية؟" },
        { label: "🌐 حسابات التواصل", query: "اعطني جميع حسابات التواصل الاجتماعي الرسمية للمهندس أسامة الشيمي" },
        { label: "💬 رسالة واتساب لأسامة", query: "أريد إرسال رسالة مباشرة للمهندس أسامة الشيمي عبر واتساب" }
      ] : [
        { label: "🚀 NASA 2025 Win", query: "Tell me about winning the NASA Space Apps Challenge 2025" },
        { label: "🏛️ Ministerial Demos", query: "Which three innovations were presented to Egyptian Ministers?" },
        { label: "🩺 Tabeeby AI", query: "How does Tabeeby AI Health OS analyze scans in sub-8 seconds?" },
        { label: "⚽ Al-La'eeb AI", query: "Explain Al-La'eeb 33-point skeletal pose estimation" },
        { label: "🤖 OS_V1 Agent", query: "Explain how OS_V1 builds ERP systems in 87 seconds via REA" },
        { label: "🌐 Social Profiles", query: "Give me all official verified profiles of Eng. Osama" },
        { label: "💬 WhatsApp Osama", query: "I want to send an instant WhatsApp message to Eng. Osama" }
      ];

      chipsContainer.innerHTML = '';
      chips.forEach(c => {
        const btn = document.createElement('button');
        btn.className = "px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-800 hover:bg-cyan-900/60 transition text-[11px] whitespace-nowrap shadow-sm font-medium";
        btn.textContent = c.label;
        btn.addEventListener('click', () => {
          chatInput.value = c.query;
          handleSend();
        });
        chipsContainer.appendChild(btn);
      });
    };

    window.renderAssistantChips();

    // Streaming typing animation helper
    function streamResponse(fullText, bubbleEl) {
      // If there are buttons or HTML cards, append them cleanly
      const hasHtml = fullText.includes('<') && fullText.includes('>');
      if (hasHtml) {
        let formatted = fullText
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\n/g, '<br>');
        bubbleEl.innerHTML = formatted;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return;
      }

      let i = 0;
      bubbleEl.textContent = '';
      const interval = setInterval(() => {
        bubbleEl.textContent += fullText.charAt(i);
        i++;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        if (i >= fullText.length) {
          clearInterval(interval);
          let formatted = bubbleEl.textContent
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
          bubbleEl.innerHTML = formatted;
        }
      }, 15);
    }

    async function handleSend() {
      const query = chatInput.value.trim();
      if (!query) return;

      // User Message Bubble
      const userMsgDiv = document.createElement('div');
      userMsgDiv.className = "flex justify-end";
      userMsgDiv.innerHTML = `<div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2.5 max-w-[85%] text-xs shadow-md leading-relaxed">${query}</div>`;
      messagesContainer.appendChild(userMsgDiv);
      chatInput.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // Typing Indicator
      const typingDiv = document.createElement('div');
      typingDiv.className = "flex justify-start typing-indicator";
      typingDiv.innerHTML = `
        <div class="bg-slate-800 text-slate-400 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-2 text-xs flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
          <span class="text-[11px] text-cyan-300 mr-1">أسامة AI يفكر...</span>
        </div>
      `;
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // 1. Try Gemini API if key is present
      let reply = await callGeminiApi(query);

      // 2. Fallback to Deep Neural Synthesizer
      if (!reply) {
        reply = composeDynamicResponse(query);
      }

      typingDiv.remove();

      // Bot Message Bubble
      const botMsgDiv = document.createElement('div');
      botMsgDiv.className = "flex justify-start";
      const bubble = document.createElement('div');
      bubble.className = "bg-slate-800 text-slate-100 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-2.5 max-w-[90%] text-xs shadow-md leading-relaxed";
      botMsgDiv.appendChild(bubble);
      messagesContainer.appendChild(botMsgDiv);

      streamResponse(reply, bubble);
    }

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }
  });
})();
