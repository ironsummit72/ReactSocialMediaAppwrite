import { Input } from '@/shadcomponents/ui/input';
import { Label } from '@/shadcomponents/ui/label';
import { useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { MdOutlineCancel } from 'react-icons/md';
import noimage from '@/assets/noimage.svg';
import { Button } from '@/shadcomponents/ui/button';
import CustomAlertDialog from '@/components/AlertDialog';
import PostService from '@/appwrite/PostService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SetDisplayPicture() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImageFile, setPreviewImageFile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const userID = useSelector((state) => state.userData);
  const navigate=useNavigate();
  const [imageFile, SetImage] = useState(null);
  const postSer = new PostService();

  const onCancelImageHandler = () => {
    setSelectedFiles(null);
    setPreviewImageFile(null);
  };
  const handleDrag = (event) => {
    event.preventDefault();
    setDragActive(event.type === 'dragover' || event.type === 'dragenter');
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    setSelectedFiles([...event.dataTransfer.files]);
    setPreviewImageFile(URL.createObjectURL(event.dataTransfer.files[0]));
    SetImage(event.dataTransfer.files[0]);
  };
  const handleFileUpload = (event) => {
    setSelectedFiles([...event.target.files]);
    setPreviewImageFile(URL.createObjectURL(event.target.files[0]));
    SetImage(event.target.files[0]);
  };

  const uploadImage = () => {
    if (imageFile !== null) {
      setOpenDialog(true);
    }
  };
  const onContinueHandler = () => {
    postSer
      .setDisplayPicture(imageFile, userID.$id)
      .then((res) => {
        if(res){
          navigate('/setprofile/cover',{replace:true});
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-screen flex gap-20 flex-col justify-center items-center bg-gray-900 h-screen">
      <div className="imgPreviewContainer w-screen h-[40%] flex justify-center">
        <img
          className="w-80 h-80 rounded-full object-cover"
          src={previewImageFile ?? noimage}
          alt=""
        />
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
            : `Drag and drop an image file here to upload display picture`}
        </h3>
        <div className="fileInputContainer mt-5 relative  ">
          <Label
            htmlFor="upload-dp"
            className="border-yellow-50 border text-yellow-50 p-3 rounded-sm">
            Choose a Image
            <Input
              accept="image/*"
              onChange={handleFileUpload}
              type="file"
              className="sr-only"
              id="upload-dp"
            />
          </Label>
        </div>
        {
          <ul>
            <hr className="w-auto relative top-2" />
            {selectedFiles?.map((file) => {
              return (
                <div className="flex mt-3 gap-2 items-center justify-center" key={file.name}>
                  <li className="text-yellow-50">{file.name}</li>
                  <button onClick={onCancelImageHandler}>
                    <MdOutlineCancel color="red" />
                  </button>
                </div>
              );
            })}
          </ul>
        }
      </div>
      <CustomAlertDialog title={'Set Image'} description={'This will be your display picture. Other user can identify you using this picture '} onContinueaHandler={onContinueHandler} open={openDialog} />
      <Button onClick={uploadImage} variant="outline" className="absolute bottom-5 right-14">
        Next
      </Button>
    </div>
  );
}

export default SetDisplayPicture;
