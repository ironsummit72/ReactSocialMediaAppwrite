import { Input } from '@/shadcomponents/ui/input';
import { Label } from '@/shadcomponents/ui/label';
import { useEffect, useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { MdOutlineCancel } from 'react-icons/md';
import noimage from '@/assets/noimage.svg';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useOutletContext } from 'react-router-dom';


function SetCoverPicture() {
  const [count,setCount] = useOutletContext();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImageFile, setPreviewImageFile] = useState(null);
  const onCancelImageHandler = () => {
    console.log('click');
    setSelectedFiles(null);
    setPreviewImageFile(null);
  };
useEffect(()=>{setCount(1)},[])
  const handleDrag = (event) => {
    event.preventDefault();
    setDragActive(event.type === 'dragover' || event.type === 'dragenter');
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    setSelectedFiles([...event.dataTransfer.files]);
    setPreviewImageFile(URL.createObjectURL(event.dataTransfer.files[0]));
  };
  const handleFileUpload = (event) => {
    // Your file processing/upload code here
    setSelectedFiles([...event.target.files]);
    setPreviewImageFile(URL.createObjectURL(event.target.files[0]));
  };
  console.log(count);

  return (
    <div className="w-screen flex gap-20 flex-col justify-center items-center bg-gray-900 h-screen">
   
      <div className="imgPreviewContainer relative left-80 w-[100vw] h-[50%] flex  border-orange-600 ">
        <AspectRatio className="w-[60%] h-[50vh] border border-1 border-white" ratio={16 / 9}>
          <img
            className="w-full h-full rounded-md object-cover"
            src={previewImageFile ?? noimage}
            alt=""
          />
        </AspectRatio>
      </div>
      <div
        onDragOver={handleDrag}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        id="dropZone"
        className={`fileuploadcontainer border border-white w-[80%] h-60 flex justify-center items-center gap-4 flex-col ${
          dragActive ? 'active' : ''
        }`}>
        <div className="border border-yellow-50 w-14 h-14 rounded-full flex justify-center items-center">
          <MdOutlineFileUpload size={'1.5em'} color="yellow" />
        </div>
        <h3 className="text-yellow-50 font-semiboldn text-2xl">
          {dragActive
            ? 'drop your files here'
            : `Drag and drop an image file here to upload cover picture`}
        </h3>
        <div className="fileInputContainer mt-5 relative  ">
          <Label
            htmlFor="upload-dp"
            className="border-yellow-50 border text-yellow-50 p-3 rounded-sm">
            Choose a Image
            <Input
              accept="image"
              onChange={handleFileUpload}
              type="file"
              className="sr-only"
              id="upload-dp"
            />
          </Label>
        </div>
        {
          <ul>
             <hr  className="w-auto relative top-2"/>
            {selectedFiles?.map((file) => {
              return (
                <div className="flex mt-3 gap-2 items-center justify-center" key={file.name}>
                <li className="text-yellow-50">{file.name}</li>{' '}
                <button onClick={onCancelImageHandler}>
                  <MdOutlineCancel color="red" />
                </button>
              </div>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}

export default SetCoverPicture;
