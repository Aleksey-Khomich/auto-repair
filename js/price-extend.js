/* function priceExtend() {
  let cont = document.querySelector('.js_prices_block'),
    headerHeight = document.querySelector('.js_prices_block_header').offsetHeight,
    blocks = document.querySelectorAll('.js_prices_block_table'),
    btnExtend = document.querySelector('.js_btn_more_prices'),
    allBlocks = blocks.length,
    startblocks = 2,
    startHeight = calculateStartHeight(startblocks),
    scrollPosition;
  cont.style.height = `${startHeight}px`;

  btnExtend.addEventListener('click', () => {

    if (!cont.classList.contains('expanded')) {

      scrollPosition = btnExtend.scrollTop - (parseFloat(window.getComputedStyle(btnExtend, null).height.replace('px', '') / 2));
      cont.style.height = `${calculateStartHeight(allBlocks)}px`;
      btnExtend.textContent = 'Свернуть';
      cont.classList.add('expanded');
      return;
    } else {

      cont.style.height = `${calculateStartHeight(startblocks)}px`;
      cont.classList.remove('expanded');
      btnExtend.textContent = 'Развернуть';
    }
  });

  function calculateStartHeight(quantity) {
    let result,
      firstBlocksHeight = 0;

    Array.prototype.forEach.call(blocks, function (el, index) {
      if (index < quantity) {
        firstBlocksHeight = firstBlocksHeight + el.offsetHeight;
      }
    });

    result = firstBlocksHeight + headerHeight;
    return result;
  }
}
priceExtend();
 */