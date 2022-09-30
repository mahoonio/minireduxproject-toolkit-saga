const redux = require('redux');
const createStore = redux.createStore;

const log = console.log; // for logging easier

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  // action creator
  return { type: BUY_CAKE };
}

//reducer: how to transform state
// (state , action) => new state

const initialState = { numOfCakes: 10, shampoo: 4 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
// log(store);
log('initial state : ', store.getState());

store.subscribe(() => log('updated state : ', store.getState())); // subscribe gets a function that
// and execute it whenever a state gets changed
store.dispatch(buyCake());
