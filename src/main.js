function creatGame(country1, hour, country2) {
  return `
    <li>
      <a href="pages/${country1}/${country1}.html"><img src="assets/icons/icon-${country1}.svg" alt="${country1}'s flag"></a>
      <strong>${hour}</strong>
      <img src="assets/icons/icon-${country2}.svg" alt="${country2}'s flag">
    </li>
  `
}


function creatCard(date, day, games) {
  return `
  <div class="card"">
    <h2>
      ${date} <span>${day}</span>
    </h2>

    <ul>
        ${games}
    </ul>
  </div>
  `
}



document.querySelector("#cards").innerHTML = `
    
  ${creatCard(
    "24/11",
    "quinta",
    creatGame("switzeland", "07:00", "cameroon") +
      creatGame("uruguay", "10:00", "southKorea") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
  )} 

  ${creatCard(
    "25/11",
    "sexta",
    creatGame("wales", "07:00", "iran") +
      creatGame("netherlands", "10:00", "ecuador") +
      creatGame("qatar", "13:00", "senegal") +
      creatGame("england", "16:00", "usa")
  )} 
    
`