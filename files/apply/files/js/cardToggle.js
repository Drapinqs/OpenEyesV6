const btn = document.querySelector('.bubbly-button');
const text = document.querySelector('.card__read-more');
const cardHolder = document.querySelector('.card-holder');
cardHolder.addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('bubbly-button');
    if (!isReadMoreBtn) return;
    const currentText = e.target.parentNode.querySelector('.card__read-more');
    currentText.classList.toggle('card__read-more--open');
});