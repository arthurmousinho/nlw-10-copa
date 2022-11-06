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

  ${creatCard("20/11", "domingo", creatGame("qatar", "13:00", "ecuador"))}

  ${creatCard(
    "21/11",
    "segunda",
    creatGame("england", "10:00", "iran") +
      creatGame("usa", "13:00", "wales") +
      creatGame("senegal", "16:00", "netherlands")
  )} 

  ${creatCard(
    "22/11",
    "terça",
    creatGame("argentina", "07:00", "saudiArabia") +
      creatGame("denmark", "10:00", "tunisia") +
      creatGame("mexico", "13:00", "poland") +
      creatGame("france", "16:00", "australia")
  )} 

  ${creatCard(
    "23/11",
    "quarta",
    creatGame("marocco", "07:00", "croatia") +
    creatGame("germany", "10:00", "japan") +
      creatGame("spain", "13:00", "costaRica") +
      creatGame("belgium", "16:00", "canada")
  )} 

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