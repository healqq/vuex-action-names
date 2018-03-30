// component.js
const component = {
  // irrelevant config skipped
  methods: {
    ...mapActions('bar', 'getFoo'),
  },
};


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
