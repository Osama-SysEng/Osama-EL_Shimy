// Smart Context-Aware AI Assistant: "Osama AI" (مساعد أسامة الذكي)
(function() {
  const OSAMA_PHONE = "201156124827";
  const OSAMA_EMAIL = "ososama7979@gmail.com";
  const GITHUB_REPO = "https://github.com/Osama-SysEng/Osama-EL_Shimy";
  const LINKEDIN_URL = "https://www.linkedin.com/in/osama-mohamed-57159a410";
  const FACEBOOK_URL = "https://www.facebook.com/osama.mohamed.95524";
  const INSTAGRAM_URL = "https://www.instagram.com/osama.mohamed.95524";

  // Comprehensive Knowledge Graph covering all CV dimensions, projects, awards, and skills
  const knowledgeBase = {
    // 1. Projects Knowledge
    tabeeby: {
      keywords: ['طبيبي', 'tabeeby', 'tabeby', 'صحي', 'طبي', 'أشعة', 'health', 'medical', 'hospital', 'xray', 'mri', 'مستشفى'],
      ar: {
        title: "مشروع طبيبي (Tabeeby) — نظام تشغيل الرعاية الصحية الذكي",
        text: "🩺 **مشروع طبيبي (Tabeeby)** هو نظام تشغيل رعاية صحية ذكي متكامل ببنية ثلاثية الطبقات مشفرة بـ AES-256، تم تقديمه شخصياً أمام **معالي وزير الصحة والسكان** بعد فوزه بالمركز الأول في **Google DevFest Egypt 2025**.\n\n" +
              "🔹 **أبرز الإمكانيات التقنية:**\n" +
              "• روبوت RAG طبي مدرب على 15,000+ وثيقة سريرية.\n" +
              "• نموذج رؤية حاسوبية (U-Net + ResNet) يحلل أشعات X-Ray و MRI و CT في أقل من 8 ثوانٍ بدقة 99.2%.\n" +
              "• لوحة تحكم فورية تتابع 12+ علامة حيوية لـ 50 مريضاً في وقت واحد عبر WebSockets.\n" +
              "• محاكاة جراحية بتقنيات الواقع الافتراضي والمعزز (VR/AR).",
        actionBtn: { text: "🧪 تجربة محاكي طبيبي الآن", modalId: "tabeeby" }
      },
      en: {
        title: "Tabeeby — AI Healthcare Operating System",
        text: "🩺 **Tabeeby** is an enterprise AI Healthcare Operating System built with a secure 3-tier architecture (AES-256), personally presented to the **Egyptian Minister of Health** after winning 1st Place at **Google DevFest Egypt 2025**.\n\n" +
              "🔹 **Technical Highlights:**\n" +
              "• Clinical RAG chatbot trained on 15,000+ medical guidelines.\n" +
              "• Computer-Vision engine (U-Net + ResNet) analyzing X-Ray, MRI, and CT scans in under 8 seconds with 99.2% accuracy.\n" +
              "• Real-time physician telemetry streaming 12+ vital parameters across 50 simultaneous ICU beds.\n" +
              "• VR/AR interactive surgical simulation suite.",
        actionBtn: { text: "🧪 Launch Tabeeby Simulator", modalId: "tabeeby" }
      }
    },

    laeeb: {
      keywords: ['لعيب', 'اللعيب', 'laeeb', 'sports', 'football', 'رياض', 'كورة', 'لاعب', 'scout', 'شباب والرياضة'],
      ar: {
        title: "منصة اللعيّب (Al-La'eeb) — التنقيب الذكي عن المواهب الكروية",
        text: "⚽ **منصة اللعيّب (Al-La'eeb)** هي أول منصة مصرية ذكية للتنقيب عن المواهب الرياضية باستخدام الرؤية الحاسوبية، عُرضت أمام **معالي وزير الشباب والرياضة** بعد فوزها بالمركز الأول في **مبادرة مليون مبرمج مصري 2025**.\n\n" +
              "🔹 **المواصفات التقنية:**\n" +
              "• تتبع 33 نقطة هيكلية عظمية (Pose Estimation) في الوقت الفعلي بمعدل 30 إطار/ثانية.\n" +
              "• توليد 47 مؤشر أداء حركي وفيزيائي ومقارنتها تلقائياً مع قاعدة بيانات 10,000 لاعب محترف عالمياً.\n" +
              "• خوارزمية ذكية لاكتشاف التلاعب وتزييف مقاطع الفيديو (Anti-Spoofing).\n" +
              "• مدرب ذكاء اصطناعي تفاعلي ناطق بالعربية والإنجليزية يوجه اللاعبين لتمارين تصحيحية.",
        actionBtn: { text: "🧪 تجربة محاكي اللعيب", modalId: "laeeb" }
      },
      en: {
        title: "Al-La'eeb — AI Sports Scouting & Motion Tracking Platform",
        text: "⚽ **Al-La'eeb** is an AI-powered talent scouting platform using computer vision, presented directly to the **Egyptian Minister of Youth & Sports** after claiming 1st Place in the **Million Egyptian Programmers Initiative 2025**.\n\n" +
              "🔹 **Technical Specs:**\n" +
              "• Real-time 33-point skeletal pose estimation streaming at 30 FPS.\n" +
              "• Computes 47 biomechanical and physical metrics compared against 10,000 global pro players.\n" +
              "• Anti-spoofing video authenticity verification module.\n" +
              "• Bilingual AI voice coach guiding youth through personalized corrective drills.",
        actionBtn: { text: "🧪 Launch Al-La'eeb Simulator", modalId: "laeeb" }
      }
    },

    mawasilati: {
      keywords: ['مواصلاتي', 'mawasilati', 'نقل', 'مواصلات', 'حافلات', 'transit', 'transport', 'وزير النقل', 'bus', 'fleet'],
      ar: {
        title: "تطبيق مواصلاتي (Mawasilati) — النقل الذكي وإدارة الأساطيل",
        text: "🚍 **تطبيق مواصلاتي (Mawasilati)** هو شبكة وطنية ذكية لإدارة النقل العام والأساطيل في المدن الكبرى، تم استعراضه أمام **معالي وزير النقل** وحصد **جائزة أفضل أثر مجتمعي في مؤتمر مصر للذكاء الاصطناعي (ITIDA / MCIT)**.\n\n" +
              "🔹 **القدرات المتقدمة:**\n" +
              "• خوارزميات توجيه مسارات ديناميكية تقلل زمن الانتظار بنسبة 35%.\n" +
              "• تكامل فوري مع أجهزة الاستشعار عبر إنترنت الأشياء (IoT) ونظام تتبع GPS عالي الدقة.\n" +
              "• خرائط حرارية حية لكثافة الركاب وازدحام المحطات وتنبيهات أوتوماتيكية لإعادة توجيه الحافلات.\n" +
              "• نظام دفع إلكتروني متكامل وتطبيق موبايل تفاعلي وسلس.",
        actionBtn: { text: "🧪 تجربة محاكي مواصلاتي", modalId: "mawasilati" }
      },
      en: {
        title: "Mawasilati — Smart Transit & Fleet Management",
        text: "🚍 **Mawasilati** is an intelligent public transit routing and fleet management network, presented to the **Egyptian Minister of Transport** and awarded **Best Social Impact at Egypt AI Conference (ITIDA / MCIT)**.\n\n" +
              "🔹 **Key Features:**\n" +
              "• Dynamic pathfinding reducing average commuter wait times by 35%.\n" +
              "• Deep IoT & GPS telemetry tracking transit vehicles with sub-second latency.\n" +
              "• Real-time passenger density heatmaps and automated surge dispatching.\n" +
              "• Cross-platform ticketing integration with instant passenger guidance.",
        actionBtn: { text: "🧪 Launch Mawasilati Simulator", modalId: "mawasilati" }
      }
    },

    oss: {
      keywords: ['oss', 'os_v1', 'ناسا', 'nasa', 'space', 'agent', 'وكيل', 'مكتبي', 'desktop', 'هجين', 'تحدي ناسا'],
      ar: {
        title: "مشروع OS_V1 & OSS Work — النموذج الهجين ووكيل الذكاء المكتبي",
        text: "🚀 **مشروع OS_V1 & OSS Work** هو الابتكار الأيقوني الذي حصد به المهندس أسامة لقب **الفائز المحلي (Local Winner) في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025** من بين 551 حدثاً حول العالم، والمركز الأول في **هاكاثون الذكاء الاصطناعي (Creativa x TIEC)** متفوقاً على 260+ مشروعاً!\n\n" +
              "🔹 **قدرات استثنائية:**\n" +
              "• بناء وتوليد أنظمة ERP ومؤسسات برمجية متكاملة في 87 ثانية فقط!\n" +
              "• نموذج هجين يجمع بين النماذج اللغوية الضخمة (LLMs) ومحرك ترجيح القرارات المنطقية.\n" +
              "• وكيل مستقل بحساب تشغيلي خاص يتصفح الإنترنت، يدير مستودعات GitHub، ويختبر الأكواد ذاتياً.\n" +
              "• محرك الهندسة العكسية (REA) لتحليل واستيعاب المعماريات القائمة وتطويرها.\n" +
              "• 6 وحدات رؤية حاسوبية تحاكي عين الإنسان لمراقبة واجهات البرامج وصيد الأخطاء فورياً.",
        actionBtn: { text: "🧪 تجربة محاكي وكيل OS_V1", modalId: "oss" }
      },
      en: {
        title: "OS_V1 & OSS Work — Autonomous Desktop Agent & Hybrid Model",
        text: "🚀 **OS_V1 & OSS Work** is the breakthrough innovation that won Eng. Osama the prestigious **Local Winner title at NASA Space Apps Challenge 2025** (out of 551 global events) and 1st Place at **Creativa x TIEC AI Hackathon** competing against 260+ teams!\n\n" +
              "🔹 **Exceptional Capabilities:**\n" +
              "• Generates full enterprise ERP systems from scratch in just 87 seconds!\n" +
              "• Hybrid architecture pairing LLMs with a discrete decision-weighing logic engine.\n" +
              "• Operates as an autonomous OS user with browser execution, GitHub workflows, and terminal control.\n" +
              "• Reverse-Engineering Analysis (REA) engine disassembling legacy codebases into modern clean microservices.\n" +
              "• 6 human-like vision modules monitoring desktop UI execution to spot runtime bugs visually.",
        actionBtn: { text: "🧪 Launch OS_V1 Terminal Simulator", modalId: "oss" }
      }
    },

    // 2. Awards & Honors Knowledge
    awards: {
      keywords: ['جائز', 'جوائز', 'تكريم', 'وزير', 'وزراء', 'حكوم', 'award', 'honor', 'minister', 'nasa', 'ناسا', 'فوز'],
      ar: {
        title: "الجوائز والتكريمات الكبرى للمهندس أسامة محمد فتحي",
        text: "🏆 **سجل حافل بالجوائز والاعتمادات الرسمية:**\n\n" +
              "1. 🚀 **فائز محلي في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025** (من بين 551 فعالية عالمية).\n" +
              "2. 🏛️ **استعراض 3 مشاريع ريادية أمام وزراء الحكومة المصرية** (وزير الصحة، وزير الشباب والرياضة، وزير النقل).\n" +
              "3. 🥇 **المركز الأول — Google Developer Festival Egypt 2025** (مشروع طبيبي Tabeeby).\n" +
              "4. 🥇 **المركز الأول — مبادرة مليون مبرمج مصري 2025** (مشروع اللعيّب Al-La'eeb).\n" +
              "5. 🥇 **المركز الأول — هاكاثون الذكاء الاصطناعي 2025 (Creativa × TIEC)** بين أكثر من 260 فريقاً نخبوياً.\n" +
              "6. 🎖️ **جائزة أفضل أثر مجتمعي — مؤتمر مصر للذكاء الاصطناعي (ITIDA / MCIT)** (مشروع مواصلاتي).\n" +
              "7. 🎓 **الأول على الدفعة بمرتبة الشرف** في هندسة البرمجيات.",
        actionBtn: { text: "🏆 استعراض قسم الجوائز بالموقع", scrollTarget: "#awards" }
      },
      en: {
        title: "Major Honors & Ministerial Recognition",
        text: "🏆 **Osama's Track Record of Elite Recognition:**\n\n" +
              "1. 🚀 **Local Winner — NASA Space Apps Challenge 2025** (selected among 551 global locations).\n" +
              "2. 🏛️ **3 Direct Presentations to Egyptian Cabinet Ministers** (Health, Youth & Sports, Transport).\n" +
              "3. 🥇 **1st Place — Google DevFest Egypt 2025** (Tabeeby AI Health OS).\n" +
              "4. 🥇 **1st Place — Million Egyptian Programmers 2025** (Al-La'eeb).\n" +
              "5. 🥇 **1st Place — AI Hackathon 2025 (Creativa × TIEC)** over 260+ elite engineering teams.\n" +
              "6. 🎖️ **Best Social Impact Award — Egypt AI Conference (ITIDA / MCIT)** (Mawasilati).\n" +
              "7. 🎓 **Top of Class with Highest Honors** in Software Engineering.",
        actionBtn: { text: "🏆 View Awards Section", scrollTarget: "#awards" }
      }
    },

    // 3. Technical Skills
    skills: {
      keywords: ['مهار', 'لغات', 'برمج', 'تقني', 'أدوات', 'skill', 'languages', 'tech', 'stack', 'python', 'fastapi', 'flutter', 'c#'],
      ar: {
        title: "الترسانة التقنية والمهارات البرمجية للمهندس أسامة",
        text: "💻 **خبرة عملية عميقة في أحدث التقنيات العالمية:**\n\n" +
              "• **لغات البرمجة:** Python, C#, Dart, SQL, R, JavaScript/TypeScript.\n" +
              "• **أطر العمل:** FastAPI, ASP.NET Core, Flask, Flutter, Tailwind CSS.\n" +
              "• **الذكاء الاصطناعي & LLMs:** RAG Architecture, Qdrant, Ollama, Computer Vision (OpenCV, MediaPipe, U-Net, ResNet), Prompt Engineering, Fine-tuning.\n" +
              "• **الأتمتة المؤسسية:** n8n, Multi-Agent Swarms, Telegram/WhatsApp Bots, Webhooks Orchestration.\n" +
              "• **السحابة والتشغيل:** Docker Containers, GitHub Actions CI/CD, Linux Server Admin, Private Cloud, PostgreSQL, MySQL.\n" +
              "• **أنظمة المؤسسات:** SAP Business Integration, Odoo ERP Development, Salesforce.\n" +
              "• **إنترنت الأشياء والأجهزة:** Arduino, Edge Sensors, Microcontrollers, Drone Vision.",
        actionBtn: { text: "⚡ تصفح مصفوفة المهارات", scrollTarget: "#skills" }
      },
      en: {
        title: "Technical Arsenal & Engineering Stack",
        text: "💻 **Comprehensive Production-Proven Stack:**\n\n" +
              "• **Languages:** Python, C#, Dart, SQL, R, TypeScript/JavaScript.\n" +
              "• **Frameworks:** FastAPI, ASP.NET Core, Flask, Flutter, Tailwind CSS.\n" +
              "• **AI & LLMs:** Enterprise RAG, Qdrant, Ollama, Vision (OpenCV, MediaPipe, U-Net, ResNet), Prompt Architecture.\n" +
              "• **Intelligent Automation:** n8n, Multi-Agent Swarms, Messaging Bots, API Orchestration.\n" +
              "• **DevOps & Cloud:** Docker, GitHub Actions CI/CD, Linux Admin, Private Cloud, PostgreSQL, MySQL.\n" +
              "• **Enterprise ERP:** SAP Integration, Odoo ERP, Salesforce.\n" +
              "• **Hardware & IoT:** Arduino, Embedded Sensors, Robotics, Drone Vision.",
        actionBtn: { text: "⚡ View Skills Matrix", scrollTarget: "#skills" }
      }
    },

    // 4. Career & Experience
    experience: {
      keywords: ['خبر', 'عمل', 'وظي', 'شرك', 'طبالي', 'مراسم', 'غرابلي', 'experience', 'career', 'job', 'work', 'history'],
      ar: {
        title: "المسيرة المهنية والخبرات العملية للمهندس أسامة محمد فتحي",
        text: "🏢 **أكثر من 5 سنوات من الإنجازات المؤسسية المتدرجة:**\n\n" +
              "1. 🌟 **مسؤول إدارة أنظمة تكنولوجيا المعلومات (IT System Administrator)** — شركة طبالي (يناير 2026 – الآن):\n" +
              "إدارة البنية التحتية، أتمتة خوادم التشغيل، وتأمين تدفق البيانات الفورية.\n\n" +
              "2. 🌍 **استشاري تقني ومهندس نظم مستقل** (2025):\n" +
              "تصميم معماريات مؤسسية لمؤسسة ابن خلدون، هيئة الموانئ الأردنية، ومصنع أسمنت مصري خليجي.\n\n" +
              "3. 🏗️ **مدير المكتب الفني لقطاع مشروعات القاهرة** — شركة الغرابلي للأعمال الهندسية المتكاملة GIECO (2021 – 2024):\n" +
              "إدارة وتنسيق أضخم المشروعات الإنشائية والقومية، ورقمنة دورات العمل الهندسية.\n\n" +
              "4. 🎓 **مدير التطوير التقني** — مؤسسة الجملي التعليمية (2022 – 2023).\n\n" +
              "5. 🏢 **مهندس IT** — شركة المراسم الدولية (2019 – 2021):\n" +
              "حصل على 4 ترقيات متتالية تقديراً لكفاءته وسرعة حل المشاكل المعقدة.",
        actionBtn: { text: "💼 تفقد الجدول الزمني للخبرات", scrollTarget: "#experience" }
      },
      en: {
        title: "Professional Work Experience",
        text: "🏢 **5+ Years of Proven Enterprise Engineering Leadership:**\n\n" +
              "1. 🌟 **IT System Administrator** — Tabali Company (Jan 2026 – Present):\n" +
              "Managing enterprise IT infrastructure, automated DevOps pipelines, and critical data flows.\n\n" +
              "2. 🌍 **Freelance Technical Consultant** (2025):\n" +
              "Architected custom enterprise systems for Ibn Khaldun Foundation, Jordan Ports Authority, and Egyptian-Gulf Cement.\n\n" +
              "3. 🏗️ **Head of Technical Office (Cairo Mega-Projects)** — GIECO Integrated Engineering (2021 – 2024):\n" +
              "Directed technical office operations across major national construction ventures.\n\n" +
              "4. 🎓 **Technical Development Manager** — El-Gamaly Educational Foundation (2022 – 2023).\n\n" +
              "5. 🏢 **IT Systems Engineer** — El-Marasem International (2019 – 2021):\n" +
              "Earned 4 successive promotions within 2 years for excellence in systems architecture.",
        actionBtn: { text: "💼 Explore Career Timeline", scrollTarget: "#experience" }
      }
    },

    // 5. Education
    education: {
      keywords: ['تعليم', 'جامع', 'دراسة', 'شهادة', 'عين شمس', 'iti', 'education', 'degree', 'university', 'study'],
      ar: {
        title: "المسار الأكاديمي والشهادات التخصصية",
        text: "🎓 **تفوق علمي وأكاديمي استثنائي:**\n\n" +
              "• **بكالوريوس هندسة البرمجيات** — جامعة عين شمس (2026):\n" +
              "تخرج بالمركز **الأول على الدفعة بامتياز مع مرتبة الشرف الأولى**.\n\n" +
              "• **ماجستير هندسة الروبوتات والذكاء الاصطناعي** — معهد تكنولوجيا المعلومات (ITI) وزارة الاتصالات (قيد الدراسة حالياً).\n\n" +
              "• **شهادات واعتمادات دولية:**\n" +
              "- تدريب المدربين TOT المعتمد من الجامعة الأمريكية بالقاهرة AUC.\n" +
              "- منحة الحكومة الكندية المتقدمة لتحليل البيانات والذكاء الاصطناعي.\n" +
              "- شهادات متخصصة في الذكاء الاصطناعي التوليدي، الحوسبة السحابية، وأمن الشبكات.",
        actionBtn: { text: "🎓 عرض الشهادات والتعليم", scrollTarget: "#education" }
      },
      en: {
        title: "Academic Background & Certifications",
        text: "🎓 **Top-Tier Academic Achievements:**\n\n" +
              "• **BSc in Software Engineering** — Ain Shams University (2026):\n" +
              "Graduated **Top of Class with First-Class Honors & Distinction**.\n\n" +
              "• **MSc in Robotics & AI Engineering** — Information Technology Institute (ITI) · Ministry of Communications & IT (In Progress).\n\n" +
              "• **Elite Certifications:**\n" +
              "- Certified Trainer (TOT) — The American University in Cairo (AUC).\n" +
              "- Canadian Government Advanced Fellowship in Data Science & Machine Learning.\n" +
              "- Deep learning, Cloud architecture, and Network security credentials.",
        actionBtn: { text: "🎓 View Education Details", scrollTarget: "#education" }
      }
    },

    // 6. Social Media & Networks
    social: {
      keywords: ['فيس', 'فيسبوك', 'facebook', 'لينكد', 'linkedin', 'انستا', 'انستغرام', 'انستجرام', 'instagram', 'جيت', 'github', 'مواقع تواصل', 'حسابات'],
      ar: {
        title: "حسابات التواصل الرسمية للمهندس أسامة محمد (أسامة الشيمي)",
        text: "🌐 **يمكنك متابعة وتصفح جميع حساباتي الرسمية عبر الروابط المباشرة التالية:**\n\n" +
              "• 📘 **فيسبوك (Facebook):** [facebook.com/osama.mohamed.95524](${FACEBOOK_URL})\n" +
              "• 💼 **لينكدإن (LinkedIn):** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n" +
              "• 📸 **إنستغرام (Instagram):** [instagram.com/osama.mohamed.95524](${INSTAGRAM_URL})\n" +
              "• 🐙 **جيت هاب (GitHub):** [github.com/Osama-SysEng/Osama-EL_Shimy](${GITHUB_REPO})\n" +
              "• 💬 **واتساب (WhatsApp):** [wa.me/201156124827](https://wa.me/${OSAMA_PHONE})\n" +
              "• ✉️ **البريد الإلكتروني:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})",
        socialCards: true
      },
      en: {
        title: "Official Social & Professional Profiles",
        text: "🌐 **Connect with Eng. Osama across all verified channels:**\n\n" +
              "• 📘 **Facebook:** [facebook.com/osama.mohamed.95524](${FACEBOOK_URL})\n" +
              "• 💼 **LinkedIn:** [linkedin.com/in/osama-mohamed-57159a410](${LINKEDIN_URL})\n" +
              "• 📸 **Instagram:** [instagram.com/osama.mohamed.95524](${INSTAGRAM_URL})\n" +
              "• 🐙 **GitHub:** [github.com/Osama-SysEng/Osama-EL_Shimy](${GITHUB_REPO})\n" +
              "• 💬 **WhatsApp:** [wa.me/201156124827](https://wa.me/${OSAMA_PHONE})\n" +
              "• ✉️ **Email:** [${OSAMA_EMAIL}](mailto:${OSAMA_EMAIL})",
        socialCards: true
      }
    }
  };

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'ar';
  }

  // Generates interactive instant multi-channel dispatch card
  function generateDispatchCard(userMessage) {
    const lang = getActiveLang();
    const cleanMsg = userMessage && userMessage.trim().length > 0 
      ? encodeURIComponent(userMessage) 
      : encodeURIComponent(lang === 'ar' 
          ? 'مرحباً مهندس أسامة، زرت منصتك وأرغب في مناقشة مشروع / استشارة تقنية معك.' 
          : 'Hello Eng. Osama, I visited your platform and would like to discuss an engineering collaboration.');
    
    const waUrl = `https://wa.me/${OSAMA_PHONE}?text=${cleanMsg}`;
    const mailUrl = `mailto:${OSAMA_EMAIL}?subject=${encodeURIComponent(lang === 'ar' ? 'تواصل عبر منصة Osama الذكية' : 'Inquiry via Osama Platform')}&body=${cleanMsg}`;
    const telUrl = `tel:+${OSAMA_PHONE}`;

    if (lang === 'ar') {
      return `
        <div class="mt-3 p-4 bg-slate-900 rounded-2xl border border-cyan-500/50 space-y-3 shadow-lg">
          <div class="flex items-center gap-2">
            <span class="text-xl">🚀</span>
            <p class="font-bold text-cyan-300 text-sm">يسعدني توصيل رسالتك للمهندس أسامة فوراً!</p>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            لقد جهزت رسالتك لتصل مباشرة إلى هاتفه أو بريده الخاص، اختر القناة التي تفضلها:
          </p>
          <div class="flex flex-col gap-2 pt-1">
            <a href="${waUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md">
              <span>💬</span> إرسال عبر واتساب إلى أسامة الآن
            </a>
            <a href="${mailUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md">
              <span>✉️</span> إرسال بريد إلكتروني مباشر (${OSAMA_EMAIL})
            </a>
            <a href="${telUrl}" class="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs border border-slate-700 transition">
              <span>📞</span> مكالمة هاتفية فورية (+20 115 612 4827)
            </a>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="mt-3 p-4 bg-slate-900 rounded-2xl border border-cyan-500/50 space-y-3 shadow-lg">
          <div class="flex items-center gap-2">
            <span class="text-xl">🚀</span>
            <p class="font-bold text-cyan-300 text-sm">I will dispatch your message directly to Eng. Osama!</p>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            Your inquiry is formatted and ready for instant transmission. Select your channel:
          </p>
          <div class="flex flex-col gap-2 pt-1">
            <a href="${waUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md">
              <span>💬</span> Send via WhatsApp to Osama Now
            </a>
            <a href="${mailUrl}" target="_blank" class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md">
              <span>✉️</span> Send Direct Email (${OSAMA_EMAIL})
            </a>
            <a href="${telUrl}" class="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs border border-slate-700 transition">
              <span>📞</span> Direct Phone Call (+20 115 612 4827)
            </a>
          </div>
        </div>
      `;
    }
  }

  // Generates social profiles card
  function generateSocialCard() {
    return `
      <div class="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
        <a href="${FACEBOOK_URL}" target="_blank" class="flex items-center gap-2 p-2.5 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/40 transition">
          <span>📘</span> Facebook
        </a>
        <a href="${LINKEDIN_URL}" target="_blank" class="flex items-center gap-2 p-2.5 rounded-xl bg-sky-600/20 text-sky-300 border border-sky-500/30 hover:bg-sky-600/40 transition">
          <span>💼</span> LinkedIn
        </a>
        <a href="${INSTAGRAM_URL}" target="_blank" class="flex items-center gap-2 p-2.5 rounded-xl bg-pink-600/20 text-pink-300 border border-pink-500/30 hover:bg-pink-600/40 transition">
          <span>📸</span> Instagram
        </a>
        <a href="${GITHUB_REPO}" target="_blank" class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition">
          <span>🐙</span> GitHub
        </a>
      </div>
    `;
  }

  // Smart Query Matcher with Natural Language Understanding & Scoring
  function processQuery(query) {
    const q = query.toLowerCase().trim();
    const lang = getActiveLang();

    // 1. Direct Message Dispatch / Contact Intent
    const contactTriggers = [
      'رسال', 'تواصل', 'واتس', 'ايميل', 'بريد', 'هاتف', 'توظيف', 'ارسل', 'ابعث', 'رقم', 'تليفون',
      'message', 'contact', 'whatsapp', 'email', 'hire', 'call', 'reach', 'send', 'phone', 'consult'
    ];
    if (contactTriggers.some(t => q.includes(t))) {
      return generateDispatchCard(query);
    }

    // 2. Social Media Intent
    const socialTriggers = ['فيسبوك', 'لينكد', 'انستا', 'انستجرام', 'سوشيال', 'تواصل اجتماعي', 'social', 'facebook', 'linkedin', 'instagram'];
    if (socialTriggers.some(t => q.includes(t))) {
      const match = knowledgeBase.social[lang];
      return match.text + generateSocialCard();
    }

    // 3. Score against knowledgeBase items
    let bestMatch = null;
    let highestScore = 0;

    for (const [key, item] of Object.entries(knowledgeBase)) {
      let score = 0;
      for (const kw of item.keywords) {
        if (q.includes(kw.toLowerCase())) {
          score += (kw.length > 4 ? 3 : 2);
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      const localized = bestMatch[lang];
      let output = localized.text;
      
      // Add interactive action button if present
      if (localized.actionBtn) {
        if (localized.actionBtn.modalId) {
          output += `\n\n<div class="mt-3"><button onclick="openProjectModal('${localized.actionBtn.modalId}')" class="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition shadow-md">${localized.actionBtn.text} ↗</button></div>`;
        } else if (localized.actionBtn.scrollTarget) {
          output += `\n\n<div class="mt-3"><a href="${localized.actionBtn.scrollTarget}" class="inline-block px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition shadow-md">${localized.actionBtn.text} ↓</a></div>`;
        }
      }
      return output;
    }

    // 4. Fallback: Intelligent Comprehensive Response + Message Dispatch Option
    if (lang === 'ar') {
      return `شكراً لسؤالك! أنا المساعد الذكي لمنصة **Osama** والمهندس **أسامة محمد فتحي (أسامة الشيمي)**.\n\n` +
             `يمكنك سؤالي عن أي من مشاريعه الفائزة بجوائز دولية مثل:\n` +
             `• **طبيبي (Tabeeby)** — نظام الرعاية الصحية المعروض على وزير الصحة.\n` +
             `• **اللعيب (Al-La'eeb)** — منصة اكتشاف المواهب المعروضة على وزير الشباب والرياضة.\n` +
             `• **مواصلاتي (Mawasilati)** — النقل الذكي المعروض على وزير النقل.\n` +
             `• **OS_V1 & NASA Space Apps** — النموذج الهجين الفائز بتحدي ناسا 2025.\n\n` +
             `أو يمكنك كتابة رسالتك وسأقوم بتوصيلها للمهندس أسامة فوراً:` +
             generateDispatchCard(query);
    } else {
      return `Thank you for your question! I am the AI Assistant of the **Osama** Platform and Eng. **Osama Mohamed Fathy (Osama EL_Shimy)**.\n\n` +
             `You can ask me in detail about any of his award-winning platforms:\n` +
             `• **Tabeeby** — AI Healthcare OS presented to the Minister of Health.\n` +
             `• **Al-La'eeb** — AI Sports Scouting presented to the Minister of Youth & Sports.\n` +
             `• **Mawasilati** — Transit Intelligence presented to the Minister of Transport.\n` +
             `• **OS_V1 & NASA Space Apps** — Hybrid autonomous agent that won NASA Space Apps 2025.\n\n` +
             `Or simply tell me your inquiry, and I will dispatch it directly to Eng. Osama:` +
             generateDispatchCard(query);
    }
  }

  // DOM Elements & Interactive Chat Loop
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
      if (forceOpen === true) {
        chatWindow.classList.remove('hidden');
      } else if (forceOpen === false) {
        chatWindow.classList.add('hidden');
      } else {
        chatWindow.classList.toggle('hidden');
      }
      if (!chatWindow.classList.contains('hidden') && chatInput) {
        setTimeout(() => chatInput.focus(), 200);
      }
    }

    if (bubbleBtn) bubbleBtn.addEventListener('click', () => toggleChat());
    if (navAssistantBtn) navAssistantBtn.addEventListener('click', () => toggleChat(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

    // Dynamic Quick Prompt Chips
    window.renderAssistantChips = function() {
      if (!chipsContainer) return;
      const lang = getActiveLang();
      const chips = lang === 'ar' ? [
        { label: "🚀 جائزة ناسا 2025", query: "احكي لي عن فوزك في تحدي ناسا NASA Space Apps" },
        { label: "🩺 مشروع طبيبي", query: "كيف يعمل مشروع طبيبي المعروض على وزير الصحة؟" },
        { label: "⚽ مشروع اللعيب", query: "ما هي منصة اللعيب وماذا تفعل بالرؤية الحاسوبية؟" },
        { label: "🤖 وكيل OS_V1", query: "اشرح لي النموذج الهجين OS_V1 الذي يبني ERP في 87 ثانية" },
        { label: "🌐 حسابات التواصل", query: "اعطني جميع حسابات التواصل الاجتماعي للمهندس أسامة" },
        { label: "💬 أرسل رسالة لأسامة", query: "أريد إرسال رسالة مباشرة للمهندس أسامة" }
      ] : [
        { label: "🚀 NASA Award", query: "Tell me about winning the NASA Space Apps Challenge 2025" },
        { label: "🩺 Tabeeby OS", query: "How does Tabeeby AI Healthcare OS work?" },
        { label: "⚽ Al-La'eeb AI", query: "Explain Al-La'eeb sports scouting platform" },
        { label: "🤖 OS_V1 Agent", query: "Explain OS_V1 agent that builds ERP in 87 seconds" },
        { label: "🌐 Social Links", query: "Give me all official social media profiles of Eng. Osama" },
        { label: "💬 Message Osama", query: "I want to send a direct message to Eng. Osama" }
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

    function appendMessage(text, isUser = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = isUser ? "flex justify-end" : "flex justify-start";

      const bubble = document.createElement('div');
      bubble.className = isUser
        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2.5 max-w-[85%] text-xs shadow-md leading-relaxed"
        : "bg-slate-800 text-slate-100 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-2.5 max-w-[90%] text-xs shadow-md leading-relaxed";

      // Render markdown formatting
      let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

      bubble.innerHTML = formatted;
      msgDiv.appendChild(bubble);
      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleSend() {
      const query = chatInput.value.trim();
      if (!query) return;

      appendMessage(query, true);
      chatInput.value = '';

      // Typing indicator simulation
      const typingDiv = document.createElement('div');
      typingDiv.className = "flex justify-start typing-indicator";
      typingDiv.innerHTML = `
        <div class="bg-slate-800 text-slate-400 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-2 text-xs flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
        </div>
      `;
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      setTimeout(() => {
        typingDiv.remove();
        const reply = processQuery(query);
        appendMessage(reply, false);
      }, 500);
    }

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }
  });
})();
