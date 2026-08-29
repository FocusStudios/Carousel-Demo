const carousel = document.querySelector(".carousel");

const slides = [

 {color: "#001238", height: "200px", image: "Books/book1.png", icon: "Books/Icon1.svg", category: "MAGIC", title: "Charting Stars", author: "Micheline Ryckman", summary: "Stella follows her dreams while discovering courage, love, and purpose."},
 {color: "#330B00", height: "250px", image: "Books/book2.png", icon: "Books/Icon2.svg", category: "CLASSIC", title: "Anne de Ingleside", author: "L.M. Montgomery", summary: "Anne discovers the true meaning of family, love, and belonging."},
 {color: "#00240A", height: "300px", image: "Books/book3.png", icon: "Books/Icon3.svg", category: "HISTORICAL", title: "Little Women", author: "Louisa May Alcott", summary: "Jo March pursues her dreams while cherishing family, love, and resilience."},
 {color: "#33002A", height: "250px", image: "Books/book4.png", icon: "Books/Icon4.svg", category: "FANTASY", title: "A Dança da Floresta", author: "Juliet Marillier", summary: "Sorcha sacrifices everything to save her family through courage and love."},
 {color: "#1C003D", height: "200px", image: "Books/book5.png", icon: "Books/Icon5.svg", category: "MYTHS", title: "The Girl in the Tower", author: "Katherine Arden", summary: "Vasya embraces her destiny while battling dark forces and ancient magic."}
 
];


slides.forEach((slide,index) => {

    carousel.innerHTML += `

    <li class="card" style="--i:${slide.color};height:${slide.height};">

     <div class="details-container">

      <img class="book" src="${slide.image}">

      <section class="details">

      <h2>${slide.title}</h2>
      <h3>${slide.author}</h3>

      <div class="line"></div>

      <p>${slide.summary}</p>

      <div class="button-container">
       <button>
        <span>Read Now</span>
        <img class="arrow" src="Books/arrow.svg">
       </button>
      </div>

      </section>

     </div>

     <h1>${slide.category}</h1>

     <img class="icon" src="${slide.icon}">
     <img class="decoration" src="Books/decoration.svg">

    </li>

    `;

});

const Cards = document.querySelectorAll(".card");

Cards.forEach(Card => {

Card.addEventListener("click", (e) => {

if (e.target.closest(".card button")) return;

Cards.forEach(card => {

if (card !== Card && card.classList.contains("active")) {

card.classList.remove("active");

}

});

Card.classList.toggle("active");

});

});

function demo() {

const cards = [0, 1, 2, 3, 4, 4];

cards.forEach((card, i) => {
    setTimeout(() => {
        Cards[card].click();
    }, (i + 1) * 1500);
});

}

demo();

setInterval(() => {demo();},9000);