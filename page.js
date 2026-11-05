(function(){
const SYS={'Georgia':"Georgia,'Times New Roman',serif",'Times New Roman':"'Times New Roman',Times,serif",'Palatino':"'Palatino Linotype',Palatino,'Book Antiqua',serif",'Arial':"Arial,Helvetica,sans-serif",'Verdana':"Verdana,Geneva,sans-serif",'Tahoma':"Tahoma,Geneva,sans-serif",'Trebuchet MS':"'Trebuchet MS',sans-serif",'Segoe UI':"'Segoe UI',system-ui,-apple-system,Roboto,sans-serif",'Courier New':"'Courier New',monospace",'Impact':"Impact,'Arial Black',sans-serif",'Comic Sans MS':"'Comic Sans MS','Comic Sans',cursive",'Brush Script MT':"'Brush Script MT','Segoe Script',cursive"};
const $h=(t,a,...c)=>{const e=document.createElement(t);for(const k in a||{}){if(k.startsWith('on'))e[k]=a[k];else e.setAttribute(k,a[k])}c.flat().forEach(x=>e.append(x));return e};
const css=`.pgbox{position:relative;height:100%;overflow:hidden;font-family:'Segoe UI',system-ui,-apple-system,Roboto,sans-serif}.pgscroll{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}
.pgwrap{margin:0 auto;padding:70px 16px 90px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start}
.pgb{flex:1 1 100%;min-width:0;line-height:1.65}.pgb.half{flex:1 1 calc(50% - 8px);min-width:300px}
.pgb h3.pgh{margin:0 0 14px;font-size:1.05em;font-weight:700;line-height:1.2}.cnt{display:inline-block;margin-left:8px;color:#818c99;font-weight:400}
.pgb.hero{border-radius:12px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:28px 30px;box-sizing:border-box}
.pgb.hero h1{margin:0;font-size:1em;line-height:1.12;font-weight:700}.pgb.hero .sub{opacity:.9;margin-top:6px;font-size:.38em;font-weight:400}
.pgback{position:absolute;z-index:5;border:0;border-radius:999px;padding:.55em 1.1em;font-weight:700;font-family:inherit;cursor:pointer;box-shadow:0 2px 10px #0004}
.pgback.tl{left:14px;top:14px}.pgback.tr{right:14px;top:14px}.pgback.bl{left:14px;bottom:14px}.pgback.br{right:14px;bottom:14px}.pgback.tc{left:50%;top:14px;transform:translateX(-50%)}.pgback.bc{left:50%;bottom:14px;transform:translateX(-50%)}
.pgb iframe.g{width:100%;height:70vh;border:1px solid #0002;border-radius:8px;background:#fff}.pgph{color:#818c99;margin:0}
.rich p{margin:0 0 .9em}.rich h2{font-size:1.45em;margin:.2em 0 .5em;line-height:1.2}.rich h3{font-size:1.2em;margin:.2em 0 .5em}.rich ul,.rich ol{margin:0 0 1em;padding-left:1.4em}.rich a{color:#2a5885}
.rich blockquote{margin:0 0 1em;padding:.4em 1em;border-left:4px solid #c9962b;background:#0000000a;border-radius:0 6px 6px 0}
.alh{margin:4px 0 10px;font-size:1em}.alg{display:grid;gap:14px}.alc{cursor:pointer}
.alim{position:relative;background:#e7e8ec;border-radius:8px;overflow:hidden;box-shadow:0 1px 2px #0002,4px 4px 0 -1px #eceef2,8px 8px 0 -2px #dde0e6;margin:0 8px 10px 0;transition:transform .15s}.alc:hover .alim{transform:translateY(-2px)}
.alim img{position:absolute;inset:0;width:100%;height:100%;display:block}.alt{font-weight:600;line-height:1.25}.als{color:#818c99;font-size:.85em}
.jg{display:flex;flex-wrap:wrap;gap:6px}.jg:after{content:'';flex-grow:999999}.jgi{position:relative;max-width:100%;cursor:zoom-in;border-radius:6px;overflow:hidden;background:#e7e8ec}.jgi i{display:block}.jgi img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.vg{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--tile,260px),1fr));gap:14px;margin-bottom:14px}.vg.row{display:flex;overflow:auto}.vg.row .vc{flex:0 0 var(--tile,260px)}
.vc{cursor:pointer}.vth{position:relative;aspect-ratio:16/9;background:#1b2724;border-radius:8px;overflow:hidden}.vth img,.vth video,.vth .vthn{width:100%;height:100%;object-fit:cover;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}
.vpl{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:#000a}.vpl:after{content:'';position:absolute;left:18px;top:13px;border-left:16px solid #fff;border-top:10px solid transparent;border-bottom:10px solid transparent}.vc:hover .vpl{background:#2a5885}
.vtt{margin-top:6px;font-weight:600;line-height:1.3}
.pgov{position:fixed;inset:0;z-index:4000;background:#edeef0;overflow:auto;color:#222;font-family:'Segoe UI',system-ui,sans-serif}.pgovb{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:14px;padding:10px 16px;background:#fff;box-shadow:0 1px 3px #0002}
.pgbtn{border:0;background:#edeef0;border-radius:999px;padding:9px 16px;font:inherit;font-weight:700;cursor:pointer}.pgovt{font-size:1.15em;font-weight:700}.pgovc{max-width:1200px;margin:0 auto;padding:16px}
.pgvw{position:fixed;inset:0;z-index:5000;background:#000f;display:flex;flex-direction:column;align-items:center;justify-content:center}.vwi{flex:1;width:100%;display:flex;align-items:center;justify-content:center;min-height:0;padding:44px 64px 6px;box-sizing:border-box;touch-action:pan-y}.vwi img{max-width:100%;max-height:100%;object-fit:contain;user-select:none}
.vwc{position:absolute;top:14px;left:16px;color:#fff;font-size:14px;opacity:.85}.vwb{border:0;background:#ffffff26;color:#fff;width:46px;height:46px;border-radius:50%;font-size:26px;line-height:1;cursor:pointer;padding:0}
.vwx{position:absolute;top:10px;right:12px;z-index:3}.vwl,.vwr{position:absolute;top:50%;transform:translateY(-50%)}.vwl{left:10px}.vwr{right:10px}
.vws{display:flex;gap:6px;overflow:auto;max-width:100%;padding:8px 12px 12px;box-sizing:border-box}.vws img{height:54px;width:auto;border-radius:4px;opacity:.5;cursor:pointer;flex:none}.vws img.on{opacity:1;outline:2px solid #fff}
.pgpl{position:fixed;inset:0;z-index:4500;background:#0e1512;color:#fff;overflow:auto;font-family:'Segoe UI',system-ui,sans-serif}.plw{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:18px;max-width:1300px;margin:0 auto;padding:56px 16px 20px}
.plv{aspect-ratio:16/9;background:#000;border-radius:8px;overflow:hidden}.plv iframe,.plv video{width:100%;height:100%;border:0;display:block}.plt{font-size:1.2em;font-weight:700;margin:12px 0}
.plside{background:#18221e;border-radius:8px;padding:10px;max-height:80vh;overflow:auto}.plhd{font-weight:700;padding:4px 6px 10px}.pli{display:flex;gap:10px;align-items:center;padding:6px;border-radius:6px;cursor:pointer;font-size:14px}.pli:hover,.pli.on{background:#ffffff1a}.plth{width:112px;flex:none;aspect-ratio:16/9;border-radius:5px;overflow:hidden;background:#000}.plth img,.plth video,.plth .vthn{width:100%;height:100%;object-fit:cover;display:flex;align-items:center;justify-content:center;font-size:11px}
@media(max-width:860px){.plw{grid-template-columns:1fr}.pgb.hero{padding:18px}}`;
const PG=window.PG={};
(()=>{const s=document.createElement('style');s.textContent=css;document.head.append(s)})();
const uid=p=>p+Math.random().toString(36).slice(2,8);PG.uid=uid;
PG.loadFonts=D=>{let st=document.getElementById('pgfonts');if(!st){st=document.createElement('style');st.id='pgfonts';document.head.append(st)}
 st.textContent=(D.fonts||[]).map(f=>`@font-face{font-family:"${f.name}";src:url("${f.url}")}`).join('');PG._c=(D.fonts||[]).map(f=>f.name)};
PG.fontNames=()=>[...Object.keys(SYS),...(PG._c||[])];
PG.fontStack=n=>SYS[n]||((PG._c||[]).includes(n)?`"${n}",Georgia,serif`:SYS['Segoe UI']);
const ytId=u=>{const m=u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return m?m[1]:null},rtId=u=>{const m=u.match(/rutube\.ru\/(?:video|play\/embed)\/([0-9a-f]{32})/);return m?m[1]:null};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
PG.plain=s=>String(s||'').split(/\n\s*\n/).filter(x=>x.trim()).map(p=>'<p>'+esc(p).replace(/\n/g,'<br>')+'</p>').join('');
const OK=new Set(['B','STRONG','I','EM','U','S','STRIKE','DEL','BR','P','DIV','H2','H3','H4','UL','OL','LI','BLOCKQUOTE','A','SPAN','SMALL','HR','FONT','SUB','SUP']);
const COL=/^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|[a-z]+)$/i;
const STY={'color':v=>COL.test(v),'background-color':v=>COL.test(v),'text-align':v=>/^(left|right|center|justify)$/.test(v),'font-weight':v=>/^(normal|bold|\d+)$/.test(v),'font-style':v=>/^(normal|italic)$/.test(v),'text-decoration':v=>/^(none|underline|line-through|underline line-through)$/.test(v),'text-decoration-line':v=>/^(none|underline|line-through|underline line-through)$/.test(v),'font-size':v=>/^[\d.]+(px|em|rem|%)$/.test(v)};
PG.clean=html=>{const t=document.createElement('template');t.innerHTML=String(html||'');
 const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3)return;if(c.nodeType!==1){c.remove();return}
  if(c.tagName==='SCRIPT'||c.tagName==='STYLE'){c.remove();return}
  if(!OK.has(c.tagName)){walk(c);while(c.firstChild)n.insertBefore(c.firstChild,c);c.remove();return}
  [...c.attributes].forEach(a=>{const k=a.name.toLowerCase();
   if(k==='href'&&c.tagName==='A'){if(!/^(https?:|mailto:|tel:)/i.test(a.value.trim()))c.removeAttribute(a.name)}
   else if(k==='color'&&c.tagName==='FONT'){if(!COL.test(a.value))c.removeAttribute(a.name)}
   else if(k==='style'){const keep=[];a.value.split(';').forEach(d=>{const i=d.indexOf(':');if(i<0)return;const p=d.slice(0,i).trim().toLowerCase(),v=d.slice(i+1).trim();if(STY[p]&&STY[p](v))keep.push(p+':'+v)});keep.length?c.setAttribute('style',keep.join(';')):c.removeAttribute('style')}
   else c.removeAttribute(a.name)});
  if(c.tagName==='A'){c.setAttribute('target','_blank');c.setAttribute('rel','noopener')}
  walk(c)})};
 walk(t.content);return t.innerHTML};
