import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Routercomponent from "./Routercomponent/Routercomponent";


const App = () => {
  return (
    <Router>
      <NavBar />
    <Routercomponent/>
     
    </Router>
  );
};

export default App;
