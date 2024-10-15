let hamburger = document.getElementById('hamburger');
let mobilemenu = document.getElementById('mobile_menu');

hamburger.addEventListener('click', () => {
    // Check if the left position is '0px'
    if (mobilemenu.style.left === '0px') {
        mobilemenu.style.left = '-100%'; // Hide the menu
    } else {
        mobilemenu.style.left = '0px'; // Show the menu
    }
});

window.addEventListener('resize' , () => {

    if(window.innerWidth > 800){
        mobilemenu.style.left = '-100%'
        hamburger.style.left = '-100%';
    }

});
