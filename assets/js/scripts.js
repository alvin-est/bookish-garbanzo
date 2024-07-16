// Set variables
const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");
const selectedCity = document.getElementById("selectedCity");

let results = [];

requestURL = "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=464dbc312b1f6a93a0f522e7f743a5e7";

// Add onClick event listener
// button.addEventListener('click', function(event) {
//     event.preventDefault(); // Stop browser refresh

//     // Run code
//     console.log(input.value);
//     alert("Hello World!");

//     // Fetch from API
//     fetch(requestURL)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             selectedCity.textContent = data[0].name;
//         });

//     console.log(results);
// })

// Add event listener
button.addEventListener('click', getResponse);
// Using async/await for better workability
// Credits: https://rapidapi.com/guides/fetch-api-async-await
async function getResponse(event) {
    event.preventDefault();
    alert("Hello World!");

    const response = await fetch(requestURL); // Grab response
    if(!response.ok) { // works as a catch()
        throw new Error(`Error! Status code: ${response.status}`);
    }

    const data = await response.json(); // grab data
    results = data; // store into results once completely retrieved

    run(); // let the magic happen!
}

// Parse and print retrieved data
function run() {
    console.log(results[0]);
    const result = results[0];
    selectedCity.textContent = `${result.name}`;
}
