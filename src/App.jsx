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
import Orders from "./pages/Orders";
import LoginMobile from "./pages/auth/LoginMobile";
import ResetPassword from "./pages/reset/ResetPassword";
import LoginMotp from "./pages/auth/LoginMotp";
import { useState } from "react";
import EditProductForm from "./pages/EditProductForm";
import SearchResultsPage from "./pages/SearchResultsPage";
import ErrorPage from "./pages/error_page/ErrorPage";

export const appName = import.meta.env.VITE_APP_NAME;

function RequireAuth({ children }) {
  const { authed } = AuthConsumer();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/landing-page" replace state={{ path: location.pathname }} />
  );
}

const App = () => {
  const [hasVisitedMobile, setHasVisitedMobile] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
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
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="/notifications"
            element={
              <RequireAuth>
                <Notifications />
              </RequireAuth>
            }
          />
          <Route
            path="/orders"
            element={
              <RequireAuth>
                <Orders />
              </RequireAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />

          <Route
            path="/products/add"
            element={
              <RequireAuth>
                <AddProductForm />
              </RequireAuth>
            }
          />

          <Route
            path="/products/edit"
            element={
              <RequireAuth>
                <EditProductForm />
              </RequireAuth>
            }
          />

          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
