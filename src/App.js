import './App.css';
import React from 'react';
import Menubar from './Components/Menu/Menubar';
import Bisection from './Pages/Bisection/Bisection';
import { BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import FalsePosition from './Pages/FalsePosition/FalsePosition';
import Onepoint from './Pages/Onepoint/OnePoint';
import Newton from './Pages/Newton/Newton';
import SeCant from './Pages/Secant/Secant';
import Cramer from './Pages/Cramer/Cramer';
function App() {
  return (
    
    <Router>
      <Menubar />
        <Routes>
          <Route exact path="/" element={<Bisection />} />
          <Route exact path="/falsePosition" element={<FalsePosition />} />  
          <Route exact path="/Onepoint" element={<Onepoint />} />  
          <Route exact path="/Newton" element={<Newton />} />
          <Route exact path="/SeCant" element={<SeCant />} />    
          <Route exact path="/Cramer" element={<Cramer />} />  
        </Routes>
    </Router>
    
  );
}

export default App;
