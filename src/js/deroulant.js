document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector("#dropdown-btn");
    const dropdownMenu = document.querySelector("#dropdown-menu");
    const dropdownArrow = document.querySelector("#dropdown-arrow");

    if (dropdownBtn && dropdownMenu && dropdownArrow) {
        dropdownBtn.addEventListener("click", () => {
            const isOpen = dropdownMenu.classList.toggle("hidden");
            dropdownArrow.classList.toggle("rotate-180", !isOpen);
        });

        document.addEventListener("click", (event) => {
            if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
                dropdownArrow.classList.remove("rotate-180");
            }
        });
    }
});