/* ============================================================
   MARCELLINO NATANAEL – Project Data
   Single source of truth for the portfolio grid (index.html)
   and the project detail template (project.html).
   ============================================================ */

window.PROJECTS = [
  /* ── MOBILE (UI/UX Design) ─────────────────────────────── */
  {
    id: 'ardor',
    category: 'mobile',
    type: 'design',
    name: 'Ardor',
    deviceType: 'Mobile App',
    year: '2024',
    description: {
      id: 'Aplikasi pelacakan olahraga harian untuk kebugaran tubuh dengan integrasi AI yang canggih.',
      en: 'Daily fitness tracking app with advanced AI integration.'
    },
    cover: 'img/Welcome_page.png',
    images: ['img/Welcome_page.png', 'img/Ardor_Home_page.png', 'img/Smart_chat_page.png'],
    method: 'Design Thinking & User-Centered Design',
    figmaLink: '#',
    prototypeLink: '#'
  },
  {
    id: 're-trash',
    category: 'mobile',
    type: 'design',
    name: 'Re-Trash',
    deviceType: 'Mobile App',
    year: '2024',
    description: {
      id: 'Aplikasi daur ulang sampah dengan reward berupa poin untuk membuat lingkungan bersih yang berkelanjutan.',
      en: 'Waste recycling app with a points reward system.'
    },
    cover: 'img/Retrash_Splash_page.png',
    images: ['img/Retrash_Splash_page.png', 'img/Retrash_Sign-In_page.png', 'img/Retrash_Home_page.png'],
    method: 'Design Thinking & User-Centered Design',
    figmaLink: '#',
    prototypeLink: '#'
  },
  {
    id: 'ciputra',
    category: 'mobile',
    type: 'design',
    name: 'Ciputra E-Property',
    deviceType: 'Mobile App',
    year: '2024',
    description: {
      id: 'Super app Ciputra mengintegrasikan pencarian rumah, pembayaran tagihan, dan transaksi dalam satu aplikasi.',
      en: 'Ciputra super app — home search, bills, and transactions in one place.'
    },
    cover: 'img/Ciputra_login_page.png',
    images: ['img/Ciputra_login_page.png', 'img/Ciputra_Home_page.png', 'img/Ciputra_Properti_page.png'],
    method: 'Design Thinking & Human-Centered Design',
    figmaLink: '#',
    prototypeLink: '#'
  },
  {
    id: 'padelin',
    category: 'mobile',
    type: 'design',
    name: 'Padelin',
    deviceType: 'Mobile App',
    year: '2024',
    description: {
      id: 'Aplikasi kursus padel dengan sistem manajemen pengetahuan bersama coach dan komunitas.',
      en: 'Padel course app with a knowledge management system shared with coaches and the community.'
    },
    cover: 'img/Padelin_Sign-In_page.png',
    images: ['img/Padelin_Sign-In_page.png', 'img/Padelin_Community_page.png', 'img/Padelin_Community_Join_page.png'],
    method: 'Human-Centered Design',
    figmaLink: '#',
    prototypeLink: '#'
  },
  {
    id: 'ladang-amal',
    category: 'mobile',
    type: 'design',
    name: 'Ladang Amal',
    deviceType: 'Mobile App',
    year: '2024',
    description: {
      id: 'Aplikasi penggalangan donasi untuk korban bencana guna mendukung gerakan kemanusiaan.',
      en: 'Donation fundraising app for disaster victims supporting humanitarian relief.'
    },
    cover: 'img/Login_UI.png',
    images: ['img/Login_UI.png', 'img/Home.png', 'img/Peta.png'],
    method: 'Design Thinking & User-Centered Design',
    figmaLink: '#',
    prototypeLink: '#'
  },

  /* ── WEBSITE ────────────────────────────────────────────── */
  {
    id: 'administration-crud',
    category: 'website',
    type: 'design',
    name: 'Administration CRUD',
    deviceType: 'Website',
    year: '2025',
    description: {
      id: 'Sistem administrasi CRUD untuk PT Karisma Dinamika Purwa dalam menunjang operasional perusahaan.',
      en: 'Full CRUD administration system for PT Karisma Dinamika Purwa supporting daily company operations.'
    },
    cover: 'img/Crud_1.png',
    images: ['img/Crud_1.png', 'img/Crud_2.png', 'img/Crud_3.png'],
    method: 'SDLC – Waterfall',
    figmaLink: '#',
    prototypeLink: '#'
  },
  {
    id: 'sistem-pendukung-keputusan',
    category: 'website',
    type: 'design',
    name: 'Sistem Pendukung Keputusan',
    deviceType: 'Website',
    year: '2025',
    description: {
      id: 'Aplikasi prioritas aset lelang PT Karisma Dinamika Purwa menggunakan algoritma Simple Additive Weighting (SAW).',
      en: 'Decision support system for auction-asset prioritization at PT Karisma Dinamika Purwa using the SAW algorithm.'
    },
    cover: 'img/Karisma_Dashboard_Page.png',
    images: ['img/Karisma_Dashboard_Page.png', 'img/Karisma_Criteria_Page.png', 'img/Karisma_Assessment_Weigh_Page.png'],
    method: 'Extreme Programming (XP)',
    figmaLink: '#',
    prototypeLink: '#'
  },

  /* ── GAME ───────────────────────────────────────────────── */
  {
    id: 'wewe-gombel',
    category: 'game',
    type: 'game',
    name: 'Wewe Gombel Horror Game',
    genre: '3D Horror · Puzzle Solving',
    releaseYear: '2024',
    badge: '🏆 Juara 3 + Favorit',
    description: {
      id: 'Game 3D horror lokal tentang anak yang diculik wewe gombel. Juara 3 & Favorit I/O Fest 2024 – Universitas Tarumanegara.',
      en: 'Local 3D horror game about a child kidnapped by Wewe Gombel. 3rd Place & Favorite at I/O Fest 2024 – Universitas Tarumanegara.'
    },
    cover: 'img/Gombel_1_1.png',
    images: ['img/Gombel_1_1.png', 'img/Gombel_2.png', 'img/Gombel_1_3.png'],
    requirements: {
      min: { OS: 'Win 10/11 64-bit', Processor: 'i5-8400', GPU: 'GTX 1060 6GB', RAM: '8 GB', Storage: '10 GB SSD' },
      rec: { OS: 'Win 11 64-bit', Processor: 'i7-10700K', GPU: 'RTX 3060', RAM: '16 GB', Storage: '10 GB SSD' }
    },
    downloadLink: '#'
  },
  {
    id: 'jurig-jiwa',
    category: 'game',
    type: 'game',
    name: 'Jurig Jiwa Nu Leungit',
    genre: '3D Horror',
    releaseYear: '2024',
    description: {
      id: 'Game 3D Horror lokal bercerita tentang pesugihan berakhir tragis. Lomba Hology 7.0 – Universitas Brawijaya 2024.',
      en: 'Local 3D horror game about a dark pesugihan story. Hology 7.0 – Universitas Brawijaya 2024.'
    },
    cover: 'img/jurig_1.png',
    images: ['img/jurig_1.png', 'img/jurig_2.png', 'img/jurig_3.png'],
    requirements: {
      min: { OS: 'Win 10 64-bit', Processor: 'i5-8400', GPU: 'GTX 1060 6GB', RAM: '8 GB', Storage: '10 GB SSD' },
      rec: { OS: 'Win 11 64-bit', Processor: 'i7-10700K', GPU: 'RTX 3060', RAM: '16 GB', Storage: '10 GB SSD' }
    },
    downloadLink: 'https://drive.google.com/drive/folders/13mLicJ_2n0_N6vzwlxLpZ1F8Uv6TgNwZ?usp=drive_link'
  },
  {
    id: 'the-heritage',
    category: 'game',
    type: 'game',
    name: 'The Heritage (Cursed Bloodline)',
    genre: '3D Horror · Lowpoly',
    releaseYear: '2025',
    badge: '🥇 Juara 1',
    description: {
      id: 'Game 3D Horror lowpoly tentang kutukan keluarga. Juara 1 IT Fest Universitas Paramadina 2025.',
      en: 'Lowpoly 3D horror game about a family curse. 1st Place at IT Fest Universitas Paramadina 2025.'
    },
    cover: 'img/Foto_1.png',
    images: ['img/Foto_1.png', 'img/Foto_2.png', 'img/Foto_3.png'],
    requirements: {
      min: { OS: 'Win 10/11 64-bit', Processor: 'i5-3570 / Ryzen 5 1400', GPU: 'GTX 1050 / RX 550', RAM: '8 GB', Storage: '3 GB SSD' },
      rec: { OS: 'Win 10/11 64-bit', Processor: 'i7-4970 / Ryzen 7 1700X', GPU: 'GTX 1060 / 1650 Super', RAM: '16 GB', Storage: '3 GB SSD' }
    },
    downloadLink: 'https://gamejolt.com/games/perjanjiangaib/997572'
  },
  {
    id: 'demit',
    category: 'game',
    type: 'game',
    name: 'Demit',
    genre: '3D Horror',
    releaseYear: '2024',
    description: {
      id: 'Game 3D Horror tentang mahasiswa yang menemukan tempat tinggal murah dengan sejarah kelam era kolonial Belanda.',
      en: 'A 3D horror game about a student who finds cheap accommodation with a dark colonial-era history.'
    },
    cover: 'img/Gambar_1.png',
    images: ['img/Gambar_1.png', 'img/Gambar_2.png', 'img/Gambar_3.png'],
    requirements: {
      min: { OS: 'Win 10/11 64-bit', Processor: 'i5-6600K / Ryzen 5 2600', GPU: 'GTX 1060 / RX 580', RAM: '8 GB', Storage: '6 GB SSD' },
      rec: { OS: 'Win 10/11 64-bit', Processor: 'i7-7700K / Ryzen 7 1700X', GPU: 'GTX 1080 / RTX 2060 Super', RAM: '16 GB', Storage: '6 GB SSD' }
    },
    downloadLink: 'https://gamejolt.com/games/demithorrorgame/907891'
  }
];
