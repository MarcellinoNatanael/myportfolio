/* ============================================================
   MARCELLINO NATANAEL - Portfolio JS
   ============================================================ */

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_portfolio:'Portofolio',
    nav_edu:'Pendidikan', nav_exp:'Pengalaman', nav_cert:'Sertifikat', nav_contact:'Kontak',
    hero_hello:'Hi, Saya',
    hero_btn_contact:'Hubungi Saya', hero_btn_portfolio:'Lihat Portofolio', hero_btn_cv:'Unduh CV',
    hero_exp_title:'Pengalaman<br>Profesional',
    stat_projects:'Proyek Selesai', stat_years:'Tahun Pengalaman', stat_awards:'Penghargaan Lomba',

    about_label:'Tentang Saya',
    about_bio:'Hi, Saya Marcellino Natanael, seorang UI/UX Designer dan Sistem Analis dengan pengalaman 1-2 tahun pada bidang terkait. Saya percaya desain yang bagus tidak menjamin keberhasilan suatu produk jika tidak diimbangi dengan analisis sistem yang matang, pemahaman mendalam tentang kebutuhan pengguna, serta kemampuan menerjemahkan proses bisnis yang kompleks menjadi sebuah solusi digital yang intuitif, efisien, dan ramah pengguna. Dengan menjembatani aspek visual dan logika sistem, saya berdedikasi untuk menciptakan produk yang tidak hanya bernilai estetika tinggi, tetapi juga memperhatikan dan memastikan fungsionalitas yang berdampak bagi kebutuhan pengguna.',
    skill_title:'Keahlian',

    port_label:'Portofolio',
    filter_mobile:'Mobile', filter_website:'Website', filter_game:'Game',
    cat_mobile:'Mobile Design', cat_website:'Web Design', cat_game:'Game Development',
    competition:'Proyek Lomba',
    open_figma:'Open Design in Figma', open_gamejolt:'Open in Gamejolt',
    link_soon:'Link segera tersedia',

    edu_label:'Riwayat Pendidikan', edu_gpa:'IPK', edu_avg:'Nilai Rata-rata',
    cert_label:'Lisensi &amp; Sertifikasi', cert_issued:'Diterbitkan', cert_expires:'Berlaku hingga',
    cert_id:'ID Kredensial', cert_show:'Tampilkan kredensial',
    edu_univ:'S1 / Perguruan Tinggi', edu_univ_prog:'Sistem Informasi',
    edu_univ_desc:'Selama perkuliahan, fokus utama saya adalah mendalami bidang UI/UX Design dan System Analyst. Saya mengikuti beberapa perlombaan seperti The Ace 2025 dan Sitefest 4.0, serta sudah membuat lebih dari 10 proyek UI/UX, baik untuk website maupun mobile user interface.',
    edu_univ_more:'Selain UI/UX Design, saya juga mempelajari bagaimana sebuah bisnis atau organisasi dapat terintegrasi dengan baik bersama sistem informasi sehingga mampu mendukung pengambilan keputusan yang strategis. Saya juga belajar merancang database dan arsitektur sistem mulai dari backend hingga frontend. Di tengah majunya teknologi Artificial Intelligence (AI) yang membantu developer membuat program yang lebih efisien dan terstruktur, saya memandang AI bukan sebagai pengganti, melainkan alat bantu yang mempersingkat proses pengembangan sistem.',
    edu_smk:'Sekolah Menengah Kejuruan', edu_smk_prog:'Akuntansi dan Keuangan Lembaga',
    edu_smk_desc:'Menyusun jurnal umum dan khusus, posting buku besar, menyusun neraca saldo dan jurnal penyesuaian, menyusun laporan keuangan (Laporan Laba Rugi, Laporan Perubahan Modal, Neraca, dan Laporan Arus Kas), rekonsiliasi bank, PPh Pasal 21, PPh Pasal 23, perhitungan PPN, dan pengisian SPT. Memperoleh Sertifikasi Nasional BNSP Akuntansi dan Keuangan.',
    edu_smk_more:'Bagi saya, akuntansi bukan sekadar menghitung angka. Di dalamnya terdapat proses penyelarasan agar seluruh laporan keuangan tetap sesuai, akurat, dan relevan untuk pengambilan keputusan. Saya memilih jurusan Akuntansi karena di sini saya dituntut untuk bekerja dengan teliti namun tetap cepat, sebuah tantangan yang sangat saya nikmati. Ketertarikan saya pada dunia pembukuan dan penjurnalan membuat jurusan ini sangat relevan dengan minat pribadi saya.<br><br>SMK Dhammasavana tidak hanya menekankan kecerdasan akademik, tetapi juga menanamkan sikap profesionalisme dan integritas moral yang tinggi. Di sana saya belajar bahwa menjadi seorang akuntan bukan hanya soal teknis di atas kertas, tetapi juga tentang kejujuran dan disiplin dalam setiap detail pekerjaan.',

    exp_label:'Pengalaman',
    tab_lomba:'Lomba', tab_org:'Organisasi', tab_work:'Pengalaman Kerja',
    tag_national:'Lomba Nasional', tag_uiux:'Lomba UI/UX Design',
    award_3rd:'🏆 Juara 3', award_fav:'⭐ Juara Favorit', award_1st:'🥇 Juara 1 - Game Terbaik',
    lomba1_name:'Lomba Game Development I/O Fest 2024<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'I/O Fest merupakan lomba nasional tahunan yang diselenggarakan oleh Universitas Tarumanegara. Pada tahun 2024 lomba ini mengusung tema lokal, dan saya bersama tim membuat game 3D horror tentang anak yang diculik Wewe Gombel dengan mekanik puzzle solving dan escaping.',
    lomba2_name:'Lomba Game Making IT Fest 2025<br><small>Universitas Paramadina</small>',
    lomba2_desc:'IT Fest merupakan kompetisi tahunan di bidang teknologi dan inovasi. Pada tahun 2025 dalam kategori Game Making, tim kami berhasil meraih Juara 1 sekaligus penghargaan Game Terbaik.',
    lomba3_name:'Lomba Game Development Hology 7.0<br><small>Universitas Brawijaya</small>',
    lomba3_desc:'Hology merupakan kompetisi teknologi tingkat nasional yang diselenggarakan oleh Universitas Brawijaya. Pada tahun 2024 dalam kategori Game Development, saya bersama tim membuat game 3D horror lokal berjudul Jurig Jiwa Nu Leungit yang bercerita tentang pesugihan sebuah keluarga yang berujung pada kutukan.',
    lomba4_desc:'Kompetisi UI/UX Design yang menantang peserta untuk merancang solusi digital berdasarkan permasalahan nyata. Saya merancang desain antarmuka aplikasi mobile melalui tahapan riset pengguna, perancangan user flow, wireframing, hingga prototyping di Figma.',
    lomba5_desc:'Kompetisi UI/UX Design yang menguji kemampuan peserta dalam merancang pengalaman pengguna yang intuitif. Saya menerapkan pendekatan Design Thinking dan User-Centered Design untuk menghasilkan desain antarmuka aplikasi yang relevan dengan kebutuhan pengguna.',
    see_more:'Lihat Selengkapnya', see_less:'Tutup', doc_label:'Dokumentasi',
    tag_org:'Organisasi Kampus', period:'Periode',
    org1_role:'Koordinator Desain (Design Co.)',
    org1_duties:'<li>Memastikan standar desain sesuai tema/topik acara.</li><li>Membuat konten feed &amp; story Instagram (poster, feed edukasi, dll).</li><li>Mengarahkan anggota tim dengan ide dan solusi desain.</li><li>Memastikan feed tidak mengalami typo dan inkonsistensi desain.</li>',
    tag_internship:'Praktik Kerja Lapangan',
    work1_period:'01 Des 2022 - 01 Mar 2023',
    work1_duties:'<li>Membuat Purchasing Invoice tiket perjalanan.</li><li>Membuat billing collection / tagihan perusahaan.</li><li>Mengelola pajak PPh 21 dan 23.</li><li>Melakukan filling document dan proses refund transaksi.</li>',
    work2_period:'14 Sep 2019 - Sekarang',
    work2_duties:'<li>Membuat konten gaming harian (record gameplay dengan OBS).</li><li>Melakukan live streaming dengan OBS.</li><li>Melakukan pengeditan konten video.</li><li>Memastikan konten layak dipublikasikan.</li>',

    contact_label:'Kontak Saya', contact_title:'Mari Berkolaborasi Bersama',
    contact_desc:'Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau peluang profesional baru. Jangan ragu untuk menghubungi saya!',
    copyright:'Hak cipta dilindungi.',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_portfolio:'Portfolio',
    nav_edu:'Education', nav_exp:'Experience', nav_cert:'Certificates', nav_contact:'Contact',
    hero_hello:'Hi, I am',
    hero_btn_contact:'Contact Me', hero_btn_portfolio:'View Portfolio', hero_btn_cv:'Download CV',
    hero_exp_title:'Professional<br>Experience',
    stat_projects:'Projects Done', stat_years:'Years of Experience', stat_awards:'Competition Awards',

    about_label:'About Me',
    about_bio:'Hi, I am Marcellino Natanael, a UI/UX Designer and System Analyst with 1-2 years of experience in the field. I believe great design alone does not guarantee a product\'s success unless it is balanced with thorough system analysis, a deep understanding of user needs, and the ability to translate complex business processes into intuitive, efficient and user-friendly digital solutions. By bridging visual design and system logic, I am dedicated to creating products that are not only aesthetically strong, but also ensure meaningful functionality that truly serves user needs.',
    skill_title:'Skills',

    port_label:'Portfolio',
    filter_mobile:'Mobile', filter_website:'Website', filter_game:'Game',
    cat_mobile:'Mobile Design', cat_website:'Web Design', cat_game:'Game Development',
    competition:'Competition Project',
    open_figma:'Open Design in Figma', open_gamejolt:'Open in Gamejolt',
    link_soon:'Link coming soon',

    edu_label:'Education', edu_gpa:'GPA', edu_avg:'Average Score',
    cert_label:'Licenses &amp; Certifications', cert_issued:'Issued', cert_expires:'Expires',
    cert_id:'Credential ID', cert_show:'Show credential',
    edu_univ:'Bachelor\'s Degree', edu_univ_prog:'Information Systems',
    edu_univ_desc:'During my studies, my main focus has been UI/UX Design and System Analysis. I have joined several competitions such as The Ace 2025 and Sitefest 4.0, and have built more than 10 UI/UX projects for both website and mobile user interfaces.',
    edu_univ_more:'Beyond UI/UX Design, I study how a business or organization can integrate well with information systems to support strategic decision making. I also learn to design databases and system architecture from backend to frontend. As Artificial Intelligence (AI) helps developers build more efficient and structured programs, I see AI not as a replacement, but as a tool that speeds up system development.',
    edu_smk:'Vocational High School', edu_smk_prog:'Institutional Accounting and Finance',
    edu_smk_desc:'Prepared general and special journals, ledger postings, trial balances and adjusting entries, financial statements (Income Statement, Statement of Changes in Equity, Balance Sheet and Cash Flow Statement), bank reconciliations, Income Tax Article 21 and 23, VAT calculation and tax return (SPT) filing. Earned the BNSP National Certification in Accounting and Finance.',
    edu_smk_more:'To me, accounting is more than counting numbers. It is a process of alignment that keeps every financial report consistent, accurate and relevant for decision making. I chose Accounting because it demands working carefully yet quickly, a challenge I truly enjoy. My interest in bookkeeping and journaling made this major a natural fit for me.<br><br>SMK Dhammasavana emphasizes not only academic excellence but also professionalism and strong moral integrity. There I learned that being an accountant is not just about technical work on paper, but also about honesty and discipline in every detail.',

    exp_label:'Experience',
    tab_lomba:'Competitions', tab_org:'Organizations', tab_work:'Work Experience',
    tag_national:'National Competition', tag_uiux:'UI/UX Design Competition',
    award_3rd:'🏆 3rd Place', award_fav:'⭐ Favorite Award', award_1st:'🥇 1st Place - Best Game',
    lomba1_name:'I/O Fest 2024 Game Development Competition<br><small>Universitas Tarumanegara</small>',
    lomba1_desc:'I/O Fest is an annual national competition organized by Universitas Tarumanegara. In 2024 it carried a local theme, and my team built a 3D horror game about a child kidnapped by Wewe Gombel with puzzle solving and escaping mechanics.',
    lomba2_name:'IT Fest 2025 Game Making Competition<br><small>Universitas Paramadina</small>',
    lomba2_desc:'IT Fest is an annual technology and innovation competition. In the 2025 Game Making category, our team won 1st Place along with the Best Game award.',
    lomba3_name:'Hology 7.0 Game Development Competition<br><small>Universitas Brawijaya</small>',
    lomba3_desc:'Hology is a national technology competition organized by Universitas Brawijaya. In the 2024 Game Development category, my team built a local 3D horror game called Jurig Jiwa Nu Leungit, about a family\'s pesugihan ritual that ends in a curse.',
    lomba4_desc:'A UI/UX Design competition that challenges participants to design digital solutions for real problems. I designed a mobile app interface through user research, user flow design, wireframing and prototyping in Figma.',
    lomba5_desc:'A UI/UX Design competition that tests participants\' ability to design intuitive user experiences. I applied Design Thinking and User-Centered Design to create an app interface that fits real user needs.',
    see_more:'See More', see_less:'Close', doc_label:'Documentation',
    tag_org:'Campus Organization', period:'Period',
    org1_role:'Design Coordinator (Design Co.)',
    org1_duties:'<li>Ensured design standards matched each event theme or topic.</li><li>Created Instagram feed &amp; story content (posters, educational feeds, etc.).</li><li>Guided team members with design ideas and solutions.</li><li>Made sure feeds were free of typos and design inconsistencies.</li>',
    tag_internship:'Internship',
    work1_period:'01 Dec 2022 - 01 Mar 2023',
    work1_duties:'<li>Created purchasing invoices for travel tickets.</li><li>Prepared billing collections / company invoices.</li><li>Managed Income Tax Article 21 and 23.</li><li>Handled document filing and transaction refunds.</li>',
    work2_period:'14 Sep 2019 - Present',
    work2_duties:'<li>Produced daily gaming content (gameplay recording with OBS).</li><li>Hosted live streams with OBS.</li><li>Edited video content.</li><li>Ensured content was ready for publishing.</li>',

    contact_label:'Contact Me', contact_title:'Let\'s Collaborate Together',
    contact_desc:'I am always open to collaborations, project discussions or new professional opportunities. Feel free to reach out!',
    copyright:'All rights reserved.',
  }
};

