// Effekt-Toggle-Funktion
function toggleEffect(effect) {
  const effectElement = document.getElementById(effect);
  if (effectElement.style.display === "none" || effectElement.style.display === "") {
    effectElement.style.display = "block";
    if (effect === 'shooting-stars') {
      createShootingStars(10); // Anzahl der Sternschnuppen
    } else if (effect === 'stars') {
      createStars(100); // Anzahl der funkelnden Sterne
    }
  } else {
    effectElement.style.display = "none";
    if (effect === 'shooting-stars') {
      // Sternschnuppen entfernen, wenn deaktiviert
      effectElement.innerHTML = "";
    }
  }
}

// Sternschnuppen hinzufügen
function createShootingStars(count) {
  const shootingStars = document.getElementById("shooting-stars");
  shootingStars.innerHTML = ""; // Alte Sternschnuppen entfernen
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    shootingStars.appendChild(star);
  }
}

// Funkelnde Sterne erstellen
function createStars(count) {
  const stars = document.getElementById("stars");
  stars.innerHTML = ""; // Alte Sterne entfernen
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    stars.appendChild(star);
  }
}
