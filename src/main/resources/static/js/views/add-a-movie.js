
// anchor for adding movie button: <a id="addMoviePlusBtn" data-link href="/add-a-movie" target="_blank">+</a>
import createView from "../createView.js"

export default function AddAMovieHTMLFunction(props) {
    return `
<div class="container text-center">
    <h1>New Movie</h1>
        <form>
            <label for="newMovieTitle" class="form-label">Title:</label>
            <input class="form-control text-center" list="datalistOptions" id="newMovieTitle" placeholder="Enter new movie title">
            <label for="newMovieDirector" class="form-label">Director:</label>
            <input class="form-control text-center" list="datalistOptions" id="newMovieDirector" placeholder="Enter the Director's name">
            <label for="newMovieRating" class="form-label">Rating:</label>
            <input class="form-control text-center" list="datalistOptions" id="newMovieRating" placeholder="Enter a movie rating 0-5">
            <label for="newMovieID" class="form-label">ID:</label>
            <input class="form-control text-center" list="datalistOptions" id="newMovieID" placeholder="ID">
        </form>
        <button class="form-control btn insert-btn mt-3" id="addMovieBtn">Add Movie</button>
</div>
`;
}

export function AddAMovieJSFunction() {
//     const insertMovieBtn = document.querySelector("#addMovieBtn");
//     insertMovieBtn.addEventListener("click", addMovie)}
//
// function addMovie() {
//     // make sure user entered something non-blank for the dog fact
//     const newMovieTitleInput = document.getElementById(`newMovieTitle`);
//     const newMovieDirectorInput = document.getElementById(`newMovieDirector`);
//     const newMovieRatingInput = document.getElementById(`newMovieRating`);
//     const newMovieTitle = newMovieTitleInput.value.trim();
//     const newMovieDirector = newMovieDirectorInput.value.trim();
//     const newMovieRating = newMovieRatingInput.value.trim();
//     const factInput = document.querySelector("#dogFactText");
//     if(newMovieTitle.length < 1 || newMovieDirector.length < 1 || newMovieRating.length === null) {
//         alert("Entries cannot be blank!")
//         console.log("Entries cannot be blank!");
//         return;
//     }
//     const newMovie = {
//             title: newMovieTitle,
//             director: newMovieDirector,
//             rating: newMovieRating,
//         };
//
//     console.log("Movie is ready to be inserted");
//
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newMovie)
//     }
//     fetch("https://glory-cedar-barge.glitch.me/movies", requestOptions)
//         .then(function(response) {
//             if(!response.ok) {
//                 console.log("add movie error: " + response.status);
//             } else {
//                 console.log("add movie ok");
//                 createView("/about");
//             }
//         });
}
