import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Dashboard from "./Pages/Dashboard/Dashboard"
import MainPanel from "./components/MainPanel/MainPanel"
import Approval from "./Pages/Approval/Approval"
import Details from "./Pages/Approval/Details"
import StorageLocation from "./Pages/StorageLocation/StorageLocation"
import StorageCondition from "./Pages/StorageCondition/StorageCondition"
import Users from "./Pages/users"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false)
  const checkLoggedIn = (data) => {
    setIsLoggedin(data);
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login show={checkLoggedIn}/>} />
          <Route path="" element={<MainPanel />}>
            <Route path="/dashboard" element={<Dashboard setToast={checkLoggedIn} show={isLoggedIn}/>} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/approval/1321" element={<Details />} />
            <Route path="/storage-location" element={<StorageLocation />} />
            <Route path="/stCondition" element={<StorageCondition />} />
            <Route path="/UsersOfuserManagement" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