PG.rich=s=>{s=String(s||'');const el=$h('div',{class:'rich'});el.innerHTML=PG.clean(/<[a-z!\/]/i.test(s)?s:PG.plain(s));return el};
PG.hasText=s=>{const d=document.createElement('div');d.innerHTML=PG.clean(/<[a-z!\/]/i.test(String(s||''))?s:PG.plain(s));return(d.textContent||'').trim()!==''};
PG.migrate=t=>{if(!t.albums)t.albums=(t.photos&&t.photos.length)?[{id:uid('a'),title:'Фотографии',photos:t.photos.slice()}]:[];
 if(!t.playlists)t.playlists=(t.video&&String(t.video).trim())?[{id:uid('p'),title:'',videos:[{id:uid('v'),title:'',url:String(t.video).trim()}]}]:[];
 delete t.photos;delete t.video;return t};
// -------- modal stack
const stack=[];const drop=el=>{const i=stack.findIndex(x=>x.el===el);if(i>=0)stack.splice(i,1);el.remove()};
const push=(el,close,key)=>{document.body.append(el);stack.push({el,close,key})};
document.addEventListener('keydown',e=>{const t=stack[stack.length-1];if(!t)return;if(e.key==='Escape'){t.close();e.pgHandled=true}else if(t.key)t.key(e)});
// -------- justified grid (без обрезки)
const AR={};
PG.justified=(list,rowH,click)=>{const box=$h('div',{class:'jg'});
 list.forEach((u,i)=>{const it=$h('div',{class:'jgi',onclick:()=>click(i)}),sp=$h('i'),im=$h('img',{src:u,alt:'',loading:'lazy',draggable:'false'});
  const set=ar=>{it.style.width=(ar*rowH)+'px';it.style.flexGrow=String(ar*100);sp.style.paddingBottom=(100/ar)+'%'};
  set(AR[u]||1.5);im.onload=()=>{if(im.naturalWidth){AR[u]=im.naturalWidth/im.naturalHeight;set(AR[u])}};it.append(sp,im);box.append(it)});return box};
