// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.

async function getTODOs() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const TODOsContainer = document.createElement("div");
  TODOsContainer.setAttribute("id", "title");

    const first10Todos = todos.slice(0, 10);

    first10Todos.forEach((todos) => {
        const TODOs = document.createElement("div");
        TODOsContainer.setAttribute("id", "title");
    }
}