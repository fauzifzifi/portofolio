/* ==========================================================
   Portofolio Fauzi Rafi Abimanyu Nugraha
   Semua isi (teks, data, link) ada di file ini supaya mudah diubah.
   ========================================================== */

/* ---------- 1. Pengaturan: isi sendiri bagian yang masih kosong ---------- */
const CONFIG = {
  email: "fauzinugraha6822@gmail.com",
  phone: "+62 896 5298 7262",
  whatsapp: "6289652987262",
  linkedin:
    "https://www.linkedin.com/in/fauzi-rafi-abimanyu-nugraha-33a274383?utm_source=share_via", // contoh: "https://www.linkedin.com/in/username"
  github: "https://github.com/fauzifzifi", // contoh: "https://github.com/username"
};

/* ---------- 2. Teks antarmuka (ID / EN) ---------- */
const I18N = {
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_edu: "Pendidikan",
    nav_exp: "Pengalaman",
    nav_projects: "Proyek",
    nav_certs: "Sertifikat",
    nav_contact: "Kontak",

    hero_eyebrow: "Halo, saya",
    hero_role:
      "Full Stack Developer · Database Architect · QA Tester · IT Support & Operational Leadership",
    hero_intro:
      "Crafting dependable digital systems from robust database architectures to responsive, accessible user interfaces. Bridging engineering rigor with thoughtful design simplicity.",
    btn_projects: "Lihat proyek",
    btn_contact: "Hubungi saya",
    btn_cv: "Unduh CV",

    about_title: "Tentang saya",
    about_p1:
      "Saya mahasiswa D4 Teknik Informatika di Politeknik Negeri Jember dengan IPK 3,85/4,00. Sebelum kuliah, saya menempuh Teknik Komputer dan Jaringan di SMK, jadi saya sudah terbiasa dengan sisi perangkat keras dan jaringan sebelum masuk ke pemrograman.",
    about_p2:
      "Di kampus, lewat proyek tim saya mengerjakan pengembangan website front-end dan back-end, perancangan serta integrasi basis data MySQL, dan pengujian black-box. Dari situ kemampuan analitis dan pemecahan masalah saya terus terasah.",
    about_p3:
      "Di luar kuliah, saya bekerja sebagai Assistant Cafe and Kitchen Captain. Di sana saya belajar mengoordinasikan tim dan menjaga operasional tetap berjalan, sambil membagi waktu dengan perkuliahan.",

    skills_title: "Keahlian",
    edu_title: "Pendidikan",
    exp_title: "Pengalaman",
    org_title: "Organisasi",
    projects_title: "Proyek",
    projects_note:
      "Dua proyek berbasis pembelajaran (Project Based Learning) di kampus.",
    certs_title: "Sertifikasi & pelatihan",
    contact_title: "Kontak",
    contact_lead:
      "Terbuka untuk magang, kolaborasi proyek, atau sekadar ngobrol soal pengembangan web dan basis data.",
    back_top: "Kembali ke atas ↑",

    fact_gpa: "IPK",
    fact_campus: "Kampus",
    fact_major: "Program studi",
    fact_since: "Angkatan",
    fact_loc: "Domisili",
    fact_lang: "Bahasa",
    fact_major_v: "D4 Teknik Informatika",
    fact_loc_v: "Nganjuk, Jawa Timur",
    fact_lang_v: "Indonesia, English (dasar)",

    view_project: "Lihat proyek ↗",
    view_cert: "Lihat sertifikat",
    role_label: "Peran",
    courses_label: "mata kuliah relevan",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_projects: "Projects",
    nav_certs: "Certificates",
    nav_contact: "Contact",

    hero_eyebrow: "Hi, I'm",
    hero_role:
      "Full Stack Developer · Database Architect · QA Tester · IT Support & Operational Leadership",
    hero_intro:
      "Crafting dependable digital systems from robust database architectures to responsive, accessible user interfaces. Bridging engineering rigor with thoughtful design simplicity.",
    btn_projects: "See projects",
    btn_contact: "Get in touch",
    btn_cv: "Download CV",

    about_title: "About me",
    about_p1:
      "I'm a D4 Informatics Engineering student at Politeknik Negeri Jember with a GPA of 3.85/4.00. Before university I studied Computer and Network Engineering in vocational school, so I was already comfortable with hardware and networking before getting into programming.",
    about_p2:
      "At campus, through team projects, I work on front-end and back-end web development, MySQL database design and integration, and black-box testing. This keeps sharpening my analytical and problem-solving skills.",
    about_p3:
      "Outside class, I work as an Assistant Cafe and Kitchen Captain, where I learn to coordinate a team and keep daily operations running while balancing it with my studies.",

    skills_title: "Skills",
    edu_title: "Education",
    exp_title: "Experience",
    org_title: "Organization",
    projects_title: "Projects",
    projects_note: "Two Project Based Learning projects from my university.",
    certs_title: "Certifications & training",
    contact_title: "Contact",
    contact_lead:
      "Open to internships, project collaboration, or just a chat about web development and databases.",
    back_top: "Back to top ↑",

    fact_gpa: "GPA",
    fact_campus: "University",
    fact_major: "Program",
    fact_since: "Since",
    fact_loc: "Based in",
    fact_lang: "Languages",
    fact_major_v: "D4 Informatics Engineering",
    fact_loc_v: "Nganjuk, East Java",
    fact_lang_v: "Indonesian, English (basic)",

    view_project: "View project ↗",
    view_cert: "View certificate",
    role_label: "Role",
    courses_label: "relevant courses",
  },
};

