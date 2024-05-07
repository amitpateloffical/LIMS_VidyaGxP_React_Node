import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Dashboard from "./Pages/Dashboard/Dashboard"
import MainPanel from "./components/MainPanel/MainPanel"
import Approval from "./Pages/Approval/Approval"
import Details from "./Pages/Approval/Details"
import StorageLocation from "./Pages/StorageLocation/StorageLocation"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="" element={<MainPanel />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/approval/1321" element={<Details />} />
            <Route path="/storage-location" element={<StorageLocation />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
