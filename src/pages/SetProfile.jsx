import { Button } from '@/shadcomponents/ui/button';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/shadcomponents/ui/button';
import { useState } from 'react';
function SetProfile() {
  const [page, setPage] = useState(0);
  return (
    <div className="relative h-screen overflow-hidden">
      <Outlet context={[page, setPage]} />
      {page == 0 ? (
        <Button asChild className="absolute bottom-5 right-10">
          <Link className={buttonVariants({ variant: 'secondary' })} to="/setprofile/cover" replace={true}>
            Next
          </Link>
        </Button>
      ) : (
        <Button asChild className="absolute bottom-5 right-10">
          <Link className={buttonVariants({ variant: 'secondary' })} to="/" replace={true}>
            Finish
          </Link>
        </Button>
      )}
    </div>
  );
}
export default SetProfile;
