const btnClick=document.querySelectorAll('.goTo')
let countTikitNum=1
let totAlPriCe= 0;
const adio= new Audio();

for(let i=0; i< btnClick.length; i++){
 const btnAlpplay= btnClick[i]
 // console.log(btnAlpplay)
 btnAlpplay.addEventListener("click", function(){
  const textin= btnAlpplay.querySelector("h1").innerText
  const textinPice= parseFloat(btnAlpplay.querySelector("span").innerText)

  
  

  const updatePrice= document.getElementById('priceUpdate')
  const createPrice= document.createElement("p")
  createPrice.innerText=textinPice;
  updatePrice.appendChild(createPrice)

  const newSeat= document.getElementById('displayBtn1')
  const creatSeat= document.createElement("h3")
  creatSeat.innerText= textin;
  newSeat.appendChild(creatSeat)
  const countTaka=document.getElementById('selected')
  countTaka.innerText=countTikitNum;
  countTikitNum++

  totAlPriCe+=textinPice
  console.log(totAlPriCe)
  document.getElementById("hiHlwprice").innerText=totAlPriCe.toFixed(2)

 })
}

const btN= document.getElementById('Apllaydiscount')
btN.addEventListener("click", function(){
 const inpUtFild=document.getElementById('inPutfilD').value;
 const valuInput=inpUtFild.split(" ").join("").toUpperCase();
 console.log(valuInput)
 if(totAlPriCe>=1500){
  if(valuInput==='COUPLE20'){
   const diSCont=document.getElementById('disCount')
   const discountAmount= totAlPriCe*0.2;
   const toTalp=totAlPriCe-discountAmount;
   diSCont.innerText=toTalp
   document.getElementById('inPutfilD').value=""
   adio.src = "../adio/Point of No Return.mp3"
   adio.play();

  }
   else{
    alert("invaild")
    }
 }
 else{
  alert("kipta")
 }
})

