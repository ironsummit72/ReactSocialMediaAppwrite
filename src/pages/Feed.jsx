import Navbar from '@/components/Navbar';
import Container from '@/components/containers/Container';
import CreatePostCard from '@/components/CreatePostCard';
import CreateStoryCard from '@/components/CreateStoryCard';
import SideNavigation from '@/components/SideNavigation';
import StoryContainer from '@/components/containers/StoryContainer';
import CreatePostDialog from '@/components/Dialogs/CreatePostDialog';
import { useState, useEffect } from 'react';
import { dialogContext } from '@/context/dialogContext';
import PostService from '@/appwrite/PostService';
import PostCard from '@/components/Cards/PostCard';
export default function Feed() {
  const postserv = new PostService();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = postserv.getPosts();
    posts
      .then((result) => {
        setPosts(result.documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // TODO: remove later above code
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const createPostHandler = () => {
    setPostDialogOpen(true);
  };
  return (
    <>
      <Navbar />
      <div className="flex ">
        <SideNavigation />
        <Container className={`flex items-center`}>
          <StoryContainer className={`h-80 mt-10 flex items-center gap-5 p-4`}>
            <CreateStoryCard />
          </StoryContainer>
          <CreatePostCard
            className={`m-0 m-auto mb-20`}
            username=""
            whatsOnMindOnCLick={createPostHandler}
          />
          <dialogContext.Provider value={{ postDialogOpen, setPostDialogOpen }}>
            <CreatePostDialog />
          </dialogContext.Provider>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.$id}
                caption={post.caption}
                filesId={post.fileId}
                users={post.users}
                createdAt={post.$createdAt}
              />
            );
          })}
        </Container>
      </div>
    </>
  );
}
