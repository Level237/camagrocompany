import { createBrowserRouter, RouteObject } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Produits from "@/pages/Produits";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
const routes : RouteObject[] = [
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
    },{
        path:"/contact",
        element:<Contact/>,
    }
]

export default routes;