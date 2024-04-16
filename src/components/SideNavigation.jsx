import { Button } from '@/shadcomponents/ui/button';
import { Link } from 'react-router-dom';
import DisplayPicture from '@/components/DisplayPicture';
import { useSelector } from 'react-redux';
import { Bookmark,MonitorPlay,Users,Gamepad2} from 'lucide-react';

function SideNavigation() {
  const userId = useSelector((state) => state.userData.name);

  return (
    <div className=" w-80 h-auto min-h-screen m-0 p-0  bg-gray-100 sticky overflow-auto  top-0 left-0">
      <ul className="mt-24 w-full h-full flex flex-col gap-10 items-center rounded-lg">
        <li className="hover:bg-gray-300 w-[90%] rounded-md p-2 flex items-center">
          <Button asChild variant="ghost" className="w-full">
            <Link
              className="w-full flex gap-5 p-6 text-lg font-semibold hover:bg-gray-300"
              to="/ownprofile">
              <DisplayPicture className={`w-10 h-10 rounded-full`} />
              {userId}
            </Link>
          </Button>
        </li>
        <li className="hover:bg-gray-300 w-[90%] rounded-md p-2 flex items-center">
          <Button asChild variant="ghost" className="w-full">
            <Link
              className="w-full flex gap-5 p-6 text-lg font-semibold hover:bg-gray-300"
              to="/saved">
               <Bookmark fill='red'/>
              Saved
            </Link>
          </Button>
        </li>
        <li className="hover:bg-gray-300 w-[90%] rounded-md p-2 flex items-center">
          <Button asChild variant="ghost" className="w-full">
            <Link
              className="w-full flex gap-5 p-6 text-lg font-semibold hover:bg-gray-300"
              to="/watch">
               <MonitorPlay color='green'/>
              Video
            </Link>
          </Button>
        </li>
        <li className="hover:bg-gray-300 w-[90%] rounded-md p-2 flex items-center">
          <Button asChild variant="ghost" className="w-full">
            <Link
              className="w-full flex gap-5 p-6 text-lg font-semibold hover:bg-gray-300"
              to="/friends">
               <Users fill='#1DE9B6' />
              Friends
            </Link>
          </Button>
        </li>
        <li className="hover:bg-gray-300 w-[90%] rounded-md p-2 flex items-center">
          <Button asChild variant="ghost" className="w-full">
            <Link
              className="w-full flex gap-5 p-6 text-lg font-semibold hover:bg-gray-300"
              to="/gaming">
               <Gamepad2  color='#FFAB40'/>
              Gaming Videos
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigation;
