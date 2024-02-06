import{i as S,a as ne}from"./assets/skroll-btn-a750212d.js";import{T as W,i,a as v}from"./assets/vendor-29bef8ec.js";const oe=document.querySelector(".quote-info"),_="quote-of-the-day",E="date",ie=new Date,q=ie.getDate();async function le(){try{const a=(await v.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;V(a),ce(a,q)}catch(e){i.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function ce(e,t){localStorage.setItem(_,JSON.stringify(e)),localStorage.setItem(E,t)}//! RENDER QUOTE
function V(e){const t=[e];oe.innerHTML=t.reduce((a,{quote:s,author:n})=>a+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function de(){const e=localStorage.getItem(E);if(isNaN(e)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===q){const t=localStorage.getItem(_);if(t){const a=JSON.parse(t);V(a)}return}await le(),localStorage.setItem(E,q.toString())}de();//! ANIMATION 
new W("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new W("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const ue=document.querySelector(".waist-pagination"),pe=document.querySelector(".filter-list"),P=document.querySelector(".gallery"),L=document.querySelector(".pagination-btn"),F=document.querySelector(".waist"),G=document.querySelector(".field-search-wraper"),Q=document.querySelector("#slash"),me=v.create({baseURL:"https://energyflow.b.goit.study/api"});let D;const ge=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await A({filter:"Muscles"}),ge.classList.add("filter-active")});const ye=async({filter:e,page:t,limit:a})=>{try{return D=await me.get("/filters",{params:{filter:e,page:t,limit:a}}),D}catch(s){i.error({message:s.message,color:"red",position:"topCenter"})}};pe.addEventListener("click",e=>{e.preventDefault(),P.innerHTML="",L.innerHTML="",F.innerHTML="",Q.innerHTML="",G.style="display:none",ue.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),A({filter:e.target.name}))});L.addEventListener("click",e=>{e.preventDefault(),F.innerHTML="",L.innerHTML="",P.innerHTML="",Q.innerHTML="",G.style="display:none",e.target.tagName==="BUTTON"&&A({filter:e.target.name,page:e.target.id})});async function A({filter:e,page:t=1,limit:a=12}){try{const s=await ye({filter:e,page:t,limit:a}),n=()=>{const f=s.data.totalPages;let l="";for(let o=1;o<=f;o++)Number(t)===o?l+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${o}</button></li> `:l+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button></li> `;return l},m=s.data.results.reduce((f,{name:l,filter:o,imgUrl:re})=>f+`<li class="gallery-item" id=${l}>
          <div class="card" id="${o}:${l}">
             <img class="gallery-image"
             src="${re}"
             alt="${o}"
            />
            </div>
            <div class="card-description" id="${o}:${l}">
            <p class="name-description" id="${o}:${l}">${l}</p>
            <p class="filter-description" id="${o}:${l}">${o}</p>
            </div>
          </li>`,""),w=n();L.innerHTML=w,P.innerHTML=m}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}}const fe="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",j=document.querySelector(".field-search-wraper"),he=document.querySelector(".exercises-wraper"),b=document.querySelector(".gallery"),Le=document.querySelector(".search-icon");let M=document.querySelector("#slash");const u=document.querySelector(".waist"),X=document.querySelector("#search"),Y=document.querySelector(".pagination-btn"),c=document.querySelector(".waist-pagination");document.querySelectorAll(".btn-waist-active");const be=document.querySelector(".main-waist-btn-container"),k=innerWidth;let r,R,Me=1,N,$=16,g=1;const T=v.create({baseURL:"https://energyflow.b.goit.study/api"}),H=async(e,{params:t})=>await T.get(e,{params:t});b.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H2"&&e.target.nodeName!=="P")&&(c.innerHTML="",Y.innerHTML="",u.innerHTML="",b.innerHTML="",M.innerHTML="",$=16,g=1,be.style.display="block",j.style.display="block",u.classList.add("information-cards"),R=e.target.id,r=R.split(":"),T.defaults.params={page:Me,limit:k>1400?"9":"8",muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},M.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${r[1]}</span></p>`),H("/exercises",{params:{}}).then(t=>{z(t.data.results),K(t.data.totalPages)}).catch(t=>{i.error({message:t.message,position:"topRight"})}))});c.addEventListener("click",e=>{e.preventDefault();const t=[...c.children];let a=e.target.id*1,s=42;a>g&&e.target.tagName==="LI"?(c.style.transform=`translateX(-${$+=s}px)`,g=e.target.id*1):a<g&&e.target.tagName==="LI"&&(c.style.transform=`translateX(-${$-=s}px)`,g=a),t.forEach(n=>{n.classList[1]&&e.target.tagName==="LI"&&n.classList.remove("btn-waist-active")}),e.target.tagName==="LI"&&e.target.classList.add("btn-waist-active"),Y.innerHTML="",u.innerHTML="",b.innerHTML="",M.innerHTML="",j.style.display="block",u.classList.add("information-cards"),T.defaults.params={page:a,limit:k>1400?"9":"8",muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},M.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${r[1]}</span></p>`),H("/exercises",{params:{}}).then(n=>{z(n.data.results)}).catch(n=>{i.error({message:n.message,position:"topRight"})})});let J;X.addEventListener("input",e=>{J=e.target.value});Le.addEventListener("click",e=>{u.innerHTML="",b.innerHTML="",c.innerHTML="",g=1,T.defaults.params={page:1,limit:k>1400?"9":"8",keyword:J,muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},H("/exercises",{params:{}}).then(t=>{N=t.data.totalPages,t.data.totalPages===null&&(he.style.height="100vh",u.innerHTML=`<div class="invalid-name">${fe}</div>`),z(t.data.results),K(N)}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{X.value=""})});function z(e){u.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:a,name:s,bodyPart:n,rating:m,time:w,target:f,_id:l})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${m}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${S}#icon-star"></use>
            </svg>
        </div>

        <div class="workout-btn-container" id="${l}" data-action="right">
            <button class="workout-btn">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${S}#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${S}#run"></use>
              </svg>
          </div>
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${a}/${w}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${f}</li>
      </ul>
    </li>`,"")),ne()}function K(e){for(let t=1;t<=e;t++)c.insertAdjacentHTML("beforeend",`<li class="btn-item-waist" id="${t}">${t}</li>`);c.firstChild.classList.add("btn-waist-active"),c.style.transform="translateX(-1px)"}const ve=document.querySelector(".footer-form"),Te=document.querySelector(".footer-form-input"),we="https://energyflow.b.goit.study/api/subscription";ve.addEventListener("submit",Se);async function Se(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Ee(t))return qe();try{const a=await v.post(we,{email:t});if(a.status>=200&&a.status<300){const s=a.data.message;i.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(a){i.error({title:"Error",message:a.response.data.message,position:"center",backgroundColor:"gray"})}finally{Te.value=""}}const Ee=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),qe=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},d=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),y=p.querySelector(".spinner"),O=p.querySelector(".btn-spin"),I=p.querySelector(".ticker"),$e=document.querySelector(".get-prize-container"),x=360/d.length,Ie=Math.floor(180/d.length),Z="is-spinning",ee="selected",Pe=window.getComputedStyle(y);let te,h=0,U=0,B;const Ae=()=>{d.forEach(({text:e,color:t,reaction:a},s)=>{const n=x*s*-1-Ie;y.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${a} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},ke=()=>{y.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${d.map(({color:e},t)=>`${e} 0 ${100/d.length*(d.length-t)}%`).reverse()}
    );`)},He=()=>{ke(),Ae(),B=p.querySelectorAll(".prize")},ze=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ae=()=>{const e=Pe.transform.split("(")[1].split(")")[0].split(","),t=e[0],a=e[1];let s=Math.atan2(a,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),m=Math.floor(n/x);U!==m&&(I.style.animation="none",setTimeout(()=>I.style.animation=null,10),U=m),te=requestAnimationFrame(ae)},xe=()=>{const e=Math.floor(h/x);B[e].classList.add(ee);const t=d[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,$e.style.display="block"},3e3)};O.addEventListener("click",()=>{O.disabled=!0,h=Math.floor(Math.random()*360+ze(2e3,5e3)),B.forEach(e=>e.classList.remove(ee)),p.classList.add(Z),y.style.setProperty("--rotate",h),I.style.animation="none",ae()});y.addEventListener("transitionend",()=>{cancelAnimationFrame(te),h%=360,xe(),p.classList.remove(Z),y.style.setProperty("--rotate",h)});He();const Be=document.querySelector("#prizeForm");document.querySelector(".input-get");Be.addEventListener("submit",Ce);async function Ce(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!De(t))return Re()}const De=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Re=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var C=document.getElementById("myModalPrize"),Ne=document.getElementById("openModalBtnPrize");Ne.onclick=function(){C.style.display="flex"};function se(){C.style.display="none"}window.onclick=function(e){e.target==C&&se()};var Oe=document.getElementById("closeModalPrize");Oe.onclick=function(){se()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){i.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}i.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var a=document.querySelector(".button-get");a.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map