let openB=null;
const TN={hero:'Шапка страницы (обложка и название)',history:'История (текст)',albums:'Фотоальбомы',videos:'Видео и плейлисты',game:'Мини-игра',note:'Свой текст'};
const colorIn=(o,k,def,cb)=>{const i=h('input',{type:'color'});i.value=o[k]||def;i.oninput=()=>{o[k]=i.value;cb()};return i};
const rangeIn=(o,k,mn,mx,st,u,cb,def)=>{const r=h('input',{type:'range',min:mn,max:mx,step:st});r.value=o[k]??def;const v=h('span',{},r.value+u);r.oninput=()=>{o[k]=+r.value;v.textContent=r.value+u;cb()};return h('div',{class:'row'},r,v)};
const selIn=(o,k,opts,cb,def)=>{const s=h('select',{},opts.map(([v,l])=>h('option',{value:v},l)));s.value=o[k]??def;s.onchange=()=>{o[k]=s.value;cb()};return s};
const txtIn=(o,k,cb)=>{const i=h('input',{type:'text'});i.value=o[k]||'';i.oninput=()=>{o[k]=i.value;cb()};return i};
const chkIn=(o,k,label,cb,def)=>{const c=h('input',{type:'checkbox'});c.checked=o[k]??def;c.onchange=()=>{o[k]=c.checked;cb()};return h('label',{class:'f'},c,' '+label)};
function fontSel(o,k,cb){const names=PG.fontNames();const s=h('select',{},names.map(n=>h('option',{value:n},n)));s.value=names.includes(o[k])?o[k]:'Segoe UI';s.onchange=()=>{o[k]=s.value;cb()};return s}
const clone=x=>JSON.parse(JSON.stringify(x));
const swap=(a,i,d)=>{const j=i+d;if(j<0||j>=a.length)return false;[a[i],a[j]]=[a[j],a[i]];return true};
// ---------- текстовый редактор с форматированием
function richEditor(get,set){
 const wrap=h('div',{class:'rte'}),bar=h('div',{class:'rtb'}),ed=h('div',{class:'rted rich',contenteditable:'true'});
 const init=String(get()||'');ed.innerHTML=PG.clean(/<[a-z!\/]/i.test(init)?init:PG.plain(init));
 const MAP={1:'.7em',2:'.85em',3:'1em',4:'1.25em',5:'1.6em',6:'2.1em',7:'2.8em'};
 const sync=()=>{ed.querySelectorAll('font[size]').forEach(f=>{const s=document.createElement('span');s.style.fontSize=MAP[f.getAttribute('size')]||'1em';while(f.firstChild)s.append(f.firstChild);f.replaceWith(s)});set(ed.innerHTML)};
 const cmd=(c,v)=>{ed.focus();try{document.execCommand('styleWithCSS',false,true)}catch(e){}document.execCommand(c,false,v);sync()};
 const btn=(l,t,fn,st)=>{const b=h('button',{type:'button',class:'rtbtn',title:t||l,onmousedown:e=>e.preventDefault(),onclick:fn},l);if(st)b.style.cssText=st;return b};
 const col=(t,c,def)=>{const i=h('input',{type:'color',title:t,class:'rtcol'});i.value=def;i.onmousedown=()=>{};i.oninput=()=>cmd(c,i.value);return h('span',{class:'rtc'},t+' ',i)};
 const sz=h('select',{class:'rtsel',title:'Размер текста'},h('option',{value:''},'Размер'),[['2','Мелкий'],['3','Обычный'],['4','Крупный'],['5','Очень крупный'],['6','Огромный']].map(([v,l])=>h('option',{value:v},l)));
 sz.onchange=()=>{if(sz.value)cmd('fontSize',sz.value);sz.value=''};
 bar.append(btn('Ж','Жирный',()=>cmd('bold'),'font-weight:700'),btn('К','Курсив',()=>cmd('italic'),'font-style:italic'),btn('Ч','Подчёркнутый',()=>cmd('underline'),'text-decoration:underline'),btn('З','Зачёркнутый',()=>cmd('strikeThrough'),'text-decoration:line-through'),
  btn('Заголовок','Заголовок',()=>cmd('formatBlock','h2')),btn('Подзаголовок','Подзаголовок',()=>cmd('formatBlock','h3')),btn('Абзац','Обычный абзац',()=>cmd('formatBlock','p')),btn('❝ Цитата','Цитата',()=>cmd('formatBlock','blockquote')),
  btn('• Список','Маркированный список',()=>cmd('insertUnorderedList')),btn('1. Список','Нумерованный список',()=>cmd('insertOrderedList')),
  btn('⇤','По левому краю',()=>cmd('justifyLeft')),btn('↔','По центру',()=>cmd('justifyCenter')),btn('⇥','По правому краю',()=>cmd('justifyRight')),btn('☰','По ширине',()=>cmd('justifyFull')),
  sz,col('Цвет','foreColor','#c0392b'),col('Маркер','hiliteColor','#fff2a8'),
  btn('🔗 Ссылка','Вставить ссылку',()=>{const u=prompt('Адрес ссылки (начинается с https://)');if(u)cmd('createLink',u)}),btn('Очистить','Убрать форматирование выделенного',()=>cmd('removeFormat')),btn('↶','Отменить',()=>cmd('undo')),btn('↷','Повторить',()=>cmd('redo')));
 ed.oninput=sync;ed.onblur=sync;
 ed.onpaste=e=>{e.preventDefault();const cd=e.clipboardData,html=cd.getData('text/html'),tx=cd.getData('text/plain');document.execCommand('insertHTML',false,html?PG.clean(html):PG.plain(tx));sync()};
 wrap.append(bar,ed);return wrap}