/* ---------- 3. Data dari CV ---------- */
const SKILLS = [
  {
    title: { id: "web & data", en: "web & data" },
    items: {
      id: [
        "Pengembangan web front-end",
        "Pengembangan web back-end",
        "Perancangan & integrasi MySQL",
        "Black-box testing",
        "Dasar SQL",
        "Dasar visualisasi data",
      ],
      en: [
        "Front-end web development",
        "Back-end web development",
        "MySQL design & integration",
        "Black-box testing",
        "SQL basics",
        "Data visualization basics",
      ],
    },
  },
  {
    title: { id: "tools", en: "tools" },
    items: {
      id: [
        "VS Code",
        "Figma",
        "Trello",
        "Microsoft Project",
        "Microsoft Office",
        "Canva",
        "Corel Draw",
        "Capcut",
      ],
      en: [
        "VS Code",
        "Figma",
        "Trello",
        "Microsoft Project",
        "Microsoft Office",
        "Canva",
        "Corel Draw",
        "Capcut",
      ],
    },
  },
  {
    title: { id: "perangkat keras & jaringan", en: "hardware & networking" },
    items: {
      id: [
        "Perakitan PC",
        "Instalasi Windows",
        "Troubleshooting perangkat",
        "Konfigurasi jaringan dasar",
        "Winbox",
        "Cisco Packet Tracer",
      ],
      en: [
        "PC assembly",
        "Windows installation",
        "Hardware troubleshooting",
        "Basic network configuration",
        "Winbox",
        "Cisco Packet Tracer",
      ],
    },
  },
  {
    title: { id: "non-teknis", en: "soft skills" },
    items: {
      id: [
        "Kepemimpinan",
        "Koordinasi tim",
        "Komunikasi",
        "Kerja sama tim",
        "Pemecahan masalah",
        "Manajemen waktu",
        "Adaptif",
        "Disiplin",
        "Tanggung jawab",
      ],
      en: [
        "Leadership",
        "Team coordination",
        "Communication",
        "Teamwork",
        "Problem solving",
        "Time management",
        "Adaptability",
        "Discipline",
        "Responsibility",
      ],
    },
  },
];

