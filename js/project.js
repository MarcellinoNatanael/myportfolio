/* ============================================================
   MARCELLINO NATANAEL – Project Detail Page
   ============================================================ */

(function () {
  const root = document.getElementById('detailRoot');
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const project = (window.PROJECTS || []).find(p => p.id === params.get('id'));

  if (!project) {
    root.innerHTML = `
      <p class="detail-not-found">
        Proyek tidak ditemukan.
        <a href="index.html#portfolio">Kembali ke Portofolio →</a>
      </p>`;
    return;
  }

  function reqLabel(key, t) {
    const map = { OS: t.dd_os, Processor: t.dd_cpu, GPU: t.dd_gpu, RAM: t.dd_ram, Storage: t.dd_ssd };
    return map[key] || key;
  }

  function renderDesignPanel(p, t) {
    return `
      <div class="detail-panel-title">${t.detail_panel_title}</div>
      <div class="dropdown-row"><span class="dropdown-label">${t.detail_device}</span><span class="dropdown-value">${p.deviceType}</span></div>
      <div class="dropdown-row"><span class="dropdown-label">${t.detail_year}</span><span class="dropdown-value">${p.year}</span></div>
      <div class="dropdown-row"><span class="dropdown-label">${t.detail_method}</span><span class="dropdown-value">${p.method}</span></div>
      <div class="detail-cta">
        <a href="${p.figmaLink}" target="_blank" class="dropdown-download-btn">${t.detail_open_figma}</a>
      </div>
    `;
  }

  function renderGamePanel(p, t) {
    return `
      <div class="detail-panel-title">${t.detail_game_panel_title}</div>
      <div class="dropdown-row"><span class="dropdown-label">${t.detail_genre}</span><span class="dropdown-value">${p.genre}</span></div>
      <div class="dropdown-row"><span class="dropdown-label">${t.detail_release_year}</span><span class="dropdown-value">${p.releaseYear}</span></div>
      <div class="detail-panel-title">${t.detail_requirements}</div>
      <div class="sysreq-grid">
        <div class="sysreq-col">
          <div class="sysreq-title">${t.dd_min_req}</div>
          ${Object.entries(p.requirements.min).map(([k, v]) => `<div class="sysreq-row"><span>${reqLabel(k, t)}</span><span>${v}</span></div>`).join('')}
        </div>
        <div class="sysreq-col">
          <div class="sysreq-title">${t.dd_rec_req}</div>
          ${Object.entries(p.requirements.rec).map(([k, v]) => `<div class="sysreq-row"><span>${reqLabel(k, t)}</span><span>${v}</span></div>`).join('')}
        </div>
      </div>
      <div class="detail-cta">
        <a href="${p.downloadLink}" target="_blank" class="dropdown-download-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M5 20h14v-2H5v2zm7-18v12l-5-5-1.41 1.41L12 17l6.41-6.59L17 9l-5 5V2h-2z"/></svg>
          ${t.dd_download_text}
        </a>
      </div>
    `;
  }

  function render() {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';
    const t = translations[lang];
    const isGame = project.type === 'game';
    const yearLabel = isGame ? project.releaseYear : project.year;
    const typeLabel = isGame ? project.genre : project.deviceType;

    document.title = project.name + ' – Marcellino Natanael';

    root.innerHTML = `
      <a class="detail-back" href="index.html#portfolio">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        ${t.detail_back}
      </a>

      <div class="detail-head">
        <div class="detail-badges">
          <span class="project-tag project-tag--neutral">${typeLabel}</span>
          ${project.badge ? `<span class="project-badge-award">${project.badge}</span>` : `<span class="detail-year-badge">${yearLabel}</span>`}
        </div>
        <h1 class="detail-title">${project.name}</h1>
      </div>

      <div class="detail-grid">
        <div class="detail-main">
          <div class="detail-gallery-main">
            <img id="detailMainImg" src="${project.images[0]}" alt="${project.name}" class="zoomable" />
          </div>
          <div class="detail-gallery-thumbs" id="detailThumbs">
            ${project.images.map((src, i) => `
              <div class="detail-thumb${i === 0 ? ' active' : ''}" data-index="${i}">
                <img src="${src}" alt="${project.name} ${i + 1}" />
              </div>`).join('')}
          </div>
          <div class="detail-desc-title">${isGame ? t.detail_game_desc_title : t.detail_desc_title}</div>
          <p class="detail-desc">${project.description[lang]}</p>
        </div>
        <div class="detail-panel">
          ${isGame ? renderGamePanel(project, t) : renderDesignPanel(project, t)}
        </div>
      </div>
    `;

    root.querySelectorAll('.detail-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const i = Number(thumb.dataset.index);
        document.getElementById('detailMainImg').src = project.images[i];
        root.querySelectorAll('.detail-thumb').forEach(x => x.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  render();

  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', render);
})();
