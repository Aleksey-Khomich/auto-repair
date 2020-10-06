let btnScrollPrices = document.querySelector('.js_scroll_prices_btn'),
    btnScrollServies = document.querySelector('.js_scroll_servies_btn');

btnScrollPrices.addEventListener('click', () => {
    document.getElementById('prices').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
});

btnScrollServies.addEventListener('click', () => {
    document.getElementById('servies').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
});
