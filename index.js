
// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

let userLink = '';
document.getElementById('setLink').addEventListener('click', function () {
   userLink = prompt('Введіть посилання:', 'https://');
});
document.getElementById('redirectLink').addEventListener('click', function () {
   if (userLink) { window.location.href = userLink; }
   else {
      alert('Будь ласка, введіть посилання спочатку.');
   }
});