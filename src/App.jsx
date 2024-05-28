
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Events from './Pages/Events'
import About from './Pages/About'
import Contact from './Pages/Contact'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/events',
    element:<Events/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/Signin',
    element:<SignIn/>
  },
  {
    path:'Signup',
    element:<SignUp/>
  }
])

export default function App() {
  return (
    <div>
    <Nav/>
    <RouterProvider router={router}/>
    </div>
  )
}