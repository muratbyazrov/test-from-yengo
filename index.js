const counter = document.querySelector('.counter__content');
const input = document.querySelector('.counter__input');
const button = document.querySelector('.counter__button');

let beginner = 0;
let orValue = Number(localStorage.getItem('orValue') || beginner);

(function rand() {
    let randomNuber = Math.floor(Math.random() * (10));
    orValue = orValue + randomNuber;
    localStorage.setItem('orValue', orValue);
})();

counter.textContent = `${orValue} просмотров`;

button.addEventListener('click', () => {
    localStorage.setItem('orValue', Number(input.value));
});
