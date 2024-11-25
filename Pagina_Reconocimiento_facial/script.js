const cameraInput = document.getElementById("cameraInput");
const cameraPreview = document.getElementById("cameraPreview");
const image = document.querySelector('.video');
const btn_camara = document.querySelector('.camaraBtn');

cameraInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    cameraPreview.srcObject = null;
    cameraPreview.src = fileURL;
    image.style.height= "180px"
    btn_camara.style.color="#ffb5e8"
});

const camera = document.querySelector('.camera');
const btnCamara = document.querySelector('.camaraBtn');

btnCamara.addEventListener('click', ()=>{
    camera.click();
})