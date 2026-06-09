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
    terms: ["Binary = 2", "Octal = 8", "Decimal = 10", "Hex = 16", "A=10 ... F=15"],
    blocks: [
      ["القاعدة الذهبية", ["أي نظام إلى Decimal: اضرب كل رقم في قوة الأساس واجمع.", "من Decimal لأي نظام: اقسم على الأساس وخذ البواقي، ثم اقرأ البواقي من تحت لفوق."]],
      ["الأساسات", ["Binary base 2 وأرقامه 0 و 1.", "Octal base 8 وأرقامه من 0 إلى 7.", "Decimal base 10 وأرقامه من 0 إلى 9.", "Hexadecimal base 16 وأرقامه 0 إلى 9 ثم A=10, B=11, C=12, D=13, E=14, F=15."]],
      ["إلى Decimal", ["Binary: استخدم powers of 2. مثال 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13.", "Octal: استخدم powers of 8. مثال 46₈ = 4×8¹ + 6×8⁰ = 38.", "Hex: استخدم powers of 16. مثال A5₁₆ = 10×16¹ + 5×16⁰ = 165."]],
      ["من Decimal", ["13₁₀ إلى Binary: 13÷2 باقي 1، 6÷2 باقي 0، 3÷2 باقي 1، 1÷2 باقي 1، النتيجة 1101₂.", "38₁₀ إلى Octal: 38÷8 باقي 6، 4÷8 باقي 4، النتيجة 46₈.", "165₁₀ إلى Hex: 165÷16 باقي 5، 10÷16 باقي 10، و10=A، النتيجة A5₁₆."]],
      ["اختصارات Binary", ["Octal إلى Binary: كل رقم Octal يتحول إلى 3 bits. مثال 46₈ = 100 110₂.", "Hex إلى Binary: كل رقم Hex يتحول إلى 4 bits. مثال A5₁₆ = 1010 0101₂.", "العكس صحيح: قسم الـ Binary إلى مجموعات 3 للتحويل إلى Octal، أو مجموعات 4 للتحويل إلى Hex."]]
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
  { title: "Decimal to Binary", desc: "تحويل 13₁₀ إلى binary.", steps: ["13 ÷ 2 = 6 R1", "6 ÷ 2 = 3 R0", "3 ÷ 2 = 1 R1", "1 ÷ 2 = 0 R1", "Read up: 1101₂"] },
  { title: "Decimal to Octal", desc: "تحويل 38₁₀ إلى octal.", steps: ["38 ÷ 8 = 4 R6", "4 ÷ 8 = 0 R4", "Read up: 46₈"] },
  { title: "Decimal to Hex", desc: "تحويل 165₁₀ إلى hexadecimal.", steps: ["165 ÷ 16 = 10 R5", "10 ÷ 16 = 0 R10", "10 = A", "Read up: A5₁₆"] },
  { title: "Octal and Hex shortcuts", desc: "اختصارات التحويل مع binary.", steps: ["46₈: 4=100 and 6=110", "46₈ = 100110₂", "A5₁₆: A=1010 and 5=0101", "A5₁₆ = 10100101₂"] },
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

const extraQuiz = [
  ["Big Data","Which V describes the amount or size of data?",["Velocity","Volume","Veracity","Variety"],1,"Volume يعني حجم وكمية البيانات."],
  ["Big Data","Which V describes how fast data arrives?",["Velocity","Value","Volume","Veracity"],0,"Velocity هي سرعة تدفق البيانات."],
  ["Big Data","Which V describes different data formats and sources?",["Variety","Volume","Value","Virtuality"],0,"Variety تعني تنوع المصادر والصيغ."],
  ["Big Data","Which V describes trustworthiness and accuracy?",["Velocity","Veracity","Volume","Variety"],1,"Veracity هي جودة وموثوقية البيانات."],
  ["Big Data","Which V focuses on useful insights from data?",["Value","Velocity","Variety","Volume"],0,"Value تعني الفائدة والمعنى المستخرج."],
  ["Big Data","Which is structured data?",["SQL database table","Instagram photo","Free text review","Video file"],0,"الجداول في قواعد البيانات structured data."],
  ["Big Data","Which is unstructured data?",["SQL table","Spreadsheet with fixed columns","Video file","CSV with columns"],2,"الفيديو والصور والنصوص الحرة unstructured غالباً."],
  ["Big Data","JSON from a web API is usually:",["Semi-structured data","No data","Only hardware","A CPU unit"],0,"JSON/XML أمثلة semi-structured."],
  ["Big Data","First step in big data analytics is usually:",["Data visualization","Data collection","Deleting all data","Buying a monitor"],1,"العملية تبدأ بجمع البيانات."],
  ["Big Data","Purpose of data cleaning is to:",["Add errors","Remove duplicates and handle missing values","Make data larger only","Stop analysis"],1,"Data cleaning يحسن جودة البيانات."],
  ["Big Data","Combining datasets from different sources is:",["Data integration","Data deletion","Data typing","Data printing"],0,"Data integration يعني دمج المصادر."],
  ["Big Data","A scalable big data storage example is:",["Hadoop or cloud storage","Keyboard","Monitor","ROM only"],0,"Hadoop/cloud يستخدمان للتخزين واسع النطاق."],
  ["Big Data","Analytics that describes what happened is:",["Descriptive analytics","Predictive analytics","Prescriptive analytics","Optical analytics"],0,"Descriptive يصف الماضي."],
  ["Big Data","Analytics that predicts future outcomes is:",["Diagnostic","Predictive","Descriptive","Manual"],1,"Predictive يتوقع المستقبل."],
  ["Big Data","Analytics that suggests actions is:",["Prescriptive","Text typing","Storage only","Formatting"],0,"Prescriptive تقترح قرارات أو أفعال."],
  ["OS","The operating system is mainly:",["A hardware cable","A collection of programs managing the computer","Only a game","A storage device"],1,"OS يدير موارد الجهاز ويشغل التطبيقات."],
  ["OS","Boot process means:",["Starting and loading the operating system","Deleting files","Printing a document","Compressing video"],0,"Boot هو بدء الجهاز وتحميل النظام."],
  ["OS","Multitasking means:",["Only one program can run","More than one task open at a time","No CPU needed","Only games run"],1,"Multitasking يسمح بأكثر من مهمة."],
  ["OS","Virtual memory uses:",["Hard drive space as extra RAM","Monitor brightness","Keyboard shortcuts","Only ROM"],0,"Virtual memory يستخدم التخزين كامتداد للذاكرة."],
  ["OS","Multiprocessing involves:",["More than one CPU/core","Only one bit","No memory","Printing only"],0,"Multiprocessing يستخدم أكثر من معالج أو core."],
  ["OS","A mobile operating system example is:",["Android","Microsoft Word","USB","ALU"],0,"Android نظام تشغيل للموبايل."],
  ["OS","UNIX is known for being:",["Multiuser and multitasking","Only a printer","A keyboard model","A storage unit"],0,"UNIX نظام multiuser/multitasking."],
  ["Utilities","Antivirus is a:",["Security utility","Input device","Programming language","CPU type"],0,"Antivirus من برامج الحماية."],
  ["Utilities","Backup software is used to:",["Create copies of data for recovery","Make CPU hotter","Invert bits","Open only games"],0,"Backup يحمي من فقدان البيانات."],
  ["Utilities","File compression utilities:",["Reduce file size","Increase monitor size","Delete OS","Convert CPU to RAM"],0,"Compression يقلل حجم الملفات."],
  ["Utilities","Uninstall utilities help:",["Remove programs properly","Install hardware physically","Convert decimal to binary","Run truth tables"],0,"Uninstall يزيل البرامج بطريقة صحيحة."],
  ["Software","Freeware is:",["Copyrighted software given away free","Always open source","Hardware","A CPU cache"],0,"Freeware مجاني لكنه copyrighted."],
  ["Software","Open source software means:",["Source code is available","It cannot be copied","It is a monitor","It is always paid"],0,"Open source مصدره متاح."],
  ["Software","Web-based software runs mainly through:",["Browser/Internet","Only ROM","Printer","Power cable"],0,"Web-based يعمل عبر المتصفح/الإنترنت."],
  ["Software","Installed software is usually:",["Stored and run on the local device","Only inside CPU registers","A type of bus","Not software"],0,"Installed يتثبت على الجهاز."],
  ["Hardware","A scanner is usually a/an:",["Input device","Output device","CPU","Operating system"],0,"Scanner يدخل بيانات/صور."],
  ["Hardware","A speaker is usually a/an:",["Input device","Output device","Storage device","Processor"],1,"Speaker output صوتي."],
  ["Hardware","A modem is related mainly to:",["Communications","Arithmetic only","Text encoding only","Screen display"],0,"Modem جهاز اتصالات."],
  ["CPU","Control Unit mainly:",["Coordinates and controls instructions","Stores files permanently","Displays images","Prints papers"],0,"CU يوجه تنفيذ التعليمات."],
  ["CPU","FPU handles:",["Floating-point operations","Keyboard input","Permanent storage","File compression only"],0,"FPU للعمليات العشرية/العائمة."],
  ["CPU","Cache memory is used to:",["Speed up access to frequently used data","Store files forever","Replace the monitor","Power the computer"],0,"Cache ذاكرة سريعة للبيانات المتكررة."],
  ["Memory","Volatile memory loses data when:",["Power is removed","Printer is connected","Text is typed","Mouse moves"],0,"RAM تفقد محتواها بانقطاع الكهرباء."],
  ["Memory","Non-volatile memory:",["Keeps contents without power","Always loses data","Is only screen pixels","Cannot store anything"],0,"Non-volatile تحفظ المحتوى بدون كهرباء."],
  ["Number Systems","Decimal system has base:",["2","8","10","16"],2,"Decimal base 10."],
  ["Number Systems","Binary system has base:",["2","8","10","16"],0,"Binary base 2."],
  ["Number Systems","Octal system has base:",["2","8","10","16"],1,"Octal base 8."],
  ["Number Systems","Hexadecimal system has base:",["2","8","10","16"],3,"Hex base 16."],
  ["Number Systems","Hex digit F equals decimal:",["10","12","15","16"],2,"F=15."],
  ["Number Systems","Binary 1001₂ equals:",["7","8","9","10"],2,"1001₂ = 8+1 = 9."],
  ["Logic","AND gate outputs 1 when:",["All inputs are 1","All inputs are 0","One input is 0","Input is inverted"],0,"AND يحتاج كل المدخلات 1."],
  ["Logic","OR gate outputs 1 when:",["At least one input is 1","All inputs are 0 only","It inverts input","No input exists"],0,"OR يكفي مدخل واحد 1."],
  ["Logic","NOT gate with input 0 gives:",["0","1","2","Error"],1,"NOT يعكس 0 إلى 1."],
  ["Logic","A truth table for two binary inputs has:",["2 rows","4 rows","8 rows","16 rows"],1,"مدخلان binary يعطيان 2^2 = 4 احتمالات."],
  ["Devices","A mainframe is usually used by:",["Large organizations","Only one student","A toy car","A keyboard"],0,"Mainframes للمؤسسات الكبيرة."],
  ["Devices","A supercomputer is best for:",["Very complex scientific calculations","Typing only","Displaying icons","Deleting files"],0,"Supercomputers للحسابات المعقدة جداً."]
].map(([topic, question, answers, correct, explanation]) => ({ topic, question, answers, correct, explanation }));

quiz.push(...extraQuiz);

const trueFalseQuiz = [
  ["Basics","A computer is programmable and electronic.",true,"الكمبيوتر جهاز إلكتروني قابل للبرمجة."],
  ["Basics","Data is always more meaningful than information.",false,"العكس: information هي data بعد المعالجة."],
  ["Basics","Input means entering data into the computer.",true,"Input إدخال البيانات."],
  ["Basics","Printing is one of the five basic operations instead of output.",false,"المصطلح الأساسي هو Output."],
  ["Basics","Communications is one of the basic computer operations.",true,"Communications ضمن العمليات الخمس في المحاضرة."],
  ["Basics","End users are people who use computers to obtain information.",true,"هذا تعريف end users."],
  ["Basics","Software refers to physical parts of the computer.",false,"الأجزاء المادية هي hardware."],
  ["Basics","Hardware includes the motherboard and CPU.",true,"هذه أجزاء مادية."],
  ["Basics","A keyboard is an output device.",false,"Keyboard input device."],
  ["Basics","A monitor is an output device.",true,"Monitor يعرض النتائج."],
  ["Basics","CPU is a processing device.",true,"CPU يعالج البيانات."],
  ["Basics","USB flash drive is a storage hardware example.",true,"USB يستخدم للتخزين."],
  ["Basics","System software includes the operating system.",true,"OS أهم system software."],
  ["Basics","Microsoft Word is system software.",false,"Word application software."],
  ["Basics","Application software helps users perform specific tasks.",true,"مثل الكتابة والتصفح والألعاب."],
  ["Generations","First-generation computers used vacuum tubes.",true,"First gen = vacuum tubes."],
  ["Generations","Second-generation computers used integrated circuits.",false,"Second gen = transistors."],
  ["Generations","Third-generation computers introduced ICs.",true,"Third gen = integrated circuits."],
  ["Generations","Fourth-generation computers are associated with microprocessors.",true,"Fourth gen = microprocessors."],
  ["Generations","Microcomputers became popular in the early 1980s.",true,"حسب ملف الأسئلة."],
  ["Devices","Embedded computers are built into products for specific tasks.",true,"مثل السيارات والثرموستات."],
  ["Devices","A smartphone is a mainframe computer.",false,"Smartphone mobile device."],
  ["Devices","A desktop computer is a personal computer.",true,"Desktop PC."],
  ["Devices","Tablet computers can use touch or digital pen input.",true,"Tablet يستخدم touch/pen."],
  ["Devices","Mainframes are commonly used by large organizations.",true,"بنوك وجامعات ومؤسسات."],
  ["Devices","Supercomputers are the slowest type of computer.",false,"هي الأسرع والأقوى."],
  ["Devices","A thermostat can contain an embedded computer.",true,"مثال embedded."],
  ["Devices","A server hosts programs/data for a network.",true,"Server يخدم شبكة."],
  ["Representation","Computers represent data using binary states.",true,"0 و 1."],
  ["Representation","A bit is a group of eight bytes.",false,"Byte = 8 bits."],
  ["Representation","A byte contains 8 bits.",true,"قاعدة أساسية."],
  ["Representation","A byte can represent values from 0 to 255.",true,"8 bits unsigned max 255."],
  ["Representation","ASCII is mainly used for text-based data.",true,"ASCII للنصوص."],
  ["Representation","Word size is the number of bits CPU handles at one time.",true,"تعريف word size."],
  ["Representation","Binary system has base 10.",false,"Binary base 2."],
  ["Representation","Decimal system has base 10.",true,"Decimal = base 10."],
  ["Representation","Octal system has base 8.",true,"Octal = base 8."],
  ["Representation","Hexadecimal system has base 16.",true,"Hex = base 16."],
  ["Representation","In hexadecimal, A equals 10.",true,"A=10."],
  ["Representation","In hexadecimal, F equals 14.",false,"F=15."],
  ["Conversions","1101₂ equals 13 decimal.",true,"8+4+1=13."],
  ["Conversions","1001₂ equals 9 decimal.",true,"8+1=9."],
  ["Conversions","46₈ equals 38 decimal.",true,"4×8+6=38."],
  ["Conversions","A5₁₆ equals 165 decimal.",true,"10×16+5=165."],
  ["Conversions","To convert decimal to binary, divide repeatedly by 2.",true,"طريقة القسمة على الأساس."],
  ["Conversions","To convert octal to decimal, use powers of 16.",false,"Octal يستخدم powers of 8."],
  ["Logic","A truth table lists all input combinations and outputs.",true,"تعريف truth table."],
  ["Logic","NOT gate inverts the input signal.",true,"NOT يعكس."],
  ["Logic","AND outputs 1 if any input is 1.",false,"هذا OR، أما AND يحتاج كل المدخلات 1."],
  ["Logic","OR outputs 1 if at least one input is 1.",true,"تعريف OR."],
  ["Logic","Modern logic gates are primarily based on transistors.",true,"حسب المحاضرة."],
  ["Logic","A truth table with two binary inputs has four rows.",true,"2^2=4."],
  ["System Unit","Motherboard is the main circuit board.",true,"Motherboard اللوحة الرئيسية."],
  ["System Unit","CPU clock speed is measured in MHz or GHz.",true,"MHz/GHz."],
  ["System Unit","A dual-core CPU has two processing cores on one chip.",true,"Dual-core."],
  ["System Unit","ALU performs arithmetic and logic operations.",true,"ALU للحساب والمنطق."],
  ["System Unit","Control Unit stores user files permanently.",false,"CU ينسق التنفيذ، التخزين الدائم للـ storage."],
  ["System Unit","FPU handles floating-point operations.",true,"FPU للعشري/العائم."],
  ["System Unit","A bus is an electronic path for data.",true,"Bus مسار بيانات."],
  ["System Unit","L1 cache is faster than L2 and L3.",true,"L1 الأسرع."],
  ["Memory","RAM is volatile memory.",true,"RAM تفقد البيانات بانقطاع الكهرباء."],
  ["Memory","ROM is volatile memory.",false,"ROM non-volatile."],
  ["Memory","ROM contents are not lost when power is removed.",true,"Non-volatile."],
  ["Memory","Cache memory usually improves access speed.",true,"Cache تسرع الوصول."],
  ["Machine Cycle","Machine cycle includes Fetch, Decode, Execute, Store.",true,"المراحل الأربع."],
  ["Machine Cycle","Decode comes before Fetch.",false,"Fetch أولاً ثم Decode."],
  ["Machine Cycle","Execute is the stage where instruction action is performed.",true,"Execute ينفذ التعليمة."],
  ["Future Tech","Nanotechnology deals with tiny components at atomic/molecular level.",true,"تعريف nanotechnology."],
  ["Future Tech","Optical computers use light.",true,"Optical = light."],
  ["Software","Operating system manages computer resources.",true,"OS يدير الموارد."],
  ["Software","Application software is used for specific user tasks.",true,"مثل Word/games/browsers."],
  ["Software","Utility programs are useless for maintenance.",false,"Utilities للصيانة والحماية."],
  ["Software","Antivirus is a security utility.",true,"برنامج حماية."],
  ["Software","Backup programs help recover data after loss.",true,"Backup للاسترجاع."],
  ["Software","File compression increases file size intentionally.",false,"Compression يقلل الحجم."],
  ["Software","Uninstall utilities remove programs properly.",true,"Uninstall للإزالة الصحيحة."],
  ["Software","Freeware is always open source.",false,"Freeware مجاني لكنه ليس بالضرورة open source."],
  ["Software","Open source software has source code available.",true,"تعريف open source."],
  ["Software","Web-based software runs through the browser or Internet.",true,"Web-based عبر الويب."],
  ["OS","Boot process loads the operating system.",true,"Boot = بدء وتحميل OS."],
  ["OS","Multitasking allows more than one task open at a time.",true,"تعريف multitasking."],
  ["OS","Virtual memory uses hard drive space as extra RAM.",true,"Virtual memory."],
  ["OS","Multiprocessing uses more than one CPU/core.",true,"Multiprocessing."],
  ["OS","Android is a desktop-only operating system.",false,"Android mobile OS."],
  ["OS","UNIX is known as multiuser and multitasking.",true,"UNIX multiuser/multitasking."],
  ["Big Data","Big Data can be too large for traditional tools.",true,"تعريف Big Data."],
  ["Big Data","Volume means speed of data arrival.",false,"Velocity هي السرعة، Volume الحجم."],
  ["Big Data","Velocity means the speed of data flow.",true,"Velocity السرعة."],
  ["Big Data","Variety means different data types and sources.",true,"Variety التنوع."],
  ["Big Data","Veracity relates to data reliability.",true,"Veracity الموثوقية."],
  ["Big Data","Value means extracting useful insight.",true,"Value الفائدة."],
  ["Big Data","SQL tables are usually structured data.",true,"Structured."],
  ["Big Data","Video files are usually structured tables.",false,"Video غالباً unstructured."],
  ["Big Data","JSON data is often semi-structured.",true,"JSON semi-structured."],
  ["Big Data","Data cleaning removes duplicates and handles missing values.",true,"Cleaning للجودة."],
  ["Big Data","Data integration combines data from different sources.",true,"Integration دمج مصادر."],
  ["Big Data","Predictive analytics describes only past events.",false,"Predictive يتوقع المستقبل."],
  ["Big Data","Prescriptive analytics suggests actions.",true,"Prescriptive تقترح أفعال."],
  ["Big Data","IoT devices can generate sensor data.",true,"IoT مصدر مهم للبيانات."],
  ["Big Data","Big data can help fraud detection.",true,"من استخداماته في المؤسسات المالية."]
].map(([topic, statement, correct, explanation]) => ({ topic, statement, correct, explanation }));

const sheetItems = [
  ["Chapter 1", ["Computer operations: Input, Processing, Output, Storage, Communications.", "Data خام، Information معالجة.", "Hardware أجزاء مادية، Software برامج.", "First gen vacuum tubes, second transistors, third IC, fourth microprocessor."]],
  ["Devices", ["Keyboard input.", "Monitor output.", "CPU processing.", "USB flash drive storage.", "Smartphone mobile device.", "Thermostat/car system embedded computer."]],
  ["Chapter 2", ["Bit أصغر وحدة.", "Byte = 8 bits.", "Byte max unsigned value = 255.", "ASCII يمثل text.", "Word size = bits handled by CPU at once."]],
  ["Conversions", ["إلى Decimal: اضرب كل رقم في قوة الأساس واجمع.", "من Decimal: اقسم على الأساس وخذ البواقي من تحت لفوق.", "1101₂ = 13.", "46₈ = 38.", "A5₁₆ = 165.", "Octal ↔ Binary: كل رقم Octal = 3 bits.", "Hex ↔ Binary: كل رقم Hex = 4 bits."]],
  ["CPU & Memory", ["Motherboard main circuit board.", "ALU calculations.", "CU control.", "L1 cache fastest.", "RAM volatile.", "ROM non-volatile.", "Bus data path."]],
  ["Software", ["System software includes OS and utilities.", "Application software performs specific tasks.", "Utilities: backup, antivirus, compression, uninstall, disk management."]],
  ["Big Data", ["Volume: amount.", "Velocity: speed.", "Variety: data types.", "Veracity: reliability.", "Value: useful insight.", "Sources include IoT, transactions, social media, logs, JSON/XML."]]
];

const basmaPlan = [
  ["1", "اقرأ السؤال ودور على الكلمة المفتاحية: CPU, RAM, Big Data, Binary, OS."],
  ["2", "لو السؤال فيه رقم أو نظام عد، طبق قاعدة التحويل فوراً ولا تفكر كتير."],
  ["3", "لو السؤال تعريف، اختار الإجابة اللي فيها نفس معنى الكلمة المفتاحية."]
];

const basmaTricks = [
  {
    title: "التحويلات في 30 ثانية",
    badge: "أهم كارت",
    intro: "ده أكثر جزء ممكن يجيبلك درجات بسرعة.",
    rules: [
      ["Octal → Decimal", "لو رقمين: أول رقم × 8 + آخر رقم. مثال: 46₈ = 4×8 + 6 = 38."],
      ["Hex → Decimal", "لو رقمين: أول رقم × 16 + آخر رقم. A=10. مثال: A5₁₆ = 10×16 + 5 = 165."],
      ["Binary → Decimal", "اكتب من اليمين: 1, 2, 4, 8, 16. اجمع الخانات اللي فوقها 1 فقط."],
      ["Decimal → أي نظام", "اقسم على الأساس واقرأ البواقي من تحت لفوق."],
      ["تحذير", "Octal مستحيل يحتوي 8 أو 9. لو شفت 49₈ يبقى السؤال غلط أو الرقم مش Octal."]
    ]
  },
  {
    title: "جدول الأنظمة اللي لازم يتحفظ",
    badge: "حفظ مباشر",
    intro: "لو ضاعت منك، ارجع لهذا الجدول.",
    rules: [
      ["Binary", "Base 2، أرقامه 0 و 1."],
      ["Octal", "Base 8، أرقامه من 0 إلى 7."],
      ["Decimal", "Base 10، أرقامه من 0 إلى 9."],
      ["Hexadecimal", "Base 16، أرقامه 0-9 ثم A=10, B=11, C=12, D=13, E=14, F=15."]
    ]
  },
  {
    title: "اختصار Binary مع Octal و Hex",
    badge: "تريكة سريعة",
    intro: "لو التحويل مباشر بينهم، متحولش Decimal في النص.",
    rules: [
      ["Octal ↔ Binary", "كل رقم Octal = 3 bits. مثال: 46₈ = 100 110₂."],
      ["Hex ↔ Binary", "كل رقم Hex = 4 bits. مثال: A5₁₆ = 1010 0101₂."],
      ["لو Binary إلى Octal", "قسم من اليمين مجموعات 3."],
      ["لو Binary إلى Hex", "قسم من اليمين مجموعات 4."]
    ]
  },
  {
    title: "Input / Output / Storage في كلمة",
    badge: "أجهزة",
    intro: "اسأل نفسك الجهاز بيدخل، يطلع، ولا يخزن؟",
    rules: [
      ["Input", "Keyboard, Mouse, Scanner, Microphone."],
      ["Output", "Monitor, Printer, Speaker."],
      ["Storage", "USB flash drive, Hard disk, CD/DVD."],
      ["Processing", "CPU فقط تقريباً في أسئلة الامتحان."]
    ]
  },
  {
    title: "Hardware ولا Software؟",
    badge: "فرق مضمون",
    intro: "السؤال ده بيتحل باللمس.",
    rules: [
      ["Hardware", "أي حاجة ملموسة: CPU, motherboard, keyboard, monitor."],
      ["Software", "برامج وتعليمات: Windows, Word, Photoshop, games."],
      ["System software", "بيشغل الجهاز أو يصينه: OS, utilities, antivirus."],
      ["Application software", "المستخدم بيعمل عليه مهمة: writing, browsing, playing."]
    ]
  },
  {
    title: "Operating System",
    badge: "OS",
    intro: "لو السؤال فيه تشغيل الجهاز أو إدارة الموارد، غالباً OS.",
    rules: [
      ["OS يعمل إيه؟", "Boot, launch apps, manage files, control hardware, security."],
      ["Multitasking", "أكتر من برنامج مفتوح في نفس الوقت."],
      ["Virtual memory", "Hard disk space يُستخدم كأنه RAM إضافية."],
      ["Examples", "Windows, Linux, macOS, Android, iOS."]
    ]
  },
  {
    title: "RAM / ROM / Cache بدون لخبطه",
    badge: "Memory",
    intro: "احفظ الثلاث جمل دول.",
    rules: [
      ["RAM", "Volatile: الكهرباء تفصل، البيانات تضيع."],
      ["ROM", "Non-volatile: الكهرباء تفصل، البيانات تفضل موجودة."],
      ["Cache", "أسرع ذاكرة قريبة من CPU. L1 أسرع من L2 أسرع من L3."]
    ]
  },
  {
    title: "CPU keywords",
    badge: "Processing",
    intro: "امسك الكلمة في الاختيار.",
    rules: [
      ["ALU", "Arithmetic/Logic Unit = حسابات ومنطق."],
      ["CU", "Control Unit = تحكم وتنظيم."],
      ["Clock speed", "MHz أو GHz."],
      ["Word size", "عدد الـ bits اللي CPU يتعامل معها مرة واحدة."],
      ["Dual-core", "نواتين processing على chip واحدة."]
    ]
  },
  {
    title: "Machine Cycle",
    badge: "ترتيب",
    intro: "الترتيب بيتسأل زي ما هو.",
    rules: [
      ["احفظ", "Fetch → Decode → Execute → Store."],
      ["بالعربي", "هات التعليمة → افهمها → نفذها → خزّن النتيجة."]
    ]
  },
  {
    title: "Logic Gates",
    badge: "منطق",
    intro: "ثلاث جمل وتحل.",
    rules: [
      ["AND", "كل inputs لازم 1 عشان output يبقى 1."],
      ["OR", "واحد بس 1 يكفي يخلي output = 1."],
      ["NOT", "يعكس: 0 تبقى 1، و1 تبقى 0."],
      ["Truth table", "جدول لكل احتمالات input ومع كل احتمال output."]
    ]
  },
  {
    title: "Computer Generations",
    badge: "حفظ",
    intro: "أربعة أسطر غالباً ييجوا مباشر.",
    rules: [
      ["1st", "Vacuum tubes."],
      ["2nd", "Transistors."],
      ["3rd", "Integrated Circuits ICs."],
      ["4th", "Microprocessors."]
    ]
  },
  {
    title: "Types of Computers",
    badge: "أنواع",
    intro: "اربط النوع بالاستخدام.",
    rules: [
      ["Personal computer", "Desktop أو laptop لشخص واحد."],
      ["Mobile device", "Smartphone أو tablet."],
      ["Embedded", "داخل منتج: car, thermostat."],
      ["Mainframe", "بنوك، جامعات، مؤسسات كبيرة."],
      ["Supercomputer", "الأسرع والأغلى والأقوى."]
    ]
  },
  {
    title: "Big Data V's",
    badge: "مهم",
    intro: "لو السؤال فيه V، اختار المعنى.",
    rules: [
      ["Volume", "حجم البيانات."],
      ["Velocity", "سرعة وصول البيانات."],
      ["Variety", "تنوع الأنواع والمصادر."],
      ["Veracity", "مصداقية وجودة البيانات."],
      ["Value", "الفائدة من البيانات."]
    ]
  },
  {
    title: "Structured ولا Unstructured؟",
    badge: "Big Data",
    intro: "لو البيانات في جدول فهي structured غالباً.",
    rules: [
      ["Structured", "SQL table, rows, columns."],
      ["Unstructured", "Video, image, audio, free text."],
      ["Semi-structured", "JSON و XML."]
    ]
  },
  {
    title: "كلمات لو شفتها اختار فوراً",
    badge: "اختيارات",
    intro: "دي خريطة إنقاذ سريعة جداً.",
    rules: [
      ["Smallest unit", "Bit."],
      ["8 bits", "Byte."],
      ["Text coding", "ASCII."],
      ["Main circuit board", "Motherboard."],
      ["Data path", "Bus."],
      ["Atomic/molecular tech", "Nanotechnology."],
      ["Computing using light", "Optical computer."],
      ["IoT", "أجهزة لها identity وتتبادل data."]
    ]
  }
];

const chapterPractice = [
  {
    id: "chapter1",
    title: "Chapter 1",
    subtitle: "Computer basics, hardware/software, generations, types, Big Data intro.",
    source: () => quiz.filter((q, index) => q.topic === "Ch1" && index < 25)
  },
  {
    id: "chapter2",
    title: "Chapter 2",
    subtitle: "Data representation, number systems, CPU, memory, logic, machine cycle.",
    source: () => quiz.filter((q, index) => q.topic === "Ch2" && index < 50)
  },
  {
    id: "chapter3",
    title: "Chapter 3",
    subtitle: "System software, operating systems, utilities, application software.",
    source: () => quiz.filter((q) => ["OS", "Utilities", "Software"].includes(q.topic))
  },
  {
    id: "bigdata",
    title: "Big Data",
    subtitle: "Five V's, sources, analytics process, structured and unstructured data.",
    source: () => quiz.filter((q) => q.topic === "Big Data")
  }
];

let activeChapter = 0;
let chapterAnswers = {};

let activeLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem("itCompletedLessons") || "[]"));
let currentQuestion = 0;
let answersState = Array(quiz.length).fill(null);
let currentTfQuestion = 0;
let tfAnswersState = Array(trueFalseQuiz.length).fill(null);
let wrongQuestions = new Set(JSON.parse(localStorage.getItem("itWrongQuestions") || "[]"));
let favoriteQuestions = new Set(JSON.parse(localStorage.getItem("itFavoriteQuestions") || "[]"));

