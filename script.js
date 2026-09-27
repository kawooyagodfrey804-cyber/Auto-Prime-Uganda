const sampleVehicles = [
  {
    id: 1,
    title: "Toyota Probox Wagon",
    type: "Van",
    price: 5400,
    desc: "Low maintenance workhorse, excellent fuel economy for everyday transport.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Toyota Premio NZT260",
    type: "Sedan",
    price: 9800,
    desc: "Smooth executive city drive with exceptional resale value.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Toyota Land Cruiser Prado",
    type: "SUV",
    price: 24000,
    desc: "High ground clearance, 4WD built to handle all off-road terrains.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderHomeVehicles(sampleVehicles);
});

function renderHomeVehicles(data) {
  const carBoard = document.getElementById("carBoard");
  if (!carBoard) return;

  carBoard.innerHTML = "";

  data.forEach((car) => {
    const card = document.createElement("div");
    card.style.cssText = `
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    card.innerHTML = `
      <div style="height: 180px; overflow: hidden;">
        <img src="${car.image}" alt="${car.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div style="padding: 1rem;">
        <span style="color: var(--accent-gold); font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">${car.type}</span>
        <h3 style="margin: 6px 0; font-size: 1.1rem;">${car.title}</h3>
        <p style="color: var(--text-sub); font-size: 0.85rem; margin-bottom: 1rem;">${car.desc}</p>
        <div style="font-size: 1.2rem; font-weight: 800; color: #10b981;">$${car.price.toLocaleString()} USD</div>
      </div>
    `;
    carBoard.appendChild(card);
  });
}