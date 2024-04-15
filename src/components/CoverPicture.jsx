import  { useEffect, useState } from 'react';
import { AspectRatio } from '@/shadcomponents/ui/aspect-ratio';
import { useSelector } from 'react-redux';
import PostService from '@/appwrite/PostService';
function CoverPicture({className}) {
    const [CoverPicture,setCoverPicture]=useState('');
    const postservice=new PostService()
    const userID = useSelector((state) => state.userData.$id);
    useEffect(()=>{
        postservice.getCoverPicture(userID).then((res) => setCoverPicture(res.href));
    },[])
  return (
    <div className="w-full h-[60%] ">
      <AspectRatio className={`flex justify-center mt-20 ${className}`} ratio={16 / 9}>
        <video poster={CoverPicture} alt="Image" className="rounded-md object-cover w-[80%] h-[65%] object-[top_right]" />
      </AspectRatio>
    </div>
  );
}

export default CoverPicture;
