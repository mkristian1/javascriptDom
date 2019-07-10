document.body.style.background = 'url(./img/bg.jpg) center no-repeat';




var menu = document.querySelector('.menu');
var menuLi = document.querySelectorAll('.menu-item');


console.log(menuLi[0]);
menu.insertBefore(menuLi[2], menuLi[1]); // Меняевм местами пункты меню


var newMenuElement =  document.createElement('li');
var newLi = menu.appendChild(newMenuElement);
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';

var column = document.querySelectorAll('.column');
var ads = document.querySelector('.adv');



var title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple'; // Меняем заголовок добавляем слово подлинную

column[1].removeChild(ads); // Удаляем рекламу



textBlock = document.getElementById('prompt');
console.log(textBlock);
var UserText = prompt(' Что вы думаете о технике Apple?', '');
textBlock.innerHTML = UserText; // добавляем текст в Блок


