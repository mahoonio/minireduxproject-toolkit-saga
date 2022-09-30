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
      return { ...state, numOfCakes: numOfCakes - 1 };
    default:
      return state;
  }
};
