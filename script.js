function searchSuperhero() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const apiUrl = 'https://akabab.github.io/superhero-api/api/all.json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const superhero = data.find(hero => hero.name.toLowerCase() === searchInput);
            if (superhero) {
                // Redirect to superhero details page with query parameter
                window.location.href = `superhero-details.html?id=${superhero.id}`;
            } else {
                // Display error message if superhero not found
                alert('Superhero not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching superhero data. Please try again later.');
        });

        
}
