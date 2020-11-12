// htmldagi elementlarni topib oldim
var elCheckForm = document.querySelector('.js-check-form');
var elNumberInput = elCheckForm.querySelector('.js-number-input');
var elResultSpan = document.querySelector('.result-span');
var elTrySpan = document.querySelector('.try');

// Assosiy o'zgaruvchini e'lon qilib oldim
var attempts = 6
// Kompiyuter 1 va 100 gacha bo'lgan sonlar orasidan ixtiyoriy sonni tanlab olish formulasi
var compRandomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


elCheckForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (attempts === 1) {
    elNumberInput.value = '';
    elCheckForm.innerHTML = '';
    elResultSpan.classList.add ('text-danger');
    elResultSpan.textContent = "O'yin Tamom";
    return;
  }

  var number = parseInt(elNumberInput.value.trim(), 10);

  if (number === compRandomNumber) {
    elResultSpan.textContent = "Sonni topdingiz! O'yin tamom";
    elResultSpan.classList.remove('text-warning');
    elResultSpan.classList.add ('text-success');
    elNumberInput.setAttribute('disabled', true);
  }else if (number > compRandomNumber) {
    elResultSpan.textContent = "Siz o'ylagan son kompiyuter sonidan katta";
  } else {
    elResultSpan.textContent = "Siz o'ylagan son kompiyuter sonidan kichik";
  }

  attempts--;
  elTrySpan.textContent = attempts;
});