// ---------- альбомы
function albumsBox(t){const box=h('div');
 const draw=()=>{box.replaceChildren();t.albums=t.albums||[];
  if(!t.albums.length)box.append(h('p',{class:'hint'},'Пока нет альбомов. Нажмите «+ Новый альбом», потом добавьте в него фото.'));
  t.albums.forEach((a,i)=>{a.photos=a.photos||[];
   const mvb=(l,d)=>h('button',{class:'s',type:'button',onclick:()=>{if(swap(t.albums,i,d)){mark();draw()}}},l);
   const cell=(u,k)=>{const b=(l,ti,fn,on)=>{const x=h('button',{type:'button',title:ti,onclick:fn},l);if(on)x.style.background='#f6d88a';return x};
    return h('div',{class:'pc'},h('img',{src:u,alt:''}),h('div',{class:'pcb'},
     b('◀','Сдвинуть влево',()=>{if(swap(a.photos,k,-1)){mark();draw()}}),b('▶','Сдвинуть вправо',()=>{if(swap(a.photos,k,1)){mark();draw()}}),
     b('★','Обложка страницы храма',()=>{t.cover=u;mark();draw()},t.cover===u),b('◎','Обложка этого альбома',()=>{a.cover=u;mark();draw()},a.cover===u),
     b('✕','Убрать фото',()=>{a.photos.splice(k,1);if(a.cover===u)a.cover='';if(t.cover===u)t.cover='';mark();draw()})))};
   box.append(h('div',{class:'bcard'},h('div',{class:'bhead'},h('b',{},'Альбом '+(i+1)+' · '+a.photos.length+' фото'),mvb('↑',-1),mvb('↓',1),
     h('button',{class:'s red',type:'button',onclick:()=>{if(confirm('Удалить альбом «'+(a.title||'')+'»?')){t.albums.splice(i,1);mark();draw()}}},'Удалить альбом')),
    h('div',{class:'bset'},fld('Название альбома',inp(a,'title')),h('div',{class:'phs'},a.photos.map(cell)),
     pick('image/*',true,u=>{a.photos.push(u);mark();draw()},2400),h('p',{class:'hint'},'Вертикальные фото не обрезаются. ★ — обложка страницы храма, ◎ — обложка альбома (по умолчанию первое фото).'))))});
  box.append(h('button',{class:'s',type:'button',onclick:()=>{t.albums.push({id:PG.uid('a'),title:'Новый альбом',photos:[]});mark();draw()}},'+ Новый альбом'))};
 draw();return box}
