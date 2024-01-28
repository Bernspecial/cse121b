/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("div");
let tempLists = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok)
    {
        const url = await response.json();
        tempLists = url;
        displayTemples(url);
    }
    else {
        console.log(`HTTP error! status${response.status}`)
    }
    // if (response.ok)
    // {
    //     tempLists = url;
    // }
    // else
    // {
    //     console.log(`HTTP error! status${response.status}`)
    // }
}


/* reset Function */
const reset = () => {
    const articles = templesElement.querySelectorAll("article");
    articles.forEach(article => article.remove());
}

// document.querySelector("").addEventListener("click", reset);

/* filterTemples Function */
const  filterTemples = function(temples)
{
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter)
    {
        case "utah":
            displayTemples(temples.filter(temples => temples.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temples => !temples.location.includes("Utah")));
            break;
        case "older":
            const olderDate = new Date(1950, 0, 1)
            displayTemples(temples.filter(temples => new Date(temples.dedicated) < olderDate));
            break;
        case "all":
            default:
            displayTemples(temples);
            break;
    }

}


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(tempLists)});

// getTemples();
