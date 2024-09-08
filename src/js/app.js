import json from './parser.js'
import read from './reader.js'

export default class GameSavingLoader {
  static load() {
    return (async() => {
      const data = await read();
      const value = await json(data);

      return value;
    })();
  }
}

