const deepQuizBank = [
  ["Foundations","A pharmacy system receives medicine names, quantities, and expiry dates, then prints a shortage report. Which statement best describes the report?",["Raw data because it came from input","Information because the raw data was processed into meaning","Hardware because it was printed","Software because it appears on screen"],1,"البيانات الخام بعد الفرز والحساب والتحويل لمعنى تصبح information."],
  ["Foundations","A student says: 'A computer is smart because it understands everything by itself.' What is the best correction?",["It only follows programs and operations on data","It is smart only if it has Internet","It understands human meaning without instructions","It does not need input"],0,"الكمبيوتر programmable؛ قوته في تنفيذ تعليمات وبرامج وليس الفهم الذاتي."],
  ["Foundations","If a device accepts input, processes it, stores results, and can communicate, but has no printer, is it still a computer?",["No, printing is required","Yes, output can be screen/sound/data not only printing","No, communication replaces processing","Only if it is a laptop"],1,"Output مفهوم أوسع من printing، والطباعة ليست شرطاً."],
  ["Foundations","Why is 'end user' different from 'programmer' in exam questions?",["End user writes the operating system","End user uses results; programmer creates software/instructions","They are identical terms","Programmer only repairs hardware"],1,"الفرق في الدور: المستخدم يستفيد من النظام، والمبرمج يبني البرامج."],
  ["Foundations","A temperature value 37.8 before any calculation is best called:",["Information","Data","System software","Output device"],1,"الرقم وحده raw fact، يصبح information عند تفسيره أو استخدامه."],
  ["Foundations","Which answer shows the deepest reason computers are used in industry?",["They are fashionable","They automate repeated work, reduce errors, store data, and support decisions","They only replace paper","They only run games"],1,"الفهم الحقيقي: سرعة + دقة + تخزين + قرارات."],
  ["Foundations","A barcode scanner in a supermarket mainly supports which basic operation first?",["Input","Processing","Storage","Communication"],0,"قراءة الباركود إدخال بيانات للنظام."],
  ["Foundations","When a payroll system calculates salaries from attendance records, the calculation step is:",["Input","Processing","Output only","Communication"],1,"تحويل الحضور لراتب هو processing."],
  ["Foundations","A dashboard showing sales trends from thousands of transactions is:",["Unprocessed data","Information that supports decisions","Only hardware","A coding system"],1,"Dashboard يلخص بيانات كثيرة إلى معنى قابل للاستخدام."],
  ["Foundations","If two answers are 'data' and 'information', choose 'information' when:",["The value is raw and isolated","There is processing, summary, or meaning","It is stored on a flash drive","It is typed by keyboard"],1,"علامة information: معنى أو تلخيص أو قرار بعد معالجة."],

  ["Hardware","A printer stops working but the spreadsheet program opens normally. Which category is most likely affected?",["Application software","Output hardware","CPU arithmetic unit","Coding system"],1,"الطابعة جهاز output، والبرنامج ما زال يعمل."],
  ["Hardware","A microphone and scanner are grouped together because both:",["Display results","Enter data into the computer","Store files permanently","Control the CPU"],1,"كلاهما input devices."],
  ["Hardware","A monitor and speaker are different forms of:",["Input","Output","Processing","Main memory"],1,"الشاشة output بصري والسماعة output صوتي."],
  ["Hardware","A computer can run but cannot save files after restart because the storage drive is damaged. Which distinction matters?",["RAM is temporary, storage is long-term","Monitor is faster than CPU","Input is the same as output","Software is physical"],0,"الملفات تحتاج storage غير متطاير، وليس RAM فقط."],
  ["Hardware","A motherboard question asks for 'main circuit board'. Which option should you trust?",["CPU","Motherboard","RAM only","USB"],1,"Motherboard هي اللوحة الرئيسية التي تربط المكونات."],
  ["Hardware","If a question says 'brain of the computer' but options include CPU and monitor, choose:",["Monitor","CPU","Printer","Keyboard"],1,"CPU يقوم بالمعالجة والتحكم."],
  ["Hardware","Why is a modem not classified mainly as storage?",["It sends/receives data for communication","It stores pictures","It prints reports","It performs only subtraction"],0,"وظيفته الأساسية communication."],
  ["Hardware","A hard disk and USB flash are similar because both:",["Are volatile","Keep data after power off","Are input only","Are logic gates"],1,"كلاهما non-volatile storage."],
  ["Hardware","If the exam says 'physical parts you can touch', the safest answer is:",["Software","Hardware","Data","Algorithm"],1,"Hardware هو الجانب المادي."],
  ["Hardware","A touchscreen is tricky because it can be:",["Input only forever","Output only forever","Both input and output","Neither input nor output"],2,"يعرض معلومات ويستقبل لمس المستخدم."],

  ["Software","A student installs Windows so the laptop can manage files, memory, and applications. Windows here is:",["Application software","System software / operating system","Freeware only","Input device"],1,"OS يدير موارد الجهاز ويشغل التطبيقات."],
  ["Software","Microsoft Word is not system software because it:",["Performs a user task rather than managing the whole computer","Controls booting","Allocates CPU to all processes","Is physical hardware"],0,"Word تطبيق لمهمة محددة."],
  ["Software","Antivirus, backup, and compression tools are grouped as:",["Utility programs","Operating systems only","Programming languages","Output devices"],0,"Utilities تساعد في الصيانة والحماية والإدارة."],
  ["Software","If software is free to use but source code is not available, it is most likely:",["Open source","Freeware","Hardware","Firmware only"],1,"Freeware مجاني، لكن ليس بالضرورة مفتوح المصدر."],
  ["Software","If the question focuses on 'source code can be viewed and modified', choose:",["Freeware","Open source","Shareware only","Commercial only"],1,"الكلمة المفتاحية source code تشير إلى open source."],
  ["Software","A browser-based exam system mainly represents:",["Web-based software","Only installed software","ROM","Output hardware"],0,"يعمل عبر browser/Internet."],
  ["Software","Why can an application fail even when hardware is healthy?",["Software bugs or compatibility issues can stop the task","Hardware always controls content","RAM cannot run programs","Data cannot be processed"],0,"المشكلة قد تكون برمجية رغم سلامة الجهاز."],
  ["Software","An OS is closer to a manager than a worker because it:",["Coordinates resources and lets applications run","Writes essays by itself","Stores only photos","Prints without hardware"],0,"نظام التشغيل يدير الذاكرة والمعالج والملفات والأجهزة."],
  ["Software","A file compression tool is useful before emailing a large folder because it:",["Reduces size","Increases CPU cores","Changes monitor type","Makes data volatile"],0,"Compression يقلل الحجم لتسهيل النقل."],
  ["Software","If the answer choices include system software and application software, choose application when the program:",["Solves a specific user task","Boots the machine","Controls memory for all apps","Manages hardware drivers only"],0,"التطبيق يخدم مهمة للمستخدم."],

  ["Operating Systems","During startup, loading the operating system into memory is called:",["Booting","Printing","Formatting text","Fetching only"],0,"Boot process هو بدء الجهاز وتحميل النظام."],
  ["Operating Systems","A phone running many apps at the same time demonstrates:",["Multitasking","Single-user hardware","ROM only","File compression"],0,"تشغيل أكثر من مهمة في نفس الوقت multitasking."],
  ["Operating Systems","Virtual memory is useful when:",["RAM is not enough, so storage is used temporarily","The monitor is too small","The keyboard is missing","The CPU becomes a printer"],0,"Virtual memory يستخدم جزء من التخزين كامتداد للRAM."],
  ["Operating Systems","Why is virtual memory slower than real RAM?",["Storage access is slower than RAM access","It has more colors","It is an input device","It is printed"],0,"التخزين أبطأ من RAM."],
  ["Operating Systems","Multiprocessing is not the same as multitasking because multiprocessing focuses on:",["More than one processor/core","More than one open file only","More than one user password","More than one monitor"],0,"Multiprocessing يتعلق بعدد المعالجات/الأنوية."],
  ["Operating Systems","A multiuser OS matters for a university server because:",["Many users can use resources/accounts","Only one game runs","It removes storage","It changes binary to decimal"],0,"Multiuser يسمح لأكثر من مستخدم."],
  ["Operating Systems","If an OS schedules which program gets CPU time, it is managing:",["Processor resources","Only output colors","Only source code","Only paper size"],0,"توزيع وقت المعالج وظيفة أساسية للنظام."],
  ["Operating Systems","If an OS organizes folders, permissions, and filenames, it is managing:",["Files","Floating-point arithmetic only","Logic gate design","Optical light"],0,"File management من وظائف OS."],
  ["Operating Systems","Android and iOS are usually classified as:",["Mobile operating systems","Desktop printers","Storage devices","Truth tables"],0,"أنظمة تشغيل للموبايل."],
  ["Operating Systems","If the question says UNIX is multiuser and multitasking, the key idea is:",["It can support many users and tasks","It is only a keyboard","It cannot run programs","It is a type of byte"],0,"UNIX مشهور بدعم أكثر من مستخدم ومهام متعددة."],

  ["Data Representation","Why must a computer use coding systems?",["It internally represents data and instructions as binary patterns","Because humans cannot read screens","Because printers require ink","Because software is physical"],0,"الكمبيوتر يتعامل داخلياً مع bits، لذلك نحتاج encoding."],
  ["Data Representation","If a question asks for the smallest unit that stores 0 or 1, choose:",["Byte","Bit","Word","Kilobyte"],1,"Bit هو 0 أو 1."],
  ["Data Representation","A byte can store 256 patterns because:",["8 bits give 2^8 combinations","8 bits give 8 combinations","It is always decimal","It is a monitor unit"],0,"2^8 = 256 احتمالات من 0 إلى 255."],
  ["Data Representation","ASCII is the best answer when the question focuses on representing:",["Text characters","CPU speed","Hard disk size","Screen brightness"],0,"ASCII coding system للحروف والرموز النصية."],
  ["Data Representation","Unicode is needed more than ASCII when:",["Many languages and symbols must be represented","Only one English digit is stored","The CPU is removed","The printer is unplugged"],0,"Unicode يدعم نطاقاً أكبر من اللغات والرموز."],
  ["Data Representation","Word size affects performance because it describes:",["How many bits CPU handles at one time","How many words in an essay","How bright the screen is","How large a keyboard is"],0,"Word size عدد bits التي يعالجها المعالج دفعة واحدة."],
  ["Data Representation","If a byte is all ones 11111111, its decimal value is:",["127","255","256","8"],1,"128+64+32+16+8+4+2+1 = 255."],
  ["Data Representation","A binary pattern may represent a number or a letter depending on:",["The coding system/context","The keyboard color","The printer brand","The table border"],0,"نفس bits يمكن تفسيرها حسب encoding/context."],
  ["Data Representation","Why is 'bit' not enough to represent many characters alone?",["One bit has only two states","It is too heavy","It is hardware only","It cannot be stored"],0,"bit واحد يعطي احتمالين فقط."],
  ["Data Representation","When options include bit, byte, and word, choose word if the question says:",["CPU handles at one time","Smallest 0/1 unit","Eight bits","A printed paragraph"],0,"كلمة 'CPU handles at one time' تشير إلى word size."],

  ["Number Systems","To convert octal 46 to decimal, the logic is:",["4×8 + 6","4×6 + 8","46×8","6×8 + 4×8"],0,"في رقم من خانتين octal: الشمال ×8 ثم اجمع اليمين."],
  ["Number Systems","Why is 49 not a valid octal number?",["Octal digits can only be 0 to 7","It is too large","It has two digits","It is decimal only"],0,"النظام الثماني لا يحتوي الرقم 8 أو 9."],
  ["Number Systems","Binary 1010 equals decimal 10 because:",["8+2","4+2","10 is copied directly","1+0+1+0"],0,"الخانات من اليمين: 1,2,4,8؛ إذن 8+2."],
  ["Number Systems","Decimal 38 becomes octal 46 because:",["38÷8 gives quotient 4 remainder 6, read 46","38×8=304","4+6=10","38 is already octal"],0,"التحويل من decimal لbase: اقسم وخد البواقي من الآخر للأول."],
  ["Number Systems","Hex A5 equals decimal 165 because:",["10×16 + 5","A×5 only","10+5","16×5"],0,"A=10 في hex، والخانة الشمال قيمتها ×16."],
  ["Number Systems","The fastest way from octal to binary is:",["Convert each octal digit to 3 bits","Divide by 10","Convert to ASCII","Use 4 bits for each octal digit"],0,"كل octal digit = 3 binary bits."],
  ["Number Systems","The fastest way from hex to binary is:",["Each hex digit becomes 4 bits","Each hex digit becomes 3 bits","Multiply by 8","Add ASCII"],0,"كل hex digit = 4 binary bits."],
  ["Number Systems","Binary 100110 split for octal should be:",["100 110","10 011 0","1001 10","1 00110"],0,"للتحويل إلى octal نقسم binary مجموعات 3 من اليمين."],
  ["Number Systems","Binary 10100101 split for hex should be:",["1010 0101","101 001 01","10 10 01 01","101001 01"],0,"للتحويل إلى hex نقسم مجموعات 4 من اليمين."],
  ["Number Systems","If a binary-to-octal group is 010, it represents:",["2","8","10","4"],0,"في Octal كل مجموعة Binary من 3 bits. قيم الخانات من الشمال 4، 2، 1. إذن 010 = 0×4 + 1×2 + 0×1 = 2."],
  ["Number Systems","If decimal conversion asks you to use powers, base 16 means positions:",["1,16,256,...","1,8,64,...","1,2,4,...","1,10,100,..."],0,"كل نظام يستخدم قوى الأساس الخاص به."],
  ["Number Systems","A common mistake in decimal-to-octal is reading remainders top-to-bottom. The correct reading is:",["Bottom-to-top","Left-to-right as written first","Ignore remainders","Multiply all quotients"],0,"نقرأ البواقي من آخر قسمة إلى أول قسمة."],
  ["Number Systems","Which conversion is invalid as written without clarification: 49₈ to decimal?",["Invalid because 9 cannot be octal","Valid and equals 41","Valid and equals 49","Valid because any digit works"],0,"وجود 9 يكسر قاعدة octal."],
  ["Number Systems","Why can 1111₂ equal F₁₆?",["1111₂ is 15 and F is 15","F means 16","Binary copies letters","Hex cannot use letters"],0,"F في hex يمثل 15."],
  ["Number Systems","If the base is larger, does that always mean the value is larger?",["No, value depends on digits and positions","Yes always","Only with keyboards","Only in ASCII"],0,"مثلاً 10₂ = 2 لكن 10₁₀ = 10؛ الأساس يغير المعنى."],

  ["Logic","AND is best described in exam traps as:",["Strict: all conditions must be true","Easy: one condition enough","Opposite of input","Always 1"],0,"AND لا يخرج 1 إلا إذا كل المدخلات 1."],
  ["Logic","OR is best described as:",["At least one true condition is enough","All conditions must be true","It reverses input","It stores files"],0,"OR يعطي 1 إذا وجد مدخل واحد على الأقل = 1."],
  ["Logic","NOT is different because it:",["Has one input and inverts it","Requires two inputs","Stores data permanently","Adds numbers"],0,"NOT gate يعكس الإشارة."],
  ["Logic","For two binary inputs A and B, why does the truth table have 4 rows?",["2^2 possible combinations","2+2 inputs","Because all tables have 4","Because byte = 4 bits"],0,"كل input له احتمالان، إذن 2×2 = 4."],
  ["Logic","For three binary inputs, the truth table rows are:",["6","8","9","3"],1,"2^3 = 8."],
  ["Logic","If a system opens a door only when card is valid AND PIN is correct, which gate matches?",["AND","OR","NOT","XOR only"],0,"لازم الشرطان يتحققوا."],
  ["Logic","If an alarm rings when smoke OR high heat is detected, which gate matches?",["OR","AND","NOT","ROM"],0,"يكفي شرط واحد لتشغيل الإنذار."],
  ["Logic","If input is 'not paid', and system needs the opposite state 'paid', the logic idea is:",["NOT","AND","OR","Bus"],0,"NOT يعكس الحالة."],
  ["Logic","Modern logic gates rely mainly on:",["Transistors","Vacuum tubes only","Printers","Hard disks"],0,"الترانزستورات هي أساس الدوائر المنطقية الحديثة."],
  ["Logic","A truth table is useful because it:",["Shows every possible input and output case","Stores files","Increases screen resolution","Compresses data"],0,"تعرض جميع الاحتمالات لتجنب التخمين."],

  ["CPU","Fetch-decode-execute-store is called:",["Machine cycle","File cycle","Print cycle","Internet cycle"],0,"هذه مراحل machine cycle."],
  ["CPU","Fetch means the CPU:",["Gets the instruction/data from memory","Understands the instruction meaning","Performs the calculation","Saves final output only"],0,"Fetch = إحضار التعليمة/البيانات."],
  ["CPU","Decode means the CPU:",["Interprets what the instruction requires","Writes to disk","Prints result","Receives mouse input"],0,"Decode = فهم/ترجمة التعليمة داخلياً."],
  ["CPU","Execute means the CPU:",["Performs the required operation","Loads the OS only","Deletes memory","Displays icons"],0,"Execute = تنفيذ العملية."],
  ["CPU","Store in machine cycle means:",["Put result in memory/register/storage location","Buy a storage device","Open a shop","Change monitor color"],0,"Store = حفظ الناتج في مكان مناسب."],
  ["CPU","ALU is chosen when the question says:",["Integer arithmetic and logical operations","Floating-point only","File backup","Booting"],0,"ALU للعمليات الحسابية والمنطقية الأساسية."],
  ["CPU","FPU is chosen when the question emphasizes:",["Decimal/floating-point calculations","Keyboard input","Antivirus scan","Folder names"],0,"FPU للعمليات العشرية/العائمة."],
  ["CPU","Control Unit is chosen when the question says:",["Directs and coordinates CPU operations","Stores files forever","Displays output","Compresses folders"],0,"CU ينظم ويوجه تنفيذ التعليمات."],
  ["CPU","Cache improves speed because it:",["Keeps frequently used data close to CPU","Makes files permanent","Changes decimal to octal","Adds more printers"],0,"Cache ذاكرة سريعة قرب المعالج."],
  ["CPU","L1 cache is usually faster than L3 because:",["It is closer/smaller inside CPU hierarchy","It is on the Internet","It is a hard disk","It is a printer"],0,"كلما اقتربت من CPU زادت السرعة غالباً."],
  ["CPU","Clock speed alone does not fully determine performance because:",["Cores, cache, architecture, and workload also matter","GHz means storage only","CPU never affects speed","Monitor controls all speed"],0,"الأداء له عوامل متعددة."],
  ["CPU","Dual-core CPU means:",["Two processing cores on one chip","Two monitors","Two keyboards","Two operating systems only"],0,"Dual-core = نواتان داخل المعالج."],
  ["CPU","Bus is best understood as:",["Pathway carrying data between components","A storage format","A software license","An output sound"],0,"Bus مسار لنقل البيانات."],
  ["CPU","A bottleneck happens when:",["One slow component limits overall performance","All parts are equally fast","The screen is colorful","Files are named well"],0,"أبطأ جزء قد يحد من سرعة النظام كله."],
  ["CPU","If the question asks why more RAM may help multitasking, the reason is:",["More programs/data can stay in memory without heavy swapping","It changes keyboard layout","It increases printer ink","It changes ASCII"],0,"RAM الأكبر تقلل الاعتماد على virtual memory."],

  ["Memory","RAM is volatile, so the practical result is:",["Unsaved work may be lost when power is off","Files become safer","ROM is deleted first","Monitor stops being output"],0,"RAM تفقد المحتوى بانقطاع الكهرباء."],
  ["Memory","ROM is useful in startup because:",["It keeps essential instructions without power","It stores only user videos","It is faster than all cache","It is a mouse"],0,"ROM غير متطايرة وتحفظ تعليمات أساسية."],
  ["Memory","Secondary storage differs from main memory because it:",["Keeps data long-term but is usually slower","Is always smaller than cache","Cannot store files","Is only inside CPU"],0,"التخزين طويل المدى أبطأ من الذاكرة الرئيسية غالباً."],
  ["Memory","If a computer loses open work after electricity cuts, the missing step was:",["Saving to non-volatile storage","Increasing monitor brightness","Changing binary base","Using a speaker"],0,"لازم تحفظ على storage غير متطاير."],
  ["Memory","Cache, RAM, and SSD ordered generally fastest to slower:",["Cache, RAM, SSD","SSD, RAM, Cache","RAM, SSD, Cache","All same"],0,"Cache أسرع، ثم RAM، ثم التخزين."],
  ["Memory","Why is RAM called main memory?",["CPU uses it directly for active programs/data","It is printed on paper","It is always permanent","It is a communication device"],0,"البرامج والبيانات الجارية تكون في RAM."],
  ["Memory","If a question says 'firmware', think of:",["Software stored in hardware/non-volatile memory","Only games","Only Excel files","Only speaker output"],0,"Firmware برامج قريبة من الهاردوير محفوظة غالباً في ROM/flash."],
  ["Memory","The best reason storage capacity is measured in GB/TB is:",["It describes how much data can be kept","It describes CPU arithmetic speed","It describes input quality","It describes screen color only"],0,"السعة تعبر عن كمية البيانات المخزنة."],
  ["Memory","If an app is slow because it keeps using disk as memory, the concept is:",["Virtual memory / swapping","ASCII","Open source","Truth table"],0,"استخدام التخزين كذاكرة بديلة يسبب بطء."],
  ["Memory","The strongest clue for non-volatile is:",["Keeps data without power","Needs constant power","Only performs input","Only handles logic gates"],0,"Non-volatile = لا يحتاج كهرباء مستمرة لحفظ المحتوى."],

  ["Big Data","A hospital collects lab results, scans, doctor notes, and sensor readings. Which V is most obvious?",["Variety","Only Volume","Only Value","Only Clock speed"],0,"مصادر وأشكال مختلفة: structured, images, text, sensor data."],
  ["Big Data","A stock trading system receives thousands of updates per second. Which V is central?",["Velocity","Variety","Veracity only","ASCII"],0,"السرعة العالية لتدفق البيانات = Velocity."],
  ["Big Data","A social media platform stores billions of posts and videos. Which V is central?",["Volume","ROM","ALU","Word size"],0,"الحجم الهائل = Volume."],
  ["Big Data","Fake reviews in a dataset mainly create a problem with:",["Veracity","Velocity","Word size","Output device"],0,"Veracity تعني الثقة والجودة والدقة."],
  ["Big Data","A company analyzes data and discovers how to reduce waste. Which V appears?",["Value","Only Variety","Only Input","Only ROM"],0,"الفائدة العملية من البيانات = Value."],
  ["Big Data","CSV tables with fixed columns are usually:",["Structured","Unstructured","No data","Optical"],0,"الجداول ذات أعمدة ثابتة structured."],
  ["Big Data","Images, videos, and free text reviews are usually:",["Unstructured","Structured only","CPU registers","Truth tables"],0,"لا تملك بنية جدولية ثابتة غالباً."],
  ["Big Data","JSON and XML are often called:",["Semi-structured","No structure at all","Hardware","Volatile memory"],0,"لديها تنظيم لكنه ليس جدولاً ثابتاً كقواعد البيانات."],
  ["Big Data","Why is cleaning data before analysis important?",["Bad/missing/duplicate data can lead to wrong conclusions","It changes monitor size","It increases keyboard speed","It removes all value"],0,"جودة التحليل تعتمد على جودة البيانات."],
  ["Big Data","If analysis explains why sales dropped last month, it is closest to:",["Diagnostic analytics","Predictive only","Prescriptive only","Input device"],0,"Diagnostic يبحث عن السبب."],
  ["Big Data","If analysis forecasts next semester's demand, it is:",["Predictive analytics","Descriptive analytics only","Formatting","Booting"],0,"التوقع للمستقبل = Predictive."],
  ["Big Data","If analysis recommends increasing stock of a product, it is:",["Prescriptive analytics","ASCII","ROM","NOT gate"],0,"اقتراح فعل/قرار = Prescriptive."],
  ["Big Data","A dashboard that only says 'sales were 5000' is mostly:",["Descriptive analytics","Predictive analytics","Prescriptive analytics","Nanotechnology"],0,"يصف ما حدث."],
  ["Big Data","Why traditional tools may fail with Big Data?",["Data is too large, fast, varied, or complex","Because keyboards are old","Because monitors are small","Because all data is binary"],0,"Big Data تتجاوز قدرة الأدوات التقليدية أحياناً."],
  ["Big Data","A smart factory with connected sensors is related to:",["IoT","Freeware","ASCII only","Printer utilities"],0,"IoT أجهزة متصلة تجمع وتتبادل بيانات."],
  ["Big Data","If a sensor has identity, connection, and sends readings, it is likely part of:",["Internet of Things","Only mainframe","Only open source","Only ALU"],0,"IoT = أشياء متصلة تتبادل بيانات."],
  ["Big Data","Data integration means:",["Combining data from multiple sources","Deleting all records","Increasing CPU clock only","Changing keyboard language"],0,"Integration دمج مصادر البيانات."],
  ["Big Data","A data lake is most useful when:",["Many raw data types must be stored at scale","Only one small text file exists","There is no data","Only a printer is needed"],0,"Data lake يناسب أنواع وكمية كبيرة من البيانات الخام."],
  ["Big Data","The biggest exam trap in Big Data V's is to confuse Velocity with:",["Speed of arrival, not size","Accuracy only","Number of formats only","Profit only"],0,"Velocity سرعة التدفق، أما الحجم فهو Volume."],
  ["Big Data","The best answer for 'useful insight' is not Volume but:",["Value","Variety","Velocity","Vacuum tube"],0,"Value = تحويل البيانات لفائدة."],

  ["Computer Types","A bank processing huge numbers of transactions for many branches most likely uses:",["Mainframe","Simple calculator","Keyboard","Tablet only"],0,"Mainframe مناسب للمؤسسات والمعاملات الضخمة."],
  ["Computer Types","Weather simulation and nuclear research most likely need:",["Supercomputer","Embedded thermostat","Printer","Freeware"],0,"Supercomputer للحسابات العلمية الهائلة."],
  ["Computer Types","A control chip inside a washing machine is:",["Embedded computer","Mainframe","Desktop PC","Supercomputer"],0,"Embedded داخل منتج يؤدي وظيفة محددة."],
  ["Computer Types","A laptop used by one student is generally:",["Personal computer","Mainframe","Supercomputer","IoT sensor only"],0,"PC يخدم مستخدماً واحداً غالباً."],
  ["Computer Types","A smartphone is tricky because it is powerful, but classification in basics is:",["Mobile device","Mainframe","Only storage","Only output"],0,"Smartphone يعد mobile device."],
  ["Computer Types","A tablet with pen input is chosen when the clue says:",["Touch/pen portable computer","Large bank transactions","Fastest scientific calculations","Only server room"],0,"Tablet يعتمد على touch/pen."],
  ["Computer Types","A server differs from a normal PC mainly because it:",["Provides services/resources to other computers/users","Has no CPU","Cannot store data","Only displays pictures"],0,"Server يخدم أجهزة أو مستخدمين آخرين."],
  ["Computer Types","If the phrase is 'fastest and most expensive', choose:",["Supercomputer","Microcomputer","Embedded computer","Scanner"],0,"هذه علامة supercomputer."],
  ["Computer Types","If the phrase is 'large organization, many users, transactions', choose:",["Mainframe","Mouse","Tablet only","Speaker"],0,"علامات mainframe."],
  ["Computer Types","If the phrase is 'built into another product', choose:",["Embedded computer","Desktop","Mainframe","Cloud storage"],0,"Embedded = داخل جهاز/منتج."],

  ["Security & Utilities","A user wants to recover files after a disk failure. The preventive utility is:",["Backup software","Paint app","Monitor driver only","Truth table"],0,"Backup يحفظ نسخاً للاسترجاع."],
  ["Security & Utilities","Antivirus is not only for removing viruses; it also:",["Detects/prevents malware threats","Increases RAM physically","Converts decimal to hex","Creates truth tables"],0,"وظيفته حماية من malware."],
  ["Security & Utilities","A suspicious email attachment should not be opened because:",["It may contain malware or phishing risk","It improves CPU speed","It is always structured data","It changes RAM to ROM"],0,"الملفات المشبوهة خطر أمني."],
  ["Security & Utilities","Strong passwords matter because they:",["Reduce unauthorized access risk","Make files smaller","Increase clock speed","Turn data into information"],0,"كلمات المرور تحمي الحسابات."],
  ["Security & Utilities","Two-factor authentication improves security by:",["Requiring another proof besides password","Deleting all data","Replacing CPU","Changing base 8 to base 2"],0,"عامل إضافي يصعب الاختراق."],
  ["Security & Utilities","Software updates are important because they often:",["Fix bugs and security vulnerabilities","Only change colors","Delete all apps","Make hardware physical"],0,"التحديثات تسد ثغرات وتحسن الاستقرار."],
  ["Security & Utilities","A compression utility is least suitable for:",["Detecting viruses","Reducing file size","Preparing files for transfer","Saving storage space"],0,"كشف الفيروسات وظيفة antivirus لا compression."],
  ["Security & Utilities","If the question asks for 'properly removing a program', choose:",["Uninstall utility","Scanner","ALU","ASCII"],0,"Uninstall يزيل البرنامج وملفاته المرتبطة."],
  ["Security & Utilities","A backup stored in the same damaged laptop is weaker because:",["The same failure can destroy original and backup","It becomes faster","It turns into RAM","It becomes open source"],0,"النسخة الاحتياطية الأفضل تكون منفصلة أو cloud."],
  ["Security & Utilities","The deep idea behind utilities is that they:",["Maintain, protect, and manage the computer","Are always games","Are physical parts only","Replace all applications"],0,"Utilities أدوات مساعدة للصيانة والإدارة والحماية."]
];

