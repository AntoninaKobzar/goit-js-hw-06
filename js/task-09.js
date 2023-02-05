
    function getRandomHexColor() {
    return`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
  }  
    const changeBtn=document.querySelector(".change-color");
    let colorText=document.querySelector("span");
    const bodyChangedColor=document.querySelector("body");
    
    changeBtn.addEventListener("click",()=>{
      const randomColor=getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorText.innerHTML=`${randomColor}`;
    console.log(colorText);
    });
  



