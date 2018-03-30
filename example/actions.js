// actions.js
const SOME_ACTION = 'getFoo';

// actions.js
import Factory from 'vue-action-names';
const factory = new Factory('bar');
const SOME_ACTION = factory.createAction('getFoo');
