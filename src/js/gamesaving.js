import json from './parser.js'
import read from './reader.js'

export default class GameSavingLoader {
  static load() {
    const result = read().
      then(data => {
        return json(data)
      })
      .then(result => {
        console.log(result)
        return result
      })
    return result
  }
}


console.log(GameSavingLoader.load())