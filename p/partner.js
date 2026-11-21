/* Partner-only tools (real version, 2026-11-20). cover.js loads this file only in a browser that holds the private key for this link.
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
function openSheet(p,url){var e=encodeURIComponent,msg=shareText(p,url);C.track('share_tap',p.slug);C.ph&&C.ph('partner_share_open',{slug:p.slug});
 var h='<h3>Share my page</h3>'+
  '<label class="cv-l2" for="shmsg">Your message (you can change it)</label><textarea class="cv-msg" id="shmsg" rows="5"></textarea>'+
  '<a class="cv-opt" id="shwa" href="#" target="_blank" rel="noopener"><span class="cv-oi">'+ic('chat')+'</span>WhatsApp</a>'+
  '<a class="cv-opt" id="shsms" href="#"><span class="cv-oi">'+ic('message')+'</span>Text message</a>'+
  '<button type="button" class="cv-opt" id="shcopy"><span class="cv-oi">'+ic('copy')+'</span><span class="lbl">Copy message</span></button>'+
  (navigator.share?'<button type="button" class="cv-opt" id="shmore"><span class="cv-oi">'+ic('share')+'</span>More apps</button>':'')+
  '<button type="button" class="cv-btn cv-cancel" id="shx">Cancel</button>';
 var m=C.modal(h,{sheet:1,label:'Share my page'}),ov=m.pop,ta=ov.querySelector('#shmsg');ta.value=msg;
 function sync(){var t=ta.value;ov.querySelector('#shwa').href='https://wa.me/?text='+e(t);ov.querySelector('#shsms').href='sms:?&body='+e(t)}
 ta.oninput=sync;sync();ov.querySelector('#shx').onclick=m.close;
 ov.querySelector('#shcopy').onclick=function(){copyText(ta.value,this)};
 var mo=ov.querySelector('#shmore');if(mo)mo.onclick=function(){navigator.share({text:ta.value}).catch(function(){})}}
function sharePage(p){openSheet(p,C.prettyUrl(p))}
var STATUS={waiting:'Waiting for our team',done:'Done',closed:'Closed'};
function openFix(p){var m=C.modal('',{label:'Ask us to fix something'}),shot='',busy=false;
 m.set('<h3>Ask us to fix something</h3><p class="cv-sub">Tell us what to change on your page.</p>'+
  '<label class="cv-lbl" for="cr_text">What should we change on your page?</label><textarea class="cv-msg" id="cr_text" rows="4" maxlength="2000" placeholder="Example: make my logo bigger"></textarea>'+
  '<div class="cv-bl">Screenshot or photo (optional)</div><div class="cv-lp"><div id="crw"></div><div class="cv-bcol"><button type="button" class="cv-btn cv-ghost" id="cr_pick">Add a screenshot</button><button type="button" class="cv-btn cv-link" id="cr_rm">Remove</button></div></div><input type="file" id="cr_file" accept="image/png,image/jpeg,image/webp" style="display:none">'+
  '<p class="cv-err" id="cr_err" role="alert"></p><button type="button" class="cv-btn" id="cr_send" disabled>Send</button>'+
  '<div class="cv-okmsg" id="cr_ok" role="status" hidden>Got it. Our team will fix it and let you know.</div><h4>Your requests</h4><div id="cr_list"><p style="margin:0;color:var(--cv-soft)">Loading&hellip;</p></div>','#cr_text');
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
function editMe(p){C.openProfile({mode:'edit',p:p,onSave:function(me,m){C.render(me);mount(me);C.savedScreen(m)}})}
function drop(sel){[].slice.call(doc.querySelectorAll(sel)).forEach(function(n){n.parentNode.removeChild(n)})}
/* the partner's own view of the real page: a sticky tools bar and one small line. No fee wording on the page itself. */
function mount(p){drop('.cv-bar');drop('.cv-pcard');var tu=C.trackerUrl(p);
 var card=doc.createElement('div');card.className='cv-pcard';card.setAttribute('data-cv','1');
 card.innerHTML='<span class="cv-pn-ic" aria-hidden="true">&#128064;</span><span class="cv-pn-t"><b>Your page.</b> This is what people you send it to will see.</span>';
 var anchor=doc.querySelector('.cv-welcome')||doc.querySelector('.nav');if(anchor&&anchor.parentNode)anchor.parentNode.insertBefore(card,anchor.nextSibling);
 var bar=doc.createElement('div');bar.className='cv-bar';bar.setAttribute('data-cv','1');
 bar.innerHTML='<a href="'+esc(tu)+'" id="pb_track">'+ic('chart',20)+'Tracker</a><button type="button" class="cv-main" id="pb_share">'+ic('share',20)+'Share</button><button type="button" id="pb_edit" aria-label="Edit my page">'+ic('edit',20)+'Edit page</button><button type="button" id="pb_fix" aria-label="Ask us to fix something">'+ic('chat',20)+'Ask us</button>';
 doc.body.appendChild(bar);doc.body.classList.add('cv-hasbar');
 bar.querySelector('#pb_share').onclick=function(){sharePage(p)};bar.querySelector('#pb_edit').onclick=function(){editMe(p)};bar.querySelector('#pb_fix').onclick=function(){openFix(p)}}