// ---------- видео и плейлисты
function videosBox(t){const box=h('div');
 const draw=()=>{box.replaceChildren();t.playlists=t.playlists||[];
  if(!t.playlists.length)box.append(h('p',{class:'hint'},'Пока нет видео. Нажмите «+ Новый плейлист» и добавьте в него видео.'));
  t.playlists.forEach((p,i)=>{p.videos=p.videos||[];
   const mvb=(l,d)=>h('button',{class:'s',type:'button',onclick:()=>{if(swap(t.playlists,i,d)){mark();draw()}}},l);
   const rows=p.videos.map((v,k)=>h('div',{class:'vrow'},fld('Название видео',inp(v,'title')),fld('Ссылка (YouTube, Rutube) или загруженный файл',inp(v,'url')),
    h('div',{class:'row'},h('button',{class:'s',type:'button',onclick:()=>{if(swap(p.videos,k,-1)){mark();draw()}}},'↑'),h('button',{class:'s',type:'button',onclick:()=>{if(swap(p.videos,k,1)){mark();draw()}}},'↓'),h('button',{class:'s red',type:'button',onclick:()=>{p.videos.splice(k,1);mark();draw()}},'Убрать видео'))));
   box.append(h('div',{class:'bcard'},h('div',{class:'bhead'},h('b',{},'Плейлист '+(i+1)+' · '+p.videos.length+' видео'),mvb('↑',-1),mvb('↓',1),
     h('button',{class:'s red',type:'button',onclick:()=>{if(confirm('Удалить плейлист «'+(p.title||'')+'»?')){t.playlists.splice(i,1);mark();draw()}}},'Удалить плейлист')),
    h('div',{class:'bset'},fld('Название плейлиста',inp(p,'title')),rows,
     h('button',{class:'s',type:'button',onclick:()=>{p.videos.push({id:PG.uid('v'),title:'',url:''});mark();draw()}},'+ Видео по ссылке'),
     h('div',{style:'margin-top:8px'},'Или файл с компьютера: ',pick('video/*',false,(u,f)=>{p.videos.push({id:PG.uid('v'),title:f.name.replace(/\.[^.]+$/,''),url:u});mark();draw()})))))});
  box.append(h('button',{class:'s',type:'button',onclick:()=>{t.playlists.push({id:PG.uid('p'),title:'Новый плейлист',videos:[]});mark();draw()}},'+ Новый плейлист'))};
 draw();return box}
// ---------- дизайн страницы
function designBox(t){const box=h('div');
 const draw=()=>{box.replaceChildren();const own=!!t.page,P=PG.normPage(t.page||D.pageDefault);
  const prev=h('div',{class:'pgprev'});const redraw=()=>{PG.render(prev,t,D,{preview:true});mark()};
  box.append(h('p',{class:'hint'},own?'У этого храма свой дизайн страницы.':'Сейчас общий дизайн: изменения коснутся всех храмов.'),
   h('div',{class:'row'},own?h('button',{class:'s',type:'button',onclick:()=>{delete t.page;mark();draw()}},'Вернуть общий дизайн'):h('button',{class:'s',type:'button',onclick:()=>{t.page=clone(D.pageDefault);mark();draw()}},'Сделать отдельный дизайн для этого храма'),
    own?h('button',{class:'s',type:'button',onclick:()=>{if(confirm('Сделать этот дизайн общим для ВСЕХ храмов? Личные дизайны других храмов заменятся.')){D.pageDefault=clone(t.page);D.temples.forEach(x=>delete x.page);mark();draw()}}},'Применить ко всем храмам'):'',
    h('button',{class:'s',type:'button',onclick:()=>{if(confirm('Вернуть оформление в стиле ВК? Текущие настройки дизайна этой страницы будут сброшены.')){if(own)t.page=PG.defaultPage();else D.pageDefault=PG.defaultPage();mark();draw()}}},'Сбросить к стилю «как ВК»')),
   prev,pageSettings(P,redraw,draw),blocksList(P,redraw,draw));
  PG.render(prev,t,D,{preview:true})};
 draw();return box}
