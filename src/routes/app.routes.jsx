import { Route, Routes} from "react-router-dom";

import Details from "../pages/Details"
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import New from "../pages/New";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/new" element={<New />} />
        </Routes>
    );
}