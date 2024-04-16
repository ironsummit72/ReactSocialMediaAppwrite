import Navbar from '@/components/Navbar';
import Container from '@/components/containers/Container';
import CreatePostCard from '@/components/CreatePostCard';
import CreateStoryCard from '@/components/CreateStoryCard';
import SideNavigation from '@/components/SideNavigation';
import StoryContainer from '@/components/containers/StoryContainer';
export default function Feed() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <SideNavigation />
        <Container className={`flex items-center`}>
          <StoryContainer className={`h-80 mt-10 flex items-center gap-5 p-4`}>
            <CreateStoryCard />
          </StoryContainer>
          <CreatePostCard className={`m-0 m-auto`} username="" />
        </Container>
      </div>
    </>
  );
}