function pageSettings(P,redraw,draw){P.bg=P.bg||{};P.back=P.back||{};const B=P.bg,K=P.back,sec=h('div',{class:'dz'});
 sec.append(h('h4',{},'Фон страницы'),fld('Тип фона',selIn(B,'type',[['color','Один цвет'],['gradient','Градиент'],['image','Картинка']],()=>{mark();draw()},'color')));
 if(B.type==='image')sec.append(pick('image/*',false,u=>{B.image=u;mark();draw()},2400),fld('Затемнение картинки',rangeIn(B,'dim',0,80,5,'%',redraw,0)));
 else{sec.append(fld('Цвет',colorIn(B,'color','#edeef0',redraw)));if(B.type==='gradient')sec.append(fld('Второй цвет',colorIn(B,'color2','#dfe9d6',redraw)))}
 sec.append(fld('Ширина страницы',rangeIn(P,'width',480,1500,10,' px',redraw,960)),h('h4',{},'Кнопка «назад»'),
  fld('Положение',selIn(K,'pos',[['tl','Сверху слева'],['tc','Сверху по центру'],['tr','Сверху справа'],['bl','Снизу слева'],['bc','Снизу по центру'],['br','Снизу справа']],redraw,'tl')),
  fld('Надпись на кнопке',txtIn(K,'text',redraw)),fld('Цвет кнопки',colorIn(K,'bg','#ffffff',redraw)),fld('Цвет текста кнопки',colorIn(K,'color','#17302f',redraw)),fld('Размер текста кнопки',rangeIn(K,'size',12,30,1,' px',redraw,15)));
 return sec}
function blockSet(b,redraw){const s=b.style=b.style||{},p=h('div',{class:'bset'});
 if(b.type!=='hero')p.append(fld('Заголовок блока (пусто — без заголовка)',txtIn(b,'heading',redraw)));
 if(b.type==='note'){const a=h('textarea',{});a.value='';p.append(h('p',{class:'hint'},'Текст блока:'),richEditor(()=>b.text,v=>{b.text=v;redraw()}))}
 if(b.type==='hero')p.append(chkIn(b,'cover','Показывать обложку (фото храма) на шапке',redraw,true),fld('Высота шапки',rangeIn(b,'height',160,700,10,' px',redraw,320)),fld('Затемнение обложки',rangeIn(b,'dim',0,90,5,'%',redraw,45)),h('p',{class:'hint'},'Обложка выбирается в альбоме значком ★. Подзаголовок вписывается в карточке храма.'));
 else p.append(fld('Ширина блока',selIn(b,'size',[['full','На всю ширину'],['half','Половина (два блока рядом)']],redraw,'full')));
 const bo=h('input',{type:'checkbox'}),bc=h('input',{type:'color'});bo.checked=!!s.bg;bc.value=s.bg||'#ffffff';bo.onchange=()=>{s.bg=bo.checked?bc.value:'';redraw()};bc.oninput=()=>{s.bg=bc.value;bo.checked=true;redraw()};
 p.append(h('h4',{},'Оформление блока'),fld('Шрифт',fontSel(s,'font',redraw)),fld('Размер текста',rangeIn(s,'size',10,90,1,' px',redraw,17)),fld('Цвет текста',colorIn(s,'color','#2b2b2b',redraw)),
  fld('Выравнивание',selIn(s,'align',[['left','По левому краю'],['center','По центру'],['right','По правому краю']],redraw,'left')),
  h('label',{class:'f'},h('span',{},'Фон блока'),h('div',{class:'row'},bo,' включить ',bc)),
  fld('Скругление углов',rangeIn(s,'radius',0,40,1,' px',redraw,12)),fld('Внутренние отступы',rangeIn(s,'pad',0,60,1,' px',redraw,22)),chkIn(s,'shadow','Тонкая рамка и тень (как карточка)',redraw,false));
 if(b.type==='albums')p.append(h('h4',{},'Альбомы'),fld('Показывать',selIn(b,'view',[['covers','Обложками альбомов (по нажатию открывается альбом)'],['inline','Сразу все фото']],()=>{redraw()},'covers')),
  fld('Размер обложек',rangeIn(b,'tile',140,420,10,' px',redraw,220)),fld('Форма обложки',selIn(b,'ratio',[['4/3','Прямоугольник 4:3'],['1/1','Квадрат'],['16/9','Широкая 16:9'],['3/4','Вертикальная 3:4']],redraw,'4/3')),
  fld('Фото на обложке',selIn(b,'coverFit',[['cover','Заполнять рамку (обрезка краёв)'],['contain','Целиком, без обрезки']],redraw,'cover')),fld('Высота рядов при показе «сразу все фото»',rangeIn(b,'rowH',120,400,10,' px',redraw,200)));
 if(b.type==='videos')p.append(h('h4',{},'Видео'),fld('Размер превью',rangeIn(b,'tile',180,480,10,' px',redraw,260)),fld('Расположение',selIn(b,'layout',[['grid','Сеткой'],['row','Лентой в одну строку (листать вбок)']],redraw,'grid')));
 return p}
