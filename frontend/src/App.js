import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeComponent from './Pages/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
