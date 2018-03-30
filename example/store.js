// store.js
import { SOME_ACTION } from './actions';
const store = {
  namespaced: true,
  actions: {
    [SOME_ACTION]: () => {},
  }
}

// store.js
import { SOME_ACTION } from './actions';
const store = {
  namespaced: true,
  actions: {
    [SOME_ACTION.name]: () => {},
  }
}

