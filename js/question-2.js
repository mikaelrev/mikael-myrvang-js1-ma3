// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=41fa2d484a764da984847c42f8ad51c9";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try{
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if(i === 8) {
                break;
            }
            
            resultsContainer.innerHTML += `<div class="result">Name: ${facts[i].name}, Rating: ${facts[i].rating}, Number of tags: ${facts.length}</div>`
        }
    } catch(error) {
        console.log("An error occurred");
    } 
}

getGames();