/* ── STORAGE (safe) ────────────────────────────────────────── */
function store(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch (e) { return null; }
}

/* ── LANGUAGE ──────────────────────────────────────────────── */
let currentLang = store('lang') === 'en' ? 'en' : 'id';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  // Toggle buttons keep their open/closed label
  document.querySelectorAll('.text-toggle').forEach(btn => {
    btn.textContent = btn.nextElementSibling.classList.contains('open') ? t.see_less : t.see_more;
  });
  document.documentElement.lang = lang;
  document.querySelector('.lang-id').classList.toggle('active', lang === 'id');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
}
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  store('lang', currentLang);
  applyTranslations(currentLang);
  renderPortfolio();
  renderCertificates();
});

/* ── THEME ─────────────────────────────────────────────────── */
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  store('theme', next);
});

/* ── NAVBAR ────────────────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scrollProgress');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── HAMBURGER ─────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
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
const CARD_COLORS = ['teal', 'peach', 'lav', 'mint', 'yellow'];
let activePortfolioFilter = 'mobile';

function renderPortfolio() {
  if (!portfolioGrid || !window.PROJECTS) return;
  const t = translations[currentLang];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  portfolioGrid.innerHTML = window.PROJECTS
    .filter(p => p.category === activePortfolioFilter)
    .map((p, i) => {
      const label = p.category === 'game' ? t.open_gamejolt : t.open_figma;
      const name  = currentLang === 'en' && p.nameEn ? p.nameEn : p.name;
      const link  = p.link
        ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${label} ${arrow}</a>`
        : `<span class="project-link is-disabled" title="${t.link_soon}">${label} ${arrow}</span>`;
      const imgs  = (p.images || []).slice(0, 2);
      const media = imgs.length
        ? imgs.map((src, n) => `<img src="${src}" alt="${p.name} ${n + 1}" class="zoomable" loading="lazy" />`).join('')
        : `<span class="project-media-empty">${p.name.charAt(0)}</span>`;
      return `
        <article class="project-card project-card--${CARD_COLORS[i % CARD_COLORS.length]}">
          <div class="project-media project-media--${imgs.length || 'empty'}">${media}</div>
          <div class="project-meta">
            <span class="project-tag">${t['cat_' + p.category]}</span>
            <span class="project-year">${p.year}</span>
          </div>
          ${p.competition ? `<span class="project-badge">🏆 ${t.competition}</span>` : ''}
          <h3>${name}</h3>
          <p>${p.description[currentLang]}</p>
          ${link}
        </article>`;
    }).join('');

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

/* ── CERTIFICATES ──────────────────────────────────────────── */
const certSection = document.getElementById('sertifikat');
const certList    = document.getElementById('certList');

