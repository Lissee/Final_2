const button = document.querySelector('#button');
const input = document.querySelector('#input');
const person0 = document.querySelector('#Sky_us');
const person1 = document.querySelector('#Egor_us');
const person2 = document.querySelector('#Liss_us');
const person3 = document.querySelector('#Gordey_us');
const person4 = document.querySelector('#Kwa_us');
document.getElementById('input').value = "Введите сообщение...";

let mes =  document.getElementById('Sky');

function clean_mess(){
    document.getElementById('input').value = "";
}

function go_mess(){
    let text = document.querySelector('#input');
    if (text.value) {
        mes.insertAdjacentHTML('beforeend',
            `<div class="mes_right">${text.value}</div>`);
        if (text.value === "Как дела?" || text.value === "" + "Как дела?") {
            mes.insertAdjacentHTML('beforeend',
                `<div class="one"><div class="mes_left">Сижу лабы пишу(</div></div>`);
            clean_mess();
        } else {
            mes.insertAdjacentHTML('beforeend',
                `<div class="one"><div class="mes_left">${text.value}</div></div>`);
            clean_mess();
        }
    }
}

function chatKwa(){
   document.querySelector('#Sky').style.display = 'none';
    document.querySelector('#Liss').style.display = 'none';
    document.querySelector('#Egor').style.display = 'none';
    document.querySelector('#Gordey').style.display = 'none';
    document.querySelector('#Kwa').style.display = 'block';
    mes =  document.getElementById('Kwa');
}
function chatLiss(){
    document.querySelector('#Sky').style.display = 'none';
    document.querySelector('#Egor').style.display = 'none';
    document.querySelector('#Gordey').style.display = 'none';
    document.querySelector('#Kwa').style.display = 'none';
    document.querySelector('#Liss').style.display = 'block';
    mes =  document.getElementById('Liss');
}
function chatSky(){
    document.querySelector('#Kwa').style.display = 'none';
    document.querySelector('#Liss').style.display = 'none';
    document.querySelector('#Egor').style.display = 'none';
    document.querySelector('#Gordey').style.display = 'none';
    document.querySelector('#Sky').style.display = 'block';
    mes =  document.getElementById('Sky');
}
function chatEgor(){
    document.querySelector('#Sky').style.display = 'none';
    document.querySelector('#Liss').style.display = 'none';
    document.querySelector('#Kwa').style.display = 'none';
    document.querySelector('#Gordey').style.display = 'none';
    document.querySelector('#Egor').style.display = 'block';
    mes =  document.getElementById('Egor');
}
function chatGordey(){
    document.querySelector('#Sky').style.display = 'none';
    document.querySelector('#Liss').style.display = 'none';
    document.querySelector('#Egor').style.display = 'none';
    document.querySelector('#Kwa').style.display = 'none';
    document.querySelector('#Gordey').style.display = 'block';
    mes =  document.getElementById('Gordey');
}


input.addEventListener("click", clean_mess, {once: true});
button.addEventListener("click", go_mess);
person0.addEventListener("click", chatSky);
person1.addEventListener("click", chatEgor);
person2.addEventListener("click", chatLiss);
person3.addEventListener("click", chatGordey);
person4.addEventListener("click", chatKwa);