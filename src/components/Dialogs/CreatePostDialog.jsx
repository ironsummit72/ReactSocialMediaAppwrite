import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/shadcomponents/ui/alert-dialog';
import { Button } from '@/shadcomponents/ui/button';
import { X, Earth, Users, Lock,ImageUp } from 'lucide-react';
import DisplayPicture from '../DisplayPicture';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/shadcomponents/ui/select';
import { Textarea } from '@/shadcomponents/ui/textarea';
import { Input } from '@/shadcomponents/ui/input';
import { Label } from '@/shadcomponents/ui/label';
function CreatePostDialog({
  open,
  onOpenChange,
  onCancelHandler
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const userData = useSelector((state) => state.userData);
  const handleDrag = (event) => {
    event.preventDefault();
    setDragActive(event.type === 'dragover' || event.type === 'dragenter');
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    if(event.dataTransfer.files.length>10)
    {
      alert('you can only upload 10 images and videos in one post')
    }else{

      setSelectedFiles([...event.dataTransfer.files])
    }
  }
  const handleFileUpload=(event) => {
    if(event.target.files.length>10)
    {
      alert('you can only upload 10 images and videos in one post')
    }else{
      setSelectedFiles([...event.target.files])
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>

      <AlertDialogContent className="h-[90%]">
      <div className={`h-10 flex justify-center items-center border-b-2`}>
            <h1 className="font-bold text-lg">Create Post</h1>
            <Button
              onClick={onCancelHandler}
              variant="ghost"
              className="w-14 h-14 rounded-full relative left-32">
              <X />
            </Button>
          </div>
          <div className="h-20 profileInfo bg-white p-2 ">
            <DisplayPicture className={`w-14 h-14 rounded-full`} />
            <h1 className="font-semibold relative bottom-14 left-16">{userData.name}</h1>
            <Select>
              <SelectTrigger className="w-[140px] relative bottom-12 left-16 bg-gray-200">
                <SelectValue placeholder="Post Visibility" defaultValue={`PUBLIC`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Visibility</SelectLabel>
                  <SelectItem value="PUBLIC">
                    <div className="flex items-center gap-2">
                      <Earth /> <span>Public</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ONLYME">
                    <div className="flex items-center gap-2">
                      <Lock /> <span>Only Me</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="FOLLOWERS">
                    <div className="flex items-center gap-2">
                      <Users /> <span>Followers</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="cap overflow-auto ">
            <Textarea className="border-none outline-0 text-md focus:outline-0 resize-none" placeholder={`What's on your mind, ${userData.name.split(' ')[0]}?`}/>
          </div>
        <AlertDialogHeader className="flex-col   h-full  overflow-x-hidden no-scrollbar">
          <div className="addcontent w-full h-full border  rounded-lg min-h-[70rem]  flex justify-center items-start" onDragOver={handleDrag} onDragEnter={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop} >
           {selectedFiles.length===0? <div  className={`w-[98%] h-[38%] border-gray-600 bg-gray-100 hover:bg-gray-200 ${dragActive?"bg-gray-500":''} cursor-auto 400 rounded-lg m-1 flex justify-center items-center`}>
            <Label
            htmlFor="upload-dp"
            className="border-gray-500 h-full  w-full flex items-center border text-black font-medium text-lg p-3 rounded-sm flex-col justify-center">
              <ImageUp/>
            Add photos/videos
            <span className="block text-sm text-gray-500">or drag and drop</span>
            <Input
              accept="image/*,video/*"
              onChange={handleFileUpload}
              type="file"
              className="sr-only"
              id="upload-dp"
              multiple
              />
          </Label>
            </div>:
            <div className={`w-[98%] h-full rounded-lg mediacontent grid grid-cols-2 grid-rows-auto gap-x-2 gap-y-2`}>
             {selectedFiles.map((file)=>{
               if(file.type.split('/')[0]==='video'){
                 return <video className='w-60 rounded-md' key={file.name} autoPlay={true} muted={true} src={URL.createObjectURL(file)}/>
                }else{
                  return <img className='w-60 rounded-md' key={file.name} src={URL.createObjectURL(file)} alt="" />
                }
              })}
              </div>}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className={`bg-red-500`}>
          <div className="buttonContainer w-full bg-red-500  relative  ">
          <Button type='submit' className="w-full p-5">Post</Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CreatePostDialog;
