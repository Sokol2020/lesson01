(()=>{"use strict";const e=e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),a=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},n=()=>{let e=a();t.textContent=("0"+e.hours).slice(-2),r.textContent=("0"+e.minutes).slice(-2),c.textContent=("0"+e.seconds).slice(-2),a>0?n():0===a&&clearInterval(n)};setInterval,setInterval((()=>{n()}),1e3)};clearInterval(e);e("22 december 2021"),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a");document.addEventListener("click",(r=>{r.target.closest(".menu")||r.target.classList.contains("close-btn")||r.target===t[0]||r.target===t[1]||r.target===t[2]||r.target===t[3]||r.target===t[4]?e.classList.toggle("active-menu"):r.target.closest(".active-menu")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>768?(e.style.display="block",document.querySelector(".popup-content").animate([{opacity:0,transform:"translate3D(0, -300px, 0)"},{opacity:1}],{duration:500})):e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const r=t.getAttribute("href").substr(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-block"),a=document.querySelectorAll("form"),n=document.querySelector(".mess");a.forEach((e=>{const t=e.querySelector("input[type=text]"),r=e.querySelector("input[type=email]"),c=e.querySelector("input[type=tel]");t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я -]/gi,"")})),r.addEventListener("input",(e=>{e.preventDefault(),r.type="text",e.target.value=e.target.value.replace(/[^a-z0-9_.~*'!@-]/giu,"")})),c.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\(\)\-\+\ ]/g,"")}))})),n.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я !?()-*%.,/]/gi,"")})),c.addEventListener("input",(c=>{c.preventDefault(),e.value=e.value.replace(/\D+/,""),t.value=t.value.replace(/\D+/,""),r.value=r.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})()})();