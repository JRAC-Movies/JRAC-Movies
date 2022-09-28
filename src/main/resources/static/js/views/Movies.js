import createView from "../createView.js";

let movies = [];
export default function MoviesHTMLFunction(props) {
    movies = props.movies
    return `
        <header>
            <h1 id="heading" class="text-center">JRAC Entertainment</h1>
        </header>
<!--        <a id="addMoviePlusBtn" data-link href="/add-a-movie" target="_blank">+</a>-->
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addMovieModal">
          +
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="addMovieModal" tabindex="-1" aria-labelledby="addMovieModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container text-center">
                    <h1>New Movie</h1>
                    <form>
                        <label for="newMovieTitle" class="form-label">Title:</label>
                        <input class="form-control text-center" list="datalistOptions" id="newMovieTitle" placeholder="Enter new movie title">
<!--                        <label for="newMovieDirector" class="form-label">Director:</label>-->
<!--                        <input class="form-control text-center" list="datalistOptions" id="newMovieDirector" placeholder="Enter the Director's name">-->
<!--                        <label for="newMovieRating" class="form-label">Rating:</label>-->
<!--                        <input class="form-control text-center" list="datalistOptions" id="newMovieRating" placeholder="Enter a movie rating 0-5">-->
                    </form>
                    <button class="form-control btn insert-btn mt-3" data-bs-dismiss="modal" id="addMovieBtn">Add Movie</button>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="editMovieModal" tabindex="-1" aria-labelledby="editMovieModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container text-center">
                    <h1>Edit Movie</h1>
                    <form>
                        <label for="editMovieTitle" class="form-label">Title:</label>
                        <input class="form-control text-center" list="datalistOptions" id="editMovieTitle">
                    </form>
                    <button class="form-control btn insert-btn mt-3" data-bs-dismiss="modal" id="editMovieSubmitBtn">Save Movie</button>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="moreInfoMovieModal" tabindex="-1" aria-labelledby="moreInfoMovieModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container text-center">
                    <h1>More Info</h1>
                    <form>
                        <p id="moreInfoP"></p>
                        <p id="moreInfoD"></p>
                    </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        <main>
            <div id="movieListContainer" class="row">
            ${makeMovieCards(props.movies)} 
            </div>
        </main>
    `;

    function makeMovieCards(movies) {
        let html = "";
        movies.forEach(function (movie) {
            html += makeMovieCard(movie)
        });
        return html;
    }

    function makeMovieCard(movie) {
        let genre = "";
        for (let i = 0; i < movie.genres.length; i++) {
            genre += movie.genres[i].genre + " ";
        }
        return `
    <div class="card col-3 h-100">
      <img src="${movie.posterUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title movieTitle text-center">${movie.title}</h5>
        <h5 class="card-title movieTitle text-center">${movie.rating}</h5>
        <h5 id="genres" class="card-title movieTitle text-center">${genre}</h5>

        <p class="card-text"></p>
      </div>
      <div id="movieFoot">
        <button type="button" class="btn btn-primary editBtn mb-2" data-id="${movie.id}" data-bs-toggle="modal" data-bs-target="#editMovieModal"><i class="fa fa-pencil"></i></button>
         <button type="button" class="btn btn-primary moreInfoBtn mb-2" data-id="${movie.id}" data-bs-toggle="modal" data-bs-target="#moreInfoMovieModal">More Info</button>
        <button class="delBtn btn mb-2" data-id="${movie.id}"><i class="fa fa-trash"></i></button>
        </div>
      </div>
`
    }
}

