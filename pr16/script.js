let goods = [
    {
        name: 'Велосипед ВМ-20t',
        description: 'Горный велосипед',
        img: 'img/bm20t.jpg',
        price: 21000,
        promo: ''
    },
    {
        name: 'Самокат А120',
        description: 'Городской самокат',
        img: 'img/a120.jpg',
        price: 15000,
        promo: ''
    },
    {
        name: 'Велосипед G400-b',
        description: 'Универсальный велосипед',
        img: 'img/g400b.jpg',
        price: 25000,
        promo: ''
    },
    {
        name: 'Гироскутер Z500',
        description: 'Гироскутер для взрослых',
        img: 'img/z500.jpg',
        price: 12000,
        promo: 'Скидка 15%'
    },
    {
        name: 'Электросамокат L5',
        description: 'Удобный электросамокат',
        img: 'img/l5.jpg',
        price: 17500,
        promo: ''
    },
    {
        name: 'Электровелосипед Q111',
        description: 'Комфортный электровелосипед',
        img: 'img/q111.jpg',
        price: 30000,
        promo: ''
    }
];

let list = document.querySelector('.cards');

let modal = document.querySelector('#myModal');
let modalText = document.querySelector('#modal-text');
let closeModal = document.querySelector('#closeModal');

for (let i = 0; i < goods.length; i++) {
    let good = goods[i];

    let card = document.createElement('li');
    card.classList.add('card');

    let picture = document.createElement('img');
    picture.src = good.img;

    let name = document.createElement('h2');
    name.textContent = good.name;

    let description = document.createElement('p');
    description.textContent = good.description;

    let price = document.createElement('p');
    price.textContent = good.price;

    let button = document.createElement('button');
    button.textContent = 'В избранное';

    let status = document.createElement('p');

    button.addEventListener('click',  function(){
        status.textContent =  'Товар добавлен в избранное'
    })

    let orderButton = document.createElement('button');
    orderButton.textContent = 'Заказать';

    orderButton.addEventListener('click',  function(){
        modalText.textContent =  'Вы заказали ' + ' ' + good.name + ' ' + 'по цене' + ' ' + good.price + ' ' + 'рублей';
        modal.style.display = 'flex'
    })

    if (good.promo !== '') {
        card.classList.add('card__sale');
        let promo = document.createElement('p');
        promo.textContent = good.promo;
        card.appendChild(promo);
    }


    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    card.appendChild(button);
    card.appendChild(status);
    
    card.appendChild(orderButton);
    
    list.appendChild(card);
}
