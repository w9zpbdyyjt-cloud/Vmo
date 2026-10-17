// Najdi-style messages and demo login logic
const loginBtn = document.getElementById('loginBtn');
const demoKeyInput = document.getElementById('demoKey');
const welcome = document.getElementById('welcome');
const designer = document.getElementById('designer');
const messageBox = document.getElementById('message');
const saveBtn = document.getElementById('saveBtn');
const publishBtn = document.getElementById('publishBtn');
const cmdName = document.getElementById('cmdName');
const cmdReply = document.getElementById('cmdReply');
const resultBox = document.getElementById('result');

function showMessage(text, type='info'){
  messageBox.textContent = text;
  messageBox.style.color = type==='error' ? '#ff6b6b' : '#9fffcf';
}

loginBtn.addEventListener('click', ()=>{
  const v = demoKeyInput.value.trim();
  if(!v){ showMessage('حط رقم يا بعدي (1-10)'); return; }
  // Accept only numbers 1-10 for demo
  const n = Number(v);
  if(Number.isInteger(n) && n>=1 && n<=10){
    // login success
    showMessage('تم تسجيل الدخول مؤقتًا — هلا والله');
    welcome.classList.add('hidden');
    designer.classList.remove('hidden');
    // prefill samples
    cmdName.value = 'السلام';
    cmdReply.value = 'هلا والله';
  } else {
    showMessage('صار خطأ، جرّب مرة ثانية', 'error');
  }
});

saveBtn.addEventListener('click', ()=>{
  const name = cmdName.value.trim();
  const reply = cmdReply.value.trim();
  if(!name || !reply){ showMessage('أكمل الحقول يا بعدي'); return; }
  // Local demo: save to localStorage only
  const projects = JSON.parse(localStorage.getItem('vexora_demo_projects')||'[]');
  projects.push({id: Date.now(), name, reply, createdAt: new Date().toISOString()});
  localStorage.setItem('vexora_demo_projects', JSON.stringify(projects));
  showMessage('تم الحفظ يا بعدي');
});

publishBtn.addEventListener('click', ()=>{
  const name = cmdName.value.trim();
  const reply = cmdReply.value.trim();
  if(!name || !reply){ showMessage('أكمل الحقول يا بعدي'); return; }
  // Demo publish: show simulated registration result
  resultBox.textContent = `تم نشر الأمر "${name}" محليًا — عند الضغط راح يرد: ${reply}`;
  resultBox.style.color = '#d1ffd8';
  showMessage('أبشر، نُشِر محليًا (تجريبي)');
});

// On load, show a small notice about demo keys
window.addEventListener('DOMContentLoaded', ()=>{
  const note = document.createElement('div');
  note.textContent = 'ملاحظة: الأرقام 1-10 للاختبار المحلي فقط. لا تستخدمها لحماية شيء حقيقي.';
  note.style.color = '#9ca3af';
  note.style.marginTop = '8px';
  document.querySelector('.workspace .topbar').appendChild(note);
});
