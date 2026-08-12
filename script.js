/* =========================================================
   NATAN GAUTHIER — SCRIPT
========================================================= */

const menuButton = document.getElementById("menuButton");
const mainMenu = document.getElementById("mainMenu");


/* =========================================================
   MENU MOBILE
========================================================= */

if (menuButton && mainMenu) {

    function closeMenu() {

        mainMenu.classList.remove("mobile-open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

        menuButton.textContent = "☰";
    }


    function openMenu() {

        mainMenu.classList.add("mobile-open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Fermer le menu"
        );

        menuButton.textContent = "×";
    }


    menuButton.addEventListener("click", function () {

        const isOpen =
            mainMenu.classList.contains("mobile-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    /* Fermer après clic sur un lien */

    const menuLinks =
        mainMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            closeMenu();

        });

    });


    /* Fermer si on agrandit la fenêtre */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    });

}


/* =========================================================
   ANIMATION D'APPARITION AU SCROLL
========================================================= */

const animatedElements = document.querySelectorAll(
    ".about-content, .about-image, .service-row, .step, .trust-item, .contact-heading, .contact-form"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, observerInstance) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach(function (element) {

        element.classList.add("scroll-hidden");

        observer.observe(element);

    });

}


/* =========================================================
   FERMER LE MENU AVEC ESC
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (
            mainMenu &&
            mainMenu.classList.contains("mobile-open")
        ) {

            mainMenu.classList.remove("mobile-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.textContent = "☰";

        }

    }

});