export function MoviesJSFunction() {


    let editMovieSubmitBtn = document.getElementById("editMovieSubmitBtn");
    editMovieSubmitBtn.addEventListener("click", updateMovie);

    async function updateMovie() {

        const updateMovieTitleInput = document.getElementById(`editMovieTitle`);
        const updateMovieTitle = updateMovieTitleInput.value.trim();
        let id = this.getAttribute('data-id');
        console.log(id);
        const updateRequestOptions = {
            method: "GET",
        }
        const getMovieDataUpdate = await fetch(`http://localhost:8080/movies/${id}`, updateRequestOptions)
            .then(async function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    return await response.json();
                }
            });
        console.log(getMovieDataUpdate.title);

        const movieUpdate = {
            title: updateMovieTitle,
            director: getMovieDataUpdate.director,
            plot: getMovieDataUpdate.plot,
            posterUrl: getMovieDataUpdate.posterUrl,
            rating: getMovieDataUpdate.rating

        };

        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieUpdate)
        }
        fetch(`http://localhost:8080/movies/${id}`, requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    createView("/movies");
                }
            });
    }


    let editButton = document.getElementsByClassName(`editBtn`);
    let moreInfoBtn = document.getElementsByClassName(`moreInfoBtn`);
    for (let i = 0; i < editButton.length; i++) {
        editButton[i].addEventListener("click", getMovieData)
        moreInfoBtn[i].addEventListener("click", getMovieData)
    }

    async function getMovieData() {
        const requestOptions = {
            method: "GET",
        }
        const id = this.getAttribute(`data-id`)
        let editbtn = document.getElementById(`editMovieSubmitBtn`);
        editbtn.setAttribute("data-id", id)
        const getMovieData = await fetch(`http://localhost:8080/movies/${id}`, requestOptions)
            .then(async function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    return await response.json();
                }
            });
        let moreInfoP = document.getElementById(`moreInfoP`);
        moreInfoP.innerText = getMovieData.plot;
        let moreInfoD = document.getElementById('moreInfoD');
        moreInfoD.innerText = "Director: " + getMovieData.director;

        let titleValue = document.getElementById(`editMovieTitle`);
        titleValue.setAttribute("value", `${getMovieData.title}`)
        console.log(`Title: ${getMovieData.title}`);
        console.log(`Overview: ${getMovieData.plot}`);
    }

    // let moreInfoBtn = document.getElementsByClassName(`moreInfoBtn`);
    // for (let i = 0; i < moreInfoBtn.length; i++) {
    //     moreInfoBtn[i].addEventListener("click", insertInfo);}
    //
    // async function insertInfo () {
    //     const overviewRequestOptions = {
    //         method: "GET",
    //     }
    //     const id = this.getAttribute(`data-id`)
    //     let moreInfoBtn = document.getElementById(``);
    //     editbtn.setAttribute("data-id", id)
    //     const getMovieData = await fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, overviewRequestOptions)
    //         .then(async function (response) {
    //             if (!response.ok) {
    //                 console.log("add movie error: " + response.status);
    //             } else {
    //                 console.log("add movie ok");
    //                 return await response.json();
    //             }
    //         });


    let delButton = document.getElementsByClassName('delBtn');
    for (let i = 0; i < delButton.length; i++) {
        delButton[i].addEventListener("click", deleteMovie)


        function deleteMovie() {
            const requestOptions = {
                method: "DELETE",
            }
            const id = this.getAttribute(`data-id`)
            fetch(`http://localhost:8080/movies/${id}`, requestOptions)
                .then(function (response) {
                    if (!response.ok) {
                        console.log("add movie error: " + response.status);
                    } else {
                        console.log("add movie ok");
                        createView("/movies");
                    }
                });
        }
    }

    const insertMovieBtn = document.querySelector("#addMovieBtn");
    insertMovieBtn.addEventListener("click", addMovie)
}

async function addMovie() {
    // This line breaks the code for some reasons.
    const newMovieTitleInput = document.getElementById(`newMovieTitle`);
    const newMovieTitle = newMovieTitleInput.value.trim();
    if (newMovieTitle.length < 1) {
        alert("Entries cannot be blank!")
        console.log("Entries cannot be blank!");
        return;
    }

    let currentMovies = [];
    console.log(movies[0].title);
    console.log(newMovieTitle);
    console.log(movies);
    for (let i = 0; i < movies.length; i++) {
        currentMovies.push(movies[i].title);
    }
    if (!currentMovies.includes(newMovieTitle)) {

        const RequestOptions = {
            method: "GET"
        }
// Get movie id for each movie from initial API call and push that id into a separate api call for the director and cast.
// Getting movie ID ok, now need to make multiple API calls to grab cast/crew information using the movie ID from a different API endpoint.
        const getMoviePoster = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${THE_MOVIE_DB_API_KEY}&query=${newMovieTitle}`, RequestOptions)
            .then(async function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    return await response.json();
                }
            });
        const getMovieDirRat = await fetch(`http://localhost:8080/moviesDB`, RequestOptions)
            .then(async function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    return await response.json();
                }
            });
        const getRequestOptions = {
            method: "GET"
        }

        let newMovieRating = "UNRATED";
        let newMovieDirector = "Director";
        for (let i = 0; i < getMovieDirRat.length; i++) {
            if (getMovieDirRat[i].title.includes(newMovieTitle)) {
                newMovieDirector = getMovieDirRat[i].director;
                newMovieRating = getMovieDirRat[i].rating;
                break;
            }
        }
        let newMoviePoster;
        let newMoviePlot;
        console.log(getMoviePoster.results[0]);
        if (getMoviePoster.results[0] === undefined) {
            newMoviePlot = "No plot available."
            newMoviePoster = "https://media.istockphoto.com/vectors/coming-soon-comic-style-title-on-red-circle-background-old-cinema-vector-id1175562600?k=20&m=1175562600&s=612x612&w=0&h=vyaf0LMtSwNGrU0fxRktUesVv5xYbc4eHZ99Zw39QjA="
        } else {
            newMoviePlot = getMoviePoster.results[0].overview;
            newMoviePoster = `https://image.tmdb.org/t/p/original/${getMoviePoster.results[0].poster_path}`;
        }
        const newMovie = {
            title: newMovieTitle,
            director: newMovieDirector,
            plot: newMoviePlot,
            posterUrl: newMoviePoster,
            rating: newMovieRating
        };


        console.log("Movie is ready to be inserted");

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        }
        fetch("http://localhost:8080/movies/create", requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    console.log("add movie error: " + response.status);
                } else {
                    console.log("add movie ok");
                    createView("/");
                }
            });
    } else {
        alert("Already exists!");
    }
}


// poster path
// https://image.tmdb.org/t/p/original/[poster_path]



