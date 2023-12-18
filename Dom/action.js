


function travel(){
    setTimeout(function (){
        console.log("wash car");
    },2000)
 
    setTimeout(function (){
        console.log("packing bags");
    },1000)

    console.log("plan the trip");
    
}

travel();


function a(){
    let varIn=10;
    b();
    function b(){
        console.log(varIn);
    }
    
   
}

let f=a();
console.log(a())


// let  var1=10;


// var var2=100;

// let x=10;

// a();
// b();
// console.log(x);

// function a(){
//     let x=20;
//     console.log(x);
// }

// function b(){
//     let x=30;
//     console.log(x);
// }

