import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Authentication/Login';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Task from './views/Task/Index';
import './App.css'

function App() {
  return (    
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>

                <Route element={<ProtectedRoutes/>}>
                  <Route path="/task" element={<Task/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
