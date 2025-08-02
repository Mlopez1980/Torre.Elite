
const apartamentos = [
  { id: "1A", disponible: true, area: "75 m²", precio: "$85,000", habitaciones: 2, nivel: 1 },
  { id: "1B", disponible: false, area: "65 m²", precio: "$79,000", habitaciones: 2, nivel: 1 },
  { id: "1C", disponible: true, area: "45 m²", precio: "$60,000", habitaciones: 1, nivel: 1 },
  { id: "1D", disponible: true, area: "75 m²", precio: "$85,000", habitaciones: 2, nivel: 1 },
  { id: "1E", disponible: false, area: "75 m²", precio: "$85,000", habitaciones: 2, nivel: 1 },
  { id: "1F", disponible: true, area: "110 m²", precio: "$130,000", habitaciones: 3, nivel: 1 },

  { id: "2A", disponible: true, area: "75 m²", precio: "$88,000", habitaciones: 2, nivel: 2 },
  { id: "2B", disponible: true, area: "65 m²", precio: "$81,000", habitaciones: 2, nivel: 2 },
  { id: "2C", disponible: false, area: "45 m²", precio: "$62,000", habitaciones: 1, nivel: 2 },
  { id: "2D", disponible: true, area: "75 m²", precio: "$88,000", habitaciones: 2, nivel: 2 },
  { id: "2E", disponible: true, area: "75 m²", precio: "$88,000", habitaciones: 2, nivel: 2 },
  { id: "2F", disponible: false, area: "110 m²", precio: "$135,000", habitaciones: 3, nivel: 2 },

  { id: "3A", disponible: true, area: "75 m²", precio: "$90,000", habitaciones: 2, nivel: 3 },
  { id: "3B", disponible: true, area: "65 m²", precio: "$83,000", habitaciones: 2, nivel: 3 },
  { id: "3C", disponible: false, area: "45 m²", precio: "$64,000", habitaciones: 1, nivel: 3 },
  { id: "3D", disponible: true, area: "75 m²", precio: "$90,000", habitaciones: 2, nivel: 3 },
  { id: "3E", disponible: true, area: "75 m²", precio: "$90,000", habitaciones: 2, nivel: 3 },
  { id: "3F", disponible: true, area: "110 m²", precio: "$140,000", habitaciones: 3, nivel: 3 },

  { id: "4A", disponible: false, area: "75 m²", precio: "$92,000", habitaciones: 2, nivel: 4 },
  { id: "4B", disponible: true, area: "65 m²", precio: "$85,000", habitaciones: 2, nivel: 4 },
  { id: "4C", disponible: true, area: "45 m²", precio: "$66,000", habitaciones: 1, nivel: 4 },
  { id: "4D", disponible: false, area: "75 m²", precio: "$92,000", habitaciones: 2, nivel: 4 },
  { id: "4E", disponible: true, area: "75 m²", precio: "$92,000", habitaciones: 2, nivel: 4 },
  { id: "4F", disponible: true, area: "110 m²", precio: "$145,000", habitaciones: 3, nivel: 4 },

  { id: "5A", disponible: true, area: "120 m²", precio: "$170,000", habitaciones: 3, nivel: 5 },
  { id: "5B", disponible: true, area: "100 m²", precio: "$155,000", habitaciones: 2, nivel: 5 },
  { id: "5C", disponible: true, area: "130 m²", precio: "$180,000", habitaciones: 3, nivel: 5 },
  { id: "5D", disponible: false, area: "140 m²", precio: "$190,000", habitaciones: 3, nivel: 5 },
  { id: "5E", disponible: true, area: "150 m²", precio: "$200,000", habitaciones: 4, nivel: 5 },
  { id: "5F", disponible: false, area: "160 m²", precio: "$220,000", habitaciones: 4, nivel: 5 },
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
