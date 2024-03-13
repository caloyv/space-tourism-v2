
import Layout from './components/Layout'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Destination from './pages/Destination'
import DestinationNav from './components/DestinationNav'
import Crews from './pages/Crew'
import CrewNav from './components/CrewNav'
import Technology from './pages/Technology'
import TechnologyNav from './components/TechnologyNav'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/space-tourism-v2" element={<Layout />} >
      <Route index element={<Homepage/>} />
      <Route path="destination" element={<Destination />}>
        <Route path=":id" index element={<DestinationNav />} />
      </Route>
      <Route path="crew" element={<Crews />}>
      <Route path=":id" index element={<CrewNav />} />
      </Route>
      <Route path="technology" element={<Technology />}>
        <Route path=":id" index element={<TechnologyNav />} />
      </Route>
    </Route>
  )
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
