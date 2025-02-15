import Navbar from "components/Navbar";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}