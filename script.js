

const main = document.querySelector("main");

const favSection = document.createElement("section");
favSection.id = "favorites";

const favTitle = document.createElement("h2");
favTitle.textContent = "Favorites Food List";

const favList = document.createElement("ul");
favList.id = "favorites-list";

const totalWrap = document.createElement("p");
const totalLabel = document.createElement("strong");
totalLabel.textContent = "Total: ";
const totalValue = document.createElement("span");
totalValue.id = "favorites-total";
totalValue.textContent = "$0.00";

totalWrap.appendChild(totalLabel);
totalWrap.appendChild(totalValue);
favSection.appendChild(favTitle);
favSection.appendChild(favList);
favSection.appendChild(totalWrap);
main.appendChild(favSection);


const priceList = [
    10.49, // Lunch Fajita Quesadilla
    9.99,  // Tacos de Pescado
    8.99,  // Crazy Burrito
    6.49,  // Breakfast Sandwich
    3.29,  // Cherry Danish
    4.75,  // Little Italy
    14.95, // Spicy Seafood Champon Ramen
    12.95, // Shrimp Tempura Roll
    13.25  // Bibimbap
];
const cards = document.querySelectorAll(".card");


cards.forEach((card, index) => {
    addFavoriteButton(card, priceList[index]); //set price for each food item
});

let fav_total = 0; 

// function to add a button to a every card separately
function addFavoriteButton(card, price) {

    const dishName = card.querySelector("h4").textContent;
    card.dataset.name = dishName;
    card.dataset.price = price;


    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("fav-btn");
    btn.textContent = "Add to Favorites";

    card.appendChild(btn);

    // add price tag to each card 
    const priceTag = document.createElement("span");
    priceTag.classList.add("price-tag");
    priceTag.textContent = "$" + price.toFixed(2);
    card.appendChild(priceTag);


    btn.addEventListener("click", () => {
        const dishName = card.dataset.name;
        const dishPrice = Number(card.dataset.price);
        const favList = document.getElementById("favorites-list");
        const totalEl = document.getElementById("favorites-total");

        if (btn.textContent === "Add to Favorites") {
            // Add to favorites
            const li = document.createElement("li");
            li.dataset.name = dishName;
            li.textContent = dishName + " : $" + dishPrice.toFixed(2);
            favList.appendChild(li);

            fav_total += dishPrice;
            totalEl.textContent = "$" + fav_total.toFixed(2);

            card.classList.add("favorite");   
            btn.textContent = "Remove Favorite";


        } else {
            // Remove from favorites
            const items = favList.querySelectorAll("li");
            items.forEach(li => {
                if (li.dataset.name === dishName) {
                    favList.removeChild(li);
                }
            });


            fav_total -= dishPrice;
            totalEl.textContent = "$" + fav_total.toFixed(2);

            card.classList.remove("favorite"); 
            btn.textContent = "Add to Favorites";
        }
    });

}




