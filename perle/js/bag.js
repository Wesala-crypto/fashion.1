/* Put in bag flight, bag counts, toast and the bag panel. */
function counts(){$('#bc').textContent=$('#pc').textContent=bagItems.length}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2600)}
function finish(i,size){const d=D[i];gone.add(i);d.el.classList.add('nt','gone');if(hov>=0)D[hov].el.classList.remove('on');hov=-1;$('#stk').classList.remove('show');
 bagItems.push({i,size});place();requestAnimationFrame(()=>d.el.classList.remove('nt'));counts();busy=false;idle();toast(d.n+' is in your bag.');
 if(!RM){$('#bag').animate([{transform:'none'},{transform:'translateY(4px) scale(1.05,.95)',offset:.35},{transform:'translateY(-2px) scale(.98,1.02)',offset:.7},{transform:'none'}],{duration:420,easing:'ease-out'});$('#bc').animate([{transform:'scale(1)'},{transform:'scale(1.35)'},{transform:'scale(1)'}],380)}}
function fly(i,size){busy=true;const d=D[i];if(hov!==i){setHover(i)}$('#stk').classList.remove('show');
 if(innerWidth<820)$('#rack').scrollTo({left:0,behavior:RM?'auto':'smooth'});
 if(RM){finish(i,size);return}
 const dx=186-d.cx,dy=712-HOOK-d.fh*S*d.k*.16*.55,t=`translate(${dx}px,${dy}px)`;
 setTimeout(()=>d.el.classList.add('flying'),420+820*.55);
 const a=d.el.animate([{transform:'translate(0,0) scale(1)'},{transform:`translate(${.06*dx}px,-34px) scale(.92)`,offset:.2},{transform:`translate(${.45*dx}px,${.2*dy}px) scale(.6)`,offset:.48},{transform:`translate(${.85*dx}px,${.72*dy}px) scale(.3)`,offset:.76},{transform:`${t} scale(.16)`,offset:.9},{transform:`translate(${dx}px,${dy+46}px) scale(.144)`}],{delay:420,duration:820,easing:'cubic-bezier(.45,.05,.55,.95)',fill:'forwards'});
 a.onfinish=()=>{finish(i,size);a.cancel();d.el.classList.remove('flying')}}
function openBag(){if(busy)return;const r=$('#rows');r.innerHTML='';
 if(!bagItems.length)r.innerHTML='<div class="empty">Nothing on hold yet. Pick a dress from the rail.</div>';
 bagItems.forEach((it,k)=>{const d=D[it.i],row=document.createElement('div');row.className='row';const th=document.createElement('div');th.className='th';th.appendChild(spriteBox(d,54,70,1));
  const t=document.createElement('div');t.className='t';t.innerHTML=`<div class="n">${d.n}</div><div class="c">${d.c} · Size ${it.size}</div><u role="button" tabindex="0">Remove</u>`;
  const p=document.createElement('div');p.className='p';p.textContent='$'+d.p;row.append(th,t,p);r.appendChild(row);
  t.querySelector('u').onclick=()=>{bagItems.splice(k,1);gone.delete(it.i);place();counts();openBag()}});
 $('#tot').textContent='$'+bagItems.reduce((s,x)=>s+D[x.i].p,0);show(bagp);$('#bx').focus()}
$('#bag').onclick=$('#pill').onclick=openBag;$('#bx').onclick=closeAll;
