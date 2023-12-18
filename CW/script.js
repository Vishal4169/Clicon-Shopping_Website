
function mouseoverevent() {
  
    let x = document.getElementsByClassName("popupPage_signin")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

}

function mouseoverevent_favorite() {
  
    let x = document.getElementsByClassName("shoppingCart ")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

}

let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];

console.log(second)

setInterval(() => {
    let currentTime = new Date();
    hour.innerHTML = currentTime.getHours();
    minute.innerHTML = currentTime.getMinutes();
    second.innerHTML = currentTime.getSeconds();

}, 1000)


function closePopup() {
   let closePage = document.getElementsByClassName("ad")[0];
   if(closePage.style.display === "block"){
    closePage.style.display = "none";
   }
    else {
    closePage.style.display = "block";
   }

}

// function openWindow(){
//     window.open("previewPage.html");
// }

const newPage = document.getElementsByClassName("eachProduct");

//Accessing the data from local storage
const image=document.getElementsByClassName('card-img-top');
localStorage.setItem('test-item', image);

const myData = localStorage.getItem('test-item');
console.log(myData);

for(let i=0;i<newPage.length;i++){
   newPage[i].addEventListener("click",()=>{
       window.open("previewPage.html")
})

}

