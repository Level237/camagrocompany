import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Produits from "@/pages/Produits";
import Services from "@/pages/Services";
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
    }
])

export default routes;