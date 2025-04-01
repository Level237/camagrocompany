import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,
        children:[
            
        ]
    }
])

export default routes;