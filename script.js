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

// Effekt-Toggle
function toggleEffect(effect) {
  const stars = document.getElementById(effect);
  if (stars.style.display === "none") {
    stars.style.display = "block";
    if (effect === 'shooting-stars') {
      createShootingStars(10); // Anzahl der Sternschnuppen
    }
  } else {
    stars.style.display = "none";
  }
}


// Weitere Effekte könnten hier hinzugefügt werden...
