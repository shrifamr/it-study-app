const deepQuizBank = [
  ["Lec1 - Computer Basics","A device accepts sales numbers, processes totals, stores the report, and sends it to another branch. Which basic operations are clearly present?",["Input, processing, storage, communications","Output only, because there is a report","Storage only, because the report is saved","Input only, because sales numbers are entered"],0,"من Lec1: العمليات الأساسية هي input, processing, output, storage, communications. هنا واضح الإدخال والمعالجة والتخزين والاتصال."],
  ["Lec1 - Computer Basics","If a student says information and data are identical, what is the best correction from the lecture?",["Data is raw facts; information is processed into meaningful form","Information is always less useful than data","Data exists only as text, while information is always video","Data is output only, while information is input only"],0,"المحاضرة فرقت بينهم: Data حقائق خام، Information بيانات تم معالجتها لمعنى."],
  ["Lec1 - Computer Basics","Why is computer literacy considered essential in the course objectives?",["Because computers are integrated into business and personal life","Because every user must become a programmer","Because computers only matter in factories","Because literacy means repairing the motherboard"],0,"Lec1 تبدأ بسؤال why learn computers: لأنها داخلة في الحياة الشخصية والعمل."],
  ["Lec1 - Computer Basics","A user reads news, exchanges email, and searches information. In Lec1, this mainly supports which idea?",["Computers in your life","Computer generations only","Logic gates inside CPU","Software ownership rights"],0,"هذه أمثلة مباشرة على استخدام الكمبيوتر في الحياة اليومية."],
  ["Lec1 - Computer Basics","What makes a computer programmable rather than just an electric machine?",["It follows programs that determine tasks","It always connects to the Internet","It contains a printer","It has a screen only"],0,"تعريف الكمبيوتر: programmable electronic device يتبع instructions تسمى programs."],
  ["Lec1 - Computer Basics","A report generated from raw survey answers is best classified as:",["Information","Raw data only","Hardware","A program"],0,"بعد معالجة الإجابات الخام وإخراج تقرير مفهوم تصبح information."],
  ["Lec1 - Computer Basics","Which role writes the programs used by computers?",["Programmer","End user","Security specialist","Computer operations personnel"],0,"Lec1: programmers write programs computers use."],
  ["Lec1 - Computer Basics","Which professional role is closest to protecting computers and networks against hackers?",["Security specialist","Systems analyst","End user","Portable computer"],0,"المحاضرة ذكرت security specialists لتأمين computers and networks."],
  ["Lec1 - Computer Basics","If someone only uses a computer to obtain information, the lecture calls this person:",["End user","Programmer","System analyst","Mainframe operator"],0,"Computer users أو end users هم من يستخدمون الكمبيوتر للحصول على information."],
  ["Lec1 - Computer Basics","A systems analyst is mainly connected with:",["Designing computer systems","Writing every user document","Replacing all hardware devices","Only exchanging email"],0,"Lec1: systems analysts design computer systems."],

  ["Lec1 - Generations","A huge computer uses vacuum tubes, consumes much electricity, and generates heat. Which generation is it?",["First generation","Second generation","Third generation","Fourth generation"],0,"First-generation computers 1946-1957 were enormous and powered by vacuum tubes."],
  ["Lec1 - Generations","Which change best identifies second-generation computers?",["Transistors replacing vacuum tubes","Integrated circuits introducing keyboards","Microprocessors creating microcomputers","AI, voice, and gesture becoming mature"],0,"Second generation used transistors and became smaller, cheaper, more reliable."],
  ["Lec1 - Generations","A question mentions integrated circuits plus keyboards and monitors. Which generation is being tested?",["Third generation","First generation","Second generation","Fifth generation"],0,"Third-generation computers used ICs and introduced keyboards and monitors."],
  ["Lec1 - Generations","IBM PC and Apple Macintosh appearing in the early 1980s point to:",["Fourth generation","First generation","Second generation","Third generation"],0,"Fourth generation includes invention of microcomputers in early 80s, IBM PC and Apple Macintosh."],
  ["Lec1 - Generations","Microprocessors, magnetic disks, flash memory, optical disks, networks, wireless, and Internet belong mostly to:",["Fourth generation","First generation","Second generation","Precomputers"],0,"هذه صفات fourth-generation computers من Lec1."],
  ["Lec1 - Generations","The fifth generation is described in the lecture as:",["An infancy stage with no precise classification","The generation of punch cards only","The period of transistor-only machines","The same as first generation"],0,"Lec1: fifth generation is now/future, infancy stage, no precise classification."],
  ["Lec1 - Generations","AI, voice, gesture, optical computers, and nanotechnology are clues for:",["Fifth generation","Second generation","Third generation","Mechanical calculators"],0,"المحاضرة ربطت الجيل الخامس بهذه التقنيات."],
  ["Lec1 - Generations","Before 1946, which examples are considered precomputers or early computers?",["Abacus, slide rule, mechanical calculator, punch card tabulating machine","Microprocessors and wireless networks only","Android and iOS only","Cloudware and SaaS only"],0,"Lec1 ذكرت هذه الأمثلة في precomputers and early computers."],

  ["Lec1 - Hardware","A scanner, camera, microphone, joystick, touch pad, and fingerprint reader belong to:",["Input devices","Output devices","Processing devices","Storage media"],0,"Lec1: input devices are used to input data into the computer."],
  ["Lec1 - Hardware","A projector and speakers are grouped together because they:",["Present results to the user","Store data for future use","Control computer operation","Represent text in ASCII"],0,"Output devices present results: monitors, printers, speakers, projectors."],
  ["Lec1 - Hardware","Central processing unit and memory are listed under which operation hardware?",["Processing devices","Communications devices","Output devices","Storage devices"],0,"Processing devices perform calculations and control operation: CPU and memory."],
  ["Lec1 - Hardware","A hard drive, CD/DVD disc, and USB flash drive are examples of:",["Storage devices","Input devices","Output devices","Network adapters"],0,"Storage devices store data on or access data from storage media."],
  ["Lec1 - Hardware","Modems and network adapters mainly support:",["Communications","Processing","Text representation","Software licensing"],0,"Communications devices allow users to communicate and access remote information."],
  ["Lec1 - Hardware","Hardware located outside the system unit and connected wired or wirelessly is:",["External hardware","Internal hardware","Application software","Operating system"],0,"Lec1 يفرق بين internal hardware داخل system unit وexternal hardware خارجها."],
  ["Lec1 - Hardware","The motherboard is best understood from Lec1 as:",["A major internal hardware part inside the box","A mobile operating system","A type of freeware","A web-based application"],0,"المحاضرة عرضت motherboard داخل 'The Box' كجزء مادي داخلي."],
  ["Lec1 - Hardware","The term hardware refers to:",["Physical parts of a computer","Instructions that tell hardware what to do","Processed meaningful data","Ownership rights of software"],0,"Hardware: physical parts of a computer."],

  ["Lec1 - Software","Software in Lec1 is best defined as:",["Programs or instructions used to tell hardware what to do","Only the physical parts of the computer","Raw unorganized facts","Any device outside the system unit"],0,"Software refers to programs or instructions used to tell computer hardware what to do."],
  ["Lec1 - Software","The operating system belongs to:",["System software","Application software only","External hardware","Storage media"],0,"Lec1: the main system software is the operating system."],
  ["Lec1 - Software","Windows, OS X, Linux, Android, and iOS are examples of:",["Operating systems","Input devices","Storage devices","Software licenses"],0,"المحاضرة ذكرتهم كoperating systems."],
  ["Lec1 - Software","Writing letters, preparing budgets, managing inventory, playing games, watching videos, and browsing web pages are examples of:",["Application software tasks","Boot process tasks only","Hardware configuration tasks","Mainframe categories"],0,"Lec1: application software enables users to perform specific tasks."],
  ["Lec1 - Software","If software must be downloaded or bought on CD/DVD and installed before use, the lecture is discussing:",["Traditional software acquisition/use","Only cloudware","Only public domain software","Only operating system security"],0,"Lec1 says software is traditionally purchased on CD/DVD or downloaded and needs installation."],

  ["Lec1 - Computer Types","A computer embedded into a thermostat or car and designed for that product is:",["Embedded computer","Mainframe computer","Supercomputer","Desktop PC"],0,"Embedded computer is built into a product and performs specific tasks for that product."],
  ["Lec1 - Computer Types","Why is an embedded computer not a general-purpose computer?",["It is designed for specific product tasks","It is always the most expensive computer","It has no electronic parts","It must run many users' bank records"],0,"Lec1: embedded computers cannot be used as general-purpose computers."],
  ["Lec1 - Computer Types","Smartphones, handheld gaming devices, and portable digital media players fit best under:",["Mobile devices","Mainframes","Midrange servers","Thin clients only"],0,"Mobile devices are very small devices with built-in computing or Internet capability."],
  ["Lec1 - Computer Types","A small computer designed to be used by one person at a time is a:",["Personal computer","Mainframe","Supercomputer","Enterprise server"],0,"Personal computer: small computer designed for one person at a time."],
  ["Lec1 - Computer Types","A tablet computer differs from a notebook mainly because it is designed to be used with:",["Digital pen or touch input","Punch cards only","Climate-controlled data centers","No screen"],0,"Tablet computer is designed for digital pen or touch input."],
  ["Lec1 - Computer Types","A netbook is primarily designed to:",["Access Internet applications and resources","Run one scientific program as fast as possible","Manage centralized bank data","Control a thermostat"],0,"Lec1: netbook is small notebook primarily for Internet applications/resources."],
  ["Lec1 - Computer Types","A thin client cannot function as a computer if:",["The network is down","The monitor is large","It has a keyboard","The user opens email"],0,"Thin client depends on network for processing and storage."],
  ["Lec1 - Computer Types","A midrange server is used mainly to:",["Host programs and data for a small network","Run one program fastest possible","Be embedded into home appliances","Represent text using Unicode"],0,"Midrange server: medium-sized computer to host programs/data for a small network."],
  ["Lec1 - Computer Types","A large bank needing centralized data, 24-hour operation, and climate-controlled data centers likely uses:",["Mainframe computer","Tablet computer","Embedded computer","Netbook"],0,"Mainframes are powerful computers for large organizations and centralized data."],
  ["Lec1 - Computer Types","The fastest, most expensive, most powerful type, often built as a cluster, is:",["Supercomputer","Thin client","Mobile phone","Internet appliance"],0,"Supercomputer: fastest, most expensive, most powerful; may be supercomputing cluster."],
  ["Lec1 - Computer Types","Space exploration, missile guidance, weather forecast, oil exploration, and scientific research point to:",["Supercomputers","Embedded computers","Desktop cases","Search tools"],0,"هذه استخدامات supercomputers في Lec1."],
  ["Lec1 - Computer Types","A refrigerator with built-in Internet access could be an example of:",["Internet appliance","Supercomputer","Public domain software","ASCII code"],0,"Internet appliances can be built into another product such as a refrigerator."],

  ["Lec1 - Big Data & IoT","Big data in Lec1 means data sets so large or complex that:",["Traditional data processing application software is inadequate","They must always be printed first","They can only be stored on floppy disks","They are smaller than ordinary databases"],0,"Lec1 defines Big Data as too large/complex for traditional application software."],
  ["Lec1 - Big Data & IoT","Which is listed as a key enabler for big data growth?",["Increase of storage capacities","Decrease of processing power","Elimination of all data types","Removal of Internet connections"],0,"Lec1: enablers include storage capacities, processing power, and availability of different data types."],
  ["Lec1 - Big Data & IoT","The four V's in Lec1 are:",["Volume, Variety, Velocity, Veracity","Value, Vacuum, Version, Video","Voltage, Virus, Visual, Virtual","Voice, View, Vector, Validity"],0,"Lec1 lists four V's: Volume, Variety, Velocity, Veracity."],
  ["Lec1 - Big Data & IoT","IoT things have unique identities, are connected to the Internet, and:",["Communicate and exchange data","Only store data offline","Always act as mainframes","Cannot control anything"],0,"IoT allows things to communicate and exchange data, control and information."],
  ["Lec1 - Big Data & IoT","An intelligent home example is most connected to:",["IoT applications","Punch card tabulating machines","Shareware licensing","Disk defragmentation only"],0,"Lec1 includes IoT applications such as Intelligent Home."],

  ["Lec2 - Data Representation","Why do data and programs need coding systems?",["To be represented in a manner understood by the computer","To make all computers mechanical","To remove the need for memory","To avoid using switches"],0,"Lec2: coding systems represent data and programs in a manner understood by the computer."],
  ["Lec2 - Data Representation","Computer switches have two states represented as:",["1 for ON and 0 for OFF","8 for ON and 9 for OFF","A for ON and F for OFF","10 for ON and 2 for OFF"],0,"Lec2: switches are ON/OFF represented by 1/0."],
  ["Lec2 - Data Representation","The smallest unit of data a binary computer can recognize is:",["Bit","Byte","Kilobyte","Word document"],0,"Bit is a single 1 or 0."],
  ["Lec2 - Data Representation","A byte equals:",["8 bits","7 bits always","32 characters","1024 megabytes"],0,"Lec2: Byte = 8 bits."],
  ["Lec2 - Data Representation","1 KB is shown in the lecture as:",["2^10 bytes = 1024 bytes","10 bytes exactly","8 bits exactly","2^20 bytes"],0,"Lec2: 1 Kilobyte = 2^10 bytes = 1024 bytes."],
  ["Lec2 - Data Representation","Standard ASCII uses patterns of:",["7 bits","32 bits only","16 decimal digits","8 octal digits"],0,"Standard ASCII uses 7-bit patterns."],
  ["Lec2 - Data Representation","Extended ASCII was developed as:",["8-bit extensions to accommodate major language groups","A 2-bit code for numbers only","A replacement for all operating systems","A compression program"],0,"Lec2: ISO developed 8-bit extensions to ASCII for major language groups."],
  ["Lec2 - Data Representation","Unicode is described as:",["A universal coding standard for text in ancient or modern languages","A storage device standard only","A logic gate made of silicon","A mobile operating system"],0,"Unicode is a universal coding standard designed for text-based data in many languages."],

  ["Lec2 - Number Systems","Decimal system uses:",["Base 10 and digits 0 to 9","Base 2 and digits 0 to 1","Base 8 and digits 0 to 7","Base 16 without letters"],0,"Decimal: base 10, digits 0-9."],
  ["Lec2 - Number Systems","Binary is the system used by the computer and uses:",["Base 2 with digits 0 and 1","Base 8 with digits 0 to 7","Base 10 with digits 0 to 9","Base 16 with A to F only"],0,"Lec2: Binary system is used by the computer, base 2."],
  ["Lec2 - Number Systems","In positional notation, the value of a digit depends on:",["Its position and the base power","The color of the slide","The operating system name","The keyboard model"],0,"Lec2: position determines the power to which base is raised."],
  ["Lec2 - Number Systems","Binary 1101 equals decimal 13 because:",["1×8 + 1×4 + 0×2 + 1×1","1×10 + 1×9 + 0×8 + 1×7","It is copied directly as 1101","It uses base 8 weights"],0,"The lecture example: 1101₂ = 13₁₀."],
  ["Lec2 - Number Systems","The largest number stored in one byte is:",["11111111₂ = 255₁₀","00000000₂ = 255₁₀","11111111₂ = 8₁₀","1010₂ = 255₁₀"],0,"Lec2: largest byte number is 11111111 = 255."],
  ["Lec2 - Number Systems","Word size means:",["Number of bits the CPU can handle at one time","Number of English words in a file","Number of bytes in a hard disk","Number of rows in a truth table"],0,"Lec2 defines word size as bits CPU can handle at one time."],
  ["Lec2 - Number Systems","Octal exists to:",["Shorten long binary numbers","Replace all decimal arithmetic","Represent only text characters","Store only videos"],0,"Lec2: To shorten long binary numbers Octal numbers are used."],
  ["Lec2 - Number Systems","Octal 46 equals decimal 38 because:",["6 + 4×8 = 38","4 + 6×8 = 52","46×8 = 368","4×6 + 8 = 32"],0,"Lecture example: 46₈ = 6 + 4×8¹ = 38₁₀."],
  ["Lec2 - Number Systems","The valid octal digits are:",["0 to 7","0 to 9","0 to F","1 and 0 only"],0,"Octal base 8 uses digits 0-7."],
  ["Lec2 - Number Systems","Hexadecimal uses:",["Base 16 with digits 0-9 and A-F","Base 8 with digits 0-7","Base 2 with ON/OFF only","Base 10 without positional notation"],0,"Lec2: hexadecimal base 16 uses 0-9,A,B,C,D,E,F."],
  ["Lec2 - Number Systems","A5₁₆ equals 165₁₀ because:",["5 + 10×16 = 165","10 + 5×16 = 90","A×5 = 50","A is equivalent to 16"],0,"Lecture example: A5₁₆ = 5 + 10×16¹ = 165."],
  ["Lec2 - Number Systems","When converting decimal to any base n, the remainders are grouped so that:",["First remainder is LSB and last remainder is MSB","First remainder is always ignored","All quotients become output digits","Remainders must be larger than n"],0,"Lec2: first remainder is least significant, last is most significant."],
  ["Lec2 - Number Systems","In decimal-to-any-base repeated division, each remainder must be:",["Less than the base n","Equal to the original decimal number","Always greater than 9","Ignored after every division"],0,"Lec2 states the remainder will always be less than base n."],
  ["Lec2 - Number Systems","MSB refers to:",["The leftmost highest-order bit","The rightmost lowest-order bit","A mobile server bus","A software license"],0,"MSB is highest-order bit, leftmost bit."],
  ["Lec2 - Number Systems","LSB refers to:",["The rightmost lowest-order bit","The leftmost highest-order bit","A Linux security backup","A type of Unicode"],0,"LSB is lowest-order bit, rightmost bit."],

  ["Lec2 - Logic","A truth table lists:",["All possible input combinations and the output for each","Only hardware prices","Only file sizes","Only operating system names"],0,"Lec2: truth table lists all possible input values and output value."],
  ["Lec2 - Logic","The NOT operation performs which action?",["Flips one bit","Adds two decimal numbers directly","Stores files permanently","Searches the hard drive"],0,"NOT flips a single bit: 1 becomes 0 and 0 becomes 1."],
  ["Lec2 - Logic","For two binary inputs x and y, a truth table has four rows because:",["There are four possible combinations","Each byte has four bits","ASCII is four bits","Octal has four digits"],0,"Two binary inputs have 2×2 combinations."],
  ["Lec2 - Logic","AND, OR, and NOT are described as:",["Fundamental logical operations used as building blocks","Operating system editions","Storage devices","Software ownership rights"],0,"Lec2 presents NOT, AND, OR as fundamental operations for logic circuits."],
  ["Lec2 - Logic","Logic gates in modern computers are based on:",["Transistors made of semiconducting material such as silicon","Only punch cards","Only vacuum tubes","Only hard drives"],0,"Modern logic gates are based on transistors formed of semiconductor layers such as silicon."],
  ["Lec2 - Logic","Early computers' switching devices were generally based on:",["Vacuum tubes or valves","Unicode characters","Web-based software","Cloud data lakes"],0,"Lec2: early computers used vacuum tubes, collectively called valves."],
  ["Lec2 - Logic","Why are logic gates important inside a computer?",["They physically perform logic operations on binary data","They are software licenses","They store photos in rows and columns","They replace the operating system"],0,"To physically perform logic operations, computers use logic gates."],
  ["Lec2 - Logic","A complex logic circuit can be built by:",["Combining basic logic gates","Installing freeware only","Adding more social media data","Compressing files"],0,"Lec2: logic gates can be combined in circuits for complex operations."],

  ["Chapter 3 - Software","System software includes:",["Operating system and utility programs that control the computer system","Only games and web browsing programs","Only financial transaction data","Only physical parts"],0,"Chapter 3: system software is OS and utilities controlling the system."],
  ["Chapter 3 - Software","Application software is best tested by which example?",["Word processing or playing a game","Booting the kernel only","Configuring device drivers only","Managing hard drive sectors only"],0,"Application software allows user-specific tasks like word processing, games, taxes, web browsing."],
  ["Chapter 3 - Software","The operating system acts as:",["An intermediary between user and computer","A replacement for all applications","A database table only","A scanner driver only"],0,"Chapter 3: OS acts as intermediary between user and computer."],
  ["Chapter 3 - OS Functions","During booting, the operating system:",["Loads the kernel into memory and starts processes","Only compresses user documents","Only opens a web browser","Only deletes temporary files"],0,"Chapter 3: booting loads kernel into memory and starts processes."],
  ["Chapter 3 - OS Functions","Device drivers are mainly connected with:",["Configuring devices","Software ownership rights","Social media analytics","Truth table rows"],0,"OS functions include configuring devices; device drivers are often needed."],
  ["Chapter 3 - OS Functions","Plug and Play means devices are:",["Recognized automatically","Always deleted automatically","Compressed into zip files","Converted into Unicode"],0,"Chapter 3: Plug and Play devices are recognized automatically."],
  ["Chapter 3 - OS Functions","File management in the OS keeps track of files in:",["A hierarchical format","A random no-folder format","Only social media feeds","Only logic gates"],0,"Chapter 3: file management keeps track of files in hierarchical format."],
  ["Chapter 3 - OS Functions","Security functions in the OS include:",["Passwords, biometric characteristics, and firewalls","Only changing screen brightness","Only converting binary to octal","Only uninstalling games"],0,"Chapter 3 lists passwords, biometrics, and firewalls under security."],

  ["Chapter 3 - Processing","Multitasking means:",["More than one program/task can be open at one time","Many CPUs always work on one job","Only one thread exists in a program","Hard drive space is used as RAM"],0,"Chapter 3: multitasking allows more than one program open; CPU rotates quickly."],
  ["Chapter 3 - Processing","Why does multitasking appear simultaneous?",["CPU rotates quickly between tasks","Each task has a separate monitor","No processing is actually done","Files are compressed first"],0,"Chapter 3: switching is done quickly, so tasks appear to run at same time."],
  ["Chapter 3 - Processing","A thread is:",["A sequence of instructions within a program independent of other threads","A type of storage medium","A license for open-source software","A mobile OS only"],0,"Chapter 3 defines thread this way."],
  ["Chapter 3 - Processing","Multithreading improves processing by:",["Rotating between multiple threads faster and more efficiently","Deleting temporary files","Recognizing plug and play hardware","Uploading backup to Internet only"],0,"Chapter 3: multithreading rotates between multiple threads for efficiency."],
  ["Chapter 3 - Processing","Multiprocessing usually means:",["Each CPU or core works on a different job","All CPUs always work together on one job","Only hard drive space acts as RAM","One program cannot be open"],0,"Chapter 3: multiprocessing each CPU/core typically works on a different job."],
  ["Chapter 3 - Processing","Parallel processing is different because CPUs or cores typically:",["Work together to complete one job more quickly","Always uninstall utilities","Only manage passwords","Always run one desktop game"],0,"Chapter 3: parallel processing cores work together on one job."],
  ["Chapter 3 - Processing","Virtual memory uses:",["Hard drive space as additional RAM","RAM as permanent CD storage","A firewall as processor","A scanner as memory"],0,"Chapter 3: virtual memory uses hard drive space as additional RAM."],
  ["Chapter 3 - Processing","Memory management aims at:",["Optimizing the use of main memory RAM","Changing ownership rights","Making all software public domain","Replacing Unicode"],0,"Chapter 3: memory management optimizes RAM use."],

  ["Chapter 3 - Operating Systems","DOS traditionally used:",["Command-line interface","Touch-only mobile interface","No interface at all","Only cloud dashboards"],0,"Chapter 3: DOS traditionally used command-line interface."],
  ["Chapter 3 - Operating Systems","Windows NT is important because it was:",["First 32-bit Windows designed for high-end workstations and servers","A mobile OS for phones only","An open-source flavor of UNIX","A diagnostic utility"],0,"Chapter 3 identifies Windows NT as first 32-bit Windows for high-end workstations/servers."],
  ["Chapter 3 - Operating Systems","Windows 7 is described as:",["Starting up and responding faster than Vista and running well on netbooks","Replacing all mobile operating systems","Being only a command-line system","Being based on UNIX only"],0,"Chapter 3 lists Windows 7 improvements including faster startup/response and netbook support."],
  ["Chapter 3 - Operating Systems","Windows 8 changes focused mainly on:",["Improving user experience on mobile devices such as tablets","Removing support for tablets","Returning to punch cards","Replacing Linux servers"],0,"Chapter 3 says Windows 8 focused on mobile/tablet user experience."],
  ["Chapter 3 - Operating Systems","Mac OS is:",["Proprietary OS for Apple computers based on UNIX","Open-source Linux for all companies","A disk management utility only","A mobile phone hardware type"],0,"Chapter 3: Mac OS is proprietary for Apple and based on UNIX."],
  ["Chapter 3 - Operating Systems","Time Machine in Mac OS is connected with:",["Backup and restore","Text encoding","Logic gates","Fraud analytics"],0,"Chapter 3: Time Machine is for backup and restore."],
  ["Chapter 3 - Operating Systems","UNIX is characterized as:",["Multiuser and multitasking, developed in late 1960s for midrange servers","A freeware antivirus only","A personal computer category","A compression utility"],0,"Chapter 3: UNIX is multiuser/multitasking, late 1960s, midrange servers."],
  ["Chapter 3 - Operating Systems","Linux is best described in the lecture as:",["A free flavor of UNIX and open-source software","A commercial Windows edition","A hardware network adapter","A diagnostic program"],0,"Chapter 3: Linux is a free UNIX flavor and open-source."],
  ["Chapter 3 - Operating Systems","Android in the slides is:",["Linux-based OS developed by Open Handset Alliance including Google","A disk cleanup utility","A desktop-only Windows version","A public domain office suite"],0,"Chapter 3 states Android is Linux based and developed by Open Handset Alliance including Google."],
  ["Chapter 3 - Operating Systems","Symbian OS is associated with:",["Smart phones such as Nokia","Mainframe data centers","Windows desktop search","Zip files"],0,"Chapter 3: Symbian OS designed for smart phones, example Nokia."],

  ["Chapter 3 - Utilities","Search tools are designed to:",["Search for files on the user's hard drive","Remove all programs automatically","Represent text in Unicode","Forecast customer churn"],0,"Chapter 3: search tools search files on hard drive."],
  ["Chapter 3 - Utilities","Diagnostic programs:",["Evaluate the system and recommend fixes for errors","Only write programs for users","Only compress files into zip format","Only act as mobile operating systems"],0,"Chapter 3 defines diagnostic programs this way."],
  ["Chapter 3 - Utilities","Disk management programs diagnose and repair problems related to:",["Hard drive","Monitor color","Software license","Social media posts"],0,"Chapter 3: disk management programs diagnose/repair hard drive problems."],
  ["Chapter 3 - Utilities","Why should programs be uninstalled properly instead of just deleted?",["To remove them without leaving bits and pieces behind","To convert them into open source","To increase Unicode bits","To force multitasking"],0,"Chapter 3: uninstall utilities remove programs without leaving bits and pieces."],
  ["Chapter 3 - Utilities","Clean up utilities are used to:",["Delete temporary files","Predict future trends","Configure all mobile phones","Represent 7-bit ASCII"],0,"Chapter 3: clean up utilities delete temporary files."],
  ["Chapter 3 - Utilities","File compression programs reduce file size so files:",["Take less storage or transmit faster over the Internet","Become operating systems","Turn into hardware","Cannot be unzipped"],0,"Chapter 3: compression reduces size for storage/transmission; zip and unzip."],
  ["Chapter 3 - Utilities","Backup and recovery utilities are critical because they:",["Make backup/restoration easier using duplicate copies","Only delete applications","Only change GUI themes","Only run command-line DOS"],0,"Chapter 3: backup is duplicate copy; backup/recovery makes restoration easier."],
  ["Chapter 3 - Utilities","Security programs include:",["Antivirus, antispyware, and firewalls","Only word processors","Only ERP systems","Only text encoders"],0,"Chapter 3 lists antivirus, antispyware, and firewalls."],

  ["Chapter 3 - Ownership","Commercial software is:",["Copyrighted software developed usually by a commercial company for sale","Software with source code donated to public domain","Free software always without copyright","A device driver only"],0,"Chapter 3: commercial software is copyrighted and developed for sale."],
  ["Chapter 3 - Ownership","Shareware is distributed on:",["The honor system; pay or uninstall after trial","A rule that source code must be public","A guarantee it has no copyright","A rule that it must run from the Internet only"],0,"Chapter 3: shareware is copyrighted, honor system, pay or uninstall after trial."],
  ["Chapter 3 - Ownership","Freeware means:",["Copyrighted programs given away free of charge","Software with no copyright and donated to public domain","Software whose source code must be modified","Software sold only to enterprises"],0,"Chapter 3: freeware is copyrighted but given away free."],
  ["Chapter 3 - Ownership","Public domain software is:",["Not copyrighted and ownership rights donated to public domain","Copyrighted trial software","Commercial software sold for profit","A device driver"],0,"Chapter 3 defines public domain software this way."],
  ["Chapter 3 - Ownership","Open source software means:",["Source code is made available to the general public","It must be downloaded as a zip file","It cannot run on Linux","It is always a mobile app"],0,"Chapter 3: open-source programs have source code available."],
  ["Chapter 3 - Software Delivery","Installed software must:",["Be installed before it can run","Run only directly from the Internet","Always be public domain","Only work on phones"],0,"Chapter 3: installed software must be installed before it can run."],
  ["Chapter 3 - Software Delivery","Web-based software is also called:",["SaaS or cloudware","BIOS or firmware","MSB or LSB","ASCII or Unicode"],0,"Chapter 3: web-based software is also Software as a Service and cloudware."],
  ["Chapter 3 - Software Delivery","An ASP in the web-based software slide refers to:",["Application service provider","Advanced storage processor","ASCII software protocol","Automated security password"],0,"Chapter 3: web-based software is available via an application service provider (ASP)."],

  ["Big Data","Big Data requires exceptional technologies because:",["Traditional database tools may not handle its size and complexity efficiently","It is always smaller than ordinary files","It contains only printed reports","It never needs analytics"],0,"Big Data PDF: unlike traditional data sets, it requires exceptional technologies and sophisticated analytics."],
  ["Big Data","The goal of processing Big Data under the 5 V's is mainly captured by:",["Value","Velocity","Volume","Variety"],0,"Value: extract meaningful value and useful information from big data."],
  ["Big Data","A retail chain with millions of daily transactions mostly demonstrates:",["Volume","Veracity only","Public domain software","MSB"],0,"Retail example: millions of transactions per day = Volume."],
  ["Big Data","Customer reviews written in free-form text in the retail example demonstrate:",["Unstructured data under Variety","Only structured SQL rows","Only diagnostic utilities","Only binary notation"],0,"Retail example: customer reviews free-form text are unstructured data and part of Variety."],
  ["Big Data","Clickstream data from websites in the retail example is:",["Semi-structured data","A logic gate","A supercomputer cluster","A mobile operating system"],0,"Big Data PDF lists clickstream data as semi-structured in retail variety example."],
  ["Big Data","Social media data may be misleading or irrelevant, which mainly affects:",["Veracity","Volume","Velocity","Compression"],0,"Retail example: reliability varies; social media may be misleading, so veracity."],
  ["Big Data","Using purchase history to personalize promotions is an example of Big Data producing:",["Value","Only raw Volume","Only file compression","Only operating system booting"],0,"Retail example: personalization and improved sales show Value."],
  ["Big Data","Big Data improves decision-making by:",["Providing deeper insights and comprehensive view of data","Removing the need for data cleaning","Replacing all operating systems","Making all software freeware"],0,"Importance slide: enhanced analytics help make informed decisions by comprehensive data view."],
  ["Big Data","In finance, real-time fraud detection is achieved by analyzing:",["Transaction data across millions of operations","Only speaker output","Only public domain software","Only keyboard input"],0,"Finance example: big data analyzes transaction data across millions of operations to detect fraud."],
  ["Big Data","Retailers can predict demand for umbrellas by analyzing weather, social trends, and historical sales. This shows:",["Big Data supports inventory and marketing decisions","Only ASCII text representation","Only disk cleanup","Only command-line DOS"],0,"Retail example: predict demand and adjust inventory/marketing."],
  ["Big Data","Structured data is easiest to search in databases because it is:",["Organized in rows and columns","Only images and videos","Without any predefined format","Made only of XML tags"],0,"Structured data is highly organized, often rows and columns like SQL."],
  ["Big Data","Financial transaction records are usually:",["Structured data","Unstructured data","Logic circuits","Operating systems"],0,"Big Data PDF lists transactional data as structured data."],
  ["Big Data","Videos, audio files, images, emails, articles, reviews, and customer feedback are mostly:",["Unstructured data","Structured SQL data only","Processor cores","Search tools"],0,"Unstructured data includes social media, multimedia, and textual data."],
  ["Big Data","XML and JSON are:",["Semi-structured data","Mainframe computers","Vacuum tubes","Public domain software"],0,"Semi-structured examples include XML and JSON."],
  ["Big Data","Emails and logs can be semi-structured because they contain:",["Fields like sender, receiver, and timestamp","Only numeric rows and columns","No text at all","Only CPU instructions"],0,"Big Data PDF: emails/logs are textual but contain structured elements."],
  ["Big Data","The first step in the big data analytics process is:",["Data Collection","Data Visualization","Data Storage","Prescriptive Analytics"],0,"Key processes start with Data Collection."],
  ["Big Data","Data cleaning is needed to:",["Correct inaccuracies, remove duplicates, and handle missing values","Combine all CPUs into one core","Convert all text into public domain","Draw charts before analysis only"],0,"Big Data PDF defines data cleaning this way."],
  ["Big Data","Data integration means:",["Combining data from different sources into a unified view","Deleting all unstructured data","Only storing data in ROM","Only making a zip file"],0,"Key processes: data integration combines sources and provides unified view."],
  ["Big Data","Scalable storage for big data may use:",["Hadoop or cloud-based data lakes","Only floppy disks","Only Unicode tables","Only DOS commands"],0,"Data storage slide mentions Hadoop and cloud-based data lakes."],
  ["Big Data","Data visualization makes analysis results:",["Comprehensible and actionable using graphs, charts, and dashboards","Smaller by zipping them","Available as device drivers","Stored only in CPU registers"],0,"Visualization presents results visually to make them comprehensible/actionable."],
  ["Big Data","Descriptive analytics answers mainly:",["What happened in the past","What exact action should be taken","Which device driver is missing","Which OS is proprietary"],0,"Types slide: descriptive analyzes past data to understand trends and behaviors."],
  ["Big Data","Predictive analytics is used to:",["Forecast future probabilities and trends","Only delete duplicates","Only draw dashboards","Only manage passwords"],0,"Predictive analytics forecasts future outcomes based on historical data."],
  ["Big Data","Prescriptive analytics goes beyond prediction by:",["Suggesting actions to achieve desired outcomes","Only showing historical sales numbers","Only storing raw data","Only detecting device drivers"],0,"Prescriptive suggests recommended actions."],
  ["Big Data","Diagnostic analytics focuses on:",["What happened and why","Only future probability","Only software licenses","Only byte prefixes"],0,"Diagnostic analytics determines what happened and why."],
  ["Big Data","Analyzing production failures to identify process flaws is:",["Diagnostic analytics","Descriptive analytics only","Web-based software","Unicode coding"],0,"Big Data PDF gives this as diagnostic analytics example."]
];

