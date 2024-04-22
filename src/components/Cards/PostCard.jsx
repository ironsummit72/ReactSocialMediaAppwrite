/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shadcomponents/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shadcomponents/ui/carousel';

import { Heart, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/shadcomponents/ui/button';
import FileService from '@/appwrite/FileService';
import envconf from '@/conf/envConf';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';

function PostCard({ users, caption, filesId, createdAt }) {
  const [filesContent, setFilesContent] = useState([]);
  const [api, setApi] = useState();
  const fileService = new FileService();
  const getDate = (createdAt) => {
    const date = new Date(createdAt);
    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
  };

  useEffect(() => {
    for (const files of filesId) {
      axios
        .get(fileService.getFileView(envconf.appWriteBucketIdUsersPost, files).href)
        .then((response) => {
          const contentType = response.headers['content-type'];
          setFilesContent((content) => [
            ...content,
            {
              contentType,
              fileId: files
            }
          ]);
        });
    }
  }, []);
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('slidesInView', () => {});
    // api.on("select", () => {
    //   videoref?.current.play()
    // })
  }, [api]);

  return (
    <>
      <Card className="w-[40%] min-h-screen max-h-[110%] mt-5 mb-5">
        <CardHeader>
          <div className="header flex gap-3 items-center">
            <img
              className="w-14 h-14 rounded-full"
              src={fileService.getFileView(
                envconf.appWriteBucketIdUsersProfile,
                users.displayPictureFileId
              )}
              alt=""
            />
            <div>
              <CardTitle>{users.name}</CardTitle>
              <CardDescription>{getDate(createdAt)}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <div className="caption overflow-auto h-auto max-h-20 w-[80%] m-0 m-auto relative bottom-4 no-scrollbar">
          <p>{caption}</p>
        </div>
        <CardContent className=" h-[80%] flex items-center justify-center">
          <Carousel setApi={setApi} className="w-full max-w-[80%] ">
            <CarouselContent>
              {filesContent.map((content) => {
                if (content.contentType.split('/')[0] === 'image') {
                  return (
                    <CarouselItem key={content.fileId}>
                      <img
                        src={fileService.getFileView(
                          envconf.appWriteBucketIdUsersPost,
                          content.fileId
                        )}
                        className="max-w-[100%]"
                        alt=""
                      />
                    </CarouselItem>
                  );
                } else {
                  return (
                    <CarouselItem key={content.fileId}>
                      <VideoPlayer
                        autoPlay={true}
                        className={`max-w-[100%] rounded-md`}
                        src={fileService.getFileView(
                          envconf.appWriteBucketIdUsersPost,
                          content.fileId
                        )}
                      />
                    </CarouselItem>
                  );
                }
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter className="">
          <div className="flex w-[30%] ">
            <Button variant="ghost">
              <Heart />
            </Button>
            <Button variant="ghost">
              <MessageCircle />
            </Button>
            <Button variant="ghost">
              <ExternalLink />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default PostCard;
