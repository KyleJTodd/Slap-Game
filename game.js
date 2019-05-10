let target = {
  name: 'Banana',
  health: 100,
  hits: 0
}

let items = {
  peel: { name: 'Peel', modifier: 2, description: 'Exposed' },
  freeze: { name: 'Freeze', modifier: 4, description: 'Tough Banana' },
  blender: { name: 'Blender', 'modifier 20', description: 'WHHIIRR, WHHIIIRR' }
}

function slap() {
  target.health--
  target.hits++
  update()
}

function punch() {
  target.health -= 5
  target.hits++
  update()
}

function kick() {
  target.health -= 10
  target.hits++
  update()
}

function update() {
  document.getElementById('health').innerText = target.health
  document.getElementById('hits').innerText = target.hits
  document.getElementById('charName').innerText = target.name
}

update()