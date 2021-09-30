// import React from 'react'

// export default function Test() {
//   const handleTestUpload = (e) => {
//     const fileUrl =  URL.createObjectURL(e.target.files[0]);
//     uploadAsset(fileUrl);
//   };

//   function uploadAsset(fileUrl){
//     const form = new FormData();
//     form.append('fileUpload',fileUrl);
//     for (var key of form.entries()) {
//       console.log(key[0] + ', ' + key[1]);
//   }
  
//   fetch(`${import.meta.env.VITE_GRAPHCMS_URL}/upload`, {
//     method: 'POST',
//     headers: {
//       Authorization: `${import.meta.env.VITE_GRAPHCMS_AUTH}`,
//     },
//     body: form
//   });
//   }
//   return (
//     <div>
//       <input type="file" onChange={handleTestUpload} />
//     </div>
//   )
// } 



// -----------


import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function Test() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );

      const form = new FormData();

      form.append("fileUpload", acceptedFiles[0]);
      // for (var key of form.entries()) {
      //     console.log(key[0] + ', ' + key[1]);
      // }
      fetch(`${import.meta.env.VITE_GRAPHCMS_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `${import.meta.env.VITE_GRAPHCMS_AUTH}`
        },
        body: form
      });
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop
  });

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drop or click to upload to GraphCMS</p>
        )}
      </div>
      <aside>
        {files.map((file, index) => (
          <div key={file.name}>
            <img
              src={file.preview}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </div>
        ))}
      </aside>
    </>
  );
}


