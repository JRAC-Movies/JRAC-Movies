import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav>
            <a class="jalopy-nav" href="/movies" data-link>Movies</a>`;

    // everyone can see about
    html = html + `<a class="jalopy-nav hideNav" href="/about" data-link>Movies</a>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html = html + `<a class="jalopy-nav" href="/users" data-link>User Info</a>
            <a href="/logout" data-link>Logout</a>`;
    } else {
        // if not logged in, can see login and register
        html = html + `<a class="jalopy-nav hideNav" href="/login" data-link>Login</a>
        <a class="jalopy-nav hideNav" href="/register" data-link>Register</a>`;
    }

    html = html + `</nav>`;
    return html;
}