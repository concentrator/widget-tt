(function(){
  var rulesToggle = document.querySelector('.js-rules-toggle');
  var rulesText = document.querySelector('.js-rules-text');

  rulesToggle.addEventListener('click', function(evt){
    evt.preventDefault();
    rulesToggle.classList.toggle('order-coupon__rules-toggle--open');
    if(rulesText.style.display === 'block') {
      rulesText.style.cssText = '';
    } else {
      rulesText.style.display = 'block';
    }
  });
})();
