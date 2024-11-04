// let screen = document.querySelector(".screen");
// let buttons = document.querySelectorAll(".btn");
// let clear = document.querySelector(".btn-clear");
// let equal = document.querySelector(".equal");


// function buttonCLick(buttons) {
//     buttons.addEventListener('click', function(e){
//         let value = e.target.dataset.num;
//         screen.value += value;
//     });
// };



// buttons.forEach(button => {
//     buttonCLick(button)
// });


// equal.addEventListener('click', function(e) {
//     try {
//         screen.value = eval(screen.value); 
//     } catch {
//         screen.value = "Error";
//     }
// });

(function() {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

   buttons.forEach(buttons => {
    buttons.addEventListener('click', function(e){
        let value = e.target.dataset.num
        screen.value += value;
    })
   });

   equal.addEventListener('click', function(e){
    if(screen.value ==='') {
        screen.value = 'Error';
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
   })

   clear.addEventListener('click', function(e){
        screen.value = ""
   })

})()