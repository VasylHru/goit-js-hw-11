import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="45131715-e5faad2363c262c92b6a5cfbe",u="https://pixabay.com/api/";async function p(n){try{const t=await fetch(`${u}?key=${f}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){throw console.error("Fetch error:",t),t}}let a;function m(n){const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=n.map(o=>`
            <a href="${o.largeImageURL}" class="gallery-link">
                <div class="photo-card">
                    <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b> ${o.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b> ${o.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b> ${o.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b> ${o.downloads}
                        </p>
                    </div>
                </div>
            </a>
        `).join("");t.innerHTML=s,a?a.refresh():a=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,fadeSpeed:600})}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#search-form"),t=document.querySelector("#search-input"),s=document.querySelector("#loading-indicator");n.addEventListener("submit",async r=>{r.preventDefault();const i=t.value.trim();if(i===""){iziToast.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}o(),p(i).then(c=>{m(c)}).catch(c=>{iziToast.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}).finally(()=>{e()})});function o(){s.style.display="flex"}function e(){s.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