PG.viewer=(list,start)=>{let i=start||0;const ov=$h('div',{class:'pgvw'}),close=()=>drop(ov);
 const img=$h('img',{alt:'',draggable:'false'}),cnt=$h('div',{class:'vwc'});
 const strip=$h('div',{class:'vws'},list.map((u,k)=>$h('img',{src:u,alt:'',onclick:e=>{e.stopPropagation();go(k)}})));
 function go(n){i=(n+list.length)%list.length;img.src=list[i];cnt.textContent=(i+1)+' / '+list.length;[...strip.children].forEach((e,k)=>e.classList.toggle('on',k===i));const c=strip.children[i];if(c&&c.scrollIntoView)c.scrollIntoView({block:'nearest',inline:'center'})}
 const nb=(t,d,c)=>$h('button',{class:'vwb '+c,type:'button',onclick:e=>{e.stopPropagation();go(i+d)}},t);
 const stg=$h('div',{class:'vwi'},img);let x0=null;stg.onpointerdown=e=>{x0=e.clientX};stg.onpointerup=e=>{if(x0===null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50)go(i+(dx<0?1:-1))};
 ov.append(stg,cnt,$h('button',{class:'vwb vwx',type:'button',onclick:e=>{e.stopPropagation();close()}},'×'));
 if(list.length>1)ov.append(nb('‹',-1,'vwl'),nb('›',1,'vwr'),strip);
 ov.onclick=e=>{if(e.target===ov||e.target===stg)close()};
 push(ov,close,e=>{if(e.key==='ArrowLeft')go(i-1);if(e.key==='ArrowRight')go(i+1)});go(i)};
