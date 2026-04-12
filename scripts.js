// PETALS
(function(){
  const canvas = document.getElementById('petal-canvas');
  const colors = ['#E8B4C0','#F0C8D2','#D4A0B0','#F5DDE4','#EDD0B8'];
  function makePetal(){
    const el = document.createElement('div');
    el.className = 'petal';
    const size = 8 + Math.random()*14;
    el.style.cssText = `left:${Math.random()*100}vw;width:${size}px;height:${size*1.6}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:50% 50% 50% 50%/60% 60% 40% 40%;transform:skewX(${-30+Math.random()*60}deg);animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*14}s;opacity:0;`;
    canvas.appendChild(el);
  }
  for(let i=0;i<30;i++) makePetal();
  setInterval(()=>{ if(canvas.children.length>65) canvas.children[0].remove(); makePetal(); },2800);
})();

// NAV
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinksList = document.getElementById('nav-links');
window.addEventListener('scroll', ()=> navbar.classList.toggle('scrolled', window.scrollY > 60));
navToggle.addEventListener('click', ()=> navLinksList.classList.toggle('open'));
navLinksList.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> navLinksList.classList.remove('open')));

// FLOATING CTA
const floatingCta = document.getElementById('floating-cta');
const heroSection = document.getElementById('hero');
const contactSection = document.getElementById('contact');
window.addEventListener('scroll', ()=>{
  const pastHero = window.scrollY > heroSection.offsetHeight;
  const atContact = contactSection.getBoundingClientRect().top < window.innerHeight * 0.5;
  floatingCta.classList.toggle('visible', pastHero && !atContact);
});

// SCROLL REVEAL
// Add .hidden to all reveal elements first, then observe
document.querySelectorAll('.reveal').forEach(el => el.classList.add('hidden'));
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
