/* Stage scaling for desktop and the swipe rack for phones. */
/* ---- layout ---- */
let ox=0,oy=0,u=1,first=true;
function layout(){const W=innerWidth,H=innerHeight,mob=W<820;document.body.classList.toggle('mob',mob);const c=$('#cap');
 if(!mob){const cv=Math.max(W/1440,H/900);u=900*cv-H>24*cv?H/888:cv;ox=(W-1440*u)/2;oy=(H-900*u)*.4;
  stage.style.transform=`translate(${ox}px,${oy}px) scale(${u})`;$('#track').style.cssText='';$('#rack').style.height='';
  root.style.setProperty('--n',clamp(Math.min(W/1440,H/900),.72,1.35));root.style.setProperty('--nx',Math.max(ox,0)+'px');
  c.style.left=(ox+839*u)+'px';c.style.top=Math.min(oy+845*u,H-54*u)+'px';c.style.transform=`translate(-50%,0) scale(${u})`}
 else{const h=Math.min(.64*H,560);u=Math.max(h/684,W/1148);$('#rack').style.height=684*u+'px';$('#track').style.cssText=`width:${1440*u}px;height:${684*u}px`;
  stage.style.transform=`translate(0,${-200*u}px) scale(${u})`;if(first)$('#rack').scrollLeft=292*u;c.style.cssText=''}
 first=false}
addEventListener('resize',layout);layout();place();idle();
