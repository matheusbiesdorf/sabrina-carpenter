import Navbar from "components/Navbar";
import { BrowserRouter } from "react-router-dom";


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    )
}