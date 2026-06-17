const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');
  e.target.querySelectorAll&&e.target.querySelectorAll('.fill').forEach(f=>{f.style.width=f.dataset.w;});
  io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// active nav
const links=[...document.querySelectorAll('.navlinks a')];
const secs=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const so=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const id='#'+e.target.id;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===id));}});},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>so.observe(s));