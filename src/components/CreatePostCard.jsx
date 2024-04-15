import DisplayPicture from './DisplayPicture';
import { Button } from '@/shadcomponents/ui/button';
import { Image, Smile, Radio } from 'lucide-react';
function CreatePostCard({ className, username = '', whatsOnMindOnCLick }) {
  return (
    <>
      <div className={`cardContainer w-[45%]  h-40 bg-white rounded-md shadow-2xl relative top-10`}>
        <div className="flex items-center  gap-5 h-14 mt-5">
          <DisplayPicture className={`w-12 h-12 rounded-full ml-5  ${className}`} />
          <div
            onClick={whatsOnMindOnCLick}
            className="w-[80%] h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center p-2">{`What's on your mind, ${username}?`}</div>
        </div>
        <hr className="h-px my-1 mt-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="createSection flex gap-28 items-center w-[90%] h-16 m-0 m-auto ">
          <Button variant="ghost">
            <Image color="#43A047" className="mr-2 h-4 w-4" />
            Photo/video
          </Button>
          <Button variant="ghost">
            <Radio color="#DD2C00" className="mr-2 h-4 w-4" />
            Live video
          </Button>
          <Button variant="ghost">
            <Smile color="#FFAB00" className="mr-2 h-4 w-4" />
            Feeling/activity
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreatePostCard;
