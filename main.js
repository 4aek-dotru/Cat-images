document.addEventListener('DOMContentLoaded', getUrlPhoto);
const button = document.querySelector('.reset-button-inactive');
const image = document.getElementById('image-code');

button.onclick = getUrlPhoto;
let history = [];
let currentImage = -1;
document.addEventListener('keydown', e => {
    scrollImages(e);
})
// Получение URL через API, с последующей генерацией картинки
async function getUrlPhoto() {
    const accessToken = "live_JrDm6O81DcwdMqpYaRKNJyN3Cnu8ok8hwKYnTYGG87GA16Nez6PMMgEio5fbJ81a";
    
    try{
        button.classList.remove('reset-button-inactive');
        button.classList.add('reset-button-active');
        image.innerHTML = `Ищем картинку`;
        const responce = await fetch(
            `https://api.thecatapi.com/v1/images/search?api_key=${accessToken}`
        )
        
        const data = await responce.json();
        history.push(data[0].url);
        currentImage++;
        
        button.classList.remove('reset-button-active');
        button.classList.add('reset-button-inactive');
        image.innerHTML = `<img  id='image' src='${data[0].url}'></div>`;

    }   catch (error) {
        console.error('Ошибка загрузки:', error);
        return '1';
    }
}
function scrollImages(e) {
   if(e.key == 'ArrowRight') {
    if (currentImage == history.length -1){
        getUrlPhoto();
    }else {
        currentImage++;
        image.innerHTML = `<img  id='image' src='${history[currentImage]}'></div>`;
    }
    }
    if(e.key == 'ArrowLeft') {
        if(currentImage == 0) return
        currentImage--;
        image.innerHTML = `<img  id='image' src='${history[currentImage]}'></div>`;
    }
    console.log(e)
}