import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export const appName = import.meta.env.VITE_APP_NAME;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
