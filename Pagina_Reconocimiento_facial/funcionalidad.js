const form = document.querySelector('.box');
const btnVideoDetection = document.querySelector('.detection');
const video = document.createElement('video');
const canvas = document.createElement('canvas');
const box = document.body;
const closet = document.createElement('i');
closet.classList.add('fa-solid' , 'fa-circle-xmark', 'closet');

btnVideoDetection.addEventListener('click', ()=>{
  video.appendChild(closet);
  box.appendChild(video);
  box.appendChild(canvas);
  form.classList.add('active');
});

canvas.addEventListener('click',()=>{
  box.removeChild(video);
  box.removeChild(canvas);
  form.classList.remove('active');
})