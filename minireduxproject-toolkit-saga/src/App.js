import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import CakeWithPayload from './components/CakeWithPayload';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <CakeWithPayload />
      </div>
    </Provider>
  );
}

export default App;
