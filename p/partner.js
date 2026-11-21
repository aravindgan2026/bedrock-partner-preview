/* Partner-only tools. Loaded by the portal (p/tracker.html) after sign-in, and by the sign-up page for one fee line. NEVER loaded on a partner's public page.
   Every share and copy path here uses only the public link (C.prettyUrl). SAFE() refuses any text that carries a login key.
   Fee wording lives here and in p/tracker.html, nowhere in cover.js or the page. The fee numbers come from our server (partner_deals). */
(function(){
'use strict';
var C=window.BPC,doc=document,esc=C.esc,ic=C.ic;
var EX_IN=10000,CUT_DEFAULT=1; /* the inviting partner picks their cut of an invited pro's fee (operator 11-20); it comes out of the pro's fee, never on top */
function feeLine(base){return 'Your fee on this deal: '+base+'%'}
function topLine(top){return 'Sell the most shares on this deal and your fee goes to '+top+'%.'}
function feeNote(rate){return 'That is '+rate+'% of the money your people put in. Example: they put in $'+EX_IN.toLocaleString('en-US')+', you earn $'+(EX_IN*rate/100).toLocaleString('en-US')+'. It counts once their money is in.'}
function shareText(p,url){return 'Bedrock has a new real estate investment: own part of an Orlando house flip. Sign up by Monday, Nov 23.'+(p&&p.name?' Shared by '+p.name+'.':'')+' '+url}
function copyText(u,btn){var done=function(){var o=btn.querySelector('.lbl')||btn;var t=o.textContent;o.textContent='Copied';setTimeout(function(){o.textContent=t},1400)};
 function fb(){var t=doc.createElement('textarea');t.value=u;t.style.position='fixed';t.style.opacity='0';doc.body.appendChild(t);t.select();try{doc.execCommand('copy')}catch(e){}doc.body.removeChild(t);done()}
 try{navigator.clipboard.writeText(u).then(done,fb)}catch(e){fb()}}
var KEYRE=/[0-9a-f]{64}|[#?&]t=/i;function SAFE(t){return !KEYRE.test(String(t||''))}
function openSheet(p){var url=C.prettyUrl(p);if(!SAFE(url))return;var e=encodeURIComponent,msg=shareText(p,url);C.track('share_tap',p.slug);C.ph&&C.ph('partner_share_open',{slug:p.slug});
 var h='<h3>Share my page</h3>'+
  '<label class="cv-l2" for="shmsg">Your message (you can change it)</label><textarea class="cv-msg" id="shmsg" rows="5"></textarea><p class="cv-err" id="sherr" role="alert"></p>'+
  '<a class="cv-opt" id="shwa" href="#" target="_blank" rel="noopener"><span class="cv-oi">'+ic('chat')+'</span>WhatsApp</a>'+
  '<a class="cv-opt" id="shsms" href="#"><span class="cv-oi">'+ic('message')+'</span>Text message</a>'+
  '<button type="button" class="cv-opt" id="shcopy"><span class="cv-oi">'+ic('copy')+'</span><span class="lbl">Copy message</span></button>'+
  (navigator.share?'<button type="button" class="cv-opt" id="shmore"><span class="cv-oi">'+ic('share')+'</span>More apps</button>':'')+
  '<button type="button" class="cv-btn cv-cancel" id="shx">Cancel</button>';
 var m=C.modal(h,{sheet:1,label:'Share my page'}),ov=m.pop,ta=ov.querySelector('#shmsg');ta.value=msg;
 var bad=false;function sync(){var t=ta.value;bad=!SAFE(t);ov.querySelector('#sherr').textContent=bad?'This message has your portal login link in it. Take it out. Never send that link.':'';
  ov.querySelector('#shwa').href=bad?'#':'https://wa.me/?text='+e(t);ov.querySelector('#shsms').href=bad?'#':'sms:?&body='+e(t)}
 ov.querySelector('#shwa').onclick=ov.querySelector('#shsms').onclick=function(ev){if(bad)ev.preventDefault()};
 ta.oninput=sync;sync();ov.querySelector('#shx').onclick=m.close;
 ov.querySelector('#shcopy').onclick=function(){if(!bad)copyText(ta.value,this)};
 var mo=ov.querySelector('#shmore');if(mo)mo.onclick=function(){if(!bad)navigator.share({text:ta.value}).catch(function(){})}}
function sharePage(p){openSheet(p)}
function copyShareLink(p,btn){var u=C.prettyUrl(p);if(SAFE(u))copyText(u,btn)}
var STATUS={waiting:'Waiting for our team',done:'Done',closed:'Closed'};
function openFix(p){var m=C.modal('',{label:'Ask us anything'}),shot='',busy=false;
 m.set('<h3>Ask us anything</h3><p class="cv-sub">A question, help sharing, or a change to your page. A person on our team reads every message. We check every day.</p>'+
  '<label class="cv-lbl" for="cr_text">What do you need?</label><textarea class="cv-msg" id="cr_text" rows="4" maxlength="2000" placeholder="Example: how should I start the message?"></textarea>'+
  '<div class="cv-bl">Screenshot or photo (optional)</div><div class="cv-lp"><div id="crw"></div><div class="cv-bcol"><button type="button" class="cv-btn cv-ghost" id="cr_pick">Add a screenshot</button><button type="button" class="cv-btn cv-link" id="cr_rm">Remove</button></div></div><input type="file" id="cr_file" accept="image/png,image/jpeg,image/webp" style="display:none">'+
  '<p class="cv-err" id="cr_err" role="alert"></p><button type="button" class="cv-btn" id="cr_send" disabled>Send</button>'+
  '<div class="cv-okmsg" id="cr_ok" role="status" hidden>Got it. Our team will get back to you at the phone or email you gave us.</div><h4>Your requests</h4><div id="cr_list"><p style="margin:0;color:var(--cv-soft)">Loading&hellip;</p></div>','#cr_text');
 var pop=m.pop,q=function(s){return pop.querySelector(s)};
 function thumb(){q('#crw').innerHTML=shot?'<img src="'+esc(shot)+'" alt="Your screenshot">':'<div class="cv-ph">Photo</div>';q('#cr_rm').hidden=!shot;q('#cr_pick').textContent=shot?'Change screenshot':'Add a screenshot'}
 function show(r){if(m.closed)return;var rs=(r&&r.ok&&r.list)||[];
  q('#cr_list').innerHTML=rs.length?rs.map(function(x){return '<div class="cv-rq"><div>'+esc(x.body)+'</div>'+(x.shot?'<small>With a screenshot</small>':'')+'<div class="cv-rqm"><span class="cv-tag">'+esc(STATUS[x.status]||x.status)+'</span><small>'+esc(new Date(x.at).toLocaleString())+'</small></div></div>'}).join(''):'<p style="margin:0;color:var(--cv-soft)">'+(r&&r.ok?'Nothing yet.':esc(C.whyText(r)))+'</p>'}
 function can(){q('#cr_send').disabled=busy||!q('#cr_text').value.trim()}
 q('#cr_text').oninput=function(){can();q('#cr_ok').hidden=true};
 q('#cr_pick').onclick=function(){q('#cr_file').click()};
 q('#cr_file').onchange=function(){var f=this.files&&this.files[0],inp=this;if(!f)return;if(f.type&&!/^image\/(png|jpeg|webp)$/.test(f.type)){q('#cr_err').textContent=C.WHY.type;return}
  var fr=new FileReader();fr.onload=function(){C.fitImage(fr.result,{kind:'shot',max:1000,limit:400000},function(u){if(m.closed)return;if(!u){q('#cr_err').textContent='We could not use that picture. Try a smaller one.';return}q('#cr_err').textContent='';shot=u;thumb()})};fr.readAsDataURL(f);try{inp.value=''}catch(e){}};
 q('#cr_rm').onclick=function(){shot='';thumb()};
 q('#cr_send').onclick=function(){var t=q('#cr_text').value.trim();if(!t||busy)return;busy=true;can();q('#cr_send').textContent='Sending…';q('#cr_err').textContent='';
  function fail(r){busy=false;q('#cr_send').textContent='Send';can();q('#cr_err').textContent=C.whyText(r)}
  function add(path){C.me('fix_add',p.slug,{body:t,shot:path||''}).then(function(r){if(!r.ok)return fail(r);busy=false;q('#cr_send').textContent='Send';q('#cr_text').value='';shot='';thumb();can();q('#cr_ok').hidden=false;show(r)})}
  if(shot)C.me('upload',p.slug,{kind:'shot',data:shot}).then(function(r){if(!r.ok)return fail(r);add(r.path)});else add('')};
 thumb();C.me('fix_list',p.slug,{}).then(show)}
function cutOf(v,base){base=base||6;v=parseFloat(v);return isFinite(v)?Math.max(0,Math.min(base,Math.round(v*2)/2)):0}
function refLine(r,cut,base){base=base||6;return '<b>'+esc(r.name||'Your inviter')+'</b> takes '+cut+'% of your '+base+'% fee on each sale. You keep '+(Math.round((base-cut)*100)/100)+'%.'}
window.BPP={CUT_DEFAULT:CUT_DEFAULT,cutOf:cutOf,refLine:refLine,EX_IN:EX_IN,feeLine:feeLine,topLine:topLine,feeNote:feeNote,shareText:shareText,sharePage:sharePage,copyShareLink:copyShareLink,SAFE:SAFE,openSheet:openSheet,openFix:openFix,copyText:copyText};
})();
