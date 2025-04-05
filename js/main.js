// Mise à jour de l'indicateur de progression lors du défilement
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = Math.round((scrollTop / docHeight) * 100);
    document.getElementById("scrollIndicator").textContent = scrollPercent + "%";
});