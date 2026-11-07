/**
 * data.js
 * Single source of truth untuk seluruh konten portofolio.
 * Update di sini, halaman otomatis ikut berubah.
 */

const portfolioData = {
  profile: {
    name: "Fauzi Rafi Abimanyu Nugraha",
    shortName: "Fauzi Rafi",
    initials: "FR",
    role: "Mahasiswa D4 Teknik Informatika",
    focus: "Web Development · Database · QA",
    location: "Nganjuk, Jawa Timur",
    availability: "Terbuka untuk magang & kolaborasi",
    email: "fauzinugraha6822@gmail.com",
    phone: "+62 896-5298-7262",
    phoneLink: "6289652987262",
    linkedin: "https://www.linkedin.com/in/USERNAME",
    github: "https://github.com/USERNAME",
    cvFile: "cv.pdf",

    // Teks yang di-typing bergantian di hero
    taglines: [
      "Mahasiswa D4 Teknik Informatika",
      "Front-End & Back-End Developer",
      "Database Enthusiast",
      "QA & Black-Box Tester",
    ],

    summary:
      "Mahasiswa D4 Teknik Informatika Politeknik Negeri Jember dengan IPK 3,85/4,00 dan latar belakang Teknik Komputer dan Jaringan. Berpengalaman dalam pengembangan website front-end & back-end, perancangan dan integrasi basis data MySQL, black-box testing, serta troubleshooting perangkat.",

    about: [
      "Saya Fauzi, mahasiswa D4 Teknik Informatika di Politeknik Negeri Jember. Perjalanan saya di dunia IT dimulai dari SMK Teknik Komputer dan Jaringan — belajar rakit PC, install ulang Windows, troubleshoot printer, sampai konfigurasi dasar jaringan.",
      "Di perkuliahan, saya mulai mendalami sisi pengembangan perangkat lunak: menyusun front-end dan back-end website, merancang struktur basis data MySQL, hingga menguji aplikasi dengan metode black-box testing. Sempat memimpin tim di proyek Decha Booth, dan saat ini masih aktif sebagai Assistant Cafe & Kitchen Captain di samping kuliah — dua hal yang cukup berbeda, tapi sama-sama melatih koordinasi tim, komunikasi, dan manajemen waktu.",
    ],

    stats: [
      { value: 3.85, decimals: 2, suffix: "", label: "IPK saat ini" },
      { value: 5, decimals: 0, suffix: "", label: "Pengalaman kerja & PKL" },
      { value: 10, decimals: 0, suffix: "", label: "Sertifikasi & pelatihan" },
      { value: 2, decimals: 0, suffix: "", label: "Proyek PBL" },
    ],
  },

  experience: [
    {
      role: "Assistant Cafe & Kitchen Captain",
      org: "Exotic Gaming & Cafe",
      type: "Full Time",
      period: "Apr 2026 — Sekarang",
      points: [
        "Memastikan operasional berjalan sesuai SOP.",
        "Mengawasi kinerja dan mengoordinasikan pembagian tugas crew.",
        "Memberikan arahan, teguran, serta pelatihan kepada crew.",
        "Melaporkan kendala operasional dan memberikan inisiatif perbaikan.",
      ],
    },
    {
      role: "Database Architect & QA Tester",
      org: "Aplikasi Dapur Kuliner Pak Ndut",
      type: "Project Based Learning",
      period: "Feb — Jun 2026",
      points: [
        "Merancang struktur basis data sesuai kebutuhan aplikasi.",
        "Mengintegrasikan basis data dengan bagian front-end.",
        "Melaksanakan black-box testing untuk validasi fungsi aplikasi.",
      ],
    },
    {
      role: "Project Manager & Full Stack Developer",
      org: "Decha Booth",
      type: "Project Based Learning",
      period: "Agu — Des 2025",
      points: [
        "Memimpin koordinasi tim selama pengerjaan proyek.",
        "Mengembangkan bagian front-end dan back-end website.",
        "Berkontribusi pada pengembangan fitur dan integrasi fungsi website.",
      ],
    },
    {
      role: "IT Support Technician & Customer Service",
      org: "Prasasti Computer, Nganjuk",
      type: "Praktik Kerja Lapangan",
      period: "Jul — Nov 2024",
      points: [
        "Merakit PC, install ulang Windows, dan konfigurasi aplikasi pengguna.",
        "Diagnosis awal kerusakan laptop/PC serta membantu proses servis.",
        "Melayani pelanggan, penjualan aksesori, dan pengecekan stok gudang.",
      ],
    },
    {
      role: "IT Support & Examination Coordinator",
      org: "Universitas Terbuka · SMKS PGRI 1 Nganjuk",
      type: "Freelance",
      period: "Jun & Des 2023",
      points: [
        "Menyiapkan perangkat komputer dan jaringan untuk pelaksanaan ujian.",
        "Troubleshooting cepat terhadap kendala hardware & software saat ujian.",
        "Menjaga ketertiban dan integritas pelaksanaan ujian.",
      ],
    },
    {
      role: "Anggota Biro Non Akademik — Departemen Keilmuan",
      org: "HMJ Teknologi Informasi Politeknik Negeri Jember",
      type: "Organisasi",
      period: "2025 — Sekarang",
      points: [
        "Berpartisipasi dalam kegiatan organisasi dan mendukung program kerja.",
        "Berkolaborasi dengan anggota lain dalam koordinasi kegiatan.",
      ],
    },
  ],

  projects: [
    {
      title: "Decha Booth",
      role: "Project Manager · Full Stack",
      year: "2025",
      description:
        "Proyek berbasis pembelajaran (PBL) berupa pengembangan website untuk brand booth Decha, dikerjakan secara berkelompok dari perencanaan hingga tahap akhir pengembangan.",
      points: [
        "Memimpin koordinasi tim selama siklus pengerjaan proyek.",
        "Mengembangkan sisi front-end dan back-end website.",
        "Berkontribusi pada pengembangan fitur dan integrasi fungsi.",
      ],
      tags: ["Web Development", "Front-End", "Back-End", "Leadership"],
    },
    {
      title: "Aplikasi Dapur Kuliner Pak Ndut",
      role: "DB Architect · QA Tester",
      year: "2026",
      description:
        "Proyek berbasis pembelajaran (PBL) berupa aplikasi pengelolaan untuk Dapur Kuliner Pak Ndut. Fokus kontribusi pada perancangan basis data dan pengujian fungsional aplikasi.",
      points: [
        "Merancang struktur basis data sesuai kebutuhan aplikasi.",
        "Mengintegrasikan basis data dengan bagian front-end.",
        "Melakukan black-box testing untuk memvalidasi fungsi aplikasi.",
      ],
      tags: ["MySQL", "Database Design", "Black-Box Testing", "QA"],
    },
  ],

  skills: {
    technical: [
      "Web Development (Front-End & Back-End)",
      "MySQL — Perancangan & Integrasi",
      "Black-Box Testing",
      "Cisco Packet Tracer",
      "Winbox (MikroTik)",
    ],
    tools: [
      "VS Code",
      "Figma",
      "Trello",
      "Microsoft Project",
      "Canva & CorelDRAW",
      "CapCut & Microsoft Office",
    ],
    soft: [
      "Kepemimpinan & Koordinasi Tim",
      "Komunikasi",
      "Manajemen Waktu",
      "Problem Solving",
      "Adaptasi & Disiplin",
    ],
  },

  certifications: [
    {
      year: "2026",
      name: "LKMM — Tingkat Dasar",
      issuer: "HMJ TI Politeknik Negeri Jember",
    },
    {
      year: "2025",
      name: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding Indonesia",
    },
    {
      year: "2025",
      name: "Belajar Dasar Structured Query Language",
      issuer: "Dicoding Indonesia",
    },
    {
      year: "2025",
      name: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
    },
    {
      year: "2025",
      name: "Belajar Dasar Generative AI",
      issuer: "Dicoding Indonesia",
    },
    {
      year: "2025",
      name: "LKMM — Pra Tingkat Dasar",
      issuer: "HMJ TI Politeknik Negeri Jember",
    },
    {
      year: "2025",
      name: "Prompt Engineer untuk Software Developer",
      issuer: "Dicoding Indonesia",
    },
    { year: "2025", name: "Belajar Dasar AI", issuer: "Dicoding Indonesia" },
    {
      year: "2025",
      name: "Uji Kompetensi Keahlian — TKJ",
      issuer: "SMKS PGRI 1 Nganjuk",
    },
    {
      year: "2024",
      name: "Praktik Kerja Lapangan",
      issuer: "Prasasti Computer, Nganjuk",
    },
  ],

  education: [
    {
      school: "Politeknik Negeri Jember",
      degree: "D4 Teknik Informatika",
      period: "2025 — Sekarang",
      score: "IPK 3,85 / 4,00",
      details:
        "Mata kuliah relevan: Workshop Sistem Informasi Web Client & Server, Workshop Basis Data, Teknologi Basis Data, Analisis Desain Berorientasi Obyek, Konsep Jaringan Komputer, Workshop Mobile Applications, Software Quality Assurance, Interaksi Manusia dan Komputer.",
    },
    {
      school: "SMKS PGRI 1 Nganjuk",
      degree: "Teknik Komputer dan Jaringan",
      period: "2022 — 2025",
      score: "Nilai 83,30 / 100",
      details:
        "Perakitan & pemeliharaan komputer, instalasi dan konfigurasi sistem operasi Windows, konfigurasi dasar jaringan, serta troubleshooting konektivitas.",
    },
  ],
};
