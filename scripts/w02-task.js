/* W02-Task - Profile Home Page */
let myFullName = "Michael Bernard Olayemi";
let currentYear = "2024";
let profilePicture = "images/bernard.jpg";

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

nameElement.innerHTML = `<strong>${myFullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${myFullName}`);

const favouriteFood = ["Beans", "Boiled Plaintain & Fried Egg", "Jollof Rice" ]
foodElement.innerHTML = favouriteFood

const newFavouriteFood = ["Pounded Yam"];
favouriteFood.push(newFavouriteFood);
foodElement.innerHTML += `<br>${favouriteFood}`;
favouriteFood.shift();
foodElement.innerHTML += `<br>${favouriteFood}`;
favouriteFood.pop();
foodElement.innerHTML += `<br>${favouriteFood}`;


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */




/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






