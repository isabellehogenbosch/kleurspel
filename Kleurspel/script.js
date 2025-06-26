// Knoppen

const knopGeel = document.getElementById("knopGeel");
const knopRoze = document.getElementById("knopRoze");
const knopBlauw = document.getElementById("knopBlauw");
const knopGroen = document.getElementById("knopGroen");
const knopRood = document.getElementById("knopRood");

// Vormen

const rondVorm = document.getElementById("rondVorm");
const parallelogramVorm = document.getElementById("parallelogramVorm");
const vierkantVorm = document.getElementById("vierkantVorm");

// Geluid

const klikGeluid = new Audio("inkleurgeluid.m4a");

let gekozenKleur = "";

let kleuren = {
  "rood": "#E52B2B",
  "blauw": "#2552BC",
  "groen": "#00BC41",
  "geel": "#DBCA17",
  "roze": "#E1296A"
};

let kleurNamen = {
  "rood": "Rood",
  "blauw": "Blauw",
  "groen": "Groen",
  "geel": "Geel",
  "roze": "Roze"
};

function kiesKleur(kleur) {
  gekozenKleur = kleuren[kleur];
  document.getElementById("kleurGekozen").textContent = kleurNamen[kleur];
  klikGeluid.currentTime = 0;
  klikGeluid.play();
}

function kleurVorm(vormId) {
  if (!gekozenKleur) return;
  document.getElementById(vormId).style.backgroundColor = gekozenKleur;
  klikGeluid.currentTime = 0;
  klikGeluid.play();
}

knopGeel.addEventListener("click", () => kiesKleur("geel"));
knopRoze.addEventListener("click", () => kiesKleur("roze"));
knopBlauw.addEventListener("click", () => kiesKleur("blauw"));
knopGroen.addEventListener("click", () => kiesKleur("groen"));
knopRood.addEventListener("click", () => kiesKleur("rood"));

rondVorm.addEventListener("click", () => kleurVorm("rondVorm"));
parallelogramVorm.addEventListener("click", () => kleurVorm("parallelogramVorm"));
vierkantVorm.addEventListener("click", () => kleurVorm("vierkantVorm"));