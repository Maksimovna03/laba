let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function () {
 if (tg.MainButton.isVisible) {
     tg.MainButton.hide();
 }
 else {
     tg.MainButton.setText("Вывести информацию о Мопсе");
     item = "🦴 Мопс – добрая и преданная собака для всей семьи. Таким он кажется со стороны. Такие отзывы вы получите от заводчиков. Но так ли питомец подходит хозяевам без опыта и для компании детям? Рассказываем про породу мопс с точки зрения кинологов и владельцев.  🦴";
     tg.MainButton.show();
 }
});


btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Бернедудле");
      item = "🦴 Бернедудль — это гибрид бернского зенненхунда и стандартного пуделя. Иногда для получения собаки меньшего размера используют миниатюрного пуделя. Цель этого скрещивания — получить тип бернского зенненхунда с очаровательным характером обоих, который не так сильно линяет и живет дольше.  🦴";
      tg.MainButton.show();
  }
 });

 btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Бассете");
      item = " 🦴 Бассет-хаунд — это большие коротконогие собаки (от фр. bas — «низкий»). Короткая гладкая шерсть может быть любых окрасов, характерных для гончих, но чаще всего встречает окрас триколор (черный, подпал и белый) или биколор (лимонный и белый). Рост взрослого бассета — 33-38 см, вес — от 18 до 27 кг.  🦴";
      tg.MainButton.show();
  }
 });


 btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Аффенпинчере");
      item = " 🦴 Аффенпинчер похож на терьера и выглядит как озорная обезьянка. Порода относится к комнатным собачкам. Рост взрослой собаки — 24–28 см в холке (от кончиков лап до лопаток), вес — от 3 до 4 кг. Жесткая шерсть, как правило, черного окраса, иногда с добавлением серых оттенков.  🦴";
      tg.MainButton.show();
  }
 });


Telegram.WebApp.onEvent("mainButtonClicked", function () {
 tg.sendData(JSON.stringify(item));
});