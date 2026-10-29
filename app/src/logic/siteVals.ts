// @ts-nocheck -- view-model ported verbatim from the Claude Design prototype.
// Builds the flat object (`v`) every view renders from.
import { PAGES, META, PARENT, ABOUT_MENU, SUPPORT_MENU, STATIONS, STAKE, LOGOS, CHAPTERS, FILMS, AR, MUSEUM_AXES, MUSEUM_INFO, MUSEUM_RULES, FAQ, MUSEUM_PENDING, NEWS, PRESS, GALLERY_CATS, GALLERY, REPORT_CATS, REPORTS, POINTS } from '../data/site';
import { FORMS } from '../data/portal';
import { DEMO_TOOLS } from '../config';
import { portal } from '../portal/store';

export function siteVals(self) {

    const S=self.state, P=S.page, isDark=S.theme==='dark', desktop=S.w>=1080;
    const pg={}; PAGES.forEach(p=>pg[p]=P===p); pg.inner=P!=='home';pg.innerHero=pg.inner;
    const go={}; PAGES.forEach(p=>go[p]=()=>self.go(p));
    go.news=()=>self.go('media',{mediaTab:1});
    go.verifyReport=()=>self.go('verify',{},'report');
    go.aboutStake=()=>self.go('about',{},'stake');
    go.buyMap=()=>self.go('buy',{},'map');
    go.gallery=()=>self.go('media',{mediaTab:3});
    go.stats=()=>self.go('stats',{dataTab:0});go.reports=()=>self.go('stats',{dataTab:1});go.certs=()=>self.go('stats',{dataTab:2});
    go.museumVisit=()=>self.go('museum',{museumTab:2});
    go.museumAxes=()=>self.go('museum',{museumTab:1});
    go.museumGroups=()=>self.go('museum',{museumTab:3});
    const active=(id)=>id===P;
    const mk=(arr)=>arr.map(([id,label])=>({label,onClick:()=>self.go(id),color:active(id)?'#fff':'rgba(255,255,255,.75)',bg:active(id)?'rgba(255,255,255,.08)':'transparent'}));
    const menuItem=(id,label,children)=>{
      const isActive=children?children.some(c=>c[0]===P):P===id;
      return {label,hasMenu:!!children,open:!!children&&S.menu===id,children:children?mk(children):[],
        color:isActive?'#fff':'rgba(255,255,255,.6)',
        onClick:children?()=>self.setState({menu:S.menu===id?null:id}):()=>self.go(id),
        onEnter:children?()=>self.setState({menu:id}):()=>{},onLeave:children?()=>self.setState({menu:null}):()=>{}};
    };
    const navItems=[menuItem('home','الرئيسية'),menuItem('story','قصة زمزم'),menuItem('aboutm','عن المشروع',ABOUT_MENU),menuItem('media','المركز الإعلامي'),menuItem('support','الدعم والمساعدة',SUPPORT_MENU)];
    const mobileGroups=[{title:'الرئيسية',items:mk([['home','الرئيسية'],['story','قصة زمزم'],['media','المركز الإعلامي']])},{title:'عن المشروع',items:mk(ABOUT_MENU)},{title:'الدعم والمساعدة',items:mk(SUPPORT_MENU)}];
    const showSolid=S.scrolled||S.menu;
    const meta=META[P]||{title:'',tag:'',lead:''};
    const crumbs=[];
    if(PARENT[P]==='about') crumbs.push({label:'عن المشروع',onClick:()=>self.go('about')});
    if(PARENT[P]==='support') crumbs.push({label:'الدعم والمساعدة',onClick:()=>self.go('faq')});
    if(P==='story'&&S.chapter>=0) crumbs.push({label:'قصة زمزم',onClick:()=>self.go('story')});
    if(P==='media'&&S.newsId!=null) crumbs.push({label:'الأخبار',onClick:()=>self.go('media',{mediaTab:1})});
    let metaOut={...meta};
    if(P==='stats') metaOut={...META[['stats','reports','certs'][S.dataTab]||'stats']};
    if(P==='story'&&S.chapter>=0) metaOut={tag:'الفصل '+AR[S.chapter],title:CHAPTERS[S.chapter].title,lead:CHAPTERS[S.chapter].line};
    if(P==='media'&&S.newsId!=null){const n=NEWS[S.newsId]; metaOut={tag:n.cat,title:n.title,lead:n.dateH+' — '+n.dateG};}
    if(P==='order'){const pm=portal.pageMeta(); metaOut={tag:pm.tag,title:pm.title,lead:pm.lead}; if(pm.inAccount) crumbs.push({label:'حسابي',onClick:()=>portal.openProfile()});}

    // errors
    const err={}, sent={}, notSent={};
    Object.keys(FORMS).forEach(k=>{err[k]={};Object.keys(FORMS[k]).forEach(f=>err[k][f]=(S.errors[k]||{})[f]||'');sent[k]=!!S.sent[k];notSent[k]=!S.sent[k];});
    const submit={}; Object.keys(FORMS).forEach(k=>submit[k]=self.submit(k));
    const resetForm={}; Object.keys(FORMS).forEach(k=>resetForm[k]=()=>self.setState(s=>({sent:{...s.sent,[k]:false}})));

    // FAQ
    const toggle=(key)=>()=>self.setState(s=>({open:{...s.open,[key]:!s.open[key]}}));
    const faqItem=(q,a,key)=>({q,a:a||MUSEUM_PENDING,open:!!S.open[key],rot:S.open[key]?'rotate(180deg)':'none',onClick:toggle(key)});
    const topFaq=[[0,0],[0,4],[1,0],[2,0],[2,1]].map(([g,i])=>faqItem(FAQ[g].items[i][0],FAQ[g].items[i][1],'t'+g+'-'+i));
    const q=S.faqQ.trim();
    const faqGroups=FAQ.map((G,gi)=>({title:G.g,items:G.items.map((it,ii)=>faqItem(it[0],it[1],'f'+gi+'-'+ii)).filter(it=>!q||it.q.includes(q)||it.a.includes(q))})).filter((G,gi)=>(S.faqGroup<0||S.faqGroup===gi)&&G.items.length).map(G=>({...G,count:G.items.length}));
    const toAr=(n)=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
    const qCount=(n)=>toAr(n)+' '+(n>=3&&n<=10?'أسئلة':'سؤال');
    const faqTotal=FAQ.reduce((a,G)=>a+G.items.length,0);
    const faqChips=[{...self.chip('الكل',S.faqGroup<0,()=>self.setState({faqGroup:-1})),count:qCount(faqTotal)}].concat(FAQ.map((G,gi)=>({...self.chip(G.g,S.faqGroup===gi,()=>self.setState({faqGroup:gi})),count:qCount(G.items.length)})));

    // story
    const ch=S.chapter>=0?CHAPTERS[S.chapter]:null;
    const chapterCards=CHAPTERS.map((c,i)=>({n:AR[i],title:c.title,line:c.line,onClick:()=>{self.setState({chapter:i});window.scrollTo(0,0);}}));
    const chapterNav=CHAPTERS.map((c,i)=>({n:AR[i],title:c.title,onClick:()=>{self.setState({chapter:i});window.scrollTo(0,0);},color:i===S.chapter?'var(--ink)':'var(--muted)',bg:i===S.chapter?'var(--card)':'transparent',shadow:i===S.chapter?'var(--card-shadow)':'none'}));
    const chapter=ch?{...ch,n:AR[S.chapter],film:!!ch.film,filmTitle:ch.film?FILMS[ch.film].title:'',filmMeta:ch.film?FILMS[ch.film].meta:'',filmBg:ch.film?FILMS[ch.film].poster:'none',playFilm:()=>self.setState({video:ch.film}),blocks:ch.blocks.map(b=>({h:b.h,ps:b.ps||[],quote:b.quote||'',hasQuote:!!b.quote,cite:b.cite||'',headK:(b.head||[''])[0],headV:(b.head||['',''])[1],rows:(b.rows||[]).map(r=>({k:r[0],v:r[1]})),hasRows:!!(b.rows&&b.rows.length),after:b.after||[]}))}:{title:'',line:'',n:'',film:false,blocks:[],sources:''};
    const hasPrev=S.chapter>0, hasNext=S.chapter>=0&&S.chapter<CHAPTERS.length-1;
    const prevCh=hasPrev?CHAPTERS[S.chapter-1].title:'', nextCh=hasNext?CHAPTERS[S.chapter+1].title:'';

    // museum & media tabs
    const tab=(labels,cur,key)=>labels.map((l,i)=>({label:l,onClick:()=>self.setState({[key]:i,newsId:null}),color:i===cur?'var(--ink)':'var(--muted)',bd:i===cur?'var(--gold-3)':'transparent'}));
    const museumTabs=tab(['عن المتحف','محاور العرض','خطط لزيارتك','الزيارات المدرسية والجماعية'],S.museumTab,'museumTab');
    const mt={}; [0,1,2,3].forEach(i=>mt['t'+i]=S.museumTab===i);
    const mediaTabs=tab(['نظرة عامة','الأخبار','البيانات الصحفية','المكتبة المرئية','الهوية والشعار'],S.mediaTab,'mediaTab');
    const md={}; [0,1,2,3,4].forEach(i=>md['t'+i]=S.mediaTab===i&&S.newsId==null); md.detail=S.newsId!=null;

    // news
    const openNews=(id)=>()=>{self.go('media',{mediaTab:1}); setTimeout(()=>self.setState({newsId:id}),0);};
    const newsAll=NEWS.map(n=>({...n,onClick:openNews(n.id)}));
    const nq=S.newsQ.trim();
    const newsList=newsAll.filter(n=>(S.newsYear==='الكل'||n.year===S.newsYear)&&(S.newsCat==='الكل'||n.cat===S.newsCat)&&(!nq||n.title.includes(nq)));
    const newsYearChips=['الكل','٢٠٢٥','٢٠٢٤'].map(y=>self.chip(y,S.newsYear===y,()=>self.setState({newsYear:y})));
    const newsCatChips=['الكل','مبادرات','إنجازات','مستجدّات'].map(c=>self.chip(c,S.newsCat===c,()=>self.setState({newsCat:c})));
    const newsItem=S.newsId!=null?NEWS[S.newsId]:{title:'',body:[],img:'',dateH:'',dateG:'',cat:''};
    const relatedNews=newsAll.filter(n=>n.id!==S.newsId).slice(0,3);

    const reportChips=[self.chip('الكل',S.reportsCat<0,()=>self.setState({reportsCat:-1}))].concat(REPORT_CATS.map((c,i)=>self.chip(c,S.reportsCat===i,()=>self.setState({reportsCat:i}))));
    const reports=REPORTS.filter(r=>S.reportsCat<0||r.cat===S.reportsCat).map(r=>({...r,catLabel:REPORT_CATS[r.cat],onClick:()=>self.toast('بدأ تحميل: '+r.title)}));
    const galleryChips=[self.chip('الكل',S.galleryCat<0,()=>self.setState({galleryCat:-1}))].concat(GALLERY_CATS.map((c,i)=>self.chip(c,S.galleryCat===i,()=>self.setState({galleryCat:i}))));
    const gallery=GALLERY.filter(g=>S.galleryCat<0||g.cat===GALLERY_CATS[S.galleryCat]).map(g=>({...g,isVideo:g.kind==='فيديو',hasImg:!!g.img,noImg:!g.img,bg:g.img||'repeating-linear-gradient(45deg,var(--ph-a) 0 10px,var(--ph-b) 10px 20px)',onClick:g.kind==='فيديو'?()=>self.setState({video:'promo'}):()=>self.toast('بدأ تحميل المادة — '+g.cat)}));
    const press=PRESS.map(p=>({...p,onClick:()=>self.toast('بدأ تحميل البيان')}));

    // map
    const mq=S.mapQ.trim();
    let pts=POINTS.map((p,i)=>({...p,i})).filter(p=>!mq||p.city.includes(mq)||p.name.includes(mq)||p.sub.includes(mq));
    if(S.located) pts=[...pts].sort((a,b)=>parseInt(a.d.replace(/[^\d٠-٩]/g,'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)))-parseInt(b.d.replace(/[^\d٠-٩]/g,'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d))));
    const points=pts.map(p=>({...p,showD:S.located,sel:S.selPoint===p.i,bd:S.selPoint===p.i?'var(--gold-3)':'transparent',pin:S.selPoint===p.i?'#D4A843':'var(--ink)',size:S.selPoint===p.i?'18px':'12px',left:p.x+'%',top:p.y+'%',onClick:()=>self.setState({selPoint:p.i})}));
    const noPoints=points.length===0;

    const homeStats=[{v:'٢٤ ساعة',l:'ضخٌّ متواصل من البئر عبر مضختين'},{v:'٩٩٫٧٧٪',l:'كفاءة التعقيم بالأشعة فوق البنفسجية'},{v:'+٣٠٬٠٠٠',l:'حافظة لماء زمزم في المسجد الحرام وساحاته'},{v:'١٬٠٧٣',l:'صنبوراً لسقيا ماء زمزم في المسجد الحرام والساحات المحيطة'},{v:'+١١٦ ألف',l:'تحليل مخبري خلال عام واحد'}];
    const services=[{n:'٠١',t:'السقيا في الحرمين الشريفين',d:'تعبئة وتوزيع ماء زمزم على قاصدي المسجد الحرام والمسجد النبوي عبر الحافظات والصنابير والعربات',cta:'رحلة ماء زمزم',onClick:()=>self.go('journey')},{n:'٠٢',t:'اقتناء ماء زمزم للأفراد',d:'إتاحة عبوات ماء زمزم للأفراد عبر القنوات الرسمية المعتمدة',cta:'اقتنِ ماء زمزم',onClick:()=>self.go('buy')},{n:'٠٣',t:'طلبات الجهات',d:'استقبال طلبات الجهات الحكومية والخاصة وغير الربحية عبر منصة الطلبات الإلكترونية',cta:'للجهات',onClick:()=>self.go('buy',{},'entities')},{n:'٠٤',t:'المحتوى والمعرفة',d:'مرجع رقمي موثّق عن ماء زمزم تاريخاً وعلماً، متاحٌ للباحثين والإعلاميين والجمهور',cta:'قصة زمزم',onClick:()=>self.go('story')}];
    const stations=STATIONS.map(s=>({...s,hasCallout:!!s.callout,callout:s.callout||{q:'',a:''},hasBullets:!!s.bullets,bullets:s.bullets||[]}));
    const statGroups=[
      {t:'مؤشرات المصدر',items:[{l:'معدل الضخ',v:'١١ – ١٨٫٥',u:'لتراً في الثانية'},{l:'مدة التشغيل اليومي',v:'٢٤',u:'ساعة'},{l:'منسوب المياه',v:'نحو ٣',u:'أمتار عن فتحة البئر'}]},
      {t:'مؤشرات الإنتاج',items:[{l:'كميات المعالجة',v:'',u:''},{l:'كميات التعبئة',v:'',u:''},{l:'عدد العبوات المنتجة',v:'',u:''}]},
      {t:'مؤشرات الجودة',items:[{l:'عدد العينات',v:'١٥٬٩٢٠',u:'عينة — ٢٠٢٤م'},{l:'عدد التحاليل',v:'٨٨٬٨٠٥',u:'تحليلاً — ٢٠٢٤م'},{l:'نسبة المطابقة',v:'',u:''}]},
      {t:'مؤشرات التوزيع',items:[{l:'الحافظات في الحرمين',v:'+٣٧٬٠٠٠',u:'+٣٠٬٠٠٠ بالمسجد الحرام · نحو ٧٬٠٠٠ بالمسجد النبوي'},{l:'الصنابير',v:'١٬٠٧٣',u:'صنبوراً'},{l:'العربات الذكية والحقائب المتنقلة',v:'٨٠ · +٣٠٠',u:'عربة ذكية · حقيبة متنقلة'},{l:'كميات التوزيع الموسمية',v:'',u:''}]},
      {t:'مؤشرات رضا المستفيدين',items:[{l:'رضا المستفيدين',v:'',u:''}]}
    ].map(g=>({...g,items:g.items.map(it=>({...it,has:!!it.v,pending:!it.v}))}));

    const PS=portal.state,acct=portal.account(PS);
    const OX={authLabel:acct?'حسابي':'تسجيل الدخول',acctOpen:!!PS.acctMenu,acctClose:()=>portal.set({acctMenu:false}),
      acctClick:()=>{if(portal.account())portal.set(s=>({acctMenu:!s.acctMenu}));else portal.openLogin();},
      acctProfile:()=>portal.openProfile(),acctOrders:()=>portal.openOrders(),acctLogout:()=>{portal.set({acctMenu:false});portal.logout();},
      openLogin:()=>{self.setState({mobileNav:false});portal.openLogin();}};
    return {
      demoTools:DEMO_TOOLS,
      theme:S.theme,isDark,isLight:!isDark,splash:S.splash,desktop,mobile:!desktop,showHeaderMenu:!desktop||S.w<1280,pg,go,meta:metaOut,crumbs,
      headerBg:(showSolid||!pg.innerHero&&pg.inner)?'rgba(12,13,14,.82)':'linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,0))',headerBlur:(showSolid||!pg.innerHero&&pg.inner)?'blur(14px)':'none',
      navItems,mobileGroups,mobileNavOpen:S.mobileNav,openMobileNav:()=>self.setState({mobileNav:true}),closeMobileNav:()=>self.setState({mobileNav:false}),
      toggleTheme:()=>{const t=isDark?'light':'dark';document.documentElement.setAttribute('data-theme',t);try{localStorage.setItem('zz-theme',t);}catch(e){}self.setState({theme:t});},
      openSteps:()=>self.setState({stepsOpen:true,mobileNav:false}),stepsOpen:S.stepsOpen,stepsToBuy:()=>self.go('buy',{stepsOpen:false}),
      scrollToBuyPack:()=>self.toBuyPack(),
      orderSteps:[{n:'1',ar:'اطلب عبر تطبيق نسك',en:'Order via the Nusuk App'},{n:'2',ar:'استلم طلبك من صالات المغادرة في مطار الملك عبدالعزيز الدولي',en:'Pick up at King Abdulaziz International Airport departure lounges'},{n:'3',ar:'أو استلم من نقاط البيع المعتمدة: كارفور & لولو هايبرماركت',en:'Or collect from authorized sales points: Carrefour & Lulu Hypermarket'}],
      openVideo:()=>self.setState({video:'promo'}),videoOpen:!!S.video,
      film:{hagar:()=>self.setState({video:'hagar'}),promo:()=>self.setState({video:'promo'}),global:()=>self.setState({video:'global'})},
      vid:(()=>{const f=FILMS[S.video]||FILMS.promo;return {...f,embed:!!f.src,noEmbed:!f.src};})(),
      closeModals:()=>self.setState({stepsOpen:false,orderOpen:false,video:null,orderDone:false}),stop:(e)=>e.stopPropagation(),
      qty:S.qty,bottles:S.qty*24,qtyColor:S.qty?'var(--ink)':'var(--muted)',qtyErr:S.qtyErr,
      qtyInc:()=>self.setState(s=>({qty:Math.min(99,s.qty+1),qtyErr:''})),qtyDec:()=>self.setState(s=>({qty:Math.max(0,s.qty-1)})),
      buyNow:()=>{self.setState({qtyErr:''});portal.startOrder(S.qty?{p330:S.qty}:undefined);},
      orderOpen:S.orderOpen,orderPending:!S.orderDone,orderDone:S.orderDone,confirmOrder:()=>self.setState({orderDone:true}),finishOrder:()=>self.setState({orderOpen:false,orderDone:false,qty:0}),
      toast:S.toast,hasToast:!!S.toast,storeToast:()=>self.toast('سيتم تحويلك إلى متجر التطبيقات لتحميل تطبيق نسك'),policyToast:()=>self.toast('الصفحة قيد الإعداد'),
      footerLinks:[['story','قصة زمزم'],['about','عن المشروع'],['journey','رحلة ماء زمزم'],['quality','الجودة والسلامة'],['museum','متحف زمزم'],['verify','التحقق من المنتج الأصلي'],['media','المركز الإعلامي'],['faq','الأسئلة الشائعة'],['contact','تواصل معنا'],['buy','اقتنِ ماء زمزم']].map(([id,label])=>({label,onClick:()=>self.go(id)})),
      homeStats,services,stationCards:STATIONS,stations,stakeholders:STAKE.map(s=>{const [f,k]=LOGOS[s.name];const sz={sq:['76px','76px','68px','64px'],mid:['140px','68px','150px','64px'],wide:['156px','52px','190px','54px']}[k];return {...s,logoL:'assets/logos/'+f+'-on-light.png',logoD:'assets/logos/'+f+'-on-dark.png',logoLBg:"url('assets/logos/"+f+"-on-light.png') center/contain no-repeat",logoDBg:"url('assets/logos/"+f+"-on-dark.png') center/contain no-repeat",mw:sz[0],mh:sz[1],mwA:sz[2],mhA:sz[3]};}),latestNews:newsAll.slice(0,3),topFaq,
      faqGroups,faqChips,faqEmpty:faqGroups.length===0,faqQ:S.faqQ,onFaqQ:(e)=>self.setState({faqQ:e.target.value}),
      chapterCards,chapterNav,chapter,isOverview:S.chapter<0,isChapter:S.chapter>=0,hasPrev,hasNext,prevCh,nextCh,
      prevChapter:()=>{self.setState({chapter:S.chapter-1});window.scrollTo(0,0);},nextChapter:()=>{self.setState({chapter:S.chapter+1});window.scrollTo(0,0);},
      formCols:S.w>=760?'repeat(2,minmax(0,540px))':'minmax(0,1fr)',
      newsCount:toAr(newsList.length)+' '+(newsList.length>=3&&newsList.length<=10?'أخبار':'خبر'),
      copyMediaEmail:()=>{try{navigator.clipboard&&navigator.clipboard.writeText('media@zamzam.sa');}catch(e){} self.toast('تم نسخ البريد الإلكتروني');},
      downloadProfile:()=>self.toast('بدأ تحميل الملف التعريفي لمتحف زمزم'),
      dataTabs:tab(['الأرقام والإحصائيات','التقارير والإصدارات','الاعتمادات والشهادات'],S.dataTab,'dataTab'),
      dt:{t0:P==='stats'&&S.dataTab===0,t1:P==='stats'&&S.dataTab===1,t2:P==='stats'&&S.dataTab===2},
      museumTabs,mt,museumAxes:MUSEUM_AXES.map(([t,d],i)=>({t,d,n:AR[i],onClick:i===7?()=>self.go('journey'):()=>self.go('story',{chapter:i===6?4:i})})),museumInfo:MUSEUM_INFO.map(k=>({k,v:'يُعلن قريباً'})),museumRules:MUSEUM_RULES,
      bookVisit:()=>self.toast('سيُتاح الحجز مع موعد الافتتاح'),
      mediaTabs,md,newsList,newsEmpty:newsList.length===0,newsYearChips,newsCatChips,newsQ:S.newsQ,onNewsQ:(e)=>self.setState({newsQ:e.target.value}),
      newsItem,relatedNews,backToNews:()=>self.setState({newsId:null}),
      share:()=>{try{navigator.clipboard&&navigator.clipboard.writeText(location.href);}catch(e){} self.toast('تم نسخ رابط الخبر');},
      shareX:()=>self.toast('مشاركة عبر X'),shareWa:()=>self.toast('مشاركة عبر واتساب'),
      press,gallery,galleryChips,reports,reportChips,
      downloadLogo:()=>self.toast('بدأ تحميل ملفات الشعار'),downloadGuide:()=>self.toast('بدأ تحميل دليل الاستخدام المختصر'),
      mediaTabNews:()=>self.setState({mediaTab:1}),mediaTabPress:()=>self.setState({mediaTab:2}),mediaTabGallery:()=>self.setState({mediaTab:3}),mediaTabId:()=>self.setState({mediaTab:4}),
      statGroups,
      points,noPoints,mapQ:S.mapQ,onMapQ:(e)=>self.setState({mapQ:e.target.value}),located:S.located,
      locate:()=>{self.setState({located:true,mapQ:'',selPoint:1});self.toast('تم تحديد موقعك — عرض الأقرب أولاً');},
      platform:()=>self.toast('سيتم تحويلك إلى منصة زمزم الإلكترونية'),
      selected:POINTS[S.selPoint]||POINTS[0],
      directions:()=>self.toast('فتح الاتجاهات في تطبيق الخرائط'),
      err,sent,notSent,submit,resetForm,
      ox:OX
    };
}
