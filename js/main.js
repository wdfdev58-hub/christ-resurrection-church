/* Christ Resurrection Church — "Raw Form" motion.
   Signature: massive type sliding up on the Raw Form ease
   (cubic-bezier(0.16,1,0.3,1)), pulsing blobs (CSS), pinned scripture. */

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ----------------------------------------------------------------- Nav + progress */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ----------------------------------------------------------------- GSAP */
  if (reduce || !window.gsap) {
    const intro = document.getElementById('intro');
    if (intro) intro.style.display = 'none';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // The Raw Form ease everywhere.
  const RAW = 'expo.out';

  // Intro: accent square spins up, then the whole panel wipes upward.
  const intro = document.getElementById('intro');
  const tl = gsap.timeline();
  tl.from('.intro-spark', { scale: 0, rotation: 180, duration: 0.6, ease: RAW })
    .from('#intro p', { y: 24, opacity: 0, duration: 0.6, ease: RAW }, '-=0.35')
    .to('#intro', {
      yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.25,
      onComplete: () => intro && (intro.style.display = 'none'),
    })
    // Hero headline: massive lines slide up on the Raw ease
    .from('.hero-title .line', { yPercent: 110, opacity: 0, duration: 1, ease: RAW, stagger: 0.14 }, '-=0.35')
    .from('section:first-of-type .reveal', { y: 34, opacity: 0, duration: 0.8, ease: RAW, stagger: 0.1 }, '-=0.6');

  // Scroll reveals (skip the hero's, already handled)
  gsap.utils.toArray('.reveal').forEach((el) => {
    if (el.closest('section:first-of-type')) return;
    gsap.from(el, {
      y: 40, opacity: 0, duration: 0.8, ease: RAW,
      scrollTrigger: { trigger: el, start: 'top 86%' },
    });
  });

  // Pinned scripture: hold the ink block, gently scale the verse in
  ScrollTrigger.create({
    trigger: '#scripture',
    start: 'top top',
    end: '+=110%',
    pin: true,
    pinSpacing: true,
  });
  gsap.fromTo('#verse',
    { scale: 0.94, opacity: 0.2 },
    { scale: 1, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '#scripture', start: 'top 80%', end: 'top top', scrub: true } });
  gsap.to('#verseTag', {
    letterSpacing: '0.6em', ease: 'none',
    scrollTrigger: { trigger: '#scripture', start: 'top bottom', end: 'top top', scrub: true },
  });

  // Hero headline drifts up slightly as you leave it
  gsap.to('.hero-title', {
    yPercent: -8, ease: 'none',
    scrollTrigger: { trigger: '.hero-title', start: 'top top', end: 'bottom top', scrub: true },
  });

  // Giant footer wordmark slides in from below
  gsap.from('.wordmark', {
    yPercent: 40, opacity: 0, duration: 1.1, ease: RAW,
    scrollTrigger: { trigger: 'footer', start: 'top 75%' },
  });
})();
