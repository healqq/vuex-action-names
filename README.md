# vuex-action-names
Wrapper for vuex action names aimed to eliminate usage of "magic strings" in the code.

Demo repository: [https://github.com/healqq/vuex-action-names-example](https://github.com/healqq/vuex-action-names-example)
## Usage
Let's have a simple store:
```
// store.js
import { SOME_ACTION } from './actions';
const store = {
  namespaced: true,
  actions: {
    [SOME_ACTION]: () => {},
  }
}
```
with an action:
```
// actions.js
const SOME_ACTION = 'getFoo';
```

That's how we call our action inside component:
```
// component.js
const component = {
  // irrelevant config skipped
  methods: {
    ...mapActions('bar', 'getFoo'),
  },
};
```

And that's how we call it from somewhere outside(store is instance of vuex store):

```
// outside.js
store.dispatch('bar/getFoo')
```

A lot of strings involved. We can use 
`
createNamespaceHelpers
`
from vuex, but it becomes verbose when our app grows.

With this extension we can now do this:
Create ActionName object and pass original action string to constructor:
```
import Factory from 'vue-action-names';
const factory = new Factory('bar');
const SOME_ACTION = factory.createAction('getFoo');
```

In store just pass object as computed property: 
```
// store.js
import { SOME_ACTION } from './actions';
const store = {
  namespaced: true,
  actions: {
    [SOME_ACTION]: () => {},
  }
}
```

In components:

```
// component.js
import { mapActionsHelper } from 'vuex-action-names';
import { SOME_ACTION } from './actions';
const component = {
  // irrelevant config skipped
  methods: {
    ...mapActionsHelper([
      SOME_ACTION, 
    ]),
  },
};
```
By default actions are mapped to the "action name" variable, but you can set custom mapping, if needed:
```
...mapActionsHelper([
  // short notation if you want to map to
  // unprefixed action name
  SOME_ACTION, 
  // object, if you want custom mapping
  { foo: SOME_OTHER_ACTION }
]);
```
Outside:
```
// outside.js
import { SOME_ACTION } from './actions';
store.dispatch(SOME_ACTION.full)
```
