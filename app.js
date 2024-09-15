const cards = document.getElementsByClassName("card");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

let num = 0;

function handleImage(val) {
  num = num + val

  console.log(num)
}

btnNext.addEventListener("click", ()=>{
  handleImage(1)
})
btnPrev.addEventListener("click", ()=>{
  handleImage(-1)
})
