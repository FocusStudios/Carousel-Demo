const carousel = document.querySelector(".carousel");

const slides = [

 {image: "Watches/watch1.png", title: "Fossil", description: "Rose Gold Chronograph", icon1: "Watches/Icon1.svg",  text1: "Rose Gold Finish", icon2: "Watches/Icon3.svg",  text2: "Stainless Steel Bracelet", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 249", state: "active"},
 {image: "Watches/watch2.png", title: "Tissot", description: "Elegant Black Floral", icon1: "Watches/Icon3.svg",  text1: "Two-Tone Stainless Steel", icon2: "Watches/Icon4.svg",  text2: "Water Resistant (50m)", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 399", state: ""},
 {image: "Watches/watch3.png", title: "Michael Kors", description: "Jaryn Gold Crystals", icon1: "Watches/Icon3.svg",  text1: "Gold-Tone Stainless Steel", icon2: "Watches/Icon1.svg",  text2: "Crystal Embellished", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 299", state: ""},
 {image: "Watches/watch4.png", title: "Michael Kors", description: "Rose Gold Chronograph", icon1: "Watches/Icon3.svg",  text1: "Rose Gold-Tone Stainless Steel", icon2: "Watches/Icon1.svg",  text2: "Crystal-Embellished Bezel", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 269", state: ""},
 {image: "Watches/watch5.png", title: "Tissot", description: "Rose Gold Two-Tone", icon1: "Watches/Icon1.svg",  text1: "Crystal-Embellished Bezel", icon2: "Watches/Icon4.svg",  text2: "Water Resistant (50m)", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 495", state: ""},
 {image: "Watches/watch6.png", title: "Fossil", description: "Two-Tone Chronograph", icon1: "Watches/Icon3.svg",  text1: "Gold-Tone Stainless Steel", icon2: "Watches/Icon4.svg",  text2: "Water Resistant (50m)", icon3: "Watches/Icon2.svg",  text3: "Comes with Gift Box", price: "$ 259", state: ""}
 
];


slides.forEach((slide,index) => {

    carousel.innerHTML += `

    <li class="card ${slide.state}">

     <img class="image" src="${slide.image}">

     <div class="details">

      <section class="titles">

       <h1>${slide.title}</h1>
       <h2>${slide.description}</h2> 

       <div class="decoration">
        <img class="sparkle" src="Watches/sparkle.svg">
        <div class="line"></div>
       </div>

      </section>

      <ul class="features">

       <li>
        <img class="icon" src="${slide.icon1}">
        <span>${slide.text1}</span>
       </li>

       <li>
        <img class="icon" src="${slide.icon2}">
        <span>${slide.text2}</span>
       </li>

       <li>
        <img class="icon" src="${slide.icon3}">
        <span>${slide.text3}</span>
       </li>

      </ul>

      <section class="price">

       <h1>${slide.price}</h1>

       <div class="button-container">
        <button>
         <span>View Details</span>
         <img class="arrow" src="Watches/arrow.svg">
        </button>     
       </div>    

      </section>

     </div>

    </li>

    `;

});

const Cards = document.querySelectorAll(".card");

Cards.forEach(Card => {

Card.addEventListener("click",() => {

document.querySelector(".card.active").classList.remove("active");
Card.classList.add("active");

});

});

const cards = [1, 2, 3, 4, 5, 0];
const positions = [-60, -170, -280, -390, -460, 0];

function demo() {

cards.forEach((card, i) => {
    setTimeout(() => {
        Cards[card].click();
        carousel.style.transform = `translateX(${positions[i]}px)`;
    }, (i + 1) * 2000);
});

}

demo();
setInterval(() => {demo();},12000);
