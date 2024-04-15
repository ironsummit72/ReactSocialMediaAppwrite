import Navbar from '@/components/Navbar';
import { useSelector } from 'react-redux';
import UserService from '@/appwrite/UserService';
import Container from '@/components/Container';
import CreatePostCard from '@/components/CreatePostCard';
export default function Feed() {
  const user = new UserService();

   const userId=useSelector(state=>state.userData.$id)

  return (
    <div className="">
      <Navbar />

      <Container>
        <CreatePostCard username={userId}/>
      </Container>

    </div>
  );
}
