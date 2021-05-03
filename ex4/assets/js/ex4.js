let Note = prompt("Choisissez une note?");

if (Note >= 0 && Note <= 3) {
    alert("Nul");

} else if (Note >= 4 && Note <= 6) {
    alert("Moyen");

} else if (Note > 6 && Note <= 8) {
    alert("Assez bien");

} else if (Note > 8 && Note <= 9) {
    alert("Bien");

} else if (Note == 10) {
    alert("Exellent");
}