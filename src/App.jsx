import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Animation2 from './Animation2'

function App() {
  const [count, setCount] = useState(0)
  const routes= createBrowserRouter([
    {
      path:"",
      element:<Home/>
    },
       {
      path:"animation2",
      element:<Animation2/>
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
