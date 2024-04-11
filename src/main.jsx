import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './stateManager/redux/store.js';
import {Provider} from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <RouterProvider router={router} />
</Provider>
);
