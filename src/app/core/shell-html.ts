/* Stable engine host: overlays, palette, client popup and the page containers the
   ported engine renders into. Kept verbatim from the approved design (native inline
   handlers resolve against the engine's window globals). */
export const SHELL_HTML = `
<div id="clPopup" style="position:fixed;inset:0;z-index:150;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);" onclick="if(event.target===this)closeClPopup()">
  <div id="clPopupBox" style="background:#fff;border-radius:8px;width:min(480px,96vw);max-height:80vh;overflow-y:auto;display:flex;flex-direction:column;"></div>
</div>
<div id="page-home" class="page"></div>
<div id="page-products" class="page"></div>
<div id="page-services" class="page"></div>
<div id="page-projects" class="page"></div>
<div id="page-clients" class="page"></div>
<div id="page-product" class="page"></div>
<div id="page-project" class="page"></div>
<div id="page-service" class="page"></div>
<div id="page-about" class="page"></div>
<div id="page-search" class="page"></div>

<div class="letter-lb" id="letterLb" onclick="closeLetterLightbox(event)">
  <button class="letter-lb-close" onclick="document.getElementById('letterLb').classList.remove('open')">&times;</button>
  <img id="letterLbImg" alt="">
  <span class="letter-lb-nm" id="letterLbNm"></span>
</div>
<div class="ov" id="ov"><div class="modal" id="modal"></div></div>
<div class="toast" id="toast"></div>

<div class="pal" id="pal">
  <div class="pal-box">
    <div class="pal-in">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <input id="palinput" placeholder="Search clients, projects, products and services…" autocomplete="off" oninput="palText=this.value;renderPal();">
      <button onclick="closePal()" style="background:#f4f4f6;border:1px solid #e4e4e8;cursor:pointer;padding:5px 11px;border-radius:8px;font-size:11px;font-weight:700;color:#666;transition:.14s;flex-shrink:0;letter-spacing:.04em" onmouseover="this.style.background='#eaeaec';this.style.color='#222'" onmouseout="this.style.background='#f4f4f6';this.style.color='#666'">ESC</button>
    </div>
    <div class="pal-keys" id="palkeys"></div>
    <div class="pal-body" id="palbody"></div>
    <div class="pal-foot" id="palfoot"><span>⌘K / Ctrl K to reopen</span><span id="palstat"></span></div>
  </div>
</div>
`;
