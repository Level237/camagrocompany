import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Produits from "@/pages/Produits";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,
    },{
        path:"/produits",
        element:<Produits/>,
    }
])

export default routes;