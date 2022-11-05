function newGame(adversary, date) {
  return `
  <li>
    <img src="../../assets/icons/icon-brazil.svg">
    <strong>${date}</strong>
    <img src="../../assets/icons/icon-${adversary}.svg">
  </li>
  `
}

function newLevel(levelName, newGame) {
  return `
    <div class="card">
      <h2>${levelName}</h2>
      <ul>
            ${newGame}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = `
${newLevel(
  "Fase de Grupos",
  newGame("serbia", "24/11") +
  newGame("switzeland", "28/11") +
  newGame("cameroon", "02/11")
)}
`