const $ = (selector) => document.querySelector(selector);

function renderStats() {
  $("#lessonCount").textContent = lessons.length;
  $("#questionCount").textContent = quiz.length;
  $("#tfCount").textContent = trueFalseQuiz.length;
}

function savePracticeState() {
  localStorage.setItem("itWrongQuestions", JSON.stringify([...wrongQuestions]));
  localStorage.setItem("itFavoriteQuestions", JSON.stringify([...favoriteQuestions]));
}

function markWrong(type, index, isCorrect) {
  if (!isCorrect) {
    wrongQuestions.add(`${type}:${index}`);
    savePracticeState();
  }
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
  $("#favoriteQuestion").textContent = favoriteQuestions.has(`mcq:${currentQuestion}`) ? "إزالة من المفضلة" : "إضافة للمفضلة";
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

function renderTrueFalse() {
  const q = trueFalseQuiz[currentTfQuestion];
  $("#tfQuestionNumber").textContent = `سؤال ${currentTfQuestion + 1} من ${trueFalseQuiz.length}`;
  $("#tfTopic").textContent = q.topic;
  $("#tfQuestionText").textContent = q.statement;
  $("#favoriteTfQuestion").textContent = favoriteQuestions.has(`tf:${currentTfQuestion}`) ? "إزالة من المفضلة" : "إضافة للمفضلة";

  document.querySelectorAll(".tf-answer").forEach((button) => {
    const value = button.dataset.answer === "true";
    const selected = tfAnswersState[currentTfQuestion];
    button.classList.remove("correct", "wrong");
    if (selected !== null) {
      if (value === q.correct) button.classList.add("correct");
      if (value === selected && value !== q.correct) button.classList.add("wrong");
    }
  });

  const feedback = $("#tfFeedback");
  if (tfAnswersState[currentTfQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = tfAnswersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === trueFalseQuiz[index].correct).length;
  $("#tfScoreText").textContent = `${correct} / ${solved.length}`;
}

function renderSheet() {
  $("#sheetGrid").innerHTML = sheetItems.map(([title, items]) => `
    <article class="sheet-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderBasma() {
  $("#basmaGrid").innerHTML = `
    <article class="basma-card basma-plan">
      <span class="basma-badge">ابدأ هنا</span>
      <h3>خطة الطالب الزيرو في الامتحان</h3>
      <div class="basma-steps">
        ${basmaPlan.map(([num, text]) => `
          <div>
            <strong>${num}</strong>
            <p>${text}</p>
          </div>
        `).join("")}
      </div>
    </article>
    ${basmaTricks.map((item) => `
      <article class="basma-card">
        <span class="basma-badge">${item.badge}</span>
        <h3>${item.title}</h3>
        <p>${item.intro}</p>
        <ul>
          ${item.rules.map(([label, text]) => `<li><strong>${label}:</strong> ${text}</li>`).join("")}
        </ul>
      </article>
    `).join("")}
  `;
}

function renderChapterPractice() {
  const chapter = chapterPractice[activeChapter];
  const questions = chapter.source();
  $("#chapterTabs").innerHTML = chapterPractice.map((item, index) => `
    <button class="chapter-tab ${index === activeChapter ? "active" : ""}" data-chapter="${index}">
      ${item.title}
    </button>
  `).join("");
  $("#chapterSummary").innerHTML = `
    <strong>${chapter.title}</strong>
    <span> - ${chapter.subtitle}</span>
    <br>
    <span>عدد الأسئلة: ${questions.length}</span>
  `;
  $("#chapterGrid").innerHTML = questions.map((q, index) => {
    const answerKey = `${chapter.id}:${index}`;
    const selectedAnswer = chapterAnswers[answerKey];
    const isAnswered = selectedAnswer !== undefined;

    return `
      <article class="chapter-card ${isAnswered ? "answered" : ""}">
        <div class="review-meta">
          <span>${chapter.title}</span>
          <span>${q.topic}</span>
          <span>سؤال ${index + 1}</span>
        </div>
        <h3>${q.question}</h3>
        <div class="chapter-options">
          ${q.answers.map((answer, answerIndex) => {
            const resultClass = isAnswered && answerIndex === q.correct
              ? "correct"
              : isAnswered && answerIndex === selectedAnswer
                ? "wrong"
                : "";
            return `
              <button class="chapter-option ${resultClass}" data-question-index="${index}" data-chapter-answer="${answerIndex}">
                <span>${String.fromCharCode(97 + answerIndex)})</span>
                <strong>${answer}</strong>
              </button>
            `;
          }).join("")}
        </div>
        <div class="chapter-answer ${isAnswered ? "" : "hidden"}">
          <strong>الإجابة:</strong>
          ${String.fromCharCode(97 + q.correct)}) ${q.answers[q.correct]}
          <br>
          <strong>الشرح:</strong>
          ${q.explanation}
        </div>
      </article>
    `;
  }).join("");
}

function reviewCard(type, index) {
  const isMcq = type === "mcq";
  const q = isMcq ? quiz[index] : trueFalseQuiz[index];
  const key = `${type}:${index}`;
  const title = isMcq ? q.question : q.statement;
  const correct = isMcq ? q.answers[q.correct] : q.correct ? "صح" : "غلط";
  return `
    <article class="review-card">
      <div class="review-meta">
        <span>${isMcq ? "MCQ" : "صح/غلط"}</span>
        <span>${q.topic}</span>
        <span>سؤال ${index + 1}</span>
      </div>
      <h3>${title}</h3>
      <p><strong>الإجابة الصحيحة:</strong> ${correct}</p>
      <p>${q.explanation}</p>
      <button class="secondary-btn remove-wrong-review" data-key="${key}">اتراجعت خلاص</button>
      <button class="secondary-btn toggle-favorite-review" data-key="${key}">
        ${favoriteQuestions.has(key) ? "إزالة من المفضلة" : "إضافة للمفضلة"}
      </button>
    </article>
  `;
}

function renderWrongQuestions() {
  const items = [...wrongQuestions];
  $("#wrongGrid").innerHTML = items.length
    ? items.map((key) => {
        const [type, index] = key.split(":");
        return reviewCard(type, Number(index));
      }).join("")
    : `<div class="empty-state">لسه مفيش أسئلة غلط. حل الاختبارات، وأي سؤال تغلط فيه هيتسجل هنا تلقائياً.</div>`;
}

function renderFavorites() {
  const items = [...favoriteQuestions];
  $("#favoritesGrid").innerHTML = items.length
    ? items.map((key) => {
        const [type, index] = key.split(":");
        return reviewCard(type, Number(index));
      }).join("")
    : `<div class="empty-state">لسه مفيش أسئلة في المفضلة. اضغط "إضافة للمفضلة" على أي سؤال مهم.</div>`;
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    nav.classList.add("active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    $(`#${nav.dataset.view}`).classList.add("active");
    if (nav.dataset.view === "wrong") renderWrongQuestions();
    if (nav.dataset.view === "favorites") renderFavorites();
    if (nav.dataset.view === "basma") renderBasma();
    if (nav.dataset.view === "chapters") renderChapterPractice();
  }

  const chapterButton = event.target.closest(".chapter-tab");
  if (chapterButton) {
    activeChapter = Number(chapterButton.dataset.chapter);
    renderChapterPractice();
  }

  const chapterAnswer = event.target.closest(".chapter-option");
  if (chapterAnswer) {
    const chapter = chapterPractice[activeChapter];
    const questionIndex = Number(chapterAnswer.dataset.questionIndex);
    chapterAnswers[`${chapter.id}:${questionIndex}`] = Number(chapterAnswer.dataset.chapterAnswer);
    renderChapterPractice();
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
  if (answer && answer.dataset.answer !== "true" && answer.dataset.answer !== "false") {
    answersState[currentQuestion] = Number(answer.dataset.answer);
    markWrong("mcq", currentQuestion, answersState[currentQuestion] === quiz[currentQuestion].correct);
    renderQuiz();
  }

  const tfAnswer = event.target.closest(".tf-answer");
  if (tfAnswer) {
    tfAnswersState[currentTfQuestion] = tfAnswer.dataset.answer === "true";
    markWrong("tf", currentTfQuestion, tfAnswersState[currentTfQuestion] === trueFalseQuiz[currentTfQuestion].correct);
    renderTrueFalse();
  }

  if (event.target.id === "favoriteQuestion") {
    const key = `mcq:${currentQuestion}`;
    favoriteQuestions.has(key) ? favoriteQuestions.delete(key) : favoriteQuestions.add(key);
    savePracticeState();
    renderQuiz();
  }

  if (event.target.id === "favoriteTfQuestion") {
    const key = `tf:${currentTfQuestion}`;
    favoriteQuestions.has(key) ? favoriteQuestions.delete(key) : favoriteQuestions.add(key);
    savePracticeState();
    renderTrueFalse();
  }

  const reviewFavorite = event.target.closest(".toggle-favorite-review");
  if (reviewFavorite) {
    const key = reviewFavorite.dataset.key;
    favoriteQuestions.has(key) ? favoriteQuestions.delete(key) : favoriteQuestions.add(key);
    savePracticeState();
    renderWrongQuestions();
    renderFavorites();
  }

  const removeWrong = event.target.closest(".remove-wrong-review");
  if (removeWrong) {
    wrongQuestions.delete(removeWrong.dataset.key);
    savePracticeState();
    renderWrongQuestions();
  }

  if (event.target.id === "nextQuestion") {
    currentQuestion = Math.min(quiz.length - 1, currentQuestion + 1);
    renderQuiz();
  }

  if (event.target.id === "prevQuestion") {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  }

  if (event.target.id === "nextTfQuestion") {
    currentTfQuestion = Math.min(trueFalseQuiz.length - 1, currentTfQuestion + 1);
    renderTrueFalse();
  }

  if (event.target.id === "prevTfQuestion") {
    currentTfQuestion = Math.max(0, currentTfQuestion - 1);
    renderTrueFalse();
  }

  if (event.target.id === "clearWrong") {
    wrongQuestions.clear();
    savePracticeState();
    renderWrongQuestions();
  }

  if (event.target.id === "clearFavorites") {
    favoriteQuestions.clear();
    savePracticeState();
    renderFavorites();
    renderQuiz();
    renderTrueFalse();
  }
});

renderStats();
renderLessons();
renderLabs();
renderQuiz();
renderTrueFalse();
renderWrongQuestions();
renderFavorites();
renderSheet();
renderBasma();
renderChapterPractice();