function rebalanceDeepChoices(questions, offset = 0) {
  const targetPositions = [1, 3, 0, 2];
  const lengthFillers = [
    "in this exact case",
    "based only on the wording given",
    "under the condition in the question",
    "as the complete explanation here"
  ];

  questions.forEach((question, questionIndex) => {
    if (question.answers.length !== 4) return;
    const target = targetPositions[(questionIndex + offset) % targetPositions.length];
    const correctAnswer = question.answers[question.correct];
    const wrongAnswers = question.answers.filter((_, index) => index !== question.correct);
    const balancedAnswers = Array(4);
    balancedAnswers[target] = correctAnswer;

    let wrongIndex = 0;
    for (let index = 0; index < balancedAnswers.length; index++) {
      if (index !== target) {
        balancedAnswers[index] = wrongAnswers[wrongIndex];
        wrongIndex += 1;
      }
    }

    question.answers = balancedAnswers;
    question.correct = target;

    const lengths = question.answers.map((answer) => answer.length);
    const correctLength = lengths[question.correct];
    const longestWrong = Math.max(...lengths.filter((_, index) => index !== question.correct));
    if (correctLength > longestWrong + 6) {
      const wrongTargets = lengths
        .map((length, index) => ({ length, index }))
        .filter((item) => item.index !== question.correct)
        .sort((a, b) => a.length - b.length);
      const filler = lengthFillers[questionIndex % lengthFillers.length];
      question.answers[wrongTargets[0].index] = `${question.answers[wrongTargets[0].index]} ${filler}`;
    }
  });
}

var deepQuiz = deepQuizBank.filter((_, index) =>
  index < 10 ||
  (index >= 10 && index < 18) ||
  (index >= 20 && index < 28) ||
  (index >= 30 && index < 38) ||
  (index >= 40 && index < 48) ||
  (index >= 50 && index < 62) ||
  (index >= 65 && index < 73) ||
  (index >= 75 && index < 85) ||
  (index >= 90 && index < 98) ||
  (index >= 100 && index < 112) ||
  (index >= 120 && index < 125) ||
  (index >= 130 && index < 133)
).map(([topic, question, answers, correct, explanation]) => ({ topic, question, answers, correct, explanation }));

rebalanceDeepChoices(deepQuiz, 0);
