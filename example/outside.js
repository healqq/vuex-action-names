// outside.js
store.dispatch('bar/getFoo')

// outside.js
import { SOME_ACTION } from './actions';
store.dispatch(SOME_ACTION.full)