const EDUCATION = [
  {
    school: "Politeknik Negeri Jember",
    degree: { id: "D4 Teknik Informatika", en: "D4 Informatics Engineering" },
    meta: { id: "IPK 3,85 / 4,00", en: "GPA 3.85 / 4.00" },
    date: { id: "2025 – Sekarang", en: "2025 – Present" },
    courses: [
      "Analisis Desain Terstruktur",
      "Konsep Basis Data",
      "Workshop Sistem Informasi Web Client",
      "Workshop Basis Data",
      "Analisis Desain Berorientasi Obyek",
      "Konsep Jaringan Komputer",
      "Workshop Mobile Applications Basic",
      "Workshop Manajemen Proyek",
      "Teknologi Basis Data",
      "Struktur Data",
      "Workshop Sistem Informasi Web Server",
      "Workshop Mobile Applications Advance",
      "Logika dan Algoritma",
      "Interaksi Manusia dan Komputer",
      "Software Quality Assurance",
    ],
    coursesEn: [
      "Structured Design Analysis",
      "Database Concepts",
      "Web Client Information Systems Workshop",
      "Database Workshop",
      "Object-Oriented Design Analysis",
      "Computer Network Concepts",
      "Mobile Applications Basic Workshop",
      "Project Management Workshop",
      "Database Technology",
      "Data Structures",
      "Web Server Information Systems Workshop",
      "Mobile Applications Advanced Workshop",
      "Logic and Algorithms",
      "Human-Computer Interaction",
      "Software Quality Assurance",
    ],
  },
  {
    school: "SMKS PGRI 1 Nganjuk",
    degree: {
      id: "Teknik Komputer dan Jaringan",
      en: "Computer and Network Engineering",
    },
    meta: { id: "Nilai akhir 83,30 / 100", en: "Final score 83.30 / 100" },
    date: { id: "2022 – 2025", en: "2022 – 2025" },
    desc: {
      id: "Mempelajari perakitan dan pemeliharaan komputer, identifikasi komponen perangkat keras, instalasi dan konfigurasi sistem operasi Windows, pengelolaan perangkat lunak, serta konfigurasi dasar jaringan dan pemecahan masalah konektivitas.",
      en: "Studied PC assembly and maintenance, hardware component identification, Windows installation and configuration, software management, basic network configuration, and connectivity troubleshooting.",
    },
  },
];

