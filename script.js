/* =========================================================
   John Latif — Portfolio
   Vanilla JS · no framework
   ========================================================= */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches || window.innerWidth < 900;

  /* ---------- i18n ---------- */
  const translations = {
    ar: {
      'nav.home':'الرئيسية','nav.about':'عني','nav.work':'أعمالي','nav.skills':'مهاراتي','nav.spotify':'موسيقى','nav.contact':'تواصل معي',
      'hero.status':'متاح للعمل','hero.role':'مطور واجهة أمامية و مطور ويب',
      'hero.headline':'أصمم تجارب ممتعة وسهلة الاستخدام.',
      'hero.para':'أصمم تجارب ويب تفاعلية وتطبيقات واقعية تركز على الأداء وسهولة الاستخدام.',
      'hero.ctaWork':'شوف أعمالي','hero.ctaContact':'تواصل معي','hero.scroll':'اسكرول',
      'gate.skip':'تخطَّ','gate.kicker':'قبل ما تدخل',
      'gate.title':'حط لينك أغنية من Spotify.',
      'gate.sub':'الصق لينك أي أغنية أو ألبوم من Spotify، شغّلها، وهنخليها معاك وإنت بتتصفح. أو دوس تخطَّ.',
      'gate.load':'شغّل',
      'gate.hint':'دوس play جوه المشغل وابدأ رحلتك.',
      'gate.error':'الرابط مش صحيح. لازم يكون رابط Spotify.',
      'about.title':'عني',
      'about.text':'أنا شخص طموح وشغوف بالتعلّم والتطوير المستمر، وأسعى دائمًا إلى اكتساب مهارات جديدة وتحويل المعرفة إلى تطبيق عملي. أحب التفكير بطريقة مختلفة، الاهتمام بالتفاصيل، وتطوير الأفكار للوصول إلى نتائج أفضل. أؤمن بأهمية التطور المستمر، وأحرص على أن يكون لكل مشروع أعمل عليه قيمة حقيقية تعكس مهاراتي وشغفي بما أقدمه.',
      'about.tag1':'Web Design','about.tag2':'بناء الهياكل','about.tag3':'تجارب تفاعلية',
      'work.title':'أعمالي','work.sub':'مجموعة من المشاريع التي تعرض مهاراتي وأسلوبي في التطوير',
      'work.p1.title':'شولميث جاليري',
      'work.p1.desc':'منصة فنية لعرض وبيع اللوحات الفنية، مع إمكانية تنفيذ أي تابلوه بخامات وأحجام مختلفة حسب طلب العميل، وتقديم استشارات فنية مجانية.',
      'work.p2.title':'نظام نقاط لصيدلية د. ميرنا',
      'work.p2.desc':'نظام متكامل لإدارة نقاط الولاء لعملاء صيدلية د. ميرنا، يتيح جمع النقاط مع كل عملية شراء واستبدالها بمكافآت وعروض حصرية.',
      'work.p3.title':'نظام تسجيل الدخول',
      'work.p3.desc':'نظام تسجيل دخول تجريبي بسيط وآمن مع واجهة مستخدم نظيفة، يتيح للمستخدمين تسجيل الدخول باستخدام اسم المستخدم وكلمة المرور.',
      'work.live':'Live Demo ↗',
      'skills.title':'مهاراتي','skills.sub':'التقنيات التي أعمل بها لإنشاء تجارب رقمية استثنائية',
      'skills.core':'المهارات الأساسية','skills.creative':'التقنيات الإبداعية',
      'spotify.title':'اسمع وإنت بتتصفح',
      'spotify.sub':'الصق لينك أي أغنية أو ألبوم أو بودكاست من Spotify، وهيشتغل هنا فورًا.',
      'spotify.load':'شغّل',
      'spotify.hint':'يقبل روابط track / album / playlist / episode / show',
      'spotify.now':'بيشتغل الآن',
      'spotify.error':'الرابط مش صحيح. لازم يكون رابط Spotify.',
      'mini.now':'بيشتغل الآن',
      'contact.headline':'خلينا نبني حاجة تستحق إنها تتشاف.',
      'contact.name':'جون لطيف','contact.role':'مطور واجهة امامية و مطور ويب و واجهة خلفية','contact.location':'مصر',
      'contact.phone':'الهاتف',
      'footer.built':'Built with care — no templates.','footer.top':'↑ للأعلى'
    },
    en: {
      'nav.home':'Home','nav.about':'About','nav.work':'Work','nav.skills':'Skills','nav.spotify':'Music','nav.contact':'Contact',
      'hero.status':'Available for work','hero.role':'Front-End & Web Developer',
      'hero.headline':'I craft delightful, usable experiences.',
      'hero.para':'I build interactive web experiences and real-world applications focused on performance and usability.',
      'hero.ctaWork':'View my work','hero.ctaContact':'Get in touch','hero.scroll':'Scroll',
      'gate.skip':'Skip','gate.kicker':'Before you enter',
      'gate.title':'Paste a Spotify link.',
      'gate.sub':'Paste any Spotify track or album, hit play, and we\'ll keep it with you while you browse. Or hit skip.',
      'gate.load':'Play',
      'gate.hint':'Hit play inside the player and start your journey.',
      'gate.error':'Invalid link. Must be a Spotify URL.',
      'about.title':'About',
      'about.text':"I'm an ambitious developer passionate about continuous learning and growth, always striving to gain new skills and turn knowledge into practice. I like thinking differently, obsessing over details, and pushing ideas further. I believe in constant evolution, and I make sure every project I work on carries real value that reflects my skills and passion.",
      'about.tag1':'Web Design','about.tag2':'Architecture','about.tag3':'Interactive experiences',
      'work.title':'Work','work.sub':'A selection of projects that showcase my skills and approach to development',
      'work.p1.title':'Shulamith Gallery',
      'work.p1.desc':'An art platform for showcasing and selling paintings, with custom canvas execution in different materials and sizes, plus free art consultations.',
      'work.p2.title':'Dr. Mirna Loyalty Points',
      'work.p2.desc':'A complete loyalty-points system for Dr. Mirna Pharmacy, allowing customers to collect points on every purchase and redeem them for exclusive rewards.',
      'work.p3.title':'Login System',
      'work.p3.desc':'A simple and secure demo login system with a clean interface, allowing users to sign in with a username and password.',
      'work.live':'Live Demo ↗',
      'skills.title':'Skills','skills.sub':'The stack I use to build exceptional digital experiences',
      'skills.core':'Core skills','skills.creative':'Creative tech',
      'spotify.title':'Listen while you browse',
      'spotify.sub':'Paste any Spotify track, album, or podcast link and it will play right here.',
      'spotify.load':'Play',
      'spotify.hint':'Accepts track / album / playlist / episode / show links',
      'spotify.now':'Now playing',
      'spotify.error':'Invalid link. Must be a Spotify URL.',
      'mini.now':'Now playing',
      'contact.headline':"Let's build something memorable.",
      'contact.name':'John Latif','contact.role':'Front-End, Web & Back-End Developer','contact.location':'Egypt',
      'contact.phone':'Phone',
      'footer.built':'Built with care — no templates.','footer.top':'↑ Back to top'
    }
  };

  function setLanguage(lang){
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.dataset.i18n;
      const val = translations[lang][key];
      if(val !== undefined) el.textContent = val;
    });
    try { localStorage.setItem('jl-lang', lang); } catch(e){}
    document.querySelectorAll('[data-reveal-words], .contact__headline').forEach(splitWordsIntoSpans);
    observeWordReveals();
  }

  /* ---------- Loader ---------- */
  function initLoader(){
    const done = () => document.body.classList.remove('is-loading');
    if (document.readyState === 'complete') {
      setTimeout(done, prefersReduced ? 0 : 1200);
    } else {
      window.addEventListener('load', ()=> setTimeout(done, prefersReduced ? 0 : 1200));
    }
    setTimeout(done, 2600);
  }

  /* ---------- Cursor ---------- */
  function initCursor(){
    if(isTouch) return;
    const cursor = document.getElementById('cursor');
    const label  = document.getElementById('cursorLabel');
    if(!cursor) return;
    const dot  = cursor.querySelector('.cursor__dot');
    const ring = cursor.querySelector('.cursor__ring');

    let mx = innerWidth/2, my = innerHeight/2;
    let rx = mx, ry = my, dx = mx, dy = my;

    window.addEventListener('mousemove', (e)=>{
      mx = e.clientX; my = e.clientY;
      dx += (mx - dx) * .55;
      dy += (my - dy) * .55;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
    }, {passive:true});

    const loop = () => {
      rx += (mx - rx) * .14;
      ry += (my - ry) * .14;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    document.querySelectorAll('[data-cursor="view"], [data-cursor="link"], a, button').forEach(el=>{
      const kind = el.dataset.cursor;
      el.addEventListener('mouseenter', ()=>{
        if(kind === 'view'){
          cursor.classList.add('is-view');
          label.textContent = el.dataset.cursorLabel || 'VIEW';
        } else if(kind === 'link' || el.matches('a,button')){
          cursor.classList.add('is-link');
        }
      });
      el.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('is-view','is-link');
      });
    });

    window.addEventListener('mousedown', ()=> cursor.classList.add('is-down'));
    window.addEventListener('mouseup',   ()=> cursor.classList.remove('is-down'));
  }

  /* ---------- Navigation ---------- */
  function initNavigation(){
    const nav = document.getElementById('nav');
    const indicator = document.getElementById('navIndicator');
    const links = document.querySelectorAll('.nav__links a');
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');

    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();

    const sections = ['home','about','work','skills','spotify','contact']
      .map(id => document.getElementById(id));

    const setIndicator = (el) => {
      if(!el || !indicator) return;
      const linkRect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      const x = linkRect.left - parentRect.left + linkRect.width/2;
      indicator.style.transform = `translateX(${x - 2}px)`;
      indicator.classList.add('is-on');
      links.forEach(l => l.classList.toggle('is-active', l === el));
    };

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const link = document.querySelector(`.nav__links a[data-nav="${entry.target.id}"]`);
          if(link) setIndicator(link);
        }
      });
    }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
    sections.forEach(s => s && io.observe(s));

    window.addEventListener('resize', ()=>{
      const active = document.querySelector('.nav__links a.is-active');
      if(active) setIndicator(active);
    });

    const toggleMenu = (open) => {
      menu.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger?.addEventListener('click', ()=> toggleMenu(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> toggleMenu(false)));

    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if(!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({top, behavior: prefersReduced ? 'auto' : 'smooth'});
      });
    });
  }

  /* ---------- Magnetic ---------- */
  function initMagnetic(){
    if(isTouch || prefersReduced) return;
    document.querySelectorAll('.magnetic').forEach(el=>{
      let raf = null;
      const strength = 22;
      el.addEventListener('mousemove', (e)=>{
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width/2) / (r.width/2);
        const y = (e.clientY - r.top - r.height/2) / (r.height/2);
        if(raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(()=>{
          el.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
        });
      });
      el.addEventListener('mouseleave', ()=>{
        if(raf) cancelAnimationFrame(raf);
        el.style.transform = '';
      });
    });
  }

  /* ---------- Parallax ---------- */
  function initParallax(){
    if(prefersReduced) return;
    const items = document.querySelectorAll('[data-parallax]');
    if(!items.length) return;
    const mouse = {x:0, y:0};
    const strength = isTouch ? 0 : 1;

    window.addEventListener('mousemove', (e)=>{
      mouse.x = (e.clientX / innerWidth - .5) * 2;
      mouse.y = (e.clientY / innerHeight - .5) * 2;
    }, {passive:true});

    const loop = () => {
      const sy = window.scrollY;
      items.forEach(el=>{
        const depth = parseFloat(el.dataset.parallax) || 0;
        const mx = mouse.x * depth * 120 * strength;
        const my = mouse.y * depth * 120 * strength;
        const yy = -sy * depth * .4;
        el.style.transform = `translate3d(${mx}px, ${my + yy}px, 0)`;
      });
      requestAnimationFrame(loop);
    };
    if(!isTouch) requestAnimationFrame(loop);
  }

  /* ---------- Scroll progress ---------- */
  function initScrollProgress(){
    const bar = document.getElementById('scrollBar');
    if(!bar) return;
    let ticking = false;
    const update = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      ticking = false;
    };
    window.addEventListener('scroll', ()=>{
      if(!ticking){ requestAnimationFrame(update); ticking = true; }
    }, {passive:true});
    update();
  }

  /* ---------- Word reveal ---------- */
  function splitWordsIntoSpans(root){
    if(!(root instanceof Element)) return;
    if(root.dataset.split === '1' && root.querySelectorAll('.word').length) return;
    const text = root.textContent.trim();
    if(!text) return;
    root.textContent = '';
    text.split(/\s+/).forEach((w, i, arr)=>{
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = w;
      root.appendChild(span);
      if(i < arr.length - 1) root.appendChild(document.createTextNode(' '));
    });
    root.dataset.split = '1';
  }

  let wordObserver = null;
  function observeWordReveals(){
    if(wordObserver) wordObserver.disconnect();
    const groups = [...document.querySelectorAll('[data-reveal-words]')];
    const headline = document.querySelector('.contact__headline');
    if(headline) groups.push(headline);

    wordObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        const el = entry.target;
        el.querySelectorAll('.word').forEach((w, i)=>{
          setTimeout(()=> w.classList.add('is-on'), i * 55);
        });
        wordObserver.unobserve(el);
      });
    }, {threshold:0.25});
    groups.forEach(el => wordObserver.observe(el));
  }

  /* ---------- Scroll anims (heads + tags) ---------- */
  function initScrollAnimations(){
    const headIO = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          headIO.unobserve(e.target);
        }
      });
    }, {threshold:0.3});
    document.querySelectorAll('.section-head').forEach(el => headIO.observe(el));

    const tagIO = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.querySelectorAll('li').forEach((li,i)=> setTimeout(()=> li.classList.add('is-on'), i * 140));
          tagIO.unobserve(entry.target);
        }
      });
    }, {threshold:0.35});
    document.querySelectorAll('.about__tags').forEach(el => tagIO.observe(el));
  }

  /* ---------- Projects ---------- */
  function initProjectAnimations(){
    const projects = document.querySelectorAll('[data-project]');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('is-on');
      });
    }, {threshold:0.22});
    projects.forEach(p => io.observe(p));

    if(!prefersReduced){
      let ticking = false;
      const update = () => {
        projects.forEach(p=>{
          const rect = p.getBoundingClientRect();
          const vh = innerHeight;
          const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
          const media = p.querySelector('[data-project-media]');
          if(media){
            const inner = media.querySelector('.project__media-inner');
            const shift = (progress - .5) * 30;
            inner.style.transform = `translateY(${shift}px) scale(1.06)`;
          }
        });
        ticking = false;
      };
      window.addEventListener('scroll', ()=>{
        if(!ticking){ requestAnimationFrame(update); ticking = true; }
      }, {passive:true});
      update();
    }
  }

  /* ---------- Skills ---------- */
  function initSkills(){
    document.querySelectorAll('[data-skills-list]').forEach(list=>{
      const items = list.querySelectorAll('.skill');
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting) return;
          items.forEach((it,i)=> setTimeout(()=> it.classList.add('is-on'), i * 60));
          io.unobserve(entry.target);
        });
      }, {threshold:0.15});
      io.observe(list);
    });

    if(isTouch) return;

    const preview = document.getElementById('skillPreview');
    const previewText = document.getElementById('skillPreviewText');
    if(!preview) return;

    let px = 0, py = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', (e)=>{ px = e.clientX; py = e.clientY; }, {passive:true});

    const loop = () => {
      cx += (px - cx) * .18;
      cy += (py - cy) * .18;
      preview.style.left = cx + 'px';
      preview.style.top  = cy + 'px';
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    document.querySelectorAll('.skill').forEach(skill=>{
      skill.addEventListener('mouseenter', ()=>{
        const name = skill.querySelector('.skill__name')?.textContent || '';
        const kind = skill.classList.contains('skill--3d') ? '3d'
                   : skill.classList.contains('skill--motion') ? 'motion' : 'core';
        preview.dataset.kind = kind;
        previewText.textContent = name;
        preview.classList.add('is-on');
      });
      preview && skill.addEventListener('mouseleave', ()=> preview.classList.remove('is-on'));
    });
  }

  /* ---------- Spotify ---------- */
  let gateController = null;
  let spotifyApiReady = false;
  let pendingGateUri = null;
  let entered = false;

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    spotifyApiReady = true;
    window.__spotifyIFrameAPI = IFrameAPI;
    if (pendingGateUri) {
      mountGatePlayer(pendingGateUri);
      pendingGateUri = null;
    }
  };

  /* URL normalization */
  function normalizeSpotifyUrl(raw){
    if (!raw) return null;
    const s = raw.trim();
    if (s.startsWith('spotify:')) {
      const parts = s.split(':');
      const allowed = ['track','album','playlist','episode','show','artist'];
      if (parts.length >= 3 && parts[0] === 'spotify' && allowed.includes(parts[1]) && parts[2]) {
        return `spotify:${parts[1]}:${parts[2]}`;
      }
      return null;
    }
    try {
      const withProto = /^https?:\/\//i.test(s) ? s : `https://${s}`;
      const u = new URL(withProto);
      if (!/(^|\.)spotify\.com$/i.test(u.hostname)) return null;
      let parts = u.pathname.split('/').filter(Boolean);
      parts = parts.filter(p => !/^intl-[a-z]{2}$/i.test(p));
      if (parts.length < 2) return null;
      const [kind, id] = parts;
      const allowed = ['track','album','playlist','episode','show','artist'];
      if (!allowed.includes(kind)) return null;
      if (!id || id.length < 10) return null;
      const cleanId = id.split('?')[0].split('#')[0];
      return `spotify:${kind}:${cleanId}`;
    } catch(_) { return null; }
  }

  /* Mount controller inside gate */
  function mountGatePlayer(uri){
    const host = document.getElementById('gateEmbed');
    const wrap = document.getElementById('gatePlayerWrap');
    if (!host || !wrap) return;

    wrap.hidden = false;

    if (gateController) {
      gateController.loadEntity(uri);
      return;
    }

    host.innerHTML = '';
    const IFrameAPI = window.__spotifyIFrameAPI;
    if (!IFrameAPI) return;

    IFrameAPI.createController(host, { uri, width:'100%', height:152 }, (controller)=>{
      gateController = controller;
      controller.addListener('playback_started', () => {
        revealSiteFromGate(uri);
      });
    });
  }

  /* Gate closes; player keeps playing inside a floating mini player */
  function revealSiteFromGate(uri){
    if (entered) return;
    entered = true;

    document.body.classList.remove('is-gate');
    moveGateIframeToMini();

    try {
      localStorage.setItem('jl-gate-passed', '1');
      localStorage.setItem('jl-last-uri', uri);
    } catch(e){}
  }

  /* Move the live iframe to the mini player without losing playback */
  function moveGateIframeToMini(){
    const gateEmbed = document.getElementById('gateEmbed');
    const miniEmbed = document.getElementById('miniEmbed');
    const miniPlayer = document.getElementById('miniPlayer');
    if (!gateEmbed || !miniEmbed || !miniPlayer) return;

    const iframe = gateEmbed.querySelector('iframe');
    if (iframe) miniEmbed.appendChild(iframe);

    miniPlayer.setAttribute('aria-hidden', 'false');
    miniPlayer.classList.add('is-on');
  }

  /* Skip -> just close the gate */
  function skipGate(){
    if (entered) return;
    entered = true;
    document.body.classList.remove('is-gate');
    try { localStorage.setItem('jl-gate-passed', '1'); } catch(e){}
  }

  /* Independent mount for the in-page Spotify section */
  function mountSpotifySection(uri){
    const host = document.getElementById('spotifyEmbed');
    const wrap = document.getElementById('spotifyPlayerWrap');
    if (!host || !wrap) return;

    wrap.hidden = false;
    host.innerHTML = '';
    const IFrameAPI = window.__spotifyIFrameAPI;
    if (!IFrameAPI) return;

    IFrameAPI.createController(host, { uri, width:'100%', height:152 }, (controller)=>{
      controller.addListener('ready', () => controller.play());
    });
  }

  /* ---------- Spotify init ---------- */
  function initSpotify(){
    // ---- Gate form ----
    const gateForm = document.getElementById('gateForm');
    const gateInput = document.getElementById('gateInput');
    const gateError = document.getElementById('gateError');
    const gateSkip = document.getElementById('gateSkip');

    const showGateError = (msg) => {
      if (!gateError) return;
      gateError.textContent = msg;
      gateError.classList.toggle('is-on', !!msg);
    };

    // If user already passed the gate before, skip it entirely
    let passed = false;
    try { passed = localStorage.getItem('jl-gate-passed') === '1'; } catch(e){}
    if (passed) {
      entered = true;
      document.body.classList.remove('is-gate');
    } else {
      document.body.classList.add('is-gate');
    }

    gateForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const uri = normalizeSpotifyUrl(gateInput.value);
      if (!uri) {
        showGateError(translations[document.documentElement.lang]['gate.error']);
        return;
      }
      showGateError('');
      if (!spotifyApiReady) { pendingGateUri = uri; return; }
      mountGatePlayer(uri);
    });

    gateInput?.addEventListener('paste', ()=> setTimeout(()=> gateForm.requestSubmit(), 0));
    gateSkip?.addEventListener('click', skipGate);

    // ---- Mini player close ----
    const miniClose = document.getElementById('miniClose');
    const miniPlayer = document.getElementById('miniPlayer');
    miniClose?.addEventListener('click', ()=>{
      miniPlayer?.classList.remove('is-on');
      miniPlayer?.setAttribute('aria-hidden', 'true');
    });

    // ---- In-page Spotify section ----
    const form = document.getElementById('spotifyForm');
    const input = document.getElementById('spotifyInput');
    const errorEl = document.getElementById('spotifyError');
    const closeBtn = document.getElementById('spotifyClose');
    const wrapSec = document.getElementById('spotifyPlayerWrap');
    if (!form) return;

    const showError = (msg) => {
      errorEl.textContent = msg;
      errorEl.classList.toggle('is-on', !!msg);
    };

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const uri = normalizeSpotifyUrl(input.value);
      if (!uri) {
        showError(translations[document.documentElement.lang]['spotify.error']);
        return;
      }
      showError('');
      if (!spotifyApiReady) return;
      mountSpotifySection(uri);
    });

    closeBtn?.addEventListener('click', ()=>{ wrapSec.hidden = true; });
    input?.addEventListener('paste', ()=> setTimeout(()=> form.requestSubmit(), 0));
  }

  /* ---------- Language toggle ---------- */
  function initLanguageToggle(){
    const btn = document.getElementById('langToggle');
    let current = document.documentElement.lang || 'ar';
    try { current = localStorage.getItem('jl-lang') || current; } catch(e){}
    setLanguage(current);
    btn?.addEventListener('click', ()=>{
      const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
      setLanguage(next);
    });
  }

  /* ---------- Year ---------- */
  function initYear(){
    const y = new Date().getFullYear();
    const a = document.getElementById('year');
    const b = document.getElementById('yearM');
    if(a) a.textContent = y;
    if(b) b.textContent = y;
  }

  /* ---------- INIT ---------- */
  function init(){
    initLoader();
    initCursor();
    initNavigation();
    initScrollProgress();
    initParallax();

    document.querySelectorAll('[data-reveal-words]').forEach(splitWordsIntoSpans);
    const ch = document.querySelector('.contact__headline');
    if(ch) splitWordsIntoSpans(ch);

    initScrollAnimations();
    observeWordReveals();
    initProjectAnimations();
    initSkills();
    initMagnetic();
    initSpotify();
    initLanguageToggle();
    initYear();

    setTimeout(()=> document.body.classList.add('is-ready'), prefersReduced ? 0 : 1200);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
