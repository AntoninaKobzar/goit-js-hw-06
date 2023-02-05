
  function getRandomHexColor() {
    return`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
  }  

  const changeBtn=document.querySelector(".change-color");
  let colorText=document.querySelector("span");
  const body=document.querySelector("body");
  changeBtn.addEventListener("click",()=>{
  body.style.backgroundColor=getRandomHexColor().valueOf();
  colorText.innerHTML=`${getRandomHexColor().toString()}`;
  console.log(colorText);
  });


