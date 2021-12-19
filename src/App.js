import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddAdmin from "./pages/Dashboard/AddAdmin/AddAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import PrivateRoute from "./Private/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/appointment" element={<PrivateRoute> <Appointment /></PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /></PrivateRoute>}>
              <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>
              </Route>
              <Route path={`/dashboard/addAdmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}>
              </Route>


            </Route>

            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
