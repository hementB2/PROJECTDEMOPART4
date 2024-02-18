function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const superheroId = urlParams.get('id');
    const apiUrl = `https://akabab.github.io/superhero-api/api/id/${superheroId}.json`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displaySuperheroDetails(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching superhero details. Please try again later.');
        });

    function displaySuperheroDetails(superhero) {
        const superheroDetailsContainer = document.getElementById('superheroDetails');
        superheroDetailsContainer.innerHTML = `
            <h2>${superhero.name}</h2>
            <p>Intelligence: ${superhero.powerstats.intelligence}</p>
            <p>Strength: ${superhero.powerstats.strength}</p>
            <p>Speed: ${superhero.powerstats.speed}</p>
            <p>Durability: ${superhero.powerstats.durability}
            <p>Power: ${superhero.powerstats.power}
            <p>Combat: ${superhero.powerstats.combat}
            <!-- Add more details as needed -->
        `;
        
    }
     // Add event listener for Go Back button (inside DOMContentLoaded event)
     const goBackButton = document.getElementById('go-back-button');
     if (goBackButton) {
         goBackButton.addEventListener('click', goBack);
     }
});
