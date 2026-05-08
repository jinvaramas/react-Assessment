import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import OwnerPage from './pages/OwnerPage'
import { Outlet } from 'react-router-dom'
 
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
 
const router = createBrowserRouter([{
  path: '/', element: <Layout />,
  children: [
    { path: '/', element: <HomePage /> },
    { path: 'owner', element: <OwnerPage /> }
  ]
}])
 
export default function App() {
  return <RouterProvider router={router} />
}
