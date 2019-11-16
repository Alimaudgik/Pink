var popupSubmit = document.querySelector('.popup__reg');
var submitButton = document.querySelector('.submit__text');
var close = document.querySelector('.reg__button');

submitButton.addEventListener('click', function() {
  if (popupSubmit.classList.contains('close-popup')) {
    popupSubmit.classList.remove('close-popup');
    popupSubmit.classList.add('open-popup')
  };
});

close.addEventListener('click', function() {
  if (popupSubmit.classList.contains('open-popup')) {
    popupSubmit.classList.remove('open-popup');
    popupSubmit.classList.add('close-popup')
  }
})