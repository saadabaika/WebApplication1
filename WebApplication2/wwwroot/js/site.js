// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// site.js
// site.js

// Ajoutez des interactions JS supplémentaires pour la navbar
document.addEventListener("DOMContentLoaded", function () {
    // Exemple : Changez la couleur de texte au clic sur le bouton de bascule
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
        const navbarBrand = document.querySelector(".navbar-brand");
        navbarBrand.style.color = "#e74c3c"; // Nouvelle couleur de texte au clic
    });

    // Ajoutez d'autres interactions JS selon vos besoins
});
