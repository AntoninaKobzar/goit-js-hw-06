        const form=document.querySelector(".login-form");
        form.addEventListener("submit",handleSubmit);
        function handleSubmit(event){
            event.preventDefault();
            const email = event.currentTarget.elements.email.value;
            const password = event.currentTarget.elements.password.value;
            const elements={email,password,};
            if(email.value === "" || password.value === ""){
            return alert("Please, fill in all the fields!");
            }
            console.log(elements)
            event.currentTarget.reset();
        }



