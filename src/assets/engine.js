/* NTG Clarity — site rendering engine (ported from approved design package). Classic script: top-level declarations are global, exactly as in the source. */
const DATA=[
 {type:'project',name:'Royal Commission of Yanbu – Smart City BSS/OSS',client:'Royal Commission of Yanbu',sector:'government',techs:['Angular','Java','Oracle'],locations:['Saudi Arabia'],duration:14,scale:'Enterprise',desc:'End-to-end BSS/OSS for Yanbu smart-city infrastructure covering network inventory, billing and operations.'},
 {type:'project',name:'STC Corporate Procurement System',client:'Saudi Telecom Company',sector:'telecom',techs:['Angular','.NET','SQL Server'],locations:['Saudi Arabia'],duration:9,scale:'Enterprise',desc:'Enterprise procurement system covering vendor management, purchase orders and contract lifecycle automation.'},
 {type:'project',name:'STC Network Operations Center Upgrade',client:'Saudi Telecom Company',sector:'telecom',techs:['Java','Oracle','Angular'],locations:['Saudi Arabia'],duration:12,scale:'Enterprise',desc:'End-to-end upgrade of STC\'s network operations center including BSS/OSS integration, fault management automation and real-time monitoring dashboards.'},
 {type:'project',name:'STC Enterprise Service Management Platform',client:'Saudi Telecom Company',sector:'telecom',techs:['.NET','SQL Server','React'],locations:['Saudi Arabia'],duration:8,scale:'Enterprise',desc:'Unified enterprise service management platform streamlining STC\'s internal IT service workflows, SLA tracking and automated escalation across 12 departments.'},
 {type:'project',name:'Zain Saudi Data Migration',client:'Zain Saudi Arabia',sector:'telecom',techs:['Node.js','Python','Oracle'],locations:['Saudi Arabia'],duration:7,scale:'Enterprise',desc:'Large-scale migration of subscriber, network inventory and billing records to a new BSS platform.'},

 {type:'project',name:'AL Rajhi Capital – ETF Implementation',client:'AL Rajhi Capital',sector:'finance',techs:['Angular','Node.js','PostgreSQL'],locations:['Saudi Arabia'],duration:6,scale:'Enterprise',desc:'Exchange Traded Fund system covering fund setup, NAV calculation and investor subscription management.'},
 {type:'project',name:'AL Rajhi Capital – Power of Attorney Application',client:'AL Rajhi Capital',sector:'finance',techs:['Angular','Node.js','MongoDB'],locations:['Saudi Arabia'],duration:5,scale:'Mid',desc:'Digital Power of Attorney revamp enabling customers to manage portfolios through authorized representatives.'},
 {type:'project',name:'57357 Hospital – SETHY Software',client:'57357 Children Cancer Hospital',sector:'healthcare',techs:['Angular','.NET','SQL Server'],locations:['Egypt'],duration:8,scale:'Mid',desc:'Hospital management software covering patient management, clinical workflows and administrative operations.'},
 {type:'project',name:'Cairo Water Authority – Utility Billing System',client:'Cairo Water Authority',sector:'utilities',techs:['Java','Angular','Oracle'],locations:['Egypt'],duration:10,scale:'Mid',desc:'Utility billing covering meter reading, billing cycles, collections and customer service.'},
 {type:'project',name:'Nokia Siemens Networks – WiMAX Iraq',client:'Nokia Siemens Networks',sector:'telecom',techs:['Java','C++'],locations:['Iraq'],duration:12,scale:'Enterprise',desc:'WiMAX deployment in Sulaymaniyah as subcontractor covering site survey, installation and commissioning.'},
 {type:'project',name:'XO Communications – National Network Build',client:'XO Communications',sector:'telecom',techs:['Java','Python'],locations:['USA'],duration:16,scale:'Enterprise',desc:'National build across 384 US sites including fiber installation, equipment commissioning and testing.'},
 {type:'project',name:'Algeria Telecom – Next-Generation Network',client:'Algeria Telecom',sector:'telecom',techs:['Java','Node.js','Kafka'],locations:['Algeria'],duration:11,scale:'Enterprise',desc:'Next-generation network and BSS/OSS covering planning, deployment and operations support integration.'},
 {type:'project',name:'Equate Petrochemical – Primavera Integration',client:'Equate Petrochemical',sector:'energy',techs:['Oracle','.NET'],locations:['Kuwait'],duration:6,scale:'Mid',desc:'Integration connecting Oracle Primavera with the MTL maintenance platform for Equate operations.'},
 {type:'project',name:'Concordia University – VoIP Implementation',client:'Concordia University',sector:'education',techs:['Cisco','Java'],locations:['Canada'],duration:5,scale:'Mid',desc:'Campus-wide VoIP covering IP PBX deployment, handset rollout and legacy PSTN migration.'},

 {type:'product',name:'NTGGEAR ERP',cat:'Technology',sector:'technology',techs:['Java','Angular'],locations:['Saudi Arabia','Egypt','Canada'],scale:'Enterprise',desc:'Enterprise resource planning platform covering HCM, asset management, finance, procurement and CRM.'},
 {type:'product',name:'Asset Management',cat:'Technology',sector:'technology',techs:['Java','Angular'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Enterprise asset lifecycle management with maintenance scheduling and depreciation tracking.',img:'assets/extracted/x01.jpg'},
 {type:'product',name:'Human Capital Management (HCM)',cat:'Technology',sector:'technology',techs:['Java','Angular'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'End-to-end HCM covering recruitment, onboarding, payroll, performance management and self-service.',img:'assets/extracted/x02.jpg'},
 {type:'product',name:'2MDOpinion',cat:'Healthcare',sector:'healthcare',techs:['Node.js','React'],locations:['Egypt','Canada'],scale:'Mid',desc:'Medical second-opinion platform connecting patients with specialist physicians globally.'},
 {type:'product',name:'HEALN Hub',cat:'Healthcare',sector:'healthcare',techs:['Node.js','Angular'],locations:['Egypt','Saudi Arabia'],scale:'Mid',desc:'Digital healthcare platform for medical tourism, remote consultations and treatment coordination.',img:'assets/extracted/x03.jpg'},
 {type:'product',name:'NOTA Platform',cat:'Healthcare',sector:'healthcare',techs:['Python','Node.js'],locations:['Egypt','Canada'],scale:'Mid',desc:'AI-powered medical scribe documenting clinical encounters and integrating with EMR systems.',img:'assets/extracted/x04.jpg'},
 {type:'product',name:'Advanced Dealer Management (ADM)',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Dealer and distribution management covering onboarding, inventory, sales and performance.'},
 {type:'product',name:'Field Service Management (FSM)',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Field service covering work-order dispatch, technician scheduling, mobile execution and SLA monitoring.'},
 {type:'product',name:'Fleet Management',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia','Egypt'],scale:'Mid',desc:'Real-time vehicle tracking, driver behavior monitoring, fuel and maintenance management.'},
 {type:'product',name:'Last Mile Delivery (LMD)',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Egypt','Saudi Arabia'],scale:'Mid',desc:'Last-mile delivery management with route optimization, driver tracking and delivery confirmation.'},
 {type:'product',name:'NTGapps',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Enterprise app suite for trouble tickets, field service, last-mile delivery, dealer and partner management.'},
 {type:'product',name:'Partner Relationship Management (PRM)',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia'],scale:'Mid',desc:'Partner lifecycle management covering recruitment, training, deal registration and performance tracking.'},
 {type:'product',name:'Trouble Ticket Management (TTM)',cat:'NTGapps',sector:'telecom',techs:['Java','Angular'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Trouble-ticket lifecycle management for telecom operators with SLA tracking and escalation.'},
 {type:'product',name:'Visit Management System (VMS)',cat:'NTGapps',sector:'technology',techs:['Angular','Node.js'],locations:['Saudi Arabia'],scale:'Mid',desc:'Customer-visit planning and execution for sales and field teams with digital reporting and KPIs.'},
 {type:'product',name:'NTG BSS/OSS (NTS)',cat:'Telecom in a Box',sector:'telecom',techs:['Java','Oracle'],locations:['Saudi Arabia','Egypt','Algeria'],scale:'Enterprise',desc:'End-to-end BSS/OSS covering network inventory, physical inventory count, billing and operations.'},
 {type:'product',name:'NTG OSS – Network Inventory (NIS)',cat:'Telecom in a Box',sector:'telecom',techs:['Java','Oracle'],locations:['Saudi Arabia','Egypt'],scale:'Enterprise',desc:'Network inventory for telecom infrastructure — physical and logical inventory with GIS integration.',img:'assets/extracted/x05.jpg'},
 {type:'product',name:'NTG OSS – Physical Inventory Count (PIC)',cat:'Telecom in a Box',sector:'telecom',techs:['Java','Angular'],locations:['Saudi Arabia'],scale:'Mid',desc:'Mobile-enabled physical network inventory counting and reconciliation for field teams.'},
 {type:'product',name:'NTS – Utility Billing System (UBS)',cat:'Utilities',sector:'utilities',techs:['Java','Oracle'],locations:['Egypt','Saudi Arabia'],scale:'Mid',desc:'Utility billing for water, electricity and gas — meter reading, billing, collections and management.'},
 {type:'product',name:'TAB – The Agent Builder',cat:'AI',sector:'technology',techs:['Python','Node.js'],locations:['Egypt','Canada'],scale:'Mid',desc:'AI support agent automating interactions across WhatsApp, web chat, Messenger and Instagram.'},
 {type:'product',name:'Testflair',cat:'AI',sector:'technology',techs:['Python','Java'],locations:['Egypt','Canada'],scale:'Mid',desc:'AI test automation generating test cases from requirements documents, cutting manual QA effort.'},
 {type:'product',name:'Markatty',cat:'eCommerce',sector:'technology',techs:['Node.js','React'],locations:['Egypt','Saudi Arabia'],scale:'Small',desc:'eCommerce store builder with integrated payment, inventory and marketing tools.'},

 {type:'service',name:'Data Migration',sector:'cross_sector',techs:['Oracle','SQL Server','Python'],locations:['Saudi Arabia','Egypt','Canada'],tagline:'Large-scale migration projects — assessed, planned, executed end-to-end.',desc:'NTG has undertaken numerous large-scale migration projects for major finance and telecom companies. Our migration services not only help to move data between systems, but also assess, plan, and execute migration projects end-to-end.'},
 {type:'service',name:'Solution Development',sector:'cross_sector',techs:['Java','.NET','Angular'],locations:['Saudi Arabia','Egypt'],tagline:'30+ years of expertise in deploying effective customized solutions.',desc:'We are a team with 30+ years of expertise in developing and deploying effective customized solutions. Our team has experience and credentials in designing applications, websites, and mobile & tablet apps.'},
 {type:'service',name:'System Integration',sector:'cross_sector',techs:['Node.js','Java','.NET'],locations:['Saudi Arabia','Egypt'],tagline:'30+ years integrating information systems across industries.',desc:'NTG has more than 30 years of experience in integrating information systems including designing and building customized architectures or applications and integrating with new or existing hardware.'},
 {type:'service',name:'Nearshore Center of Excellence',sector:'cross_sector',techs:['Java','Angular','Node.js'],locations:['Saudi Arabia'],tagline:'Delivery closer to your market through shared time zones.',desc:'Bring delivery closer to your market through shared time zones, cultural alignment, and dedicated local teams that operate as part of your organization.'},
 {type:'service',name:'Offshore Development Center (ODC)',sector:'cross_sector',techs:['Java','Angular','Node.js'],locations:['Egypt'],tagline:'Dedicated offshore teams, fully aligned with your standards.',desc:'Dedicated offshore teams operate fully aligned with your governance, technology stack, culture, and performance standards. Build cost-efficient, high-performance teams that work as a seamless extension of your organization from day one.'},
 {type:'service',name:'Outsourcing and Offshoring',sector:'cross_sector',techs:['Java','.NET'],locations:['Saudi Arabia','Egypt'],tagline:'Increase margins by outsourcing non-core functions.',desc:'Increase margins and focus on your business by outsourcing non-core functions like software development, engineering, and operations. NTG provides fully managed teams with proven delivery records.'},
 {type:'service',name:'Testing as a Service (TaaS)',sector:'cross_sector',techs:['Python','Java'],locations:['Saudi Arabia','Egypt'],tagline:'Outsource all types of software testing, so your developers stay focused.',desc:'At NTG, we provide Testing as a Service (TaaS) to outsource all types of software testing, letting your developers focus on their roadmap. We cover functional, performance, security and automated testing.'},
 {type:'service',name:'Training',sector:'cross_sector',techs:['Java'],locations:['Saudi Arabia','Egypt'],tagline:'Certified instructors preparing your team for recognized industry exams.',desc:'NTG Clarity\'s certified instructors will prepare you or your team for industry recognized network certification exams and provide training on most desktop applications.'},
 {type:'service',name:'Consulting',sector:'cross_sector',techs:['Java','.NET'],locations:['Saudi Arabia','Egypt'],tagline:'Strategic and investment decisions that improve company performance.',desc:'Our consultants help organizations with major strategic and investment decisions to improve their company\'s performance. NTG brings sector-specific expertise across telecom, finance, healthcare and government.'},
 {type:'service',name:'SAP',sector:'cross_sector',techs:['SAP','Java'],locations:['Saudi Arabia','Egypt','Canada'],tagline:'S/4HANA and SAP SuccessFactors — designed, implemented and optimized.',desc:'With a deep focus on SAP\'s powerful solutions, particularly S4Hana (on-premise & Cloud version) and SAP SuccessFactors, our team of highly skilled professionals is ready to design, implement, and optimize SAP systems across all industries.'},
 {type:'service',name:'NTG Academy',sector:'education',techs:['Python','Java'],locations:['Saudi Arabia','Egypt','Canada'],tagline:'Youth education and employment opportunities for the modern job market.',desc:'We provide youth education and employment opportunities tailored to the modern job market through the NTG Academies, School, and on-the-job training programs.'},
 {type:'service',name:'NTG AI',sector:'technology',techs:['Python','Azure'],locations:['Saudi Arabia','Egypt','Canada'],tagline:'AI-powered solutions for enterprise automation and intelligence.',desc:'NTG AI delivers artificial intelligence and machine learning solutions that automate complex workflows, enhance decision-making, and unlock new value across enterprise operations.'},
 {type:'service',name:'Digital Transformation',sector:'cross_sector',techs:['Java','.NET','Angular'],locations:['Saudi Arabia','Egypt'],tagline:'Integrate digital technology into every area of your business.',desc:'NTG empowers clients to integrate digital technology into all areas of their business. We provide teams of senior developers to update and re-imagine systems along with their web and mobile interfaces.lysis and redesign using eTOM, ISO and ITIL frameworks to eliminate inefficiencies.'},

 {type:'client',name:'Saudi Telecom Company',sector:'telecom',locations:['Saudi Arabia'],logo:'assets/extracted/x06.png'},
 {type:'client',name:'Zain Saudi Arabia',sector:'telecom',locations:['Saudi Arabia'],logo:'assets/extracted/x07.png'},
 {type:'client',name:'Mobily',sector:'telecom',locations:['Saudi Arabia'],logo:'assets/extracted/x08.jpg'},
 {type:'client',name:'Royal Commission of Yanbu',sector:'government',locations:['Saudi Arabia'],logo:'assets/extracted/x09.png'},
 {type:'client',name:'National Water Company',sector:'utilities',locations:['Saudi Arabia'],logo:'assets/extracted/x10.jpg'},
 {type:'client',name:'Cairo Water Authority',sector:'utilities',locations:['Egypt']},
 {type:'client',name:'AL Rajhi Capital',sector:'finance',locations:['Saudi Arabia'],logo:'assets/extracted/x11.png'},
 {type:'client',name:'Nokia Siemens Networks',sector:'technology',locations:['Finland']},
 {type:'client',name:'57357 Children Cancer Hospital',sector:'healthcare',locations:['Egypt']},
 {type:'client',name:'Concordia University',sector:'education',locations:['Canada']},
 {type:'client',name:'Equate Petrochemical',sector:'oil_gas',locations:['Kuwait']},
 {type:'client',name:'Algeria Telecom',sector:'telecom',locations:['Algeria']},
 {type:'client',name:'XO Communications',sector:'telecom',locations:['USA']},
 {type:'client',name:'Vodafone Egypt',sector:'telecom',locations:['Egypt']},
 {type:'client',name:'Etisalat (e&)',sector:'telecom',locations:['Egypt']},
 {type:'client',name:'ELM Company',sector:'technology',locations:['Saudi Arabia']},
 {type:'client',name:'Ministry of Investment & Foreign Trade',sector:'government',locations:['Egypt']},
 {type:'client',name:'Etihad Etisalat (Mobily)',sector:'telecom',locations:['Saudi Arabia']},
];




/* ===== flags + sector icons ===== */
/* listing-filter popup state (declared explicitly; the source relied on implicit globals) */
var openPop=null,POP_Q='';
const FLAG_MAP={'Saudi Arabia':'sa','Egypt':'eg','Canada':'ca','Algeria':'dz','Iraq':'iq','Kuwait':'kw','Finland':'fi','USA':'us'};
function locFlag(l){var c=FLAG_MAP[l];if(!c)return '';var R=window.__resources||{};var src=R['flag'+c.charAt(0).toUpperCase()+c.slice(1)]||('assets/flags/'+c+'.svg');return '<img src="'+src+'" width="16" height="12" style="border-radius:8px;vertical-align:middle;flex-shrink:0">';}
const SECTOR_MAP={'telecom':'telecom','communication services':'telecom','government':'government','public sector':'government','real estate':'government','finance':'finance','banking':'finance','healthcare':'healthcare','health':'healthcare','technology':'technology','utilities':'energy','energy':'energy','oil_gas':'energy','education':'technology','ecommerce':'technology','construction':'technology','manufacturing':'technology','materials':'technology','agriculture':'technology','cross_sector':'technology'};
function secIcon(s){var f=SECTOR_MAP[s]||'technology';var R=window.__resources||{};var src=R['sector'+f.charAt(0).toUpperCase()+f.slice(1)]||('assets/sectors/'+f+'.svg');return '<img src="'+src+'" width="12" height="12" style="vertical-align:middle;flex-shrink:0;object-fit:contain">';}
/* ===== NTG catalogue (real content; tech/duration/scale illustrative) ===== */
const BUCKETS=[{k:'< 3 mo',t:d=>d>0&&d<3},{k:'3–6 mo',t:d=>d>=3&&d<=6},{k:'6–12 mo',t:d=>d>6&&d<=12},{k:'12+ mo',t:d=>d>12}];
const bucketOf=d=>{const b=BUCKETS.find(b=>b.t(d));return b?b.k:null;};
const esc=s=>String(s).replace(/'/g,"\\'");
const cap=s=>s.replace(/_/g,' ');
const idx=it=>DATA.indexOf(it);
const initials=n=>n.split(' ').filter(w=>/[A-Za-z0-9]/.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase();

/* ===== shared card renderers ===== */
function cardHTML(x){
  const it=x.item;
  const badge=x.total>0?`<span class="mbadge ${x.hits===x.total?'full':'some'}">${x.hits}/${x.total}</span>`:'';
  const crit=x.total>0?`<div class="crit">${SEL.map(s=>{const h=has(it,s.facet,s.value);const c=!h?'miss':(s.required?'req':'boost');return `<span class="ct ${c}">${h?'✓':'×'} ${s.value}</span>`;}).join('')}</div>`:'';
  if(it.type==='project'){
    const pim=it.img?`<img class="primg" src="${it.img}" alt="${it.name}">`:`<span class="ph">Project preview</span>`;
    return `<div class="prcard" onclick="openModal(${idx(it)})"><div class="img">${pim}${badge}</div><div class="bd"><div class="cl">${cap(it.sector)}</div><h4>${it.name}</h4><p class="desc">${it.desc}</p>${crit}</div><div class="prcard-foot"><span class="fprod-more">View project</span><span class="goarrow">${ARROWSVG}</span></div></div>`;
  }
  if(it.type==='product'){
    const pim=it.img?`<img class="primg" src="${it.img}" alt="${it.name}">`:`<span class="ph">Module preview</span>`;
    return `<div class="prcard" onclick="openModal(${idx(it)})"><div class="img">${pim}${badge}</div><div class="bd"><div class="cl">${cap(it.sector)}</div><h4>${it.name}</h4><p class="desc">${it.desc}</p>${crit}</div><div class="prcard-foot"><span class="fprod-more">Explore product</span><span class="goarrow">${ARROWSVG}</span></div></div>`;
  }
  if(it.type==='service'){
    if(x.total>0)
      return `<div class="scard" onclick="openModal(${idx(it)})"><div class="srow"><div class="sicon-soft">${serviceIcon(it.name)}</div>${badge}</div><h4>${it.name}</h4><p class="sdesc">${it.desc}</p>${crit}<div class="scard-foot"><span class="fprod-more">Explore service</span><span class="goarrow">${ARROWSVG}</span></div></div>`;
    const pts=(SVC_POINTS[it.name]||[]).map(p=>`<li>${p}</li>`).join('');
    return `<div class="scard" onclick="openModal(${idx(it)})"><div class="sicon-soft">${serviceIcon(it.name)}</div><h4>${it.name}</h4><p class="sdesc">${it.desc}</p>${pts?`<div class="sdiv"></div><ul class="spoints">${pts}</ul>`:''}<div class="scard-foot"><span class="fprod-more">Explore service</span><span class="goarrow">${ARROWSVG}</span></div></div>`;
  }
  const logo=it.logo?`<img src="${it.logo}" alt="${it.name}">`:`<span class="clmono">${initials(it.name)}</span>`;
  return `<div class="clcard" onclick="openClientDetail(${idx(it)})">${badge}<div class="cllogo">${logo}</div><div class="clname">${it.name}</div><div class="clsector">${[cap(it.sector||''),  (it.locations||[]).slice(0,1).join('')].filter(Boolean).join(' · ')}</div>${crit}<div class="clcard-foot"><span class="fprod-more">View client</span><span class="goarrow">${ARROWSVG}</span></div></div>`;
}
const cardOf=it=>cardHTML({item:it,hits:0,total:0});
function featProdCard(it){
  var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
  var loc=(it.locations||[])[0];
  var tags='<span class="fprod-tag fprod-sec">'+secIcon(it.sector)+sec+'</span>'+(loc?'<span class="fprod-tag fprod-loc">'+locFlag(loc)+' '+loc+'</span>':'');
  var im=it.img?'<img class="fprod-img'+(it.imgCover?' cover':'')+'" src="'+it.img+'" alt="'+it.name+'">':'<span class="fprod-ph">Module preview</span>';
  var mediaCls='fprod-media'+(it.imgCover?' cover':'');
  return '<article class="fprod" onclick="openProduct('+idx(it)+')"><div class="'+mediaCls+'">'+im+'</div><div class="fprod-body"><h4 class="fprod-name" style="color:#3B3B42;font-size:15px">'+it.name+'</h4><p class="fprod-desc">'+it.desc+'</p></div><div class="fprod-foot"><div class="fprod-tags">'+tags+'</div><span class="goarrow">'+ARROWSVG+'</span></div></article>';
}
function scrollFeat(dir){var g=document.getElementById('fprodGrid');if(!g)return;var c=g.querySelector('.fprod');var step=c?c.offsetWidth+22:340;g.scrollBy({left:dir*step,behavior:'smooth'});}
function scrollFeatById(id,dir){var g=document.getElementById(id);if(!g)return;var c=g.firstElementChild;var step=c?c.offsetWidth+16:356;g.scrollBy({left:dir*step,behavior:'smooth'});setTimeout(function(){updateFeatNav(id);},350);}
function scrollServ(dir){var g=document.getElementById('fservGrid');if(!g)return;var c=g.querySelector('.fserv');var step=c?c.offsetWidth+22:382;g.scrollBy({left:dir*step,behavior:'smooth'});}
function scrollProj(dir){var g=document.getElementById('fprojGrid');if(!g)return;var c=g.querySelector('.fproj');var step=c?c.offsetWidth+22:354;g.scrollBy({left:dir*step,behavior:'smooth'});}
function updateFeatNav(gridId){var g=document.getElementById(gridId);if(!g)return;var box=g.parentElement;var prev=box.querySelector('.prev'),next=box.querySelector('.next'),thumb=box.querySelector('.feat-thumb');var max=g.scrollWidth-g.clientWidth;var atStart=g.scrollLeft<=2,atEnd=g.scrollLeft>=max-2;if(prev)prev.classList.toggle('disabled',atStart);if(next)next.classList.toggle('disabled',atEnd);g.classList.toggle('at-end',atEnd);if(thumb){var w=Math.min(100,g.clientWidth/g.scrollWidth*100);thumb.style.width=w+'%';thumb.style.left=(g.scrollLeft/g.scrollWidth*100)+'%';}}
function featServiceCard(it,i){
  var arrSvg='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>';
  return '<div class="fsrv-lc" onclick="openService('+idx(it)+')">'+
    '<div class="fsrv-lc-head">'+
      '<div class="fsrv-lc-ic">'+serviceIcon(it.name)+'</div>'+
      '<div class="fsrv-lc-arr">'+arrSvg+'</div>'+
    '</div>'+
    '<div class="fsrv-lc-body">'+
      '<div class="fsrv-lc-name" style="font-weight:500">'+it.name+'</div>'+
      '<div style="height:1px;background:rgba(255,255,255,.1);margin:8px 0"></div>'+
      '<div class="fsrv-lc-desc">'+(it.desc||it.tagline||'')+'</div>'+
    '</div>'+
  '</div>';
}
function renderHomeServices(allSvcs){
  window._fsrvAll=allSvcs;
  window._fsrvPage2=0;
  var perPage=4;
  function buildCards(pg,end){
    var arrSvg='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>';
    var items=end!=null?allSvcs.slice(pg,end):allSvcs.slice(pg*perPage,pg*perPage+perPage);
    return items.map(function(it){
      var pts=(it._homePoints||SVC_POINTS[it.name]||[]).map(function(p){return '<div class="fsrv-lc-feat"><span class="fsrv-lc-feat-dot"></span>'+p+'</div>';}).join('');
      return '<div class="fsrv-lc" onclick="openService('+idx(it)+')">'+
        '<div class="fsrv-lc-head">'+
          '<div class="fsrv-lc-ic">'+serviceIcon(it.name)+'</div>'+
          '<div class="fsrv-lc-arr">'+arrSvg+'</div>'+
        '</div>'+
        '<div class="fsrv-lc-body">'+
          '<div class="fsrv-lc-name" style="font-weight:500">'+it.name+'</div>'+
          '<div style="height:1px;background:rgba(255,255,255,.1);margin:8px 0"></div>'+
          '<div class="fsrv-lc-desc">'+(it.desc||it.tagline||'')+'</div>'+
          '<div class="fsrv-lc-feats">'+pts+'</div>'+
        '</div>'+
      '</div>';
    }).join('');
  }
  function buildPager(pg){
    var pages=Math.ceil(allSvcs.length/perPage);
    var pct=Math.round((pg/(pages-1||1))*100*(1-1/pages));
    return '<div class="fsrv-2pg">'+
      '<div class="fsrv-2pg-track"><div class="fsrv-2pg-thumb" style="left:'+pct+'%;width:'+Math.round(100/pages)+'%"></div></div>'+
      '<div class="fsrv-2pg-arrows">'+
        '<button class="fsrv-2pg-arr'+(pg===0?' off':'')+'" onclick="fsrv2Go('+(pg-1)+')" aria-label="Prev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>'+
        '<button class="fsrv-2pg-arr'+(pg>=pages-1?' off':'')+'" onclick="fsrv2Go('+(pg+1)+')" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>'+
      '</div>'+
    '</div>';
  }
  window._fsrvBuild2=function(pg){return '<div class="fsrv-2col">'+buildCards(pg)+'</div>'+buildPager(pg);};
  return window._fsrvBuild2(0);
}
window.fsrv2Go=function(pg){
  var pages=Math.ceil((window._fsrvAll||[]).length/4);
  pg=Math.max(0,Math.min(pages-1,pg));
  var wrap=document.getElementById('fsrvHomeWrap');
  if(!wrap)return;
  wrap.style.opacity='0';
  setTimeout(function(){wrap.innerHTML=window._fsrvBuild2(pg);wrap.style.transition='opacity .2s';wrap.style.opacity='1';},120);
};
function featProjCard(it){
  var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
  var im=it.img?'<div class="fproj-img" style="background-image:url('+it.img.replace(/'/g,"%27")+')"></div>':'<div class="fproj-img fproj-ph"></div>';
  var desc=it.desc||it.name||'';
      var locSvg='<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
      var secSvg='<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
      var locs=(it.locations||[]).slice(0,2).map(function(l){return '<span class="dp-tag">'+locSvg+l+'</span>';}).join('');
      var secTag=sec?'<span class="dp-tag">'+secSvg+sec+'</span>':'';
      var dpTags=(locs||secTag)?'<div class="dp-tags">'+secTag+locs+'</div>':'';
      var locSvgOv='<svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  var secSvgOv='<svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
  var ovTags=(sec?'<span class="ov-tag">'+secSvgOv+sec+'</span>':'')+(it.locations&&it.locations[0]?'<span class="ov-tag">'+locSvgOv+it.locations[0]+'</span>':'');
  return '<article class="fproj" onclick="openProject('+idx(it)+')">'+
    '<div class="fproj-media">'+
      im+
      '<span class="fproj-sector-badge" style="display:none;">'+(sec||'Enterprise')+'</span>'+
      '<div class="fproj-overlay">'+
        '<div class="ov-client">'+(it.client||'NTG Engagement')+'</div>'+
        '<div class="ov-desc">'+desc+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="fproj-body">'+
      '<div class="fproj-client-lbl">'+(it.client||'NTG Engagement')+'</div>'+
    '</div>'+
    '<div class="fprod-foot">'+
      '<div class="fprod-tags">'+
        (sec?'<span class="fprod-tag fprod-sec">'+secIcon(it.sector)+sec+'</span>':'')+
        (it.locations&&it.locations[0]?'<span class="fprod-tag fprod-loc">'+locFlag(it.locations[0])+' '+it.locations[0]+'</span>':'')+
      '</div>'+
      '<div class="goarrow"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>'+
    '</div>'+
  '</article>';
}
const ARROWSVG='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const GOARROW='<div class="cardgo"><span class="goarrow">'+ARROWSVG+'</span></div>';
const SVC_ICONS={
 'Data Migration':'<path d="M3 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7"/><path d="M3 7c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3z"/><path d="M3 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
 'Enterprise Architecture':'<path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
 'Integration':'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4v7a4 4 0 01-4 4H6"/>',
 'Nearshore':'<path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 'Offshore':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18"/>',
 'Outsourcing':'<path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0119 7a4 4 0 01-3 3.87"/>',
 'Testing':'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
 'Training':'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1 2.7 2 6 2s6-1 6-2v-4.5"/>',
 'DevOps':'<path d="M4 12a4 4 0 014-4c2 0 3.2 1.6 4 3s2 3 4 3a4 4 0 100-8c-2 0-3.2 1.6-4 3s-2 3-4 3a4 4 0 100 8c2 0 3.2-1.6 4-3"/>',
 'Business Process':'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4a2 2 0 012 2v3M14 17.5h-4a2 2 0 01-2-2v-3"/>',
};
function serviceIcon(name){const k=Object.keys(SVC_ICONS).find(k=>name.indexOf(k)>=0);return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${SVC_ICONS[k]||SVC_ICONS['Integration']}</svg>`;}
const logoTile=c=>{const sec=c.sector?cap(c.sector):'';const loc=(c.locations&&c.locations[0])||'';const meta=[sec,loc].filter(Boolean).join(' · ');return `<div class="logo-tile">${c.logo?`<div class="logo-tile-circle"><img src="${c.logo}" alt="${c.name}"></div>`:`<div class="logo-tile-mono">${initials(c.name)}</div>`}<span class="lt-name">${c.name}</span>${meta?`<span class="lt-meta">${meta}</span>`:''}</div>`;};
const clientTile=c=>{return logoTile(c).replace('<div class="logo-tile"','<div class="logo-tile" style="cursor:pointer" onclick="openClientDetail('+DATA.indexOf(c)+')"');};


const SVC_POINTS={
 'Data Migration as a Service':['Extraction & data profiling','Transformation & cleansing','Validation & reconciliation','Cutover & rollback planning','Legacy-to-modern loading'],
 'Enterprise Architecture as a Service':['Business & application architecture','Data & technology layers','Target-state roadmaps','Architecture governance & standards','IT–business alignment'],
 'Integration as a Service':['API design & middleware development','ERP & CRM integration','Legacy system connectivity','Third-party API orchestration','SOA & microservices patterns'],
 'Nearshore as a Service':['Riyadh, Medina & Jeddah centers','Arabic-speaking technical talent','Teams embedded with clients','Time-zone aligned delivery','Local presence & compliance'],
 'Offshore as a Service':['NTG Egypt delivery centers','Full project management','Built-in quality assurance','Structured knowledge transfer','Cost-efficient scaling'],
 'Outsourcing as a Service':['Application management','Infrastructure operations','Help desk & L1/L2/L3 support','Business process outsourcing','SLA-governed delivery'],
 'Testing as a Service':['Functional & regression testing','Performance & load testing','Security testing','Test automation frameworks','Certified QA professionals'],
 'Training as a Service':['Telecom & IT curricula','Project management training','NTG product-suite training','Certified instructors','Tailored corporate programs'],
 'DevOps as a Service':['CI/CD pipeline setup','Infrastructure as code','Containerization & orchestration','Site reliability engineering','Release & monitoring'],
 'Business Process Reengineering':['Process analysis & mapping','eTOM / ISO / ITIL frameworks','Workflow redesign','Efficiency optimization','Operations–strategy alignment'],
};

/* ===== reusable blocks ===== */
function mapBlock(){
  return `<div class="mappanel">
    <div class="mtop"><div><h3>Where NTG Operates</h3><div style="font-size:11px;color:#8a8a8a;margin-top:4px">HQ · Toronto, Canada</div></div>
    <div class="mnum"><div><div class="v">8</div><div class="l">Offices</div></div><div><div class="v">3</div><div class="l">Regions</div></div></div></div>
    <div class="mapcanvas">
      <div class="dotm" style="top:34%;left:24%"><span class="tip">Toronto</span></div>
      <div class="dotm" style="top:40%;left:27%"><span class="tip">US</span></div>
      <div class="dotm" style="top:52%;left:53%"><span class="tip">Egypt</span></div>
      <div class="dotm" style="top:50%;left:58%"><span class="tip">KSA</span></div>
      <div class="mline" style="top:37%;left:25%;width:30%;transform:rotate(11deg)"></div>
      <div class="mline" style="top:46%;left:54%;width:6%;transform:rotate(20deg)"></div>
    </div>
    <div class="offices">
      <div class="offcard"><div class="oh"><h4>Africa</h4><span class="obadge">3 Offices</span></div><div class="osub">Active NTG footprints in Africa</div>
        <div class="offrow"><div class="offitem"><span class="on">Agouza</span><span class="act">Active</span></div><div class="offitem"><span class="on">Maadi</span><span class="act">Active</span></div><div class="offitem"><span class="on">Al-Haram</span><span class="act">Active</span></div></div></div>
      <div class="offcard"><div class="oh"><h4>Middle East</h4><span class="obadge">3 Offices</span></div><div class="osub">Active NTG footprints in the Middle East</div>
        <div class="offrow"><div class="offitem"><span class="on">Riyadh</span><span class="act">Active</span></div><div class="offitem"><span class="on">Medina</span><span class="act">Active</span></div><div class="offitem"><span class="on">Jeddah</span><span class="act">Active</span></div></div></div>
    </div></div>`;
}
function ctaBlock(){return `<section class="cta"><div class="cta-in"><h2>Let's Build Together</h2><p>Get in touch with our engineering team to discuss your next integration or product deployment.</p><a class="btn red" onclick="showPage('explore')">Explore the Portfolio</a></div></section>`;}
function footerBlock(){return `<footer><div class="wrap"><div class="foot">
  <div><div class="logo" style="color:#fff" onclick="showPage('home')"><img src="assets/ntg-logo-2024.png" alt="NTG Clarity Networks" style="height:36px;width:auto;filter:brightness(0) invert(1);"></div><p class="blurb">NTG Clarity Networks Inc. delivers enterprise products, services and transformation programs for organizations that need reliable engineering and delivery depth. Headquartered in Toronto, Canada — operating across 20+ countries.</p></div>
  <div class="col"><h5>Company</h5><a onclick="showPage('home')">Overview</a><a onclick="showPage('about')">About</a><a onclick="showPage('clients')">Clients</a><a onclick="showPage('about')">Locations</a></div>
  <div class="col"><h5>Explore</h5><a onclick="showPage('products')">Products</a><a onclick="showPage('services')">Services</a><a onclick="showPage('projects')">Projects</a></div>
  <div class="col"><h5>Contact</h5><a href="mailto:info@ntgclarity.com">info@ntgclarity.com</a><a href="tel:+12005550000">+1 (200) 555-0000</a><a onclick="showPage('about')">Toronto, Canada</a><a onclick="showPage('about')">Riyadh, KSA</a><a onclick="showPage('about')">Cairo, Egypt</a></div>
  </div><div class="foot-bottom">© 2026 NTG CLARITY NETWORKS INC. — Interactive prototype.</div></div></footer>`;}

/* ===== page renderers ===== */
function setupCounters(){var ns=document.querySelectorAll('#page-home .num[data-to]');if(!ns.length)return;function run(el){var to=+el.getAttribute('data-to'),sf=el.getAttribute('data-suffix')||'',d=1100,t0=null;function s(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e).toLocaleString()+sf;if(p<1)requestAnimationFrame(s);}requestAnimationFrame(s);}if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){run(en.target);io.unobserve(en.target);}});},{threshold:.4});ns.forEach(function(n){io.observe(n);});}else ns.forEach(run);}
const SEC_IC={
chart:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20V11M12 20V4M19 20v-6"/></svg>',
box:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5"/></svg>',
tools:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
layers:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/></svg>',
users:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3.2"/><path d="M22 21v-2a4 4 0 00-3-3.87"/></svg>',
quote:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.3 7.3L4 21l1.7-5.7A8 8 0 1121 12z"/></svg>',
globe:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18"/></svg>'
};
function secHead(ic,eb,t,va_label,va_page,extra){var va='';if(va_label&&va_page){va='<a class="fprod-all" onclick="showPage(\''+va_page+'\')">'+va_label+' →</a>';}var right=(extra||'')+va;return '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;"><div><div class="fprod-top" style="justify-content:flex-start;margin-bottom:4px;"><div class="fprod-rule" style="max-width:32px;background:var(--red-line);"></div><span class="fprod-eb" style="font-size:11px;letter-spacing:.12em;">'+eb+'</span></div><h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,30px);margin-top:4px;">'+t+'</h2></div>'+(right?'<div style="display:flex;align-items:center;gap:12px;">'+right+'</div>':'')+'</div>';}

const OFFICES=[
 {city:'Agouza',region:'Egypt',flag:'🇪🇬',addr:'26th of July St, Agouza, Giza, Egypt',phone:'+20 2 3303 0000',email:'info@ntgclarity.com',hours:'Sun–Thu, 9:00–17:00',x:'56.0%',y:'61.0%'},
 {city:'Maadi',region:'Egypt',flag:'🇪🇬',addr:'Corniche El Nil, Maadi, Cairo, Egypt',phone:'+20 2 2525 0000',email:'info@ntgclarity.com',hours:'Sun–Thu, 9:00–17:00',x:'56.8%',y:'61.6%'},
 {city:'Al-Haram',region:'Egypt',flag:'🇪🇬',addr:'Al-Haram St, Giza, Egypt',phone:'+20 2 3388 0000',email:'info@ntgclarity.com',hours:'Sun–Thu, 9:00–17:00',x:'55.4%',y:'61.3%'},
 {city:'Riyadh',region:'Saudi Arabia',flag:'🇸🇦',addr:'Olaya District, Riyadh, KSA',phone:'+966 11 000 0000',email:'ksa@ntgclarity.com',hours:'Sun–Thu, 8:00–16:00',x:'61.5%',y:'64.0%'},
 {city:'Medina',region:'Saudi Arabia',flag:'🇸🇦',addr:'Al Madinah, KSA',phone:'+966 14 000 0000',email:'ksa@ntgclarity.com',hours:'Sun–Thu, 8:00–16:00',x:'59.5%',y:'63.2%'},
 {city:'Jeddah',region:'Saudi Arabia',flag:'🇸🇦',addr:'Jeddah, KSA',phone:'+966 12 000 0000',email:'ksa@ntgclarity.com',hours:'Sun–Thu, 8:00–16:00',x:'59.0%',y:'65.0%'}
];
const SVGMAP=`<svg viewBox="0 0 107 54" xmlns="http://www.w3.org/2000/svg" style="background-color: transparent">
        <circle cx="3.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="41.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="42.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="43.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="44.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="46.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="0" r="0.32" fill="#c7ccd6" />
<circle cx="2" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="3" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="5" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="6" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="7" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="42" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="43" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="44" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="45" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="46" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="103" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="104" cy="0.8660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="1.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="2.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="5.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="6.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="7.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="8.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="9.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="10.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="41.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="42.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="43.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="44.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="102.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="105.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="106.5" cy="1.7320508075688772" r="0.32" fill="#c7ccd6" />
<circle cx="1" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="2" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="3" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="5" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="6" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="7" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="8" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="9" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="10" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="11" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="42" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="43" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="103" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="104" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="105" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="106" cy="2.598076211353316" r="0.32" fill="#c7ccd6" />
<circle cx="1.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="2.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="5.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="6.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="7.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="8.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="9.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="10.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="41.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="42.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="102.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="105.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="106.5" cy="3.4641016151377544" r="0.32" fill="#c7ccd6" />
<circle cx="1" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="2" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="3" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="5" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="6" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="7" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="8" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="9" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="10" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="11" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="46" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="48" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="103" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="104" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="105" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="106" cy="4.330127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="0.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="1.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="2.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="5.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="6.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="7.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="8.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="9.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="10.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="46.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="47.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="48.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="102.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="105.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="106.5" cy="5.196152422706632" r="0.32" fill="#c7ccd6" />
<circle cx="3" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="5" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="6" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="7" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="8" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="9" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="10" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="11" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="47" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="103" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="104" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="105" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="106" cy="6.06217782649107" r="0.32" fill="#c7ccd6" />
<circle cx="1.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="2.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="5.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="6.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="7.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="8.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="9.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="10.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="102.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="105.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="106.5" cy="6.928203230275509" r="0.32" fill="#c7ccd6" />
<circle cx="1" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="2" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="3" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="5" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="6" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="7" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="8" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="9" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="10" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="11" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="103" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="106" cy="7.794228634059947" r="0.32" fill="#c7ccd6" />
<circle cx="0.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="2.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="5.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="8.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="9.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="10.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="102.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="105.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="106.5" cy="8.660254037844386" r="0.32" fill="#c7ccd6" />
<circle cx="4" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="10" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="11" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="105" cy="9.526279441628825" r="0.32" fill="#c7ccd6" />
<circle cx="3.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="4.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="10.392304845413264" r="0.32" fill="#c7ccd6" />
<circle cx="2" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="12" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="104" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="105" cy="11.258330249197702" r="0.32" fill="#c7ccd6" />
<circle cx="11.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="12.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="103.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="104.5" cy="12.12435565298214" r="0.32" fill="#c7ccd6" />
<circle cx="13" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="12.990381056766578" r="0.32" fill="#c7ccd6" />
<circle cx="13.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="13.856406460551018" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="14.722431864335457" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="15.588457268119894" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="16.454482671904334" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="17.32050807568877" r="0.32" fill="#c7ccd6" />
<circle cx="14" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="18.186533479473212" r="0.32" fill="#c7ccd6" />
<circle cx="14.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="19.05255888325765" r="0.32" fill="#c7ccd6" />
<circle cx="15" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="16" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="19.918584287042087" r="0.32" fill="#c7ccd6" />
<circle cx="15.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="16.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="17.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="20.784609690826528" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="18" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="21.650635094610966" r="0.32" fill="#c7ccd6" />
<circle cx="18.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="23.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="27.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="72.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="73.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="74.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="22.516660498395403" r="0.32" fill="#c7ccd6" />
<circle cx="17" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="19" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="50" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="73" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="74" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="75" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="23.38268590217984" r="0.32" fill="#c7ccd6" />
<circle cx="19.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="49.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="76.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="81.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="82.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="24.24871130596428" r="0.32" fill="#c7ccd6" />
<circle cx="20" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="21" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="27" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="49" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="50" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="72" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="76" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="80" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="81" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="82" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="83" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="25.11473670974872" r="0.32" fill="#c7ccd6" />
<circle cx="20.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="21.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="22.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="48.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="49.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="70.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="71.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="79.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="80.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="83.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="25.980762113533157" r="0.32" fill="#c7ccd6" />
<circle cx="22" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="23" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="24" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="25" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="49" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="50" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="70" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="71" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="77" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="84" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="26.846787517317598" r="0.32" fill="#c7ccd6" />
<circle cx="24.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="25.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="26.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="48.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="49.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="77.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="85.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="27.712812921102035" r="0.32" fill="#c7ccd6" />
<circle cx="26" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="49" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="50" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="78" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="88" cy="28.578838324886473" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="49.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="50.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="51.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="52.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="53.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="54.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="55.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="69.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="78.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="29.444863728670914" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="50" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="51" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="52" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="53" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="54" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="55" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="56" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="79" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="30.31088913245535" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="84.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="31.17691453623979" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="57" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="67" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="85" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="86" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="89" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="32.042939940024226" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="56.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="66.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="86.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="88.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="89.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="32.90896534380867" r="0.32" fill="#c7ccd6" />
<circle cx="28" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="87" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="33.77499074759311" r="0.32" fill="#c7ccd6" />
<circle cx="28.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="41.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="87.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="34.64101615137754" r="0.32" fill="#c7ccd6" />
<circle cx="29" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="42" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="35.50704155516198" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="65.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="36.373066958946424" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="41" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="65" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="66" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="37.23909236273086" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="40.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="57.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="38.1051177665153" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="39" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="40" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="58" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="69" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="38.97114317029974" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="38.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="39.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="64.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="67.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="68.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="39.837168574084174" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="38" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="64" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="68" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="90" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="40.703193977868615" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="37.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="58.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="63.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="94.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="95.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="41.569219381653056" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="35" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="37" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="59" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="60" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="61" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="62" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="63" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="92" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="93" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="94" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="95" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="96" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="97" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="102" cy="42.43524478543749" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="35.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="36.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="59.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="60.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="61.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="62.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="90.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="91.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="92.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="93.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="96.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="97.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="101.5" cy="43.30127018922193" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="34" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="36" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="91" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="98" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="99" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="101" cy="44.167295593006365" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="33.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="34.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="98.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="99.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="45.033320996790806" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="45.89934640057525" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="45.89934640057525" r="0.32" fill="#c7ccd6" />
<circle cx="33" cy="45.89934640057525" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="46.76537180435968" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="46.76537180435968" r="0.32" fill="#c7ccd6" />
<circle cx="32.5" cy="46.76537180435968" r="0.32" fill="#c7ccd6" />
<circle cx="100.5" cy="46.76537180435968" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="47.63139720814412" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="47.63139720814412" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="47.63139720814412" r="0.32" fill="#c7ccd6" />
<circle cx="100" cy="47.63139720814412" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="48.49742261192856" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="48.49742261192856" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="49.363448015713" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="49.363448015713" r="0.32" fill="#c7ccd6" />
<circle cx="32" cy="49.363448015713" r="0.32" fill="#c7ccd6" />
<circle cx="29.5" cy="50.22947341949744" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="50.22947341949744" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="50.22947341949744" r="0.32" fill="#c7ccd6" />
<circle cx="75.5" cy="50.22947341949744" r="0.32" fill="#c7ccd6" />
<circle cx="30" cy="51.09549882328188" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="51.09549882328188" r="0.32" fill="#c7ccd6" />
<circle cx="30.5" cy="51.96152422706631" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="51.96152422706631" r="0.32" fill="#c7ccd6" />
<circle cx="31" cy="52.827549630850754" r="0.32" fill="#c7ccd6" />
<circle cx="31.5" cy="53.693575034635195" r="0.32" fill="#c7ccd6" />
        
      </svg>`;
function mapInteractive(){
  const mk=OFFICES.map((o)=>`<button class="mk" style="left:${o.x};top:${o.y}" onclick="toggleMk(this,event)"><span class="mkdot"></span><div class="mkpop"><div class="mkcity"><span class="mkflag">${o.flag}</span>${o.city}, ${o.region}</div><div class="mkrow">${o.addr}</div><div class="mkrow"><b>Phone:</b> ${o.phone}</div><div class="mkrow"><b>Email:</b> ${o.email}</div><div class="mkrow"><b>Hours:</b> ${o.hours}</div></div></button>`).join('');
  const hq=`<button class="mk hq" style="left:25%;top:42%" onclick="toggleMk(this,event)"><span class="mkdot"></span><div class="mkpop"><div class="mkcity"><span class="mkflag">\uD83C\uDDE8\uD83C\uDDE6</span>Toronto \u2014 Global HQ</div><div class="mkrow">NTG Clarity Networks \u00b7 Headquarters</div></div></button>`;
  const arcs=`<svg class="arclayer" viewBox="0 0 232 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
    <defs>
      <filter id="glow"><feGaussianBlur stdDeviation="1.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <!-- animated dash-draw arcs -->
    <path d="M58,42 Q96,8 130,61" fill="none" stroke="rgba(192,34,29,.35)" stroke-width="0.8" stroke-dasharray="120" stroke-dashoffset="120">
      <animate attributeName="stroke-dashoffset" values="120;0;120" dur="6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </path>
    <path d="M58,42 Q100,6 133,62" fill="none" stroke="rgba(192,34,29,.28)" stroke-width="0.7" stroke-dasharray="120" stroke-dashoffset="120">
      <animate attributeName="stroke-dashoffset" values="120;0;120" dur="7s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </path>
    <path d="M58,42 Q90,10 128,64" fill="none" stroke="rgba(192,34,29,.2)" stroke-width="0.5" stroke-dasharray="120" stroke-dashoffset="120">
      <animate attributeName="stroke-dashoffset" values="120;0;120" dur="5.5s" begin="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </path>

    <!-- destination pulse rings -->
    <circle cx="130" cy="61" r="2" fill="#c0221d" opacity="0.9" filter="url(#glow)"/>
    <circle cx="130" cy="61" r="2" fill="none" stroke="#c0221d" stroke-width="0.7">
      <animate attributeName="r" values="2;8;2" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite"/>
    </circle>

    <circle cx="133" cy="62" r="2" fill="#c0221d" opacity="0.9" filter="url(#glow)"/>
    <circle cx="133" cy="62" r="2" fill="none" stroke="#c0221d" stroke-width="0.7">
      <animate attributeName="r" values="2;8;2" dur="3.5s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0;0.7" dur="3.5s" begin="0.8s" repeatCount="indefinite"/>
    </circle>

    <!-- HQ dot -->
    <circle cx="58" cy="42" r="2.2" fill="#c0221d" opacity="0.9" filter="url(#glow)"/>
    <circle cx="58" cy="42" r="2" fill="none" stroke="#c0221d" stroke-width="0.7">
      <animate attributeName="r" values="2;7;2" dur="4s" begin="0.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
  </svg>`;
  return `<div class="mapwrap"><div class="worldmap"><img class="wm-img" src="${(window.__resources&&window.__resources.maa3Map)||'assets/maa3.svg'}" alt="NTG global presence world map">${arcs}<div class="mklayer">${hq}${mk}</div></div></div>`;
}
function regionCard(name,abbr,badge,cities,flagSrc,country){
  var chips=cities.map(function(c){return '<span class="gp-chip">'+c+'</span>';}).join('');
  var badgeCls=badge==='HQ'?'gp-badge hq-badge':'gp-badge';
  var flagEl=flagSrc?'<img src="'+flagSrc+'" width="20" height="20" style="flex-shrink:0;display:block;object-fit:contain" alt="'+abbr+' flag">':'<span class="gp-abbr">'+abbr+'</span>';
  var nameBlock='<div style="flex:1;min-width:0"><div class="gp-rname" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+name+(country?' <span style="color:var(--muted);font-weight:500">&#8211;</span> '+country:'')+'</div></div>';
  return '<div class="gp-region"><div class="gp-rhead">'+flagEl+nameBlock+'<span class="'+badgeCls+'">'+badge+'</span></div><div class="gp-chips">'+chips+'</div></div>';
}
function presenceBlock(){
  var R=window.__resources||{};
  var regions=regionCard('North America','CA','HQ',['Toronto'],R.flagCa||'assets/flags/ca.svg','Canada')+regionCard('Middle East','SA','3 OFFICES',['Riyadh','Medina','Jeddah'],R.flagSa||'assets/flags/sa.svg','Saudi Arabia')+regionCard('Africa','EG','3 OFFICES',['Agouza','Maadi','Al-Haram'],R.flagEg||'assets/flags/eg.svg','Egypt');
  return '<div class="gp"><div class="gp-map">'+mapInteractive()+'</div><div class="gp-regions">'+regions+'</div></div>';
}
function toggleMk(el,e){e.stopPropagation();document.querySelectorAll('.mk').forEach(function(m){if(m!==el)m.classList.remove('open');});el.classList.toggle('open');}
document.addEventListener('click',function(){document.querySelectorAll('.mk.open').forEach(function(m){m.classList.remove('open');});});

function openContact(){var c=document.getElementById('cov');if(!c)return;c.classList.add('on');document.getElementById('cform').style.display='block';document.getElementById('cok').style.display='none';document.body.style.overflow='hidden';}
function closeContact(){var c=document.getElementById('cov');if(!c)return;c.classList.remove('on');document.body.style.overflow='';}
function submitContact(){var n=document.getElementById('cf_name').value.trim(),em=document.getElementById('cf_email').value.trim(),iq=document.getElementById('cf_inq').value.trim();if(!n||!em||!iq){alert('Please complete Name, Email and Inquiry.');return;}document.getElementById('cform').style.display='none';document.getElementById('cok').style.display='block';}


window.tspStep=function(dir){
  var style=window._testiStyle||'cinema';
  var pfx=style==='cinema'?'tcinema':style==='split'?'tsp':'tstack';
  var slides=document.querySelectorAll('.'+pfx+'-slide,.'+pfx+'-q .'+pfx+'-slide,#testiContainer .tcinema-slide,#testiContainer .tsp-slide,#testiContainer .tstack-card');
  var n=window._tcards?window._tcards.length:5;
  var idx=((window._tspIdx||0)+dir+n)%n;
  window.tspGo(idx);
};
window.tspGo=function(i){
  var n=window._tcards?window._tcards.length:5;
  window._tspIdx=i;
  var style=window._testiStyle||'cinema';
  if(style==='cinema'){
    document.querySelectorAll('#testiContainer .tcinema-slide').forEach(function(el,j){el.classList.toggle('on',j===i);});
    document.querySelectorAll('#testiContainer .tcinema-cslide').forEach(function(el,j){el.classList.toggle('on',j===i);});
    document.querySelectorAll('#testiContainer .tcinema-dot').forEach(function(el,j){el.classList.toggle('on',j===i);});
  } else if(style==='split'){
    document.querySelectorAll('#testiContainer .tsp-slide').forEach(function(el,j){el.classList.toggle('on',j===i);});
    document.querySelectorAll('#testiContainer .tsp-cslide').forEach(function(el,j){el.classList.toggle('on',j===i);});
    document.querySelectorAll('#testiContainer .tsp-dot').forEach(function(el,j){el.classList.toggle('on',j===i);});
  }
};
function renderHome(){setTimeout(setupCounters,40);setTimeout(function(){updateFeatNav('fprodGrid');updateFeatNav('fprojGrid');updateFeatNav('fservGrid');updateFeatNav('fservList');},90);setTimeout(function(){document.querySelectorAll('.srv-trow').forEach(function(r){r.classList.add('srv-anim');});},120);
  // wdo cycling
  (function(){
    var words=['at Scale.','Globally.','with Impact.','for Growth.'];
    var wi2=0;
    function cycleWord(){
      wi2=(wi2+1)%words.length;
      var el=document.getElementById('wdoWord');
      if(!el)return;
      el.style.opacity=0;el.style.transform='translateY(8px)';
      setTimeout(function(){var el2=document.getElementById('wdoWord');if(el2){el2.textContent=words[wi2];el2.style.transition='opacity .4s,transform .4s';el2.style.opacity=1;el2.style.transform='none';}},300);
    }
    setInterval(cycleWord,2200);
    // wdo section cycle word
    (function(){
      var cw=['Transform.','Innovate.','Deliver.'];var ci=0;
      function cycleSec(){
        var el=document.getElementById('wdoCycleWord');
        if(!el)return;
        el.style.opacity='0';el.style.transform='translateY(-8px)';
        setTimeout(function(){
          ci=(ci+1)%cw.length;
          var el2=document.getElementById('wdoCycleWord');
          if(el2){el2.textContent=cw[ci];el2.style.transform='translateY(8px)';el2.style.opacity='0';
            setTimeout(function(){var el3=document.getElementById('wdoCycleWord');if(el3){el3.style.transition='opacity .35s,transform .35s';el3.style.opacity='1';el3.style.transform='translateY(0)';}},30);}
        },350);
      }
      setInterval(cycleSec,2000);
    })();
    // wdo slider
    var wdoSlideH=0;
    function wdoSliderH(){var s=document.getElementById('wdoSlider');if(!s)return;wdoSlideH=s.firstElementChild?s.firstElementChild.offsetHeight:68;}
    window.wdoGo=function(i){
      var s=document.getElementById('wdoSlider');
      if(s){if(!wdoSlideH)wdoSliderH();s.style.transform='translateY(-'+(i*wdoSlideH)+'px)';}
      var dots=document.getElementById('wdoDots');
      if(dots){var ds=dots.querySelectorAll('div>div');for(var k=0;k<ds.length;k++){ds[k].style.background=k===i?'#c0221d':'rgba(0,0,0,.15)';ds[k].style.width=k===i?'28px':'12px';}}
      for(var j=0;j<3;j++){
        var tab=document.getElementById('wdoTab'+j);
        var content=document.getElementById('wdoContent'+j);
        if(tab){
          tab.style.opacity=j===i?'1':'.5';
          tab.style.borderLeftColor=j===i?'#c0221d':'rgba(0,0,0,.08)';
          tab.style.background=j===i?'rgba(192,34,29,.03)':'transparent';
        }
        if(content){
          content.style.opacity=j===i?'1':'0';
          content.style.transform=j===i?'translateY(0)':'translateY(14px)';
          content.style.pointerEvents=j===i?'auto':'none';
        }
      }
      clearInterval(window._wdoTimer);
      var cur=i;
      window._wdoTimer=setInterval(function(){cur=(cur+1)%3;window.wdoGo(cur);},2500);
    };
    setTimeout(function(){wdoSliderH();window.wdoGo(0);},120);
  })();
  const fp=['NTGGEAR ERP','Last Mile Delivery (LMD)','Network Inventory','HEALN Hub','Human Capital','Utility Billing','NOTA Platform'].map(function(q){return DATA.find(function(d){return d.type==='product'&&d.name.indexOf(q)>-1;});}).filter(Boolean).map(featProdCard).join('');
  const fs=DATA.filter(function(d){return d.type==='service';}); window._fsrvAll=fs; window._fsrvPage=0;
  // Home services — one card per main category
  const HOME_SVC_CATS=['Outsourcing and Offshoring','Systems Design and Integration','Consulting','Education and Upskilling','NTG AI'];
  const HOME_SVC_MAP={'Outsourcing and Offshoring':'Outsourcing and Offshoring','Systems Design and Integration':'Solution Development','Consulting':'Consulting','Education and Upskilling':'NTG Academy','NTG AI':'NTG AI'};
  const HOME_SVC_POINTS={
    'Outsourcing and Offshoring':['Offshore Development Center (ODC)','Nearshore Center of Excellence','Outsourcing and Offshoring','Digital Transformation','Data Migration'],
    'Solution Development':['Solution Development','System Integration','Testing as a Service (TaaS)','SAP'],
    'Consulting':['Consulting','Training'],
    'NTG Academy':['NTG Academy'],
    'NTG AI':['NTG AI']
  };
  const homeSvcs=HOME_SVC_CATS.map(function(cat){
    var svc=DATA.find(function(d){return d.type==='service'&&d.name===HOME_SVC_MAP[cat];});
    if(svc){svc=Object.assign({},svc);svc._homePoints=HOME_SVC_POINTS[HOME_SVC_MAP[cat]]||[];}
    return svc;
  }).filter(Boolean);
  const fpr=['Royal Commission of Yanbu – Smart City BSS/OSS','STC Network Operations Center Upgrade','AL Rajhi Capital – ETF Implementation','Nokia Siemens Networks – WiMAX Iraq'].map(function(q){return DATA.find(function(d){return d.type==='project'&&d.name===q;});}).filter(Boolean);
  window._fprItems=fpr;
  function renderProjCinema(items){
    return '<div class="fproj-scroll"><div class="fproj-grid" id="fprojGrid" onscroll="updateFeatNav(\'fprojGrid\')">'+items.map(featProjCard).join('')+'</div><div class="feat-ctrl"><div class="feat-track"><div class="feat-thumb"></div></div><div class="feat-arrows"><button class="feat-arrow prev" onclick="scrollProj(-1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button><button class="feat-arrow next" onclick="scrollProj(1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button></div></div></div>';
  }
  function renderProjList(items){
    return '<div class="fproj-list">'+items.map(function(it,i){
      var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
      var thumb=it.img?'<div class="fproj-rthumb"><div class="fproj-rthumb-img" style="background-image:url('+it.img.replace(/'/g,'%27')+')"></div></div>':'<div class="fproj-rthumb"></div>';
      return '<div class="fproj-row" onclick="openProject('+DATA.indexOf(it)+')">'+'<span class="fproj-rnum">0'+(i+1)+'</span>'+'<div class="fproj-rbody"><div class="fproj-rclient">'+(it.client||it.name)+'</div><div class="fproj-rdesc">'+(it.desc||'')+'</div></div>'+'<span class="fproj-rbadge">'+(sec||'Enterprise')+'</span>'+thumb+'<div class="fproj-rarr"><svg viewBox="0 0 24 html 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>'+'</div>';
    }).join('')+'</div>';
  }
  function renderProjSplit(items){
    var arrowSvg='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    function mkPfb(it,cls){
      var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
      var img=it.img?'<div class="fpb-img" style="background-image:url('+it.img.replace(/'/g,'%27')+')" ></div>':'<div class="fpb-img" style="background:#1a1a2e"></div>';
      return '<div class="'+cls+'" onclick="openProject('+DATA.indexOf(it)+')">'
        +img+'<div class="fpb-ov"></div>'
        +'<div class="fpb-body"><span class="fpb-badge">'+(sec||'Enterprise')+'</span>'
        +'<div class="fpb-client">'+(it.client||it.name)+'</div>'
        +'<div class="fpb-desc">'+(it.desc||'')+'</div>'
        +'<div class="fpb-foot"><span class="fpb-lbl">View Project</span><div class="fpb-arr">'+arrowSvg+'</div></div>'
        +'</div></div>';
    }
    var out='<div class="fproj-bento2">'+mkPfb(items[0],'fpb-hero');
    items.slice(1,5).forEach(function(it){out+=mkPfb(it,'fpb-sm');});
    out+='</div>';
    return out;
  }
  window._projStyle='cinema';
  window.switchProjStyle=function switchProjStyle(s){
    window._projStyle=s;
    var container=document.getElementById('fprojContainer');
    if(!container)return;
    var items=window._fprItems||[];
    if(s==='cinema')container.innerHTML=renderProjCinema(items);
    else if(s==='list')container.innerHTML=renderProjList(items);
    else if(s==='split')container.innerHTML=renderProjSplit(items);
    document.querySelectorAll('.pstyle-btn').forEach(function(b){b.classList.toggle('on',b.dataset.s===s);});
  }
  const fprHtml=renderProjCinema(fpr);
  const ccards=DATA.filter(d=>d.type==='client').slice().sort((a,b)=>(b.logo?1:0)-(a.logo?1:0)).map(c=>{return logoTile(c).replace('<div class="logo-tile"','<div class="logo-tile" style="cursor:pointer" onclick="openClientDetail('+DATA.indexOf(c)+')"');}).join('');
  const tcards=[
    {q:'In recognition of NTG\'s valued partnership, professional excellence and impactful contribution to the Technology Division throughout 2025.',nm:'Al Rajhi Takaful',role:'Salem Al Qahtani · Chief Technology Division',av:'A',logo:(window.__resources&&window.__resources.logoAlrajhi||'assets/logo-alrajhi.png'),img:(window.__resources&&window.__resources.testiAlrajhiCert||'assets/testi-alrajhi-cert.png')},
    {q:'A trusted delivery partner across our enterprise systems and procurement modernization program. NTG demonstrated exceptional commitment in delivering success.',nm:'STC — Saudi Telecom',role:'Dr. Mohammed Alabdullatif · Corporate Quality Mgmt',av:'S',logo:(window.__resources&&window.__resources.logoStc||'assets/logo-stc.png'),img:(window.__resources&&window.__resources.testiStcLetter||'assets/testi-stc-letter.png')},
    {q:'NTG met all target dates and the project was delivered on time. We see NTG as an important and effective partner.',nm:'Takamol Business Solutions',role:'Wafa M. AlOtaibi · General Manager Digital Products',av:'T',logo:'assets/logo-takamol.png',img:(window.__resources&&window.__resources.testiTakamol||'assets/testi-takamol.png')},
    {q:'I would like to express my gratitude for the expertise and professionalism of NTG\'s personnel. Technically skilled and highly reactive.',nm:'Health Insurance — Medical Union',role:'Dr. Ibrahim Mostafa · Managing Director',av:'H',logo:'assets/logo-union-health.png',img:(window.__resources&&window.__resources.testiHealth||'assets/testi-health.png')},
    {q:'Professional, courteous and collaborative. Their skills and open personalities have made them a true asset to our company.',nm:'Nokia Siemens Network',role:'Emad Matter · CSI Project Management',av:'N',logo:'assets/logo-nsn-new.png',img:(window.__resources&&window.__resources.testiNokia||'assets/testi-nokia.png')},
  ];
  function mkTCard(t){
    const hasImg=!!t.img;
    const circle=t.logo?'<div class="tcard-circle"><img src="'+t.logo+'" alt="'+t.nm+'"></div>':'<div class="tcard-circle"><div class="av">'+t.av+'</div></div>';
    const click=hasImg?' data-img="'+t.img+'" data-nm="'+t.nm+'" onclick="openLetterLightbox(this.dataset.img,this.dataset.nm)"':'';
    const view=hasImg?'<span class="tcard-view">View letter →</span>':'';
    return '<div class="tcard'+(hasImg?' has-letter':'')+'"'+click+'><p class="q">'+t.q+'</p><div class="tcard-logo-row">'+circle+'<div><div class="nm">'+t.nm+'</div><div class="role">'+t.role+'</div>'+view+'</div></div></div>';
  }
  // Testimonial marquee
  // Testimonial multi-style
  function mkTspSlide(t,i){
    var av=t.logo?'<div class="tsp-cav"><img src="'+t.logo+'" alt="'+t.nm+'"></div>':'<div class="tsp-cav"><div class="av">'+t.av+'</div></div>';
    var letter=t.img?'<span class="tsp-cletter" data-img="'+t.img+'" data-nm="'+t.nm+'" onclick="openLetterLightbox(this.dataset.img,this.dataset.nm)">View letter</span>':'';
    return {
      q:'<div class="tsp-slide'+(i===0?' on':'')+' ">'+t.q+'</div>',
      card:'<div class="tsp-cslide'+(i===0?' on':'')+' ">'+av+'<div><div class="tsp-cnm">'+t.nm+'</div><div class="tsp-crole">'+t.role+'</div>'+letter+'</div><div class="tsp-csep"></div><p class="tsp-cref">'+t.q+'</p></div>'
    };
  }
  function renderTestiSplit(tc){
    var slides=tc.map(mkTspSlide);
    var dots=tc.map(function(_,i){return '<button class="tsp-dot'+(i===0?' on':'')+'" onclick="tspGo('+i+')" aria-label="T '+(i+1)+'"></button>';}).join('');
    return '<div class="tsp-wrap"><div class="tsp-left"><span class="tsp-mark">“</span><div class="tsp-q">'+slides.map(function(s){return s.q;}).join('')+'</div><div class="tsp-nav"><button class="tsp-arr" onclick="tspStep(-1)">&larr;</button>'+dots+'<button class="tsp-arr" onclick="tspStep(1)">&rarr;</button></div></div><div class="tsp-card">'+slides.map(function(s){return s.card;}).join('')+'</div></div>';
  }
  function renderTestiCinema(tc){
    var qs=tc.map(function(t,i){return '<div class="tcinema-slide'+(i===0?' on':'')+' ">'+t.q+'</div>';}).join('');
    var right=tc.map(function(t,i){
      var av=t.logo?'<div class="tcinema-av"><img src="'+t.logo+'" alt="'+t.nm+'"></div>':'<div class="tcinema-av"><div class="av">'+t.av+'</div></div>';
      var letter=t.img?'<span class="tcinema-letter" data-img="'+t.img+'" data-nm="'+t.nm+'" onclick="openLetterLightbox(this.dataset.img,this.dataset.nm)">View letter</span>':'';
      return '<div class="tcinema-cslide'+(i===0?' on':'')+' ">'+av+'<div class="tcinema-nm">'+t.nm+'</div><div class="tcinema-role">'+t.role+'</div>'+letter+'</div>';
    }).join('');
    var dots=tc.map(function(_,i){return '<button class="tcinema-dot'+(i===0?' on':'')+'" onclick="tspGo('+i+')" aria-label="T '+(i+1)+'"></button>';}).join('');
    return '<div class="tcinema"><div class="tcinema-left"><span class="tcinema-mark">“</span><div class="tcinema-q">'+qs+'</div><div class="tcinema-nav"><button class="tcinema-arr" onclick="tspStep(-1)">&larr;</button>'+dots+'<button class="tcinema-arr" onclick="tspStep(1)">&rarr;</button></div></div><div class="tcinema-right">'+right+'</div></div>';
  }
  function renderTestiStack(tc){
    var cards=tc.map(function(t,i){
      var av=t.logo?'<div class="tstack-av"><img src="'+t.logo+'" alt="'+t.nm+'"></div>':'<div class="tstack-av"><div class="av">'+t.av+'</div></div>';
      var letter=t.img?'<span class="tstack-letter" data-img="'+t.img+'" data-nm="'+t.nm+'" onclick="openLetterLightbox(this.dataset.img,this.dataset.nm)">View letter</span>':'';
      var cls='tstack-card '+(i===0?'t0':i===1?'t1':i===2?'t2':'');
      return '<div class="'+cls+'" data-ti="'+i+'">'+av+'<div class="tstack-body"><div class="tstack-nm">'+t.nm+'</div><div class="tstack-role">'+t.role+'</div><p class="tstack-q">'+t.q+'</p></div></div>';
    }).join('');
    var dots=tc.map(function(_,i){return '<button class="tstack-dot'+(i===0?' on':'')+'" onclick="tspGo('+i+')" aria-label="T '+(i+1)+'"></button>';}).join('');
    return '<div class="tstack" id="tstackWrap">'+cards+'</div><div class="tstack-foot"><div class="tstack-nav">'+dots+'</div></div>';
  }
  window._testiStyle='cinema';
  window._tcards=tcards;
  window.switchTestiStyle=function(s){
    window._testiStyle=s;
    var c=document.getElementById('testiContainer');
    if(!c)return;
    var tc=window._tcards||[];
    if(s==='split')c.innerHTML=renderTestiSplit(tc);
    else if(s==='cinema')c.innerHTML=renderTestiCinema(tc);
    else if(s==='stack')c.innerHTML=renderTestiStack(tc);
    document.querySelectorAll('.tstyle-btn').forEach(function(b){b.classList.toggle('on',b.dataset.s===s);});
    window._tspIdx=0;
    clearInterval(window._tspTimer);
    window._tspTimer=setInterval(function(){window.tspStep(1);},6000);
  };
  var tspSlides=tcards.map(mkTspSlide);
  var tspDots=tcards.map(function(_,i){return '<button class="tsp-dot'+(i===0?' on':'')+'" onclick="tspGo('+i+')" aria-label="T '+(i+1)+'"></button>';}).join('');
  function renderTestiScroll(tc){
    function mkCard(t){
      var logo=t.logo?'<img class="tmarq-logo" src="'+t.logo+'" alt="'+t.nm+'">':'<div class="tmarq-mono">'+t.av+'</div>';
      var view=t.img?'<span class="tmarq-view" onclick="event.stopPropagation();openLetterLightbox(\''+t.img+'\',\''+t.nm+'\')" >View letter →</span>':'';
      return '<div class="tmarq-card">'
        +'<span class="tmarq-mark">&#8220;</span>'
        +'<p class="tmarq-q">'+t.q+'</p>'
        +(view?'<div>'+view+'</div>':'')
        +'<div class="tmarq-foot">'+logo+'<div><div class="tmarq-nm">'+t.nm+'</div><div class="tmarq-role">'+t.role+'</div></div></div>'
      +'</div>';
    }
    // duplicate cards for seamless loop
    var row1=tc.map(mkCard).join('');
    var row2=tc.slice().reverse().map(mkCard).join('');
    return '<div class="tmarq-wrap">'
      +'<div class="tmarq-row">'+row1+row1+'</div>'
      +'<div class="tmarq-row rev">'+row2+row2+'</div>'
    +'</div>';
  }
  window.scrollTesti=function(dir){};
  clearInterval(window._testiTimer);
  const trotHtml='<div id="testiContainer">'+renderTestiScroll(tcards)+'</div>';
  window._tspIdx=0;
  clearInterval(window._tspTimer);
  window._tspTimer=setInterval(function(){window.tspStep(1);},5500);
  

  const trust=DATA.filter(d=>d.type==='client'&&d.logo).slice(0,6).map(c=>`<span class="tlogo"><img src="${c.logo}" alt="${c.name}"></span>`).join('');
  document.getElementById('page-home').innerHTML=`
    <header style="position:relative;background:#fff;overflow:hidden;border-bottom:1px solid var(--line);padding-top:88px;">
      <div style="position:absolute;top:108px;left:26px;width:20px;height:20px;z-index:2;pointer-events:none;"><div style="position:absolute;width:1px;height:100%;left:50%;background:#c0221d;opacity:.5;transform:translateX(-50%);"></div><div style="position:absolute;height:1px;width:100%;top:50%;background:#c0221d;opacity:.5;transform:translateY(-50%);"></div></div>
      <div style="position:absolute;bottom:24px;right:26px;width:20px;height:20px;z-index:2;pointer-events:none;"><div style="position:absolute;width:1px;height:100%;left:50%;background:#c0221d;opacity:.5;transform:translateX(-50%);"></div><div style="position:absolute;height:1px;width:100%;top:50%;background:#c0221d;opacity:.5;transform:translateY(-50%);"></div></div>
      <div style="position:relative;z-index:2;width:100%;max-width:1200px;margin:0 auto;padding:44px 26px;box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;">
        <div>
          <div style="font-family:'Poppins',sans-serif;font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#c0221d;margin-bottom:22px;opacity:0;animation:heroInV2 .55s .05s forwards;">NTG CLARITY NETWORKS &middot; EST. 1992</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(32px,3.6vw,50px);font-weight:800;line-height:1.08;letter-spacing:-.025em;color:#3B3B42;margin:0 0 18px;">
            <span style="display:block;overflow:hidden;"><span style="display:block;opacity:0;transform:translateY(105%);animation:slideUpHero .8s cubic-bezier(.16,1,.3,1) .15s forwards;">Building &amp; Integrating</span></span>
            <span style="display:block;overflow:hidden;"><span style="display:block;opacity:0;transform:translateY(105%);animation:slideUpHero .8s cubic-bezier(.16,1,.3,1) .28s forwards;">Enterprise Technology</span></span>
            <span style="display:block;overflow:hidden;"><span style="display:block;opacity:0;transform:translateY(105%);animation:slideUpHero .8s cubic-bezier(.16,1,.3,1) .41s forwards;">&mdash; <span id="v1CycleWord" style="color:#c0221d;font-style:italic;">at Scale.</span></span></span>
          </h1>
          <p style="font-size:13px;color:#6e6e73;max-width:460px;line-height:1.72;margin:0 0 10px;opacity:0;animation:heroInV2 .6s .55s forwards;font-weight:300;">Delivering world-class technology solutions for enterprises worldwide.</p>
          <div class="hero-search hs-sm" onclick="openPal()" style="opacity:0;animation:heroInV2 .6s .7s forwards;height:48px;max-width:400px;width:100%;border-radius:8px;margin-bottom:4px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <span class="hs-ph">Search projects, products &amp; services</span>
            <span class="hs-k">&#8984;K</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:flex-end;opacity:0;animation:heroInV2 .8s .5s forwards;padding-right:0;">
          <div style="position:relative;width:100%;max-width:580px;margin-left:auto;margin-right:-30px;margin-top:20px;">
            <svg viewBox="0 0 580 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
              <defs>
                <pattern id="hDot" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="2" fill="#d4d4da"/></pattern>
                <clipPath id="hLand">
                  <path d="M28,48 L95,32 L142,28 L168,44 L172,62 L160,80 L155,100 L148,115 L130,118 L110,130 L96,148 L78,155 L60,148 L42,130 L30,110 L22,85 Z"/>
                  <path d="M148,12 L178,8 L188,22 L182,40 L165,45 L150,38 Z"/>
                  <path d="M118,162 L145,155 L162,162 L168,185 L165,215 L150,248 L132,262 L118,255 L108,235 L105,205 L108,180 Z"/>
                  <path d="M240,38 L280,30 L298,40 L302,58 L290,72 L268,78 L248,72 L238,58 Z"/>
                  <path d="M245,85 L292,78 L310,88 L318,115 L315,152 L305,182 L288,210 L268,220 L250,215 L235,195 L228,165 L228,132 L235,105 Z"/>
                  <path d="M305,75 L340,68 L358,78 L360,98 L345,108 L320,112 L305,100 Z"/>
                  <path d="M355,60 L420,52 L448,62 L452,88 L440,108 L415,118 L388,115 L362,105 L352,85 Z"/>
                  <path d="M435,38 L510,28 L535,42 L540,68 L528,90 L505,98 L478,95 L452,85 L438,65 Z"/>
                  <path d="M470,100 L508,95 L520,112 L512,128 L490,132 L470,125 Z"/>
                  <path d="M482,188 L535,178 L558,192 L558,225 L540,242 L510,248 L485,238 L472,218 L475,198 Z"/>
                </clipPath>
                <filter id="hGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <rect width="580" height="340" fill="url(#hDot)" clip-path="url(#hLand)"/>
              <path id="hl1" d="M98,90 Q170,50 260,95" stroke="rgba(192,34,29,.2)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <path id="hl2" d="M98,90 Q185,45 325,88" stroke="rgba(192,34,29,.18)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <path id="hl3" d="M98,90 Q165,55 248,75" stroke="rgba(192,34,29,.15)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <path id="hl4" d="M98,90 Q155,60 212,65" stroke="rgba(192,34,29,.15)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <path id="hl5" d="M98,90 Q215,35 340,72" stroke="rgba(192,34,29,.13)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <path id="hl6" d="M98,90 Q80,70 62,88" stroke="rgba(192,34,29,.13)" stroke-width="0.8" fill="none" stroke-dasharray="3 3"/>
              <circle r="2.8" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="4s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl1"/></animateMotion></circle>
              <circle r="2.8" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="5.5s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl2"/></animateMotion></circle>
              <circle r="2.2" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="4.8s" begin="1s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl3"/></animateMotion></circle>
              <circle r="2" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="3.8s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl4"/></animateMotion></circle>
              <circle r="2.2" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="6s" begin="0.5s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl5"/></animateMotion></circle>
              <circle r="2" fill="#c0221d" filter="url(#hGlow)"><animateMotion dur="3.5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.85;1" keyPoints="0;1;1" calcMode="spline" keySplines="0.4 0 0.6 1;0 0 1 1"><mpath href="#hl6"/></animateMotion></circle>
              <circle cx="98" cy="90" r="5.5" fill="#c0221d" filter="url(#hGlow)"/>
              <circle cx="98" cy="90" r="5.5" stroke="#c0221d" stroke-width="1" fill="none"><animate attributeName="r" values="7;14;7" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/></circle>
              <circle cx="98" cy="90" r="5.5" stroke="#c0221d" stroke-width="0.6" fill="none"><animate attributeName="r" values="14;22;14" dur="2.5s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" begin="0.4s" repeatCount="indefinite"/></circle>
              <circle cx="260" cy="95" r="4" fill="#c0221d" filter="url(#hGlow)"/><circle cx="260" cy="95" r="4" stroke="#c0221d" stroke-width="0.8" fill="none"><animate attributeName="r" values="6;11;6" dur="3s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="0.8s" repeatCount="indefinite"/></circle>
              <circle cx="325" cy="88" r="4" fill="#c0221d" filter="url(#hGlow)"/><circle cx="325" cy="88" r="4" stroke="#c0221d" stroke-width="0.8" fill="none"><animate attributeName="r" values="6;11;6" dur="3.5s" begin="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" begin="1.4s" repeatCount="indefinite"/></circle>
              <circle cx="248" cy="75" r="3.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="248" cy="75" r="3.5" stroke="#c0221d" stroke-width="0.7" fill="none"><animate attributeName="r" values="5;9;5" dur="4s" begin="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="4s" begin="2s" repeatCount="indefinite"/></circle>
              <circle cx="212" cy="65" r="3" fill="#c0221d" filter="url(#hGlow)"/><circle cx="212" cy="65" r="3" stroke="#c0221d" stroke-width="0.7" fill="none"><animate attributeName="r" values="4;8;4" dur="3.8s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="3.8s" begin="0.5s" repeatCount="indefinite"/></circle>
              <circle cx="340" cy="72" r="3.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="340" cy="72" r="3.5" stroke="#c0221d" stroke-width="0.7" fill="none"><animate attributeName="r" values="5;9;5" dur="4.2s" begin="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="4.2s" begin="1.8s" repeatCount="indefinite"/></circle>
              <circle cx="62" cy="88" r="3" fill="#c0221d" filter="url(#hGlow)"/><circle cx="62" cy="88" r="3" stroke="#c0221d" stroke-width="0.7" fill="none"><animate attributeName="r" values="4;8;4" dur="3.2s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="3.2s" begin="2.5s" repeatCount="indefinite"/></circle>
              <!-- additional dots -->
              <circle cx="350" cy="95" r="3" fill="#c0221d" filter="url(#hGlow)"/><circle cx="350" cy="95" r="3" stroke="#c0221d" stroke-width="0.7" fill="none"><animate attributeName="r" values="4;8;4" dur="4.4s" begin="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="4.4s" begin="1.1s" repeatCount="indefinite"/></circle>
              <circle cx="370" cy="80" r="2.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="370" cy="80" r="2.5" stroke="#c0221d" stroke-width="0.6" fill="none"><animate attributeName="r" values="3.5;7;3.5" dur="3.6s" begin="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="3.6s" begin="2.8s" repeatCount="indefinite"/></circle>
              <circle cx="225" cy="112" r="2.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="225" cy="112" r="2.5" stroke="#c0221d" stroke-width="0.6" fill="none"><animate attributeName="r" values="3.5;7;3.5" dur="3.9s" begin="0.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="3.9s" begin="0.7s" repeatCount="indefinite"/></circle>
              <circle cx="295" cy="108" r="2.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="295" cy="108" r="2.5" stroke="#c0221d" stroke-width="0.6" fill="none"><animate attributeName="r" values="3.5;7;3.5" dur="4.1s" begin="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="4.1s" begin="3.2s" repeatCount="indefinite"/></circle>
              <circle cx="178" cy="58" r="2.5" fill="#c0221d" filter="url(#hGlow)"/><circle cx="178" cy="58" r="2.5" stroke="#c0221d" stroke-width="0.6" fill="none"><animate attributeName="r" values="3.5;7;3.5" dur="5s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="5s" begin="1.5s" repeatCount="indefinite"/></circle>
            </svg>
          </div>
        </div>
      </div>
    </header>
    <section class="sec pcd-sec"><div class="wrap">
      <div class="pcd-row">
        <div class="pcd-stat"><div class="num" data-to="1300" data-suffix="+">0</div><div class="pcd-lbl">Experts</div></div>
        <div class="pcd-stat"><div class="num" data-to="30" data-suffix="+">0</div><div class="pcd-lbl">Years of Experience</div></div>
        <div class="pcd-stat"><div class="num" data-to="500" data-suffix="+">0</div><div class="pcd-lbl">Projects Delivered</div></div>
        <div class="pcd-stat"><div class="num" data-to="20" data-suffix="+">0</div><div class="pcd-lbl">Countries</div></div>
      </div>
    </div></section>


<section style="background:#F5F5F7;padding:72px 0 64px;position:relative;overflow:hidden;" id="wdoSection">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(192,34,29,.25) 40%,rgba(192,34,29,.25) 60%,transparent);"></div>
  <div style="max-width:1200px;margin:0 auto;padding:0 26px;">
    <!-- eyebrow -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;animation:fadeUp .6s ease both;">
      <span style="width:32px;height:2px;background:#c0221d;border-radius:2px;display:inline-block;"></span>
      <span style="font:700 10px/1 'Poppins';letter-spacing:.2em;text-transform:uppercase;color:#c0221d;">About NTG Clarity</span>
    </div>
    <!-- large editorial text -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;">
      <div style="animation:fadeUp .65s .1s ease both;">
        <h2 style="font:900 clamp(36px,4vw,58px)/1.1 'Poppins';color:#3B3B42;letter-spacing:-.03em;margin:0 0 8px;">We <span id="wdoCycleWord" style="color:#c0221d;display:inline-block;transition:opacity .35s,transform .35s;">Transform.</span><br>Innovate. Deliver.</h2>
        <p style="font-size:15px;color:rgba(0,0,0,.5);line-height:1.75;margin:20px 0 0;max-width:440px;">A digital transformation partner with 30 years of proven delivery — trusted by governments, telcos, banks and healthcare institutions across 4 continents.</p>
      </div>
      <!-- right: stacked info rows -->
      <div style="display:flex;flex-direction:column;gap:0;padding-top:8px;">
        <div style="padding:24px 0;border-bottom:1px solid rgba(0,0,0,.07);animation:fadeUp .65s .2s ease both;">
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#c0221d;flex-shrink:0;margin-top:6px;"></span>
            <div>
              <div style="font:700 11px/1 'Poppins';letter-spacing:.1em;text-transform:uppercase;color:#3B3B42;margin-bottom:8px;">Our Vision</div>
              <p style="font-size:14px;color:rgba(0,0,0,.58);line-height:1.7;margin:0;">To make digital transformation accessible worldwide through competitive, top-tier products and services built on deep expertise.</p>
            </div>
          </div>
        </div>
        <div style="padding:24px 0;animation:fadeUp .65s .3s ease both;">
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#c0221d;flex-shrink:0;margin-top:6px;"></span>
            <div>
              <div style="font:700 11px/1 'Poppins';letter-spacing:.1em;text-transform:uppercase;color:#3B3B42;margin-bottom:8px;">Our Mission</div>
              <p style="font-size:14px;color:rgba(0,0,0,.58);line-height:1.7;margin:0;">Enabling clients' Business Excellence by delivering world-class integrated IT solutions through distinguished and motivated professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:6px;animation:fadeUp .65s .4s ease both;">
      <a onclick="showPage('about')" style="display:inline-flex;align-items:center;gap:6px;font:600 11.5px 'Poppins',sans-serif;color:var(--muted);cursor:pointer;transition:.15s;" onmouseenter="this.style.color='#c0221d'" onmouseleave="this.style.color='var(--muted)'">Read more about NTG <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </div>
</section>
    

    <section class="sec alt fprod-sec"><div class="wrap">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:20px;"><div><div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red-line);"></div><span class="fprod-eb">Products</span></div><h2 class="fprod-title">Featured Products</h2></div><a class="fprod-all" onclick="showPage('products')">Explore more <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
      <div class="fprod-scroll">
        <div class="fprod-grid" id="fprodGrid" onscroll="updateFeatNav('fprodGrid')">${fp}</div>
        <div class="feat-ctrl"><div class="feat-track"><div class="feat-thumb"></div></div><div class="feat-arrows"><button class="feat-arrow prev" onclick="scrollFeat(-1)" aria-label="Previous products"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button><button class="feat-arrow next" onclick="scrollFeat(1)" aria-label="Next products"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button></div></div>
      </div>
    </div></section>
    <section class="sec"><div class="wrap"><div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:20px;"><div><div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red-line);"></div><span class="fprod-eb">Services</span></div><h2 class="fprod-title">Expert Services That Scale</h2></div><a class="fprod-all" onclick="showPage('services')">Explore all services <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
      <div id="fsrvHomeWrap"></div>
    </div></section>
    <section class="sec alt"><div class="wrap">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:20px;">
        <div><div class="fprod-top" style="justify-content:flex-start;margin-bottom:4px;"><div class="fprod-rule" style="max-width:32px;background:var(--red-line);"></div><span class="fprod-eb" style="font-size:11px;letter-spacing:.12em;">Featured Projects</span></div><h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,30px);margin-top:4px;">Featured Projects</h2></div>
        <div style="display:flex;align-items:center;gap:16px;">
          
          <a class="fprod-all" onclick="showPage('projects')">Explore more &rarr;</a>
        </div>
      </div>
      <div id="fprojContainer">${fprHtml}</div>
    </div></section>
    <section class="sec"><div class="wrap">${secHead('users','Our Clients','Trusted by Leaders','Explore more','clients')}<div class="logowall"><div class="track">${ccards}${ccards}</div></div></div></section>
    <section class="sec alt"><div class="wrap">${secHead('quote','Testimonials','What Clients Say About NTG')} ${trotHtml}</div></section>

    <section class="sec"><div class="wrap">${secHead('globe','Global Presence','A Strong Global Presence','','','<div style="display:flex;align-items:center;gap:36px;margin-left:32px"><div style="text-align:center"><div style="font-family:Poppins;font-weight:800;font-size:22px;color:var(--ink)">8</div><div style="font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)">Offices</div></div><div style="text-align:center"><div style="font-family:Poppins;font-weight:800;font-size:22px;color:var(--ink)">3</div><div style="font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)">Regions</div></div><div style="text-align:center"><div style="font-family:Poppins;font-weight:800;font-size:22px;color:var(--ink)">20+</div><div style="font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)">Countries</div></div></div>')} ${presenceBlock()}</div></section>
    
    ${footerBlock()}
  `;
  // init home services
  var fsrvEl=document.getElementById('fsrvHomeWrap');
  if(fsrvEl)fsrvEl.innerHTML=renderHomeServices(fs,0);
  // cycling hero word
  (function(){var words=['at Scale.','Globally','Across Industries','for Growth','with Impact'];var wi=0;
  setInterval(function(){wi=(wi+1)%words.length;var el=document.getElementById('v1CycleWord');if(el){el.style.opacity=0;setTimeout(function(){var el2=document.getElementById('v1CycleWord');if(el2){el2.textContent=words[wi];el2.style.opacity=1;}},380);}},2600);
  })();
}


function renderProducts(){
  document.getElementById('page-products').innerHTML=`
    <header class="hero dark-inner hero-enhanced"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-3"></div><div class="hero-lines"></div><div class="hero-in"><span class="hpill hero-anim ha1"><span class="hpill-dot"></span>Product Portfolio</span><h1 class="hero-anim ha2">Enterprise Software Built for <span class="grad">Operational Scale</span></h1></div></header>
    <section class="sec"><div class="wrap"><div class="shell"><aside class="rail rail-panel" id="rail-products"></aside><main style="min-width:0"><div id="list-products"></div></main></div></div></section>${ctaBlock()}${footerBlock()}`;
  renderListing('products');
}

function renderServices(){
  document.getElementById('page-services').innerHTML=`
    <header class="hero dark-inner hero-enhanced"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-3"></div><div class="hero-lines"></div><div class="hero-in"><span class="hpill hero-anim ha1"><span class="hpill-dot"></span>Service Offering</span><h1 class="hero-anim ha2">Expert Teams That Extend <span class="grad">Your Delivery Capacity</span></h1></div></header>
    <section class="sec"><div class="wrap"><div class="shell"><aside class="rail rail-panel" id="rail-services"></aside><main style="min-width:0"><div id="list-services"></div></main></div></div></section>${ctaBlock()}${footerBlock()}`;
  renderListing('services');
}

function renderProjects(){
  document.getElementById('page-projects').innerHTML=`
    <header class="hero dark-inner hero-enhanced"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-3"></div><div class="hero-lines"></div><div class="hero-in"><span class="hpill hero-anim ha1"><span class="hpill-dot"></span>Project Engagements</span><h1 class="hero-anim ha2">Proven Delivery Across <span class="grad">High-Stakes Environments</span></h1></div></header>
    <section class="sec"><div class="wrap"><div class="shell"><aside class="rail rail-panel" id="rail-projects"></aside><main style="min-width:0"><div id="list-projects"></div></main></div></div></section>${ctaBlock()}${footerBlock()}`;
  renderListing('projects');
}

/* ===== listing filter engine (Projects / Products / Services) ===== */
const LISTINGS={projects:{type:'project',grid:'three'},products:{type:'product',grid:'three'},services:{type:'service',grid:'three'},clients:{type:'client',grid:'clients'}};
const LIST_FACETS=['Client','Technology','Location','Duration','Sector'];
const FMETA={Client:{label:'Client',search:true},Technology:{label:'Technology'},Location:{label:'Location'},Duration:{label:'Duration'},Sector:{label:'Sector'}};
const FICON={Client:'<path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3.2"/><path d="M22 21v-2a4 4 0 00-3-3.87"/>',Technology:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',Location:'<path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',Duration:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',Sector:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',Type:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',Scale:'<path d="M5 20V12M12 20V5M19 20v-5"/>'};
function ficon(f){return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${FICON[f]||''}</svg>`;}
const PCATS=[['Technology','Enterprise resource planning and HCM platform'],['Healthcare','Digital healthcare and medical platforms'],['NTGapps','Enterprise application suite for telecom and field operations'],['Telecom in a Box','End-to-end BSS/OSS solutions for telecom operators'],['Utilities','Utility billing and management solutions'],['AI','Artificial intelligence products for automation and testing'],['eCommerce','eCommerce store builder and management platform']];
const fState={projects:{},products:{},services:{},clients:{}};
function toggleRailSec(id){const el=document.getElementById(id);if(el)el.classList.toggle('collapsed');}


const lq={projects:'',products:'',services:'',clients:''};
const RAIL_PAGES=['products','projects','services','clients'];
const RAIL_LIST_FACETS=['Sector','Technology','Location','Duration'];
function railFacets(page){return page==='services'?['Technology']:page==='clients'?['Sector','Location']:RAIL_LIST_FACETS;}

/* ── Service Type Filter ────────────────────────────────────────── */
const SVC_TYPES={
  'Outsourcing & Offshoring':['Offshore Development Center (ODC)','Nearshore Center of Excellence','Outsourcing and Offshoring','Digital Transformation','Data Migration'],
  'Systems Design & Integration':['Solution Development','System Integration','Testing as a Service (TaaS)','SAP'],
  'Consulting':['Consulting','Training'],
  'Education & Upskilling':['NTG Academy'],
  'NTG AI':['NTG AI']
};
// Map each service sub-type → parent category (for matching)
const SVC_TYPE_MAP={};
Object.entries(SVC_TYPES).forEach(([cat,subs])=>subs.forEach(s=>{SVC_TYPE_MAP[s]=cat;}));
// Active sub-type selections
let svcTypeActive=new Set();

function svcTypeMatchesItem(it){
  if(!svcTypeActive.size) return true;
  const nm=(it.name||'').toLowerCase();
  for(const cat of svcTypeActive){
    const subs=SVC_TYPES[cat]||[];
    // Match if service name matches any sub-type in the category
    if(subs.some(sub=>nm.includes(sub.toLowerCase())||sub.toLowerCase().includes(nm))) return true;
    // Also match by category keywords
    const catLow=cat.toLowerCase();
    if(nm.includes(catLow.split(' ')[0])) return true;
  }
  return false;
}

function renderSvcTypeRail(){
  const chevSvg='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';
  const typeSvg='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
  let h=`<div class="rail-sec" id="rsec-svc-type"><div class="rail-label" onclick="toggleRailSec('rsec-svc-type')"><span class="rail-label-left">${typeSvg}Service Type</span><span class="rail-collapse-icon">${chevSvg}</span></div><div class="fopts railopts" style="max-height:none">`;
  Object.keys(SVC_TYPES).forEach(cat=>{
    const checked=svcTypeActive.has(cat)?'checked':'';
    h+=`<label class="fopt" style="padding:5px 0"><input type="checkbox" ${checked} onchange="toggleSvcType('${cat.replace(/'/g,"\\'")}')" style="width:14px;height:14px;border-radius:4px;accent-color:var(--red);flex-shrink:0;cursor:pointer"><span>${cat}</span></label>`;
  });
  h+=`</div></div>`;
  return h;
}

function toggleSvcType(cat){
  if(svcTypeActive.has(cat)) svcTypeActive.delete(cat);
  else svcTypeActive.add(cat);
  renderListResults('services');
  renderListRail('services');
}
function railSearch(page,q){lq[page]=q;renderListResults(page);}
function fClearAll(page){fState[page]={};lq[page]='';openPop=null;if(page==='services')svcTypeActive.clear();renderListing(page);}
function listSearchMatch(it,q){q=(q||'').trim().toLowerCase();if(!q)return true;return [it.name,it.desc,it.client,it.tagline].some(s=>(s||'').toLowerCase().includes(q));}
function renderListRail(page){
  const r=document.getElementById('rail-'+page);if(!r)return;
  const ssvg='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  const qv=(lq[page]||'').replace(/"/g,'&quot;');
  let h=`<div class="rail-search">${ssvg}<input id="rsearch-${page}" value="${qv}" oninput="railSearch('${page}',this.value)" placeholder="Search ${page}\u2026" autocomplete="off"></div>`;
  if(page==='services') h+=renderSvcTypeRail();
  railFacets(page).forEach(f=>{const vals=facetValues(page,f);if(!vals.length)return;const any=vals.some(v=>facetedCount(page,f,v)>0||(fState[page][f]||[]).includes(v));if(!any)return;const chevSvg='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';h+=`<div class="rail-sec" id="rsec-${page}-${f}"><div class="rail-label" onclick="toggleRailSec('rsec-${page}-${f}')"><span class="rail-label-left">${ficon(f)}${f}</span><span class="rail-collapse-icon">${chevSvg}</span></div><div class="fopts railopts">${optsHTML(page,f)}</div></div>`;});
  h+=`<button class="clearall" onclick="fClearAll('${page}')">Clear all filters</button>`;
  r.innerHTML=h;
}
function renderListResults(page){
  const cfg=LISTINGS[page];
  const filtered=applyList(page).filter(it=>listSearchMatch(it,lq[page])).filter(it=>page==='services'?svcTypeMatchesItem(it):true);
  const total=DATA.filter(d=>d.type===cfg.type).length;
  const cardFn=page==='products'?featProdCard:page==='projects'?featProjCard:page==='services'?featServiceCard:page==='clients'?clientTile:cardOf;
  const q=(lq[page]||'').trim();
  let chips='';Object.keys(fState[page]).forEach(f=>(fState[page][f]||[]).forEach(v=>chips+=`<span class="fchip"><span class="ft">${f}</span>${cap(v)}<span class="x" onclick="fToggle('${page}','${f}','${esc(v)}')">\u00d7</span></span>`));
  const active=listActive(page)||q;
  const ssvg2='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  let filterBar=`<div class="filter-bar"><div class="filter-bar-search">${ssvg2}<input id="fbar-search-${page}" value="${(lq[page]||'').replace(/"/g,'&quot;')}" oninput="railSearch('${page}',this.value)" placeholder="Search ${page}…" autocomplete="off"></div>`;
  if(chips){filterBar+=chips+'<button class="clearall" style="margin-left:auto" onclick="fClearAll(\'' +page+ '\')" >Clear all</button>';}filterBar+='</div>';
  filterBar+='</div>';
  let head=filterBar+(active?'':'');
  let body;
  const SECTOR_CATS={telecom:'Telecommunications','communication services':'Communication Services',government:'Government & Public Sector',finance:'Finance & Banking',healthcare:'Healthcare',utilities:'Utilities',energy:'Energy',education:'Education',technology:'Technology','real estate':'Real Estate',construction:'Construction',manufacturing:'Manufacturing',materials:'Materials',agriculture:'Agriculture',cross_sector:'Cross Sector'};
  const SCATS=[
    ['Outsourcing & Offshoring',['Offshore Development Center (ODC)','Nearshore Center of Excellence','Outsourcing and Offshoring','Digital Transformation','Data Migration']],
    ['Systems Design & Integration',['Solution Development','System Integration','Testing as a Service (TaaS)','SAP']],
    ['Consulting',['Consulting','Training']],
    ['Education & Upskilling',['NTG Academy']],
    ['NTG AI',['NTG AI']]
  ];
  function pcatGroup(items,keyFn,labelFn,cardFn,gridClass){
    const gc=gridClass||'three';
    const groups={};const order=[];
    items.forEach(it=>{const k=keyFn(it);if(!groups[k]){groups[k]=[];order.push(k);}groups[k].push(it);});
    let out='';let first=true;
    order.forEach(k=>{if(!groups[k].length)return;if(!first)out+='<div class="catsep"></div>';first=false;out+=`<div class="pcat"><div class="pcat-hd"><div class="pcat-hd-text"><span class="pcat-sec-ic">${secIcon(k)}</span><div class="pcat-nm">${labelFn(k)}</div></div><span class="pcat-cnt">${groups[k].length}</span></div><div class="grid ${gc}">${groups[k].map(cardFn).join('')}</div></div>`;});
    return out;
  }
  if(page==='products'&&!listActive(page)&&!q){
    const _catSec={'Technology':'technology','Healthcare':'healthcare','Telecom in a Box':'telecom','NTGapps':'technology','Utilities':'utilities'};
    body='';let first=true;PCATS.forEach(([c,sub])=>{const items=DATA.filter(d=>d.type==='product'&&d.cat===c);if(!items.length)return;if(!first)body+='<div class="catsep"></div>';first=false;body+=`<div class="pcat"><div class="pcat-hd"><div class="pcat-hd-text"><span class="pcat-sec-ic">${secIcon(_catSec[c]||'technology')}</span><div class="pcat-nm">${c}</div></div><span class="pcat-cnt">${items.length}</span></div><div class="grid three" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;">${items.map(featProdCard).join('')}</div></div>`;});
  } else if(page==='projects'&&!listActive(page)&&!q){
    body=pcatGroup(filtered,it=>it.sector||'other',k=>SECTOR_CATS[k]||(k.charAt(0).toUpperCase()+k.slice(1)),featProjCard);
  } else if(page==='services'&&!listActive(page)&&!q){
    body='';let first=true;
    const activeCats=svcTypeActive.size?[...svcTypeActive]:SCATS.map(s=>s[0]);
    SCATS.forEach(([cat,names])=>{
      if(!activeCats.includes(cat))return;
      const items=filtered.filter(it=>names.some(n=>it.name===n||(it.name||'').toLowerCase().includes(n.toLowerCase())||n.toLowerCase().includes((it.name||'').toLowerCase())));
      if(!items.length)return;
      first=false;
      body+=`<div class="pcat"><div class="pcat-hd"><div class="pcat-hd-text"><span class="pcat-sec-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg></span><div class="pcat-nm">${cat}</div></div><span class="pcat-cnt">${items.length}</span></div><div class="fsrv-2col" style="margin-top:16px">${items.map(featServiceCard).join('')}</div></div>`;
    });
    if(!body)body=`<div class="empty"><h3>No services match this filter.</h3><p>Try selecting a different category.</p></div>`;
  } else if(page==='clients'&&!listActive(page)&&!q){
    body=pcatGroup(filtered,it=>it.sector||'other',k=>SECTOR_CATS[k]||(k.charAt(0).toUpperCase()+k.slice(1)),clientTile,'clients');
  } else {
    body=filtered.length?`<div class="grid three" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;">${filtered.map(cardFn).join('')}</div>`:`<div class="empty"><h3>Nothing matches these filters.</h3><p>Try removing a filter or clearing the search.</p></div>`;
  }
  document.getElementById('list-'+page).innerHTML=head+body;
}

function facetValues(page,f){const items=DATA.filter(d=>d.type===LISTINGS[page].type);const set=new Set();items.forEach(it=>vals(it,f).forEach(v=>set.add(v)));if(f==='Sector'){FACETS.Sector.forEach(v=>set.add(v));}let arr=[...set].filter(v=>v&&v!=='cross_sector');if(f==='Duration')arr=BUCKETS.map(b=>b.k).filter(k=>set.has(k));else arr.sort();return arr;}
function passExcept(it,st,ex){return Object.keys(st).every(f=>{if(f===ex)return true;const sel=st[f];if(!sel||!sel.length)return true;return sel.some(v=>has(it,f,v));});}
function facetedCount(page,f,v){return DATA.filter(d=>d.type===LISTINGS[page].type&&passExcept(d,fState[page],f)&&has(d,f,v)).length;}
function applyList(page){const st=fState[page];return DATA.filter(d=>d.type===LISTINGS[page].type).filter(it=>Object.keys(st).every(f=>{const sel=st[f];if(!sel||!sel.length)return true;return sel.some(v=>has(it,f,v));}));}
function listActive(page){return Object.keys(fState[page]).some(f=>fState[page][f]&&fState[page][f].length);}
function fToggle(page,f,v){const st=fState[page];if(!st[f])st[f]=[];const i=st[f].indexOf(v);i>=0?st[f].splice(i,1):st[f].push(v);if(!st[f].length)delete st[f];renderListing(page);}
function fTogglePop(page,f){openPop=(openPop&&openPop.page===page&&openPop.facet===f)?null:{page,facet:f};POP_Q='';renderListing(page);}
function fClear(page){fState[page]={};openPop=null;renderListing(page);}
function popSearch(page,q){POP_Q=q;const b=document.getElementById('popopts');if(b&&openPop)b.innerHTML=optsHTML(page,openPop.facet);}
const TECH_ICONS={'Java':'java','Angular':'angular','Node.js':'nodejs','NodeJS':'nodejs','Python':'python','React':'react','Oracle':'oracle','.NET':'dotnet','SQL Server':'sqlserver','AWS':'aws','Azure':'azure','PostgreSQL':'postgresql','MongoDB':'mongodb','C++':'cpp','Cisco':'cisco','PHP':'php'};
function techImg(v){const f=TECH_ICONS[v];if(f)return '<img src="assets/tech/'+f+'.svg" width="16" height="16" style="object-fit:contain">';return '<span style="font-size:11px;font-weight:800;color:#555">'+v.slice(0,2)+'</span>';}
function optIcon(f,v){
  if(f==='Sector'){const s=SECTOR_MAP[v]||'technology';return '<span class="ic-dot ic-sector"><img src="assets/sectors/'+s+'.svg"></span>';}
  if(f==='Location'){const c=FLAG_MAP[v];return c?'<span class="ic-dot ic-flag"><img src="assets/flags/'+c+'.svg"></span>':'';}
  if(f==='Technology'){const f2=TECH_ICONS[v];return f2?'<span class="ic-dot ic-tech"><img src="assets/tech/'+f2+'.svg"></span>':'<span class="ic-dot ic-tech" style="font-size:9px;font-weight:800;color:#555">'+v.slice(0,2)+'</span>';}
  if(f==='Duration'||f==='Scale'){return '<span class="ic-dot ic-clock"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>';}
  return '';
}
function optsHTML(page,f){
  const sel=fState[page][f]||[];let arr=facetValues(page,f);
  if(f==='Client'&&POP_Q){const q=POP_Q.toLowerCase();arr=arr.filter(v=>v.toLowerCase().includes(q));}
  if(!arr.length)return '<div class="fopt-empty">No matches</div>';
  return arr.map(v=>{const on=sel.includes(v),cnt=facetedCount(page,f,v),zero=f!=='Sector'&&cnt===0&&!on;
    return `<div class="fopt ${on?'on':''} ${zero?'zero':''}" ${zero?'':`onclick="fToggle('${page}','${f}','${esc(v)}')"`}><span class="fck">${on?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5"><path d="M5 13l4 4L19 7"/></svg>':''}</span><span class="fov">${cap(v)}</span><span class="foc">${cnt}</span></div>`;}).join('');
}
function renderListing(page){
  if(RAIL_PAGES.indexOf(page)>-1){renderListRail(page);renderListResults(page);return;}
  const cfg=LISTINGS[page],st=fState[page];
  const filtered=applyList(page);
  const total=DATA.filter(d=>d.type===cfg.type).length;
  const chev='<svg class="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>';
  const bar=LIST_FACETS.map(f=>{
    const enabled=facetValues(page,f).length>=1;
    if(!enabled)return `<div class="fwrap"><button class="fbtn disabled" title="No ${FMETA[f].label.toLowerCase()} data tagged on this page"><span class="fbi">${ficon(f)}</span>${FMETA[f].label}${chev}</button></div>`;
    const n=(st[f]||[]).length,open=openPop&&openPop.page===page&&openPop.facet===f;
    let pop='';
    if(open){const search=FMETA[f].search?`<div class="fpop-search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><input id="popsearch" oninput="popSearch('${page}',this.value)" placeholder="Search ${FMETA[f].label.toLowerCase()}…" autocomplete="off"></div>`:'';
      pop=`<div class="fpop"><div class="fpop-hd">Filter by ${FMETA[f].label}</div>${search}<div class="fopts" id="popopts">${optsHTML(page,f)}</div></div>`;}
    return `<div class="fwrap"><button class="fbtn ${n?'on':''} ${open?'open':''}" onclick="fTogglePop('${page}','${f}')"><span class="fbi">${ficon(f)}</span>${FMETA[f].label}${n?`<span class="fbadge">${n}</span>`:''}${chev}</button>${pop}</div>`;
  }).join('');
  let chips='';Object.keys(st).forEach(f=>(st[f]||[]).forEach(v=>chips+=`<span class="fchip"><span class="ft">${f}</span>${cap(v)}<span class="x" onclick="fToggle('${page}','${f}','${esc(v)}')">×</span></span>`));
  let html='<div class="ftoolbar"><div class="fbar"><span class="fbar-lead"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21v-6M4 11V3M12 21v-9M12 8V3M20 21v-4M20 13V3M1 15h6M9 8h6M17 17h6"/></svg>Filter</span>'+bar+`<div class="fcount">Showing <b>${filtered.length}</b> of ${total}</div></div>`;
  if(listActive(page))html+=`<div class="fchips">${chips}<button class="clearall" style="margin-left:4px" onclick="fClear('${page}')">Clear all</button></div>`;
  html+='</div><div class="fsep"></div>';
  if(page==='products'&&!listActive(page)){
    const _catSec2={'Technology':'technology','Healthcare':'healthcare','Telecom in a Box':'telecom','NTGapps':'technology','Utilities':'utilities'};
    let body='',first=true;PCATS.forEach(([c,sub])=>{const items=DATA.filter(d=>d.type==='product'&&d.cat===c);if(!items.length)return;if(!first)body+='<div class="catsep"></div>';first=false;body+=`<div class="pcat"><div class="pcat-hd"><div class="pcat-hd-text"><span class="pcat-sec-ic">${secIcon(_catSec2[c]||'technology')}</span><div class="pcat-nm">${c}</div></div><span class="pcat-cnt">${items.length}</span></div><div class="grid three" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;">${items.map(featProdCard).join('')}</div></div>`;});html+=body;
  }else{
    const cardFn=page==='products'?featProdCard:page==='services'?featServiceCard:page==='projects'?featProjCard:cardOf;
    html+=filtered.length?`<div class="grid three" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;">${filtered.map(cardFn).join('')}</div>`:`<div class="empty"><h3>Nothing matches these filters.</h3><p>Try removing a filter to broaden results.</p></div>`;
  }
  document.getElementById('list-'+page).innerHTML=html;
  if(openPop&&openPop.page===page&&FMETA[openPop.facet].search){const si=document.getElementById('popsearch');if(si){si.value=POP_Q;si.focus();}}
}
document.addEventListener('click',e=>{if(openPop&&!e.target.closest('.fwrap')){const p=openPop.page;openPop=null;renderListing(p);}});

function renderClients(){
  document.getElementById('page-clients').innerHTML=`
    <header class="hero dark-inner hero-enhanced"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-3"></div><div class="hero-lines"></div><div class="hero-in"><span class="hpill hero-anim ha1"><span class="hpill-dot"></span>Our Clients</span><h1 class="hero-anim ha2">Trusted by <span class="grad">Market Leaders</span> Across Four Continents</h1></div></header>
    <section class="sec"><div class="wrap"><div class="shell"><aside class="rail rail-panel" id="rail-clients"></aside><main style="min-width:0"><div id="list-clients"></div></main></div></div></section>${ctaBlock()}${footerBlock()}`;
  renderListing('clients');
}

function renderAbout(){
  const edge=[['1','Product Thinking','We approach every engagement with a product mindset — building for long-term value, not just project completion.'],['2','Delivery Discipline','Agile methodology, transparent reporting and measurable outcomes keep every engagement on track.'],['3','Regional Scale','With offices across North America, the Middle East and Africa, we deliver globally with local understanding.'],['4','Deep Domain Expertise','30+ years of telecom and enterprise experience across billing, OSS/BSS, network operations and integration.']]
    .map(([n,h,p])=>`<div class="edgecard"><div class="h"><span class="nn">${n}</span><h4>${h}</h4></div><p>${p}</p></div>`).join('');

  const commitments=[
    {icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0 3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',title:'Customers',text:"We're committed to providing flexible, quality services at a competitive price. We accelerate and simplify the digital transformation journey for our clients by providing the right solution delivered by passionate professionals both on their sites and offshore."},
    {icon:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',title:'People',text:"We're committed to helping our staff grow and develop personally and professionally. We empower our staff to build and deliver challenging projects while providing opportunities for training and career advancement both internally and outside NTG."},
    {icon:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',title:'Shareholders',text:"We're committed to continuing our growth trajectory and profitability. With years of consistent performance under our belt, we're actively identifying opportunities to improve operations."},
    {icon:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',title:'Community',text:"We're committed to passing our experience down to the next generation. We provide youth education and employment opportunities tailored to the modern job market through the NTG School."},
  ].map(c=>`<div class="commit-card"><div class="commit-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${c.icon}</svg></div><h4 class="commit-title">${c.title}</h4><p class="commit-text">${c.text}</p></div>`).join('');

  const R2=window.__resources||{};
  const boardMembers=[
    {name:'Ashraf Zaghloul',role:'Chief Executive Officer',img:R2.teamAshraf||'assets/team-ashraf-zaghloul.png'},
    {name:'Kristine Lewis',role:'President & Director',img:R2.teamKristine||'assets/team-kristine-lewis.png'},
    {name:'Adel Zaghloul',role:'Chairman, NTG Egypt',img:R2.teamAdel||'assets/team-adel-zaghloul.png'},
    {name:'Gamal Metwally',role:'Executive Vice President',img:R2.teamGamal||'assets/team-gamal-metwally.png'},
    {name:'Adam Zaghloul',role:'VP Strategy & Planning',img:R2.teamAdam||'assets/team-adam-zaghloul.png'},
  ].map(m=>`<div class="board-member"><div class="board-av"><img src="${m.img}" alt="${m.name}"></div><div class="board-nm">${m.name}</div><div class="board-rl">${m.role}</div></div>`).join('');

  const teamMembers=[
    {name:'Yaser Yousef',role:'Chief Technology Officer',img:R2.teamYaser||'assets/team-yaser-yousef.png'},
    {name:'Fouad Selim',role:'Chief Product Officer',img:R2.teamFouad||'assets/team-fouad-selim.png'},
    {name:'Mohamed Fouad',role:'Senior Vice President',img:R2.teamMohamed||'assets/team-mohamed-fouad.png'},
    {name:'Medhat Helmy',role:'Senior VP, Professional Services',img:R2.teamMedhat||'assets/team-medhat-helmy.png'},
    {name:'Mohammed Wahbi',role:'Product Director',img:R2.teamWahbi||'assets/team-mohammed-wahbi.png'},
    {name:'Walid Anwar',role:'VP Business Development',img:R2.teamWalid||'assets/team-walid-anwar.png'},
    {name:'Sherif Gaber',role:'Oman GM',img:R2.teamSherif||'assets/team-sherif-gaber.png'},
    {name:'Ahmed Youssef',role:'Director Business Analysis',img:R2.teamAhmed||'assets/team-ahmed-youssef.png'},
    {name:'May Youssef',role:'VP Sales',img:R2.teamMay||'assets/team-may-youssef.png'},
    {name:'Izzat Alkilani',role:'Finance Director',img:R2.teamIzzat||'assets/team-izzat-alkilani.png'},
  ].map((m,i)=>`<div class="leader-card"><img src="${m.img}" alt="${m.name}"><div class="leader-overlay"></div><div class="leader-info"><div class="leader-nm">${m.name}</div><div class="leader-rl">${m.role}</div></div></div>`).join('');

  document.getElementById('page-about').innerHTML=`
    <header class="hero dark-inner hero-enhanced"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-3"></div><div class="hero-lines"></div><div class="hero-in"><span class="hpill hero-anim ha1"><span class="hpill-dot"></span>About NTG Clarity</span><h1 class="hero-anim ha2">30 Years of <span class="grad">Digital Transformation</span> Leadership</h1></div></header>

    <section class="sec about-who-sec"><div class="wrap">
      <div class="about-who-grid">
        <div class="about-who-left">
          <div class="about-big-num" id="aboutYearsNum">30</div>
          <div class="about-big-lbl">Years building the digital backbone<br>of leading enterprises.</div>
          <p class="about-who-desc">NTG Clarity is a digital transformation solutions provider with experience across North America &amp; the Middle East. We accelerate and simplify the digital journey for clients in enterprise telecom, financial, and IT sectors — serving as a long-term technology partner in a rapidly changing world.</p>

        </div>
        <div class="about-who-right">
          <div class="vme2-card" tabindex="0">
            <div class="vme2-top"><div class="vme2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div class="vme2-label">Our Vision</div><div class="vme2-arrow">↓</div></div>
            <div class="vme2-body">To make digital transformation accessible worldwide, capitalizing on our deep knowledge and experience in different industries to provide competitive, top-tier products and services.</div>
          </div>
          <div class="vme2-card" tabindex="0">
            <div class="vme2-top"><div class="vme2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="vme2-label">Our Mission</div><div class="vme2-arrow">↓</div></div>
            <div class="vme2-body">Enabling clients' Business Excellence and efficiency by architecting and delivering world class portfolios of integrated IT solutions owned by distinguished and highly motivated professionals.</div>
          </div>
          <div class="vme2-card vme2-accent" tabindex="0">
            <div class="vme2-top"><div class="vme2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div class="vme2-label">Our Edge</div><div class="vme2-arrow">↓</div></div>
            <div class="vme2-body">With more than 30 years in the digital transformation business, we offer an experienced, cost effective, globally diversified and culturally aware workforce of over 700 professionals.</div>
          </div>
        </div>
      </div>
    </div></section>

    <section class="sec alt"><div class="wrap"><div class="abcards">
      <div class="abcard"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div><h4>A Journey of Innovation</h4><p>From our first telecom project to becoming a trusted partner for leading operators across the Middle East, Africa and North America — NTG's journey is defined by continuous innovation and delivery excellence.</p></div>
      <div class="abcard"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></div><h4>Enterprise at Our Core</h4><p>We build and integrate enterprise-grade products and services that help telecom operators, financial institutions and government organizations modernize their operations and accelerate digital transformation.</p></div>
    </div></div></section>

    <section class="sec pcd-sec"><div class="pcd-row">
      <div class="pcd-stat anim-ready"><div class="pcd-title">30+</div><div class="pcd-lbl">Years Experience</div></div>
      <div class="pcd-stat anim-ready"><div class="pcd-title">1300+</div><div class="pcd-lbl">Engineers &amp; Experts</div></div>
      <div class="pcd-stat anim-ready"><div class="pcd-title">50+</div><div class="pcd-lbl">Enterprise Clients</div></div>
      <div class="pcd-stat anim-ready"><div class="pcd-title">7</div><div class="pcd-lbl">Product Categories</div></div>
    </div></section>

    <section class="sec"><div class="wrap">
      <div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red);"></div><span class="fprod-eb" style="color:var(--red);">Our Promises</span></div>
      <h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,32px);margin-top:4px;margin-bottom:36px;">What We Are Promising You?</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Commitment on Time Delivery</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">We guarantee on-time delivery for all projects, ensuring your business never misses a deadline.</p></div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M9 12l2 2 4-4"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Money Back Guarantee</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">Your satisfaction is our priority. If not satisfied, we offer a hassle-free money-back guarantee.</p></div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0-7.75"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Effective Partnerships</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">We build lasting relationships with our clients, becoming true partners in their success journey.</p></div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M3 20v-2a9 9 0 0 1 18 0v2"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Expert Consultation</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">Access to industry experts who provide valuable insights and strategic guidance for your projects.</p></div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Transparent Communication</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">Open and honest communication at every step, keeping you informed throughout the process.</p></div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .2s,box-shadow .2s;" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 28px rgba(0,0,0,.08)'" onmouseleave="this.style.transform='';this.style.boxShadow=''"><div style="width:44px;height:44px;border-radius:12px;background:var(--red-bg);border:1px solid var(--red-line);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div style="font:700 15px/1.2 'Poppins';color:#3B3B42;">Result Oriented Solutions</div><p style="font-size:13px;color:var(--muted);line-height:1.7;margin:0;">Our focus is always on delivering measurable results that drive your business growth.</p></div>
      </div>
    </div></section>

    <section class="sec alt"><div class="wrap">
      <div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red);"></div><span class="fprod-eb" style="color:var(--red);">Our DNA</span></div>
      <h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,32px);margin-top:4px;margin-bottom:40px;">What Are Our Core Values?</h2>
      <div style="display:flex;flex-direction:column;gap:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;">
        <div style="display:grid;grid-template-columns:72px 1fr auto;align-items:center;gap:28px;padding:24px 28px;border-bottom:1px solid var(--line2);transition:background .18s;" onmouseenter="this.style.background='#fafafa'" onmouseleave="this.style.background=''"><div style="font:900 36px/1 'Poppins';color:var(--red);letter-spacing:-.04em;opacity:.18;transition:opacity .2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='.18'">01</div><div><div style="font:700 16px/1.2 'Poppins';color:#3B3B42;margin-bottom:4px;">Achievement Oriented</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">We set ambitious goals and relentlessly pursue excellence in everything we deliver.</div></div><div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;"></div></div>
        <div style="display:grid;grid-template-columns:72px 1fr auto;align-items:center;gap:28px;padding:24px 28px;border-bottom:1px solid var(--line2);transition:background .18s;" onmouseenter="this.style.background='#fafafa'" onmouseleave="this.style.background=''"><div style="font:900 36px/1 'Poppins';color:var(--red);letter-spacing:-.04em;opacity:.18;transition:opacity .2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='.18'">02</div><div><div style="font:700 16px/1.2 'Poppins';color:#3B3B42;margin-bottom:4px;">Customer Focus</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">Our clients are at the center of every decision — their success is our success.</div></div><div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;"></div></div>
        <div style="display:grid;grid-template-columns:72px 1fr auto;align-items:center;gap:28px;padding:24px 28px;border-bottom:1px solid var(--line2);transition:background .18s;" onmouseenter="this.style.background='#fafafa'" onmouseleave="this.style.background=''"><div style="font:900 36px/1 'Poppins';color:var(--red);letter-spacing:-.04em;opacity:.18;transition:opacity .2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='.18'">03</div><div><div style="font:700 16px/1.2 'Poppins';color:#3B3B42;margin-bottom:4px;">Teamwork</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">Great results come from diverse, collaborative teams united by a shared purpose.</div></div><div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;"></div></div>
        <div style="display:grid;grid-template-columns:72px 1fr auto;align-items:center;gap:28px;padding:24px 28px;border-bottom:1px solid var(--line2);transition:background .18s;" onmouseenter="this.style.background='#fafafa'" onmouseleave="this.style.background=''"><div style="font:900 36px/1 'Poppins';color:var(--red);letter-spacing:-.04em;opacity:.18;transition:opacity .2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='.18'">04</div><div><div style="font:700 16px/1.2 'Poppins';color:#3B3B42;margin-bottom:4px;">Ownership</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">We take full accountability for our commitments and deliver on our promises.</div></div><div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;"></div></div>
        <div style="display:grid;grid-template-columns:72px 1fr auto;align-items:center;gap:28px;padding:24px 28px;transition:background .18s;" onmouseenter="this.style.background='#fafafa'" onmouseleave="this.style.background=''"><div style="font:900 36px/1 'Poppins';color:var(--red);letter-spacing:-.04em;opacity:.18;transition:opacity .2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='.18'">05</div><div><div style="font:700 16px/1.2 'Poppins';color:#3B3B42;margin-bottom:4px;">Visioning &amp; Strategic Direction</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">We think long-term, anticipate change, and guide our clients toward sustainable growth.</div></div><div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;"></div></div>
      </div>
    </div></section>

    <section class="sec"><div class="wrap">
      <div class="sec-title-block"><div class="sec-red-lines"><span></span><span></span></div><div class="sec-sup">The NTG Edge</div><h2 class="sec-h">Why Choose NTG</h2></div>
      <div class="edge" style="margin-top:18px">${edge}</div>
    </div></section>

    <section class="sec alt"><div class="wrap">
      <div class="sec-title-block"><div class="sec-red-lines"><span></span><span></span></div><div class="sec-sup">Our Commitments</div><h2 class="sec-h">What We Stand For</h2></div>
      <div class="commit-grid">${commitments}</div>
    </div></section>

    <section class="board-dark"><div class="wrap">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0;">
        <div><div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red);"></div><span class="fprod-eb" style="color:var(--red);">Leadership</span></div><h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,30px);margin-top:4px;">Our Board</h2></div>
      </div>
      <div class="board-dark-grid">${boardMembers}</div>
    </div></section>

    <section class="sec"><div class="wrap">
      <div class="fprod-top" style="justify-content:flex-start;margin-bottom:6px;"><div class="fprod-rule" style="max-width:32px;background:var(--red);"></div><span class="fprod-eb" style="color:var(--red);">Our People</span></div>
      <h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,30px);margin-top:4px;margin-bottom:0;">Our Leaders</h2>
      <div class="leaders-grid">${teamMembers}</div>
    </div></section>

    <section class="sec alt"><div class="wrap">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;margin-top:8px;">
        <div>
          <h2 class="fprod-title" style="font-size:clamp(22px,2.4vw,32px);margin:0 0 20px;line-height:1.15;">The NTG Clarity Channel Partner Program</h2>
          <p style="font-size:14px;color:var(--muted);line-height:1.75;margin:0 0 16px;">A strategic alliance designed to accelerate global market reach and drive the adoption of our high-margin, specialized solutions. We're engineered to move beyond simple resale — we build a high-impact, mutually profitable ecosystem where your expertise meets our technology.</p>
          <p style="font-size:14px;color:var(--muted);line-height:1.75;margin:0 0 24px;">Our program is founded on transparency, structure, and aggressive support, ensuring every partner has a clear path to success and profitability. We focus on long-term, scalable revenue for both NTG Clarity and your business.</p>
          <div style="background:var(--red-bg);border:1px solid var(--red-line);border-radius:10px;padding:20px 22px;">
            <div style="font:700 11px/1 'Poppins';letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:10px;">If your business is positioned to deliver complex solutions and seeks a program that protects and rewards your investment</div>
            <p style="font-size:13.5px;color:#3B3B42;line-height:1.65;margin:0;">You are an ideal candidate for the NTG Clarity CPP.</p>
          </div>
        </div>
        <div>
          <div style="font:700 15px/1.2 'Poppins';color:#3B3B42;letter-spacing:-.01em;margin-bottom:20px;">Who We Partner With</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border:1px solid var(--line);border-left:3px solid var(--red);border-radius:0 10px 10px 0;padding:18px 20px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0 7.75"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><div style="font:700 13px/1 'Poppins';color:#3B3B42;">Market &amp; Customer Fit</div></div>
              <p style="font-size:13px;color:var(--muted);line-height:1.65;margin:0;">Established relationships within our key verticals (Telecom, Banking, Government) and a customer base that requires complex enterprise integration.</p>
            </div>
            <div style="background:#fff;border:1px solid var(--line);border-left:3px solid var(--red);border-radius:0 10px 10px 0;padding:18px 20px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><div style="font:700 13px/1 'Poppins';color:#3B3B42;">Technical Capability</div></div>
              <p style="font-size:13px;color:var(--muted);line-height:1.65;margin:0;">Existing technical teams with proven experience in systems integration, complex deployments, and managing high-availability enterprise environments.</p>
            </div>
            <div style="background:#fff;border:1px solid var(--line);border-left:3px solid var(--red);border-radius:0 10px 10px 0;padding:18px 20px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0221d" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><div style="font:700 13px/1 'Poppins';color:#3B3B42;">Cultural Fit &amp; Commitment</div></div>
              <p style="font-size:13px;color:var(--muted);line-height:1.65;margin:0;">A shared commitment to high ethical standards, transparency, and a minimum resource commitment (dedicated Sales and Technical FTEs) to the NTG Clarity partnership.</p>
            </div>
          </div>
        </div>
      </div>
    </div></section>

    <section class="sec"><div class="wrap">${presenceBlock()}</div></section>
    ${ctaBlock()}${footerBlock()}`;
  setTimeout(()=>{ if(window.initAnims) window.initAnims(); },80);
}



/* ===== search results page v2 ===== */
let SRP_TOKENS=[],SRP_TEXT='',SRP_TYPES=[];
function srpInitials(n){return n.split(' ').filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join('');}
function srpPass(it){
  const byF={};SRP_TOKENS.forEach(t=>{(byF[t.facet]=byF[t.facet]||[]).push(t.value);});
  if(!Object.keys(byF).every(f=>byF[f].some(v=>has(it,f,v))))return false;
  if(SRP_TYPES.length&&!SRP_TYPES.includes(it.type))return false;
  if(SRP_TEXT){const q=SRP_TEXT.toLowerCase();if(!(it.name+' '+(it.client||'')+' '+(it.desc||'')+' '+(it.techs||[]).join(' ')+' '+cap(it.sector||'')+' '+(it.locations||[]).join(' ')).toLowerCase().includes(q))return false;}
  return true;
}
function srpDrillClient(name){
  SRP_TOKENS=[{facet:'Client',value:name,key:'client'}];
  SRP_TEXT='';
  SRP_TYPES=['project','product','service'];
  renderSearchResults();
  window.scrollTo(0,0);
}
function srpResults(){return DATA.filter(srpPass);}
function srpFacetCount(f,v){
  const byF={};SRP_TOKENS.forEach(t=>{if(t.facet!==f)(byF[t.facet]=byF[t.facet]||[]).push(t.value);});
  return DATA.filter(it=>{
    if(SRP_TYPES.length&&!SRP_TYPES.includes(it.type))return false;
    if(!Object.keys(byF).every(fk=>byF[fk].some(vv=>has(it,fk,vv))))return false;
    return has(it,f,v);
  }).length;
}
function srpTypeCount(t){
  const byF={};SRP_TOKENS.forEach(tk=>{(byF[tk.facet]=byF[tk.facet]||[]).push(tk.value);});
  return DATA.filter(it=>it.type===t&&Object.keys(byF).every(f=>byF[f].some(v=>has(it,f,v)))).length;
}
function srpToggleToken(facet,value){
  const i=SRP_TOKENS.findIndex(t=>t.facet===facet&&t.value===value);
  if(i>=0)SRP_TOKENS.splice(i,1);else SRP_TOKENS.push({facet,value,key:Object.keys(FK).find(k=>FK[k]===facet)||facet.toLowerCase()});
  renderSearchResults();
}
function srpToggleType(t){const i=SRP_TYPES.indexOf(t);i>=0?SRP_TYPES.splice(i,1):SRP_TYPES.push(t);renderSearchResults();}
function srpRemoveChip(facet,value){const i=SRP_TOKENS.findIndex(t=>t.facet===facet&&t.value===value);if(i>=0){SRP_TOKENS.splice(i,1);renderSearchResults();}}
function srpClearAll(){SRP_TOKENS=[];SRP_TEXT='';SRP_TYPES=[];renderSearchResults();}
function srpRemoveChipIdx(i){if(i>=0&&i<SRP_TOKENS.length){SRP_TOKENS.splice(i,1);renderSearchResults();}}
function srpClearText(){SRP_TEXT="";renderSearchResults();}
function srpFvClick(i){var x=window._srpFV&&window._srpFV[i];if(x)srpToggleToken(x.f,x.v);}
function srpTpClick(i){var x=window._srpTP&&window._srpTP[i];if(x)srpToggleType(x);}
function renderSearchResults(){
  var allRes=srpResults();

  // chips for filter bar
  var chipHtml=SRP_TOKENS.map(function(t,i){
    return '<span class="fchip"><span class="ft">'+t.facet+'</span>'+cap(t.value)+'<span class="x" onclick="srpRemoveChipIdx('+i+')">×</span></span>';
  }).join('')+(SRP_TEXT?'<span class="fchip"><span class="ft">Search</span>'+SRP_TEXT+'<span class="x" onclick="srpClearText()">×</span></span>':'');

  var ssvg='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  var filterBar='<div class="filter-bar"><div class="filter-bar-search">'+ssvg+'<input value="'+SRP_TEXT.replace(/"/g,'&quot;')+'" oninput="SRP_TEXT=this.value;renderSearchResults()" placeholder="Search results…" autocomplete="off"></div>';
  filterBar+=chipHtml;
  if(chipHtml)filterBar+='<button class="clearall" style="margin-left:auto" onclick="srpClearAll()">Clear all</button>';
  filterBar+='</div>';

  // facet rail — Type section first
  window._srpFV=[];
  var SRAIL_FACETS=['Sector','Technology','Location'];
  var railH='<div class="rail-sec"><div class="rail-label"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Type</div><div class="fopts railopts">';
  var TYPE_DEFS=[['product','Products'],['project','Projects'],['service','Services'],['client','Clients']];
  TYPE_DEFS.forEach(function(pair){
    var t=pair[0],l=pair[1];
    var on=SRP_TYPES.includes(t);
    var cnt=allRes.filter(function(i){return i.type===t;}).length;
    railH+='<div class="fopt'+(on?' on':'')+(cnt===0&&!on?' zero':'')+'"'+(cnt===0&&!on?'':' onclick="srpToggleType(\''+t+'\')"')+'><span class="fck">'+(on?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5"><path d="M5 13l4 4L19 7"/></svg>':'')+'</span><span class="fov">'+l+'</span><span class="foc">'+cnt+'</span></div>';
  });
  railH+='</div></div>';
  SRAIL_FACETS.forEach(function(f){
    var vals2=FACETS[f]||[];if(!vals2.length)return;
    var anyVisible=vals2.some(function(v){return srpFacetCount(f,v)>0||SRP_TOKENS.some(function(t){return t.facet===f&&t.value===v;});});
    if(!anyVisible)return;
    railH+='<div class="rail-sec"><div class="rail-label">'+ficon(f)+f+'</div><div class="fopts railopts">';
    vals2.forEach(function(v){
      var on=SRP_TOKENS.some(function(t){return t.facet===f&&t.value===v;});
      var cnt=srpFacetCount(f,v);
      var zero=cnt===0&&!on;
      window._srpFV.push({f:f,v:v});
      railH+='<div class="fopt'+(on?' on':'')+(zero?' zero':'')+'"'+(zero?'':' onclick="srpFvClick('+(window._srpFV.length-1)+')"')+'><span class="fck">'+(on?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5"><path d="M5 13l4 4L19 7"/></svg>':'')+'</span><span class="fov">'+cap(v)+'</span><span class="foc">'+cnt+'</span></div>';
    });
    railH+='</div></div>';
  });
  if(SRP_TOKENS.length||SRP_TEXT)railH+='<button class="clearall" onclick="srpClearAll()">Clear all filters</button>';

  // Determine display mode: grouped by client only when searching by client name
  var isClientSearch = SRP_TOKENS.some(function(t){return t.facet==='Client';}) ||
    (SRP_TEXT && DATA.some(function(d){return d.type==='client'&&d.name.toLowerCase().indexOf(SRP_TEXT.toLowerCase())>=0;}));

  var body='';
  if(isClientSearch){
    // Grouped by client mode
    var nonClientRes=allRes.filter(function(i){return i.type!=='client';});
    var clientRes2=allRes.filter(function(i){return i.type==='client';});
    var clientNames=[];
    nonClientRes.forEach(function(i){if(i.client&&clientNames.indexOf(i.client)<0)clientNames.push(i.client);});
    clientRes2.forEach(function(c){if(clientNames.indexOf(c.name)<0)clientNames.push(c.name);});

    clientNames.forEach(function(nm){
      var cObj=DATA.find(function(d){return d.type==='client'&&d.name===nm;});
      var items=nonClientRes.filter(function(i){return i.client===nm;});
      var logoHtml=cObj&&cObj.logo?'<img src="'+cObj.logo+'" alt="'+nm+'">':'<span class="clmono">'+nm.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase()+'</span>';
      var secBadge=cObj&&cObj.sector?'<span class="srp-cl-badge">'+cap(cObj.sector)+'</span>':'';
      var locBadge=cObj&&cObj.locations&&cObj.locations[0]?'<span class="srp-cl-badge">'+cObj.locations[0]+'</span>':'';
      var clickAttr=cObj?' onclick="openClientDetail('+DATA.indexOf(cObj)+')" style="cursor:pointer"':'';
      body+='<div class="srp-client-block">';
      body+='<div class="srp-cl-head"'+clickAttr+'><div class="srp-cl-logo">'+logoHtml+'</div><div class="srp-cl-info"><div class="srp-cl-name">'+nm+'</div><div class="srp-cl-tags">'+secBadge+locBadge+'</div></div><div class="srp-cl-count">'+items.length+' result'+(items.length===1?'':'s')+'</div></div>';
      if(items.length){
        body+='<div class="grid three" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;">';
        items.forEach(function(it){
          if(it.type==='product')body+=featProdCard(it);
          else if(it.type==='project')body+=featProjCard(it);
          else if(it.type==='service')body+=featServiceCard(it);
        });
        body+='</div>';
      }
      body+='</div>';
    });
  } else {
    // Flat mode — group by type sections
    var products2=allRes.filter(function(i){return i.type==='product';});
    var projects2=allRes.filter(function(i){return i.type==='project';});
    var services2=allRes.filter(function(i){return i.type==='service';});
    var clients3=allRes.filter(function(i){return i.type==='client';});
    function srpSec(title,items,cardFn){
      if(!items.length)return '';
      return '<div class="pcat"><div class="pcat-hd"><div class="pcat-hd-text"><div class="pcat-nm">'+title+'</div></div><span class="pcat-cnt">'+items.length+'</span></div><div class="grid three">'+items.map(cardFn).join('')+'</div></div><div class="catsep"></div>';
    }
    body=srpSec('Products',products2,featProdCard)+srpSec('Projects',projects2,featProjCard)+srpSec('Services',services2,featServiceCard);
  }

    var emptyHTML='<div class="empty" style="margin-top:40px"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg><h3>No results match your filters</h3><p>Try removing a filter or adjusting your search to expand results.</p></div>';

  document.getElementById('page-search').innerHTML=
    '<header class="hero dark-inner" style="padding:24px 0"><div class="wrap"><h1 style="font-size:28px;margin:0 0 4px;font-weight:800">Search Results</h1><p style="opacity:.6;margin:0;font-size:13px;font-weight:500">'+allRes.length+' result'+(allRes.length===1?'':'s')+' found'+(SRP_TOKENS.length?' · '+SRP_TOKENS.map(function(t){return t.value;}).join(', '):'')+'</p></div></header>'+
    '<section class="sec"><div class="wrap"><div class="shell"><aside class="rail rail-panel">'+railH+'</aside><main style="min-width:0">'+filterBar+(body||emptyHTML)+'</main></div></div></section>'+
    footerBlock();
}

/* ===== router ===== */
const RENDERED={};
function _renderPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  var pg=document.getElementById('page-'+name);
  if(!pg){name='home';pg=document.getElementById('page-home');}
  pg.classList.add('on');
  document.querySelectorAll('#navlinks a').forEach(a=>a.classList.toggle('active',a.dataset.pg===name));
  var navEl=document.querySelector('nav');if(navEl){navEl.classList.toggle('nav-dark',name!=='home');}
  if(!RENDERED[name]||name==='home'||name==='clients'||name==='about'){
    ({home:renderHome,products:renderProducts,services:renderServices,projects:renderProjects,clients:renderClients,about:renderAbout}[name]||(()=>{}))();
    RENDERED[name]=true;
  }
  if(name==='home'){setTimeout(setupCounters,40);setTimeout(function(){updateFeatNav('fprodGrid');updateFeatNav('fprojGrid');updateFeatNav('fservGrid');},90);}
  window.scrollTo(0,0);
}

/* ===== product detail page ===== */
function pdI(p){return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
function _openProduct(i){var it=DATA[i];if(!it||it.type!=='product')return openModal(i);
  document.getElementById('page-product').innerHTML=renderProductDetail(it);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.getElementById('page-product').classList.add('on');
  var navEl=document.querySelector('nav');if(navEl)navEl.classList.add('nav-dark');
  document.querySelectorAll('#navlinks a').forEach(a=>a.classList.remove('active'));
  window.scrollTo(0,0);
}
function renderProductDetail(it){
  var TECH_ICONS={
    'Angular':(window.__resources&&window.__resources.techAngular||'assets/tech-angular.png'),'Node.js':(window.__resources&&window.__resources.techNode||'assets/tech-node.png'),'NodeJS':(window.__resources&&window.__resources.techNode||'assets/tech-node.png'),
    'Java':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
    'Oracle':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="9" ry="5"/><path d="M3 12a9 5 0 0018 0"/></svg>',
    'Python':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c-4 0-5 2-5 4v3h5v1H6a2 2 0 00-2 2v4c0 2 1 4 5 4h2c0-1 1-1.5 1-2v-1h-4v-1h6c2 0 3-2 3-4V9c0-2-1-6-5-6zm-1 2h2a1 1 0 010 2h-2a1 1 0 010-2z"/></svg>',
    'PostgreSQL':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6a7 3 0 0014 0V6"/></svg>',
    'Spring Boot':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
    'Microservices':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 4M14 11l3-4M14 13l3 4"/></svg>',
    'React':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></svg>',
  };
  var CLIENT_LOGOS={
    'Etisalat':(window.__resources&&window.__resources.logoEtisalat||'assets/logo-etisalat.png'),'e&':(window.__resources&&window.__resources.logoEtisalat||'assets/logo-etisalat.png'),
    'Vodafone':(window.__resources&&window.__resources.logoVodafone||'assets/logo-vodafone.png'),
    'ELM':(window.__resources&&window.__resources.logoElm||'assets/logo-elm.jpg'),'Elm':(window.__resources&&window.__resources.logoElm||'assets/logo-elm.jpg'),
    'Ministry of Investment':(window.__resources&&window.__resources.logoMift||'assets/logo-mift.png'),'Ministry of Trade':(window.__resources&&window.__resources.logoMift||'assets/logo-mift.png'),
    'STC':(window.__resources&&window.__resources.logoStc||'assets/logo-stc.png'),'Saudi Telecom':(window.__resources&&window.__resources.logoStc||'assets/logo-stc.png'),
    'Zain':(window.__resources&&window.__resources.logoZain||'assets/logo-zain.png'),'Zain Saudi':(window.__resources&&window.__resources.logoZain||'assets/logo-zain.png'),
    'Mobily':(window.__resources&&window.__resources.logoMobily||'assets/logo-mobily.jpg'),
    'AL Rajhi':(window.__resources&&window.__resources.logoAlrajhi||'assets/logo-alrajhi.png'),'Al Rajhi':(window.__resources&&window.__resources.logoAlrajhi||'assets/logo-alrajhi.png'),
    'National Water':(window.__resources&&window.__resources.logoNwc||'assets/logo-nwc.jpg'),'NWC':(window.__resources&&window.__resources.logoNwc||'assets/logo-nwc.jpg'),
    'Royal Commission':(window.__resources&&window.__resources.logoRcy||'assets/logo-rcy.png'),'RC Yanbu':(window.__resources&&window.__resources.logoRcy||'assets/logo-rcy.png'),
  };
  function getClientLogo(name){var k=Object.keys(CLIENT_LOGOS).find(function(k){return name.toLowerCase().indexOf(k.toLowerCase())>=0;});return k?CLIENT_LOGOS[k]:null;}
  function getTechIcon(t){var k=Object.keys(TECH_ICONS).find(function(k){return t.toLowerCase().indexOf(k.toLowerCase())>=0||k.toLowerCase().indexOf(t.toLowerCase())>=0;});return k?TECH_ICONS[k]:null;}

  var feats=[
    ['Low-Code Builder','Drag-and-drop UI forms, rules engine and workflow composer — no coding needed.','<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'],
    ['Workflow Automation','Visual process automation from request to resolution with approvals, timers and SLA tracking.','<circle cx="5" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 12h5M12 7v5M14 12h5M12 14v5"/>'],
    ['ITSM Suite','Incidents, problems, changes and service requests managed in one configurable module.','<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'],
    ['Smart Operations','Service catalog, CMDB, SLA dashboards and notification engine in a single operational view.','<path d="M3 3h18v5H3zM3 11h18v5H3zM3 19h18"/><path d="M7 7h.01M7 15h.01"/>'],
    ['Integration Engine','REST/SOAP APIs, ERP/CRM connectors and microservices orchestration out of the box.','<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M20 4v7a4 4 0 01-4 4H6"/>'],
    ['Flexible Deployment','On-premises, cloud or hybrid — scalable microservices ready for enterprise scale.','<path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 1118 18z"/>'],
    ['Security & Governance','Role-based access, policy enforcement, full audit trail and compliance controls built-in.','<path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>']
  ];
  var ov=[
    ['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','Faster Delivery & Lower Cost','Low-code/no-code tools cut development time, IT dependency and operational costs.'],
    ['<path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>','Governance & Security','Built-in role-based access and compliance controls keep every solution policy-compliant.'],
    ['<path d="M5 20V10M12 20V4M19 20v-7"/>','Operational Excellence','Workflow automation, ITSM and integrations streamline operations and improve service quality.'],
    ['<path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 1118 18z"/>','Deployment & Architecture','On-premises or cloud using scalable microservices for secure, enterprise-grade delivery.'],
    ['<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>','Overall Value Proposition','Scale citizen development, accelerate transformation and deliver secure automation enterprise-wide.']
  ];
  var fits=[
    ['Small to Medium','Streamlines processes and reduces admin burden for growing teams.','<rect x="3" y="4" width="13" height="13" rx="2"/>'],
    ['Large Organizations','Centralizes data and ensures compliance across departments.','<path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 21v-2a4 4 0 00-3-3.87"/>'],
    ['HR Teams','Automates attendance, leave management and payroll flows.','<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>'],
    ['Seeking Productivity','Frees teams for strategic work by eliminating manual tasks.','<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>']
  ];
  var bens=[
    ['<path d="M20 6L9 17l-5-5"/>','Operational Excellence & Velocity','360° audit trail, complete transparency and full accountability for every change.'],
    ['<path d="M12 2v20M2 12h20"/>','Revenue Maximization & Protection','Prepaid, postpaid and hybrid models on one system with real-time charging and ACID-compliant transactions.'],
    ['<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>','Strategic Scalability','Multi-tenancy with full data isolation — engineered for high performance even in smart-city environments.'],
    ['<path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"/>','Governance & Risk Management','Built-in policy enforcement, role-based access and regulatory alignment for full compliance.']
  ];
  var refs=[['STC','KSA'],['Etisalat','Egypt'],['ELM','KSA'],['Vodafone','Egypt'],['Ministry of Trade','Iraq'],['Aswan Water','Egypt'],['Higher Institute for Training','KSA']];
  var techs=(it.techs&&it.techs.length?it.techs:['Java','Oracle','PostgreSQL','Angular']);
  var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
  function svgI(p){return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}

  var ovH=ov.map(function(o){return '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI(o[0])+'</span><h4>'+o[1]+'</h4><p>'+o[2]+'</p></div>';}).join('');

  var featH='<div class="pd-featlist">'+feats.map(function(f,i){return '<div class="pd-featrow"><span class="pd-fnum">'+(i<9?'0'+(i+1):i+1)+'</span><span class="pd-fic">'+svgI(f[2])+'</span><div class="pd-ftxt"><h4>'+f[0]+'</h4><p>'+f[1]+'</p></div></div>';}).join('')+'</div>';

  var fitH=fits.map(function(f){return '<div class="pd-fit"><span class="ic">'+svgI(f[2])+'</span><h4>'+f[0]+'</h4><p>'+f[1]+'</p></div>';}).join('');

  var techH=techs.map(function(t){
    var ico=getTechIcon(t);
    var inner=ico?(ico.indexOf('<svg')===0?ico:'<img src="'+ico+'" alt="'+t+'" style="width:32px;height:32px;object-fit:contain;border-radius:50%">'):'<span style="font-family:Archivo;font-weight:800;font-size:13px">'+t.slice(0,2).toUpperCase()+'</span>';
    return '<div class="pd-tech-item"><span class="pd-tic">'+inner+'</span><span class="pd-tn">'+t+'</span></div>';
  }).join('');

  var refH=refs.map(function(r){
    var nm=r[0].toLowerCase();
    var clientObj=DATA.find(function(d){return d.type==='client'&&(d.name.toLowerCase()===nm||d.name.toLowerCase().includes(nm)||nm.includes(d.name.toLowerCase().split(' ')[0]));});
    if(clientObj)return cardHTML({item:clientObj,hits:0,total:0});
    var logo=getClientLogo(r[0]);
    var logoHtml=logo?'<img src="'+logo+'" alt="'+r[0]+'">':'<span class="clmono">'+r[0].split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase()+'</span>';
    return '<div class="clcard"><div class="cllogo">'+logoHtml+'</div><div class="clname">'+r[0]+'</div><div class="clsector">'+r[1]+'</div></div>';
  }).join('');

  var benH=bens.map(function(b){return '<div class="pd-ben-row"><span class="bic">'+svgI(b[0])+'</span><div><h4>'+b[1]+'</h4><p>'+b[2]+'</p></div></div>';}).join('');

  var locs=(it.locations&&it.locations.length?it.locations:['Saudi Arabia','Egypt']);
  var locTagH=locs.map(function(l){return '<span class="pd-loc-tag">'+locFlag(l)+' '+l+'</span>';}).join('');
  return '<div class="pd-dark-hero">'+
    '<div class="hero-blob hero-blob-1" style="opacity:.45"></div>'+
    '<div class="hero-blob hero-blob-2" style="opacity:.38"></div>'+
    '<div class="hero-lines"></div>'+
    '<div class="pd-dh-inner">'+
      '<div class="pd-dh-back" onclick="showPage(\'products\')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>Back to products</div>'+
      '<div class="pd-dh-grid">'+
        '<div>'+
          '<div class="pd-dh-eyebrow">Product Overview · '+(sec||it.cat||'Enterprise')+'</div>'+
          '<h1 class="pd-dh-title">'+it.name+'</h1>'+
          '<p class="pd-dh-lede">'+(it.tagline?it.tagline+' '+(it.desc||''):'An enterprise-grade platform that helps organizations build, automate and operate business-critical workflows — combining low-code tools, ITSM, and deep integrations with security and governance built in from day one.')+'</p>'+
          '<div class="pd-dh-tags">'+locTagH+'</div>'+
        '</div>'+
        '<div class="pd-dh-media">'+(it.img?'<img src="'+it.img+'" alt="'+it.name+'">':'<span class="pd-dh-ph">'+it.name+'</span>')+'</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">What is <span>'+it.name+'?</span></div>'+
      '<div class="pd-subh">A citizen development platform that empowers enterprise teams to build, automate and operate at scale.</div>'+
      '<div class="pd-ov">'+ovH+'</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Key <span>Features</span></div>'+
    '<div class="pd-subh">Build Faster, Automate Smarter, Operate Securely.</div>'+
    featH+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Perfect <span>Fit For</span></div><div class="pd-grid4">'+fitH+'</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Technology <span>Stack</span></div><div class="pd-techgrid">'+techH+'</div>'+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Customer <span>References</span></div><div class="grid clients" style="margin-top:20px">'+refH+'</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt" style="border-bottom:0"><div class="pd-wrap">'+
    '<div class="pd-h">Business <span>Benefits</span></div><div class="pd-ben">'+benH+'</div>'+
  '</div></div>'+
  footerBlock();
}

/* ===== project detail page ===== */
function _openProject(i){var it=DATA[i];if(!it||it.type!=='project')return openModal(i);
  document.getElementById('page-project').innerHTML=renderProjectDetail(it);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.getElementById('page-project').classList.add('on');
  var navEl=document.querySelector('nav');if(navEl)navEl.classList.add('nav-dark');
  document.querySelectorAll('#navlinks a').forEach(a=>a.classList.remove('active'));
  window.scrollTo(0,0);
}
function renderProjectDetail(it){
  function svgI(p){return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
  var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
  var locs=(it.locations&&it.locations.length?it.locations:['Saudi Arabia']);
  var locTagH=locs.map(function(l){return '<span class="pd-loc-tag">'+locFlag(l)+' '+l+'</span>';}).join('');
  var chkIc='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
  // ---- data ----
  var desc=[
    'Best in class Benchmarking comparisons on Procurement performance',
    'Review and Recommendations on Procurement Policies & Procedures',
    'Organizational review and recommendations',
    'Key Performance Indicators (recommendations and processes)',
    'Strategic Supply Positioning strategies',
    'Knowledge Transfer — training sessions and procedures',
    'Management Presentations'
  ];
  var resources=['Senior Project Manager','Senior Procurement Analyst','Project Coordinator','Translator','Documentation Analyst'];
  var scope=['Order Management','E-Sales','Order Fulfillment – Delivery','Network Inventory','Provisioning','Billing','U2000','Alarm and Performance Management','IVR Integration','Service Desk'];
  var components=[
    {title:'OSS — Operations Support System',sub:'Software systems that help telecom operators manage network infrastructure and operations.',items:['Network Inventory Management — tracks physical and logical network elements (sites, fiber, devices)','Provisioning &amp; Activation — automates activating services like FTTH connections','Trouble Ticketing &amp; Fault Management — logs and manages issues on the network','Workflow Management — defines processes from order to delivery to service assurance']},
    {title:'BSS — Business Support System',sub:'Systems supporting the business side of telecom operations: customer onboarding, product catalog, orders, billing, CRM.',items:['CRM — Customer Relationship Management, contacts, and service history','Product Catalog &amp; Pricing — offerings, bundles, service prices','Order Management — processing new orders, changes, cancellations','Billing &amp; Payments — invoicing usage and tracking payments']},
    {title:'Implementation — Full BSS/OSS Stack',sub:'NTG successfully implemented and integrated the full BSS/OSS stack.',items:['Siebel CRM — Customer Relationship Management','Oracle Service Bus for Integration — seamless connectivity','Oracle Service Bus for Fulfillment — order fulfillment processes','E-Sales — digital sales operations','Billing, Inventory, and Provisioning — end-to-end support','ERP — Enterprise Resource Planning for integrated operations']}
  ];
  var im=it.img?'<img src="'+it.img+'" alt="'+it.name+'">':'<span class="pd-hph">'+it.name+'</span>';
  var CLIENT_LOGOS={STC:'assets/logo-stc.png','Saudi Telecom':'assets/logo-stc.png','Zain':'assets/logo-zain.png','Royal Commission':'assets/logo-rcy.png','RC Yanbu':'assets/logo-rcy.png','National Water':'assets/logo-nwc.jpg','AL Rajhi':'assets/logo-alrajhi.png','Etisalat':'assets/logo-etisalat.png','Vodafone':'assets/logo-vodafone.png','ELM':'assets/logo-elm.jpg','Mobily':'assets/logo-mobily.jpg'};
  var clientName=it.client||'Client';
  var cLogoKey=Object.keys(CLIENT_LOGOS).find(function(k){return clientName.toLowerCase().indexOf(k.toLowerCase())>=0;});
  var clientLogo=cLogoKey?CLIENT_LOGOS[cLogoKey]:null;
  var clientObj=DATA.find(function(d){return d.type==='client'&&d.name===clientName;});
  var clientCard=clientObj?cardHTML({item:clientObj,hits:0,total:0}):'<div class="clcard"><div class="cllogo"><span class="clmono">'+clientName.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase()+'</span></div><div class="clname">'+clientName+'</div></div>';
  var clientTile=clientCard;
  var descH=desc.map(function(d){return '<div class="pd-ben-row"><span class="bic">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</span><div><p style="font-size:14px;color:#3B3B42;line-height:1.6;margin:0">'+d+'</p></div></div>';}).join('');
  var resH=resources.map(function(r){return '<div class="pd-fit"><span class="ic">'+svgI('<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0115 0"/>')+'</span><h4>'+r+'</h4></div>';}).join('');
  var scopeH=scope.map(function(s){return '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>')+'</span><h4>'+s+'</h4><p>Included in the BSS/OSS implementation scope.</p></div>';}).join('');
  var compH=components.map(function(c,i){return '<div class="pd-featrow"><span class="pd-fnum">'+(i<9?'0'+(i+1):i+1)+'</span><span class="pd-fic">'+svgI(i===0?'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 20h8M12 16v4"/>':i===1?'<path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3"/>':'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>')+'</span><div class="pd-ftxt"><h4>'+c.title+'</h4><p>'+c.sub+'</p></div></div>';}).join('');
  return '<div class="pd-dark-hero">'+
    '<div class="hero-blob hero-blob-1" style="opacity:.45"></div>'+
    '<div class="hero-blob hero-blob-2" style="opacity:.38"></div>'+
    '<div class="hero-lines"></div>'+
    '<div class="pd-dh-inner">'+
      '<div class="pd-dh-back" onclick="showPage(\'projects\')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>Back to projects</div>'+
      '<div class="pd-dh-grid">'+
        '<div>'+
          '<div class="pd-dh-eyebrow">Project · '+(sec||'Enterprise')+'</div>'+
          '<h1 class="pd-dh-title">'+it.name+'</h1>'+
          '<p class="pd-dh-lede">'+(it.desc||'Enterprise technology delivery engagement — integrated, managed and supported end to end by NTG Clarity.')+'</p>'+
          '<div class="pd-dh-tags">'+locTagH+'</div>'+
        '</div>'+
        '<div class="pd-dh-media">'+im+'</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Project <span>Overview</span></div><div class="pd-subh">NTG provided a Procurement consultation service to benchmark STC&apos;s Procurement group with other major Telecom Service Providers.</div><div class="pd-ov">'+
      '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5"/>')+'</span><h4>Procurement Consultation</h4><p>Benchmarking STC&apos;s procurement group against major telecom service providers globally.</p></div>'+
      '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>')+'</span><h4>Policy Review</h4><p>Review and recommendations on procurement policies, procedures and organizational structure.</p></div>'+
      '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI('<path d="M5 20V10M12 20V4M19 20v-7"/>')+'</span><h4>KPIs &amp; Strategy</h4><p>Key Performance Indicators and Strategic Supply Positioning strategies defined and implemented.</p></div>'+
      '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')+'</span><h4>Knowledge Transfer</h4><p>Training sessions, documentation and management presentations to ensure self-sufficiency.</p></div>'+
    '</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Project <span>Description</span></div><div class="pd-ben" style="margin-top:24px">'+descH+'</div>'+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Key <span>Resources</span></div><div class="pd-grid4">'+resH+'</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Solution <span>Scope</span></div><div class="pd-ov" style="margin-top:24px">'+scopeH+'</div>'+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Project <span>Components</span></div><div class="pd-featlist">'+compH+'</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Project <span>Duration</span></div>'+
    '<div style="margin-bottom:8px;margin-top:8px"><span style="font-size:13px;color:var(--muted)">Completed in </span><span style="font-family:Archivo;font-weight:800;font-size:18px;color:var(--red)">6 months</span></div>'+
    '<div class="pd-timeline">'+
      '<div class="pd-tl-step"><div class="pd-tl-dot done">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</div><div class="pd-tl-mo">Month 1</div><div class="pd-tl-lbl">Discovery &amp; Assessment</div><div class="pd-tl-sub">Procurement benchmarking &amp; gap analysis</div></div>'+
      '<div class="pd-tl-step"><div class="pd-tl-dot done">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</div><div class="pd-tl-mo">Month 2</div><div class="pd-tl-lbl">Policy Review</div><div class="pd-tl-sub">Procedures &amp; org structure review</div></div>'+
      '<div class="pd-tl-step"><div class="pd-tl-dot done">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</div><div class="pd-tl-mo">Month 3–4</div><div class="pd-tl-lbl">KPIs &amp; Strategy</div><div class="pd-tl-sub">Supply positioning &amp; KPI design</div></div>'+
      '<div class="pd-tl-step"><div class="pd-tl-dot done">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</div><div class="pd-tl-mo">Month 5</div><div class="pd-tl-lbl">Knowledge Transfer</div><div class="pd-tl-sub">Training sessions &amp; documentation</div></div>'+
      '<div class="pd-tl-step"><div class="pd-tl-dot done">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</div><div class="pd-tl-mo">Month 6</div><div class="pd-tl-lbl">Management Presentation</div><div class="pd-tl-sub">Final handover &amp; recommendations</div></div>'+
    '</div>'+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec" style="border-bottom:0"><div class="pd-h">Customer <span>References</span></div><div class="grid clients" style="margin-top:20px">'+clientTile+'</div></div>'+
  '</div>'+
  footerBlock();
}



/* ===== service detail page ===== */
function _openService(i){var it=DATA[i];if(!it||it.type!=='service')return openModal(i);
  document.getElementById('page-service').innerHTML=renderServiceDetail(it);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.getElementById('page-service').classList.add('on');
  var navEl=document.querySelector('nav');if(navEl)navEl.classList.add('nav-dark');
  document.querySelectorAll('#navlinks a').forEach(a=>a.classList.remove('active'));
  window.scrollTo(0,0);
}
function renderServiceDetail(it){
  function svgI(p){return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
  var sec=(it.sector||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
  var sectorFile=SECTOR_MAP[it.sector||'']||'technology';
  var sectorImgSrc=(window.__resources&&window.__resources['sector'+sectorFile.charAt(0).toUpperCase()+sectorFile.slice(1)])||('assets/sectors/'+sectorFile+'.svg');
  var locs=(it.locations&&it.locations.length?it.locations:['Saudi Arabia','Egypt','Canada']);
  var locTagH=locs.map(function(l){return '<span class="pd-loc-tag">'+locFlag(l)+' '+l+'</span>';}).join('');
  var outcomes=['Streamlined DevOps processes for faster and more efficient software delivery.','Enhanced operational excellence to drive business success.','Expert support in automation, continuous integration and continuous deployment (CI/CD).','Improved collaboration between development and operations teams.','Reduced time-to-market for applications and services.','Optimization of IT infrastructure and workflows.','Access to specialized DevOps expertise without the need to hire in-house.','Increased reliability, scalability and security of applications and systems.'];
  var portfolio=[['Cluster Management & Orchestration','Design, deploy and manage clustering of servers to ensure high availability (HA) and fault tolerance. Setup of Kubernetes or Docker Swarm clusters to orchestrate containerized applications.','<rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'],['Infrastructure Management & Setup','Design and implement scalable environments on on-premises data centers. Configure high-availability mechanisms for business continuity in the production area.','<path d="M5 12h14M12 5l7 7-7 7"/>'],['System Configuration & Deployment','Ensure application updates are deployed smoothly to on-premises systems with minimal downtime and full rollback capability.','<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>'],['High Availability & Disaster Recovery','Design system architecture to handle node failures gracefully — redundant systems, backup strategies and disaster recovery procedures.','<path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"/>'],['Application Health Checks & Auto Healing','Automated health checks to monitor application performance — ensuring they stay healthy and auto-heal in case of failures.','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'],['Training & Knowledge Transfer','Train the client team on the deployed stack. Covers cloud platforms, containerization, CI/CD, monitoring, security and performance testing.','<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>']];
  var advantages=[['Access to Skilled Talent','NTG provides qualified DevOps resources immediately from its internal talent pool — automation, CI/CD, cloud, monitoring, security and infrastructure experts.','<path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3"/>'],['Flexible Engagement Models','Onsite, Offshoring, Dedicated Teams (ODC), Time & Material, Fixed Cost and Squad as a Service — scale teams quickly to project demands.','<path d="M4 6h16M4 10h16M4 14h10"/>'],['Agile & Collaborative Squads','Project delivery through short iterative sprints. Cross-functional squads: developers, DevOps engineers, PMs and analysts.','<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>'],['Rapid Resource Allocation','Qualified resources within 3 working days; 20% of requests fulfilled within 2 weeks. Supports both short-term and long-term project needs.','<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'],['Global Presence','NTG operates across the Middle East, North Africa, Europe and Canada — resource allocation close to clients or remotely.','<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18"/>'],['Operational Excellence','Management tasks and turnkey deliverables. KPI-driven processes ensuring timely onboarding, orientation and project delivery.','<path d="M5 20V10M12 20V4M19 20v-7"/>'],['Continuous Training','DevOps teams trained on latest technologies — cloud platforms, containerization, CI/CD pipelines, monitoring, security and performance testing.','<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>'],['30+ Years of IT Expertise','Deep experience in software development and IT outsourcing ensures high-quality DevOps practices with a proven global track record.','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>']];
  var outH=outcomes.map(function(o){return '<div class="pd-ben-row"><span class="bic">'+svgI('<path d="M20 6L9 17l-5-5"/>')+'</span><div><p style="font-size:14px;color:#3B3B42;line-height:1.6;margin:0">'+o+'</p></div></div>';}).join('');
  var portH='<div class="pd-featlist">'+portfolio.map(function(p,i){return '<div class="pd-featrow"><span class="pd-fnum">'+(i<9?'0'+(i+1):i+1)+'</span><span class="pd-fic">'+svgI(p[2])+'</span><div class="pd-ftxt"><h4>'+p[0]+'</h4><p>'+p[1]+'</p></div></div>';}).join('')+'</div>';
  var advH='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-top:26px;">'+advantages.map(function(a){return '<div class="pd-ovc"><span class="pd-ovc-ic">'+svgI(a[2])+'</span><h4>'+a[0]+'</h4><p>'+a[1]+'</p></div>';}).join('')+'</div>';
  return '<div class="pd-dark-hero">'+
    '<div class="hero-blob hero-blob-1" style="opacity:.45"></div>'+
    '<div class="hero-blob hero-blob-2" style="opacity:.38"></div>'+
    '<div class="hero-lines"></div>'+
    '<div class="pd-dh-inner">'+
      '<div class="pd-dh-back" onclick="showPage(\'services\')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>Back to services</div>'+
      '<div class="pd-dh-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;">'+
        '<div>'+
          '<div class="pd-dh-eyebrow">Service \u00b7 '+sec+'</div>'+
          '<h1 class="pd-dh-title">'+it.name+'</h1>'+
          '<p class="pd-dh-lede">'+(it.tagline||it.desc||'Enterprise service delivery \u2014 integrated, scalable and fully managed by NTG.')+'</p>'+
          '<div class="pd-dh-tags">'+locTagH+'</div>'+
        '</div>'+
        '<div class="pd-dh-media" style="background:#fff;">'+(it.img?'<img src="'+it.img+'" alt="'+it.name+'">':'<img src="'+sectorImgSrc+'" alt="'+sec+'" style="width:auto;height:auto;max-width:56%;max-height:56%;object-fit:contain;">')+'</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Service <span>Overview</span></div>'+
      '<div style="display:flex;flex-direction:column;gap:16px;margin-top:22px;">'+
        '<p style="font-size:14.5px;color:#3B3B42;line-height:1.7;margin:0">Organizations today face increasing pressure to deliver software faster, operate more efficiently, and maintain high levels of stability. Many choose to outsource DevOps to specialized partners who can streamline operations, implement automation, and ensure continuous delivery at scale.</p>'+
        '<p style="font-size:14.5px;color:#3B3B42;line-height:1.7;margin:0">DevOps as a Service provides an integrated approach that unifies development and operations through automated pipelines, infrastructure optimization, cloud management, monitoring, and ongoing performance improvement \u2014 reducing operational complexity and accelerating time-to-market.</p>'+
        '<p style="font-size:14.5px;color:#3B3B42;line-height:1.7;margin:0">NTG\u2019s DevOps services deliver measurable, business-focused outcomes combining expert engineering, robust automation, and world-class infrastructure management so your technology ecosystem performs at its best \u2014 every day, every release.</p>'+
      '</div></div>'+
  '</div>'+
  '<div class="pd-fw-alt"><div class="pd-wrap">'+
    '<div class="pd-h">Service <span>Outcomes</span></div><div class="pd-ben" style="margin-top:24px">'+outH+'</div>'+
  '</div></div>'+
  '<div class="pd-wrap">'+
    '<div class="pd-sec"><div class="pd-h">Service <span>Portfolio</span></div><div class="pd-subh">NTG DevOps Applications, Servers and Operating Systems \u2014 end-to-end.</div>'+portH+'</div>'+
  '</div>'+
  '<div class="pd-fw-alt" style="border-bottom:0"><div class="pd-wrap">'+
    '<div class="pd-h">NTG <span>Advantages</span></div>'+advH+
  '</div></div>'+
  footerBlock();
}

/* ===== modal ===== */
function closeClPopup(){document.getElementById('clPopup').classList.remove('open');var lw=document.querySelector('.logowall');if(lw)lw.classList.remove('paused');}
function openClientDetail(i){
  var it=DATA[i];if(!it||it.type!=='client')return;
  var logo=it.logo?'<img src="'+it.logo+'" alt="'+it.name+'">':'<div class="clmono">'+initials(it.name)+'</div>';
  var secBadge=it.sector?'<span class="cl-popup-badge">'+secIcon(it.sector)+cap(it.sector)+'</span>':'';
  var locBadges=(it.locations||[]).map(function(l){return '<span class="cl-popup-badge">'+locFlag(l)+' '+l+'</span>';}).join('');
  var relProjects=DATA.filter(function(d){return d.type==='project'&&d.client===it.name;});
  // fallback: if no direct projects, find by sector
  if(!relProjects.length && it.sector){
    relProjects=DATA.filter(function(d){return d.type==='project'&&d.sector===it.sector;}).slice(0,3);
  }
  var projList=relProjects.length
    ?relProjects.map(function(p){return '<div class="cl-proj-item" onclick="closeClPopup();openProject('+DATA.indexOf(p)+')"><span class="cl-proj-dot"></span><span class="cl-proj-name">'+p.name+'</span></div>';}).join('')
    :'<div class="cl-popup-empty">No projects found for this client.</div>';
  document.getElementById('clPopupBox').innerHTML=
    '<div class="cl-popup-head"><div class="cl-popup-logo">'+logo+'</div><div class="cl-popup-name">'+it.name+'</div><button class="cl-popup-close" onclick="closeClPopup()">×</button></div>'+
    '<div class="cl-popup-meta">'+secBadge+locBadges+'</div>'+
    '<div class="cl-popup-body"><div class="cl-popup-sec-lbl">Projects ('+relProjects.length+')</div>'+projList+'</div>';
  document.getElementById('clPopup').classList.add('open');
  var lw=document.querySelector('.logowall');if(lw)lw.classList.add('paused');
}
function openModal(i){
  const it=DATA[i]; if(!it)return;
  const tl={project:'Project',product:'Product',service:'Service',client:'Client'}[it.type];
  const rows=[]; if(it.client)rows.push(['Client',it.client]); if(it.sector)rows.push(['Sector',cap(it.sector)]); if(it.duration)rows.push(['Duration',it.duration+' months']); if(it.scale)rows.push(['Scale',it.scale]); if(it.cat)rows.push(['Category',it.cat]);
  let h=`<button class="ovx" onclick="closeModal()">×</button><div class="top"><div class="eb">${tl}${it.sector&&it.type!=='client'?' · '+cap(it.sector):''}</div><h2>${it.name}</h2></div><div class="bd">${it.desc?`<p class="desc">${it.desc}</p>`:''}<div class="mg">`;
  rows.forEach(([l,v])=>h+=`<div><div class="ml">${l}</div><div class="mv">${v}</div></div>`);
  if(it.locations&&it.locations.length)h+=`<div><div class="ml">Locations</div><div class="mv">${it.locations.map(l=>`<span class="tg">${l}</span>`).join('')}</div></div>`;
  if(it.techs&&it.techs.length)h+=`<div style="grid-column:1/-1"><div class="ml">Technologies</div><div class="mv">${it.techs.map(t=>`<span class="tg">${t}</span>`).join('')}</div></div>`;
  h+='</div></div>';
  document.getElementById('modal').innerHTML=h; document.getElementById('ov').classList.add('open');
}
function closeModal(){document.getElementById('ov').classList.remove('open');}
document.getElementById('ov').addEventListener('click',e=>{if(e.target.id==='ov')closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}

/* ============ EXPLORE engine ============ */
const FACETS={
  Sector:[...new Set([...DATA.map(d=>d.sector).filter(s=>s&&s!=='cross_sector'),'communication services','materials','real estate','construction','manufacturing','agriculture','energy'])].sort(),
  Technology:[...new Set(DATA.flatMap(d=>d.techs||[]))].sort(),
  Location:['Algeria','Canada','Egypt','Finland','Iraq','Kuwait','Saudi Arabia','USA'],
  Duration:BUCKETS.map(b=>b.k), Scale:['Small','Mid','Enterprise'],
};
const RAIL_FACETS=['Sector','Technology','Location','Duration','Scale'];
const TYPES=[['project','Projects'],['product','Products'],['service','Services'],['client','Clients']];
function vals(it,f){switch(f){case 'Sector':return it.sector?[it.sector]:[];case 'Technology':return it.techs||[];case 'Location':return it.locations||[];case 'Duration':return it.duration?[bucketOf(it.duration)]:[];case 'Scale':return it.scale?[it.scale]:[];case 'Client':return it.client?[it.client]:(it.type==='client'?[it.name]:[]);}return [];}
function has(it,f,v){return vals(it,f).includes(v);}
let SEL=[],ATYPES=[];
const findSel=(f,v)=>SEL.find(s=>s.facet===f&&s.value===v);
function toggleSel(f,v){const i=SEL.findIndex(s=>s.facet===f&&s.value===v);i>=0?SEL.splice(i,1):SEL.push({facet:f,value:v});renderExplore();}
function removeSel(f,v){const i=SEL.findIndex(s=>s.facet===f&&s.value===v);if(i>=0){SEL.splice(i,1);renderExplore();}}
function clearAll(){SEL=[];ATYPES=[];renderExplore();}
function toggleType(t){const i=ATYPES.indexOf(t);i>=0?ATYPES.splice(i,1):ATYPES.push(t);renderExplore();}
let megaOpen=false;
function mcount(f,v){return DATA.filter(d=>has(d,f,v)).length;}
function buildMega(){
  const col=(label,icon,items)=>`<div class="mega-col"><div class="mega-h">${ficon(icon)}${label}</div><div class="mega-items">${items}</div></div>`;
  const fc=(f,icon,label)=>col(label,icon,FACETS[f].map(v=>`<a class="mega-i" onclick="megaGo('${f}','${esc(v)}')">${cap(v)}<span class="mc">${mcount(f,v)}</span></a>`).join(''));
  const clients=DATA.filter(d=>d.type==='client').map(c=>`<a class="mega-i" onclick="megaClient(${idx(c)})">${c.name}</a>`).join('');
  return `<div class="mega-in">${col('Clients','Client',clients)}${fc('Technology','Technology','Technologies')}${fc('Location','Location','Locations')}${fc('Sector','Sector','Sectors')}</div>`;
}
function toggleMega(e){if(e){e.stopPropagation();e.preventDefault();}const m=document.getElementById('megaMenu');megaOpen=!megaOpen;if(megaOpen){m.innerHTML=buildMega();m.classList.add('open');}else m.classList.remove('open');const t=document.querySelector('.mega-trig');if(t)t.classList.toggle('on',megaOpen);}
function closeMega(){if(!megaOpen)return;megaOpen=false;const m=document.getElementById('megaMenu');if(m)m.classList.remove('open');const t=document.querySelector('.mega-trig');if(t)t.classList.remove('on');}
function megaGo(f,v){SEL=[{facet:f,value:v,required:true}];ATYPES=[];closeMega();showPage('explore');renderExplore();}
function megaClient(i){closeMega();openModal(i);}
document.addEventListener('click',e=>{if(megaOpen&&!e.target.closest('#megaMenu')&&!e.target.closest('.mega-trig'))closeMega();});
function selBy(except){const m={};SEL.forEach(s=>{if(s.facet===except)return;(m[s.facet]=m[s.facet]||[]).push(s.value);});return m;}
function exPass(it,except){const m=selBy(except);return Object.keys(m).every(f=>m[f].some(v=>has(it,f,v)));}
function exResults(){let r=DATA.filter(it=>exPass(it,null));if(ATYPES.length)r=r.filter(d=>ATYPES.includes(d.type));return r;}
function typeCount(t){return DATA.filter(d=>d.type===t&&exPass(d,null)).length;}
function facetCount(f,v){let p=DATA.filter(d=>exPass(d,f)&&has(d,f,v));if(ATYPES.length)p=p.filter(d=>ATYPES.includes(d.type));return p.length;}

function renderExplore(){if(!document.getElementById('rail'))return;renderTray();renderRail();renderExResults();}
function renderTray(){
  const t=document.getElementById('tray');let h='';
  if(!SEL.length)h='<span class="tray-empty">No filters yet — pick from the left or use the search above. Results update instantly.</span>';
  else{SEL.forEach(s=>{h+=`<span class="chip"><span class="ft">${s.facet}</span>${s.value}<span class="x" onclick="removeSel('${s.facet}','${esc(s.value)}')">×</span></span>`;});h+='<button class="clearall" style="margin-left:6px" onclick="clearAll()">Clear all</button>';}
  h+='<button class="demo" onclick="loadScenario()">▸ Demo filters</button>';
  t.innerHTML=h;
}
function renderRail(){
  const r=document.getElementById('rail');let h='<div class="rail-sec"><div class="rail-label">'+ficon('Type')+'Type</div><div class="types">';
  TYPES.forEach(([t,l])=>h+=`<button class="typepill ${ATYPES.includes(t)?'on':''}" onclick="toggleType('${t}')">${l}<span class="n">${typeCount(t)}</span></button>`);
  h+='</div></div>';
  RAIL_FACETS.forEach(f=>{h+=`<div class="rail-sec"><div class="rail-label">${ficon(f)}${f}</div>`;FACETS[f].forEach(v=>{const sel=findSel(f,v),cnt=facetCount(f,v),zero=cnt===0&&!sel;
    const tick=sel?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>':'';
    h+=`<div class="facet-val ${sel?'on':''} ${zero?'zero':''}" onclick="toggleSel('${f}','${esc(v)}')">${tick}<span>${cap(v)}</span><span class="fv-c">${cnt}</span></div>`;});h+='</div>';});
  h+='<button class="clearall" onclick="clearAll()">Clear all filters</button>';r.innerHTML=h;
}
function renderExResults(){
  const res=exResults();
  document.getElementById('rcount').innerHTML=`${res.length} result${res.length===1?'':'s'} <small>${SEL.length?`· ${SEL.length} filter${SEL.length===1?'':'s'} applied`:'· showing everything'}</small>`;
  const c=document.getElementById('results');
  if(!res.length){c.innerHTML=`<div class="empty"><h3>No items match these filters.</h3><p>Remove a filter to broaden the results.</p></div>`;return;}
  let h='';TYPES.forEach(([t,l])=>{const g=res.filter(it=>it.type===t);if(!g.length)return;h+=`<div class="group"><div class="ghead"><span class="lbl">${l}</span><span class="gc">${g.length}</span><span class="ln"></span></div><div class="grid ${t==='client'?'clients':'three'}">${g.map(cardOf).join('')}</div></div>`;});
  c.innerHTML=h;
}
function loadScenario(){ATYPES=[];SEL=[{facet:'Sector',value:'finance'},{facet:'Technology',value:'Angular'},{facet:'Technology',value:'Node.js'},{facet:'Location',value:'Saudi Arabia'}];renderExplore();toast('Filtered: finance · Angular or Node.js · Saudi Arabia');}

/* explore search */
const omni=document.getElementById('omni'),sgBox=document.getElementById('suggest');let sgList=[],sgI=-1;
if(omni){
function buildSg(q){q=q.trim().toLowerCase();if(!q)return [];const out=[];['Sector','Technology','Location','Duration','Scale'].forEach(f=>FACETS[f].forEach(v=>{if(cap(v).toLowerCase().includes(q)&&!findSel(f,v))out.push({facet:f,value:v});}));[...new Set(DATA.map(d=>d.client).filter(Boolean).concat(DATA.filter(d=>d.type==='client').map(d=>d.name)))].forEach(cn=>{if(cn.toLowerCase().includes(q)&&!findSel('Client',cn))out.push({facet:'Client',value:cn});});return out.slice(0,8);}
function renderSg(){if(!sgList.length){if(omni.value.trim()){sgBox.innerHTML='<div class="sg-empty">No matching filter — try a client, technology, location, sector or duration.</div>';sgBox.classList.add('open');}else sgBox.classList.remove('open');return;}sgBox.innerHTML=sgList.map((s,i)=>`<div class="sg ${i===sgI?'active':''}" onmousedown="pickSg(${i})"><span class="val">${cap(s.value)}</span><span class="facet">${s.facet}</span></div>`).join('');sgBox.classList.add('open');}
function pickSg(i){const s=sgList[i];if(!s)return;toggleSel(s.facet,s.value);omni.value='';sgList=[];sgI=-1;sgBox.classList.remove('open');omni.focus();}
omni.addEventListener('input',()=>{sgList=buildSg(omni.value);sgI=sgList.length?0:-1;renderSg();});
omni.addEventListener('keydown',e=>{if(!sgBox.classList.contains('open'))return;if(e.key==='ArrowDown'){e.preventDefault();sgI=Math.min(sgI+1,sgList.length-1);renderSg();}else if(e.key==='ArrowUp'){e.preventDefault();sgI=Math.max(sgI-1,0);renderSg();}else if(e.key==='Enter'){e.preventDefault();if(sgI>=0)pickSg(sgI);}else if(e.key==='Escape')sgBox.classList.remove('open');});
omni.addEventListener('blur',()=>setTimeout(()=>sgBox.classList.remove('open'),130));
}

/* ============ command palette ============ */
const FK={client:'Client',tech:'Technology',location:'Location',sector:'Sector',duration:'Duration'};
function tokVals(key){switch(key){case 'client':return [...new Set(DATA.map(d=>d.client).filter(Boolean).concat(DATA.filter(d=>d.type==='client').map(d=>d.name)))].sort();case 'tech':return FACETS.Technology;case 'location':return FACETS.Location.filter(l=>DATA.some(d=>has(d,'Location',l)));case 'sector':return FACETS.Sector;case 'duration':return BUCKETS.map(b=>b.k);}return [];}
function allToks(){const o=[];Object.keys(FK).forEach(k=>tokVals(k).forEach(v=>o.push({key:k,facet:FK[k],value:v})));return o;}
function normKey(k){k=k.toLowerCase();return ({technology:'tech',loc:'location',locations:'location',dur:'duration',sectors:'sector',clients:'client'})[k]||k;}
const PAL_ALIAS={location:{ksa:'Saudi Arabia',usa:'USA'},sector:{gov:'government',governmental:'government'}};
function resolveTyped(text){const m=text.match(/^(\w+)\s*:\s*(.+)$/);if(!m)return null;const key=normKey(m[1]);if(!FK[key])return null;let val=m[2].trim().toLowerCase();if(PAL_ALIAS[key]&&PAL_ALIAS[key][val])val=PAL_ALIAS[key][val].toLowerCase();const vs=tokVals(key);const hit=vs.find(v=>v.toLowerCase()===val)||vs.find(v=>v.toLowerCase().startsWith(val))||vs.find(v=>v.toLowerCase().includes(val));return hit?{key,facet:FK[key],value:hit}:null;}

let palTokens=[],palText='',palNav=[],palSel=0;
function openPal(){document.getElementById('pal').classList.add('open');palText='';const i=document.getElementById('palinput');i.value='';palSel=0;renderPal();setTimeout(()=>i.focus(),30);}
function heroSearch(q){openPal();setTimeout(function(){var i=document.getElementById('palinput');if(i){i.value=q;palText=q;palSel=0;renderPal();i.focus();}},50);}
function closePal(){document.getElementById('pal').classList.remove('open');}
function palDurationDrill(dur){
  palTokens=[];
  palText='';
  closePal();
  SRP_TOKENS=[{facet:'Duration',value:dur,key:'duration'}];
  SRP_TEXT='';
  SRP_TYPES=['project'];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function palLocationDrill(loc){
  palTokens=[{key:'location',facet:'Location',value:loc}];
  palText='';
  closePal();
  SRP_TOKENS=[{facet:'Location',value:loc,key:'location'}];
  SRP_TEXT='';
  SRP_TYPES=['project','product','service'];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function palTechDrill(tech){
  palTokens=[{key:'tech',facet:'Technology',value:tech}];
  palText='';
  closePal();
  SRP_TOKENS=[{facet:'Technology',value:tech,key:'tech'}];
  SRP_TEXT='';
  SRP_TYPES=['project','product','service'];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function palSectorDrill(sector){
  palTokens=[{key:'sector',facet:'Sector',value:sector}];
  palText='';
  closePal();
  SRP_TOKENS=[{facet:'Sector',value:sector,key:'sector'}];
  SRP_TEXT='';
  SRP_TYPES=['project','product','service'];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function palClientDrill(name){
  palTokens=[{key:'client',facet:'Client',value:name}];
  palText='';
  closePal();
  SRP_TOKENS=[{facet:'Client',value:name,key:'client'}];
  SRP_TEXT='';
  SRP_TYPES=['project','product','service'];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function palRemove(i){palTokens.splice(i,1);renderPal();document.getElementById('palinput').focus();}
function palAdd(t){if(!t)return;const _pi=palTokens.findIndex(p=>p.facet===t.facet&&p.value===t.value);if(_pi>=0){palTokens.splice(_pi,1);}else{palTokens.push(t);}palText='';document.getElementById('palinput').value='';palSel=0;renderPal();document.getElementById('palinput').focus();}
function palAddKV(key,value){palAdd({key,facet:FK[key]||key,value});}
function palClearAll(){palTokens=[];palText='';document.getElementById('palinput').value='';palSel=0;renderPal();document.getElementById('palinput').focus();}
function palDoSearch(){
  closePal();
  SRP_TOKENS=palTokens.slice();SRP_TEXT=palText.trim();SRP_TYPES=[];
  renderSearchResults();
  showPage('search');
  document.querySelector('nav').classList.add('nav-dark');
  window.scrollTo(0,0);
}
function renderPal(){
  /* token chips */
  const keys=document.getElementById('palkeys');
  if(keys){
    keys.innerHTML=(palTokens.length?'<span class="pal-keys-lbl">KEYS</span>':'')+palTokens.map((t,i)=>`<span class="keytok"><span class="kl">${t.key!=='name'?cap(t.key)+': ':''}</span>${cap(t.value)}<span class="kx" onclick="palRemove(${i})">×</span></span>`).join('');
    keys.style.display=palTokens.length?'flex':'none';
  }
  /* body */
  const body=document.getElementById('palbody');
  if(!body)return;
  palNav=[];
  let h='';
  const txt=palText.trim();
  const res=palResults();
  if(txt&&!palTokens.length){
    const sugg=palSuggest();
    if(sugg.length){
      h+='<div class="pal-sec">Suggested filters</div>';
      sugg.forEach(s=>{
        h+=`<div class="qf" onclick="palAddKV('${s.key}','${esc(s.value)}')"><span style="flex:1"><span class="qp">${cap(s.key)}</span> <span style="font-weight:600">${cap(s.value)}</span></span></div>`;
        palNav.push(s);
      });
    }
    if(res.length){
      h+='<div class="pal-sec">Results <span style="font-weight:400;color:var(--muted)">'+res.length+'</span></div>';
      res.slice(0,12).forEach(it=>{
        h+=`<div class="rrow" onclick="palPickResult(${DATA.indexOf(it)})"><span class="rt">${cap(it.type||'')}</span><span class="rn">${it.name}</span><span class="rc">${it.locations&&it.locations[0]?it.locations[0]:''}</span></div>`;
        palNav.push(it);
      });
      if(res.length>12)h+=`<div class="pal-explore" onclick="palDoSearch()"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg> View all ${res.length} results</div>`;
    } else {
      h+='<div class="pal-empty">No results found</div>';
    }
  } else {
    h=palMega();
  }
  body.innerHTML=h;
  /* footer */
  const foot=document.getElementById('palfoot');
  if(foot){
    const _clearBtn=palTokens.length||txt?`<button class="pal-clear" onclick="palClearAll()">✕ Clear all</button>`:'<span style="font-size:11.5px;color:#bbb">⌘K / Ctrl K to reopen</span>';
    foot.innerHTML=_clearBtn+`<button class="pal-search-btn" onclick="palDoSearch()"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>Search${res.length&&(palTokens.length||txt)?' — '+res.length+' result'+(res.length===1?'':'s'):''}</button>`;
  }
  if(palSel>=palNav.length)palSel=0;
  palHi();
}
function secIconImg(s){const f=SECTOR_MAP[s]||'technology';return '<img src="assets/sectors/'+f+'.svg" width="14" height="14" style="object-fit:contain">';}
function palPickResult(i){const it=DATA[i];if(!it)return;closePal();if(it.type==='product'){openProduct(i);return;}if(it.type==='project'){openProject(i);return;}if(it.type==='service'){openService(i);return;}if(it.type==='client'){openModal(i);return;}}
function palHi(){document.querySelectorAll('#palbody .qf, #palbody .rrow').forEach((el,i)=>{el.classList.toggle('hi',i===palSel);});}
function palSuggest(){let t=allToks().filter(x=>!palTokens.some(p=>p.facet===x.facet&&p.value===x.value));const txt=palText.trim();const m=txt.match(/^(\w+)\s*:\s*(.*)$/);if(m){const k=normKey(m[1]),val=(m[2]||'').toLowerCase();t=t.filter(x=>x.key===k&&x.value.toLowerCase().includes(val));}else if(txt){const q=txt.toLowerCase();t=t.filter(x=>(`${x.key}:${x.value}`).toLowerCase().includes(q)||x.value.toLowerCase().includes(q));}return t.slice(0,10);}
function palSuggestAt(i){return palSuggest()[i];}
function palResults(){const byF={};palTokens.forEach(t=>{(byF[t.facet]=byF[t.facet]||[]).push(t.value);});let items=DATA.filter(it=>Object.keys(byF).every(f=>byF[f].some(v=>has(it,f,v))));const q=palText.trim().toLowerCase();if(q&&!/^\w+\s*:/.test(palText))items=items.filter(it=>(it.name+' '+(it.client||'')+' '+(it.desc||'')+' '+(it.techs||[]).join(' ')+' '+cap(it.sector||'')+' '+(it.locations||[]).join(' ')).toLowerCase().includes(q));return items;}
function palSwitchCat(key,el){
  document.querySelectorAll('.pal2-cat').forEach(e=>e.classList.remove('on'));
  if(el)el.classList.add('on');
  const vals=tokVals(key);
  const right=document.getElementById('pal2right');
  if(right)right.innerHTML=pal2Panel(key,vals);
}
function palMega(){
  const G=[
    ['sector','Sectors','sector'],
    ['tech','Technologies','sector'],
    ['location','Locations','sector'],
    ['duration','Duration','sector'],
  ];
  const allVals={};
  G.forEach(([key])=>{allVals[key]=tokVals(key);});
  // default active = first key with values
  const firstKey=(G.find(([k])=>allVals[k].length)||G[0])[0];
  let cats='',panel=pal2Panel(firstKey,allVals[firstKey]);
  G.forEach(([key,label])=>{
    const cnt=allVals[key].length;
    if(!cnt)return;
    cats+=`<div class="pal2-cat${key===firstKey?' on':''}" onclick="palSwitchCat('${key}',this)">${label}<span class="pal2-cnt">${cnt}</span></div>`;
  });
  return `<div class="pal-mega"><div class="pal2-cats">${cats}</div><div class="pal2-right" id="pal2right">${panel}</div></div>`;
}
function pal2Panel(key,vals){
  const taken=palTokens.filter(p=>p.key===key).map(p=>p.value.toLowerCase());
  const labels={client:'Clients',sector:'Sectors',tech:'Technologies',location:'Locations',duration:'Duration'};
  const items=vals.map(function(v){
    const sel=taken.includes(v.toLowerCase());
    const tick=sel?'<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5"><path d="M20 6L9 17l-5-5"/></svg>':'';
    const cls='pal2-item'+(sel?' taken':'');
    const cb=('palAddKV('+JSON.stringify(key)+','+JSON.stringify(v)+')').replace(/"/g,'&quot;');
    return '<div class="'+cls+'" onclick="'+cb+'"><span class="pal2-check">'+tick+'</span>'+cap(v)+'</div>';
  }).join('');
  return '<div class="pal2-hd">'+(labels[key]||key)+'<span>'+vals.length+'</span></div><div class="pal2-cols">'+items+'</div>';
}
function pal2Cat(key){
  document.querySelectorAll('.pal2-cats .pal2-c').forEach(el=>el.classList.remove('on'));
  const el=document.querySelector(`.pal2-c[data-key="${key}"]`);
  if(el)el.classList.add('on');
  const vals=tokVals(key);
  document.getElementById('pal2right').innerHTML=pal2Panel(key,vals);
}
function palItemIcon(key,v){
  if(key==='location'){const c=FLAG_MAP[v];return c?'<span class="ic-dot ic-flag"><img src="assets/flags/'+c+'.svg"></span>':'';}
  if(key==='sector'){const f=SECTOR_MAP[v]||'technology';return '<span class="ic-dot ic-sector"><img src="assets/sectors/'+f+'.svg"></span>';}
  if(key==='tech'){const f2=TECH_ICONS[v];return f2?'<span class="ic-dot ic-tech"><img src="assets/tech/'+f2+'.svg"></span>':'<span class="ic-dot ic-tech" style="font-size:9px;font-weight:800;color:#555">'+v.slice(0,2)+'</span>';}
  return '<span class="ic-dot" style="background:#f0f0f2"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="3.2"/></svg></span>';
}
function openLetterLightbox(src,nm){const lb=document.getElementById('letterLb');document.getElementById('letterLbImg').src=src;document.getElementById('letterLbNm').textContent=nm;lb.classList.add('open');document.body.style.overflow='hidden';}
function closeLetterLightbox(e){if(e.target===document.getElementById('letterLb')){document.getElementById('letterLb').classList.remove('open');document.body.style.overflow='';}}
/* entrance animations */
(function initAnims(){
  // Scroll-triggered entrance animations
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(el=>{
      if(!el.isIntersecting)return;
      const t=el.target.dataset.animType;
      if(t==='slide-left')el.target.classList.add('anim-slide-left');
      else if(t==='slide-right')el.target.classList.add('anim-slide-right');
      else if(t==='scale')el.target.classList.add('anim-scale');
      else el.target.classList.add('anim-in');
      el.target.classList.remove('anim-ready');
      io.unobserve(el.target);
    });
  },{threshold:.06,rootMargin:'0px 0px -32px 0px'});

  // Section-level observer (slightly earlier trigger)
  const ioSec=new IntersectionObserver((entries)=>{
    entries.forEach(el=>{
      if(!el.isIntersecting)return;
      el.target.classList.add('anim-in');
      el.target.classList.remove('anim-ready');
      ioSec.unobserve(el.target);
    });
  },{threshold:.04,rootMargin:'0px 0px -20px 0px'});

  function observe(){
    // Cards & elements — staggered via nth-child delays in CSS
    document.querySelectorAll('.sec-head,.pcd-stat,.fprod,.fserv,.fproj,.tcard,.fcl,.gp-region,.abcard,.edgecard,.scard,.pd-ovc,.pd-featrow,.pd-fit,.pd-ben-row,.stat,.abcard,.vme2-card,.commit-card,.team-card,.about-who-left,.about-who-right,.about-big-num,.about-big-lbl,.about-who-desc,.tmarq-card,.tscroll-card').forEach((el)=>{
      if(el.classList.contains('anim-in'))return;
      el.classList.add('anim-ready');
      // alternate slide directions for visual variety
      const idx=[...el.parentElement.children].indexOf(el);
      if(el.classList.contains('about-who-left'))el.dataset.animType='slide-left';
      else if(el.classList.contains('about-who-right'))el.dataset.animType='slide-right';
      else if(el.classList.contains('team-card')||el.classList.contains('edgecard'))el.dataset.animType='scale';
      io.observe(el);
    });
    // Section containers — fade-up as a whole
    document.querySelectorAll('.sec:not(.anim-in)').forEach((el)=>{
      if(el.classList.contains('anim-in'))return;
      el.classList.add('anim-ready');
      ioSec.observe(el);
    });
  }
  observe();
  const origShowPage=window.showPage;
  if(origShowPage)window.showPage=function(){origShowPage.apply(this,arguments);setTimeout(observe,120);};
})();

// Scrollbar: turn red while scrolling
(function(){
  let t;
  window.addEventListener('scroll',function(){
    document.documentElement.classList.add('is-scrolling');
    clearTimeout(t);
    t=setTimeout(function(){document.documentElement.classList.remove('is-scrolling');},800);
  },{passive:true});
})();
/* boot */
window.addEventListener('scroll',function(){var n=document.querySelector('nav');if(!n||n.classList.contains('nav-dark'))return;n.classList.toggle('nav-scrolled',window.scrollY>72);},{passive:true});


/* ===== Angular bridge: expose renamed renderers (Router owns URLs) ===== */
window._renderPage=_renderPage;
window._openProduct=_openProduct;
window._openProject=_openProject;
window._openService=_openService;
window.renderSearchResults=renderSearchResults;

/* ===== graceful fallback for raster assets absent from this package =====
   Mirrors the design's native monogram/watermark fallback philosophy so the
   layout never shows broken-image glyphs for logos/portraits we don't ship. */
(function(){
  function initialsOf(s){return (s||'').split(/\s+/).filter(function(w){return /[A-Za-z0-9]/.test(w);}).slice(0,2).map(function(w){return w[0];}).join('').toUpperCase();}
  document.addEventListener('error',function(e){
    var img=e.target; if(!img||img.tagName!=='IMG'||img.dataset.fb)return; img.dataset.fb='1';
    var alt=img.getAttribute('alt')||''; var w=img.getBoundingClientRect().width||img.width||40;
    var span=document.createElement('span');
    span.textContent=initialsOf(alt);
    span.style.cssText='display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#fbe9e8,#f3cdcb);color:#c0221d;font-family:Poppins,sans-serif;font-weight:800;letter-spacing:-.02em;font-size:'+Math.max(11,Math.min(22,w*0.32))+'px;';
    if(img.parentNode){ if(!img.parentNode.style.background)img.parentNode.style.background='#f4f5f7'; img.replaceWith(span); }
  },true);
})();

window.__ntgEngineReady=true;
window.dispatchEvent(new Event('ntg-engine-ready'));