PG.openAlbum=a=>{const ov=$h('div',{class:'pgov'}),close=()=>drop(ov);
 ov.append($h('div',{class:'pgovb'},$h('button',{class:'pgbtn',type:'button',onclick:close},'← Назад'),$h('div',{class:'pgovt'},a.title||'Альбом',$h('span',{class:'cnt'},a.photos.length+' фото'))),
  $h('div',{class:'pgovc'},PG.justified(a.photos,230,i=>PG.viewer(a.photos,i))));push(ov,close)};
PG.albumsEl=(t,b)=>{const als=(t.albums||[]).filter(a=>(a.photos||[]).length);if(!als.length)return null;
 if(b.view==='inline'){const w=$h('div');als.forEach(a=>w.append($h('h4',{class:'alh'},a.title||'Альбом',$h('span',{class:'cnt'},a.photos.length+' фото')),PG.justified(a.photos,b.rowH||200,i=>PG.viewer(a.photos,i)),$h('div',{style:'height:14px'})));return w}
 const g=$h('div',{class:'alg'});g.style.gridTemplateColumns=`repeat(auto-fill,minmax(${b.tile||220}px,1fr))`;
 als.forEach(a=>{const cv=a.cover||a.photos[0],im=$h('div',{class:'alim'}),pic=$h('img',{src:cv,alt:'',loading:'lazy',draggable:'false'});im.style.aspectRatio=b.ratio||'4/3';pic.style.objectFit=b.coverFit||'cover';im.append(pic);
  g.append($h('div',{class:'alc',onclick:()=>PG.openAlbum(a)},im,$h('div',{class:'alt'},a.title||'Альбом'),$h('div',{class:'als'},a.photos.length+' фото')))});return g};
// -------- видео
const thumb=v=>{const u=(v.url||'').trim(),y=ytId(u);if(y)return $h('img',{src:`https://i.ytimg.com/vi/${y}/hqdefault.jpg`,alt:'',loading:'lazy'});
 if(rtId(u))return $h('div',{class:'vthn'},'RUTUBE');const vd=$h('video',{src:u+'#t=0.3',preload:'metadata',playsinline:''});vd.muted=true;return vd};
const playerEl=(v,end)=>{const u=(v.url||'').trim(),y=ytId(u),r=rtId(u);
 if(y)return $h('iframe',{src:`https://www.youtube.com/embed/${y}?autoplay=1&rel=0`,allow:'autoplay; fullscreen; picture-in-picture',allowfullscreen:''});
 if(r)return $h('iframe',{src:`https://rutube.ru/play/embed/${r}`,allow:'autoplay; fullscreen',allowfullscreen:''});
 const vd=$h('video',{src:u,controls:'',autoplay:'',playsinline:''});vd.onended=end;return vd};
