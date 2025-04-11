import { RouterProvider } from 'react-router-dom'
import routes from './routes/route'
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>  
    <RouterProvider router={routes}/>
    </HelmetProvider>
  )
}

export default App;