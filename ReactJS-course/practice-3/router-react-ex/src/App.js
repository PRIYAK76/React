import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
<<<<<<< HEAD
          <Route path="*" element={<h1>Error:404 PAGE NOT FOUND</h1>} />
=======
          <Route path="*" element={<h1>Error:404 Page not Found</h1>}/>
>>>>>>> a7b86b20967546f1ed397a0d0aa49a5a12041603
        </Routes>
    </Router>
    </div>
  );
}

export default App;
