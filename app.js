// Carousel Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// end

// Cars cards
const carsContainer = document.querySelector('.cars');
const cars = [
    {
        id: 1,
        info: '5 Seats, 4 Doors',
        name: 'Audi Q3 2020',
        image: './images/audi-q3.png',
        specs: ['Includes 300 free km', 'Theft Protection', 'Non Refundable'],
        price: '29.999 €'
    },
    {
        id: 2,
        info: '5 Seats, 4 Doors',
        name: 'Audi A4 2020',
        image: './images/audi-a4.png',
        specs: ['Includes 300 free km', 'Theft Protection', 'Non Refundable'],
        price: '24.999 €'
    },
    {
        id: 3,
        info: '5 Seats, 4 Doors',
        name: 'Audi A3 2020',
        image: './images/audi-a3.png',
        specs: ['Includes 300 free km', 'Theft Protection', 'Non Refundable'],
        price: '19.999 €'
    },
    {
        id: 4,
        info: '5 Seats, 4 Doors',
        name: 'Audi Q7 2020',
        image: './images/audi-q7.png',
        specs: ['Includes 300 free km', 'Theft Protection', 'Non Refundable'],
        price: '39.999 €'
    }
];

function openModalConfigurator(index) {
    console.log(cars[index]);
}

function displayCars() {
    cars.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.classList.add('car');
        carCard.innerHTML = `
        <img class="car-img" src="${car.image}" alt="">
        <p class="car-info">${car.info}</p>
        <p class="car-name">${car.name}</p>
        <button class="btn" onclick="openModalConfigurator(${index})">Configurator</button>
        <ul class="specs">
            <li class="spec">
                <span class="checkmark">&#10003;</span>
                <span>${car.specs[0]}</span>
            </li>
            <li class="spec">
                <span class="checkmark">&#10003;</span>
                <span>${car.specs[1]}</span>
            </li>
            <li class="spec">
                <span class="checkmark">&#10003;</span>
                <span>${car.specs[2]}</span>
            </li>
        </ul>
        <div class="bottom-selection">
            <div class="price">
                <label>Starting from</label>
                <p class="price-amount">${car.price}</p>
            </div>
            <button>Buy Now</button>
        </div>
        `;
        carsContainer.appendChild(carCard);
    })
}

document.addEventListener('DOMContentLoaded', displayCars())