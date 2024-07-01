// SELECTING THE CLASS NAME AND CREATING THE VARIABLE SAME AS CLASS NAME ----------------------------------------------------

(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // LOGIC WRITTEN FOR BUTTONS ----------------------------------------------------

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    // LOGIC WRITTEN FOR EQUAL BUTTON ----------------------------------------------------


    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    // LOGIC WRITTEN FOR CLEAR BUTTON ----------------------------------------------------


    clear.addEventListener('click', function(e) {
        screen.value = '';
    })

})();