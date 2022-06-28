import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import SecurityGuards from "./pages/SecurityGuards";
import Details from "./pages/Details";
import Apply from "./pages/Apply";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/securityguards" element={<SecurityGuards />}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/apply" element={<Apply/>}></Route>
      </Routes>
      

     </BrowserRouter>
    </div>
  );
}

export default App;
