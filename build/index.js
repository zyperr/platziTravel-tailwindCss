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
//*This are classes used in funcion dinamCard()
const cardClassesArray = {
  containerClasses: "w-52 h-64 shadow-md rounded-lg",
  imgClasses: "w-52 h-3/5 rounded-t-lg bg-cover bg-center",
  txtContClasses: "w-full h-2/5 bg-secondary rounded-b-lg",
  titleClasses: "text-white font-bold text-xl px-4 py-2",
  descClasses: "text-white px-4 whitespace-nowrap",
};

//TODO dynamic card function
/*
    
 //* at the first parameter you have to specifi a div element
 //* 2nd & 3rd parameters are for h1,h7 if u want also you can use other element like span,small,p,etc.
 //* 4th You can use an image if you aren't using tailwind for routing a class with you image
 //* 5th If you're using Tailwind css you can use an array,object or wherever you want case the parameter has undefined by default.

    -This the card structure used on the project

    ---- Card structure ----
          <div class="w-48 h-64 shadow-md rounded-lg">
            <div class="w-full h-3/5 rounded-t-lg bg-norway bg-cover"></div>
            <div class="w-full h-2/5 bg-secondary rounded-b-lg">
              <p class="text-white font-bold text-xl px-4 py-2">Norway</p>
              <p class="text-white px-4 whitespace-nowrap">
                Beautiful landscapes
              </p>
            </div>
          </div>

*/
const dinamCard = (
  div = "",
  h1 = "",
  p = "",
  img = "",
  classArray = undefined
) => {
  for (const item of cardItems) {
    const cardContainer = document.createElement(div);
    const imgBg = document.createElement(div);
    const textContainer = document.createElement(div);
    const titleCard = document.createElement(h1);
    const descriptionCard = document.createElement(p);

    cardContainer.classList.add(...classArray.containerClasses.split(" "));
    imgBg.classList.add(...classArray.imgClasses.split(" "), item.img);
    textContainer.classList.add(...classArray.txtContClasses.split(" "));
    titleCard.classList.add(...classArray.titleClasses.split(" "));
    descriptionCard.classList.add(...classArray.descClasses.split(" "));

    titleCard.textContent = item.titleCard;
    descriptionCard.textContent = item.descCard;
    cardContainer.appendChild(imgBg);
    textContainer.appendChild(titleCard);
    textContainer.appendChild(descriptionCard);
    cardContainer.appendChild(textContainer);
    cardSlider.appendChild(cardContainer);
  }
};
dinamCard("div", "h1", "p", null, cardClassesArray);

