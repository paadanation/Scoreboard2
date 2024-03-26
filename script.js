let homeScore = 0;
let awayScore = 0;

function incrementHome(points) {
  homeScore += points;
  updateScore('homeScore', homeScore);
}

function resetthecount(points) {
  homeScore = points
  updateScore('homeScore', homeScore);
}


function incrementAway(points) {
  awayScore += points;
  updateScore('awayScore', awayScore);
}

function resetthecount2(points) {
  awayScore = points
  updateScore('awayScore', awayScore);
}

function updateScore(elementId, score) {
  document.getElementById(elementId).textContent = score;
}