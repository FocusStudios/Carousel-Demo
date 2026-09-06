const Container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const indicator = document.querySelector(".indicator");

const slides = [

 {image: "Profiles/profile1.png", name: "Mark E.", display: "flex", job: "Front-End Developer", badge: "Profiles/pen.svg", text: "HTML, CSS, JS"},
 {image: "Profiles/profile2.png", name: "Parker K.", display: "none", job: "Full-Stack Developer", badge: "Profiles/node.svg", text: "Node.js, React.js"},
 {image: "Profiles/profile3.png", name: "Emma U.", display: "flex", job: "UI/UX Designer", badge: "Profiles/adobe.svg", text: "Adobe XD, Illustrator"},
 {image: "Profiles/profile4.png", name: "John M.", display: "flex", job: "Front-end Developer", badge: "Profiles/code.svg", text: "HTML, CSS, JS"},
 {image: "Profiles/profile5.png", name: "Samantha L.", display: "none", job: "Back-end Developer", badge: "Profiles/layers.svg", text: "PHP, SQL"},
 {image: "Profiles/profile6.png", name: "Diana S.", display: "none", job: "Back-end Developer", badge: "Profiles/java.svg", text: "JS, Node.js"},
 {image: "Profiles/profile7.png", name: "Adrian P.", display: "flex", job: "UI/UX Designer", badge: "Profiles/figma.svg", text: "Figma, Illustrator"},
 {image: "Profiles/profile8.png", name: "Talia A.", display: "flex", job: "Full-Stack Developer", badge: "Profiles/vue.svg", text: "Vue.js, React.js"},
 
];


slides.forEach(slide => {

    carousel.innerHTML += `

    <li class="card ${slide.state}">

     <section class="details">

      <div class="circle">
       <img class="image" src="${slide.image}">
      </div>

      <div class="name">
       <h1>${slide.name}</h1>
       <img src="Profiles/verified.svg" style="display:${slide.display};">
      </div>

      <h2>${slide.job}</h2>
        
      <div class="line"></div>

      <div class="badge">
       <img src="${slide.badge}">
       <span>${slide.text}</span>
      </div>

      </section>

    </li>

    `;

});

const Cards = document.querySelectorAll(".card");

let gap = 10;
let snap = 0;
let currentIndex = 0;
let cardWidth;
let slidesPerView = Math.floor(Container.offsetWidth/(Cards[0].offsetWidth + gap));
let slidesInView = 2;
let x;
let numberOfDots;
let oldSlidesPerView;

function updateSnap() {

if (currentIndex == numberOfDots - 1) {

snap = 2*x;

}else if (currentIndex == 0) {

snap = 0;

}else{

snap = x;

}

}


cardWidth = slidesInView*(Cards[0].offsetWidth + gap);

oldSlidesPerView = slidesPerView;
slidesPerView = Math.floor(Container.offsetWidth/(Cards[0].offsetWidth + gap));

x = (Container.offsetWidth - slidesPerView*Cards[0].offsetWidth - (slidesPerView + 1)*gap)/2;

numberOfDots = Math.floor((Cards.length - slidesPerView)/slidesInView + 1);

currentIndex = Math.floor((currentIndex * oldSlidesPerView) / slidesPerView);
currentIndex = Math.min(currentIndex,numberOfDots - 1);

updateSnap();

carousel.style.transform = `translateX(${-currentIndex * cardWidth + snap}px)`;

indicator.innerHTML = "";

for (let i = 0; i < numberOfDots; i++) {
  
  const dot = document.createElement("li");

  dot.classList.add("dot");

  if (i === currentIndex) {dot.classList.add("active");}

    dot.addEventListener("click", () => {

      currentIndex = i;

      updateSnap();

      carousel.style.transform = `translateX(${-currentIndex * cardWidth + snap}px)`;

      document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("active");
      });

      dot.classList.add("active");

    });

  indicator.appendChild(dot);

}

const dots = document.querySelectorAll(".dot");

function demo() {

const Dots = [1, 2, 3, 0];

Dots.forEach((Dot, i) => {

 setTimeout(() => {dots[Dot].click();}, (i + 1) * 2000);

});

}

demo();
setInterval(() => {demo();},8000);
