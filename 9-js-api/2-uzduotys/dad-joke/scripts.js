

async function fetchJokes() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {Accept: 'application/json'}
        });

        return response.json();
    } catch (e) {
        throw e;
    }    
}

function onGetJokeClick() {     
    fetchJokes()
    .then(data => document.getElementById('jokeValue').innerHTML = data.joke)
    .catch(error => console.log(error));
}