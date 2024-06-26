import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './stateManager/redux/store.js';
import {Provider} from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedAuth from './Auth/ProtectedAuth.jsx';
import Home from './pages/Home.jsx';
import SetProfile from './pages/SetProfile.jsx';
import { Toaster } from "@/shadcomponents/ui/toaster"
import { Toaster as Sooner } from "@/shadcomponents/ui/sonner"
import SetDisplayPicture from './pages/SetDisplayPicture.jsx';
import SetCoverPicture from './pages/SetCoverPicture.jsx';
import Feed from './pages/Feed.jsx';
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
        element:<ProtectedAuth> <Feed /></ProtectedAuth>
      },
      {
        path: '/setprofile',
        element:<ProtectedAuth> <SetProfile /></ProtectedAuth>,
        children:[{
          path:'dp',
          element:<SetDisplayPicture/>
        },{
          path:'cover',
          element:<SetCoverPicture/>
        }]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <RouterProvider router={router} />
  <Toaster />
  <Sooner />
</Provider>
);
