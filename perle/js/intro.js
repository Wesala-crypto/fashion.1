/* One-time load animation. */
/* ---- intro ---- */
requestAnimationFrame(()=>{root.classList.remove('js-intro');if(RM)return;const E='cubic-bezier(.2,.8,.2,1)',an=(el,k,d,dl)=>el&&el.animate(k,{duration:d,delay:dl,easing:E,fill:'backwards'});
 an($('#wm'),[{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'none'}],700,60);an($('#pill'),[{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'none'}],700,120);
 const mob=innerWidth<820;[...(mob?$('#copy h1'):$('#hl')).children].forEach((s,i)=>an(s,[{opacity:0,transform:'translateY(38%)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'none',clipPath:'inset(0 0 0 0)'}],950,140+120*i));
 an(mob?$('#copy p'):$('#sub'),[{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],900,380);an($('#bag'),[{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],800,520);an($('#cap'),[{opacity:0},{opacity:1}],700,800)});
setTimeout(()=>root.classList.remove('js-intro'),2600);
