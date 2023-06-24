
import "./App.css";
//React router dom
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//componets
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from "./components/Header/Header";

//Pages
import HomePage from "./components/Pages/HomePage/HomePage";
import DetailPage from "./components/Pages/DetailPage/DetailPage";
import OrdersPage from "./components/Pages/OrdersPage/Orders";
import HomeDeliveryPage from "./components/Pages/HomeDeliveryPage/HomeDeliveryPage";
import Error from "./components/Pages/ErrorPage.js/ErrorPage"
//import { RouteSharp } from "@mui/icons-material";
import Category from "./components/Pages/Category/Category";



const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        
        <Routes>
          <Route path="/" element ={<HomePage />}/>
          <Route path="/Detail/:id" element ={<DetailPage />}/>
          <Route path="/Orders" element ={<OrdersPage />}/>
          <Route path="/HomeDelivery" element ={<HomeDeliveryPage />}/>          
          <Route path="*" element ={<Error />}/> 
          <Route path="/category/:categoryId" element ={<Category />}/>

        </Routes>
      
      </div>

      <div className="lola">
      
      <ItemListContainer greeting="¡Tu tienda online de confianza!"/>
    </div>
    </Router>


  );
};

export default App;
