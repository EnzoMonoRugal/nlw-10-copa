function creatgame(player1, hour, player2) {
  return `
  <li>
                  <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
                  <strong>${hour}</strong>
                  <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
                  </li>
  `
}

let delay = -0.4
function creatcard(date, day, games) {
  delay = delay + 0.4
  return ` 
    <div class="card" style="animation-delay: ${delay}s">
              <h2>${date} <span>${day}</span></h2>
              <ul>
                  ${games}
              </ul>
              </div>
    `
}

document.querySelector("#cards").innerHTML = `
        ${creatcard(
          "24/11",
          "quinta",
          creatgame("switzerland", "07:00", "cameroon") +
            creatgame("portugal", "13:00", "ghana") +
            creatgame("brazil", "16:00", "serbia")
        )}
        ${creatcard(
          "28/11",
          "segunda",
          creatgame("ghana", "10:00", "south korea") +
            creatgame("brazil", "13:00", "switzerland") +
            creatgame("portugal", "16:00", "uruguay")
        )}
              ${creatcard(
                "02/12",
                "sexta",
                creatgame("brazil", "16:00", "cameroon")
              )}
  `
