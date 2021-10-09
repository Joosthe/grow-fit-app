import React,{useState, useCallback} from 'react';
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
export default function UploadCload(props) {


  const [uploadImg, setuploadImg] = useState(null)
  
  function uploadingImg(file){
    const fD =  new FormData;
    fD.append('file', file);
    fD.append('upload_preset', 'workout_preset');
    axios.post('https://api.cloudinary.com/v1_1/paujoost/image/upload', fD).then(
      data=>{
       props.onUpload(data.data);
      }
    )
  }
  const onDrop = useCallback(acceptedFile => {
    setuploadImg(acceptedFile[0])
 }, [])
 const {acceptedFiles,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles: 1})
 
 const preview = acceptedFiles.map(file => (
  <li key={file.path}>
    {file.path} - {file.size} bytes
  </li>
));

  return (
    <div>
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {
         isDragActive ?
         <p>Drop the files here ...</p> :
         <p>Drag 'n' drop some files here, or click to select files</p>
      }
     {preview} 
     
    </div>

     {/* <input 
        type="file"
        onChange={(e)=>{
         
        }}
      /> */}
      <button onClick={()=>uploadingImg(uploadImg)}>Upload</button>
      <h2>This comes of cloadinary</h2>
     
      <hr/>
    </div>
  )
}
