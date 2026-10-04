/* ============================================================
   MARCELLINO NATANAEL – Portfolio JS
   Formal Corporate Edition
   ============================================================ */

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_portfolio:'Portofolio',
    nav_edu:'Pendidikan', nav_exp:'Pengalaman', nav_contact:'Kontak',
    hero_badge:'UI/UX Designer',
    hero_btn_contact:'Hubungi Saya', hero_btn_portfolio:'Lihat Portofolio',
    about_label:'TENTANG SAYA',
    about_bio:'Hi, Saya Marcellino Natanael! Sebagai seorang UI/UX Designer, saya percaya bahwa desain yang baik bukan hanya sekedar visual yang cantik, tapi bagaimana desain tersebut dapat menjawab dan menyelesaikan permasalahan yang dibutuhkan pengguna. Dengan keahlian dibidang riset user, wireframing, hingga prototyping di Figma, saya mampu merancang desain antar muka aplikasi mobile maupun website berdasarkan kebutuhan pengguna yang modern, interaktif dan intuitif.',
    skill_title:'Keahlian',
    port_label:'PORTOFOLIO',
    filter_mobile:'Mobile', filter_website:'Website', filter_game:'Game',
    detail_link:'Lihat Detail',
    detail_back:'Kembali ke Portofolio',
    detail_panel_title:'Detail Project', detail_game_panel_title:'Detail Game',
    detail_device:'Tipe Perangkat', detail_year:'Tahun', detail_desc_title:'Deskripsi Project',
    detail_method:'Metode', detail_figma:'Link Figma', detail_open_figma:'Buka di Figma →',
    detail_genre:'Genre', detail_release_year:'Tahun Rilis', detail_game_desc_title:'Deskripsi Game',
    detail_requirements:'Requirements Game', dd_min_req:'Minimum', dd_rec_req:'Recommended',
    dd_os:'OS', dd_cpu:'Processor', dd_gpu:'GPU', dd_ram:'RAM', dd_ssd:'Storage',
    dd_download_text:'Download di Gamejolt',
    edu_label:'RIWAYAT PENDIDIKAN', edu_title:'Latar Belakang Pendidikan',
    edu_univ:'Perguruan Tinggi', edu_univ_prog:'Sistem Informasi',
    edu_smk:'SMK / Sederajat', edu_smk_prog:'Akuntansi Keuangan dan Lembaga',
    edu_smp:'SMP / Sederajat', edu_smp_prog:'Program Reguler',
    edu_sd:'SD / Sederajat', edu_sd_prog:'Program Reguler',
    exp_label:'PENGALAMAN',
    tab_lomba:'Lomba', tab_org:'Organisasi', tab_work:'Pengalaman Kerja',
    tag_national:'Lomba Nasional',
    lomba1_name:'Lomba Game Development I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'Lomba I/O Fest merupakan lomba nasional tahunan yang diselenggarakan oleh Universitas Tarumanegara. Pada tahun 2024 mengusung tema lokal, membuat game 3D horror tentang anak yang diculik wewe gombel dengan mekanik puzzle solving dan escaping.',
    lomba2_name:'Lomba Game Making IT Fest 2025<br><small>Universitas Paramadina</small>',
    lomba2_desc:'IT Fest merupakan kompetisi tahunan di bidang teknologi dan inovasi. Pada tahun 2025 dalam kategori Game Making, berhasil meraih Juara 1 sekaligus penghargaan Game Terbaik.',
    see_more:'Lihat Selengkapnya', see_less:'Tutup', doc_label:'Dokumentasi',
    tag_org:'Organisasi Kampus',
    copyright:'All rights reserved.',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_portfolio:'Portfolio',
    nav_edu:'Education', nav_exp:'Experience', nav_contact:'Contact',
    hero_badge:'UI/UX Designer',
    hero_btn_contact:'Contact Me', hero_btn_portfolio:'View Portfolio',
    about_label:'ABOUT ME',
    about_bio:'Hi, I am Marcellino Natanael! As a UI/UX Designer, I believe that good design isn\'t just about a pretty visual — it\'s about how that design can answer and solve the problems users actually need solved. With expertise in user research, wireframing, and prototyping in Figma, I\'m able to design interfaces for mobile and website applications based on modern, interactive, and intuitive user needs.',
    skill_title:'Skills',
    port_label:'PORTFOLIO',
    filter_mobile:'Mobile', filter_website:'Website', filter_game:'Game',
    detail_link:'View Details',
    detail_back:'Back to Portfolio',
    detail_panel_title:'Project Details', detail_game_panel_title:'Game Details',
    detail_device:'Device Type', detail_year:'Year', detail_desc_title:'Project Description',
    detail_method:'Method', detail_figma:'Figma Link', detail_open_figma:'Open in Figma →',
    detail_genre:'Genre', detail_release_year:'Release Year', detail_game_desc_title:'Game Description',
    detail_requirements:'Game Requirements', dd_min_req:'Minimum', dd_rec_req:'Recommended',
    dd_os:'OS', dd_cpu:'Processor', dd_gpu:'GPU', dd_ram:'RAM', dd_ssd:'Storage',
    dd_download_text:'Download on Gamejolt',
    edu_label:'EDUCATION', edu_title:'Educational Background',
    edu_univ:'University', edu_univ_prog:'Information Systems',
    edu_smk:'Vocational High School', edu_smk_prog:'Accounting & Finance',
    edu_smp:'Junior High School', edu_smp_prog:'Regular Program',
    edu_sd:'Elementary School', edu_sd_prog:'Regular Program',
    exp_label:'EXPERIENCE',
    tab_lomba:'Competitions', tab_org:'Organizations', tab_work:'Work Experience',
    tag_national:'National Competition',
    lomba1_name:'Game Development Competition I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'Annual national competition organized by Universitas Tarumanegara. Built a local 3D horror game about a child kidnapped by "Wewe Gombel" with puzzle-solving and escaping mechanics.',
    lomba2_name:'Game Making Competition IT Fest 2025<br><small>Universitas Paramadina</small>',
    lomba2_desc:'Annual technology and innovation competition. Won 1st Place and Best Game award.',
    see_more:'See More', see_less:'Close', doc_label:'Documentation',
    tag_org:'Campus Organization',
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
  renderPortfolio();
});

