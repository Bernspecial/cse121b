/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Michael Bernard Olayemi",
    photo: "images/bernard.jpg",
    
    favouriteFood: [
        "Rice",
        "Beans",
        "Yam",
        "Plantain"
    ],

    hobbies: [
        "Talking",
        "Coding",
        "Listening to music",
        "Researching",
        "Watching movies"
    ],

    placesLived: []
};


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
{
place: "Challenge Ibadan, Oyo State.",
length: "16 years"
},
{
place: "Orlu Local Government, Imo State.",
length: "2 Months"
},
{
place: "Fodasis Ibadan, Oyo State.",
length: "16 years" 
},
{
place: "Eleyele Ibadan, Oyo State.",
length: "Currently"
}
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("img").setAttribute("alt", `Profile picture of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favouriteFood.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = places.place;
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

