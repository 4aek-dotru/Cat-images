document.addEventListener('DOMContentLoaded', getUrlPhoto);
document.addEventListener('DOMContentLoaded', Timer);
const BUTT = document.querySelector('.reset-button-inactive');
const QR_CONST = document.getElementById('QR-code');

BUTT.onclick = getUrlPhoto;
    

// Получение URL через API, с последующей генерацией картинки
async function getUrlPhoto() {
    const accessToken = "live_JrDm6O81DcwdMqpYaRKNJyN3Cnu8ok8hwKYnTYGG87GA16Nez6PMMgEio5fbJ81a";
    
    try{
        BUTT.classList.remove('reset-button-inactive');
        BUTT.classList.add('reset-button-active');
        QR_CONST.innerHTML = ``

        const responce = await fetch(
            `https://api.thecatapi.com/v1/images/search?api_key=${accessToken}`
        )
        
        const data = await responce.json();
        
        BUTT.classList.remove('reset-button-active');
        BUTT.classList.add('reset-button-inactive');
        QR_CONST.innerHTML = `<img  id='Qr-image' src='${data[0].url}'></div>`

    }   catch (error) {
        console.error('Ошибка загрузки:', error);
        return '1';
    }
}

// Сколько прошло секунд с создания сайта
function Timer(){
    const tititi = document.getElementById('timer');
    const unixNow = Math.floor(Date.now() / 1000);
    const spend = unixNow - 1765685826;

    tititi.innerText = `${spend} секунд прошло с создания сайта!`;
    setTimeout(function(){
        Timer();
    }, 1000)
}