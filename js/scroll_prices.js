let btnScrollPrices = document.querySelector('.js_scroll_prices_btn'),
    serviesSection = document.querySelector('.js_servies');

btnScrollPrices.addEventListener('click', () => {
    serviesSection.scrollIntoView({ block: "end", behavior: "smooth" });
});
