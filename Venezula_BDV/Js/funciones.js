const btn_1 = document.querySelector('.content');
const btn_2 = document.querySelector('.content1');

function options_Disponibles(options, label, mostrar) {
  const options_D = options.querySelectorAll('label');
  options_D.forEach(element =>{
    if (element == label) {

        lolo = label.textContent;
    };
  });
  return lolo
};

btn_1.addEventListener('click', () =>{
  const options = btn_1.querySelector('.completas');
  options.classList.toggle('visible');  
  const select = options.querySelectorAll('label');
  select.forEach(label =>{
    label.addEventListener('click', ()=>{
      const mostrar = btn_1.querySelector('.select');
      const resultado = options_Disponibles(options, label, mostrar);  
      mostrar.value = resultado;
    });
  });
});

btn_2.addEventListener('click', (e) =>{
  const options = btn_2.querySelector('.completas');
  options.classList.toggle('visible');
  const select = options.querySelectorAll('label');
  if (!options.contains(e.target) && e.target !== btn_2) {
    remove()
  }else{
    select.forEach(label => {
      label.addEventListener('click', ()=>{
        const mostrar = btn_2.querySelector('.select');
        const resultado = options_Disponibles(options, label, mostrar);  
        mostrar.value = resultado;
      });
    });
  }
});

function remove() {
    btn_1.classList.remove('visible');
    btn_2.classList.remove('visible');
};
