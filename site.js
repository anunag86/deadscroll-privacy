document.addEventListener("DOMContentLoaded", () => {
    const navGroups = document.querySelectorAll(".nav-group");

    if (!navGroups.length) {
        return;
    }

    document.addEventListener("click", (event) => {
        navGroups.forEach((group) => {
            if (!group.contains(event.target)) {
                group.removeAttribute("open");
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navGroups.forEach((group) => group.removeAttribute("open"));
        }
    });

    navGroups.forEach((group) => {
        const summary = group.querySelector("summary");
        const links = group.querySelectorAll(".nav-submenu a");

        if (summary) {
            summary.addEventListener("keydown", (event) => {
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    group.setAttribute("open", "");
                    links[0]?.focus();
                }
            });
        }

        links.forEach((link) => {
            link.addEventListener("click", () => {
                group.removeAttribute("open");
            });
        });
    });
});