function rebalanceDeepChoices(questions, offset = 0) {
  const targetPositions = [1, 3, 0, 2];
  const lengthFillers = [
    "in this exact lecture context",
    "based on the slide wording",
    "according to the given PDF",
    "as stated in the course material"
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
    if (correctLength > longestWrong + 8) {
      const wrongTargets = lengths
        .map((length, index) => ({ length, index }))
        .filter((item) => item.index !== question.correct)
        .sort((a, b) => a.length - b.length);
      const filler = lengthFillers[questionIndex % lengthFillers.length];
      question.answers[wrongTargets[0].index] = `${question.answers[wrongTargets[0].index]} ${filler}`;
    }
  });
}

var deepQuiz = deepQuizBank
  .filter((_, index) =>
    index < 6 ||
    (index >= 10 && index < 16) ||
    (index >= 18 && index < 24) ||
    (index >= 26 && index < 29) ||
    (index >= 31 && index < 37) ||
    index === 43 ||
    (index >= 48 && index < 56) ||
    (index >= 56 && index < 68) ||
    (index >= 71 && index < 76) ||
    (index >= 79 && index < 86) ||
    (index >= 90 && index < 96) ||
    (index >= 98 && index < 104) ||
    (index >= 108 && index < 112) ||
    (index >= 116 && index < 118) ||
    index >= 124
  )
  .map(([topic, question, answers, correct, explanation]) => ({ topic, question, answers, correct, explanation }));

rebalanceDeepChoices(deepQuiz, 0);
