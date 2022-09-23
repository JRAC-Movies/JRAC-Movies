import MoviesHTMLFunction, {MoviesJSFunction} from "./views/Movies.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js";
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import AddAMovieHTMLFunction, {AddAMovieJSFunction} from "./views/add-a-movie.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/movies': {
            returnView: MoviesHTMLFunction,
            state: {movies: {
                    url: "http://localhost:8080/movies",
                    headers: {
                        'Accept': 'application/json',
                    }
                }},
            uri: '/movies',
            title: 'Movies',
            viewEvent: MoviesJSFunction
        },
        '/': {
            returnView: MoviesHTMLFunction,
            state: {movies: {
                    url: "http://localhost:8080/movies",
                    headers: {
                        'Accept': 'application/json',
                    }
                }},
            uri: '/movies',
            title: 'Movies',
            viewEvent: MoviesJSFunction
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/logi': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        // '/about': {
        //     returnView: MoviesHTMLFunction,
        //     state: {movies: {
        //             url: "https://glory-cedar-barge.glitch.me/movies",
        //             headers: {
        //                 'Accept': 'application/json',
        //             }
        //         }},
        //     uri: '/about',
        //     title: 'About',
        //     viewEvent: MoviesJSFunction
        // },
        '/add-a-movie': {
            returnView: AddAMovieHTMLFunction,
            state:{},
            uri: '/add-a-movie',
            title: 'Add A Movie!',
            viewEvent: AddAMovieJSFunction
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}