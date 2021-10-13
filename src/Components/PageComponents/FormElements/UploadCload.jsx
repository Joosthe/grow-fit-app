import React,{useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './styles/Upload.module.scss';
import Button from '../../PageComponents/Buttons/Button';
import {BiRefresh} from 'react-icons/bi'

export default function UploadCload(props) {
  const onDrop = useCallback(acceptedFile => {
    props.tryUpload(acceptedFile[0])
  }, [])
  
  const {acceptedFiles,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles: 1})


  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {
       
      }
    { props.tempImage ?(
      <div>
        <div className={styles.preview}>
          <img src={URL.createObjectURL(props?.tempImage)}/>
        </div>
        <Button onClick={()=>props.tryUpload('')} variant="retrybutton"><BiRefresh/>Retry</Button>
      </div>

    ):(
      isDragActive ?
      <p>Drop the files here ...</p> :
      <div className={styles.empty__upload}>{props.placeholder}</div>
    )
    }
    </div>
  )
}
