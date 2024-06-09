// .trim().toLowerCase();

document.getElementById('alertButton').addEventListener('click', function() {
   var userInput = document.getElementById('exampleFormControlTextarea1').value
   var modalMessage = document.getElementById('modalMessage');
   var modalImage = document.getElementById('modalImage');

   if (userInput === 'Зигмунд Фрейд') {
       modalImage.src = './img/good.jpg'; // Укажите путь к изображению для "ок"
       modalImage.style.display = 'block';
   }
      else if (userInput === 'Фрейд')  {
         modalImage.src = './img/pochti.png'; // Укажите путь к изображению для "ок"
         modalImage.style.display = 'block';
      }
   else {
       modalImage.src = './img/bad.png'; // Укажите путь к изображению для "не ок"
       modalImage.style.display = 'block';
   }
});
