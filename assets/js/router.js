const app = document.getElementById("app");
const BASE_URL = new URL(".", import.meta.url);

/**
 * Obtains the pagename from the location hash.
 */
export function router() {

    const route = (location.hash || "#home").slice(1);
    loadPage(route);
}

/**
 * Loads the current page based on the passed name
 */
async function loadPage(name) {
    
    const url = new URL(`../html/pages/${name}.html`, BASE_URL);

    // Get the page content matching the page name
    const source = await fetch(url);
    const html = await source.text();

    // And populate the app window
    app.innerHTML = html;

    console.log(
        `js/router.js: Page '${name}' loaded successfully.`
    );
}