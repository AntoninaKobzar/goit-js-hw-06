const targetBtn=document.querySelector("#value");
let valueEl=Number(document.querySelector("#value").textContent);
const counterValue=document.querySelector("#value");
const decrBtn=document.querySelector('[data-action="decrement"]');
const incrBtn=document.querySelector('[data-action="increment"]');
incrBtn.addEventListener("click",(event)=>{
    valueEl+=1;
    counterValue.innerText=valueEl;
});
decrBtn.addEventListener("click",(event)=>{
    valueEl-=1;
    counterValue.innerText=valueEl;
    console.log("counterValue",counterValue)
});
