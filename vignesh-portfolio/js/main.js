/* ============ DATA ============ */
const NAV = [
  {n:'01', label:'Home', path:'/'},
  {n:'02', label:'About', path:'/about'},
  {n:'03', label:'Skills', path:'/skills'},
  {n:'04', label:'Projects', path:'/projects'},
  {n:'05', label:'Resume', path:'/resume'},
  {n:'06', label:'Contact', path:'/contact'},
];

const PROFILE = {
  name:'Vignesh S',
  email:'vigneshsivakumar1708@gmail.com',
  linkedin:'https://www.linkedin.com/in/vignesh-sivakumar-171aa3394',
  github:'https://github.com/vigneshsivakumar17',
  instagram:'https://instagram.com/vikky._.sivakumar',
  // No YouTube / Twitter provided — left out intentionally.
};

const RESUME_DATA_URI = "assets/resume/Vignesh_S_Resume.pdf";

/* ============ ICONS ============ */
const ICONS = {
  linkedin:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8.25h4.5V23H.24V8.25zM8.25 8.25h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23h-4.5V8.25z" fill="currentColor"/></svg>`,
  github:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" fill="currentColor"/></svg>`,
  instagram:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" fill="currentColor"/><path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="currentColor"/></svg>`,
  mail:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13z" stroke="currentColor" stroke-width="1.4"/><path d="M3 6l9 6.5L21 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrow:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5v11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/* ============ NAV RENDER ============ */
function renderNav(){
  const links = document.getElementById('navLinks');
  links.innerHTML = NAV.map(item=>`<a data-route="${item.path}"><span class="num">${item.n}</span>${item.label}</a>`).join('');
  const mob = document.getElementById('mobileMenu');
  mob.innerHTML = NAV.map(item=>`<a data-route="${item.path}"><span class="num">${item.n}</span>${item.label}</a>`).join('');
}
renderNav();

function setActive(path){
  document.querySelectorAll('[data-route]').forEach(el=>{
    el.classList.toggle('active', el.getAttribute('data-route')===path);
  });
}

/* ============ MOBILE MENU TOGGLE ============ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('open');
});

/* ============ PAGE TEMPLATES ============ */
function pageHome(){
  return `
  <section class="hero">
    <div class="atom-animation" aria-hidden="true">
  <div class="atom-core"></div>

  <div class="atom-orbit orbit-1">
    <span class="electron"></span>
  </div>

  <div class="atom-orbit orbit-2">
    <span class="electron"></span>
  </div>

  <div class="atom-orbit orbit-3">
    <span class="electron"></span>
  </div>
</div>
    <div class="hero-tag"> <span class="pulse"></span> OPEN TO INTERNSHIPS & JOB OPPORTUNITIES </div>
   <h1> Hi, I'm <span class="grad">Vignesh S</span> <br> AI & Data Science<br> <span class="grad">Student & Aspiring Developer.</span> </h1>
   <p class="lead"> I'm a B.Tech Artificial Intelligence & Data Science student at Sri Sairam Engineering College, passionate about Machine Learning, Data Science, and software development. I'm currently looking for internship and entry-level opportunities where I can learn, contribute, and grow with a professional team. </p>
    <div class="hero-cta">
      <button class="btn-primary" data-route="/projects">View Projects <span style="margin-left:6px;">${ICONS.arrow}</span></button>
      <button class="btn-ghost" data-route="/resume">View Resume</button>
    </div>
    <div class="scroll-hint"><span class="line"></span>SCROLL</div>
  </section>
  <div class="stats-row">
    <div class="stat"><div class="num">8.43</div><div class="label">CGPA — AI &amp; DATA SCIENCE</div></div>
    <div class="stat"><div class="num">4</div><div class="label">LANGUAGES — PYTHON · C · SQL · JAVA</div></div>
    <div class="stat"><div class="num">3rd year</div><div class="label">B.TECH, SRI SAIRAM ENGINEERING COLLEGE</div></div>
  </div>
  `;
}

function pageAbout(){
  return `
  <div class="page">
    <div class="eyebrow">02 — ABOUT</div>
    <h2 class="section-title">A quick learner drawn to how machines learn.</h2>
    <p class="section-sub">The story so far — education, focus areas, and what I'm looking for next.</p>
    <div class="about-grid">
      <div class="about-copy">
        <p><strong>${PROFILE.name}</strong> is a B.Tech student in Artificial Intelligence &amp; Data Science at Sri Sairam Engineering College, currently maintaining a CGPA of <strong>8.2</strong>. Analytical thinking and steady problem-solving are the habits behind the work — the kind that come from debugging code until it clicks and re-reading a dataset until the pattern shows itself.</p>
        <p>The pull toward AI started with curiosity about how systems could understand language, images and behaviour — and turned into hands-on work with <strong>machine learning, deep learning, computer vision and data analysis</strong>. Comfortable across <strong>Python, C, SQL and Java</strong>, and building fluency with the everyday tools of the trade: Jupyter Notebook, Git and VS Code.</p>
        <p>Right now, actively seeking an <strong>internship in AI and Data Science</strong> — a chance to move from coursework and personal projects into real-world problems, and to contribute to something that matters while learning from people further down the road.</p>
        <div class="chips">
          <span class="chip">Machine Learning</span>
          <span class="chip">Deep Learning</span>
          <span class="chip">Computer Vision</span>
          <span class="chip">Data Analysis</span>
          <span class="chip">NLP</span>
        </div>
      </div>
      <div class="card">
        <h3 style="font-size:18px; margin-bottom:20px;">Education</h3>
        <div class="timeline">
          <div class="tl-item">
            <div class="yr">2024 —<br>Present</div>
            <div><h4>B.Tech, AI &amp; Data Science</h4><p>Sri Sairam Engineering College · 2nd Year, 4th Semester · CGPA 8.2</p></div>
          </div>
          <div class="tl-item">
            <div class="yr">2024</div>
            <div><h4>Higher Secondary Certificate</h4><p>Scored 87.67%</p></div>
          </div>
          <div class="tl-item">
            <div class="yr">2022</div>
            <div><h4>SSLC</h4><p>Scored 81.00%</p></div>
          </div>
        </div>
        <h3 style="font-size:18px; margin:28px 0 12px;">Languages</h3>
        <div class="chips"><span class="chip">English</span><span class="chip">Tamil</span></div>
      </div>
    </div>
  </div>
  `;
}

function pageSkills(){
  const groups = [
    {idx:'01', title:'Programming', items:['Python','C','SQL','Java']},
    {idx:'02', title:'AI & Machine Learning', items:['Machine Learning','Deep Learning','Computer Vision','Natural Language Processing']},
    {idx:'03', title:'Data Science', items:['Data Analysis','Exploratory Data Analysis','Model Evaluation']},
    {idx:'04', title:'Web Development', items:['HTML & CSS','Git & GitHub','Basics — growing this area']},
    {idx:'05', title:'Tools & Technologies', items:['Jupyter Notebook','Git','VS Code']},
  ];
  return `
  <div class="page">
    <div class="eyebrow">03 — SKILLS</div>
    <h2 class="section-title">What I build with.</h2>
    <p class="section-sub">Core languages, the AI/ML stack I'm developing, and the tools I reach for daily.</p>
    <div class="skills-grid">
      ${groups.map(g=>`
        <div class="skill-card">
          <span class="idx mono">${g.idx}</span>
          <h3>${g.title}</h3>
          <ul class="skill-list">${g.items.map(i=>`<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  </div>
  `;
}

function pageProjects(){
  const projects = [
    {
      placeholder:false, glyph:'SB', title:'SevaBot — AI Government Scheme Chatbot',
      desc:'An AI chatbot that recommends relevant government welfare schemes to users using natural language processing, with voice input and regional language support for accessibility.',
      tech:['Python','NLP','Voice Interface'],
      github:'https://github.com/vigneshsivakumar17/sevaabot', demo:'#'
    },
    {
       placeholder:false,
    glyph:'WL',
    title:'Water Leakage Detection System',
    desc:'A smart water leakage monitoring system designed to detect water leakage and help reduce water wastage. The system focuses on identifying leakage conditions early and providing a practical solution for efficient water management.',
    tech:['IoT','Sensors','Embedded Systems','Water Management'],
    github:'#',
    demo:'#'
    },
   
    ];
  return `
  <div class="page">
    <div class="eyebrow">04 — PROJECTS</div>
    <h2 class="section-title">Selected work.</h2>
    <p class="section-sub">A mix of real builds and open slots — the placeholders are there so you can drop in your next project.</p>
    <div class="projects-grid">
      ${projects.map(p=>`
        <div class="project-card">
          <div class="project-visual">
            ${p.placeholder ? `<span class="placeholder-tag">PLACEHOLDER — EDIT ME</span>` : ''}
            <span class="glyph">${p.glyph}</span>
          </div>
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="tech-row">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
            <div class="project-links">
              <a href="${p.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
              <a href="${p.demo}" target="_blank" rel="noopener">${ICONS.arrow} Live Demo</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  `;
}

function pageResume(){
  return `
  <div class="page">
    <div class="eyebrow">05 — RESUME</div>
    <h2 class="section-title">One page, the short version.</h2>
    <p class="section-sub">Everything above, condensed — view it inline or download the PDF.</p>
    <div class="resume-wrap">
      <div class="resume-card">
        <h3 style="font-size:20px;">Resume — ${PROFILE.name}</h3>
        <p style="color:var(--text-dim); font-size:14.5px; line-height:1.7; margin-top:14px;">
          B.Tech AI &amp; Data Science student, CGPA 8.2, focused on machine learning, deep learning, computer vision and data analysis — actively seeking an internship.
        </p>
        <div class="resume-highlights">
          <div class="rh-item"><span class="n mono">01</span><p><strong style="color:var(--text);">Education</strong> — B.Tech AIDS, Sri Sairam Engineering College, 2nd Yr / 4th Sem</p></div>
          <div class="rh-item"><span class="n mono">02</span><p><strong style="color:var(--text);">Focus</strong> — Machine Learning, Deep Learning, Computer Vision, Data Analysis</p></div>
          <div class="rh-item"><span class="n mono">03</span><p><strong style="color:var(--text);">Languages</strong> — Python, C, SQL, Java</p></div>
        </div>
        <div class="resume-actions">
          <a class="btn-primary" href="${RESUME_DATA_URI}" target="_blank" rel="noopener">View Resume</a>
          <a class="btn-ghost" href="${RESUME_DATA_URI}" download="Vignesh_S_Resume.pdf">Download Resume</a>
        </div>
      </div>
      <div class="resume-preview">
        <iframe src="${RESUME_DATA_URI}" title="Resume preview"></iframe>
      </div>
    </div>
  </div>
  `;
}

function pageContact(){
  return `
  <div class="page">
    <div class="eyebrow">06 — CONTACT</div>
    <h2 class="section-title contact-title">
  Let's <span class="grad">build something.</span>
</h2>
    <p class="section-sub">Open to internships, collaborations, and conversations about AI &amp; data science.</p>
    <div class="contact-grid">
      <form id="contactForm">
        <div class="form-field"><label>NAME</label><input type="text" name="name" required placeholder="Your name" /></div>
        <div class="form-field"><label>EMAIL</label><input type="email" name="email" required placeholder="you@example.com" /></div>
        <div class="form-field"><label>MESSAGE</label><textarea name="message" rows="5" required placeholder="What's on your mind?"></textarea></div>
        <button type="submit" class="btn-primary" style="width:100%;">Send Message ${ICONS.arrow}</button>
        <div class="form-note">Opens your email app with this message pre-filled, addressed to ${PROFILE.email}.</div>
      </form>
      <div class="contact-info">
        <h3>Direct</h3>
        <div class="info-line"><strong>EMAIL</strong> <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div>
        <h3 style="margin-top:32px;">Elsewhere</h3>
        <div class="socials">
          <a class="social-btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${ICONS.linkedin}</a>
          <a class="social-btn" href="${PROFILE.github}" target="_blank" rel="noopener" title="GitHub">${ICONS.github}</a>
          <a class="social-btn" href="${PROFILE.instagram}" target="_blank" rel="noopener" title="Instagram">${ICONS.instagram}</a>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="mono">© ${new Date().getFullYear()} ${PROFILE.name} — AI &amp; Data Science</div>
    <div class="f-socials">
      <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${PROFILE.instagram}" target="_blank" rel="noopener">Instagram</a>
    </div>
  </footer>
  `;
}

const ROUTES = {
  '/': pageHome,
  '/about': pageAbout,
  '/skills': pageSkills,
  '/projects': pageProjects,
  '/resume': pageResume,
  '/contact': pageContact,
};

/* ============ CINEMATIC TRANSITION ROUTER ============ */
const app = document.getElementById('app');
const overlay = document.getElementById('scene-overlay');
let animating = false;

function bindContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

function renderPage(path, skipAnim){
  const render = ROUTES[path] || ROUTES['/'];
  const doRender = ()=>{
    app.innerHTML = render();
    setActive(path);
    bindContactForm();
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  };

  if(skipAnim){ doRender(); return; }

  animating = true;
  const leaveAnim = app.animate([
    {transform:'scale(1) translateY(0)', opacity:1, filter:'blur(0px)'},
    {transform:'scale(0.96) translateY(0)', opacity:0, filter:'blur(8px)'}
  ], {duration:380, easing:'cubic-bezier(.55,0,.55,1)', fill:'forwards'});

  const overlayIn = overlay.animate([{opacity:0},{opacity:1}], {duration:260, delay:180, easing:'ease-out', fill:'forwards'});

  leaveAnim.onfinish = ()=>{
    setTimeout(()=>{
      doRender();
      const enterAnim = app.animate([
        {transform:'scale(1.04) translateY(20px)', opacity:0, filter:'blur(12px)'},
        {transform:'scale(1) translateY(0)', opacity:1, filter:'blur(0px)'}
      ], {duration:480, easing:'cubic-bezier(.16,.84,.44,1)', fill:'forwards'});

      overlay.animate([{opacity:1},{opacity:0}], {duration:340, delay:60, easing:'ease-in', fill:'forwards'});

      enterAnim.onfinish = ()=>{ animating = false; };
    }, 90);
  };
}

function navigate(path, push=true){
  if(animating || path === currentPath()) { if(mobileMenu.classList.contains('open')) mobileMenu.classList.remove('open'); return; }
  if(push){
    // Hash-based routing: sandboxed iframes (about:srcdoc) reject pushState
    // with an arbitrary path, so we encode the route in the hash instead.
    try{ window.location.hash = path === '/' ? '' : path; }catch(err){ /* ignore */ }
  }
  mobileMenu.classList.remove('open');
  renderPage(path, false);
}

function currentPath(){
  const h = window.location.hash.replace(/^#/, '');
  return h === '' ? '/' : h;
}

document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-route]');
  if(el){
    e.preventDefault();
    navigate(el.getAttribute('data-route'));
  }
});

window.addEventListener('hashchange', ()=>{
  renderPage(currentPath(), false);
});

/* initial render (no animation on first load) */
renderPage(currentPath(), true);

/* ============ PARTICLE / NEURAL NETWORK CANVAS (Home mouse interaction) ============ */
(function(){
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const mouse = {x:null, y:null, active:false};
  const COUNT = 80;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function initParticles(){
    particles = [];
    for(let i=0;i<COUNT;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.25,
        vy: (Math.random()-0.5)*0.25,
        r: Math.random()*1.6+0.6
      });
    }
  }
  initParticles();
  const orb = document.querySelector('.orb');

if(orb){
  window.addEventListener('mousemove',(e)=>{
    const x = (e.clientX - window.innerWidth / 2) * 0.04;
    const y = (e.clientY - window.innerHeight / 2) * 0.04;

    orb.style.marginLeft = `${x}px`;
    orb.style.marginTop = `${y}px`;
  });
}

  window.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
  });
  window.addEventListener('mouseleave', ()=>{ mouse.active = false; });
  window.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    mouse.active = true;
}, { passive: true });

window.addEventListener('touchmove', e => {
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    mouse.active = true;
}, { passive: true });

window.addEventListener('touchend', () => {
    mouse.active = false;
});

  function tick(){
    ctx.clearRect(0,0,w,h);
    for(let p of particles){
      p.x += p.vx; p.y += p.vy;
     if(mouse.active){
  const dx=p.x-mouse.x;
  const dy=p.y-mouse.y;
  const dist=Math.sqrt(dx*dx+dy*dy);
  if(dist<180&&dist>0){
    const force=(180-dist)/180*0.12;
    p.vx+=(dx/dist)*force;
    p.vy+=(dy/dist)*force;
  }
}
p.vx*=0.985;
p.vy*=0.985;
if(p.x<0||p.x>w)p.vx*=-1;
if(p.y<0||p.y>h)p.vy*=-1;
p.x=Math.max(0,Math.min(w,p.x));
p.y=Math.max(0,Math.min(h,p.y));
    }
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i], b=particles[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 130){
          ctx.strokeStyle = `rgba(0,217,192,${(1-dist/130)*0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for(let p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(232,233,240,0.5)';
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
/* ============ MOBILE TOUCH GLOW ============ */
(function(){
    const touchGlow = document.createElement('div');
    touchGlow.className = 'touch-glow';
    document.body.appendChild(touchGlow);

    let touchTargetX = 0;
    let touchTargetY = 0;
    let touchGlowX = 0;
    let touchGlowY = 0;

    window.addEventListener('touchstart', (e)=>{
        const touch = e.touches[0];

        touchTargetX = touch.clientX;
        touchTargetY = touch.clientY;
        touchGlowX = touch.clientX;
        touchGlowY = touch.clientY;

        touchGlow.style.left = `${touchGlowX}px`;
        touchGlow.style.top = `${touchGlowY}px`;
        touchGlow.classList.add('active');
    }, {passive:true});

    window.addEventListener('touchmove', (e)=>{
        const touch = e.touches[0];

        touchTargetX = touch.clientX;
        touchTargetY = touch.clientY;
    }, {passive:true});

    window.addEventListener('touchend', ()=>{
        touchGlow.classList.remove('active');
    }, {passive:true});

    function smoothTouchGlow(){
        touchGlowX += (touchTargetX - touchGlowX) * 0.55;
        touchGlowY += (touchTargetY - touchGlowY) * 0.55;

        touchGlow.style.left = `${touchGlowX}px`;
        touchGlow.style.top = `${touchGlowY}px`;

        requestAnimationFrame(smoothTouchGlow);
    }

    smoothTouchGlow();
})();

/* ============ SITE-WIDE MOUSE-FOLLOW GLOW + MAGNETIC HOVER ============ */
(function(){
  // Skip entirely on touch-only devices or when the user prefers reduced motion.
  const noHover = window.matchMedia('(hover: none)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(noHover || reduced) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
  const glowPos = {x: mouse.x, y: mouse.y};
  let hasMoved = false;

  window.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX; mouse.y = e.clientY;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    if(!hasMoved){
      hasMoved = true;
      glow.classList.add('active');
      dot.classList.add('active');
    }
  });

  document.addEventListener('mouseleave', ()=>{
    glow.classList.remove('active');
    dot.classList.remove('active');
  });
  document.addEventListener('mouseenter', ()=>{
    if(hasMoved){ glow.classList.add('active'); dot.classList.add('active'); }
  });

  // Smoothly trail the glow behind the raw cursor position (eased follow).
  function followLoop(){
    glowPos.x += (mouse.x - glowPos.x) * 0.55;
    glowPos.y += (mouse.y - glowPos.y) * 0.55;
    glow.style.transform = `translate(${glowPos.x}px, ${glowPos.y}px) translate(-50%,-50%)`;
    requestAnimationFrame(followLoop);
  }
  followLoop();

  // Grow the dot and shift the glow's tint over clickable / hoverable elements.
  const hoverSelector = 'a, button, [data-route], .skill-card, .project-card, .card, input, textarea';
  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest(hoverSelector)) dot.classList.add('hovering');
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest(hoverSelector)) dot.classList.remove('hovering');
  });

  // Magnetic pull: primary buttons and social icons nudge toward the cursor
  // when it's nearby, and spring back on mouse leave.
  const magneticSelector = '.btn-primary, .btn-ghost, .connect-btn, .social-btn';
  function attachMagnetic(el){
    el.classList.add('magnetic');
    const strength = 0.35;
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width/2);
      const relY = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${relX*strength}px, ${relY*strength}px)`;
    });
    el.addEventListener('mouseleave', ()=>{
      el.style.transform = 'translate(0,0)';
    });
  }

  // Re-scan for magnetic targets whenever the page content changes (route swap).
  function scanMagnetic(){
    document.querySelectorAll(magneticSelector).forEach(el=>{
      if(!el.dataset.magneticBound){
        el.dataset.magneticBound = '1';
        attachMagnetic(el);
      }
    });
  }
  scanMagnetic();
  const appEl = document.getElementById('app');
  if(appEl){
    new MutationObserver(scanMagnetic).observe(appEl, {childList:true, subtree:true});
  }
})();
