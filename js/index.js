/* ─────────────────────────────────────────────────────────────
   MARCELLINO NATANAEL – PORTFOLIO  |  index.js
   ───────────────────────────────────────────────────────────── */

/* ══════════════════════════════════════════════════════════════
   1. TRANSLATIONS
   ══════════════════════════════════════════════════════════════ */
const translations = {
  id: {
    /* Navbar */
    nav_home:        'Beranda',
    nav_about:       'Tentang Saya',
    nav_portfolio:   'Portfolio',
    nav_edu:         'Pendidikan',
    nav_exp:         'Pengalaman',
    nav_article:     'Artikel',
    nav_contact:     'Kontak',

    /* Hero */
    hero_badge:        'UI/UX DESIGNER & FULL-STACK DEVELOPER',
    hero_greeting:     'Hi Semua,',
    hero_iam:          'Saya',
    hero_desc:         'UI/UX Designer dan Full-Stack Web Developer. Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang teknologi dan desain.',
    hero_btn_contact:  'Hubungi Saya',
    hero_btn_portfolio:'Lihat Portfolio',
    photo_label:       'Foto Saya',
    card1_title:       'UI/UX Design',
    card1_sub:         'Figma & Prototyping',
    card2_title:       'Full-Stack Dev',
    card2_sub:         'Laravel & PHP',

    /* About */
    about_label:     'TENTANG SAYA',
    about_title:     'UI/UX Design & Full-Stack<br>Web Developer',
    about_bio:       'Perkenalkan, saya <strong>Marcellino Natanael</strong>, mahasiswa akhir program studi Sistem Informasi semester 7 Universitas Bunda Mulia Ancol. Fokus utama saya adalah mendesain tampilan antarmuka (UI) dan pengalaman pengguna (UX) serta pengembangan full-stack website mulai dari perancangan database hingga coding backend dan frontend yang berpedoman pada <em>clean code</em> dengan pendekatan SDLC maupun Extreme Programming.',
    skill_main_title:'Keahlian Utama',
    skill_main_desc: 'Spesialis perancangan desain antarmuka menggunakan Figma dan pengembangan sistem menggunakan PHP dengan framework Laravel.',
    skill_figma:     'Wireframe & Prototyping',
    skill_other_title:'Keahlian Lainnya',
    contrib_title:   'Kontribusi Profesional',
    contrib_desc:    'Bertanggung jawab penuh atas seluruh siklus pengembangan sistem informasi perusahaan. Kontribusi mencakup pembuatan Sistem Pendukung Keputusan (SAW), Sistem Monitoring & Dashboard, serta Website Self-Service dan Company Profile.',
    connect_title:   'Mari Terhubung',
    connect_desc:    'Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau peluang profesional baru.',

    /* Portfolio */
    port_label:  'PROJECT',
    port_title:  'Beberapa Proyek yang<br>Pernah Saya Kembangkan',
    filter_all:  'Semua',
    mockup_label:'Mockup',

    p1_type: '(Desain Aplikasi Mobile)',
    p1_desc: 'Aplikasi pelacakan olahraga harian untuk kebugaran tubuh dengan integrasi AI yang canggih.',
    p2_type: '(Desain Aplikasi Mobile)',
    p2_desc: 'Aplikasi daur ulang sampah dengan reward berupa poin untuk membuat lingkungan bersih yang berkelanjutan.',
    p3_type: '(Desain Aplikasi Mobile)',
    p3_desc: 'Aplikasi super app Ciputra dengan mengintegrasikan seluruh proses pencarian rumah, pembayaran tagihan, hingga pembayaran hanya dalam satu app saja.',
    p4_type: '(Desain Aplikasi Mobile)',
    p4_desc: 'Aplikasi kursus olahraga kekinian yaitu padelin yang digabungkan dengan sistem manajemen pengetahuan agar pengguna mendapat ilmu dari apa yang mereka pelajari di dalam aplikasi bersama coach maupun komunitas.',
    p5_type: '(Desain Aplikasi Mobile)',
    p5_desc: 'Aplikasi penggalangan donasi untuk korban yang terdampak bencana guna mendukung gerakan kemanusiaan antar sesama.',
    p6_type: '(Web Development)',
    p6_desc: 'Aplikasi administrasi dengan sistem create, read, update dan delete yang dikembangkan untuk PT Karisma Dinamika Purwa dalam menunjang operasional perusahaan.',
    p7_type: '(Web Development)',
    p7_desc: 'Aplikasi berbasis website yang dirancang untuk menentukan prioritas aset lelang pada PT Karisma Dinamika Purwa dengan menggunakan algoritma Simple Additive Weighting (SAW).',
    p8_desc: 'Game 3D horror lokal bercerita tentang seorang anak yang diculik wewe gombel dan harus melarikan diri dengan mekanik puzzle solving dan escaping.',
    p9_desc: 'Game 3D Horror lokal dengan cerita pesugihan yang berakhir mengenaskan bagi keluarga Bayu.',
    p10_desc:'Game 3D Horror lowpoly yang mengisahkan mahasiswa muda yang kos di Jakarta mendapat telepon bahwa terjadi hal buruk dengan keluarganya dan harus pulang ke kampung halaman, namun ia tidak hanya menemukan hal mengerikan tetapi harus menyelesaikannya agar kutukan berakhir.',
    p11_desc:'Game 3D Horror yang berkisah tentang seorang mahasiswa yang ingin mencari tempat tinggal murah dengan kisah kelam di baliknya. Tempat itu dahulu dijadikan penjara untuk budak perempuan yang memberontak pada zaman Belanda.',

    detail_link: 'Lihat Detail',

    /* Dropdown labels */
    dd_figma:       'Figma Design',
    dd_open_figma:  'Buka di Figma →',
    dd_proto:       'Prototype',
    dd_open_proto:  'Buka Prototype →',
    dd_framework:   'Framework',
    dd_lang:        'Bahasa Pemrograman',
    dd_db:          'Database',
    dd_method:      'Metode',
    dd_min_req:     'Minimum Requirements',
    dd_rec_req:     'Recommended Requirements',
    dd_os:          'OS',
    dd_cpu:         'Processor',
    dd_gpu:         'Graphics Card',
    dd_ram:         'RAM',
    dd_ssd:         'Storage',
    dd_download:    'Download',
    dd_download_text:'Download Game',

    /* Pendidikan */
    edu_label:    'RIWAYAT PENDIDIKAN',
    edu_title:    'Pernah dan Sedang Belajar pada<br>Program dan Institusi Berikut',
    edu_univ:     'Perguruan Tinggi',
    edu_univ_prog:'Sistem Informasi',
    edu_smk:      'SMK / Sederajat',
    edu_smk_prog: 'Akuntansi Keuangan dan Lembaga',
    edu_smp:      'SMP / Sederajat',
    edu_smp_prog: 'Program Reguler',
    edu_sd:       'SD / Sederajat',
    edu_sd_prog:  'Program Reguler',
    now:          'Sekarang',
    active_badge: 'Aktif',

    /* Pengalaman */
    exp_label:    'PENGALAMAN',
    exp_title:    'Pengalaman Lomba, Organisasi<br>dan Praktik Kerja Lapangan',
    tab_lomba:    'Lomba',
    tab_org:      'Organisasi',
    tab_work:     'Pengalaman Kerja',
    tag_national: 'Lomba Nasional',

    lomba1_name:   'Lomba Game Development I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_result: 'Juara 3 & Juara Favorit',
    lomba1_desc:   'Lomba I/O Fest merupakan lomba nasional tahunan yang diselenggarakan oleh Universitas Tarumanegara. Pada tahun 2024 mengusung tema lokal, sehingga saya membuat game 3D lokal bergenre horror yang bercerita tentang seorang anak yang diculik wewe gombel dan harus menyelamatkan diri, dengan mekanik seperti game Granny (Puzzle Solving dan Escaping).',
    lomba2_name:   'Lomba Game Making IT Fest 2025',
    lomba2_result: 'Juara 1 – Game Terbaik',
    lomba2_desc:   'IT Fest merupakan kompetisi tahunan di bidang teknologi dan inovasi. Pada tahun 2025 dalam kategori Game Making, saya berhasil meraih Juara 1 sekaligus penghargaan Game Terbaik atas game yang dikembangkan selama kompetisi berlangsung.',

    see_more:    'Lihat Selengkapnya',
    see_less:    'Tutup',
    doc_label:   'Dokumentasi',
    tag_org:     'Organisasi Kampus',
    period_label:'Periode:',
    himsi_role:  'Koordinator Desain (Design Co.)',
    himsi_d1:    'Memastikan standar desain sesuai tema/topik acara.',
    himsi_d2:    'Membuat konten feed & story Instagram (Poster, Feed Edukasi, dll).',
    himsi_d3:    'Mengarahkan anggota tim dengan ide dan solusi desain.',
    himsi_d4:    'Memastikan feed tidak mengalami typo dan inkonsistensi desain.',
    tag_pkls:    'Praktik Kerja Lapangan',
    travel:      '(Tour Travel)',
    obaja_role:  'Staff Accounting & Finance',
    obaja_d1:    'Membuat Purchasing Invoice tiket perjalanan.',
    obaja_d2:    'Membuat billing collection / tagihan perusahaan.',
    obaja_d3:    'Mengelola pajak PPh 21 dan 23.',
    obaja_d4:    'Melakukan Filling Document dan proses refund transaksi.',
    tag_creator: 'Content Creator',
    yt_title:    'Gaming Content Creator',
    yt_d1:       'Membuat konten gaming harian (record gameplay dengan OBS).',
    yt_d2:       'Melakukan live streaming dengan OBS.',
    yt_d3:       'Melakukan pengeditan konten video.',
    yt_d4:       'Memastikan konten layak dipublikasikan.',

    /* Kontak */
    contact_label:'KONTAK SAYA',
    contact_title:'Hubungi Saya',
    contact_desc: 'Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau peluang profesional baru. Jangan ragu untuk menghubungi saya!',

    /* Footer */
    footer_contact_me:'Hubungi saya',
    footer_menu:  'Menu',
    footer_cat:   'Kategori Tulisan',
    cat_tech:     'Teknologi',
    cat_life:     'Gaya Hidup',
    copyright:    'All rights reserved.',
  },

  en: {
    /* Navbar */
    nav_home:        'Home',
    nav_about:       'About Me',
    nav_portfolio:   'Portfolio',
    nav_edu:         'Education',
    nav_exp:         'Experience',
    nav_article:     'Articles',
    nav_contact:     'Contact',

    /* Hero */
    hero_badge:        'UI/UX DESIGNER & FULL-STACK DEVELOPER',
    hero_greeting:     'Hello Everyone,',
    hero_iam:          "I'm",
    hero_desc:         'UI/UX Designer and Full-Stack Web Developer. This portfolio showcases my projects and contributions as a developer in technology and design.',
    hero_btn_contact:  'Contact Me',
    hero_btn_portfolio:'View Portfolio',
    photo_label:       'My Photo',
    card1_title:       'UI/UX Design',
    card1_sub:         'Figma & Prototyping',
    card2_title:       'Full-Stack Dev',
    card2_sub:         'Laravel & PHP',

    /* About */
    about_label:     'ABOUT ME',
    about_title:     'UI/UX Design & Full-Stack<br>Web Developer',
    about_bio:       "Hi, I'm <strong>Marcellino Natanael</strong>, a final-year student in Information Systems (semester 7) at Universitas Bunda Mulia Ancol. My focus is on UI/UX design and full-stack web development — from database design to backend and frontend coding, guided by <em>clean code</em> principles using SDLC and Extreme Programming.",
    skill_main_title:'Core Skills',
    skill_main_desc: 'Specializing in interface design using Figma and system development using PHP with the Laravel framework.',
    skill_figma:     'Wireframe & Prototyping',
    skill_other_title:'Other Skills',
    contrib_title:   'Professional Contributions',
    contrib_desc:    'Fully responsible for the entire development cycle of internal company information systems. Contributions include a Decision Support System (SAW), Monitoring Systems & Dashboards, and Self-Service and Company Profile websites.',
    connect_title:   "Let's Connect",
    connect_desc:    'I am always open to collaboration, project discussions, or new professional opportunities.',

    /* Portfolio */
    port_label:  'PROJECTS',
    port_title:  'Some Projects I Have<br>Developed',
    filter_all:  'All',
    mockup_label:'Mockup',

    p1_type: '(Mobile App Design)',
    p1_desc: 'A daily fitness tracking app with advanced AI integration to support an active and healthy lifestyle.',
    p2_type: '(Mobile App Design)',
    p2_desc: 'A waste recycling app that rewards users with points for contributing to a cleaner, more sustainable environment.',
    p3_type: '(Mobile App Design)',
    p3_desc: 'A Ciputra super app integrating the entire home-search, bill payment, and transaction process into a single seamless application.',
    p4_type: '(Mobile App Design)',
    p4_desc: 'A modern padel sports course app combined with a knowledge management system so users can learn from coaches and communities within the app.',
    p5_type: '(Mobile App Design)',
    p5_desc: 'A donation fundraising app for disaster victims to support humanitarian movements between communities.',
    p6_type: '(Web Development)',
    p6_desc: 'An administration app with full CRUD functionality developed for PT Karisma Dinamika Purwa to support company operational processes.',
    p7_type: '(Web Development)',
    p7_desc: 'A web-based decision support system designed to prioritize auction assets at PT Karisma Dinamika Purwa using the Simple Additive Weighting (SAW) algorithm.',
    p8_desc: 'A local 3D horror game about a child kidnapped by the Indonesian ghost legend "Wewe Gombel" who must escape using puzzle-solving and escaping mechanics.',
    p9_desc: "A local 3D horror game featuring a dark pesugihan story that ends tragically for Bayu's family.",
    p10_desc:'A lowpoly 3D horror game about a young student renting in Jakarta who receives news of a family disaster and returns home, only to discover something far more terrifying that must be resolved to end a generational curse.',
    p11_desc:'A 3D horror game about a student searching for cheap accommodation with a dark colonial past — once used as a prison for rebellious female slaves during the Dutch colonial era.',

    detail_link: 'View Details',

    /* Dropdown labels */
    dd_figma:       'Figma Design',
    dd_open_figma:  'Open in Figma →',
    dd_proto:       'Prototype',
    dd_open_proto:  'Open Prototype →',
    dd_framework:   'Framework',
    dd_lang:        'Programming Language',
    dd_db:          'Database',
    dd_method:      'Method',
    dd_min_req:     'Minimum Requirements',
    dd_rec_req:     'Recommended Requirements',
    dd_os:          'OS',
    dd_cpu:         'Processor',
    dd_gpu:         'Graphics Card',
    dd_ram:         'RAM',
    dd_ssd:         'Storage',
    dd_download:    'Download',
    dd_download_text:'Download Game',

    /* Education */
    edu_label:    'EDUCATION',
    edu_title:    'Institutions Where I Have<br>Studied',
    edu_univ:     'University',
    edu_univ_prog:'Information Systems',
    edu_smk:      'Vocational High School',
    edu_smk_prog: 'Accounting & Finance',
    edu_smp:      'Junior High School',
    edu_smp_prog: 'Regular Program',
    edu_sd:       'Elementary School',
    edu_sd_prog:  'Regular Program',
    now:          'Present',
    active_badge: 'Active',

    /* Experience */
    exp_label:    'EXPERIENCE',
    exp_title:    'Competition, Organization<br>& Work Experience',
    tab_lomba:    'Competitions',
    tab_org:      'Organizations',
    tab_work:     'Work Experience',
    tag_national: 'National Competition',

    lomba1_name:   'Game Development Competition I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_result: '3rd Place & Favorite Winner',
    lomba1_desc:   'I/O Fest is an annual national competition organized by Universitas Tarumanegara. In 2024, the theme was local culture, so I built a local 3D horror game about a child kidnapped by "Wewe Gombel" who must escape, with mechanics similar to Granny (Puzzle Solving and Escaping).',
    lomba2_name:   'Game Making Competition IT Fest 2025',
    lomba2_result: '1st Place – Best Game',
    lomba2_desc:   'IT Fest is an annual technology and innovation competition. In 2025, under the Game Making category, I won 1st place and the Best Game award for the game developed throughout the competition.',

    see_more:    'See More',
    see_less:    'Close',
    doc_label:   'Documentation',
    tag_org:     'Campus Organization',
    period_label:'Period:',
    himsi_role:  'Design Coordinator (Design Co.)',
    himsi_d1:    'Ensuring design standards align with the event theme/topic.',
    himsi_d2:    'Creating Instagram feed & story content (Posters, Educational Feed, etc).',
    himsi_d3:    'Guiding team members with design ideas and solutions.',
    himsi_d4:    'Ensuring content is free of typos and design inconsistencies.',
    tag_pkls:    'Internship',
    travel:      '(Tour & Travel)',
    obaja_role:  'Accounting & Finance Staff',
    obaja_d1:    'Creating Purchasing Invoices for travel tickets.',
    obaja_d2:    'Creating billing collections for the company.',
    obaja_d3:    'Managing PPh 21 and 23 taxes.',
    obaja_d4:    'Handling document filing and transaction refunds.',
    tag_creator: 'Content Creator',
    yt_title:    'Gaming Content Creator',
    yt_d1:       'Creating daily gaming content (recording gameplay with OBS).',
    yt_d2:       'Conducting live streaming sessions with OBS.',
    yt_d3:       'Editing video content.',
    yt_d4:       'Ensuring content is suitable for publishing.',

    /* Articles */
    art_label:   'MY WRITINGS',
    art_title:   'Latest Articles & Insights',
    art1_title:  'First Article Title',
    art1_desc:   'A short, informative article about a relevant programming or technology topic.',
    art2_title:  'Second Article Title',
    art2_desc:   'A brief article about technological developments and their influence on the current industry.',
    art3_title:  'Third Article Title',
    art3_desc:   'An in-depth look at good UI/UX design principles and how to create an optimal user experience.',
    art4_title:  'Fourth Article Title',
    art4_desc:   'An article about the productive lifestyle of a developer and tips for staying creative and motivated.',
    read_more:   'Read More →',

    /* Contact */
    contact_label:'CONTACT ME',
    contact_title:'Get In Touch',
    contact_desc: "I'm always open to collaboration, project discussions, or new professional opportunities. Don't hesitate to reach out!",

    /* Footer */
    footer_contact_me:'Contact me',
    footer_menu:  'Menu',
    footer_cat:   'Writing Categories',
    cat_tech:     'Technology',
    cat_life:     'Lifestyle',
    copyright:    'All rights reserved.',
  }
};

