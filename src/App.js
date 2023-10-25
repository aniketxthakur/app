import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './main/home/home';
import Login from './auth/login/login';
import Dashboard from './dashboard/home/dashboard';
import MainRoute from './routes/mainroute';
import Authroute from './routes/authroute';
import DashboardRoute from './routes/dashboardRoute';

function App() {
  return (
    <div className='scroller'>
      <BrowserRouter>
        <Routes>
          <Route element={<MainRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route element={<Authroute />}>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<DashboardRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
