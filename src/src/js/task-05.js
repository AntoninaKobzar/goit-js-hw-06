        let inputEl=document.querySelector("#name-input");
        let outputEl=document.querySelector("#name-output");
        
        inputEl.addEventListener("input", (event => {
        if (outputEl.textContent=event.currentTarget.value) {        
        outputEl.textContent
        } else {
            outputEl.textContent = "Anonymous";
            }
        }));



