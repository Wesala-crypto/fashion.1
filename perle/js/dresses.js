/* Builds the dress sprites, slot layout (place), hover and click handling. */
/* ---- dresses ---- */
const D=DR.map((d,i)=>{const f=FR[i],s=SD[i],row=i<6?0:1,fT=row?1202:42,sT=row?1192:54;
 const k=Math.min(1.42,(FLOOR-HOOK)/(f[3]*S));
 const w=document.createElement('div');w.className='dress';w.style.zIndex=i+1;w.style.setProperty('--k',k);
 const mk=(c,sp,rt)=>{const a=document.createElement('div');a.className='art '+c;const hx=(sp[4]-sp[0])*S,ty=(sp[1]-rt)*S;
  a.style.cssText=`left:${-hx}px;top:${ty}px;width:${sp[2]*S}px;height:${sp[3]*S}px;background-size:${3504*S}px ${2336*S}px;background-position:${-sp[0]*S}px ${-sp[1]*S}px;transform-origin:${hx}px ${-ty}px`;w.appendChild(a)};
 mk('side',s,sT);mk('front',f,fT);stage.insertBefore(w,hitsEl);
 const b=document.createElement('button');b.setAttribute('aria-label',d[0]+', $'+d[1]);hitsEl.appendChild(b);
 return{el:w,hit:b,k,fw:f[2],fh:f[3],cx:0,n:d[0],p:d[1],c:d[2],ds:d[3],fab:d[4],f}});
let hov=-1,gone=new Set(),bagItems=[],busy=false;
const rail=()=>D.map((_,i)=>i).filter(i=>!gone.has(i));
function place(){const r=rail(),n=r.length,h=r.indexOf(hov);let x=RL;
 const G=h>=0?Math.min(D[hov].fw*S*D[hov].k*.8+28,RW*.42):0,st=h<0?RW/n:(n>1?(RW-G)/(n-1):0);
 r.forEach((d,k)=>{const w=k===h?G:st;D[d].cx=x+w/2;D[d].el.style.left=D[d].cx+'px';D[d].hit.style.left=x+'px';D[d].hit.style.width=w+'px';D[d].hit.style.display='';x+=w});
 gone.forEach(i=>D[i].hit.style.display='none')}
function cap(a,b){const c=$('#cap');c.classList.add('swap');setTimeout(()=>{$('#l1').textContent=a;$('#l2').textContent=b;c.classList.remove('swap')},RM?0:110)}
const idle=()=>cap('Find your after-dark slip.',TOUCH?'Tap to browse. Tap again to see it on.':'Hover to browse. Click to see it on.');
function setHover(i){if(hov===i)return;if(hov>=0)D[hov].el.classList.remove('on');hov=i;place();const s=$('#stk');
 if(i<0){s.classList.remove('show');if(!busy)idle();return}
 const d=D[i];d.el.classList.add('on');s.style.left=d.cx+'px';s.style.top=(HOOK+d.fh*S*d.k-18)+'px';s.classList.add('show');cap(d.n+' · $'+d.p,d.c+' / XS – XL')}
D.forEach((d,i)=>{d.hit.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&!busy)setHover(i)});
 d.hit.addEventListener('focus',()=>!busy&&setHover(i));
 d.hit.addEventListener('click',e=>{if(busy)return;if(e.pointerType==='mouse'||e.detail===0&&hov===i)openPdp(i);else if(hov!==i)setHover(i);else openPdp(i)})});
hitsEl.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'&&!busy)setHover(-1)});
$('#stk').onclick=()=>{if(hov>=0)openPdp(hov)};
