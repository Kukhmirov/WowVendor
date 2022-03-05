import dataCard from "../dataCard";

function addCard() {
    const parentWindow = document.querySelector('.choice__box'),
          addCardBtn = document.querySelector('.button--card-add');
          
    function addCard (newCard = 14, index = 1) {
        let i;
        let count = index;
        for(i = count; i <= newCard; ++i){
            console.log(1);
            const element = document.createElement('div');
            const priceBox = dataCard[i].sale?  `<div class="card__sale">${dataCard[i].sale}</div>` : '<div/>';
             
            element.classList.add('card');
            element.innerHTML = `
                <div class="card__image">
                    <img src="${dataCard[i].img}">
                </div>
                <div class="card__tag card__tag${dataCard[i].classGenre}"><span></span>${dataCard[i].genre}</div>
                <div class="card__name">${dataCard[i].name}</div>
                <div class="card__grade">
                    <span class=${dataCard[i].stars[0]}></span>
                    <span class=${dataCard[i].stars[1]}></span>
                    <span class=${dataCard[i].stars[2]}></span>
                    <span class=${dataCard[i].stars[3]}></span>
                    <span class=${dataCard[i].stars[4]}></span>
                    ${dataCard[i].grade}
                </div>
                <div class="card__description">${dataCard[i].description}</div>
                <div class="card__price">
                    <span><strike>${dataCard[i].lostPrice}</strike>${dataCard[i].price}</span>
                    ${priceBox}
                </div>
                `;
            parentWindow.appendChild(element);
        };
    }

    

    addCardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const test = document.querySelectorAll('.card');

        test.forEach(item => {
            item.remove(item);
        })

        const newCard = 14;
        const index = 0;
        addCard(newCard, index);
    })

    addCard();


};

export default addCard;
