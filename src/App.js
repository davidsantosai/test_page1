import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Store from "./pages/Store";
import {Routes,Route} from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/gmail" element={<Gmail/>}/>
        <Route path="/images" element={<Images/>}/>
      </Routes>
    </div>
  );
}

export default App;
