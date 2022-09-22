// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";
// import createView from "../createView.js";
//
//
// export default function MoviesHTMLFunction(props) {
//     return `
//         <header>
//             <h1 class="text-center">Movies</h1>
//         </header>
// <!--        <a id="addMoviePlusBtn" data-link href="/add-a-movie" target="_blank">+</a>-->
//         <!-- Button trigger modal -->
//         <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addMovieModal">
//           +
//         </button>
//
//         <!-- Modal -->
//         <div class="modal fade" id="addMovieModal" tabindex="-1" aria-labelledby="addMovieModalLabel" aria-hidden="true">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
//                 <div class="container text-center">
//                     <h1>New Movie</h1>
//                     <form>
//                         <label for="newMovieTitle" class="form-label">Title:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="newMovieTitle" placeholder="Enter new movie title">
//                         <label for="newMovieDirector" class="form-label">Director:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="newMovieDirector" placeholder="Enter the Director's name">
//                         <label for="newMovieRating" class="form-label">Rating:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="newMovieRating" placeholder="Enter a movie rating 0-5">
//                     </form>
//                     <button class="form-control btn insert-btn mt-3" data-bs-dismiss="modal" id="addMovieBtn">Add Movie</button>
//                 </div>
//               </div>
//               <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal fade" id="editMovieModal" tabindex="-1" aria-labelledby="editMovieModalLabel" aria-hidden="true">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
//                 <div class="container text-center">
//                     <h1>Edit Movie</h1>
//                     <form>
//                         <label for="editMovieTitle" class="form-label">Title:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="editMovieTitle">
//                         <label for="editMovieDirector" class="form-label">Director:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="editMovieDirector">
//                         <label for="editMovieRating" class="form-label">Rating:</label>
//                         <input class="form-control text-center" list="datalistOptions" id="editMovieRating">
//                     </form>
//                     <button class="form-control btn insert-btn mt-3" data-bs-dismiss="modal" id="editMovieSubmitBtn">Save Movie</button>
//                 </div>
//               </div>
//               <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal fade" id="moreInfoMovieModal" tabindex="-1" aria-labelledby="moreInfoMovieModalLabel" aria-hidden="true">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
//                 <div class="container text-center">
//                     <h1>More Info</h1>
//                     <form>
//                         <p id="moreInfoP"></p>
//                     </form>
//                 </div>
//               </div>
//               <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         <main>
//             <div id="movieListContainer" class="row">
//             ${makeMovieCards(props.movies)}
//             </div>
//         </main>
//     `;
//
//     function makeMovieCards(movies) {
//         let html = "";
//         movies.forEach(function (movie) {
//             html += makeMovieCard(movie)
//         });
//         return html;
//     }
//
//     function makeMovieCard(movie) {
//         return `
//     <div class="card col-3 h-100">
//       <img src="${movie.src}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title movieTitle text-center">${movie.title}</h5>
//         <p class="card-text"></p>
//       </div>
//       <div id="movieFoot">
//         <button type="button" class="btn btn-primary editBtn mb-2" data-id="${movie.id}" data-bs-toggle="modal" data-bs-target="#editMovieModal"><i class="fa fa-pencil"></i></button>
//          <button type="button" class="btn btn-primary moreInfoBtn mb-2" data-id="${movie.id}" data-bs-toggle="modal" data-bs-target="#moreInfoMovieModal">More Info</button>
//         <button class="delBtn btn mb-2" data-id="${movie.id}"><i class="fa fa-trash"></i></button>
//         </div>
//       </div>
// `
//     }
// }
//
//
// export function MoviesJSFunction() {
//
//     let editMovieSubmitBtn = document.getElementById("editMovieSubmitBtn");
//     editMovieSubmitBtn.addEventListener("click", updateMovie);
//
//     function updateMovie () {
//
//         const updateMovieTitleInput = document.getElementById(`editMovieTitle`);
//         const updateMovieDirectorInput = document.getElementById(`editMovieDirector`);
//         const updateMovieRatingInput = document.getElementById(`editMovieRating`);
//         const updateMovieTitle = updateMovieTitleInput.value.trim();
//         const updateMovieDirector = updateMovieDirectorInput.value.trim();
//         const updateMovieRating = updateMovieRatingInput.value.trim();
//         let id = this.getAttribute('data-id');
//         console.log(id);
//
//         const movieUpdate = {
//             title: updateMovieTitle,
//             director: updateMovieDirector,
//             rating: updateMovieRating,
//         };
//
//         const requestOptions = {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(movieUpdate)
//         }
//         fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, requestOptions)
//             .then(function(response) {
//                 if(!response.ok) {
//                     console.log("add movie error: " + response.status);
//                 } else {
//                     console.log("add movie ok");
//                     createView("/about");
//                 }
//             });
//     }
//
//
//     let editButton = document.getElementsByClassName(`editBtn`);
//     let moreInfoBtn = document.getElementsByClassName(`moreInfoBtn`);
//     for (let i = 0; i < editButton.length; i++) {
//         editButton[i].addEventListener("click", getMovieData)
//         moreInfoBtn[i].addEventListener("click", getMovieData)
//     }
//     async function getMovieData () {
//         const requestOptions = {
//             method: "GET",
//         }
//         const id = this.getAttribute(`data-id`)
//         let editbtn = document.getElementById(`editMovieSubmitBtn`);
//         editbtn.setAttribute("data-id", id)
//         const getMovieData = await fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, requestOptions)
//             .then(async function (response) {
//                 if (!response.ok) {
//                     console.log("add movie error: " + response.status);
//                 } else {
//                     console.log("add movie ok");
//                     return await response.json();
//                 }
//             });
//         let moreInfoP = document.getElementById(`moreInfoP`);
//         moreInfoP.innerText = getMovieData.overview;
//         let titleValue = document.getElementById(`editMovieTitle`);
//         titleValue.setAttribute("value", `${getMovieData.title}`)
//         let directorValue = document.getElementById(`editMovieDirector`);
//         directorValue.setAttribute("value", `${getMovieData.director}`)
//         let ratingValue = document.getElementById(`editMovieRating`);
//         ratingValue.setAttribute("value", `${getMovieData.rating}`)
//         console.log(getMovieData.title);
//         console.log(getMovieData.director);
//         console.log(getMovieData.rating);
//         console.log(getMovieData.overview);
//     }
//
//     // let moreInfoBtn = document.getElementsByClassName(`moreInfoBtn`);
//     // for (let i = 0; i < moreInfoBtn.length; i++) {
//     //     moreInfoBtn[i].addEventListener("click", insertInfo);}
//     //
//     // async function insertInfo () {
//     //     const overviewRequestOptions = {
//     //         method: "GET",
//     //     }
//     //     const id = this.getAttribute(`data-id`)
//     //     let moreInfoBtn = document.getElementById(``);
//     //     editbtn.setAttribute("data-id", id)
//     //     const getMovieData = await fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, overviewRequestOptions)
//     //         .then(async function (response) {
//     //             if (!response.ok) {
//     //                 console.log("add movie error: " + response.status);
//     //             } else {
//     //                 console.log("add movie ok");
//     //                 return await response.json();
//     //             }
//     //         });
//
//
//
//
//
//     let delButton = document.getElementsByClassName('delBtn');
//     for (let i = 0; i < delButton.length; i++) {
//         delButton[i].addEventListener("click", deleteMovie)
//
//
//         function deleteMovie() {
//             const requestOptions = {
//                 method: "DELETE",
//             }
//             const id = this.getAttribute(`data-id`)
//             fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, requestOptions)
//                 .then(function (response) {
//                     if (!response.ok) {
//                         console.log("add movie error: " + response.status);
//                     } else {
//                         console.log("add movie ok");
//                         createView("/about");
//                     }
//                 });
//         }
//     }
//
//     const insertMovieBtn = document.querySelector("#addMovieBtn");
//     insertMovieBtn.addEventListener("click", addMovie)}
//
// async function addMovie() {
//     const newMovieTitleInput = document.getElementById(`newMovieTitle`);
//     const newMovieDirectorInput = document.getElementById(`newMovieDirector`);
//     const newMovieRatingInput = document.getElementById(`newMovieRating`);
//     const newMovieTitle = newMovieTitleInput.value.trim();
//     const newMovieDirector = newMovieDirectorInput.value.trim();
//     const newMovieRating = newMovieRatingInput.value.trim();
//     if(newMovieTitle.length < 1 || newMovieDirector.length < 1 || newMovieRating.length === null) {
//         alert("Entries cannot be blank!")
//         console.log("Entries cannot be blank!");
//         return;
//     }
//
//         const posterRequestOptions = {
//             method: "GET",
//         }
//
//         const getMoviePoster = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6ce0041b387bdc16ed1d50bd0aed4f0a&query=${newMovieTitle}`, posterRequestOptions)
//             .then(async function (response) {
//                 if (!response.ok) {
//                     console.log("add movie error: " + response.status);
//                 } else {
//                     console.log("add movie ok");
//                     return await response.json();
//                 }
//             });
//     console.log(getMoviePoster.results[0].poster_path);
//     console.log(getMoviePoster.results[0].overview);
//     let newMoviePoster = `https://image.tmdb.org/t/p/original/${getMoviePoster.results[0].poster_path}`;
//     let newMovieOverview = getMoviePoster.results[0].overview;
//     const newMovie = {
//         title: newMovieTitle,
//         director: newMovieDirector,
//         rating: newMovieRating,
//         src: newMoviePoster,
//         overview: newMovieOverview
//     };
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
// }
//
//
//
//
// // poster path
// // https://image.tmdb.org/t/p/original/[poster_path]
//
//
//
