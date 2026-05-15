import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Aboutmenu from "./Components/Menus/Aboutmenu";
import Contactmenu from "./Components/Menus/Contactmenu";
import Homemenu from "./Components/Menus/Homemenu";
import Projectmenu from "./Components/Menus/Projectmenu";
import Servicemenu from "./Components/Menus/Servicemenu";    
import { Routes,Route } from "react-router-dom";
import Reduxpage from "./Components/Redux/Reduxpage";

function App() {
  return (
    <>
      <Header/>
          <Routes>
            <Route path="/" element={  <Homemenu/> } />
            <Route path="/about" element={ <Aboutmenu/> } />
            <Route path="/service" element={ <Servicemenu/> } />
            <Route path="/projects" element={ <Projectmenu/> } />
            <Route path="/contact" element={ <Contactmenu/> } />
            <Route path="/redux" element={ <Reduxpage/> } />
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