const EXPERIENCE = [
  {
    current: true,
    title: {
      id: "Assistant Cafe and Kitchen Captain",
      en: "Assistant Cafe and Kitchen Captain",
    },
    org: {
      id: "Exotic Gaming & Cafe (Full Time Sore)",
      en: "Exotic Gaming & Cafe (Full Time, Evening)",
    },
    date: { id: "April 2026 – Sekarang", en: "April 2026 – Present" },
    points: {
      id: [
        "Memastikan operasional berjalan lancar sesuai standar operasional prosedur (SOP).",
        "Mengawasi kinerja dan mengoordinasikan pembagian tugas crew secara adil dan efektif.",
        "Memberikan arahan, teguran, serta pelatihan kepada crew untuk meningkatkan kualitas kerja.",
        "Melaporkan kendala operasional, pelanggaran, dan kesalahan crew kepada pihak terkait.",
        "Memberikan masukan dan inisiatif untuk meningkatkan kualitas pelayanan serta efisiensi operasional cafe.",
        "Mengembangkan kepemimpinan, komunikasi, tanggung jawab, dan manajemen waktu sambil menyeimbangkan pekerjaan dengan perkuliahan.",
      ],
      en: [
        "Keep daily operations running smoothly according to the standard operating procedures (SOP).",
        "Supervise crew performance and distribute tasks fairly and effectively.",
        "Give direction, corrections, and training to the crew to improve work quality.",
        "Report operational issues, violations, and crew mistakes to the relevant parties.",
        "Suggest improvements and take initiative to raise service quality and operational efficiency.",
        "Developing leadership, communication, responsibility, and time management while balancing work with studies.",
      ],
    },
  },
  {
    title: {
      id: "Database Architect & Quality Assurance Tester",
      en: "Database Architect & Quality Assurance Tester",
    },
    org: {
      id: "Aplikasi Dapur Kuliner Pak Ndut (Project Based Learning)",
      en: "Dapur Kuliner Pak Ndut App (Project Based Learning)",
    },
    date: { id: "Februari 2026 – Juni 2026", en: "February 2026 – June 2026" },
    points: {
      id: [
        "Merancang struktur basis data sesuai kebutuhan aplikasi.",
        "Mengintegrasikan basis data dengan bagian front-end aplikasi.",
        "Melakukan pengujian fungsional dengan metode black-box testing untuk menemukan kendala dan memeriksa kesesuaian fungsi aplikasi.",
      ],
      en: [
        "Designed the database structure based on the application's needs.",
        "Integrated the database with the application's front-end.",
        "Ran functional tests using black-box testing to find issues and verify that the application works as intended.",
      ],
    },
  },
  {
    title: {
      id: "Project Manager & Full Stack Developer",
      en: "Project Manager & Full Stack Developer",
    },
    org: {
      id: "Decha Booth (Project Based Learning)",
      en: "Decha Booth (Project Based Learning)",
    },
    date: {
      id: "Agustus 2025 – Desember 2025",
      en: "August 2025 – December 2025",
    },
    points: {
      id: [
        "Memimpin koordinasi tim selama pengerjaan proyek.",
        "Mengembangkan bagian front-end dan back-end website.",
        "Berkontribusi pada pengembangan fitur serta integrasi fungsi website.",
      ],
      en: [
        "Led team coordination throughout the project.",
        "Developed both the front-end and back-end of the website.",
        "Contributed to feature development and the integration of website functions.",
      ],
    },
  },
  {
    title: {
      id: "IT Support Technician & Customer Service",
      en: "IT Support Technician & Customer Service",
    },
    org: {
      id: "Prasasti Computer (Praktik Kerja Lapangan)",
      en: "Prasasti Computer (Internship)",
    },
    date: { id: "Juli 2024 – November 2024", en: "July 2024 – November 2024" },
    points: {
      id: [
        "Merakit PC, menginstal ulang Windows, serta menginstal dan mengonfigurasi aplikasi sesuai kebutuhan pengguna.",
        "Memeriksa dan mendiagnosis awal kerusakan laptop maupun komputer pelanggan.",
        "Membantu proses servis dan pemeliharaan perangkat komputer serta laptop.",
        "Melayani pelanggan yang membeli aksesori komputer, termasuk tinta printer, dan memberi informasi produk yang dibutuhkan.",
        "Mempelajari dasar penggunaan dan penanganan printer.",
        "Membantu memeriksa ketersediaan stok barang di gudang untuk mendukung pengelolaan inventaris.",
      ],
      en: [
        "Assembled PCs, reinstalled Windows, and installed and configured applications based on user needs.",
        "Inspected and ran initial diagnostics on customers' faulty laptops and computers.",
        "Assisted with servicing and maintaining computers and laptops.",
        "Served customers buying computer accessories, including printer ink, and gave product information.",
        "Learned the basics of operating and handling printers.",
        "Helped check warehouse stock availability to support inventory management.",
      ],
    },
  },
  {
    title: {
      id: "IT Support & Examination Coordinator Universitas Terbuka",
      en: "IT Support & Examination Coordinator, Universitas Terbuka",
    },
    org: {
      id: "SMKS PGRI 1 Nganjuk (Freelance)",
      en: "SMKS PGRI 1 Nganjuk (Freelance)",
    },
    date: { id: "Juni 2023 & Desember 2023", en: "June 2023 & December 2023" },
    points: {
      id: [
        "Menyiapkan perangkat komputer dan jaringan untuk mendukung kelancaran pelaksanaan ujian.",
        "Melakukan troubleshooting cepat terhadap masalah hardware dan software yang muncul saat ujian berlangsung.",
        "Bertanggung jawab menjaga ketertiban dan integritas pelaksanaan ujian.",
      ],
      en: [
        "Prepared computers and the network to keep the exams running smoothly.",
        "Quickly troubleshot hardware and software problems that came up during the exams.",
        "Responsible for keeping the exams orderly and maintaining their integrity.",
      ],
    },
  },
];

const ORGANIZATION = [
  {
    title: {
      id: "Anggota Biro Non Akademik, Departemen Keilmuan",
      en: "Member, Non-Academic Bureau, Science Department",
    },
    org: {
      id: "HMJ Teknologi Informasi Politeknik Negeri Jember",
      en: "HMJ Teknologi Informasi, Politeknik Negeri Jember",
    },
    date: { id: "2025 – Sekarang", en: "2025 – Present" },
    points: {
      id: [
        "Berpartisipasi dalam kegiatan organisasi dan mendukung pelaksanaan program kerja.",
        "Berkolaborasi dengan anggota lain dalam koordinasi kegiatan dan penyelesaian tugas organisasi.",
      ],
      en: [
        "Take part in organizational activities and support the execution of work programs.",
        "Collaborate with other members to coordinate activities and complete organizational tasks.",
      ],
    },
  },
];

