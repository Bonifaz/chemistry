const burger = document.querySelector('.header__burger');
const popUp = document.querySelector('.pop-up');
const popUpOverlay = document.querySelector('.pop-up__overlay');
const link = document.createElement('a');



//buttons
const popUpButtonProductions = document.querySelector('.pop-up__button_productions');
const popUpButtonSolvents = document.querySelector('.pop-up__button_solvents');
const popUpButtonNonFreezing = document.querySelector('.pop-up__button_non-freezing');
const buttonPrices = Array.from(document.querySelectorAll('.button__price'));
const popUpButtonContact = document.querySelector('.pop-up__button_contact');
const productSolventsButton = document.querySelector('.product__section-solvents');
const productAntifreezButton = document.querySelector('.product__section-antifreeze');
const gridSolvents = document.querySelector('.product__cards-solvents');
const gridAntifreez = document.querySelector('.product__cards-antifreez');
const gridSolventsClassActive = 'product__cards-solvents-active';
const gridAntifreezClassActive = 'product__cards-antifreez-active';
const gridSubtitle = document.querySelector('.product__subtitle');
const gridMobileTitle = document.querySelector('.product__mob-minititle');
//Создание кнопки для скачивания
link.setAttribute('href', 'content/price_ges.pdf');
link.setAttribute('download', 'download.pdf');

//Якори
const contacts = document.querySelector('#contacts');
const production = document.querySelector('#production');

function openOrClosePopUp(popUp){
    burger.classList.toggle('header__burger_active');
    popUp.classList.toggle('pop-up_is-open');
    popUpOverlay.classList.toggle('overlay');
}

//Слушатели

burger.addEventListener('click', () => {
    openOrClosePopUp(popUp);
});

popUpButtonContact.addEventListener('click', () => {
    openOrClosePopUp(popUp);
    contacts.scrollIntoView();
});

popUpButtonProductions.addEventListener('click', () =>{
    openOrClosePopUp(popUp);
    production.scrollIntoView();
});

popUpButtonSolvents.addEventListener('click', () =>{
    openOrClosePopUp(popUp);
    productAntifreezButton.classList.remove('button_active');
    productSolventsButton.classList.add('button_active');
    gridSolvents.classList.add(gridSolventsClassActive);
    gridAntifreez.classList.remove(gridAntifreezClassActive);
    production.scrollIntoView();
});

popUpButtonNonFreezing.addEventListener('click', () =>{
    openOrClosePopUp(popUp);
    productAntifreezButton.classList.add('button_active');
    productSolventsButton.classList.remove('button_active');
    gridSolvents.classList.remove(gridSolventsClassActive);
    gridAntifreez.classList.add(gridAntifreezClassActive);
    production.scrollIntoView();
});

buttonPrices.forEach(button => {
    button.addEventListener('click', ()=>{
        link.click();
        return false;
    })
});

productSolventsButton.addEventListener('click', () =>{
    productAntifreezButton.classList.toggle('button_active');
    productSolventsButton.classList.toggle('button_active');
    gridSolvents.classList.add(gridSolventsClassActive);
    gridAntifreez.classList.remove(gridAntifreezClassActive);
    gridMobileTitle.textContent = 'Растворители';
    gridSubtitle.textContent = 'Растворители применяются для разбавления нитроэмалей, нитролаков, нитрошпаклевок общего назначения, для обезжиривания поверхности.';

});

productAntifreezButton.addEventListener('click', () =>{
    productAntifreezButton.classList.toggle('button_active');
    productSolventsButton.classList.toggle('button_active');
    gridSolvents.classList.remove(gridSolventsClassActive);
    gridAntifreez.classList.add(gridAntifreezClassActive);
    gridMobileTitle.textContent = 'Незамерзающая жидкость';
    gridSubtitle.textContent = 'Используется в стеклоомывающей системе транспортных средств для обработки стекол автомобилей при низких температурах от льда, грязи, дорожной пыли.';
});