/* ══════════════════════════════════════════════════════════════
   2. LANGUAGE SWITCHER
   ══════════════════════════════════════════════════════════════ */
let currentLang = 'id';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.querySelector('.lang-id').classList.toggle('active', lang === 'id');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
  document.querySelectorAll('.exp-toggle').forEach(btn => {
    const isOpen = btn.nextElementSibling && btn.nextElementSibling.classList.contains('open');
    btn.textContent = isOpen ? t.see_less : t.see_more;
  });
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  applyTranslations(currentLang);
});

/* ══════════════════════════════════════════════════════════════
   3. NAVBAR
   ══════════════════════════════════════════════════════════════ */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ══════════════════════════════════════════════════════════════
   4. HAMBURGER MENU
   ══════════════════════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  }
});

/* ══════════════════════════════════════════════════════════════
   5. SMOOTH SCROLL
   ══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 82, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════════════════════════
   6. SCROLL REVEAL
   ══════════════════════════════════════════════════════════════ */
const revealTargets = document.querySelectorAll(
  '.section-title, .section-label, .skill-block, .project-card, ' +
  '.edu-card, .exp-card, .artikel-card, .about-bio > p, .portfolio-filter, ' +
  '.kontak-desc, .hero-badge, .hero-title, .hero-desc, .hero-actions'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...(entry.target.parentElement?.querySelectorAll('.reveal') || [])];
    const idx = siblings.indexOf(entry.target);
    entry.target.style.transitionDelay = `${Math.min(idx * 0.07, 0.4)}s`;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════════════════════════════
   7. PORTFOLIO FILTER
   ══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
      if (show) card.style.animation = 'fadeUp .35s ease both';
    });
  });
});

