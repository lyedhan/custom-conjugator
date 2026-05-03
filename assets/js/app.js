import { router } from "./router.js";

window.addEventListener("hashchange", router);
router();

let json = {};
console.log(json);

json["person"] = {};
console.log(json);

json["person"]["type"] = {};
console.log(json);