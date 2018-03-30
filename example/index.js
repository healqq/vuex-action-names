import Factory from '../src/ActionNamesFactory';

const factoryWithPrefix = new Factory('users');
const factoryWithoutPrefix = new Factory();

const UPDATE_USERS = factoryWithPrefix.createAction('update');
console.log(UPDATE_USERS.name);

console.log({
  [UPDATE_USERS]: 1,
});

const NETWORK_AVAILABLE = factoryWithoutPrefix.createAction('networkAvailable');

console.log(NETWORK_AVAILABLE.name);

console.log({
  [NETWORK_AVAILABLE]: 1,
});