// Isi "url" dengan link proyek (GitHub / demo) kalau sudah ada. Kalau kosong, tombolnya otomatis disembunyikan.
const PROJECTS = [
  {
    name: "Decha Booth",
    tag: {
      id: "Project Based Learning · Agu – Des 2025",
      en: "Project Based Learning · Aug – Dec 2025",
    },
    role: {
      id: "Project Manager & Full Stack Developer",
      en: "Project Manager & Full Stack Developer",
    },
    desc: {
      id: "Proyek website yang dikerjakan tim, dengan saya sebagai pemimpin tim sekaligus pengembang front-end dan back-end.",
      en: "A team website project where I led the team and also built both the front-end and back-end.",
    },
    points: {
      id: [
        "Memimpin koordinasi tim selama proyek",
        "Mengembangkan front-end dan back-end",
        "Mengintegrasikan fitur dan fungsi website",
      ],
      en: [
        "Led team coordination during the project",
        "Built the front-end and back-end",
        "Integrated the website's features and functions",
      ],
    },
    tags: ["Front-end", "Back-end", "Project Management"],
    url: "https://pameran-jti.polije.ac.id/product/410/decha-booth",
  },
  {
    name: "Aplikasi Dapur Kuliner Pak Ndut",
    tag: {
      id: "Project Based Learning · Feb – Jun 2026",
      en: "Project Based Learning · Feb – Jun 2026",
    },
    role: {
      id: "Database Architect & QA Tester",
      en: "Database Architect & QA Tester",
    },
    desc: {
      id: "Aplikasi untuk Dapur Kuliner Pak Ndut. Saya memegang perancangan basis data, integrasi dengan front-end, dan pengujian fungsional.",
      en: "An application for Dapur Kuliner Pak Ndut. I handled database design, front-end integration, and functional testing.",
    },
    points: {
      id: [
        "Merancang struktur basis data",
        "Integrasi basis data dengan front-end",
        "Pengujian fungsional black-box",
      ],
      en: [
        "Designed the database structure",
        "Integrated the database with the front-end",
        "Black-box functional testing",
      ],
    },
    tags: ["MySQL", "Database Design", "Black-box Testing"],
    url: "https://pameran-jti.polije.ac.id/pameran/product/589/aplikasi-dapur-kuliner-pak-ndut",
  },
];

// Isi "url" dengan link PDF/sertifikat kalau mau ditautkan.
const CERTS = [
  {
    name: "LKMM - TD",
    issuer: "HMJ Teknologi Informasi Politeknik Negeri Jember",
    date: { id: "April 2026", en: "April 2026" },
    url: "https://drive.google.com/file/d/1Pbca3rWD_Eg_IaOEaXvJxYz0pCstNYWL/view?usp=sharing",
  },
  {
    name: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: { id: "Oktober 2025", en: "October 2025" },
    url: "https://drive.google.com/file/d/16LO7Svcbuy9P6t1gjgThoWd3zi68sTGb/view?usp=drive_link",
  },
  {
    name: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: { id: "Oktober 2025", en: "October 2025" },
    url: "https://drive.google.com/file/d/18Drf2ceEf5fxEcn6ShtZn98GanhmcapX/view?usp=drive_link",
  },
  {
    name: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: { id: "Oktober 2025", en: "October 2025" },
    url: "https://drive.google.com/file/d/19fTb42vz6xVzdAzpeQEB8Y_QX9O-2ktZ/view?usp=drive_link",
  },
  {
    name: "Belajar Dasar Generative AI",
    issuer: "Dicoding Indonesia",
    date: { id: "Oktober 2025", en: "October 2025" },
    url: "https://drive.google.com/file/d/1NQc-ucEruHWESoatzVGzZAW8pLlOLbkg/view?usp=drive_link",
  },
  {
    name: "LKMM - Pra TD",
    issuer: "HMJ Teknologi Informasi Politeknik Negeri Jember",
    date: { id: "Oktober 2025", en: "October 2025" },
    url: "https://drive.google.com/file/d/19AVrAVgV1nEj-8aRoT_w-ObJTIXlILy2/view?usp=sharing",
  },
  {
    name: "Prompt Engineer untuk Software Developer",
    issuer: "Dicoding Indonesia",
    date: { id: "September 2025", en: "September 2025" },
    url: "https://drive.google.com/file/d/1uW-6Ob31KdJ7SfzbyWaoKOlwpA_NNG08/view?usp=drive_link",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: { id: "September 2025", en: "September 2025" },
    url: "https://drive.google.com/file/d/1Gw0UJNATThAwWc6ewQqGftmz69VJXoaw/view?usp=drive_link",
  },
  {
    name: "Uji Kompetensi Keahlian - Teknik Komputer & Jaringan",
    issuer: "SMKS PGRI 1 Nganjuk",
    date: { id: "Maret 2025", en: "March 2025" },
    url: "https://drive.google.com/drive/folders/18XIfl8hEWID0AYsoUHYUs5eXhHRh4HVm?usp=drive_link",
  },
  {
    name: "Praktik Kerja Lapangan",
    issuer: "Prasasti Computer Nganjuk",
    date: { id: "November 2024", en: "November 2024" },
    url: "https://drive.google.com/file/d/16X7ZK0StEvb9CDhdQOLCufYHpe1npy6Q/view?usp=sharing",
  },
];

