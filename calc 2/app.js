(function() {
    let display = document.querySelector('#screen')
    let buttons = document.querySelectorAll('.btn')
    let clearButton =document.querySelector('.clear-btn')
    let backspace =document.querySelector('.backspace-btn')
    let equalButton =document.querySelector('.equal-btn')



    buttons.forEach(buttons => {
        buttons.addEventListener('click', function(e) {
            value = e.target.dataset.sum
            if (display.value === '' && ['+', '/', '*'].includes(value)) {
                return;  
            }

            const lastChar = display.value.slice(-1); 
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
                display.value = display.value.slice(0, -1)
                display.value += value
                return; 
            }

            if (value === '-' && display.value.endsWith('-')) {
                return;

            }else {
                display.value += value
            }
            
        })
    });

    equalButton.addEventListener('click', function(e){
        if (display.value === "") {
            display.value = "0"
        }else {
            value = eval(display.value)
            display.value = value
        }
    });

    clearButton.addEventListener('click', function(e){
        display.value = ""
    })

    backspace.addEventListener('click', function(e){
        display.value = display.value.slice(0, -1)
    })

})();



