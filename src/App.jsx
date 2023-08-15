import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useContext } from "react";
import { LoginContext } from "./context/AuthContext";

const App = () => {
  const currentUser = useContext(LoginContext);
  console.log(currentUser);
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
