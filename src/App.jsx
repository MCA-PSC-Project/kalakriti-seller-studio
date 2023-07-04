import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProductForm from "./pages/AddProductForm";
import AuthConsumer from "./hooks/useAuth";
import Product from "./pages/Product";
import LoginMobile from "./pages/auth/LoginMobile";
import ResetPassword from "./pages/reset/ResetPassword";
import LoginMotp from "./pages/auth/LoginMotp";
import { useState } from "react";


export const appName = import.meta.env.VITE_APP_NAME;

function RequireAuth({ children }) {
  const { authed } = AuthConsumer();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

const App = () => {
  const [hasVisitedMobile, setHasVisitedMobile] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/login/mobile"
            element={<LoginMobile setHasVisitedMobile={setHasVisitedMobile} />}
          />
          <Route
            path="/login/motp"
            element={
              hasVisitedMobile ? <LoginMotp /> : <Navigate to="/login/mobile" />
            }
          />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/notifications"
            element={
              <RequireAuth>
                <Notifications />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/products/add"
            element={
              <RequireAuth>
                <AddProductForm />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
