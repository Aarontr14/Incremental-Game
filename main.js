var gameData = {
  starPower: 0,
  powerPerClick: 1,
  powerPerClickCost: 10,
};

function gainPower() {
  gameData.starPower += gameData.powerPerClick;
  document.getElementById("starPower").innerHTML =
    gameData.starPower + " Star Power";
}

function buyPowerPerClick() {
    if (gameData.starPower >= gameData.powerPerClickCost) {
        gameData.starPower -= gameData.powerPerClickCost
        gameData.powerPerClick += 1
        gameData.powerPerClickCost *=2
        document.getElementById("starPower").innerHTML = gameData.starPower + " Star Power"
        document.getElementById("perClickUpgrade").innerHTML = "Increase Heat :O (Currently Level " + gameData.powerPerClick + ") Cost: " + gameData.powerPerClickCost; " Star Power"
    }
}

var mainGameLoop = window.setInterval(function() {
    gainPower()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("starPowerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("starPowerSave"))
if (savegame !== null) {
    gameData = savegame
}
