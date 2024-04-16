import PostService from '@/appwrite/PostService';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function DisplayPicture({ className, imgUrl, alt }) {
  const [displayPicture, setDisplayPicture] = useState('');
  const postservice = new PostService();
  const userID = useSelector((state) => state.userData.$id);
  useEffect(() => {
    postservice.getProfilePicture(userID).then((res) => setDisplayPicture(res.href));
  }, []);
  return imgUrl ? (
    <>
      <img
        className={className ?? 'w-60 h-60 rounded-full object-cover'}
        src={imgUrl}
        alt={alt}
      />
    </>
  ) : (
    <>
      <img
        className={className ?? 'w-60 h-60 rounded-full object-cover'}
        src={displayPicture}
        alt={''}
      />
    </>
  );
}

export default DisplayPicture;
