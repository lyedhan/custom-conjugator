const app = document.getElementById("app");

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
    
    // Get the page content matching the page name
    const source = await fetch(`assets/html/pages/${name}.html`);
    const html = await source.text();

    // And populate the app window
    app.innerHTML = html;

    console.log(
        `js/router.js: Page '${name}' loaded successfully.`
    );
}