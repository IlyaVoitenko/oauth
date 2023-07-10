import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { callApi, callProtectedApi } from "./api";

function App() {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <div className="App">
      <ul>
        {isAuthenticated ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={loginWithRedirect}>Login </button>
          </li>
        )}
      </ul>

      <ul>
        <li>
          <button onClick={callApi}>call api route</button>
        </li>

        <li>
          <button onClick={() => callProtectedApi(getAccessTokenSilently)}>
            call protected api route{" "}
          </button>
        </li>
      </ul>
      <p>user is {isAuthenticated ? "logged in" : "not logged in"}</p>
      {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>}
    </div>
  );
}

export default App;
/* <BrowserRouter>
<Routes>
  <Route index path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />
  {/* <Route path="*" element={<NoPage />} /> */
/*</Routes>
</BrowserRouter>{" "} */
