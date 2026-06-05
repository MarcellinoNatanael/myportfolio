/* ============================================================
   MARCELLINO NATANAEL – Portfolio JS
   Formal Corporate Edition
   ============================================================ */

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_portfolio:'Portfolio',
    nav_edu:'Pendidikan', nav_exp:'Pengalaman', nav_contact:'Kontak',
    hero_badge:'UI/UX Designer & Full-Stack Developer',
    hero_greeting:'Halo, Perkenalkan',
    hero_iam:'Saya',
    hero_desc:'UI/UX Designer dan Full-Stack Web Developer. Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang teknologi dan desain.',
    hero_btn_contact:'Hubungi Saya', hero_btn_portfolio:'Lihat Portfolio',
    about_label:'TENTANG SAYA',
    about_title:'UI/UX Design & Full-Stack Developer',
    about_bio:'Perkenalkan, saya <strong>Marcellino Natanael</strong>, mahasiswa akhir program studi Sistem Informasi semester 7 Universitas Bunda Mulia Ancol.',
    skill_main_title:'Keahlian Utama',
    skill_main_desc:'Spesialis perancangan antarmuka menggunakan Figma dan pengembangan sistem dengan PHP framework Laravel.',
    contrib_title:'Kontribusi Profesional',
    contrib_desc:'Bertanggung jawab penuh atas seluruh siklus pengembangan sistem informasi perusahaan.',
    port_label:'PROYEK', port_title:'Proyek yang Pernah Saya Kembangkan',
    filter_all:'Semua',
    p1_type:'(Desain Aplikasi Mobile)', p1_desc:'Aplikasi pelacakan olahraga harian dengan integrasi AI yang canggih.',
    p2_type:'(Desain Aplikasi Mobile)', p2_desc:'Aplikasi daur ulang sampah dengan sistem reward poin.',
    p3_type:'(Desain Aplikasi Mobile)', p3_desc:'Super app Ciputra — pencarian rumah, tagihan, dan transaksi dalam satu aplikasi.',
    p4_type:'(Desain Aplikasi Mobile)', p4_desc:'Aplikasi kursus padel dengan sistem manajemen pengetahuan bersama coach dan komunitas.',
    p5_type:'(Desain Aplikasi Mobile)', p5_desc:'Aplikasi penggalangan donasi untuk korban bencana.',
    p6_type:'(Web Development)', p6_desc:'Sistem administrasi CRUD untuk PT Karisma Dinamika Purwa.',
    p7_type:'(Web Development)', p7_desc:'Sistem Pendukung Keputusan dengan algoritma SAW untuk prioritas aset lelang.',
    p8_desc:'Game 3D horror lokal tentang anak yang diculik wewe gombel. Juara 3 & Favorit I/O Fest 2024.',
    p9_desc:'Game 3D Horror lokal dengan cerita pesugihan berakhir tragis. Hology 7.0 – Universitas Brawijaya 2024.',
    p10_desc:'Game 3D Horror lowpoly tentang kutukan keluarga. Juara 1 IT Fest Universitas Paramadina 2025.',
    p11_desc:'Game 3D Horror tentang mahasiswa dan tempat tinggal murah dengan sejarah kelam era kolonial.',
    detail_link:'Lihat Detail',
    dd_figma:'Figma Design', dd_open_figma:'Buka di Figma →',
    dd_proto:'Prototype', dd_open_proto:'Buka Prototype →',
    dd_framework:'Framework', dd_lang:'Bahasa Pemrograman',
    dd_db:'Database', dd_method:'Metode',
    dd_min_req:'Minimum', dd_rec_req:'Recommended',
    dd_os:'OS', dd_cpu:'Processor', dd_gpu:'GPU', dd_ram:'RAM', dd_ssd:'Storage',
    dd_download_text:'Download Game',
    edu_label:'RIWAYAT PENDIDIKAN', edu_title:'Latar Belakang Pendidikan',
    edu_univ:'Perguruan Tinggi', edu_univ_prog:'Sistem Informasi',
    edu_smk:'SMK / Sederajat', edu_smk_prog:'Akuntansi Keuangan dan Lembaga',
    edu_smp:'SMP / Sederajat', edu_smp_prog:'Program Reguler',
    edu_sd:'SD / Sederajat', edu_sd_prog:'Program Reguler',
    exp_label:'PENGALAMAN', exp_title:'Lomba, Organisasi & Pengalaman Kerja',
    tab_lomba:'Lomba', tab_org:'Organisasi', tab_work:'Pengalaman Kerja',
    tag_national:'Lomba Nasional',
    lomba1_name:'Lomba Game Development I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'Lomba nasional tahunan Universitas Tarumanegara. Membuat game 3D horror lokal tentang anak diculik wewe gombel dengan mekanik puzzle solving dan escaping.',
    lomba2_name:'Lomba Game Making IT Fest 2025<br><small>Universitas Paramadina</small>',
    lomba2_desc:'Kompetisi tahunan teknologi dan inovasi. Meraih Juara 1 sekaligus penghargaan Game Terbaik.',
    see_more:'Lihat Selengkapnya', see_less:'Tutup', doc_label:'Dokumentasi',
    tag_org:'Organisasi Kampus',
    contact_label:'KONTAK SAYA', contact_title:'Hubungi Saya',
    contact_desc:'Saya terbuka untuk kolaborasi, diskusi proyek, atau peluang profesional baru.',
    copyright:'All rights reserved.',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_portfolio:'Portfolio',
    nav_edu:'Education', nav_exp:'Experience', nav_contact:'Contact',
    hero_badge:'UI/UX Designer & Full-Stack Developer',
    hero_greeting:'Hello, I am',
    hero_iam:'',
    hero_desc:'UI/UX Designer and Full-Stack Web Developer. This portfolio showcases my projects and contributions in technology and design.',
    hero_btn_contact:'Contact Me', hero_btn_portfolio:'View Portfolio',
    about_label:'ABOUT ME',
    about_title:'UI/UX Design & Full-Stack Developer',
    about_bio:'My name is <strong>Marcellino Natanael</strong>, a final-year Information Systems student (semester 7) at Universitas Bunda Mulia Ancol.',
    skill_main_title:'Core Skills',
    skill_main_desc:'Specializing in UI/UX design with Figma and full-stack development with PHP and Laravel.',
    contrib_title:'Professional Contributions',
    contrib_desc:'Fully responsible for the complete development lifecycle of company information systems.',
    port_label:'PROJECTS', port_title:'Projects I Have Developed',
    filter_all:'All',
    p1_type:'(Mobile App Design)', p1_desc:'Daily fitness tracking app with advanced AI integration.',
    p2_type:'(Mobile App Design)', p2_desc:'Waste recycling app with a points reward system.',
    p3_type:'(Mobile App Design)', p3_desc:'Ciputra super app — home search, bills, and transactions in one place.',
    p4_type:'(Mobile App Design)', p4_desc:'Padel course app with knowledge management system.',
    p5_type:'(Mobile App Design)', p5_desc:'Donation fundraising app for disaster victims.',
    p6_type:'(Web Development)', p6_desc:'Full CRUD administration system for PT Karisma Dinamika Purwa.',
    p7_type:'(Web Development)', p7_desc:'Decision Support System using SAW algorithm for auction asset prioritization.',
    p8_desc:'Local 3D horror game about a child kidnapped by Wewe Gombel. 3rd Place & Favorite at I/O Fest 2024.',
    p9_desc:'Local 3D horror game about a dark pesugihan story. Hology 7.0 – Universitas Brawijaya 2024.',
    p10_desc:'Lowpoly 3D horror game about a family curse. 1st Place at IT Fest Universitas Paramadina 2025.',
    p11_desc:'3D Horror game about a student and cheap accommodation with a dark colonial history.',
    detail_link:'View Details',
    dd_figma:'Figma Design', dd_open_figma:'Open in Figma →',
    dd_proto:'Prototype', dd_open_proto:'Open Prototype →',
    dd_framework:'Framework', dd_lang:'Programming Language',
    dd_db:'Database', dd_method:'Method',
    dd_min_req:'Minimum', dd_rec_req:'Recommended',
    dd_os:'OS', dd_cpu:'Processor', dd_gpu:'GPU', dd_ram:'RAM', dd_ssd:'Storage',
    dd_download_text:'Download Game',
    edu_label:'EDUCATION', edu_title:'Educational Background',
    edu_univ:'University', edu_univ_prog:'Information Systems',
    edu_smk:'Vocational High School', edu_smk_prog:'Accounting & Finance',
    edu_smp:'Junior High School', edu_smp_prog:'Regular Program',
    edu_sd:'Elementary School', edu_sd_prog:'Regular Program',
    exp_label:'EXPERIENCE', exp_title:'Competitions, Organizations & Work',
    tab_lomba:'Competitions', tab_org:'Organizations', tab_work:'Work Experience',
    tag_national:'National Competition',
    lomba1_name:'Game Development Competition I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'Annual national competition organized by Universitas Tarumanegara. Built a local 3D horror game about a child kidnapped by "Wewe Gombel" with puzzle-solving and escaping mechanics.',
    lomba2_name:'Game Making Competition IT Fest 2025<br><small>Universitas Paramadina</small>',
    lomba2_desc:'Annual technology and innovation competition. Won 1st Place and Best Game award.',
    see_more:'See More', see_less:'Close', doc_label:'Documentation',
    tag_org:'Campus Organization',
    contact_label:'CONTACT', contact_title:'Get In Touch',
    contact_desc:'I am open to collaboration, project discussions, or new professional opportunities.',
    copyright:'All rights reserved.',
  }
};

