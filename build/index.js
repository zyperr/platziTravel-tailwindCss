const cardSlider = document.getElementById("slider-cards");
//* This array contain the information for each card at section "Our recommendations"
const cardItems = [
  {
    titleCard: "Norway",
    descCard: "Beautiful landscapes",
    img: "bg-norway",
  },
  {
    titleCard: "New York",
    descCard: "Concrete jungle",
    img: "bg-new_york",
  },
  {
    titleCard: "Yosemite",
    descCard: "A break from the world",
    img: "bg-yosemite",
  },
  {
    titleCard: "Seattle",
    descCard: "Big City",
    img: "bg-seattle",
  },
  {
    titleCard: "Switzerland",
    descCard: "Big City",
    img: "bg-switzerland",
  },
];

//TODO dynamic card function
/*
    
 //* at the first parameter you have to specifi a div element
 //* 2nd & 3rd parameters are for h1,h7 if u want also you can use other element like span,small,p,etc.
 //* 4th You can use an image if you aren't using tailwind for routing a class with you image
 //* 5th If you're using Tailwind css you can use an array,object or wherever you want case the parameter has undefined by default.

    -This the card structure used on the project

    ---- Card structure ----
          <div class="card">
            <div class="card-image"></div>
            <div class="card-details-green" || class="card-details-blue">
              <p class="card-title">Norway</p>
              <p class="card-decription">
                Beautiful landscapes
              </p>
            </div>
          </div>
    ----                ----
*/
const dinamCard = (div = "", h1 = "", p = "", img = "") => {
  return cardItems.map((item) => {
    const cardContainer = document.createElement(div);
    const imgBg = document.createElement(div);
    const textContainer = document.createElement(div);
    const titleCard = document.createElement(h1);
    const descriptionCard = document.createElement(p);
    cardContainer.classList.add("card");
    imgBg.classList.add("card-image", item.img);

    if (
      item.titleCard.includes("Norway") ||
      item.titleCard.includes("Yosemite") ||
      item.titleCard.includes("Switzerland")
    ) {
      textContainer.classList.add("card-details-green");
    } else {
      textContainer.classList.add("card-details-blue");
    }
    titleCard.classList.add("card-title");
    descriptionCard.classList.add("card-decription");

    titleCard.textContent = item.titleCard;
    descriptionCard.textContent = item.descCard;

    cardContainer.appendChild(imgBg);
    textContainer.appendChild(titleCard);
    textContainer.appendChild(descriptionCard);
    cardContainer.appendChild(textContainer);
    cardSlider.appendChild(cardContainer);
  });
};

class Cards extends HTMLElement {
  constructor() {
    super();
    this.imageCard = this.getAttribute("data-image");
    this.titleCard = this.getAttribute("data-title");
    this.textCard = this.getAttribute("data-text");
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="w-full h-96  my-3 relative">
    <img class="absolute -z-10 h-full object-cover rounded-3xl shadow-md brightness-75" src=${this.imageCard} alt=${this.titleCard}>
    <div class="py-7">
    <h3 class="font-bold text-xl px-4 py-2 text-white">${this.titleCard}</h3>
    <p class="mx-4 font-medium text-base leading-loose text-white">${this.textCard}</p>
    </div>
    </div>`;
  }
}

customElements.define("app-card", Cards);

dinamCard("div", "h3", "p");

const tabLinks = document.querySelectorAll(".tab-link");
tabLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Elimina la clase "active" de todos los enlaces
    tabLinks.forEach(allLinks => allLinks.classList.remove('text-primary'));
    
    // Agrega la clase "active" solo al enlace clicado
    this.classList.add('text-primary');
  });
});
