import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Produits from "@/pages/Produits";
import Services from "@/pages/Services";
import About from "@/pages/About";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,
    },{
        path:"/produits",
        element:<Produits/>,
    },{
        path:"/services",
        element:<Services/>,
    },{
        path:"/about",
        element:<About/>,
    }
])

export default routes;