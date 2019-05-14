






function slap() {
  target.health -= 1 + addMods()
  target.hits++
  update()
}

function punch() {
  target.health -= 5 + addMods()
  target.hits++
  update()
}

function kick() {
  target.health -= 10 + addMods()
  target.hits++
  update()
}

function givePeel() {
  target.items.push(items.peel)
}
function giveFreeze() {
  target.items.push(items.freeze)
}
function giveBlender() {
  target.items.push(items.blender)
}


function addMods() {
  let out = 0
  for (let i = 0; i < target.items.length; i++) {
    let modifier = target.items[i].modifier;
    out += modifier
  }
  return out
}


function update() {
  document.getElementById('health').innerText = target.health
  document.getElementById('hits').innerText = target.hits
  document.getElementById('charName').innerText = target.name
}

update()