PG.player=(pl,start)=>{let i=start||0;const vids=pl.videos,ov=$h('div',{class:'pgpl'}),close=()=>drop(ov);
 const main=$h('div',{class:'plv'}),ttl=$h('div',{class:'plt'}),list=$h('div');
 function go(n){i=(n+vids.length)%vids.length;main.replaceChildren(playerEl(vids[i],()=>{if(vids.length>1)go(i+1)}));ttl.textContent=vids[i].title||pl.title||'Видео';[...list.children].forEach((e,k)=>e.classList.toggle('on',k===i))}
 vids.forEach((v,k)=>{const th=$h('div',{class:'plth'});th.append(thumb(v));list.append($h('div',{class:'pli',onclick:()=>go(k)},th,$h('span',{},v.title||('Видео '+(k+1)))))});
 ov.append($h('button',{class:'vwb vwx',type:'button',onclick:close},'×'),$h('div',{class:'plw'},$h('div',{},main,ttl),$h('div',{class:'plside'},$h('div',{class:'plhd'},pl.title||'Плейлист',$h('span',{class:'cnt'},String(vids.length))),list)));
 push(ov,close);go(i)};
PG.videosEl=(t,b)=>{const pls=(t.playlists||[]).filter(p=>(p.videos||[]).length);if(!pls.length)return null;const w=$h('div');
 pls.forEach(p=>{if(pls.length>1||p.title)w.append($h('h4',{class:'alh'},p.title||'Видео',$h('span',{class:'cnt'},String(p.videos.length))));
  const g=$h('div',{class:'vg'+(b.layout==='row'?' row':'')});g.style.setProperty('--tile',(b.tile||260)+'px');
  p.videos.forEach((v,k)=>{const th=$h('div',{class:'vth'});th.append(thumb(v),$h('span',{class:'vpl'}));g.append($h('div',{class:'vc',onclick:()=>PG.player(p,k)},th,$h('div',{class:'vtt'},v.title||'Видео')))});w.append(g)});return w};
PG.quiz=g=>{const box=$h('div',{class:'pgq'});const qs=g.questions||[];let i=0,score=0;
 const bs='display:block;width:100%;text-align:left;margin:8px 0;padding:12px 14px;font:inherit;border:1.5px solid #2d6a6a;background:#fff;color:#17302f;border-radius:8px;cursor:pointer';
 function show(){box.replaceChildren();
  if(i>=qs.length){const r=$h('button',{type:'button',onclick:()=>{i=0;score=0;show()}},'Сыграть ещё');r.style.cssText=bs+';background:#17302f;color:#fff;text-align:center';box.append($h('h4',{},`Ваш результат: ${score} из ${qs.length}`),r);return}
  const q=qs[i];box.append($h('p',{style:'opacity:.7;margin:0'},`Вопрос ${i+1} из ${qs.length}`),$h('h4',{style:'margin:.3em 0 .6em'},q.q));
  const btns=q.answers.map((a,j)=>{const x=$h('button',{type:'button',onclick:()=>{btns.forEach((e,k)=>{e.disabled=true;if(k===q.correct){e.style.background='#d8efd9';e.style.borderColor='#3b8a40'}});if(j===q.correct)score++;else{btns[j].style.background='#f6d9d5';btns[j].style.borderColor='#b3412f'}
   const nx=$h('button',{type:'button',onclick:()=>{i++;show()}},i+1<qs.length?'Дальше':'Узнать результат');nx.style.cssText=bs+';background:#17302f;color:#fff;text-align:center';box.append(nx)}},a);x.style.cssText=bs;return x});
  box.append(...btns)}
 show();box.style.maxWidth='560px';return box};
PG.defaultPage=()=>{const S=o=>Object.assign({font:'Segoe UI',size:17,color:'#2b2b2b',align:'left',bg:'#ffffff',radius:12,pad:22,shadow:true},o||{});
 return{bg:{type:'color',color:'#edeef0',color2:'#dfe9d6',image:'',dim:0},width:960,back:{pos:'tl',text:'← К карте',bg:'#ffffff',color:'#17302f',size:15},
 blocks:[{id:'b1',type:'hero',show:true,cover:true,height:320,dim:45,style:S({font:'Georgia',size:46,color:'#ffffff',bg:'',pad:0,shadow:false})},
  {id:'b2',type:'history',show:true,heading:'История',style:S()},
  {id:'b3',type:'albums',show:true,heading:'Фотоальбомы',view:'covers',tile:220,ratio:'4/3',coverFit:'cover',style:S()},
  {id:'b4',type:'videos',show:true,heading:'Видео',tile:260,layout:'grid',style:S()},
  {id:'b5',type:'game',show:true,heading:'Мини-игра',style:S()}]}};
