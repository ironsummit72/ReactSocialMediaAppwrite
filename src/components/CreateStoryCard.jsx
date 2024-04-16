import { Button } from '@/shadcomponents/ui/button';
import DisplayPicture from './DisplayPicture';
import { Plus } from 'lucide-react';

function CreateStoryCard({ className }) {
  return (
    // <div className="w-48 h-80  bg-white rounded-md shadow-2xl mt-10 ml-5 flex-col justify-center items-center ">
    // <DisplayPicture className={'w-full  rounded-md'}/>
    // <Button className='ml-12 bg-blue-600 rounded-full w-16 h-16 relative bottom-5 border-4 border-white'><Plus /></Button>
    // <h1 className='font-semibold mt-1 ml-9'>Create Story</h1>
    <div className="w-40 h-72 bg-white rounded-md shadow-2xl">
      <div className="w-full h-full flex-col items-center">
        <DisplayPicture className={`w-auto rounded-t-lg `} />
        <Button className="rounded-full w-14 h-14 border-4 relative bottom-8 left-12 border-white-500">
          <Plus />
        </Button>
        <h1 className="font-semibold">Create Story</h1>
      </div>
    </div>
  );
}
export default CreateStoryCard;
