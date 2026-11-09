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

    if (good.promo !== '') {
        let promo = document.createElement('p');
        promo.textContent = good.promo;
        card.appendChild(promo);
    }


    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
    
    list.appendChild(card);
}
