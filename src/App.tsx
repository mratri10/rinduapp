
import HomeScreen from './screen/landscape/home';
import { Provider } from 'react-redux';
import store from './reducer/store';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import LoginScreen from './screen/login';
import Landscape from './screen/landscape';

function App() {
  return (
    <Provider store={store}>
      <div className='lg:hidden'>
        <Router>
          <Routes>
            <Route path='/' element={<Landscape />} />
            <Route path='/profile' element={<Landscape />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Router>
      </div>
      <div className="hidden lg:block">
        <div>
          <h1>Login</h1>
        </div>
      </div>
    </Provider>
  );
}

export default App;