/* ── LANGUAGE ──────────────────────────────────────────────── */
let currentLang = 'id';
window.i18n = translations;

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.documentElement.lang = lang;
  document.querySelector('.lang-id').classList.toggle('active', lang === 'id');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
}
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  applyTranslations(currentLang);
});

/* ── NAVBAR ────────────────────────────────────────────────── */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const scrollProgress = document.getElementById('scrollProgress');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

  // Progress bar
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── HAMBURGER ─────────────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const navLinksEl  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open'); navLinksEl.classList.remove('open');
}));
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open'); navLinksEl.classList.remove('open');
  }
});

/* ── SMOOTH SCROLL ─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});

/* ── PORTFOLIO FILTER ──────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = f === 'all' || card.dataset.category === f;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* ── PROJECT DROPDOWN ──────────────────────────────────────── */
document.querySelectorAll('.project-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dd = btn.nextElementSibling;
    const open = dd.classList.contains('open');
    document.querySelectorAll('.project-dropdown.open').forEach(d => {
      d.classList.remove('open');
      d.previousElementSibling?.setAttribute('aria-expanded','false');
    });
    if (!open) { dd.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.project-dropdown.open').forEach(d => {
    d.classList.remove('open');
    d.previousElementSibling?.setAttribute('aria-expanded','false');
  });
});

