import React,{ useContext, useState } from 'react';
export const UploadContext = React.createContext();

export function useUpload(){
  return useContext(UploadContext);
}

export const UploadProvider = ({children}) => {
  const [ uploadedfile, setUploadedFile ] = useState(null);

  function upAndPubAsset(){
    uploadAsset(file)
      .then((response) => response.json())
      .then((data) => {
         getData(publishAsset(data.id)).then(
           data =>{
             setUploadedFile(data);
           } 
         )
      });
  }

  const value = {
    uploadedfile,
    setUploadedFile,
    upAndPubAsset
    
  }
  return(
    <UploadContext.Provider value={value}>
      {children}
    </UploadContext.Provider>
  )
}
