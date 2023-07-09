import './App.css'
// import Addusers from './components/Addusers/Addusers';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import {  BrowserRouter, } from "react-router-dom"




function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <BrowserRouter>
      <Sidebar/>
 <MainDash/>
 <RightSide/> 
        {/* <Routes>
          <Route path="/adduser" element={<Addusers />} />
          

          

        </Routes> */}
      </BrowserRouter>
      </div>

    </div>
  );
}

export default App;









