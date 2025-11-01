// script.js
const container = document.getElementById("container");

// create 36 boxes (6x6 grid)
for (let i = 0; i < 36; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

// move boxes slightly based on mouse position
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  container.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
});
