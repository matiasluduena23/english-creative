import"./hoisted.70988453.js";class h{constructor(t,s,e=3e3){this.txtElement=t,this.words=s,this.txt="",this.wordIndex=0,this.wait=parseInt(e,10),this.type(),this.isDeleting=!1}type(){const t=this.wordIndex%this.words.length,s=this.words[t];this.isDeleting?this.txt=s.substring(0,this.txt.length-1):this.txt=s.substring(0,this.txt.length+1),this.txtElement.innerHTML=` <span class="txt">${this.txt} </span>  `,this.isDeleting,!this.isDeleting&&this.txt===s?(this.wait,this.isDeleting=!0):this.isDeleting&&this.txt===""&&(this.isDeleting=!1,this.wordIndex++),setTimeout(()=>this.type(),500)}}document.addEventListener("DOMContentLoaded",r);function r(){n("profession"),n("search")}function n(i){const t=document.getElementById(i),s=JSON.parse(t.getAttribute("data-text")),e=t.getAttribute("data-wait");new h(t,s,e)}