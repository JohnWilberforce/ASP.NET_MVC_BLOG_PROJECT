// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    navColors();
});
const navColors = () => {
    $(".nav-link").hover(function () {
        $(this).css("background-color", "orange").css("border-radius", "10px").css("font-weight", "bolder");
    }, function () {
        $(this).css("background-color", "white").css("font-weight", "normal");
    });
}