const lessons = [
  {
    title: "Computer Basics",
    tag: "Chapter 1",
    intro: "الكمبيوتر جهاز إلكتروني قابل للبرمجة يقبل البيانات، يعالجها، يخزن النتائج، ويخرج معلومات مفيدة.",
    terms: ["Input", "Processing", "Output", "Storage", "Communications"],
    blocks: [
      ["Data vs Information", ["Data هي حقائق خام.", "Information هي data بعد المعالجة وأصبحت ذات معنى.", "End users هم الأشخاص الذين يستخدمون الكمبيوتر للحصول على معلومات."]],
      ["لماذا نتعلم الكمبيوتر؟", ["لأنه أصبح جزءاً أساسياً من الحياة الشخصية والعملية.", "يدخل في التعليم، الصناعة، البنوك، الصحة، الاتصالات، والبحث العلمي."]],
      ["العمليات الأساسية", ["Input: إدخال البيانات.", "Processing: معالجة البيانات.", "Output: عرض النتائج.", "Storage: حفظ البيانات والبرامج.", "Communications: إرسال واستقبال البيانات."]]
    ]
  },
  {
    title: "Hardware and Software",
    tag: "Chapter 1",
    intro: "Hardware هو كل جزء مادي يمكن لمسه، أما Software فهو البرامج والتعليمات التي تخبر الكمبيوتر ماذا يفعل.",
    terms: ["Hardware", "Software", "System software", "Application software"],
    blocks: [
      ["Hardware", ["Input devices مثل Keyboard و Mouse و Scanner.", "Output devices مثل Monitor و Printer و Speaker.", "Processing device: CPU.", "Storage hardware مثل USB flash drive و hard disk."]],
      ["System Software", ["برامج تسمح للكمبيوتر بالعمل.", "أهم مثال: Operating System مثل Windows و Linux و macOS.", "Utilities تساعد في الصيانة والحماية والنسخ الاحتياطي."]],
      ["Application Software", ["برامج تساعد المستخدم في مهمة محددة.", "مثل Word, Photoshop, browsers, games.", "ممكن تكون installed أو web-based."]]
    ]
  },
  {
    title: "Computer Generations and Types",
    tag: "History",
    intro: "المحاضرة ركزت على تطور الحواسيب وأنواعها حسب الحجم والقوة والاستخدام.",
    terms: ["Vacuum tubes", "Transistors", "IC", "Microprocessor", "Supercomputer"],
    blocks: [
      ["Generations", ["First generation: Vacuum tubes.", "Second generation: Transistors.", "Third generation: Integrated Circuits ICs.", "Fourth generation: Microprocessors."]],
      ["Computer Types", ["Personal computer: desktop/laptop لشخص واحد.", "Mobile device: smartphone/tablet.", "Embedded computer: داخل جهاز مثل سيارة أو thermostat.", "Mainframe: للبنوك والجامعات والمؤسسات الكبيرة.", "Supercomputer: الأسرع والأقوى والأغلى."]],
      ["نقطة امتحان", ["Microcomputers مثل IBM PC و Apple Macintosh انتشرت في early 1980s.", "Tablet computer يستخدم touch أو digital pen."]]
    ]
  },
  {
    title: "Data Representation",
    tag: "Chapter 2",
    intro: "الكمبيوتر يفهم حالتين فقط: ON و OFF، ونمثلهما بـ 1 و 0. لذلك كل البيانات تتحول إلى binary.",
    terms: ["Bit", "Byte", "ASCII", "Binary", "Word size"],
    blocks: [
      ["Units", ["Bit أصغر وحدة بيانات: 0 أو 1.", "Byte = 8 bits.", "Byte واحد يمثل أعداد من 0 إلى 255.", "Word size هو عدد الـ bits الذي يستطيع CPU التعامل معه مرة واحدة."]],
      ["Coding Systems", ["تستخدم لتمثيل البيانات والبرامج بطريقة يفهمها الكمبيوتر.", "ASCII يستخدم لتمثيل text-based data.", "الصور والصوت والفيديو لها أنظمة تمثيل أخرى."]],
      ["Number Systems", ["Decimal base 10.", "Binary base 2.", "Octal base 8.", "Hexadecimal base 16 وفيه A=10 إلى F=15."]]
    ]
  },
  {
    title: "Number Systems",
    tag: "Conversions",
    intro: "التحويلات مهمة جداً في Chapter 2: من binary/octal/hex إلى decimal والعكس.",
    terms: ["1101₂ = 13", "46₈ = 38", "A5₁₆ = 165", "A = 10"],
    blocks: [
      ["إلى Decimal", ["Binary: استخدم powers of 2.", "Octal: اضرب كل رقم في power of 8.", "Hex: اضرب كل رقم في power of 16.", "مثال: 1101₂ = 8 + 4 + 1 = 13."]],
      ["من Decimal", ["إلى binary: اقسم على 2 وخذ البواقي.", "إلى octal: اقسم على 8.", "إلى hex: اقسم على 16.", "اقرأ البواقي من أسفل لأعلى."]],
      ["أمثلة", ["46₈ = 4×8 + 6 = 38.", "A5₁₆ = 10×16 + 5 = 165.", "11111111₂ = 255."]]
    ]
  },
  {
    title: "Inside the Computer",
    tag: "CPU & Memory",
    intro: "داخل الـ system unit توجد مكونات مثل motherboard, CPU, memory, buses, expansion cards.",
    terms: ["Motherboard", "CPU", "ALU", "CU", "Cache", "Bus"],
    blocks: [
      ["CPU", ["CPU هو processing device.", "ALU performs arithmetic and logic operations.", "Control Unit يوجه وينسق تنفيذ التعليمات.", "FPU يتعامل مع floating-point operations."]],
      ["Performance", ["Clock speed تقاس بـ MHz أو GHz.", "Word size كمية البيانات التي يتعامل معها CPU مرة واحدة.", "Dual-core CPU يحتوي مكونات معالجين على شريحة واحدة."]],
      ["Memory and Bus", ["RAM volatile memory وتفقد محتواها عند انقطاع الكهرباء.", "ROM non-volatile ولا تفقد محتواها عند انقطاع الكهرباء.", "L1 cache هي الأسرع.", "Bus مسار إلكتروني تنتقل عليه البيانات."]]
    ]
  },
  {
    title: "Logic and Machine Cycle",
    tag: "Chapter 2",
    intro: "الكمبيوتر ينفذ التعليمات باستخدام دوائر منطقية ومراحل متكررة تسمى machine cycle.",
    terms: ["Truth table", "NOT gate", "Transistors", "Fetch", "Decode", "Execute", "Store"],
    blocks: [
      ["Logic Gates", ["Truth table تعرض كل احتمالات المدخلات والخرج الناتج.", "NOT gate يعكس input.", "Modern logic gates مبنية أساساً على transistors."]],
      ["Machine Cycle", ["Fetch: جلب التعليمة.", "Decode: فك وفهم التعليمة.", "Execute: تنفيذها.", "Store: تخزين النتيجة."]],
      ["Future Technologies", ["Nanotechnology: مكونات على مستوى ذري/جزيئي.", "Optical computer يستخدم light في الحسابات."]]
    ]
  },
  {
    title: "Operating Systems and Utilities",
    tag: "Chapter 3",
    intro: "Operating System مجموعة برامج تدير موارد الكمبيوتر وتسمح بتشغيل البرامج والتعامل مع الأجهزة.",
    terms: ["OS", "Multitasking", "Virtual memory", "Utilities", "Backup"],
    blocks: [
      ["Functions of OS", ["Boot process.", "Launch applications.", "Manage files and storage.", "Control hardware configuration.", "Protect from unauthorized use."]],
      ["Efficiency", ["Multitasking: فتح أكثر من برنامج في نفس الوقت.", "Multiprocessing: استخدام أكثر من CPU/core.", "Virtual memory: استخدام جزء من hard drive كذاكرة إضافية للـ RAM."]],
      ["Utilities", ["Diagnostic programs.", "Disk management.", "Uninstall utilities.", "File compression.", "Backup programs.", "Security programs مثل antivirus و antispyware."]]
    ]
  },
  {
    title: "Application Software",
    tag: "Chapter 3",
    intro: "Application software يساعد المستخدم على أداء مهام محددة، وله أنواع حسب الحقوق وطريقة التشغيل.",
    terms: ["Installed", "Web-based", "Commercial", "Freeware", "Open source"],
    blocks: [
      ["Examples", ["Word processing.", "Web browsing.", "Games.", "Tax preparation.", "Image editing."]],
      ["Ownership Rights", ["Commercial software يباع للمستخدم.", "Freeware مجاني لكنه copyrighted.", "Open source مصدره متاح للتعديل والمشاركة.", "Shareware غالباً تجريبي أو honor system."]],
      ["Installed vs Web-based", ["Installed يعمل من الجهاز بعد التثبيت.", "Web-based يعمل مباشرة من الإنترنت أو browser.", "Cloud apps تقلل الحاجة للتخزين المحلي أحياناً."]]
    ]
  },
  {
    title: "Big Data",
    tag: "Big Data",
    intro: "Big Data هي datasets ضخمة أو معقدة لا تكفي معها أدوات قواعد البيانات التقليدية، وتحتاج تقنيات وتحليلات خاصة.",
    terms: ["Volume", "Velocity", "Variety", "Veracity", "Value"],
    blocks: [
      ["Five Vs", ["Volume: كمية بيانات ضخمة.", "Velocity: سرعة تدفق البيانات.", "Variety: أنواع وصيغ مختلفة.", "Veracity: موثوقية وجودة البيانات.", "Value: استخراج معنى وفائدة من البيانات."]],
      ["Sources", ["Social media.", "Transactional data.", "Sensor and IoT data.", "Machine logs.", "XML and JSON from APIs.", "Images, video, and text."]],
      ["Analytics Process", ["Data collection.", "Data cleaning.", "Data integration.", "Data storage.", "Analysis and visualization.", "Decision making."]],
      ["Why Important?", ["Improves decision making.", "Helps fraud detection.", "Personalizes promotions.", "Supports innovation and prediction."]]
    ]
  }
];