function renderCertificates() {
  const certs = window.CERTIFICATES || [];
  const show  = certs.length > 0;
  if (certSection) certSection.hidden = !show;
  document.querySelectorAll('.nav-link--cert').forEach(l => { l.hidden = !show; });
  if (!certList || !show) return;
  const t = translations[currentLang];

  certList.innerHTML = certs.map((c, i) => {
    const logo = c.logo
      ? `<img src="${c.logo}" alt="${c.issuer}" />`
      : `<span>${c.issuer.charAt(0)}</span>`;
    const dates = `${t.cert_issued} ${c.issued[currentLang]}` +
      (c.expires ? ` · ${t.cert_expires} ${c.expires[currentLang]}` : '');
    return `
      <article class="cert-card">
        <div class="cert-logo cert-logo--${CARD_COLORS[i % CARD_COLORS.length]}">${logo}</div>
        <div class="cert-body">
          <h3>${c.name}</h3>
          <p class="cert-issuer">${c.issuer}</p>
          <p class="cert-meta">${dates}</p>
          ${c.credentialId ? `<p class="cert-meta">${t.cert_id}: ${c.credentialId}</p>` : ''}
          ${c.url ? `<a class="cert-link" href="${c.url}" target="_blank" rel="noopener">${t.cert_show}
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg></a>` : ''}
        </div>
      </article>`;
  }).join('');
}

/* ── EXP TABS ──────────────────────────────────────────────── */
document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
  });
});

/* ── EXPANDABLE (education + experience) ───────────────────── */
document.querySelectorAll('.text-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.nextElementSibling.classList.toggle('open');
    const t = translations[currentLang];
    btn.textContent = isOpen ? t.see_less : t.see_more;
  });
});

/* ── LIGHTBOX ──────────────────────────────────────────────── */
const overlay     = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn    = document.getElementById('lightboxClose');

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
document.querySelectorAll('.edu-card,.exp-card,.section-header,.about-card,.stat-card').forEach(el => el.classList.add('reveal'));
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
applyTranslations(currentLang);
renderPortfolio();
renderCertificates();
