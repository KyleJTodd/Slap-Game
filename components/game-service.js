import Target from '../models/target.js'
import Item from '../models/item.js'

let _target = new Target('Banana', 100, 1, 5, 10);
let peel = new Item('Peel', 5, 'Exposed Banana');
let freeze = new Item('Freeze', -10, 'Hard Banana');
let blend = new Item('Blend', 20, 'WWHHHIIIIRRRR');

let _items = [peel, freeze, blend]






export default class GameService {
  constructor() {

  }
  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits
    }
  }

  //pass itemIndex
  addItemToTarget(itemIndex) {
    //grab the item to add
    let itemToAdd = _items[itemIndex]
    for (let i = 0; i < _target.items.length; i++) {
      if (itemToAdd.name == _target.items[i].name) {
        return alert('Already Equipped!')
      }
    }
    _target.items.push(itemToAdd)
  }


  attackTarget(attackName) {
    if (_target.health <= 0) {
      return alert('TKO....Banana Sandwich')
    }
    let attackMods = 0
    for (let i = 0; i < _target.items.length; i++) {
      let modifier = _target.items[i].modifier;
      attackMods = modifier
    }
    let attackDamage = _target.attacks[attackName] + attackMods
    _target.health -= attackDamage
    _target.hits++
  }
}


