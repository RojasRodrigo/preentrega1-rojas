
import "./App.css";
//React router dom
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//componets
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from "./components/Header/Header";

//Pages
import HomePage from "./components/Pages/HomePage";
import WomensClothingPage from "./components/Pages/WomensClothingPage";
import MensClothingPage from "./components/Pages/MensClothingPage";
import ElectronicPage from "./components/Pages/ElectronicPage";
import JaweleryPage from "./components/Pages/JaweleryPage";
import DetailPage from "./components/Pages/DetailPage/DetailPage";
//import { RouteSharp } from "@mui/icons-material";



const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        
        <Routes>
          <Route path="/" element ={<HomePage />}/>
          <Route path="/WomensClothing" element ={<WomensClothingPage />}/>
          <Route path="/MensClothing" element ={<MensClothingPage />}/>
          <Route path="/Electronic" element ={<ElectronicPage />}/>
          <Route path="/Jawelery" element ={<JaweleryPage />}/>
          <Route path="/Detail/:id" element ={<DetailPage />}/>
        </Routes>
      
      </div>

      <div>
      
      <ItemListContainer greeting="¡Tu tienda online de confianza!"/>
    </div>
    </Router>


  );
};

export default App;
