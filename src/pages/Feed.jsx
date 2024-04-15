import Navbar from '@/components/Navbar';
import { useSelector } from 'react-redux';
import Container from '@/components/Container';
import CreatePostCard from '@/components/CreatePostCard';
export default function Feed() {
  const userId = useSelector((state) => state.userData.$id);
  return (
    <div className="">
      <Navbar />
      <Container>
        <CreatePostCard className={'ml-[32%]'} username={userId} />
      </Container>
    </div>
  );
}
