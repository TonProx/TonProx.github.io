const theme=document.getElementById('theme');
const saved=localStorage.getItem('ton-theme');
if(saved==='light'){document.body.classList.add('light');theme.textContent='☾'}
theme.addEventListener('click',()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');theme.textContent=light?'☾':'☼';localStorage.setItem('ton-theme',light?'light':'dark')});
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.animationPlayState='running';observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>{e.style.animationPlayState='paused';observer.observe(e)});
