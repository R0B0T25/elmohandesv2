/**
 * ultra-super-lux.js — Elmohandes Decor
 * Dynamic package specification switcher & interactive actions for 90m offers page (ultra-super-lux.html)
 */

(function () {
  "use strict";

  // Packages specifications data dictionary
  const packagesData = {
    silver: {
      title: "باقة سيلفر (Silver) — 200,000 جنية كلي للوحدة",
      desc: "مواصفات ممتازة واقتصادية متكاملة لمساحة 90 متر مربع تشمل البنود الأساسية والتصميم والتنفيذ.",
      specs: [
        {
          label: "العزل المائي",
          text: "مجموعة عزل إسمنتي معتمد من Smart Home معدل بالبوليمرات لمنع تسريب المياه تماماً للحمام والمطبخ.",
        },
        {
          label: "تأسيس السباكة",
          text: "توريد وتركيب خامات التأسيس من خامات BR للتغذية وسمارت هوم للصرف بضمان 10 سنوات كاملة.",
        },
        {
          label: "صرف التكييفات",
          text: "توريد وتركيب خامات سمارت هوم لعمل صرف تكييفات مستقل لكل نقطة تكييف داخل الوحدة.",
        },
        {
          label: "تأسيس الكهرباء",
          text: "أسلاك السويدي الأصلي المعتمد - خراطيم وعلب ماجيك وفليكسيبل مصطفى محمود - لوحة قواطع فينوس سبرنت - مفاتيح وقواطع السويدي (هيميل) - أسلاك الدش والتليفون إيطالي.",
        },
        {
          label: "الرخام والجرانيت",
          text: "توريد وتركيب رخامة مطبخ جرانيت مصري مجاناً كهدية مع الباقة لتشطيب المطبخ.",
        },
        {
          label: "تشطيب السباكة",
          text: "توريد وتركيب طقم صحي ايديال ستاندرد (سابيس) - طقم خلاطات هاواي تركي مستورد - حلة حوض المطبخ استانلس ستيل متينة.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "توريد وتركيب خامات تشطيب الكهرباء النهائية من لقم وشاسيهات وأوشاش ماركة (سانشي) بضمان مدى الحياة حسب اختيار شكل العميل.",
        },
        {
          label: "المصيص والجبس",
          text: "توريد وتركيب خامات لزوم عمل ضهارة جبسية ومصيص لكامل جدران وأسقف الوحدة.",
        },
        {
          label: "الكرانيش والفيوتك",
          text: "توريد وتركيب كرانيش جبسية كلاسيكية لكامل الغرف + إطارات فيوتك (Futec) للمطبخ والحمام.",
        },
        {
          label: "النجارة والأبواب",
          text: "توريد وتركيب حلوق خشب موسكي أصيل + أبواب غرف موسكي قشرة أرو من الوجهين شاملة المفصلات، كوالين الأهرام، والأوكر بدهان أستر أو لاكيه.",
        },
        {
          label: "أرضيات السيراميك",
          text: "توريد سيراميك لزوم الوحدة بالكامل بقيمة إجمالية (25,000ج) من خامات فينيسيا، الفا، أورينت أو فيردي + توريد خامات التركيب شامل مصنعية التركيب.",
        },
        {
          label: "أعمال الدهانات",
          text: "تجهيز الجدران: 2 سكينة معجون سافيتو + 3 سكاكين معجون GLC + 2 وش بطانة 30*30 + التشطيب النهائي بدهانات سايبس سلك قابلة للغسيل.",
        },
      ],
    },
    gold: {
      title: "باقة جولد (Gold) — 240,000 جنية كلي للوحدة",
      desc: "الباقة الأكثر طلباً لمساحة 90 متر مربع! تضيف أسقف معلقة جبسيوم بورد وتصميمات 3D تفاعلية مع أنظمة كاميرات وصوت.",
      specs: [
        {
          label: "العزل المائي",
          text: "مجموعة عزل إسمنتي معتمد من Smart Home معدل بالبوليمرات لضمان عزل كامل للمطابخ والحمامات.",
        },
        {
          label: "تأسيس السباكة",
          text: "توريد وتركيب خامات التأسيس الفاخرة من خامات BR للتغذية وسمارت هوم للصرف مع شهادة ضمان وضغط معتمد.",
        },
        {
          label: "صرف التكييفات",
          text: "تأسيس شبكة صرف تكييفات مدفونة ماركة سمارت هوم لجميع الغرف والصالون بشكل خفي.",
        },
        {
          label: "تأسيس الكهرباء",
          text: "أسلاك السويدي الأصلي المعتمد - خراطيم وعلب ماجيك وفليكسيبل مصطفى محمود - لوحة اتصالات متكاملة - تأسيس ساوند سيستم وتأسيس شبكة كاميرات مراقبة (خراطيم فقط).",
        },
        {
          label: "الرخام والجرانيت",
          text: "توريد وتركيب رخامة مطبخ جرانيت مصري عالية الجودة مع الوزرات والفتحات.",
        },
        {
          label: "تشطيب السباكة",
          text: "توريد وتركيب حوض شامل وحدة أكريليك معلقة - قاعدة إيديال ستاندرد معلقة (بلان) ملاصقة للحائط - طقم خلاطات إيديال ستاندرد (سليم لاين) - كابينة شاور سيكوريت زجاجي.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "توريد وتركيب لقم ومفاتيح وأوشاش من ماركات سانشي أو أوسا الفاخرة حسب ألوان الجدران واختيار العميل.",
        },
        {
          label: "المصيص والجدران",
          text: "أعمال لياسة ومصيص ناعم عالي الدقة لإعداد جدران الشقة لاستقبال المعجون والدهانات.",
        },
        {
          label: "الكرانيش والديكور",
          text: "توريد وتركيب كرانيش جبسية لكافة الغرف لإضفاء لمسة جمالية.",
        },
        {
          label: "النجارة والأبواب",
          text: "أبواب غرف خشبية عالية الجودة قشرة أرو دهان أستر فاخر شاملة كوالين الأهرام ومفصلات وأوكر كومكس المميزة.",
        },
        {
          label: "أرضيات السيراميك",
          text: "توريد سيراميك راقي وفرز أول للصالون والغرف بقيمة (25,000ج) شامل الرمل والأسمنت ومصنعيات التركيب الاحترافية.",
        },
        {
          label: "أعمال الدهانات",
          text: "تجهيز الجدران: 2 سكينة سافيتو + 3 سكاكين معجون GLC + 2 وش بطانة + تشطيب نهائي بدهانات جوتن (Jotun) العالمية الفاخرة + عمل جدران ديكور قطيفة.",
        },
        {
          label: "الجبسيوم بورد",
          text: "توريد وتركيب جبسيوم بورد لعمل بيت نور فخم في الريسبشن والممرات شامل الإضاءة المخفية الليد واسبوتات الإضاءة ماركة LEDEX.",
        },
        {
          label: "التصميم الفني",
          text: "إعداد تصميم 3D كامل لمنطقة الاستقبال (الريسبشن) لرؤية الديكور والألوان قبل التنفيذ + مخططات 2D للفرش وتوزيع نقاط الإضاءة لكامل الشقة.",
        },
      ],
    },
    platinum: {
      title: "باقة بلاتنيوم (Platinum) — 290,000 جنية كلي للوحدة",
      desc: "باقة الرفاهية الكاملة لمساحة 90 متر مربع! تشمل تصميم 3D متكامل لكافة الغرف، وأبواب PVC تركي مقاومة للمياه وعزل كيميائي بمادة سيكا 107.",
      specs: [
        {
          label: "العزل المائي",
          text: "مجموعة عزل إسمنتي كيميائي معتمد عالي الجودة بمادة سيكا 107 (Sika 107) لضمان منع تسريب المياه تماماً.",
        },
        {
          label: "تأسيس السباكة",
          text: "تأسيس التغذية خامات BR الألمانية وتأسيس الصرف خامات سمارت هوم بضمان واختبار معتمد 10 سنوات.",
        },
        {
          label: "صرف التكييفات",
          text: "شبكات صرف تكييفات معزولة لكل غرف الوحدة لمنع أي تسريب مستقبلي للجدران.",
        },
        {
          label: "تأسيس الكهرباء",
          text: "أسلاك السويدي الأصلي مع لوحات توزيع فينوس سبرنت - لوحة اتصالات مخصصة - تأسيس متكامل للساوند سيستم الموزع وكاميرات المراقبة.",
        },
        {
          label: "الرخام والجرانيت",
          text: "توريد وتركيب رخام وجرانيت فخم للمطبخ والفتحات والوزرات شامل التلميع والتركيب بالليزر.",
        },
        {
          label: "تشطيب السباكة",
          text: "حمام (1): وحدة حوض أكريليك راقية - قاعدة معلقة وخزان دفن ديورافيت (ديورا ستايل) - خلاطات إيديال ستاندرد (سليم لاين) - كابينة شاور زجاج سيكوريت.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "مفاتيح وأوشاش تشطيب فاخرة ماركة سانشي أو أوسا بضمان مدى الحياة حسب اختيار العميل.",
        },
        {
          label: "المصيص والجدران",
          text: "ضهاره جبسية ومصيص فائق النعومة لجميع الجدران والأسقف غير المغطاة بالجبسيوم بورد.",
        },
        {
          label: "النجارة والأبواب",
          text: "أبواب غرف PVC تركي فاخرة ومستوردة للغرف والحمامات تتميز بمقاومتها الكاملة للمياه، الرطوبة، والحرارة مع عزل صوت ممتاز.",
        },
        {
          label: "أرضيات السيراميك",
          text: "توريد سيراميك راقي بسعر (350ج) للمتر المربع شامل الرمل والأسمنت الأسود والأبيض والزوايا والتركيب الهندسي الفني.",
        },
        {
          label: "أعمال الدهانات",
          text: "تحضير فائق: 2 سكينة سافيتو + 3 سكاكين معجون GLC + 2 وش بطانة + تشطيب نهائي بدهانات جوتن (Jotun) مع عمل جدران ديكور مخصصة.",
        },
        {
          label: "الجبسيوم بورد",
          text: "توريد وتركيب أسقف معلقة جبسيوم بورد مساحات واسعة يتم توزيعها بالاتفاق مع العميل تشمل الإضاءة الكاملة من الليد واسبوتات الإضاءة LEDEX.",
        },
        {
          label: "التصميم الفني",
          text: "تصميم داخلي ثلاثي الأبعاد (3D Design) كامل وتفصيلي لكافة غرف ومساحات الشقة مع توزيع الأثاث والإضاءة والديكورات.",
        },
      ],
    },
  };

  // DOM Elements
  const tabsContainer = document.querySelector(".specs-tabs");
  const specListContainer = document.getElementById("specs-list-container");
  const activeTitle = document.getElementById("active-package-title");
  const activeDesc = document.getElementById("active-package-desc");
  const selectPackageDropdown = document.getElementById("selected-package");

  if (!tabsContainer || !specListContainer) return;

  // Render specifications for selected package
  function renderSpecs(pkgKey) {
    const data = packagesData[pkgKey];
    if (!data) return;

    // Update Title and Subtitle
    activeTitle.textContent = data.title;
    activeDesc.textContent = data.desc;

    // Clear previous list
    specListContainer.innerHTML = "";

    // Build specification cards
    data.specs.forEach((spec) => {
      const item = document.createElement("div");
      item.className = "spec-item animate-fade-in";

      // Formatting multi-line text (like in plumbing fixtures)
      const formattedText = spec.text.replace(/\n/g, "<br>");

      item.innerHTML = `
        <div class="spec-item__label">
          <span>🔧</span>
          <span>${spec.label}</span>
        </div>
        <div class="spec-item__desc">${formattedText}</div>
      `;
      specListContainer.appendChild(item);
    });

    // Auto-update the contact form dropdown selection
    if (selectPackageDropdown) {
      selectPackageDropdown.value = pkgKey;
    }
  }

  // Handle Tab Switch Click
  tabsContainer.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".spec-tab-btn");
    if (!tabBtn) return;

    // Toggle active classes on tab buttons
    tabsContainer.querySelectorAll(".spec-tab-btn").forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    });

    tabBtn.classList.add("is-active");
    tabBtn.setAttribute("aria-selected", "true");

    // Switch specifications
    const pkgKey = tabBtn.dataset.tab;

    // Add fade animation reset
    const panel = document.getElementById("spec-panel");
    panel.classList.remove("animate-fade-in");
    void panel.offsetWidth; // Trigger reflow to restart animation
    panel.classList.add("animate-fade-in");

    renderSpecs(pkgKey);
  });

  // Handle overview card buttons scroll-to-specs and select tab
  document.querySelectorAll(".scroll-to-specs").forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetPackage = e.currentTarget.dataset.target;
      if (!targetPackage) return;

      // Scroll to specs section smoothly
      const specsSection = document.getElementById("specs-section");
      if (specsSection) {
        // Offset to account for sticky header height (approx 80px)
        const elementPosition =
          specsSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 90;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      // Simulate tab click
      const correspondingTab = tabsContainer.querySelector(
        `[data-tab="${targetPackage}"]`,
      );
      if (correspondingTab) {
        correspondingTab.click();
      }
    });
  });

  // Initialize page on load with "silver" specs
  renderSpecs("silver");
})();
