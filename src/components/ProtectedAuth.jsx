import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
function ProtectedAuth({children}) {
  const auth=useSelector(state=>state.isUserAuthenticated)
  
  return auth? (
    <div>{children}</div>
  ):<div>Login <Link to='/login' replace={true} className='text-blue-600 font-semibold'>here</Link></div>
}

export default ProtectedAuth