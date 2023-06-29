
import HomeScreen from './screen/home';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}

export default App;
