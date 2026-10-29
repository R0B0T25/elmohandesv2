/**
 * sun-capital.js — Elmohandes Decor
 * Dynamic package specification switcher & interactive actions for Sun Capital offers page (sun-capital.html)
 */

(function () {
  "use strict";

  // Packages specifications data dictionary
  const packagesData = {
    gold: {
      title: "باقة جولد (Gold) — 4,750 جنية للمتر المربع",
      desc: "مواصفات راقية ومثالية لتشطيب وتأسيس الوحدات نصف التشطيب بالكمبوند تشمل بنود المحارة وتأسيس السباكة والكهرباء والتشطيب الكامل.",
      specs: [
        {
          label: "العزل المائي",
          text: "مجموعة عزل إسمنتي معتمد من Home Smart معدل بالبوليمرات لضمان عزل كامل لعدد 2 حمام ومطبخ.",
        },
        {
          label: "تأسيس السباكة",
          text: "توريد وتركيب خامات التأسيس من خامات BR للتغذية وسمارت هوم للصرف بضمان واختبار معتمد 10 سنوات كاملة.",
        },
        {
          label: "صرف التكييفات",
          text: "توريد وتركيب خامات سمارت هوم لعمل صرف تكييفات مستقل لكل نقطة تكييف داخل الوحدة.",
        },
        {
          label: "تأسيس الكهرباء",
          text: "أسلاك السويدي الأصلي المعتمد - خراطيم وعلب ماجيك وفليكسيبل مصطفى محمود - لوحة قواطع فينوس سبرنت - مفاتيح وقواطع السويدي (هيميل).",
        },
        {
          label: "أعمال المحارة",
          text: "توريد وتركيب خامات (أسمنت أسود، رمل) لعمل محارة متكاملة ومستوية لكافة جدران وأسقف الوحدة (في حال تسليمها نصف تشطيب).",
        },
        {
          label: "أرضيات السيراميك",
          text: "توريد سيراميك لزوم الوحدة بالكامل بسعر (300ج) للمتر المربع من خامات فينيسيا، الفا، أورينت أو فيردي + توريد خامات التركيب (أسمنت ورمل) وشامل مصنعية التركيب.",
        },
        {
          label: "تشطيب السباكة",
          text: "حمام (1): توريد وتركيب حوض شامل وحدة أكريليك معلقة - قاعدة إيديال ستاندرد (بلان) ملاصقة للحائط - خلاطات إيديال ستاندرد سليم لاين - كابينة شاور سيكوريت.\nحمام (2): حوض وقاعدة إيديال ستاندرد سابيس - خلاطات هاواي تركي مستورد - خلاط لزوم حوض المطبخ.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "توريد وتركيب خامات تشطيب الكهرباء النهائية من لقم وشاسيهات وأوشاش ماركة (سانشي) بضمان مدى الحياة حسب اختيار شكل العميل.",
        },
        {
          label: "النجارة والأبواب",
          text: "توريد وتركيب حلوق خشب موسكي أصيل + أبواب غرف موسكي قشرة أرو من الوجهين شاملة المفصلات، كوالين الأهرام، والأوكر بدهان أستر أو لاكيه.",
        },
        {
          label: "أعمال الدهانات",
          text: "تجهيز الجدران: 2 سكينة معجون سافيتو + 3 سكاكين معجون GLC + 2 وش بطانة 30*30 + التشطيب النهائي بدهانات سايبس سلك قابلة للغسيل + عمل 2 جانب ديكور هدية (قطيفة).",
        },
        {
          label: "التصميم الفني",
          text: "إعداد تصميم 2D لتوزيع الفرش بالوحدة بالكامل + تصميم داخلي ثلاثي الأبعاد 3D لمنطقة الاستقبال (الريسبشن) مجاناً.",
        },
      ],
    },
    platinum: {
      title: "باقة بلاتنيوم (Platinum) — 5,800 جنية للمتر المربع",
      desc: "الباقة الأكثر طلباً! تضيف عزل كيميائي فخم سيكا 107، وتأسيس أنظمة ساوند سيستم وكاميرات وإنترنت، مع أبواب PVC تركي مستوردة وأسقف معلقة جبسيوم بورد.",
      specs: [
        {
          label: "العزل المائي",
          text: "مجموعة عزل إسمنتي كيميائي معتمد عالي الجودة بمادة سيكا 107 (Sika 107) لمنع تسريب المياه تماماً لجميع الحمامات والمطبخ.",
        },
        {
          label: "تأسيس السباكة",
          text: "تأسيس التغذية خامات BR الألمانية وتأسيس الصرف خامات سمارت هوم بضمان واختبار معتمد 10 سنوات.",
        },
        {
          label: "صرف التكييفات",
          text: "تأسيس شبكة صرف تكييفات مدفونة ماركة سمارت هوم لجميع الغرف والصالون بشكل خفي.",
        },
        {
          label: "تأسيس الكهرباء",
          text: "أسلاك السويدي الأصلي المعتمد - علب ماجيك وخراطيم مصطفى محمود - لوحة اتصالات متكاملة - تأسيس ساوند سيستم وتأسيس شبكة كاميرات مراقبة وإنترنت.",
        },
        {
          label: "أعمال المحارة",
          text: "أعمال محارة متكاملة ودقيقة للغاية لكامل جدران وأسقف الوحدة لضمان استوائها واستقبال الجبس بورد بشكل صحيح.",
        },
        {
          label: "سيراميك ورخام",
          text: "توريد سيراميك راقي فرز أول ليزر (سعر المتر 350 جنيه) + رخام فخم للمطبخ والفتحات والوزرات شامل التلميع والتركيب بالليزر.",
        },
        {
          label: "تشطيب السباكة",
          text: "وحدات حوض أكريليك راقية - قاعدة معلقة وخزان دفن ديورافيت (ديورا ستايل) - خلاطات جروهي (Grohe) الألمانية الفاخرة - كابينة شاور زجاج سيكوريت.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "مفاتيح وأوشاش تشطيب فاخرة ماركة سانشي أو أوسا بضمان مدى الحياة حسب اختيار العميل وألوان الجدران.",
        },
        {
          label: "النجارة والأبواب",
          text: "أبواب غرف PVC تركي فاخرة ومستوردة للغرف والحمامات تتميز بمقاومتها الكاملة للمياه، الرطوبة، والحرارة مع عزل صوت ممتاز.",
        },
        {
          label: "أعمال الدهانات",
          text: "تحضير فائق: 2 سكينة سافيتو + 3 سكاكين معجون GLC + 2 وش بطانة + تشطيب نهائي بدهانات جوتن (Jotun) العالمية الفاخرة مع عمل جدران ديكور قطيفة.",
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
    diamond: {
      title: "باقة دايموند (Diamond) — 7,800 جنية للمتر المربع",
      desc: "باقة الفخامة والرفاهية المطلقة لشقتك بالكمبوند! تشمل أنظمة تحكم ذكي Smart Home وتأسيس تكييف مركزي VRF وبورسلين ورخام مستورد وإشراف هندسي يومي متكامل.",
      specs: [
        {
          label: "العزل المائي والحراري",
          text: "عزل كيميائي معتمد بمادة سيكا 107 لجميع الحمامات والمطبخ + عزل فوم حراري للأسقف لعزل الحرارة الخارجية تماماً.",
        },
        {
          label: "تأسيس السباكة",
          text: "تأسيس متكامل خامات BR الألمانية وصرف سمارت هوم مع خزان دفن ديورافيت ألماني مدمج داخل الجدران بضمان 15 سنة.",
        },
        {
          label: "صرف التكييفات",
          text: "شبكات صرف تكييفات معزولة ومؤسسة بالكامل وموصولة بشبكة الصرف العامة.",
        },
        {
          label: "تأسيس الكهرباء والتكييف",
          text: "أسلاك السويدي المعتمدة + لوحة اتصالات + ساوند سيستم موزع + تأسيس تكييف مركزي VRF بالكامل وأنظمة تحكم ذكي Smart Home للتحكم بالمنزل عن بعد.",
        },
        {
          label: "أعمال المحارة والأسقف",
          text: "محارة فائقة الجودة بزوايا وسواعي معدنية لضمان زوايا قائمة 90 درجة للمبنى + أسقف معلقة جبسيوم بورد متكاملة لكامل مساحة الشقة بتصميمات فخمة وإضاءة ذكية ليديكس.",
        },
        {
          label: "رخام وبورسلين الأرضيات",
          text: "توريد بورسلين فخم مستورد للصالات وغرف الاستقبال + رخام مطابخ كوارتز (Quartz) راقي ومقاوم للبقع والخدوش.",
        },
        {
          label: "تشطيب السباكة",
          text: "أطقم صحي ديورافيت (Duravit) معلقة بالكامل + خلاطات جروهي (Grohe) ألماني مستوردة + شاور روم مجهز بالكامل بجتات تدليك مائي.",
        },
        {
          label: "تشطيب الكهرباء",
          text: "مفاتيح وأوشاش تشطيب فاخرة ماركة سانشي أو أوشاش معدنية فخمة بضمان مدى الحياة.",
        },
        {
          label: "النجارة والأبواب",
          text: "أبواب غرف خشبية قشرة جوز طبيعي وحشوات متينة بدهانات إيطالية فاخرة + باب شقة مصفح فاخر ومؤمن بأعلى معايير الحماية.",
        },
        {
          label: "أعمال الدهانات",
          text: "تجهيز حوائط عالي المقاومة + تشطيب نهائي بدهانات جوتن نوت (Jotun Fenomastic) ضد البصمات والرطوبة والأملاح بألوان متناسقة فخمة.",
        },
        {
          label: "التصميم والإشراف الهندسي",
          text: "تصميم 3D متكامل لكافة الغرف مع مخططات تنفيذية هندسية كاملة + إشراف هندسي يومي على التنفيذ مع تسليم تقارير دورية للعميل لضمان مطابقة التنفيذ للتصميم.",
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

  // Initialize page on load with "gold" specs
  renderSpecs("gold");
})();
