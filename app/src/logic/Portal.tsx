// @ts-nocheck -- site shell ported verbatim from the Claude Design prototype.
// Drives the public site: navigation, theme, splash, menus, modals, forms and toasts.
// The B2B portal (sign-in, registration, orders, payment) lives in src/portal and renders
// on the «order» page; this shell only hosts it and shows its toasts.
import { Component } from 'react';
import { FORMS } from '../data/portal';
import { PAGES } from '../data/site';
import { portal } from '../portal/store';
import { siteVals } from './siteVals';
import { PortalView } from '../views/PortalView';

export class Portal extends Component {
  state = {dataTab:0,page:'home',theme:'light',splash:true,scrolled:false,w:1280,menu:null,mobileNav:false,chapter:-1,museumTab:0,mediaTab:0,newsId:null,newsYear:'الكل',newsCat:'الكل',newsQ:'',faqGroup:-1,faqQ:'',open:{},reportsCat:-1,galleryCat:-1,mapQ:'',located:false,selPoint:0,qty:0,qtyErr:'',orderOpen:false,orderDone:false,stepsOpen:false,video:null,toast:'',errors:{},sent:{}};

  componentDidMount(){const fb=(el)=>{if(el&&el.matches&&el.matches('[data-fillbg]'))el.style.background=String(el.value||'').trim()?'var(--card-2)':'var(--card)';};this._fb=(ev)=>fb(ev.target);document.addEventListener('input',this._fb,true);document.addEventListener('change',this._fb,true);
    portal.toast=(msg)=>this.toast(msg);portal.navigate=(p)=>{if(this.state.page!==p)this.go(p);};
    this._unsub=portal.subscribe(()=>this.forceUpdate());
    // Every visit starts on the home page; the visitor chooses where to go from there.
    let theme='light',page='home';
    try{ theme=localStorage.getItem('zz-theme')||'light'; localStorage.setItem('zz-page','home'); }catch(e){}
    if(location.hash!=='#home'){ try{history.replaceState(null,'','#home');}catch(e){} }
    document.documentElement.setAttribute('data-theme',theme);
    const dtab=page==='reports'?1:page==='certs'?2:0; if(dtab) page='stats';
    this.setState({theme,page,dataTab:dtab,w:window.innerWidth});
    this._onScroll=()=>{const s=window.scrollY>40; if(s!==this.state.scrolled) this.setState({scrolled:s});};
    this._onResize=()=>this.setState({w:window.innerWidth});
    // Ignore hashes a host restores right after load (e.g. a saved #order), so a visit always starts on home.
    this._mountedAt=Date.now();
    this._onHash=()=>{const p=(location.hash||'').replace('#',''); if(Date.now()-this._mountedAt<3000){ if(p!=='home'){try{history.replaceState(null,'','#home');}catch(e){}} return; } if(p==='order')return; if(PAGES.includes(p)&&p!==this.state.page) this.go(p);};
    this._onKey=(e)=>{ if(e.key==='Escape'){ this.setState({stepsOpen:false,orderOpen:false,video:null,mobileNav:false,menu:null}); if(portal.state.acctMenu)portal.set({acctMenu:false}); } };
    window.addEventListener('scroll',this._onScroll,{passive:true});
    window.addEventListener('resize',this._onResize);
    window.addEventListener('hashchange',this._onHash);
    window.addEventListener('keydown',this._onKey);
    this._splashT=setTimeout(()=>this.setState({splash:false}),1900);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this._onScroll);window.removeEventListener('resize',this._onResize);
    window.removeEventListener('hashchange',this._onHash);window.removeEventListener('keydown',this._onKey);
    document.removeEventListener('input',this._fb,true);document.removeEventListener('change',this._fb,true);
    if(this._unsub)this._unsub();
    clearTimeout(this._splashT);clearTimeout(this._toastT);
  }
  go(page,extra={},anchor){
    if(page==='reports'||page==='certs'){extra={dataTab:page==='reports'?1:2,...extra};page='stats';}
    const base={page,menu:null,mobileNav:false,stepsOpen:false,chapter:-1,newsId:null};
    this.setState({...base,...extra});
    try{localStorage.setItem('zz-page',page);}catch(e){}
    // Portal screens are not bookmarkable: keep #order out of the address so a saved link opens on home.
    const h=page==='order'?'#home':'#'+page;
    if(location.hash!==h){ try{history.replaceState(null,'',h);}catch(e){} }
    setTimeout(()=>{
      const el=anchor&&document.getElementById(anchor);
      if(el){ window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-90,behavior:'smooth'}); }
      else window.scrollTo(0,0);
    },30);
  }
  toBuyPack(){
    this.setState({mobileNav:false,menu:null,stepsOpen:false});
    const jump=()=>{
      const el=document.getElementById('buy-pack');
      if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-90,behavior:'smooth'});
    };
    if(this.state.page==='home'){ setTimeout(jump,0); return; }
    this.go('home');
    setTimeout(jump,180);
  }
  toast(msg){ clearTimeout(this._toastT); this.setState({toast:msg}); this._toastT=setTimeout(()=>this.setState({toast:''}),3200); }
  submit(key){
    return (e)=>{
      e.preventDefault();
      const fd=new FormData(e.target); const errs={};
      Object.entries(FORMS[key]).forEach(([f,rule])=>{
        const v=String(fd.get(f)||'').trim();
        if(rule==='phoneopt'){ if(v&&!/^05\d{8}$/.test(v)) errs[f]='أدخل رقم جوال صحيح يبدأ بـ 05 ويتكون من 10 أرقام'; return; }
        if(!v){ errs[f]='هذا الحقل مطلوب'; return; }
        if(rule==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[f]='أدخل بريداً إلكترونياً صحيحاً';
        if(rule==='phone'&&!/^05\d{8}$/.test(v)) errs[f]='أدخل رقم جوال صحيح يبدأ بـ 05 ويتكون من 10 أرقام';
      });
      if(Object.keys(errs).length){ this.setState(s=>({errors:{...s.errors,[key]:errs}})); return; }
      e.target.reset();
      this.setState(s=>({errors:{...s.errors,[key]:{}},sent:{...s.sent,[key]:true}}));
    };
  }
  chip(label,active,onClick){ return {label,onClick,bg:active?'var(--ink)':'transparent',fg:active?'var(--bg)':'var(--ink)',bd:active?'var(--ink)':'var(--line)'}; }
  renderVals(){return siteVals(this);}
  render(){return <PortalView v={this.renderVals()} />;}
}
