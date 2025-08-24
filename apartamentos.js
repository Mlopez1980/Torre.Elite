
const apartamentos = [
  { id: "1A", disponible: false, area: "82.95 m²", precio: "Reservado", habitaciones: 2, nivel: 1 },
  { id: "1B", disponible: false, area: "81.75 m²", precio: "Reservado", habitaciones: 2, nivel: 1 },
  { id: "1C", disponible: true, area: "45.997 m²", precio: "$117,000", habitaciones: 1, nivel: 1 },
  { id: "1D", disponible: false, area: "82.79 m²", precio: "Reservado", habitaciones: 2, nivel: 1 },
  { id: "1E", disponible: true, area: "82.79 m²", precio: "$189,129", habitaciones: 2, nivel: 1 },
  { id: "1F", disponible: false, area: "44.55 m²", precio: "Reservado", habitaciones: 1, nivel: 1 },

  { id: "2A", disponible: false, area: "82.95 m²", precio: "Reservado", habitaciones: 2, nivel: 2 },
  { id: "2B", disponible: false, area: "81.75 m²", precio: "Reservado", habitaciones: 2, nivel: 2 },
  { id: "2C", disponible: false, area: "45.997 m²", precio: "Reservado", habitaciones: 1, nivel: 2 },
  { id: "2D", disponible: true, area: "82.79 m²", precio: "$193,240.50", habitaciones: 2, nivel: 2 },
  { id: "2E", disponible: true, area: "82.79 m²", precio: "$193,240.50", habitaciones: 2, nivel: 2 },
  { id: "2F", disponible: false, area: "44.55 m²", precio: "Reservado", habitaciones: 1, nivel: 2 },

  { id: "3A", disponible: false, area: "82.95 m²", precio: "Reservado", habitaciones: 2, nivel: 3 },
  { id: "3B", disponible: false, area: "81.75 m²", precio: "Reservado", habitaciones: 2, nivel: 3 },
  { id: "3C", disponible: true, area: "45.997 m²", precio: "$119,340", habitaciones: 1, nivel: 3 },
  { id: "3D", disponible: false, area: "82.79 m²", precio: "Reservado", habitaciones: 2, nivel: 3 },
  { id: "3E", disponible: true, area: "82.79 m²", precio: "$197,352", habitaciones: 2, nivel: 3 },
  { id: "3F", disponible: true, area: "44.55 m²", precio: "$117,000", habitaciones: 1, nivel: 3 },

  { id: "4A", disponible: false, area: "82.95 m²", precio: "Reservado", habitaciones: 2, nivel: 4 },
  { id: "4B", disponible: false, area: "81.75 m²", precio: "Reservado", habitaciones: 2, nivel: 4 },
  { id: "4C", disponible: false, area: "45.997 m²", precio: "Reservado", habitaciones: 1, nivel: 4 },
  { id: "4D", disponible: true, area: "82.79 m²", precio: "$205,575", habitaciones: 2, nivel: 4 },
  { id: "4E", disponible: true, area: "82.79 m²", precio: "$205,575", habitaciones: 2, nivel: 4 },
  { id: "4F", disponible: true, area: "44.55 m²", precio: "$121,680", habitaciones: 1, nivel: 4 },

  { id: "5A", disponible: false, area: "82.95 m²", precio: "Reservado", habitaciones: 2, nivel: 5 },
  { id: "5B", disponible: false, area: "81.75 m²", precio: "Reservado", habitaciones: 2, nivel: 5 },
  { id: "5C", disponible: true, area: "45.997 m²", precio: "$126,360", habitaciones: 1, nivel: 5 },
  { id: "5D", disponible: false, area: "82.79 m²", precio: "Reservado", habitaciones: 2, nivel: 5 },
  { id: "5E", disponible: true, area: "82.79 m²", precio: "$205,575", habitaciones: 2, nivel: 5 },
  { id: "5F", disponible: true, area: "44.55 m²", precio: "$126,360", habitaciones: 1, nivel: 5 },
];

const grid = document.getElementById("grid");
const infoBox = document.getElementById("infoBox");
const infoContent = document.getElementById("infoContent");
const closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = () => infoBox.classList.add("hidden");

apartamentos.forEach(apto => {
  const div = document.createElement("div");
  div.textContent = apto.id;
  div.className = "apartamento " + (apto.disponible ? "disponible" : "reservado");
  div.onclick = () => {
    infoBox.classList.remove("hidden");
    infoContent.innerHTML = `
      <strong>ID:</strong> ${apto.id}<br>
      <strong>Nivel:</strong> ${apto.nivel}<br>
      <strong>Área:</strong> ${apto.area}<br>
      <strong>Precio:</strong> ${apto.precio}<br>
      <strong>Habitaciones:</strong> ${apto.habitaciones}<br>
      <strong>Estado:</strong> ${apto.disponible ? "Disponible" : "Reservado"}
    `;
  };
  grid.appendChild(div);
});

