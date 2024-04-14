import Navbar from '@/components/Navbar';
import  {useSelector} from 'react-redux';
import UserService from '@/appwrite/UserService';
export default function Profile() {
  const user=new UserService();
  user.checkUserDisplay().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
const state=useSelector(state=>state.userData)
console.log(state);
  
  return (
    <>
     <Navbar/>
      <h1>Profile {state.$id}</h1>

    </>
  );
}
