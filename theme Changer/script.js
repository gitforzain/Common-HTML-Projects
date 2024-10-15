let ImgElement = document.getElementById('Changer');
let body = document.body;

ImgElement.addEventListener('click', () => {
    if (ImgElement.src.includes('sun.svg')) {
        ImgElement.src = 'moon.svg';
        ImgElement.classList.add('invert');
    } else {
        ImgElement.src = 'sun.svg';
        ImgElement.classList.remove('invert');
    }
    body.classList.toggle('body_color');
});