/* ── NAVBAR ────────────────────────────────────────────────── */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const scrollProgress = document.getElementById('scrollProgress');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  if (sections.length > 0) {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  }

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

/* ── PORTFOLIO RENDER + FILTER ─────────────────────────────── */
const portfolioGrid = document.getElementById('portfolioGrid');
let activePortfolioFilter = 'mobile';

function projectBadgeHtml(p) {
  if (p.badge) return `<span class="project-badge-award">${p.badge}</span>`;
  return `<span class="project-year">${p.type === 'game' ? p.releaseYear : p.year}</span>`;
}

function renderPortfolio() {
  if (!portfolioGrid || !window.PROJECTS) return;
  const t = translations[currentLang];
  const catLabel = { mobile: t.filter_mobile, website: t.filter_website, game: t.filter_game };
  const catTagClass = { mobile: '', website: ' project-tag--web', game: ' project-tag--game' };

  portfolioGrid.innerHTML = window.PROJECTS
    .filter(p => p.category === activePortfolioFilter)
    .map(p => `
      <a class="project-card" href="project.html?id=${p.id}">
        <div class="project-mockups">
          ${p.images.slice(0, 3).map((src, i) => `<img src="${src}" alt="${p.name} ${i + 1}" class="mockup-img" />`).join('')}
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-tag${catTagClass[p.category]}">${catLabel[p.category]}</span>
            ${projectBadgeHtml(p)}
          </div>
          <h3>${p.name}</h3>
          <p>${p.description[currentLang]}</p>
          <span class="project-detail-link">
            ${t.detail_link}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
      </a>
    `).join('');

  portfolioGrid.querySelectorAll('.project-card').forEach(el => {
    el.classList.add('reveal');
    revObs.observe(el);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activePortfolioFilter = btn.dataset.filter;
    renderPortfolio();
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
document.querySelectorAll('.edu-card,.exp-card,.section-header').forEach(el => el.classList.add('reveal'));
const revObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 55);
    revObs.unobserve(entry.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

renderPortfolio();

/* ── ABOUT PHOTO UPLOAD ────────────────────────────────────── */
const aboutPhotoBox   = document.getElementById('aboutPhotoBox');
const aboutPhotoImg   = document.getElementById('aboutPhotoImg');
const aboutPhotoInput = document.getElementById('aboutPhotoInput');
const aboutPhotoChange = document.getElementById('aboutPhotoChange');

function setAboutPhoto(dataUrl) {
  aboutPhotoImg.src = dataUrl;
  aboutPhotoBox.classList.add('has-photo');
  aboutPhotoChange.style.display = 'inline-flex';
}

if (aboutPhotoInput) {
  const savedPhoto = localStorage.getItem('aboutPhoto');
  if (savedPhoto) setAboutPhoto(savedPhoto);

  aboutPhotoInput.addEventListener('change', () => {
    const file = aboutPhotoInput.files && aboutPhotoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAboutPhoto(reader.result);
      try { localStorage.setItem('aboutPhoto', reader.result); } catch (e) {}
    };
    reader.readAsDataURL(file);
  });
}

/* ── COPYRIGHT YEAR ────────────────────────────────────────── */
const yr = document.getElementById('copyrightYear');
if (yr) yr.textContent = new Date().getFullYear();

/* ── INIT ──────────────────────────────────────────────────── */
applyTranslations('id');