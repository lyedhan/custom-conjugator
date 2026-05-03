/**
 * Sets up all necessary listeners and features for the page.
 */
export function init() {
    const add_btn = document.getElementById("btn_add_class");
    const container = document.getElementById("features__class_container");

    add_btn.addEventListener("click", () => {
        const item = document.createElement("div");
        item.textContent = "this is a test."

        container.appendChild(item);
    });
}