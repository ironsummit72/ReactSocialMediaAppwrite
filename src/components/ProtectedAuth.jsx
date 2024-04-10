
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



function ProtectedAuth({children}) {

  const auth=useSelector((state)=>{return state.Auth.userAuth})

// useEffect(()=>{

// },[])


  return auth? (
    <div>{children}</div>
  ):(<div>Please <Link className='text-blue-600 font-bold hover:underline'  to={'/login'} replace={true}>Login</Link> </div>)
}

export default ProtectedAuth