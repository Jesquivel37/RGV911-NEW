import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import BoardOfManagers from "./pages/BoardOfManagers"
import Meetings from "./pages/Meetings"
import ExecutiveDirector from "./pages/ExecutiveDirector";
import Errors from "./components/Errors"
import Departments from "./components/Departments";
import InformationTechnology from "./pages/InformationTechnology";
import Gis from "./pages/Gis";

function App() {
  
  return (
    <>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="BoardOfManagers" element={<BoardOfManagers />} />
              <Route path="Meetings" element={<Meetings />} />
             {/* <Route path="EcommTeams" element={<ECommTeams />}/> */}
               <Route path="Departments" element={<Errors  
               yellowTitle="Under"
              whiteTitle="Construction"/>}/> 


              <Route path="Departments/ExecutiveDirector" element={<ExecutiveDirector/>}/>
              <Route path="Departments/InformationTechnology" element={<InformationTechnology/>}/>
              <Route path="Departments/GIS" element={<Gis/>}/>
              
              { /* Catch all routes */} 
              <Route to={<Errors />}/>
              { /* Only match this when no other routes match */}
              
              <Route path="*" element={
                <Errors
                  yellowTitle="Not"
                  whiteTitle="Found"
                  articleInfo="This page does not exist,"
                  />
              }/>
            </Routes>
          </div>
        
       
       
        
    </>
      
    
   
  );
}

export default App;