function blocksList(P,redraw,draw){const wrap=h('div',{class:'dz'},h('h4',{},'Блоки страницы (сверху вниз)'),h('p',{class:'hint'},'Меняйте порядок кнопками ↑ ↓ или перетаскиванием за значок ☰. Блок можно скрыть галочкой.'));
 const bl=P.blocks=P.blocks||[];let dragI=null;
 bl.forEach((b,i)=>{const card=h('div',{class:'bcard'});card.draggable=true;
  card.ondragstart=e=>{dragI=i;e.dataTransfer.effectAllowed='move'};card.ondragover=e=>e.preventDefault();
  card.ondrop=e=>{e.preventDefault();if(dragI===null||dragI===i)return;const[m]=bl.splice(dragI,1);bl.splice(i,0,m);dragI=null;mark();draw()};
  const sh=h('input',{type:'checkbox'});sh.checked=b.show!==false;sh.onchange=()=>{b.show=sh.checked;redraw()};
  const mvb=(l,d)=>h('button',{class:'s',type:'button',onclick:()=>{if(swap(bl,i,d)){mark();draw()}}},l);
  card.append(h('div',{class:'bhead'},h('span',{class:'grip',title:'Перетащите'},'☰'),h('b',{},TN[b.type]||b.type),h('label',{},sh,' показывать'),mvb('↑',-1),mvb('↓',1),
   h('button',{class:'s',type:'button',onclick:()=>{openB=openB===b.id?null:b.id;draw()}},openB===b.id?'Свернуть':'Настроить'),
   b.type==='note'?h('button',{class:'s red',type:'button',onclick:()=>{bl.splice(i,1);mark();draw()}},'Удалить'):''));
  if(openB===b.id)card.append(blockSet(b,redraw));wrap.append(card)});
 wrap.append(h('button',{class:'s',type:'button',onclick:()=>{const id='b'+Date.now();bl.push({id,type:'note',show:true,heading:'Заголовок',text:'<p>Ваш текст</p>',style:{font:'Segoe UI',size:17,color:'#2b2b2b',align:'left',bg:'#ffffff',radius:12,pad:22,shadow:true}});openB=id;mark();draw()}},'+ Добавить свой текстовый блок'));
 return wrap}
function globalFontsBox(){const box=h('section',{},h('h3',{},'Шрифты и размеры надписей на карте'));const redraw=()=>{drawStage();mark()};
 const lf=h('select',{},h('option',{value:''},'Как задано у каждой надписи'),PG.fontNames().map(n=>h('option',{value:n},n)));lf.value=D.labelFont||'';lf.onchange=()=>{D.labelFont=lf.value;redraw()};
 box.append(fld('Шрифт всех надписей',lf),fld('Размер всех надписей',rangeIn(D,'labelScale',50,250,5,' %',redraw,100)),fld('Размер подписей храмов',rangeIn(D,'nameSize',10,40,1,' px',redraw,14)),
  h('h4',{},'Свои шрифты'),h('p',{class:'hint'},'Загрузите файл шрифта (ttf, otf, woff или woff2). Он появится во всех списках шрифтов.'),
  (D.fonts||[]).map((f,i)=>h('div',{class:'row'},h('span',{class:'u',style:`font-family:"${f.name}";font-size:18px;color:#17302f`},f.name+' — Съешь же ещё этих мягких булок'),h('button',{class:'s red',type:'button',onclick:()=>{D.fonts.splice(i,1);PG.loadFonts(D);mark();ed()}},'Убрать'))),
  pick('.ttf,.otf,.woff,.woff2',false,(u,f)=>{D.fonts=D.fonts||[];D.fonts.push({name:f.name.replace(/\.[^.]+$/,'').replace(/["'\\]/g,''),url:u});PG.loadFonts(D);mark();ed()}));
 return box}