/* last step of sign-up: the private link is the only way back in, so it is shown and saved here */
function ready(p,m){mount(p);var base=p.base||6,link=C.privateUrl(p);
 m.set('<div class="cv-ready">&#10003;</div><h3>Your page is live</h3><p class="cv-sub">Share it with people you know. It is the real deal page, with your name on it.</p>'+
 '<p style="text-align:center;font-weight:700;margin:0">'+esc(feeLine(base))+'</p>'+
 (p.team?'<p class="cv-sub" style="text-align:center;margin:4px 0 0">'+esc(p.team.name||'The partner who invited you')+' brought you on, so they take '+p.team.cut+'% of your '+base+'% fee on each sale. Your Tracker shows it.</p>':'')+
 '<div class="cv-keybox"><b>Save your private link</b><span>It opens your Tracker and lets you edit your page. Keep it to yourself. Your share link is different and safe to send.</span>'+
 '<button type="button" class="cv-btn cv-ghost" id="keycopy"><span class="lbl">Copy my private link</span></button></div>'+
 '<button type="button" class="cv-btn cv-huge" id="sh3">'+ic('share',26)+'Share my page</button>'+(p.logo?'':'<button type="button" class="cv-btn cv-ghost" id="cust">Add my logo and colors</button>')+'<button type="button" class="cv-btn cv-link" id="see">See my page</button>','#sh3');
 var cb=m.pop.querySelector('#cust');if(cb)cb.onclick=function(){C.ph&&C.ph('partner_customize_open',{});C.openProfile({mode:'custom',p:p,m:m,onSave:function(p2){p2.team=p.team;C.render(p2);ready(p2,m)},onSkip:function(){ready(p,m)}})};
 m.pop.querySelector('#keycopy').onclick=function(){copyText(link,this)};
 m.pop.querySelector('#sh3').onclick=function(){sharePage(p)};m.pop.querySelector('#see').onclick=m.close}
function cutOf(v,base){base=base||6;v=parseFloat(v);return isFinite(v)?Math.max(0,Math.min(base,Math.round(v*2)/2)):0}
function refLine(r,cut,base){base=base||6;return '<b>'+esc(r.name||'Your inviter')+'</b> takes '+cut+'% of your '+base+'% fee on each sale. You keep '+(Math.round((base-cut)*100)/100)+'%.'}
window.BPP={CUT_DEFAULT:CUT_DEFAULT,cutOf:cutOf,refLine:refLine,EX_IN:EX_IN,feeLine:feeLine,topLine:topLine,feeNote:feeNote,shareText:shareText,sharePage:sharePage,openSheet:openSheet,openFix:openFix,editMe:editMe,mount:mount,ready:ready,copyText:copyText};
})();
