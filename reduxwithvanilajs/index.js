const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const log = console.log; // for logging easier

const BUY_CAKE = 'BUY_CAKE';

const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  // action creator
  return { type: BUY_CAKE };
}

function buyIceCream() {
  // action creator
  return { type: BUY_ICECREAM };
}

//reducer: how to transform state
// (state , action) => new state

const initialCakeState = { numOfCakes: 10 };
const initialIceCreamState = { numOfIceCreams: 20 };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};

const reducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
});

const store = createStore(reducer);
// log(store);
log('initial state : ', store.getState());

const unsubscribe = store.subscribe(() =>
  log('updated state : ', store.getState())
); // subscribe gets a function that
// and execute it whenever a state gets changed
store.dispatch(buyCake());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