/* ── EXP TABS ──────────────────────────────────────────────── */
document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
  });
});

/* ── EXPANDABLE CARDS ──────────────────────────────────────── */
document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling;
    const isOpen = detail.classList.toggle('open');
    const t = translations[currentLang];
    btn.textContent = isOpen ? t.see_less : t.see_more;
  });
});

/* ── LIGHTBOX ──────────────────────────────────────────────── */
const overlay    = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn   = document.getElementById('lightboxClose');

function openLB(src, alt) {
  lightboxImg.src = src; lightboxImg.alt = alt || '';
  overlay.classList.add('active'); document.body.style.overflow = 'hidden';
}
function closeLB() {
  overlay.classList.remove('active'); document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}
document.addEventListener('click', e => { const img = e.target.closest('img.zoomable'); if (img) openLB(img.src, img.alt); });
overlay.addEventListener('click', e => { if (e.target === overlay) closeLB(); });
closeBtn.addEventListener('click', closeLB);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('active')) closeLB(); });

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
document.querySelectorAll('.project-card,.edu-card,.exp-card,.about-card,.section-header').forEach(el => el.classList.add('reveal'));
const revObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 55);
    revObs.unobserve(entry.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── COPYRIGHT YEAR ────────────────────────────────────────── */
const yr = document.getElementById('copyrightYear');
if (yr) yr.textContent = new Date().getFullYear();

/* ── INIT ──────────────────────────────────────────────────── */
applyTranslations('id');