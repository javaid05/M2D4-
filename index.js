let playerNames = [];
let noOfTeams = 0;
let assignPlayerClicks = 0;
let teamNo = 0;
let createTeamClicks = 0;
// select the ID through DOM
let playersNameInput = document.getElementById("players-name-input");
let noOfTeamsInput = document.getElementById("no-of-teams-input");
let displayTeamsArea = document.getElementById("display-teams-area");

// Add the Select Name From text

const addPlayerToArray = function () {
  if (playersNameInput.value === "") {
    alert("You Can't Add An Empty Name");
    return;
  }
  playerNames.push(playersNameInput.value);
  playersNameInput.value = "";
  displayPlayersInWaitingArea();
};
const displayPlayersInWaitingArea = () => {
  let waitingListArea = document.getElementById("waiting-list");
  waitingListArea.innerHTML = "";
  for (let player of playerNames) {
    let waitingListDiv = document.createElement("div");
    waitingListDiv.className =
      "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2";
    waitingListDiv.innerHTML = `<p class="border border-secondary rounded p-1">${player}</p>`;
    waitingListArea.appendChild(waitingListDiv);
  }
};

// CREATING THE TEAMS

const createTeamCheck = function () {
  if (createTeamClicks > 0) {
    displayTeamsArea.innerHTML = "";
  }
};

const createTeams = function () {
  createTeamCheck();
  createTeamClicks++;
  noOfTeams = noOfTeamsInput.value;
  noOfTeamsInput.value = "";
  for (let i = 1; i <= noOfTeams; i++) {
    let displayTeamDiv = document.createElement("div");
    displayTeamDiv.className =
      "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2";
    displayTeamDiv.innerHTML = `
            <ul id="team${i}" class="list-group">
                <li class="list-group-item active">Team ${i}</li>
            </ul>`;
    displayTeamsArea.appendChild(displayTeamDiv);
  }
};

//  button click event listeners

let addPlayerName = document.getElementById("add-player-name");
let createNoOfTeams = document.getElementById("create-no-of-teams");

const triggerClickWithEnter = function (input, btn) {
  input.onkeyup = function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      btn.click();
    }
  };
};

triggerClickWithEnter(playersNameInput, addPlayerName);
triggerClickWithEnter(noOfTeamsInput, createNoOfTeams);

addPlayerName.addEventListener("click", addPlayerToArray);
createNoOfTeams.addEventListener("click", createTeams);
