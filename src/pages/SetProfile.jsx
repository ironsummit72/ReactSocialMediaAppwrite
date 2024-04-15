import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SetProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/setprofile/dp', { replace: true });
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}
export default SetProfile;
