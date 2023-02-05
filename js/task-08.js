        const form=document.querySelector(".login-form");
        form.addEventListener("submit",handleSubmit);
        function handleSubmit(event){
        event.preventDefault();
        const email = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;
        const elements = {
            email,
            password,
        };
        email === "" || password === ""?
        alert("Please, fill in all the fields!"):
        console.log(elements)
        event.currentTarget.reset();
        }
        form.addEventListener("submit", handleSubmit);





