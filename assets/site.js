(function(){
var b=document.body;b.classList.remove('no-js');
requestAnimationFrame(function(){b.classList.add('loaded')});
var btn=document.querySelector('.menu-btn'),menu=document.getElementById('nav-menu');
if(btn&&menu){
 var close=function(){menu.classList.remove('open');btn.setAttribute('aria-expanded','false')};
 btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false')});
 menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();}});
}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px'});
 document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
var form=document.getElementById('contact-form');
if(form){
 var sb=document.getElementById('submit-btn'),st=document.getElementById('form-status');
 form.addEventListener('submit',function(e){
  e.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return;}
  sb.disabled=true;sb.firstChild.textContent='Sending… ';st.textContent='';st.className='form-status';
  fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(form)})
  .then(function(r){return r.json()})
  .then(function(d){if(!d.success)throw new Error(d.message);st.textContent='Message sent. We\u2019ll be in touch soon.';form.reset();})
  .catch(function(){st.textContent='Something went wrong. Please try again or call (423) 314-5206.';st.className='form-status error';})
  .then(function(){sb.disabled=false;sb.firstChild.textContent='Send Message ';});
 });
}
})();