/* ══════════════════════════════════════════════════════════════
   8. EXPERIENCE TABS
   ══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) target.classList.add('active');
  });
});

/* ══════════════════════════════════════════════════════════════
   9. EXPANDABLE EXPERIENCE CARDS
   ══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling;
    const isOpen = detail.classList.contains('open');
    detail.classList.toggle('open', !isOpen);
    const t = translations[currentLang];
    btn.textContent = isOpen ? t.see_more : t.see_less;
  });
});

/* ══════════════════════════════════════════════════════════════
   10. PROJECT DETAIL DROPDOWN
   ══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.project-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    const isOpen = dropdown.classList.contains('open');

    // Close all other dropdowns first
    document.querySelectorAll('.project-dropdown.open').forEach(d => {
      d.classList.remove('open');
      const prevBtn = d.previousElementSibling;
      if (prevBtn) prevBtn.setAttribute('aria-expanded', 'false');
    });

    // Toggle current
    if (!isOpen) {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Close dropdowns on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.project-dropdown.open').forEach(d => {
    d.classList.remove('open');
    const prevBtn = d.previousElementSibling;
    if (prevBtn) prevBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ══════════════════════════════════════════════════════════════
   11. LIGHTBOX — click any .zoomable image
   ══════════════════════════════════════════════════════════════ */
