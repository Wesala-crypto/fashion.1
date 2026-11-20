/* Scrim, product window and keyboard close. */
/* ---- panels ---- */
const scrim=$('#scrim'),pdp=$('#pdp'),bagp=$('#bagp');let openEl=null;
function closeAll(){[pdp,bagp,scrim].forEach(e=>e.classList.remove('open'));document.body.classList.remove('dim');openEl=null}
function show(el){closeAll();el.classList.add('open');scrim.classList.add('open');document.body.classList.add('dim');openEl=el}
scrim.onclick=closeAll;addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
const spriteBox=(d,bw,bh,lim)=>{const s=Math.min(lim*bh/d.fh,lim*bw/d.fw),x=document.createElement('div');x.style.cssText=`width:${d.fw*s}px;height:${d.fh*s}px;background:var(--sheet) ${-d.f[0]*s}px ${-d.f[1]*s}px/${3504*s}px ${2336*s}px no-repeat`;return x};
function openPdp(i){if(busy)return;const d=D[i];let size='M';
 pdp.innerHTML=`<button class="x" aria-label="Close">×</button><div class="ph${i==1||i==6?' alt':''}" id="ph"><div class="v" id="v1"><div class="clip" id="clip"></div></div><div class="v off" id="v2"></div><div class="tg"><button class="on" data-v="1">Modelled</button><button data-v="2">On its hanger</button></div></div>
 <div class="inf"><div class="b">PERLÉ</div><h2>${d.n}</h2><div class="pr">$${d.p}.00</div><p class="d">${d.ds}</p><div class="fs">Find your size</div><div class="sz">${['XS','S','M','L','XL'].map(s=>`<button class="${s=='M'?'on':''}">${s}</button>`).join('')}</div><div class="hint" id="hint">Choose a size to make it yours.</div><button class="pb" id="pb">Put in bag</button><details><summary>Fabric &amp; fit</summary><p>${d.fab}</p></details><div class="lt">Late nights deserve a soft shine.</div></div>`;
 show(pdp);const ph=$('#ph'),Hc=ph.clientHeight,Wc=ph.clientWidth,re=i==1||i==6,cw=re?1024:584,chh=re?2048:1168,sh=Hc/chh,clip=$('#clip');
 clip.style.width=cw*sh+'px';const col=re?(i==1?0:1):i%6,rw=re?0:Math.floor(i/6),sw=re?2048:3504,shh=re?2048:2336;
 clip.style.background=`url(${U(re?A.shot:A.model,sw)}) ${-col*cw*sh}px ${-rw*chh*sh}px/${sw*sh}px ${shh*sh}px no-repeat`;
 const hb=spriteBox(d,Wc,Hc,.8);hb.style.cssText+=';transform:translateY(-24px);filter:drop-shadow(0 10px 14px rgba(96,52,38,.18))';$('#v2').appendChild(hb);
 pdp.querySelectorAll('.tg button').forEach(b=>b.onclick=()=>{pdp.querySelectorAll('.tg button').forEach(x=>x.classList.toggle('on',x===b));$('#v1').classList.toggle('off',b.dataset.v!='1');$('#v2').classList.toggle('off',b.dataset.v!='2')});
 pdp.querySelectorAll('.sz button').forEach(b=>b.onclick=()=>{pdp.querySelectorAll('.sz button').forEach(x=>x.classList.toggle('on',x===b));size=b.textContent});
 pdp.querySelector('.x').onclick=closeAll;pdp.querySelector('.x').focus();
 $('#pb').onclick=()=>{if(!size){$('#hint').classList.add('err');return}const pb=$('#pb');pb.textContent='In your bag ✓';pb.classList.add('ok');setTimeout(()=>{closeAll();fly(i,size)},380)}}
