import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import { useContext } from 'react';
import { LoginContext } from './context/AuthContext';
import { SearchContext } from './context/SearchContext';

const App = () => {
  const currentUser = useContext(LoginContext);
  const [searchOpen, setSearchOpen] = useContext(SearchContext);
  console.log('The search :', searchOpen);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
