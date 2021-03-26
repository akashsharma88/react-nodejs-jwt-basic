import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";


export default function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/">
          <Login />
        </AuthRoute>
        <AuthRoute exact path="/register">
          <Register />
        </AuthRoute>
        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

