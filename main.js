(()=>{"use strict";var e={p:""};const t=e.p+"assets/2dbd01ce16c0fa83cb67e20c73dedb66.png";new class{constructor(e,t){this.gameFild=new e,this.goblin=new t,this.gameScore=document.querySelector(".score"),this.gameFail=document.querySelector(".fail"),this.hole=0,this.userHit=0,this.score=0,this.item=0,this.timer=0}init(){this.gameFild.generate(4),this.hole=document.querySelectorAll(".hole"),this.eventClicK(),this.stepRandom()}eventClicK(){this.gameFild.element.addEventListener("click",(e=>{e.target.classList.contains("goblin")&&(this.userHit+=1,this.item.remove(),clearTimeout(this.timer),this.stepRandom())}))}createItem(){const e=document.createElement("img");e.src=this.goblin.goblinSrc,e.classList.add("goblin"),e.classList.add("blow"),this.item=e}stepRandom(){const e=(t=0,s=this.hole.length-1,Math.floor(Math.random()*(Math.floor(s)-Math.ceil(t)+1))+Math.ceil(t));var t,s;this.createItem(),this.hole[e].append(this.item),this.timer=setTimeout((()=>{this.item.remove(),this.stepRandom()}),1e3),this.score+=1,this.score-this.userHit>5&&(alert("you lose"),this.score=0,this.userHit=0),this.gameScore.innerText=`Score ${this.userHit}`,this.gameFail.innerText="Fail "+(this.score-this.userHit)}}(class{constructor(){this.element=document.querySelector(".hole-game")}generate(e){for(let t=0;t<e*e;t+=1){const e=document.createElement("div");e.classList.add("hole"),this.element.append(e)}}},class{constructor(){this.goblinSrc=t}}).init()})();