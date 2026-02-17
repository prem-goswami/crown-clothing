import "./routes/home/home.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkoutPage";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user.contexts";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

const RedirectIfAuthenticated = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/shop/*"
          element={
            <RequireAuth>
              <Shop />
            </RequireAuth>
          }
        />
        <Route
          path="/sign-in"
          element={
            <RedirectIfAuthenticated>
              <Authentication />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