/* ---------- 4. Helper ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function chips(list) {
  const wrap = el("div", "chips");
  list.forEach((t) => wrap.appendChild(el("span", "chip", t)));
  return wrap;
}

function bullets(list) {
  const ul = el("ul", "bullets");
  list.forEach((t) => ul.appendChild(el("li", null, t)));
  return ul;
}

function header(title, sub, date, cls) {
  const head = el("div", cls);
  const left = el("div");
  left.appendChild(el("h3", null, title));
  if (sub) left.appendChild(el("div", "sub", sub));
  head.appendChild(left);
  head.appendChild(el("div", "date", date));
  return head;
}

/* ---------- 5. Render ---------- */
let lang = "id";

function renderStatic() {
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (I18N[lang][key] !== undefined) node.textContent = I18N[lang][key];
  });
}

function renderFacts() {
  const t = I18N[lang];
  const rows = [
    [t.fact_gpa, "3,85 / 4,00".replace(",", lang === "en" ? "." : ",")],
    [t.fact_campus, "Politeknik Negeri Jember"],
    [t.fact_major, t.fact_major_v],
    [t.fact_since, "2025"],
    [t.fact_loc, t.fact_loc_v],
    [t.fact_lang, t.fact_lang_v],
  ];
  const dl = $("#facts");
  dl.replaceChildren();
  rows.forEach(([k, v]) => {
    const row = el("div");
    row.appendChild(el("dt", null, k));
    row.appendChild(el("dd", null, v));
    dl.appendChild(row);
  });
}

function renderSkills() {
  const root = $("#skills");
  root.replaceChildren();
  SKILLS.forEach((g) => {
    const box = el("div", "skill-group reveal");
    box.appendChild(el("h3", null, g.title[lang]));
    box.appendChild(chips(g.items[lang]));
    root.appendChild(box);
  });
}

function renderEducation() {
  const root = $("#education");
  root.replaceChildren();
  EDUCATION.forEach((e) => {
    const card = el("article", "entry reveal");
    card.appendChild(
      header(
        e.school,
        `${e.degree[lang]} · ${e.meta[lang]}`,
        e.date[lang],
        "entry-head",
      ),
    );
    if (e.desc) card.appendChild(el("p", null, e.desc[lang]));
    if (e.courses) {
      card.appendChild(el("span", "label", I18N[lang].courses_label));
      card.appendChild(chips(lang === "en" ? e.coursesEn : e.courses));
    }
    root.appendChild(card);
  });
}

function renderTimeline(rootSel, data) {
  const root = $(rootSel);
  root.replaceChildren();
  data.forEach((x) => {
    const li = el("li", "t-item reveal" + (x.current ? " current" : ""));
    li.appendChild(header(x.title[lang], x.org[lang], x.date[lang], "t-head"));
    li.appendChild(bullets(x.points[lang]));
    root.appendChild(li);
  });
}

function renderOrganization() {
  const root = $("#organization");
  root.replaceChildren();
  ORGANIZATION.forEach((x) => {
    const card = el("article", "entry reveal");
    card.appendChild(
      header(x.title[lang], x.org[lang], x.date[lang], "entry-head"),
    );
    card.appendChild(bullets(x.points[lang]));
    root.appendChild(card);
  });
}