const labs = [
  { title: "Data vs Information", desc: "درجة الطالب 85 تعتبر data، وبعد حساب التقدير تصبح information.", steps: ["Raw fact: 85", "Processing: compare with grade scale", "Information: Grade A or B"] },
  { title: "Binary to Decimal", desc: "تحويل 1101₂ إلى decimal.", steps: ["1×8", "1×4", "0×2", "1×1", "Total = 13"] },
  { title: "Octal to Decimal", desc: "تحويل 46₈.", steps: ["4×8¹ = 32", "6×8⁰ = 6", "32 + 6 = 38"] },
  { title: "Hex to Decimal", desc: "تحويل A5₁₆.", steps: ["A = 10", "10×16 = 160", "5×1 = 5", "Total = 165"] },
  { title: "Machine Cycle", desc: "كل instruction تمر بأربع مراحل أساسية.", steps: ["Fetch", "Decode", "Execute", "Store"] },
  { title: "Big Data Retail", desc: "متجر كبير يجمع transactions وreviews وclicks.", steps: ["Volume: ملايين العمليات", "Velocity: تدفق مستمر", "Variety: structured + text", "Veracity: جودة متفاوتة", "Value: توقع الطلب"] }
];

const quiz = [
  ["Ch1","What is the primary reason to learn about computers today?",["To become a professional programmer","Because they are essential and integrated into business and personal lives","To repair hardware","To understand binary code only"],1,"الكمبيوتر أصبح جزءاً أساسياً من الحياة والعمل."],
  ["Ch1","What is a computer?",["A mechanical device only","A programmable electronic device that accepts data, performs operations, and stores results","A communication-only device","A type of software"],1,"التعريف الأساسي: programmable electronic device."],
  ["Ch1","Which is NOT one of the five basic computer operations?",["Input","Processing","Printing","Communications"],2,"Printing ليست من الخمس الأساسية، output هو المصطلح الأوسع."],
  ["Ch1","What is the difference between data and information?",["Data is processed","Data is raw facts; information is processed meaningful data","They are the same","Data is always text"],1,"Data خام، Information ذات معنى بعد المعالجة."],
  ["Ch1","People who use a computer to obtain information are called:",["Programmers","Systems analysts","End users","Security specialists"],2,"End users هم المستخدمون النهائيون."],
  ["Ch1","First-generation computers were powered by:",["Transistors","Integrated circuits","Vacuum tubes","Microprocessors"],2,"First generation استخدمت vacuum tubes."],
  ["Ch1","Which generation introduced integrated circuits ICs?",["First","Second","Third","Fourth"],2,"ICs ظهرت في third generation."],
  ["Ch1","Microcomputers like IBM PC and Apple Macintosh became popular in:",["1950s","1960s","Early 1980s","1990s"],2,"انتشرت في early 1980s."],
  ["Ch1","Physical parts such as motherboard and CPU are known as:",["Software","Hardware","Firmware","Programs"],1,"الأجزاء المادية هي hardware."],
  ["Ch1","Which is an input device?",["Monitor","Printer","Keyboard","Speaker"],2,"Keyboard input device."],
  ["Ch1","Which device presents results to the user?",["Mouse","Scanner","Microphone","Monitor"],3,"Monitor output device."],
  ["Ch1","CPU is classified as a:",["Storage device","Input device","Processing device","Communications device"],2,"CPU processing device."],
  ["Ch1","Which is storage hardware?",["CPU","RAM","USB flash drive","Modem"],2,"USB flash drive storage hardware."],
  ["Ch1","Programs that allow a computer to operate are called:",["Application software","System software","Hardware drivers","Utility programs"],1,"System software يسمح بتشغيل النظام."],
  ["Ch1","Which is an example of system software?",["Microsoft Word","Adobe Photoshop","Windows","Minecraft"],2,"Windows operating system."],
  ["Ch1","Programs for tasks like writing letters or games are:",["Operating systems","System software","Application software","Utility software"],2,"Application software لمهام محددة."],
  ["Ch1","A computer embedded in a product like car or thermostat is:",["Personal computer","Mainframe","Embedded computer","Supercomputer"],2,"Embedded computer داخل منتج."],
  ["Ch1","A smartphone is an example of:",["Embedded computer","Mobile device","Personal computer","Midrange server"],1,"Smartphone mobile device."],
  ["Ch1","A desktop or laptop for one person is a:",["Mainframe","Supercomputer","Personal computer PC","Server"],2,"PC لشخص واحد غالباً."],
  ["Ch1","Portable computer used with digital pen or touch input is:",["Notebook","Desktop","Tablet computer","Netbook"],2,"Tablet يعتمد على touch/pen."],
  ["Ch1","Powerful computers for banks and universities are:",["Supercomputers","Mainframe computers","Midrange servers","Personal computers"],1,"Mainframes للمؤسسات الكبيرة."],
  ["Ch1","Fastest, most expensive, most powerful type is:",["Mainframe","Server","Supercomputer","Workstation"],2,"Supercomputer هو الأقوى."],
  ["Ch1","Big Data refers to:",["Small organized datasets","Datasets so large/complex traditional software is inadequate","Data only on mainframes","Database software"],1,"Big Data ضخمة أو معقدة."],
  ["Ch1","Four V's include Volume, Variety, Velocity, and:",["Value","Veracity","Viability","Virtuality"],1,"في ملف الأسئلة: Veracity."],
  ["Ch1","IoT things:",["Are not connected","Have unique identities and communicate/exchange data","Only business use","All PCs"],1,"IoT أجهزة متصلة تتبادل البيانات."],
  ["Ch2","Coding systems are used to:",["Connect hardware","Represent data and programs for the computer","Increase speed","Provide power"],1,"Coding systems تمثل البيانات والبرامج."],
  ["Ch2","Smallest unit of data in binary computer:",["Byte","Bit","Word","Kilobyte"],1,"Bit أصغر وحدة."],
  ["Ch2","How many bits in one byte?",["4","2","8","16"],2,"Byte = 8 bits."],
  ["Ch2","ASCII primarily represents:",["Numeric values only","Images","Text-based data","Audio"],2,"ASCII للنصوص."],
  ["Ch2","Binary 1101₂ equals decimal:",["10","12","13","15"],2,"8+4+1=13."],
  ["Ch2","A byte can represent numbers between 0 and:",["127","255","512","1024"],1,"11111111₂ = 255."],
  ["Ch2","Word size is:",["Amount of RAM","Number of bits CPU handles at one time","Hard drive capacity","Clock speed"],1,"Word size عدد bits في مرة واحدة."],
  ["Ch2","Octal 46₈ equals decimal:",["36","38","40","42"],1,"4×8+6=38."],
  ["Ch2","In hexadecimal, A represents:",["10","11","15","16"],0,"A=10."],
  ["Ch2","Hexadecimal A5₁₆ equals decimal:",["150","155","160","165"],3,"10×16+5=165."],
  ["Ch2","A truth table lists:",["Power consumption","All possible inputs and outputs","Physical size","Cost"],1,"Truth table تعرض المدخلات والخرج."],
  ["Ch2","Which logic gate inverts input?",["AND","OR","NOT","NAND"],2,"NOT gate يعكس الإشارة."],
  ["Ch2","Modern logic gates are primarily based on:",["Vacuum tubes","Relays","Transistors","Mechanical switches"],2,"Transistors."],
  ["Ch2","Main circuit board is called:",["CPU","RAM module","Motherboard","Expansion card"],2,"Motherboard."],
  ["Ch2","CPU with two processors on one chip is:",["Dual-processor computer","Dual-core CPU","Double-speed CPU","Core 2 Duo"],1,"Dual-core CPU."],
  ["Ch2","CPU clock speed measured in:",["Bits per second","MHz or GHz","Bytes","Inches"],1,"Clock speed بـ MHz/GHz."],
  ["Ch2","Amount of data CPU manipulates at one time:",["Cache size","Clock speed","Word size","Bus width"],2,"Word size."],
  ["Ch2","Fastest cache memory:",["L1","L2","L3","All same"],0,"L1 fastest."],
  ["Ch2","Electronic path over which data travels:",["Port","Bus","Cable","Wire"],1,"Bus."],
  ["Ch2","RAM is what type of memory?",["Read-only","Volatile","Non-volatile","Permanent storage"],1,"RAM volatile."],
  ["Ch2","ROM is non-volatile meaning:",["Requires constant power","Contents not lost when power removed","Can only be read","Very slow"],1,"ROM لا تفقد محتواها بانقطاع الكهرباء."],
  ["Ch2","CPU component for arithmetic integer operations:",["Control Unit","FPU","ALU","Prefetch Unit"],2,"ALU performs arithmetic/logic."],
  ["Ch2","Fetch, Decode, Execute, Store is:",["Processing cycle","System cycle","Machine cycle","Clock cycle"],2,"Machine cycle."],
  ["Ch2","Tiny computers/components at atomic or molecular level:",["Biotechnology","Nanotechnology","Micro-technology","Optical technology"],1,"Nanotechnology."],
  ["Ch2","Optical computer uses:",["Electricity","Magnetic fields","Light","Heat"],2,"Optical computing uses light."]
].map(([topic, question, answers, correct, explanation]) => ({ topic, question, answers, correct, explanation }));

