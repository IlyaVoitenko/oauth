import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ? <Login /> : <Logout />}
      {isAuthenticated && <Profile />}
    </div>
  );
}

export default App;
