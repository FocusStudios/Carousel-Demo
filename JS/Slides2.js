const carousel = document.querySelector(".carousel");

const slides = [

 {width: "70%", number: "S1 active", image: "Flowers/bouquet1.png", badge: "flex", title: "Pink Roses",  text: "Ftesh & Cheerful", description: "Delicate pink roses with a charming touch.", price: "$24"},
 {width: "18%", number: "S2", image: "Flowers/bouquet2.png", badge: "none", title: "Red Roses",  text: "Passionate & Romantic", description: "Rich red roses expressing deep affection.", price: "$31"},
 {width: "12%", number: "S3", image: "Flowers/bouquet3.png", badge: "flex", title: "White Roses",  text: "Pure & Elegant", description: "Elegant white roses for pure moments.", price: "$27"}
 
];


slides.forEach((slide,index) => {

    carousel.innerHTML += `

   <li class="card ${slide.number}" style="width:${slide.width};">

    <img class="image" src="${slide.image}">

    <div class="badge" style="display:${slide.badge};">
     <img src="Flowers/Icon.svg">
     <span>New</span>
    </div>

    <section class="details">

     <h1>${slide.title}</h1>
     <h2>${slide.text}</h2>
     <img class="decoration" src="Flowers/decoration.svg">
     <p>${slide.description}</p>

     <div class="price">

     <h3>${slide.price}</h3>

     <div class="button-container">
      <button>
       <img src="Flowers/bag.svg">
      </button>
     </div>

     </div>

    </section>

   </li>

    `;

});


const Cards = document.querySelectorAll(".card");

let x = 0;

function Slide(index) {

    Cards.forEach(card => card.classList.remove("active"));
    Cards[index].classList.add("active");

    for (let i = 0; i < Cards.length; i++) {

        let a, b;

        if (x === index) return;

        if (index === 0) {
            a = (x === 1) ? x + i + 1 : x + i - 1;
            b = i;
        }

        else if (index === 1) {
            a = (x === 0) ? x + i : x + i - 1;
            b = (x === 0) ? x + i + 2 : x + i;
        }

        else if (index === 2) {
            a = (x === 0) ? x + i : x + i + 1;
            b = (x === 0) ? x + i + 1 : x + i;
        }

        Cards[i].style.animation = `Gentle${a % Cards.length}${b % Cards.length} 2s linear forwards`;
    }

    x = index;
}

Cards.forEach((card, i) => {
    card.addEventListener("click", () => Slide(i));
});

function demo() {

const cards = [0, 1, 2];

cards.forEach((card, i) => {
    setTimeout(() => {
        Cards[card].click();
    }, (i + 1) * 2200);
});

}

demo();

setInterval(() => {demo();},6600);