const sheetItems = [
  ["Chapter 1", ["Computer operations: Input, Processing, Output, Storage, Communications.", "Data خام، Information معالجة.", "Hardware أجزاء مادية، Software برامج.", "First gen vacuum tubes, second transistors, third IC, fourth microprocessor."]],
  ["Devices", ["Keyboard input.", "Monitor output.", "CPU processing.", "USB flash drive storage.", "Smartphone mobile device.", "Thermostat/car system embedded computer."]],
  ["Chapter 2", ["Bit أصغر وحدة.", "Byte = 8 bits.", "Byte max unsigned value = 255.", "ASCII يمثل text.", "Word size = bits handled by CPU at once."]],
  ["Conversions", ["1101₂ = 13.", "46₈ = 38.", "A5₁₆ = 165.", "A in hex = 10.", "Decimal to base: divide by base."]],
  ["CPU & Memory", ["Motherboard main circuit board.", "ALU calculations.", "CU control.", "L1 cache fastest.", "RAM volatile.", "ROM non-volatile.", "Bus data path."]],
  ["Software", ["System software includes OS and utilities.", "Application software performs specific tasks.", "Utilities: backup, antivirus, compression, uninstall, disk management."]],
  ["Big Data", ["Volume: amount.", "Velocity: speed.", "Variety: data types.", "Veracity: reliability.", "Value: useful insight.", "Sources include IoT, transactions, social media, logs, JSON/XML."]]
];

let activeLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem("itCompletedLessons") || "[]"));
let currentQuestion = 0;
let answersState = Array(quiz.length).fill(null);

const $ = (selector) => document.querySelector(selector);

function renderStats() {
  $("#lessonCount").textContent = lessons.length;
  $("#questionCount").textContent = quiz.length;
  $("#exampleCount").textContent = labs.length;
}

function updateProgress() {
  $("#progressText").textContent = `${completed.size} من ${lessons.length}`;
  $("#progressBar").style.width = `${(completed.size / lessons.length) * 100}%`;
  localStorage.setItem("itCompletedLessons", JSON.stringify([...completed]));
}

function renderLessons() {
  $("#lessonList").innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab ${index === activeLesson ? "active" : ""} ${completed.has(index) ? "done" : ""}" data-lesson="${index}">
      ${lesson.title}<small>${lesson.tag}</small>
    </button>
  `).join("");

  const lesson = lessons[activeLesson];
  $("#lessonBadge").textContent = `درس ${activeLesson + 1}`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonIntro").textContent = lesson.intro;
  $("#lessonContent").innerHTML = `
    <div class="term-strip">${lesson.terms.map((term) => `<span>${term}</span>`).join("")}</div>
    ${lesson.blocks.map(([title, items]) => `
      <div class="concept-box">
        <strong>${title}</strong>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `).join("")}
  `;
  $("#markDone").textContent = completed.has(activeLesson) ? "تمت بالفعل" : "تمت المراجعة";
  updateProgress();
}

function renderLabs() {
  $("#labGrid").innerHTML = labs.map((lab) => `
    <article class="lab-card">
      <h3>${lab.title}</h3>
      <p>${lab.desc}</p>
      <div class="steps">${lab.steps.map((step) => `<span>${step}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderQuiz() {
  const q = quiz[currentQuestion];
  $("#questionNumber").textContent = `سؤال ${currentQuestion + 1} من ${quiz.length}`;
  $("#quizTopic").textContent = q.topic;
  $("#questionText").textContent = q.question;
  $("#answers").innerHTML = q.answers.map((answer, index) => {
    const selected = answersState[currentQuestion];
    const cls = selected === null ? "" : index === q.correct ? "correct" : selected === index ? "wrong" : "";
    return `<button class="answer-btn ${cls}" data-answer="${index}">${String.fromCharCode(97 + index)}) ${answer}</button>`;
  }).join("");

  const feedback = $("#feedback");
  if (answersState[currentQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = answersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === quiz[index].correct).length;
  $("#scoreText").textContent = `${correct} / ${solved.length}`;
}

function renderSheet() {
  $("#sheetGrid").innerHTML = sheetItems.map(([title, items]) => `
    <article class="sheet-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    nav.classList.add("active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    $(`#${nav.dataset.view}`).classList.add("active");
  }

  const lessonButton = event.target.closest(".lesson-tab");
  if (lessonButton) {
    activeLesson = Number(lessonButton.dataset.lesson);
    renderLessons();
  }

  if (event.target.id === "markDone") {
    completed.add(activeLesson);
    renderLessons();
  }

  const answer = event.target.closest(".answer-btn");
  if (answer) {
    answersState[currentQuestion] = Number(answer.dataset.answer);
    renderQuiz();
  }

  if (event.target.id === "nextQuestion") {
    currentQuestion = Math.min(quiz.length - 1, currentQuestion + 1);
    renderQuiz();
  }

  if (event.target.id === "prevQuestion") {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  }
});

renderStats();
renderLessons();
renderLabs();
renderQuiz();
renderSheet();