const overlay    = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn   = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Clear src after transition so old image doesn't flash
  setTimeout(() => { lightboxImg.src = ''; }, 350);
}

// Delegate click on all .zoomable images (including dynamically shown ones)
document.addEventListener('click', (e) => {
  const img = e.target.closest('img.zoomable');
  if (!img) return;
  openLightbox(img.src, img.alt);
});

// Close on overlay background click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLightbox();
});

// Close button
closeBtn.addEventListener('click', closeLightbox);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
});

/* ══════════════════════════════════════════════════════════════
   12. HERO PARALLAX
   ══════════════════════════════════════════════════════════════ */
const heroSec    = document.getElementById('beranda');
const floatCards = document.querySelectorAll('.hero-float-card');

window.addEventListener('mousemove', e => {
  if (!heroSec || heroSec.getBoundingClientRect().bottom < 0) return;
  const cx = e.clientX / window.innerWidth  - 0.5;
  const cy = e.clientY / window.innerHeight - 0.5;
  floatCards.forEach((card, idx) => {
    const f = idx === 0 ? 10 : -8;
    card.style.transform = `translate(${cx * f}px, ${cy * f}px)`;
  });
});

/* ══════════════════════════════════════════════════════════════
   13. COPYRIGHT YEAR
   ══════════════════════════════════════════════════════════════ */
const yearEl = document.getElementById('copyrightYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════════════
   14. INIT
   ══════════════════════════════════════════════════════════════ */
applyTranslations('id');