function renderProjects() {
  const root = $("#projects");
  root.replaceChildren();
  PROJECTS.forEach((p, i) => {
    const card = el("article", "card reveal");

    const meta = el("div", "card-meta");
    meta.appendChild(el("span", "idx", `[${String(i + 1).padStart(2, "0")}]`));
    meta.appendChild(el("span", "role-tag", p.role[lang]));
    card.appendChild(meta);

    card.appendChild(el("h3", null, p.name));
    card.appendChild(el("div", "tag", p.tag[lang]));
    card.appendChild(el("p", null, p.desc[lang]));
    card.appendChild(bullets(p.points[lang]));

    const tags = chips(p.tags);
    if (tags.firstChild) tags.firstChild.classList.add("is-featured");
    card.appendChild(tags);

    if (p.url) {
      const a = el("a", "link", I18N[lang].view_project);
      a.href = p.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.appendChild(a);
    }
    root.appendChild(card);
  });
}

function renderCerts() {
  const root = $("#certs");
  root.replaceChildren();
  CERTS.forEach((c) => {
    const li = el("li", "cert reveal");
    li.appendChild(el("div", "cert-date", c.date[lang]));

    const name = el("div", "cert-name");
    if (c.url) {
      const a = el("a", null, c.name);
      a.href = c.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      name.appendChild(a);
    } else {
      name.textContent = c.name;
    }
    li.appendChild(name);

    li.appendChild(el("div", "cert-issuer", c.issuer));
    li.appendChild(el("div", "cert-arrow", c.url ? "↗" : ""));
    root.appendChild(li);
  });
}

function renderContact() {
  const root = $("#contactList");
  root.replaceChildren();
  const items = [
    ["Email", CONFIG.email, `mailto:${CONFIG.email}`],
    ["WhatsApp", CONFIG.phone, `https://wa.me/${CONFIG.whatsapp}`],
  ];
  if (CONFIG.linkedin)
    items.push([
      "LinkedIn",
      CONFIG.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      CONFIG.linkedin,
    ]);
  if (CONFIG.github)
    items.push([
      "GitHub",
      CONFIG.github.replace(/^https?:\/\/(www\.)?/, ""),
      CONFIG.github,
    ]);

  items.forEach(([k, v, href]) => {
    const li = el("li", "reveal");
    const a = el("a");
    a.href = href;
    if (!href.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    const text = el("span");
    text.appendChild(el("span", "k", k));
    text.appendChild(el("span", "v", v));
    a.appendChild(text);
    a.appendChild(el("span", "arrow", "↗"));
    li.appendChild(a);
    root.appendChild(li);
  });
}

function renderAll() {
  document.documentElement.lang = lang;
  renderStatic();
  renderFacts();
  renderSkills();
  renderEducation();
  renderTimeline("#experience", EXPERIENCE);
  renderOrganization();
  renderProjects();
  renderCerts();
  renderContact();
  observeReveal();
}

/* ---------- 6. Animasi muncul saat scroll ---------- */
let io;
function observeReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("in"));
    return;
  }
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08 },
    );
  }
  items.forEach((n) => io.observe(n));
}

/* ---------- 7. Bahasa ---------- */
function setLang(next) {
  lang = next;
  try {
    localStorage.setItem("lang", next);
  } catch (e) {
    /* abaikan */
  }
  $$(".lang button").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === next),
  );
  renderAll();
}

/* ---------- 8. Menu mobile & nav aktif ---------- */
function setupNav() {
  const btn = $("#menuBtn");
  const nav = $("#nav");

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  const links = $$(".nav a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY + 120;
      let current = null;
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s.id;
      });
      links.forEach((a) =>
        a.classList.toggle(
          "is-active",
          a.getAttribute("href") === "#" + current,
        ),
      );
    },
    { passive: true },
  );
}

/* ---------- 9. Foto: sembunyikan kalau file belum ada ---------- */
function setupPhoto() {
  const img = $("#photo");
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
}

/* ---------- 10. Mulai ---------- */
document.addEventListener("DOMContentLoaded", () => {
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch (e) {
    /* abaikan */
  }
  if (saved === "id" || saved === "en") lang = saved;

  $("#year").textContent = new Date().getFullYear();
  $$(".lang button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)),
  );

  setupNav();
  setupPhoto();
  setLang(lang);
});
