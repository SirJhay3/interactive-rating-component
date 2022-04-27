// Targeting the DOM
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const update = document.querySelector('span');
const modal = document.querySelector('.modal');
// console.log(modal)
// console.dir(document.body)

function handleClick() {
    if (!update.textContent) {
        alert(`Please your feedback is needed, select a rate.`)
        return
    }
    // modal.setAttribute('show', 'true');
    modal.style.zIndex = '0';
    console.log(modal)
}

function closeModal(e) {
    // console.log(e.target.localName)
    if (e.target.localName == 'body') {
        ratings.forEach(rate => {
            rate.setAttribute('selected', 'false');
            rate.style.color = 'var(--Medium-Grey)';
            rate.style.backgroundColor = 'hsl(220, 7%, 26%)';
        })
        modal.style.zIndex = '-1'
    }
    
}

function handleRate(e) {
    ratings.forEach(rate => {
        rate.setAttribute('selected', 'false');
        rate.style.color = 'var(--Medium-Grey)';
        rate.style.backgroundColor = 'hsl(220, 7%, 26%)';
    })
    e.currentTarget.setAttribute('selected', 'true');


    e.currentTarget.style.backgroundColor = 'var(--Orange)';
    e.currentTarget.style.color = 'var(--White)'
    update.textContent = e.target.textContent;
}

ratings.forEach(rating => rating.addEventListener('click', handleRate));

submit.addEventListener('click', handleClick)
window.addEventListener('click', closeModal)