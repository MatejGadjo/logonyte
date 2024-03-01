import './App.css';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomLogo from './pages/CustomLogo';
import Catalog from './pages/Catalog';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Information from './pages/Information';
import Register from "./components/Register/Register";
import Profile from './pages/Profile';
import { UserContext } from './UserContext';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ResetPassword from './components/PasswordReset/ResetPassword';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ForgotPassword from './components/PasswordReset/ForgotPassword';
import ChangePassword from './components/PasswordReset/ChangePassword';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ScrollToTop />
        <SideBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customlogo" element={<CustomLogo />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/aboutus' element={<Information />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword/:token' element={<ResetPassword />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/terms-conditions' element={<TermsAndConditions />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/cookie-policy' element={<CookiePolicy />} />
          </Routes>

        </SideBar>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
