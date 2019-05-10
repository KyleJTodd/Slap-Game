var health = 100
var hits = 0
var charName = 'Banana'

function slap() {
  health--
  update()
}

function punch() {
  health -= 5
  update()
}

function kick() {
  health -= 10
  update()
}

function update() {
  document.getElementById('health').innerText = health
}

update()