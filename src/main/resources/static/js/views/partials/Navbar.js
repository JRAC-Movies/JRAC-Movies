import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav>
            <a class="jalopy-nav" href="/" data-link>Movies</a>
</nav>`;

    // everyone can see about


    // only logged in can see user info and logout
    return html;
}