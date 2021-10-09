import React,{useState} from 'react'
import {Image} from 'cloudinary-react';
import axios from 'axios';
import UploadCload from '../../PageComponents/FormElements/UploadCload';

export default function TestPage() {
  const [image, setimage] = useState({});
  const uploadImage = (file) => {
    setimage(file);
    
  }



  return (
    <div>
      <h1>This is the testpage</h1>
      <UploadCload onUpload={uploadImage}/>
      { image?.public_id &&
        <Image publicId={image.public_id} width="50" />
      }
      <div>
        <Image publicId="sample" width="50" />
      </div>
      <Image publicId="samples/sheep" width="100" />
    </div>
  )
}
