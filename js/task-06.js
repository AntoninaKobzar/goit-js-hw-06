

    let inputEl = document.querySelector("#validation-input");
    let inputLength = inputEl.dataset.length;
    const input = document.querySelector("input");
    inputEl.addEventListener("blur",(e)=>{
        const textInput=e.target.value;
        console.log(textInput);
        textInput.length >=inputLength ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");  
    });



