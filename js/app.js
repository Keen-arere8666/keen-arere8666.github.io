/**
 * Auto Marinikas - Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    vehicles: [...VEHICLES_DATA],
    filteredVehicles: [...VEHICLES_DATA],
    activeCategory: 'all',
    filters: {
      make: 'all',
      fuel: 'all',
      transmission: 'all',
      maxPrice: 100000,
      searchQuery: ''
    },
    sortBy: 'featured'
  };

  // DOM Elements
  const vehiclesGrid = document.getElementById('vehicles-grid');
  const inventoryCount = document.getElementById('inventory-count');
  const filterPills = document.querySelectorAll('.filter-pill');
  const makeFilter = document.getElementById('filter-make');
  const fuelFilter = document.getElementById('filter-fuel');
  const transmissionFilter = document.getElementById('filter-transmission');
  const priceFilter = document.getElementById('filter-price');
  const searchFilter = document.getElementById('filter-search');
  const sortSelect = document.getElementById('sort-by');
  const resetBtn = document.getElementById('btn-reset-filters');

  // Quick Hero Search Elements
  const heroMake = document.getElementById('hero-make');
  const heroBody = document.getElementById('hero-body');
  const heroFuel = document.getElementById('hero-fuel');
  const heroPrice = document.getElementById('hero-price');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  // Modal Elements
  const modalOverlay = document.getElementById('vehicle-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Header Scroll Effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Populate Make Filter Dropdown dynamically
  function populateMakeOptions() {
    if (!makeFilter) return;
    const makes = Array.from(new Set(state.vehicles.map(v => v.make))).sort();
    
    makeFilter.innerHTML = '<option value="all">Όλες οι Μάρκες</option>';
    if (heroMake) heroMake.innerHTML = '<option value="all">Όλες οι Μάρκες</option>';

    makes.forEach(make => {
      const opt = document.createElement('option');
      opt.value = make;
      opt.textContent = make;
      makeFilter.appendChild(opt);

      if (heroMake) {
        const heroOpt = document.createElement('option');
        heroOpt.value = make;
        heroOpt.textContent = make;
        heroMake.appendChild(heroOpt);
      }
    });
  }

  // Render Vehicles to Grid
  function renderVehicles() {
    if (!vehiclesGrid) return;

    if (state.filteredVehicles.length === 0) {
      vehiclesGrid.innerHTML = `
        <div class="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>Δεν βρέθηκαν οχήματα</h3>
          <p>Δοκιμάστε να αλλάξετε τα φίλτρα αναζήτησης ή να κάνετε επαναφορά.</p>
          <button class="btn btn-primary btn-sm" id="btn-empty-reset">Επαναφορά Φίλτρων</button>
        </div>
      `;

      const emptyReset = document.getElementById('btn-empty-reset');
      if (emptyReset) {
        emptyReset.addEventListener('click', resetAllFilters);
      }

      if (inventoryCount) inventoryCount.textContent = '0';
      return;
    }

    if (inventoryCount) {
      inventoryCount.textContent = state.filteredVehicles.length.toString();
    }

    vehiclesGrid.innerHTML = state.filteredVehicles.map(v => {
      let badgeHtml = '';
      if (v.badge) {
        badgeHtml = `<span class="card-badge badge-${v.badgeType}">${v.badge}</span>`;
      }

      return `
        <article class="vehicle-card" data-id="${v.id}">
          <div class="card-image-wrap">
            ${badgeHtml}
            <img src="${v.image}" alt="${v.make} ${v.model}" loading="lazy">
            <div class="card-price-overlay">
              <span class="card-price">€${v.price.toLocaleString('el-GR')}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-make-model">${v.make} ${v.model}</h3>
            <div class="card-installment">από €${v.monthlyPayment}/μήνα</div>

            <div class="card-specs-grid">
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span><strong>${v.year}</strong></span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span><strong>${v.mileage.toLocaleString('el-GR')}</strong> km</span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path>
                  <path d="M7 12V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8"></path>
                </svg>
                <span><strong>${v.fuelEl}</strong></span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span><strong>${v.power}</strong></span>
              </div>
            </div>

            <div class="card-footer">
              <button class="btn btn-outline btn-sm btn-view-details" data-id="${v.id}">
                Λεπτομέρειες
              </button>
              <button class="btn btn-primary btn-sm btn-inquire-quick" data-id="${v.id}">
                Ενδιαφέρον
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openVehicleModal(btn.dataset.id);
      });
    });

    document.querySelectorAll('.btn-inquire-quick').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        quickWhatsAppInquiry(btn.dataset.id);
      });
    });

    document.querySelectorAll('.vehicle-card').forEach(card => {
      card.addEventListener('click', () => {
        openVehicleModal(card.dataset.id);
      });
    });
  }

  // Filter and Sort Engine
  function applyFilters() {
    let result = state.vehicles.filter(v => {
      // Category pill filter
      if (state.activeCategory !== 'all') {
        if (state.activeCategory === 'Motorcycle' && v.body !== 'Motorcycle') return false;
        if (state.activeCategory !== 'Motorcycle' && v.body.toLowerCase() !== state.activeCategory.toLowerCase()) return false;
      }

      // Dropdown Make Filter
      if (state.filters.make !== 'all' && v.make.toLowerCase() !== state.filters.make.toLowerCase()) {
        return false;
      }

      // Dropdown Fuel Filter
      if (state.filters.fuel !== 'all' && v.fuel.toLowerCase() !== state.filters.fuel.toLowerCase()) {
        return false;
      }

      // Dropdown Transmission Filter
      if (state.filters.transmission !== 'all' && v.transmission.toLowerCase() !== state.filters.transmission.toLowerCase()) {
        return false;
      }

      // Price Filter
      if (v.price > state.filters.maxPrice) {
        return false;
      }

      // Search Query
      if (state.filters.searchQuery) {
        const q = state.filters.searchQuery.toLowerCase();
        const matchText = `${v.make} ${v.model} ${v.year} ${v.fuelEl} ${v.description}`.toLowerCase();
        if (!matchText.includes(q)) return false;
      }

      return true;
    });

    // Sorting
    switch (state.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'km-asc':
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        // Featured
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    state.filteredVehicles = result;
    renderVehicles();
  }

  function resetAllFilters() {
    state.activeCategory = 'all';
    state.filters = {
      make: 'all',
      fuel: 'all',
      transmission: 'all',
      maxPrice: 100000,
      searchQuery: ''
    };
    state.sortBy = 'featured';

    filterPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    if (makeFilter) makeFilter.value = 'all';
    if (fuelFilter) fuelFilter.value = 'all';
    if (transmissionFilter) transmissionFilter.value = 'all';
    if (priceFilter) priceFilter.value = '100000';
    if (searchFilter) searchFilter.value = '';
    if (sortSelect) sortSelect.value = 'featured';

    applyFilters();
  }

  // Filter Listeners
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      applyFilters();
    });
  });

  if (makeFilter) makeFilter.addEventListener('change', (e) => { state.filters.make = e.target.value; applyFilters(); });
  if (fuelFilter) fuelFilter.addEventListener('change', (e) => { state.filters.fuel = e.target.value; applyFilters(); });
  if (transmissionFilter) transmissionFilter.addEventListener('change', (e) => { state.filters.transmission = e.target.value; applyFilters(); });
  if (priceFilter) priceFilter.addEventListener('change', (e) => { state.filters.maxPrice = parseFloat(e.target.value) || 100000; applyFilters(); });
  if (searchFilter) searchFilter.addEventListener('input', (e) => { state.filters.searchQuery = e.target.value.trim(); applyFilters(); });
  if (sortSelect) sortSelect.addEventListener('change', (e) => { state.sortBy = e.target.value; applyFilters(); });
  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);

  // Quick Hero Search Button
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      if (heroMake && heroMake.value !== 'all') state.filters.make = heroMake.value;
      if (heroBody && heroBody.value !== 'all') state.activeCategory = heroBody.value;
      if (heroFuel && heroFuel.value !== 'all') state.filters.fuel = heroFuel.value;
      if (heroPrice && heroPrice.value !== 'all') state.filters.maxPrice = parseFloat(heroPrice.value);

      if (makeFilter) makeFilter.value = state.filters.make;
      if (fuelFilter) fuelFilter.value = state.filters.fuel;
      if (priceFilter) priceFilter.value = state.filters.maxPrice.toString();
      filterPills.forEach(p => p.classList.toggle('active', p.dataset.category === state.activeCategory));

      applyFilters();

      const showroom = document.getElementById('showroom');
      if (showroom) {
        showroom.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Open Vehicle Detail Modal
  function openVehicleModal(id) {
    const vehicle = state.vehicles.find(v => v.id === id);
    if (!vehicle || !modalOverlay) return;

    const modalBody = document.getElementById('modal-dynamic-content');
    if (!modalBody) return;

    const mainImgSrc = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery[0] : vehicle.image;
    const thumbsHtml = (vehicle.gallery || [vehicle.image]).map((img, idx) => `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-src="${img}">
        <img src="${img}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join('');

    const featuresHtml = (vehicle.features || []).map(f => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    modalBody.innerHTML = `
      <div class="modal-content-grid">
        <!-- Gallery Left -->
        <div class="modal-gallery-col">
          <div class="modal-gallery-main">
            <img id="modal-main-img" src="${mainImgSrc}" alt="${vehicle.make} ${vehicle.model}">
          </div>
          <div class="modal-gallery-thumbs" id="modal-thumbs">
            ${thumbsHtml}
          </div>
          <p style="margin-top: 1.2rem; font-size: 0.92rem; color: var(--text-muted); line-height: 1.7;">
            ${vehicle.description}
          </p>
        </div>

        <!-- Details Right -->
        <div class="modal-info-col">
          <div class="modal-info-header">
            <h2 class="modal-make-model">${vehicle.make} ${vehicle.model}</h2>
            <div class="modal-price-wrap">
              <span class="modal-price">€${vehicle.price.toLocaleString('el-GR')}</span>
              <span class="modal-installment">ή από €${vehicle.monthlyPayment}/μήνα</span>
            </div>
          </div>

          <div class="modal-trust-tags">
            <span class="trust-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              ${vehicle.verified.inspection}
            </span>
            <span class="trust-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${vehicle.verified.km}
            </span>
            <span class="trust-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ${vehicle.verified.clean}
            </span>
          </div>

          <table class="modal-specs-table">
            <tbody>
              <tr><td>Έτος:</td><td>${vehicle.year}</td></tr>
              <tr><td>Χιλιόμετρα:</td><td>${vehicle.mileage.toLocaleString('el-GR')} km</td></tr>
              <tr><td>Καύσιμο:</td><td>${vehicle.fuelEl}</td></tr>
              <tr><td>Κυβισμός:</td><td>${vehicle.engine}</td></tr>
              <tr><td>Ιπποδύναμη:</td><td>${vehicle.power}</td></tr>
              <tr><td>Κιβώτιο:</td><td>${vehicle.transmissionEl}</td></tr>
              <tr><td>Χρώμα:</td><td>${vehicle.colorEl}</td></tr>
              <tr><td>Κατηγορία:</td><td>${vehicle.bodyEl}</td></tr>
            </tbody>
          </table>

          <h4 style="color: white; font-size: 1rem; margin-bottom: 0.8rem;">Βασικός Εξοπλισμός:</h4>
          <ul class="modal-features-list">
            ${featuresHtml}
          </ul>

          <div class="modal-actions">
            <a href="https://wa.me/306932794575?text=${encodeURIComponent('Γεια σας Automarinikas, ενδιαφέρομαι για το ' + vehicle.make + ' ' + vehicle.model + ' (Έτος ' + vehicle.year + ', €' + vehicle.price.toLocaleString('el-GR') + '). Μπορούμε να κανονίσουμε ένα ραντεβού / test drive;')}" target="_blank" class="btn btn-primary" style="background:#25d366;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Ενδιαφέρον μέσω WhatsApp
            </a>
            <a href="tel:6932794575" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Τηλεφωνική Επικοινωνία (693 279 4575)
            </a>
            <button class="btn btn-outline" id="btn-calc-this-vehicle" data-price="${vehicle.price}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
              Υπολογισμός Δόσεων Χρηματοδότησης
            </button>
          </div>
        </div>
      </div>
    `;

    // Thumbnail click switcher
    const mainImg = document.getElementById('modal-main-img');
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = thumb.dataset.src;
      });
    });

    // Calculate this vehicle button
    const calcBtn = document.getElementById('btn-calc-this-vehicle');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        closeModal();
        if (window.loanCalculator) {
          window.loanCalculator.setVehiclePrice(vehicle.price);
        }
        const calcSection = document.getElementById('financing');
        if (calcSection) {
          calcSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function quickWhatsAppInquiry(id) {
    const vehicle = state.vehicles.find(v => v.id === id);
    if (!vehicle) return;
    const msg = `Γεια σας Automarinikas, ενδιαφέρομαι για το ${vehicle.make} ${vehicle.model} (${vehicle.year}, €${vehicle.price.toLocaleString('el-GR')}). Είναι διαθέσιμο για έλεγχο;`;
    window.open(`https://wa.me/306932794575?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // Handle Appraisal / Trade-in Form Submit
  const appraisalForm = document.getElementById('appraisal-form');
  if (appraisalForm) {
    appraisalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const make = document.getElementById('appraise-make').value;
      const model = document.getElementById('appraise-model').value;
      const year = document.getElementById('appraise-year').value;
      const km = document.getElementById('appraise-km').value;
      const phone = document.getElementById('appraise-phone').value;

      const message = `Αίτημα Εκτίμησης/Ανταλλαγής Οχήματος:%0A- Μάρκα: ${make}%0A- Μοντέλο: ${model}%0A- Έτος: ${year}%0A- Χιλιόμετρα: ${km}%0A- Τηλέφωνο Επικοινωνίας: ${phone}`;
      
      window.open(`https://wa.me/306932794575?text=${message}`, '_blank');
      alert('Ευχαριστούμε! Το αίτημά σας προωθείται στην ομάδα της Automarinikas για άμεση εκτίμηση.');
      appraisalForm.reset();
    });
  }

  // Initial Startup
  populateMakeOptions();
  renderVehicles();
});
