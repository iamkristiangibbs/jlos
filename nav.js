/* nav.js — injects shared nav + footer + utilities for all JLOS pages */
(function () {

  /* ── TOPBAR ── */
  const topbar = `
  <div class="topbar">
    <div class="topbar__inner">
      <div class="topbar__address">
        The <strong>JLOS Secretariat</strong> has moved to a new address: <strong>7th Floor, JLOS TOWERS, Plot 98–102 Katalima Road</strong> &nbsp;|&nbsp; <strong>#JusticeForAll</strong>
      </div>
      <div class="topbar__right">
        <span class="topbar__tag">#JusticeForAll</span>
      </div>
    </div>
  </div>`;

  /* ── NAVIGATION ── */
  const nav = `
  <nav class="nav" id="mainNav">
    <div class="nav__inner">
      <!-- Logo -->
      <a href="index.html" class="nav__logo">
        <img src="logo.png" alt="JLOS Logo" class="nav__logo-img"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="nav__logo-placeholder" style="display:none">
          <div class="nav__logo-jlos">JLOS</div>
        </div>

      </a>

      <!-- Desktop links -->
      <ul class="nav__links">
        <li class="nav__item"><a href="index.html">Home</a></li>

        <li class="nav__item">
          <a href="about-who-we-are.html">About Us <span class="chevron">▾</span></a>
          <ul class="nav__dropdown">
            <li><a href="about-who-we-are.html">Who We Are</a></li>
            <li><a href="about-members.html">Member Institutions</a></li>
            <li><a href="about-team.html">JLOS Secretariat Team</a></li>
            <li><a href="about-management.html">Management Structures</a></li>
            <li><a href="about-partners.html">Development Partners</a></li>
          </ul>
        </li>

        <li class="nav__item">
          <a href="work-criminal.html">Our Work <span class="chevron">▾</span></a>
          <ul class="nav__dropdown">
            <li><a href="work-criminal.html">Criminal Justice</a></li>
            <li><a href="work-civil.html">Civil Justice</a></li>
            <li><a href="work-human-rights.html">Human Rights</a></li>
            <li><a href="work-transitional.html">Transitional Justice</a></li>
            <li><a href="work-accountability.html">Accountability</a></li>
          </ul>
        </li>

        <li class="nav__item"><a href="strategic-plans.html">Strategic Plans</a></li>

        <li class="nav__item">
          <a href="projects.html">Projects <span class="chevron">▾</span></a>
          <ul class="nav__dropdown">
            <li><a href="projects.html#towers">JLOS Towers</a></li>
            <li><a href="projects.html#adc">JLOS-ADC Documentation Project 2025</a></li>
            <li><a href="projects.html#centres">Justice Centres</a></li>
            <li><a href="projects.html#legal-aid">Legal Aid</a></li>
            <li><a href="projects.html#alt-justice">Alternative Justice</a></li>
            <li><a href="projects.html#house">JLOS House</a></li>
            <li><a href="projects.html#ejustice">E-Justice</a></li>
            <li><a href="projects.html#j4c">Justice for Children (J4C)</a></li>
            <li><a href="projects.html#jns">Justice Needs Survey (JNS)</a></li>
            <li><a href="projects.html#sgbv">SGBV Special Sessions</a></li>
            <li><a href="projects.html#supreme">SUPREME Project</a></li>
          </ul>
        </li>

        <li class="nav__item"><a href="annual-reports.html">Annual Reports</a></li>

        <li class="nav__item">
          <a href="media-bulletin.html">Media Centre <span class="chevron">▾</span></a>
          <ul class="nav__dropdown">
            <li><a href="media-bulletin.html">JLOS Bulletin</a></li>
            <li><a href="media-scholarships.html">Scholarships</a></li>
            <li><a href="media-events.html">Conferences &amp; Events</a></li>
            <li><a href="media-gallery.html">Gallery</a></li>
            <li><a href="media-awards.html">JLOS Recognition Awards</a></li>
          </ul>
        </li>

        <li class="nav__item"><a href="contact.html">Contact Us</a></li>
      </ul>

      <!-- Mobile toggle -->
      <button class="nav__toggle" id="navToggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="nav__mobile" id="mobileMenu">
    <button class="nav__mobile-close" id="mobileClose" aria-label="Close">&times;</button>
    <a href="index.html">Home</a>
    <a href="about-who-we-are.html">About Us</a>
    <a href="work-criminal.html">Our Work</a>
    <a href="strategic-plans.html">Strategic Plans</a>
    <a href="projects.html">Projects</a>
    <a href="annual-reports.html">Annual Reports</a>
    <a href="media-bulletin.html">Media Centre</a>
    <a href="contact.html">Contact Us</a>
  </div>`;

  /* ── FOOTER ── */
  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
            <div style="font-family:var(--font-body);font-size:1.1rem;font-weight:800;color:var(--gold-light);letter-spacing:0.08em;padding:6px 10px;border:2px solid var(--gold-light);border-radius:4px;">JLOS</div>
            <div>
              <div style="font-size:0.75rem;font-weight:700;color:var(--white);">JUSTICE, LAW &amp; ORDER SERVICES</div>
              <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);">Governance and Security Programme</div>
            </div>
          </div>
          <p>Bringing together 18 institutions to administer justice, maintain law and order, and promote the observance of human rights.</p>
          <div class="tagline">#JusticeForAll</div>
          <div style="margin-top:1.25rem;font-size:0.8rem;line-height:1.6;color:rgba(255,255,255,0.5);">
            7th Floor, JLOS Towers<br>
            Plot 98–102 Katalima Road<br>
            Kampala, Uganda
          </div>
        </div>
        <div class="footer__col">
          <h5>About Us</h5>
          <ul>
            <li><a href="about-who-we-are.html">Who We Are</a></li>
            <li><a href="about-members.html">Member Institutions</a></li>
            <li><a href="about-team.html">Secretariat Team</a></li>
            <li><a href="about-management.html">Management Structures</a></li>
            <li><a href="about-partners.html">Development Partners</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h5>Our Work</h5>
          <ul>
            <li><a href="work-criminal.html">Criminal Justice</a></li>
            <li><a href="work-civil.html">Civil Justice</a></li>
            <li><a href="work-human-rights.html">Human Rights</a></li>
            <li><a href="work-transitional.html">Transitional Justice</a></li>
            <li><a href="work-accountability.html">Accountability</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h5>Resources</h5>
          <ul>
            <li><a href="strategic-plans.html">Strategic Plans</a></li>
            <li><a href="annual-reports.html">Annual Reports</a></li>
            <li><a href="media-bulletin.html">JLOS Bulletin</a></li>
            <li><a href="media-events.html">Events</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer__divider">
      <div class="footer__bottom">
        <span>© 2025 Justice, Law &amp; Order Services (JLOS) Uganda. All rights reserved.</span>
        <span class="footer__hashtag">#JusticeForAll</span>
      </div>
    </div>
  </footer>
  <button class="back-top" id="backTop" aria-label="Back to top">↑</button>
  <div id="page-curtain"></div>`;

  /* ── Inject ── */
  document.body.insertAdjacentHTML('afterbegin', topbar + nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* ── Active nav ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__item > a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── Mobile menu ── */
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
  });
  document.getElementById('mobileClose').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });

  /* ── Back to top ── */
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Page transitions ── */
  const curtain = document.getElementById('page-curtain');
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      curtain.classList.add('slide-in');
      setTimeout(() => { window.location.href = href; }, 440);
    });
  });
  curtain.classList.add('slide-out');
  setTimeout(() => curtain.classList.remove('slide-out'), 460);

  /* ── Scroll reveal ── */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
})();