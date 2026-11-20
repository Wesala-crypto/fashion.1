/* Helpers, image URLs, sprite sheet coordinates, shared constants. */
const $=s=>document.querySelector(s),clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,TOUCH=matchMedia('(hover: none)').matches;
const U=(u,w,q=85)=>`https://images.higgs.ai/?default=1&output=webp&url=${encodeURIComponent(u)}&w=${w}&q=${q}`;
const B='https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261114_';
const A={plate:B+'132815_809092cb-b72d-4f4f-b41c-c1d24681acef.png',rail:B+'132917_2cb0e896-2d1e-4f5b-a87a-dfee64cda3d0.png',bag:B+'134055_faa0ec42-af98-4a01-80bc-75e40bdfc913.png',
 fW:B+'132814_4a2e9efb-446a-436a-b8ae-acb9fa4959b8.png',fC:B+'134057_ddd9f637-f6ca-4795-a12f-431d48a5db96.png',sW:B+'142625_d5ac8927-7f44-44ea-8f4f-5f2f0ca3229b.png',sC:B+'142706_368ff44a-f116-4ce4-9dd5-39f17c18c484.png',
 model:B+'132918_bcc5f03d-708a-463b-9f37-f300600b9c7a.png',shot:B+'135549_9e069d90-0840-4913-b437-ab66267d0c68.png'};
const SW=innerWidth<820?2400:3504;
const FR=[[145,43,381,1091,326],[746,42,327,835,904],[1328,42,291,1026,1470],[1877,43,297,1073,2019],[2454,43,281,1093,2582],[3006,42,335,1066,3167],[181,1202,310,849,334],[638,1203,540,1043,906],[1328,1202,295,1046,1470],[1890,1202,279,1062,2023],[2436,1191,317,1056,2531],[2993,1172,349,1093,3164]];
const SD=[[231,56,264,1056,368],[808,54,221,844,915],[1368,54,215,1025,1462],[1925,54,242,1047,2049],[2489,55,227,1048,2595],[3038,54,261,1111,3157],[238,1194,243,913,363],[707,1190,425,1042,917],[1346,1192,243,1034,1464],[1926,1191,232,1038,2038],[2467,1193,268,1040,2597],[3007,1174,312,1074,3170]];
const S=.44,HOOK=291,RL=347,RW=970,FLOOR=838,root=document.documentElement;
const stage=$('#stage'),hitsEl=$('#hits');
document.querySelectorAll('.plate').forEach(i=>i.src=U(A.plate,2048));$('#rail').src=U(A.rail,2048);$('#bagimg').src=U(A.bag,2048);
root.style.setProperty('--sheet',`url(${U(A.fC,SW,92)})`);root.style.setProperty('--side',`url(${U(A.sC,SW,92)})`);
