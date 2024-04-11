import { useEffect } from 'react';
import {Outlet} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import AuthService from './appwrite/AuthService'; 
import { login,logout } from './stateManager/redux/authSlice';

function App() {
 const dispatch=useDispatch();
  const authService=new AuthService();
  useEffect(()=>{
    const currentUser=authService.getCurrentUserAccount();
    currentUser.then(res=>{
      if(res)
      {
        dispatch(login(res))
      }
      else{
        dispatch(logout())
      }
    })
  },[])
  return <>
  <Outlet/>
  </>;
}
export default App;
