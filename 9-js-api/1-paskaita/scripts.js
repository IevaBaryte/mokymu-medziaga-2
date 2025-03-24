async function fetchMovie() {
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=dog'
    );

    const data = await response.json();
    const movie = data[0];

    document.getElementById('movie').innerHTML = `
    <img src=`${movie.show.image.medium}`>
    <h2>${movie.show.name} (${movie.show.premiered})</h2>
    <a target='_blank' href='https://www.imdb.com/title/${movie.show.externals.imdb}/'>Link to IMDB</a>
    <p>Genres: ${movie.show.genres}</p>
    <p>${movie.show.summary}</p>
    `;
}

fetchMovie();
