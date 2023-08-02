
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Search } from './Pages/Search/Search';


function App() {
 
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
