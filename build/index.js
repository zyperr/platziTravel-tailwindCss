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
  {
    titleCard: "Sydney",
    descCard: "Big City",
    img: "bg-sydney",
  },
  {
    titleCard: "Camboya",
    descCard: "famous for their shrimps & nocturn life",
    img: "bg-camboya",
  },
  {
    titleCard: "Europe",
    descCard: "Big City",
    img: "bg-europe",
  },
  {
    titleCard: "Iceland",
    descCard: "Big City",
    img: "bg-iceland",
  },
  {
    titleCard: "Cataratas de Iguazú",
    descCard: "Unique experience",
    img: "bg-iguazu",
  },
  {
    titleCard:"Greece",
    descCard:"paradisiacal islands.",
    img: "bg-greece"
  },
  {
    titleCard:"Perú",
    descCard:"paradisiacal islands.",
    img: "bg-peru"
  },
  {
    titleCard:"Japan",
    descCard:"Exquisite enchantment.",
    img: "bg-japan"
  }
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
      item.titleCard.includes("Switzerland") ||
      item.titleCard.includes("Camboya")||
      item.titleCard.includes("Iceland") || 
      item.titleCard.includes("Greece") ||
      item.titleCard.includes("Japan")

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
    <div class="w-full h-96 md:h-96 lg:h-full my-3 ${this.imageCard} bg-no-repeat bg-cover  relative z-10 bg-center rounded-3xl ">
    <div class="w-full h-full absolute bg-opacity-40 bg-black -z-10 rounded-3xl"></div>
      <div class="py-7 flex flex-col text-right">
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
    // removed  class "text-primary" of all links 
    tabLinks.forEach(allLinks => allLinks.classList.remove('text-primary'));
    
    // added class "text-primary" only at link click 
    this.classList.add('text-primary');
  });
});


//dark mode btn 

//select both buttons
const btnDarkMode = document.querySelectorAll(".dark-toggle")
const htmlTag = document.querySelector("html")

//for each btn we add an event click
btnDarkMode.forEach(btn => {
  btn.addEventListener("click",addClass)
})
//function for add class and saving "dark mode"
function addClass () {
  htmlTag.classList.toggle("dark")
  //keeping darkmode at localstorage
  if(htmlTag.classList.contains("dark")){
    localStorage.setItem("dark", "true");
  }else{
    localStorage.setItem("dark", "false");
  }
}
//getting darkmode at localstorage and adding class dark to html tag
if(localStorage.getItem("dark") === "true"){
  htmlTag.classList.add("dark")
}else{
  htmlTag.classList.remove("dark")
}

