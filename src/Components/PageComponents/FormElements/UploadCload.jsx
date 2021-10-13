import React,{useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

export default function UploadCload(props) {
  const onDrop = useCallback(acceptedFile => {
    props.tryUpload(acceptedFile[0])
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
    
    </div>
  )
}
