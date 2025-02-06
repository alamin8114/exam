import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Components/LayoutOne/LayoutOne'

function App() {
      const myroute=createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path='/' element={<LayoutOne/>}/>
            <Route index element={<Home/>}/>
          </Route>
        )
      )

  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
