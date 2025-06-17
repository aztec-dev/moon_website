async function getData() {
    const file = "../data/data.json"
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json.moon_facts;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

function updateText(facts) {
    let currentFact = document.getElementById("fact");
    const button = document.getElementById("factButton");

    button.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        currentFact.textContent = facts[randomIndex];
    })
    console.log(currentFact);
}

document.addEventListener("DOMContentLoaded", async function () {
    const facts = await getData();
    updateText(facts);
});