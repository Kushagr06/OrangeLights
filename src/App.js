import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Item from './components/Item';


function App() {
  return (
    <div className="scroll-smooth"> 
    <BrowserRouter> 
      <Routes>  
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/:category/:id" element={<Item />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
