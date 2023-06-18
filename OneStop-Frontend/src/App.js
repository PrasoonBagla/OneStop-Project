import { Route,Routes} from "react-router-dom";
import BuyerLogin from './components/BuyerLogin';
import BuyerSignUp from './components/BuyerSignUp';
import Home from "./components/Home";
import Header from "./components/Header";
import SellerLogin from "./components/SellerLogin";
import SellerSignUp from "./components/SellerSignUp";
import Buyerhome from "./components/Buyerhome";
import BingMap from "./components/BingMap";
import SellerHome from "./components/SellerHome";
import SellerNewShop from "./components/SellerNewShop";
import SellerShop from "./components/SellerShop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/buyerlogin" element={<BuyerLogin />}></Route>
      <Route path="/sellerlogin" element={<SellerLogin />}></Route>
      <Route path="/buyersignup" element={<BuyerSignUp />}></Route>
      <Route path="/sellersignup" element={<SellerSignUp />}></Route>
      <Route path="/header" element={<Header />}></Route>
      <Route path="/buyerhome" element={<Buyerhome />}></Route>
      <Route path="/buyerresults" element={<BingMap />}></Route>
      <Route path="/sellerhome" element={<SellerHome />}></Route>
      <Route path="/sellernewshop" element={<SellerNewShop />}></Route>
      <Route path="/sellershop" element={<SellerShop />}></Route>
    </Routes>
  );
}

export default App;
