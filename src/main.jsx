import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Test from './pages/Test.jsx';
import ProtectedAuth from './components/ProtectedAuth.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: (
          <ProtectedAuth>
            <Home />
          </ProtectedAuth>
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/',
        element:<ProtectedAuth> <Profile /></ProtectedAuth>
      },
      {
        path: '/currentuser', //TODO:delete later
        element: (
          <ProtectedAuth authentication>
            <Test />
          </ProtectedAuth>
        )
      }
    ]
  } //TODO: wrap in a protected Routes
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
