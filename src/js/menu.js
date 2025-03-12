document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#menu-btn");
    const nav = document.querySelector("#menu");
    const page = document.body;

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";
            const isClosed = !isOpen;

            toggle.setAttribute("aria-expanded", isClosed.toString());
            nav.setAttribute("aria-hidden", isOpen.toString());

            page.classList.toggle("overflow-hidden", isClosed);
        });

        document.addEventListener("click", (event) => {
            if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                nav.setAttribute("aria-hidden", "true");
                toggle.setAttribute("aria-expanded", "false");
                page.classList.remove("overflow-hidden");
            }
        });
    }
});

