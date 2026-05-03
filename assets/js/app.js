import { router } from "./router.js";


// Add a listener so that the page is routed based on hash
window.addEventListener("hashchange", router);
router();