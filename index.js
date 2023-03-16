let qrText = document.getElementById('qrText');
let qrImage = document.getElementById('qrImage');
let imgBox = document.getElementById('imgBox');

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add('show-img');
    }else{
        imgBox.classList.add('hide-img');
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000)
    }
}