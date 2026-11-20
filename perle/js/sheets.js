/* Cleans white haze and hanger pockets out of the cut-out sprite sheets. */
/* ---- sheet clean-up ---- */
const load=s=>new Promise((res,rej)=>{const i=new Image();i.crossOrigin='anonymous';i.onload=()=>res(i);i.onerror=rej;i.src=s});
async function clean(wu,cu,boxes,front){const[w,c]=await Promise.all([load(wu),load(cu)]);const W=c.naturalWidth,Hh=c.naturalHeight,f=W/3504;
 const mk=i=>{const k=document.createElement('canvas');k.width=W;k.height=Hh;const x=k.getContext('2d',{willReadFrequently:true});x.drawImage(i,0,0,W,Hh);return x};
 const wx=mk(w),cx=mk(c),wd=wx.getImageData(0,0,W,Hh).data,id=cx.getImageData(0,0,W,Hh),cd=id.data;
 boxes.forEach(([x,y,bw,bh])=>{const x0=Math.max(0,Math.floor((x-30)*f)),x1=Math.min(W,Math.ceil((x+bw+30)*f)),y0=Math.max(0,Math.floor((y-60)*f)),y1=Math.min(Hh,Math.ceil((y+.34*bh)*f));
  if(front){const zw=x1-x0,seen=new Uint8Array(zw*(y1-y0)),ok=(a,b)=>{const p=(b*W+a)*4;return wd[p]>=253&&wd[p+1]>=253&&wd[p+2]>=253&&cd[p+3]>0};
   for(let yy=y0;yy<y1;yy++)for(let xx=x0;xx<x1;xx++){const si=(yy-y0)*zw+xx-x0;if(seen[si]||!ok(xx,yy))continue;seen[si]=1;const q=[xx,yy],comp=[];
    while(q.length){const b=q.pop(),a=q.pop();comp.push(a,b);for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const nx=a+dx,ny=b+dy;if(nx<x0||nx>=x1||ny<y0||ny>=y1)continue;const s=(ny-y0)*zw+nx-x0;if(!seen[s]&&ok(nx,ny)){seen[s]=1;q.push(nx,ny)}}}
    if(comp.length/2>250*f*f)for(let k=0;k<comp.length;k+=2)cd[(comp[k+1]*W+comp[k])*4+3]=0}}
  for(let pass=0;pass<4;pass++)for(let yy=y0;yy<y1;yy++)for(let xx=x0;xx<x1;xx++){const p=(yy*W+xx)*4,a=cd[p+3];if(!a)continue;
   const r=wd[p],g=wd[p+1],b=wd[p+2],mn=Math.min(r,g,b),mx=Math.max(r,g,b);if(mn<232||mx-mn>16)continue;
   if(a<225||(xx>0&&!cd[p-1])||(xx<W-1&&!cd[p+7])||(yy>0&&!cd[p-W*4+3])||(yy<Hh-1&&!cd[p+W*4+3]))cd[p+3]=0}});
 cx.putImageData(id,0,0);const cv=cx.canvas;return new Promise(r=>cv.toBlob(b=>r(URL.createObjectURL(b)),'image/webp',.92))}
const ready=Promise.race([Promise.all([clean(U(A.fW,SW,92),U(A.fC,SW,92),FR,true).then(u=>root.style.setProperty('--sheet',`url(${u})`)),
 clean(U(A.sW,SW,92),U(A.sC,SW,92),SD,false).then(u=>root.style.setProperty('--side',`url(${u})`))]).catch(()=>{}),new Promise(r=>setTimeout(r,10000))]);
ready.then(()=>{[U(A.model,3504),U(A.shot,2048)].forEach(s=>{new Image().src=s});root.classList.remove('nod');
 if(!RM)D.forEach((d,i)=>d.el.animate([{opacity:0,transform:'translateY(-14px)'},{opacity:1,transform:'none'}],{duration:760,delay:45*i,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}))});
