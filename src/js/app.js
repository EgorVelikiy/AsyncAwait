import json from './parser.js'
import read from './reader.js'

export default class GameSavingLoader {
  static load() {
    const result = read().
      then(data => {
        return json(data)
      })
      .then(result => {
        return result
      })
      .catch(error => {
        throw new Error('Failed to save')
      })
    return result
  }
}