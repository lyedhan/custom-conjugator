const app = document.getElementById("app");
const BASE_URL = new URL(".", import.meta.url);

/**
 * Obtains the pagename from the location hash.
 */
export function router() {

    // Determine route, where default is '#home'
    const route = (location.hash || "#home").slice(1);
    loadPage(route);
}

/**
 * Loads the current page based on the passed name
 */
async function loadPage(name) {
    
    try {

        // Get the path to the page's HTML content, then fetch it
        const htmlURL = new URL(`../html/pages/${name}.html`, BASE_URL);
        const source = await fetch(htmlURL);
        const html = await source.text();

        // And populate the app window
        app.innerHTML = html;


        // Get the path to the page's JavaScript content, then retrieve the associated module
        const jsURL = new URL(`./pages/${name}.js`, BASE_URL);
        const module = await import(jsURL);

        if (module.init)
        { // If there is an init(), run it

            module.init()
        }
        

        console.log( // Log success
            `js/router.js: Loaded page '${name}'.`
        );

    } catch (error) {

        console.log( // Log failure
            `js/router.js: Failed to load page '${name}':`, error
        );
    }
}