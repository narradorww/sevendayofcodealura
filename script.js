const moviesContainer = document.querySelector('.movies');

const movies = [
    {image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg", 
    title: "Batman",
    rating: 9.4,
    year: 2022,
    description: "After his parents are murdered, billionaire playboy Bruce Wayne is adopted by your butler. He then embarks on a journey to become a batman.", 
    isFavorited: true },
];

window.onload = function() {
    movies.forEach( movie => renderMovie(movie));
}

function renderMovie(movie) {
    const {title, image, rating, year, description, isFavorited} = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    moviesContainer.appendChild(movieElement);

    const movieInformations = document.createElement('div');
    movieInformations.classList.add('movie-informations');

    const movieImageContainer = document.createElement('div');
    movieImageContainer.classList.add('movie-image');
    const movieImage = document.createElement('img');
    movieImage.src = image;
    movieImage.alt = `${title} Poster`;
    movieImageContainer.appendChild(movieImage);
    movieInformations.appendChild(movieImageContainer);

    const movieTextContainer = document.createElement('div');
    movieTextContainer.classList.add('movie-text');
    const movieTitle = document.createElement('h4');
    movieTitle.textContent = `${title} (${year})`;
    movieTextContainer.appendChild(movieTitle);
    movieInformations.appendChild(movieTextContainer);

    const informations = document.createElement('div');
    informations.classList.add('movie-informations');
    movieTextContainer.appendChild(informations);

    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');
    const starImage = document.createElement('img');
    starImage.src = "https://img.icons8.com/color/48/000000/star.png";
    starImage.alt = "Star";
    const movieRate = document.createElement('span');
    movieRate.classList.add('movie-rate');
    movieRate.textContent = rating;
    ratingContainer.appendChild(starImage);
    ratingContainer.appendChild(movieRate);
    informations.appendChild(ratingContainer);

    const favorite = document.createElement('div');
    favorite.classList.add('favorite');
    const favoriteImage = document.createElement('img');
    favoriteImage.src = isFavorited ? 'assets/heart.svg' : 'assets/heart-fill.svg';
    favoriteImage.alt = "Heart";
    favoriteImage.classList.add('favoriteImage');
    const favoriteText = document.createElement('span');
    favoriteText.classList.add('movie-favorite');
    favoriteText.textContent = 'Favoritar';
    favorite.appendChild(favoriteImage);
    favorite.appendChild(favoriteText);
    informations.appendChild(favorite);

const movieDescriptionContainer = document.createElement('div');
movieDescriptionContainer.classList.add('movie-description');
const movieDescription = document.createElement('span');
movieDescription.textContent = description;
movieDescriptionContainer.appendChild(movieDescription);

movieElement.appendChild(movieInformations);
movieElement.appendChild(movieDescriptionContainer);
}





