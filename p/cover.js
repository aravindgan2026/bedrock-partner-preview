/* White-label cover for the Sussex investor page (real version, 2026-11-20).
   The 404.html shell has already asked partner-public for this link's brand and decrypted the page; it leaves window.__BP.
   Loaded for everyone. Holds NO money-share wording. The public page /<slug> is ALWAYS the visitor view, in every browser:
   it never loads partner.js and never shows edit tools or numbers. Owner tools live only in the portal, p/tracker.html.
   Saves: partner-signup / partner-me / partner-public functions. The browser keeps only the private key and a visitor id. */
(function(){
'use strict';
/* RULE FOR THE "BEFORE YOU CONTINUE" STEP ON A PARTNER PAGE (operator): 'any' = tick at least one box; change to 'both' to require both. */
var ACCRED_RULE='any';
var BP=window.__BP||{},ROOT=BP.ROOT||'/',FN=BP.FN||'https://dtybhuhcuqybjipnfgcg.supabase.co/functions/v1/',DEAL_TAG=BP.deal||'sussex';
var SITE_URL=location.origin+ROOT.replace(/\/$/,''),TERMS_VERSION=BP.tv||'DRAFT-2026-11-20';
var ICONS={"shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><path d=\"m9 12 2 2 4-4\"/>", "eye": "<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "users": "<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>", "dollar": "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>", "pie": "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/>", "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/>", "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/>", "message": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>", "chat": "<path d=\"M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z\"/>", "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2z\"/>", "edit": "<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z\"/>", "check": "<polyline points=\"20 6 9 17 4 12\"/>", "chart": "<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/>"},SCHEMES=[{"id": "orange", "name": "Bedrock orange", "a": "#C43B00", "b": "#FFB088"}, {"id": "navy", "name": "Navy", "a": "#1F3A68", "b": "#A9BFEA"}, {"id": "green", "name": "Forest green", "a": "#1E6B3A", "b": "#A5D9B5"}, {"id": "burgundy", "name": "Burgundy", "a": "#8A1F3D", "b": "#EBB0C0"}, {"id": "charcoal", "name": "Charcoal", "a": "#333B44", "b": "#BFC7CF"}, {"id": "teal", "name": "Teal", "a": "#0B6E75", "b": "#93D6DC"}],ANIMALS=[{"n": "Brave Badger", "e": "🦡"}, {"n": "Lucky Lynx", "e": "🐱"}, {"n": "Happy Hippo", "e": "🦛"}, {"n": "Clever Cougar", "e": "🐈"}, {"n": "Mighty Moose", "e": "🫎"}, {"n": "Swift Swan", "e": "🦢"}, {"n": "Proud Panda", "e": "🐼"}, {"n": "Daring Dolphin", "e": "🐬"}, {"n": "Funky Fox", "e": "🦊"}, {"n": "Kind Koala", "e": "🐨"}, {"n": "Bold Bear", "e": "🐻"}, {"n": "Gentle Giraffe", "e": "🦒"}, {"n": "Peppy Penguin", "e": "🐧"}, {"n": "Royal Raccoon", "e": "🦝"}, {"n": "Wise Wolf", "e": "🐺"}, {"n": "Zesty Zebra", "e": "🦓"}, {"n": "Jolly Jaguar", "e": "🐆"}, {"n": "Tidy Turtle", "e": "🐢"}];
var TB=['Share only with people you know personally.','Only accredited investors may invest. If you are not sure someone is accredited, do not share it with them.','You are responsible for checking your own license and following your own firm’s rules.'];
var doc=document;
function ic(n,s){s=s||22;return '<svg class="cv-ic" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[n]+'</svg>'}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function initials(n){var p=String(n||'').replace(/[^A-Za-z0-9\s]/g,' ').trim().split(/\s+/).filter(function(w){return w&&!/^(llc|inc|the)$/i.test(w)});if(!p.length)return '?';return (p[0][0]+(p.length>1?p[p.length-1][0]:'')).toUpperCase()}
function lsGet(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
function qs(n){try{return new URL(location.href).searchParams.get(n)||''}catch(e){return ''}}
function keyFor(slug){var k=lsGet('bp_key_'+slug,'');if(!k){try{k=localStorage.getItem('bp_key_'+slug)||''}catch(e){}}/* also take a key saved as plain text (Indeed page, 11-21) */return /^[0-9a-f]{64}$/.test(k)?k:''}
function prettyUrl(p){return SITE_URL+'/'+p.slug}
/* the portal login link. It does NOT start with the share link, so the two cannot be mixed up. Never used by a share button. */
function privateUrl(p){var k=keyFor(p.slug);return k?SITE_URL+'/p/tracker.html#t='+k+'&p='+encodeURIComponent(p.slug):''}
function keySlugs(){var a=[];try{for(var i=0;i<localStorage.length;i++){var n=localStorage.key(i)||'';if(n.indexOf('bp_key_')===0&&/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n.slice(7))&&keyFor(n.slice(7)))a.push(n.slice(7))}}catch(e){}return a.sort()}
function signOut(slug){try{localStorage.removeItem('bp_key_'+slug)}catch(e){}var rest=keySlugs();try{if(rest.length)lsSet('bp_me',rest[0]);else localStorage.removeItem('bp_me')}catch(e){}return rest}
function trackerUrl(p){return ROOT+'p/tracker.html?p='+encodeURIComponent(p.slug)}
function roleBadge(r){r=String(r||'').toLowerCase();if(r==='job')return '';/* Indeed sign-ups: no profession badge (operator 11-21) */if(r==='re'||r.indexOf('real')===0)return 'Verified Real Estate Professional';if(r==='fin'||r.indexOf('financ')===0)return 'Verified Finance & Investment Professional';return 'Verified Partner'}
function roleKey(r){r=String(r||'').toLowerCase();if(r==='job')return 'job';if(r==='re'||r.indexOf('real')===0)return 're';if(r==='fin'||r.indexOf('financ')===0)return 'fin';return 'other'}
function lum(h){var m=/^#?([0-9a-f]{6})$/i.exec(h||'');if(!m)return 1;var n=parseInt(m[1],16);var c=[n>>16,(n>>8)&255,n&255].map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function ratio(a,b){var x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
function textOn(h){if(!/^#?[0-9a-f]{6}$/i.test(h||''))return '#ffffff';return ratio(h,'#ffffff')>=4.5?'#ffffff':'#1D1712'}
function hex2(n){return ('0'+Math.max(0,Math.min(255,Math.round(n))).toString(16)).slice(-2)}
/* the real page puts white text on --or, so a light custom color is darkened until white text reads (4.5:1) */
function safeMain(h){if(!/^#?[0-9a-f]{6}$/i.test(h||''))return '#FF4D00';h='#'+h.replace('#','');var n=0;
 while(ratio(h,'#ffffff')<4.5&&n<40){var v=parseInt(h.slice(1),16);h='#'+hex2((v>>16)*.92)+hex2(((v>>8)&255)*.92)+hex2((v&255)*.92);n++}return h}
function rgbOf(h){var v=parseInt(h.slice(1),16);return (v>>16)+','+((v>>8)&255)+','+(v&255)}
function schemeById(id){for(var i=0;i<SCHEMES.length;i++)if(SCHEMES[i].id===id)return SCHEMES[i];return null}
function animalByName(n){n=String(n||'').replace(/\s+\d+$/,'');for(var i=0;i<ANIMALS.length;i++)if(ANIMALS[i].n===n)return ANIMALS[i];return null}
function animalAvatar(a,cls){var i=ANIMALS.indexOf(a);return '<div class="cv-av '+(cls||'')+'" style="background:hsl('+((i*47)%360)+',70%,86%);font-size:22px" aria-hidden="true">'+a.e+'</div>'}
/* ---------- talking to our server ---------- */
var WHY={slow:'Too many tries. Please wait a few minutes and try again.',closed:'Sign-ups for this deal are closed right now.',reserved:'Please use your own company name.',
 contact:'Please add a phone number or email we can reach you at.',email:'That email does not look right.',terms:'Please tick the box to agree to the Partner Terms.',
 type:'That file is not a picture. Please pick a PNG or JPG.',big:'That picture is too big. Please pick a smaller one.',key:'This device is not signed in to your portal. Open your portal login link again.',
 over:'That is more than your whole share. Pick a smaller number.',net:'We could not reach our server. Check your internet and try again.'};
function whyText(r){return (r&&WHY[r.why])||'Something went wrong. Please try again.'}
function api(fn,body){return new Promise(function(res){var done=false,tm=setTimeout(function(){if(!done){done=true;res({ok:false,why:'net'})}},20000);
 try{window.fetch(FN+fn,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json().catch(function(){return {ok:false,why:'err'}})}).then(function(j){if(!done){done=true;clearTimeout(tm);res(j||{ok:false})}},function(){if(!done){done=true;clearTimeout(tm);res({ok:false,why:'net'})}})}
 catch(e){done=true;clearTimeout(tm);res({ok:false,why:'net'})}})}
function me(op,slug,extra){var b={op:op,slug:slug,key:keyFor(slug)};for(var k in extra)b[k]=extra[k];return api('partner-me',b)}
var VIS=(function(){var v=lsGet('bpv','');if(!/^[a-z0-9]{10}$/.test(v)){v='';for(var i=0;i<10;i++)v+='abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random()*36)];lsSet('bpv',v)}return v})();
function ph(e,p){try{if(window.posthog&&window.posthog.capture){var o={flow:'partner'};for(var k in p)o[k]=p[k];window.posthog.capture(e,o)}}catch(x){}}
function track(kind,slug,extra){slug=slug||(CUR&&CUR.slug);if(!slug)return;var b={op:'event',slug:slug,kind:kind,visitor:VIS,own:kind!=='share_tap'&&!!keyFor(slug)};for(var k in extra)b[k]=extra[k];api('partner-public',b)}
/* ---------- popups ---------- */
var MODALS=[];
function modal(html,opt){opt=opt||{};var ov=doc.createElement('div');ov.className=opt.sheet?'cv-sov':'cv-ov';ov.setAttribute('data-cv','1');
 var pop=doc.createElement('div');pop.className=opt.sheet?'cv-sh':'cv-pop';pop.setAttribute('role','dialog');pop.setAttribute('aria-modal','true');if(opt.label)pop.setAttribute('aria-label',opt.label);
 ov.appendChild(pop);doc.body.appendChild(ov);
 var m={ov:ov,pop:pop,prev:doc.activeElement,closed:false};
 m.close=function(){if(m.closed)return;m.closed=true;var i=MODALS.indexOf(m);if(i>=0)MODALS.splice(i,1);if(ov.parentNode)ov.parentNode.removeChild(ov);try{if(m.prev&&m.prev.focus)m.prev.focus()}catch(e){}};
 m.set=function(h,sel){pop.innerHTML='<button type="button" class="cv-xb" aria-label="Close">&times;</button>'+(opt.sheet?h:'<div class="cv-in">'+h+'</div>');pop.querySelector('.cv-xb').onclick=m.close;
  var f=(sel&&pop.querySelector(sel))||pop.querySelector('h3');if(f){if(!/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/.test(f.tagName))f.setAttribute('tabindex','-1');try{f.focus()}catch(e){}}};
 ov.onclick=function(ev){if(ev.target===ov)m.close()};
 MODALS.push(m);m.set(html,opt.focus);return m}
doc.addEventListener('keydown',function(ev){if(!MODALS.length)return;var top=MODALS[MODALS.length-1];
 if(ev.key==='Escape'){ev.preventDefault();top.close()}
 else if(ev.key==='Tab'){var f=[].slice.call(top.pop.querySelectorAll('button,a[href],input,textarea,select')).filter(function(x){return !x.disabled&&!x.hidden&&x.type!=='hidden'});if(!f.length)return;
  var a=doc.activeElement;if(ev.shiftKey&&(a===f[0]||!top.pop.contains(a))){ev.preventDefault();f[f.length-1].focus()}else if(!ev.shiftKey&&(a===f[f.length-1]||!top.pop.contains(a))){ev.preventDefault();f[0].focus()}}});
function fitImage(src,o,cb){var done=false,tm=setTimeout(function(){fin(null)},6000);
 function fin(u,im){if(done)return;done=true;clearTimeout(tm);cb(u&&/^data:image\/(png|jpeg|webp);base64,/.test(u)?u:null,im)}
 var i=new Image();i.crossOrigin='anonymous';i.onerror=function(){fin(null)};
 i.onload=function(){try{var w=i.naturalWidth||i.width,h=i.naturalHeight||i.height;if(!w||!h)return fin(null,i);
  var c=doc.createElement('canvas'),x=c.getContext&&c.getContext('2d');if(!x)return fin(null,i);
  var sx=0,sy=0,sw=w,sh=h,tw,th;
  if(o.square){var s0=Math.min(w,h);sx=(w-s0)/2;sy=(h-s0)/2;sw=sh=s0;tw=th=Math.min(o.max,s0)}else{var k=Math.min(1,o.max/w);tw=Math.max(1,Math.round(w*k));th=Math.max(1,Math.round(h*k))}
  var out=null,t=0;
  while(t<5){c.width=tw;c.height=th;var png=(o.kind==='logo'&&t===0);if(!png){x.fillStyle='#fff';x.fillRect(0,0,tw,th)}
   x.drawImage(i,sx,sy,sw,sh,0,0,tw,th);out=c.toDataURL(png?'image/png':'image/jpeg',0.85);if(out.length<=o.limit)break;
   tw=Math.max(1,Math.round(tw*.75));th=Math.max(1,Math.round(th*.75));t++}
  fin(out.length<=o.limit?out:null,i)}catch(e){fin(null,i)}};
 i.src=src}
function savedScreen(m){m.set('<div class="cv-ready">&#10003;</div><h3>Saved</h3><p class="cv-sub">Your page has its new look. You can see it behind this box.</p><button type="button" class="cv-btn" id="svdone">Done</button>','#svdone');m.pop.querySelector('#svdone').onclick=m.close}
/* ---------- skin + banner + welcome card (the only things the cover adds to the real page) ---------- */
var CUR=null; /* partner shown on this page: {slug,name,company,...} */
function applySkin(p){var r=doc.documentElement.style,b=safeMain(p.brand||'#FF4D00'),b2=/^#[0-9a-f]{6}$/i.test(p.brand2||'')?p.brand2:'#FFB088';
 r.setProperty('--or',b);r.setProperty('--or2',b2);r.setProperty('--orrgb',rgbOf(b))}
function drop(sel){[].slice.call(doc.querySelectorAll(sel)).forEach(function(n){n.parentNode.removeChild(n)})}
function banner(p){drop('.cv-banner');var b=p.brand||'#FF4D00',t=textOn(b),d=doc.createElement('div');d.className='cv-banner';d.setAttribute('data-cv','1');d.style.background=b;d.style.color=t;
 d.innerHTML=(p.logo?'<img class="cv-lg" src="'+esc(p.logo)+'" alt="">':(p.photo?'':'<div class="cv-av" style="color:'+t+'">'+esc(initials(p.company||p.name))+'</div>'))+(p.photo?'<img class="cv-ph" src="'+esc(p.photo)+'" alt="">':'')+
  '<div class="cv-t"><b>'+esc(p.company||p.name)+'</b><span>'+(p.company?'Shared by '+esc(p.name):'Bedrock partner')+'</span></div>';
 doc.body.insertBefore(d,doc.body.firstChild);doc.body.classList.add('cv-has')}
function welcome(p){drop('.cv-welcome');var w=doc.createElement('div');w.className='cv-welcome cv-wx';w.setAttribute('data-cv','1');
 var known=!!(p&&p.name),first=known?String(p.name).trim().split(/\s+/)[0]:'';
 var av=known&&p.photo?'<img src="'+esc(p.photo)+'" alt="">':'<div class="cv-wx-in">'+(known?esc(initials(p.name)):'&#127881;')+'</div>';
 w.innerHTML='<i class="cv-sp s1"></i><i class="cv-sp s2"></i><i class="cv-sp s3"></i>'+
  '<div class="cv-wx-av">'+av+'<span class="cv-wx-wave" aria-hidden="true">&#128075;</span></div>'+
  '<div class="cv-wx-t"><span class="cv-wx-k">Private deal &middot; just for you</span>'+
  '<b class="cv-wx-h">'+(known?esc(first)+' picked this for you!':'A friend picked this for you!')+'</b>'+
  '<span class="cv-wx-s">'+(known?'Welcome! '+esc(p.name)+(p.company?' from '+esc(p.company):'')+' shared this with you.':'Welcome! A friend shared this with you.')+'</span></div>';
 var nav=doc.querySelector('.nav');if(nav&&nav.parentNode)nav.parentNode.insertBefore(w,nav.nextSibling);else doc.body.insertBefore(w,doc.body.firstChild.nextSibling)}
function render(p){CUR=p;applySkin(p);banner(p);welcome(p)}
/* ---------- partner sign-up form (also "Customize" and "Edit my page") ---------- */
function openProfile(o){var cust=o.mode==='custom',edit=o.mode==='edit'||cust,p0=o.p||{},m=o.m||modal('',{label:cust?'Customize your page':edit?'Edit my page':'Sign up'});
 var job=String(p0.role||o.role||'')==='job';/* Indeed: company optional */
 var st={anon:!!p0.anon,logo:p0.logo||'',photo:p0.photo||'',a:p0.brand||SCHEMES[0].a,b:p0.brand2||SCHEMES[0].b,scheme:p0.scheme||'',touched:!!p0.brand,lock:!!p0.logo,newLogo:false,newPhoto:false};
 if(!st.scheme){st.scheme='custom';SCHEMES.forEach(function(s){if(s.a.toLowerCase()===String(st.a).toLowerCase()&&s.b.toLowerCase()===String(st.b).toLowerCase())st.scheme=s.id});if(!edit&&!p0.brand)st.scheme=SCHEMES[0].id}
 var h=(cust?'<h3>Add your logo and colors</h3><p class="cv-sub">Add your logo, photo and colors. You can skip this and do it any time.</p>':edit?'<h3>Edit my page</h3><p class="cv-sub">Change anything you like, then save.</p>':'<p class="cv-inv" id="invl" hidden></p><h3>Make your partner page</h3><p class="cv-sub cv-s1">Free. Takes about a minute.</p>')+
  '<div id="basic"'+(cust?' hidden':'')+'>'+
  (edit?'':'<div class="cv-lbl">I work in</div><div class="cv-schg" role="group" aria-label="I work in" style="margin-bottom:14px"><button type="button" class="cv-lbb" data-role="re" aria-pressed="'+(o.role==='re')+'">Real estate</button><button type="button" class="cv-lbb" data-role="fin" aria-pressed="'+(o.role==='fin')+'">Finance</button></div>')+
  '<label class="cv-lbl">Your name<input type="text" id="f_name" autocomplete="name" maxlength="120"></label>'+
  '<label class="cv-lbl">'+(job?'Company (optional)':'Company')+'<input type="text" id="f_co" autocomplete="organization" maxlength="120"></label>'+
  (edit?'':'<label class="cv-lbl">Phone or email<input type="text" id="f_ct" autocomplete="on" maxlength="200" placeholder="So we can reach you and pay you"></label>')+
  '<div class="cv-ylink" id="ylink"></div>'+
  '<input type="text" id="f_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">'+
  '</div>'+
  '<div id="extra"'+(edit?'':' hidden')+'>'+
  '<div class="cv-bl">Your logo</div><div class="cv-lp"><div id="lpw"></div><div class="cv-bcol"><button type="button" class="cv-btn cv-ghost" id="b_logo">Upload your logo</button><button type="button" class="cv-btn cv-link" id="b_logo_rm">Remove</button></div></div><input type="file" id="f_file" accept="image/png,image/jpeg,image/webp" style="display:none">'+
  '<div class="cv-bl">Your photo</div><div class="cv-lp"><div id="phw"></div><div class="cv-bcol"><button type="button" class="cv-btn cv-ghost" id="b_ph">Add your photo</button><button type="button" class="cv-btn cv-link" id="b_ph_rm">Remove</button></div></div><input type="file" id="f_photo" accept="image/png,image/jpeg,image/webp" style="display:none">'+
  '<div class="cv-bl">Pick your colors</div><div class="cv-schg" id="schg">'+SCHEMES.map(function(s){return '<button type="button" class="cv-sch" data-s="'+s.id+'" aria-pressed="false"><span class="cv-dots"><i style="background:'+s.a+'"></i><i style="background:'+s.b+'"></i></span>'+esc(s.name)+'</button>'}).join('')+
  '<button type="button" class="cv-sch" data-s="custom" aria-pressed="false"><span class="cv-dots"><i style="background:conic-gradient(#e33,#fd3,#3c6,#3cd,#36e,#e3c,#e33)"></i></span>Custom</button></div>'+
  '<div class="cv-cust" id="cust"><label class="cv-cc">Main color<input type="color" id="c_a" value="#C43B00"></label><label class="cv-cc">Light color<input type="color" id="c_b" value="#FFB088"></label></div>'+
  '<div class="cv-tiny" style="margin-top:10px">How the top of your page will look</div><div class="cv-pvs" id="pvs"></div>'+
  '<div class="cv-bl">Show me on the leaderboard as</div><div class="cv-schg" role="group" aria-label="Leaderboard name"><button type="button" class="cv-lbb" id="lb_name" aria-pressed="true">My name</button><button type="button" class="cv-lbb" id="lb_anon" aria-pressed="false">Anonymous</button></div><p class="cv-tiny">Anonymous hides your name and logo from other partners.</p><div class="cv-ylink" id="anonline"></div>'+
  '<div class="cv-bl">Other ways to reach you (optional)</div>'+
  '<label class="cv-lbl">Phone<input type="tel" id="f_ph" autocomplete="tel" maxlength="40"></label>'+
  '<label class="cv-lbl">Email<input type="email" id="f_em" autocomplete="email" maxlength="200"></label>'+
  '<label class="cv-lbl">Website<input type="url" id="f_web" placeholder="yourcompany.com" autocomplete="url" maxlength="200"></label>'+
  '</div>'+
  (edit?'':'<div class="cv-tbox"><ul class="cv-tbul">'+TB.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>'+
  '<label class="cv-chk"><input type="checkbox" id="accept"><span>I agree to the <a class="cv-tl" href="'+ROOT+'p/terms.html" target="_blank" rel="noopener">Partner Terms</a></span></label></div>')+
  '<div class="cv-foot"><p class="cv-err" id="f_err" role="alert"></p><button type="button" class="cv-btn" id="make" disabled>'+(edit?'Save my page':'Make my page')+'</button></div>'+(cust?'<button type="button" class="cv-btn cv-link" id="skip">Skip for now</button>':'');
 m.set(h,cust?'#b_logo':'#f_name');var pop=m.pop,q=function(s){return pop.querySelector(s)};
 var ref=!edit?qs('ref').toLowerCase():'';
 if(ref&&BP.join)api('partner-signup',{op:'invite',deal:DEAL_TAG,ref:ref}).then(function(r){var t=q('#invl');if(!r.ok||!t||m.closed)return;t.innerHTML='&#129309;&nbsp; Invited by <b>'+esc(r.name||'a partner')+'</b>'+(r.company?' from '+esc(r.company):'');t.hidden=false;
  loadPartner(function(P){if(P&&!q('.cv-invc')&&!m.closed){var d=doc.createElement('p');d.className='cv-invc';d.innerHTML=P.refLine(r,r.cut,r.base);t.parentNode.insertBefore(d,t.nextSibling)}})});
 q('#f_name').value=p0.name||'';q('#f_co').value=p0.company||'';q('#f_ph').value=p0.phone||'';q('#f_em').value=p0.email||'';q('#f_web').value=p0.website||'';
 var mySlug=edit?p0.slug:'',busy=false;
 function err(t){q('#f_err').textContent=t||''}
 function ok(){var a=q('#accept');q('#make').disabled=busy||!((edit||o.role)&&q('#f_name').value.trim()&&(job||q('#f_co').value.trim())&&(edit||(a.checked&&q('#f_ct').value.trim().length>=3)))}
 var lt=0,lastCo=null;
 function link(){if(edit){q('#ylink').textContent='Your link:\n'+(SITE_URL+'/'+mySlug).replace(/^https?:\/\//,'');return}
  var co=q('#f_co').value.trim();if(co===lastCo)return;lastCo=co;clearTimeout(lt);if(!co){q('#ylink').textContent='';return}
  lt=setTimeout(function(){api('partner-signup',{op:'slug',deal:DEAL_TAG,company:co}).then(function(r){if(m.closed||q('#f_co').value.trim()!==co)return;
   q('#ylink').textContent=r.ok&&r.slug?'Your link:\n'+(SITE_URL+'/'+r.slug).replace(/^https?:\/\//,''):(r.reserved?WHY.reserved:'')})},400)}
 function pvStrip(){var t=textOn(st.a),co=q('#f_co').value.trim()||(job?q('#f_name').value.trim():'')||'Your company';
  q('#pvs').innerHTML='<div class="cv-pvh" style="background:'+st.a+';color:'+t+'">'+(st.logo?'<img src="'+esc(st.logo)+'" alt="">':'')+(st.photo?'<img class="cv-rd" src="'+esc(st.photo)+'" alt="">':'')+'<b>'+esc(co)+'</b></div><div class="cv-pvb" style="background:'+st.b+'"><span class="cv-pvbtn" style="background:'+st.a+';color:'+t+'">Your button</span></div>'}
 function paint(){q('#lpw').innerHTML=st.logo?'<img id="lpv" src="'+esc(st.logo)+'" alt="Your logo">':'<div id="lpv" class="cv-ph">Logo</div>';
  q('#b_logo').textContent=st.logo?'Change logo':'Upload your logo';q('#b_logo_rm').hidden=!st.logo;
  q('#phw').innerHTML=st.photo?'<img id="phv" class="cv-rd" src="'+esc(st.photo)+'" alt="Your photo">':'<div id="phv" class="cv-ph cv-rd">Photo</div>';
  q('#b_ph').textContent=st.photo?'Change photo':'Add your photo';q('#b_ph_rm').hidden=!st.photo;
  pop.querySelectorAll('.cv-sch').forEach(function(b){var on=b.getAttribute('data-s')===st.scheme;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
  q('#lb_name').classList.toggle('on',!st.anon);q('#lb_name').setAttribute('aria-pressed',st.anon?'false':'true');q('#lb_anon').classList.toggle('on',st.anon);q('#lb_anon').setAttribute('aria-pressed',st.anon?'true':'false');
  var an=st.anon?animalByName(p0.animal):null;q('#anonline').textContent=st.anon?(an?'You will show up as: '+an.e+' '+p0.animal:'You will show up as a cartoon animal.'):'';
  q('#cust').classList.toggle('on',st.scheme==='custom');if(q('#c_a').value!==st.a)q('#c_a').value=st.a;if(q('#c_b').value!==st.b)q('#c_b').value=st.b;pvStrip()}
 ['f_name','f_co','f_ct'].forEach(function(id){var e=q('#'+id);if(e)e.oninput=function(){ok();link();pvStrip();err('')}});
 if(!edit)q('#accept').onchange=ok;
 pop.querySelectorAll('.cv-sch').forEach(function(b){b.onclick=function(){var id=b.getAttribute('data-s');st.touched=true;if(id!=='custom'){var s=schemeById(id);st.a=s.a;st.b=s.b}st.scheme=id;paint()}});
 q('#c_a').oninput=function(){st.a=this.value;st.scheme='custom';st.touched=true;paint()};
 q('#c_b').oninput=function(){st.b=this.value;st.scheme='custom';st.touched=true;paint()};
 function colorsFrom(img){if(st.touched)return;try{var c=doc.createElement('canvas');c.width=c.height=40;var x=c.getContext('2d');x.drawImage(img,0,0,40,40);var d=x.getImageData(0,0,40,40).data,mm={};
  for(var i=0;i<d.length;i+=4){if(d[i+3]<200)continue;var r=d[i],g=d[i+1],b=d[i+2],mx=Math.max(r,g,b),mn=Math.min(r,g,b);if(mx>235&&mn>235)continue;if(mx<30)continue;if(mx-mn<25)continue;
   var k=[r>>5,g>>5,b>>5].join();var oo=mm[k]||(mm[k]={n:0,r:0,g:0,b:0});oo.n++;oo.r+=r;oo.g+=g;oo.b+=b}
  var arr=Object.keys(mm).map(function(k){return mm[k]}).sort(function(a,b){return b.n-a.n});if(!arr.length)return;
  function hx(oo){return '#'+[oo.r,oo.g,oo.b].map(function(v){return ('0'+Math.round(v/oo.n).toString(16)).slice(-2)}).join('')}
  st.a=hx(arr[0]);if(arr[1])st.b=hx(arr[1]);st.scheme='custom';paint()}catch(e){}}
 function loadPic(inp,opt,cb){var f=inp.files&&inp.files[0];if(!f)return;if(f.type&&!/^image\/(png|jpeg|webp)$/.test(f.type)){err(WHY.type);return}
  var fr=new FileReader();fr.onerror=function(){err('We could not read that file.')};
  fr.onload=function(){fitImage(fr.result,opt,function(u,im){if(m.closed)return;if(!u){err('We could not use that picture. Try a smaller one.');return}err('');cb(u,im)})};fr.readAsDataURL(f);try{inp.value=''}catch(e){}}
 q('#b_logo').onclick=function(){q('#f_file').click()};
 q('#f_file').onchange=function(){loadPic(this,{kind:'logo',max:400,limit:200000},function(u,im){st.logo=u;st.newLogo=true;st.lock=true;paint();if(im)colorsFrom(im)})};
 q('#b_logo_rm').onclick=function(){st.logo='';st.newLogo=false;st.lock=true;paint()};
 q('#b_ph').onclick=function(){q('#f_photo').click()};
 q('#f_photo').onchange=function(){loadPic(this,{kind:'photo',square:1,max:300,limit:120000},function(u){st.photo=u;st.newPhoto=true;paint()})};
 q('#b_ph_rm').onclick=function(){st.photo='';st.newPhoto=false;paint()};
 q('#lb_name').onclick=function(){st.anon=false;paint()};q('#lb_anon').onclick=function(){st.anon=true;paint()};
 /* website typed: try the site's icon as a starting logo (only if the browser may turn it into a picture we can save) */
 var tm=0;q('#f_web').oninput=function(){clearTimeout(tm);tm=setTimeout(function(){if(st.lock||m.closed)return;var w=q('#f_web').value.trim(),d='';try{d=new URL(/^https?:/.test(w)?w:'https://'+w).hostname}catch(e){}
  if(!d||d.indexOf('.')<0)return;fitImage('https://www.google.com/s2/favicons?domain='+encodeURIComponent(d)+'&sz=128',{kind:'logo',max:128,limit:200000},function(u,im){if(!u||st.lock||m.closed)return;st.logo=u;st.newLogo=true;paint();if(im)colorsFrom(im)})},500)};
 function setBusy(b,t){busy=b;q('#make').textContent=b?t:(edit?'Save my page':'Make my page');ok()}
 function saveEdit(){var slug=p0.slug,steps=[];
  if(st.newLogo&&st.logo)steps.push(['logo',st.logo]);if(st.newPhoto&&st.photo)steps.push(['photo',st.photo]);
  setBusy(true,'Saving…');
  (function next(){if(m.closed)return;var s=steps.shift();
   if(s){me('upload',slug,{kind:s[0],data:s[1]}).then(function(r){if(!r.ok){setBusy(false);err(whyText(r));return}next()});return}
   var f={name:q('#f_name').value.trim(),company:q('#f_co').value.trim(),email:q('#f_em').value.trim(),phone:q('#f_ph').value.trim(),website:q('#f_web').value.trim(),brand:st.a,brand2:st.b,scheme:st.scheme,anon:st.anon};
   if(!st.logo)f.logo='';if(!st.photo)f.photo='';
   me('edit',slug,{p:f}).then(function(r){setBusy(false);if(!r.ok){err(whyText(r));return}o.onSave(r.p,m)})})()}
 function saveNew(){var ct=q('#f_ct').value.trim(),hp=q('#f_hp').value;
  setBusy(true,'Making your page…');
  api('partner-signup',{op:'signup',deal:DEAL_TAG,role:o.role,name:q('#f_name').value.trim(),company:q('#f_co').value.trim(),contact:ct,terms:true,tv:TERMS_VERSION,ref:qs('ref').toLowerCase(),hp:hp}).then(function(r){
   if(!r.ok||!r.slug){setBusy(false);err(whyText(r));ph('partner_signup_failed',{why:r&&r.why||'none'});return}
   ph('partner_signed_up',{role:o.role,invited:!!qs('ref'),slug:r.slug});
   lsSet('bp_key_'+r.slug,r.key);lsSet('bp_me',r.slug);
   /* the key was just made by our server for this sign-up, so this device is signed in. Owner tools live only in the portal. */
   location.href=ROOT+'p/tracker.html?p='+encodeURIComponent(r.slug)+'&new=1'})}
 q('#make').onclick=function(){if(busy)return;var name=q('#f_name').value.trim(),co=q('#f_co').value.trim();if(!name||(!co&&!job)||(!edit&&!o.role))return;if(!edit&&!q('#accept').checked)return;err('');
  if(edit)saveEdit();else{ph('partner_signup_submit',{role:o.role});saveNew()}};
 if(cust)q('#skip').onclick=function(){ph('partner_customize_skip',{});o.onSkip(m)};
 if(!edit)[].forEach.call(m.pop.querySelectorAll('[data-role]'),function(b){b.onclick=function(){o.role=b.getAttribute('data-role');[].forEach.call(m.pop.querySelectorAll('[data-role]'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});ph('partner_role_pick',{role:o.role});ok()}});
 ok();link();paint()}
/* ---------- shared handle for partner.js and tracker.html ---------- */
window.BPC={keySlugs:keySlugs,signOut:signOut,ph:ph,esc:esc,ic:ic,initials:initials,lsGet:lsGet,lsSet:lsSet,qs:qs,modal:modal,fitImage:fitImage,openProfile:openProfile,savedScreen:savedScreen,render:render,applySkin:applySkin,
 textOn:textOn,prettyUrl:prettyUrl,privateUrl:privateUrl,trackerUrl:trackerUrl,roleBadge:roleBadge,roleKey:roleKey,animalByName:animalByName,animalAvatar:animalAvatar,
 api:api,me:me,keyFor:keyFor,track:track,whyText:whyText,WHY:WHY,SITE_URL:SITE_URL,ROOT:ROOT,DEAL_TAG:DEAL_TAG,TERMS_VERSION:TERMS_VERSION,PRICE:null};
if(window.BP_LIB)return; /* tracker.html wants only the helpers */
/* ---------- partner.js holds the partner-only wording. Here it is fetched ONLY on the sign-up page, for the one "invited by" line. It is never loaded on a partner's public page. ---------- */
function loadPartner(cb){if(window.BPP){cb(window.BPP);return}var s=doc.createElement('script');s.src=ROOT+'p/partner.js?v=cbc6cfe0';s.setAttribute('data-cv','1');s.onload=function(){cb(window.BPP)};s.onerror=function(){cb(null)};doc.body.appendChild(s)}
/* ---------- reserve: partner credit + the "before you continue" step, then the page's own "Hold my spot" box ---------- */
var MAILSEL='a[href^="mailto:ashley"],a[href^="mailto:shravaan"]',PASS=false,REF='';
function mailParts(h){var q=h.split('?')[1]||'',o={};q.split('&').forEach(function(kv){var i=kv.indexOf('=');if(i>0){try{o[kv.slice(0,i)]=decodeURIComponent(kv.slice(i+1))}catch(e){o[kv.slice(0,i)]=kv.slice(i+1)}}});return {to:h.split('?')[0].replace(/^mailto:/,''),subject:o.subject||'',body:o.body||''}}
function mailUrl(parts,subjectExtra,bodyExtra){return 'mailto:'+parts.to+'?subject='+encodeURIComponent(parts.subject+(subjectExtra||''))+'&body='+encodeURIComponent(parts.body+(bodyExtra||''))}
function via(){return CUR&&CUR.company?' (via '+CUR.company+')':''}
function stampCal(){if(!via())return;[].slice.call(doc.querySelectorAll('a[href^="https://calendar.google.com/"]')).forEach(function(a){try{if(a.getAttribute('data-bp-cal'))return;var u=new URL(a.href);u.searchParams.set('text',(u.searchParams.get('text')||'')+via());u.searchParams.set('details',(u.searchParams.get('details')||'')+' Partner link: '+CUR.slug);a.href=u.toString();a.setAttribute('data-bp-cal','1')}catch(e){}})}
function stampMail(extra){if(!via())return;stampCal();[].slice.call(doc.querySelectorAll(MAILSEL)).forEach(function(a){if(!a.getAttribute('data-bp-orig'))a.setAttribute('data-bp-orig',a.getAttribute('href'));
 a.setAttribute('href',mailUrl(mailParts(a.getAttribute('data-bp-orig')),via(),extra||''))})}
function ruleOk(a,k){return ACCRED_RULE==='both'?(a&&k):(a||k)}
function newRef(){var s='pr_';for(var i=0;i<16;i++)s+='0123456789abcdef'[Math.floor(Math.random()*16)];return s}
function gate(a){var pname=CUR&&CUR.name?CUR.name:'',who=pname||'the person who sent me this';track('reserve_open');
 var m=modal('<h3>Before you continue</h3><p class="cv-sub">'+(ACCRED_RULE==='both'?'Tick both boxes to continue.':'Tick at least one box to continue.')+'</p>'+
  '<div class="cv-row"><label class="cv-chk"><input type="checkbox" id="g_acc"><span>I am an accredited investor</span></label><button type="button" class="cv-q" id="g_q" aria-label="What is an accredited investor?" aria-expanded="false"><span>?</span></button></div>'+
  '<p class="cv-hlp" id="g_help" hidden>An accredited investor is a person who meets the SEC’s income or net-worth test.</p>'+
  '<label class="cv-chk"><input type="checkbox" id="g_know"><span>I know '+esc(who)+' personally</span></label>'+
  '<button type="button" class="cv-btn" id="g_go" disabled>Continue</button><button type="button" class="cv-btn cv-link" id="g_no">Cancel</button>','#g_acc');
 var q=function(s){return m.pop.querySelector(s)};
 function chk(){q('#g_go').disabled=!ruleOk(q('#g_acc').checked,q('#g_know').checked)}
 q('#g_acc').onchange=chk;q('#g_know').onchange=chk;
 q('#g_q').onclick=function(){var h=q('#g_help');h.hidden=!h.hidden;this.setAttribute('aria-expanded',h.hidden?'false':'true')};
 q('#g_no').onclick=m.close;
 q('#g_go').onclick=function(){var acc=q('#g_acc').checked,know=q('#g_know').checked;if(!ruleOk(acc,know))return;
  REF=newRef();track('gate_pass',null,{accredited:acc,knows:know,ref:REF});
  stampMail('\n\nAccredited: '+(acc?'yes':'no')+' / Knows '+who+' personally: '+(know?'yes':'no')+' / Ref: '+REF);
  m.close();PASS=true;try{a.click()}finally{PASS=false}}}
/* on window, so it runs before the page's own click counters: they count the tap once (on the replayed click), not twice */
window.addEventListener('click',function(ev){if(PASS)return;var t=ev.target;if(!t||!t.closest)return;var a=t.closest(MAILSEL);if(!a||!CUR||a.closest('#hold'))return;
 ev.preventDefault();ev.stopImmediatePropagation();gate(a)},true);
/* The page's own "Hold my spot" box saves through the hold function. On a partner page we add the partner's link name and the
   reserve ref, so staff can match the reservation to the partner. Any error here falls through to the untouched call. */
(function(){var F=window.fetch;if(!F||F.__bp)return;var W=function(u,o){try{var s=String(u&&u.url||u);
  if(CUR&&/\/functions\/v1\/(hold|vault)$/.test(s)&&o&&typeof o.body==='string'){var b=JSON.parse(o.body);if(!b.code&&REF)b.code=REF;b.src=('p:'+CUR.slug).slice(0,40);
   var o2={};for(var k in o)o2[k]=o[k];o2.body=JSON.stringify(b);var isHold=/hold$/.test(s),ref=REF;
   return F.call(window,u,o2).then(function(r){if(isHold&&r&&r.ok)track('reserve_sent',null,{ref:/^pr_/.test(ref)?ref:undefined});return r})}}catch(e){}
  return F.apply(window,arguments)};W.__bp=1;window.fetch=W})();
/* ---------- decide which mode this page is in ---------- */
/* operator 11-20: partner sign-up stays low-key: no top chip, no big card; one small plain link above the footer to the invite page */
function partnerCta(){drop('.cv-cta,.cv-chip,.cv-plink');
 var c=doc.createElement('p');c.className='cv-plink';c.setAttribute('data-cv','1');
 c.innerHTML='Real estate or finance pro? <a href="'+ROOT+'p/signup.html'+(CUR&&CUR.slug?'?ref='+encodeURIComponent(CUR.slug):'')+'">Join our partner network</a>';c.querySelector('a').onclick=function(){ph('partner_footer_link',{})};
 var f=doc.querySelector('footer');if(f&&f.parentNode)f.parentNode.insertBefore(c,f);else doc.body.appendChild(c)}
function openJoin(){var m=modal('',{label:'Partner sign up'});step2(m,null)}
/* first screen: what this is (video + 3 lines), then one question. Operator 11-20: "wheres the video ... the workflow is confusing" */
function step1(m){var fromInvite=qs('go')==='1';m.set((fromInvite?'<h3>Welcome, partner &#128075;</h3>':'<h3>Become a Bedrock partner</h3><p class="cv-sub">For real estate and finance pros. Free.</p>'+
 '<div class="cv-vid"><video src="'+ROOT+'p/partner-intro-v7.mp4" poster="'+ROOT+'p/partner-poster-v7.jpg" controls playsinline preload="none"></video></div>'+
 '<ol class="cv-how"><li><b>Get your own page</b> for this deal, with your name and logo.</li><li><b>Send it</b> to people you know.</li><li><b>Get paid</b> when they invest. Your partner portal shows how it is going.</li></ol>')+
 '<p class="cv-step">Step 1 of 3</p><p class="cv-ask">What do you do?</p>'+
 '<button type="button" class="cv-btn" data-r="re">I\'m in real estate</button><button type="button" class="cv-btn" data-r="fin">I\'m in finance &amp; investments</button>'+
 '<button type="button" class="cv-btn cv-link" id="inv">I just want to see the deal</button>');var pop=m.pop;
 pop.querySelectorAll('button[data-r]').forEach(function(b){b.onclick=function(){ph('partner_role_pick',{role:b.getAttribute('data-r')});step2(m,b.getAttribute('data-r'))}});
 pop.querySelector('#inv').onclick=function(){ph('partner_join_closed',{});m.close()}}
/* operator 11-20 late: "Move it after sign-up": sign-up goes straight to the ready screen; logo and colors are a button there */
function step2(m,role){openProfile({mode:'new',role:role,m:m})}
(function(){try{if(!doc.querySelector('link[data-cvf]')){var l=doc.createElement('link');l.rel='stylesheet';l.setAttribute('data-cvf','1');l.href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap';doc.head.appendChild(l)}}catch(e){}})();
function previewStrip(){if(!BP.PREVIEW)return;var s=doc.createElement('div');s.setAttribute('data-cv','1');s.className='cv-prevstrip';s.textContent='PREVIEW · test copy · reservations here are not saved';doc.body.insertBefore(s,doc.body.firstChild)}
if(BP.join&&qs('go')!=='1'){location.replace(ROOT+'p/signup.html'+location.search);return}
if(BP.join){try{window.posthog&&window.posthog.register&&window.posthog.register({link_source:'partner_join',is_test:!!BP.PREVIEW})}catch(e){}ph('partner_join_open',{invited:!!qs('ref')});partnerCta();track('signup_open',qs('ref').toLowerCase());openJoin()}
else if(BP.p){render(BP.p);stampMail();partnerCta();
 try{if(window.posthog&&window.posthog.register)window.posthog.register({link_source:'partner',link_code:BP.p.slug,is_test:!!BP.PREVIEW})}catch(e){}
 /* remember which partner sent this visitor (first one wins, 30 days), so a later hold on another Bedrock link for this deal still credits them. Not on the partner's own device. */
 if(!keyFor(BP.p.slug)){var fr=lsGet('bp_from_'+DEAL_TAG,null);if(!fr||!fr.s||!(Date.now()-fr.t<2592e6))lsSet('bp_from_'+DEAL_TAG,{s:BP.p.slug,t:Date.now()})}
 track('page_open');setTimeout(function(){if(!doc.hidden)track('dwell_20s')},20000)}
previewStrip();
})();
