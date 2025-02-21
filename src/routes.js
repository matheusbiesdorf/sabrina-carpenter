import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Navbar from "./componentes/Menu";
import Music from "./paginas/Music";
import SignUp from "./paginas/SignUp";
import Videos from "./paginas/Videos";
import Shop from "./paginas/Shop";
import Rodape from "componentes/Rodape";

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/music" element={<Music/>} ></Route>
            <Route path="/videos" element={<Videos/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/shop" element={<Shop/>} ></Route>
         </Routes>
         <Rodape/>
      </BrowserRouter>
   );
}