PG.normPage=P=>{(P.blocks||[]).forEach(b=>{if(b.type==='title')b.type='hero';if(b.type==='album')b.type='albums';if(b.type==='video')b.type='videos';b.style=b.style||{}});return P};
const bgCss=g=>{g=g||{};if(g.type==='image'&&g.image){const a=(g.dim||0)/100;return`background:linear-gradient(rgba(0,0,0,${a}),rgba(0,0,0,${a})),url("${g.image}") center/cover no-repeat`}
 if(g.type==='gradient')return`background:linear-gradient(160deg,${g.color||'#fff'},${g.color2||'#ddd'})`;return`background:${g.color||'#edeef0'}`};
const sty=s=>`font-family:${PG.fontStack(s.font)};font-size:${s.size||17}px;color:${s.color||'#2b2b2b'};text-align:${s.align||'left'};border-radius:${s.radius||0}px;padding:${s.pad||0}px;${s.bg?'background:'+s.bg+';':''}${s.shadow?'box-shadow:0 0 0 1px #e1e3e6,0 1px 3px #0001;':''}`;
PG.render=(root,t,D,o)=>{o=o||{};PG.migrate(t);const P=PG.normPage(t.page||D.pageDefault||(D.pageDefault=PG.defaultPage()));
 root.replaceChildren();root.classList.add('pgbox');
 const sc=$h('div',{class:'pgscroll'});sc.style.cssText=bgCss(P.bg);
 const wr=$h('div',{class:'pgwrap'});wr.style.maxWidth=(P.width||960)+'px';
 const cover=t.cover||(((t.albums||[]).find(a=>(a.photos||[]).length)||{photos:[]}).photos[0]);
 (P.blocks||[]).forEach(b=>{if(b.show===false)return;const s=b.style;
  if(b.type==='hero'){const bx=$h('section',{class:'pgb hero'}),has=b.cover!==false&&cover;
   bx.style.cssText=sty(Object.assign({},s,{bg:'',shadow:false,color:has?(s.color||'#ffffff'):'#17302f'}));
   if(has){const d=(b.dim??45);bx.style.background=`linear-gradient(rgba(0,0,0,${d/250}),rgba(0,0,0,${d/100})),url("${cover}") center/cover`;bx.style.minHeight=(b.height||320)+'px'}
   bx.append($h('h1',{},t.name));if((t.subtitle||'').trim())bx.append($h('div',{class:'sub'},t.subtitle));wr.append(bx);return}
  let body=null,count=null;
  if(b.type==='history'){if(PG.hasText(t.history))body=PG.rich(t.history)}
  else if(b.type==='note'){if(PG.hasText(b.text))body=PG.rich(b.text)}
  else if(b.type==='albums'){body=PG.albumsEl(t,b);count=(t.albums||[]).filter(a=>(a.photos||[]).length).length}
  else if(b.type==='videos'){body=PG.videosEl(t,b);count=(t.playlists||[]).reduce((n,p)=>n+(p.videos||[]).length,0)}
  else if(b.type==='game'){const g=t.game||{};if(g.type==='quiz'&&(g.questions||[]).length)body=PG.quiz(g);else if(g.type==='html'&&g.url)body=$h('iframe',{class:'g',src:g.url,sandbox:'allow-scripts allow-same-origin'})}
  if(!body){if(o.preview&&(b.type==='albums'||b.type==='videos'))body=$h('p',{class:'pgph'},'(Здесь появится блок, когда вы добавите '+(b.type==='albums'?'фото в альбомы':'видео')+')');else return}
  const box=$h('section',{class:'pgb '+b.type+(b.size==='half'?' half':'')});box.style.cssText=sty(s);
  if(b.heading){const hh=$h('h3',{class:'pgh'},b.heading);if(count)hh.append($h('span',{class:'cnt'},String(count)));box.append(hh)}
  box.append(body);wr.append(box)});
 sc.append(wr);root.append(sc);
 const k=P.back||{};const bb=$h('button',{class:'pgback '+(k.pos||'tl'),type:'button',onclick:()=>o.onBack&&o.onBack()},k.text||'← К карте');
 bb.style.cssText=`background:${k.bg||'#ffffff'};color:${k.color||'#17302f'};font-size:${k.size||15}px`;root.append(bb)};
})();
