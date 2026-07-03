// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.navtoggle');
  const list = document.querySelector('nav.topnav ul');
  if(btn && list){
    btn.addEventListener('click', function(){
      list.classList.toggle('open');
    });
  }
});

// Live preprocessing demo (used on index.html)
const stopwords = new Set(["आहे","ला","आणि","च्या","ची","चे","आहेत","हवी","आहे।","is","the","a","an","to","of","for","and"]);

function initDemo(){
  const input = document.getElementById('demoInput');
  if(!input) return;
  function process(){
    const raw = input.value.trim();
    const tokens = raw.split(/\s+/).filter(Boolean);
    const lower = tokens.map(t => t.toLowerCase());
    const clean = lower.filter(t => !stopwords.has(t.replace(/[.,!?।]/g,'')));
    render('stgTokens', tokens);
    render('stgLower', lower);
    render('stgClean', clean.length ? clean : ['(all removed)']);
  }
  function render(id, arr){
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = arr.map(t => `<span class="tok">${t}</span>`).join('');
  }
  input.addEventListener('input', process);
  process();
}
document.addEventListener('DOMContentLoaded', initDemo);
