function showElement() {
 const element = document.getElementById('success-section');
 element.classList.remove('hidden');
 hiddenMain()
 hideElement()
}

function hideElement() {
 const element = document.getElementById('show-2');
 const element2= document.getElementById('show-3');

 element.classList.add('hidden');
 element2.classList.add('hidden');
}
function hiddenMain(){
 const mainHome=document.getElementById("show-1")
 mainHome.classList.add('hidden');

}
function backHome() {
 const element1 = document.getElementById('success-section');
 element1.classList.add('hidden');
 backHome1()

}

function backHome1 (){
 const mainHome=document.getElementById("show-1")
 const element01 = document.getElementById('show-2');
 const element02= document.getElementById('show-3');
 mainHome.classList.remove('hidden');
 element01.classList.remove('hidden');
 element02.classList.remove('hidden');
}

let clickCount = 0;
function appendToDisplay(value) {
 clickCount++;
 const outputElement1 = document.getElementById('displayBtn1');
 const btn2= document.getElementById('hi')
 const newPTag = document.createElement('p');
 newPTag.textContent = 'Click ' + clickCount;
      
 outputElement1.appendChild(newPTag);

 outputElement1.textContent = value;
 btn2.style.backgroundColor = getRandomColor();
 priceDisplay()

}
function getRandomColor() {
 const color = 'green';
 
 return color;
}
function priceDisplay(){
 const priceSeat= document.getElementById('priceUpdate')
 const newPrice = document.createElement('p');
 priceSeat.innerText=500
 priceSeat.appendChild(newPrice);

}