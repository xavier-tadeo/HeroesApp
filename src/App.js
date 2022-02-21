import { AppRouter } from "./routers/AppRouter";
import "./App.css";
import { AuthContext } from "./auth/authContext";
import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
