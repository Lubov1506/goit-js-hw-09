import"./assets/styles-b34f9c3e.js";const o=document.querySelector(".feedback-form");let n=JSON.parse(localStorage.getItem("userFeedbackInfo"))??{};const l=()=>{try{if(n===null)return;for(const e in n)o.elements[e].value=n[e]}catch(e){console.log(e.message)}};l();const s=e=>{const{name:t,value:a}=e.target;n[t]=a.trim(),localStorage.setItem("userFeedbackInfo",JSON.stringify(n))},c=e=>{e.preventDefault();const{email:t,message:a}=o.elements;if(t.value.trim()===""||a.value.trim()===""){alert("Fill in all fields!");return}const r={[t.name]:t.value.trim(),[a.name]:a.value.trim()};console.log(r),localStorage.removeItem("userFeedbackInfo"),o.reset()};o.addEventListener("input",s);o.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
