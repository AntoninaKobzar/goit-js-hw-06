    let inputEl=document.querySelector("#name-input");
    let outputEl=document.querySelector("#name-output");
    inputEl.addEventListener("input",(event=>{
        outputEl.textContent=event.currentTarget.value;
    }));



