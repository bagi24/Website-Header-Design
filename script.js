const onOffBtn = document.querySelector('.btn');
const light =document.getElementById('light');


const toggleBtn =() => {

    onOffBtn.classList.toggle('active');
    light.classList.toggle('on');


}



onOffBtn.addEventListener('click', toggleBtn)