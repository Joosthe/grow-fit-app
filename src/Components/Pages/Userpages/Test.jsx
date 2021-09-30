import React from 'react'

export default function Test() {
  const handleTestUpload = (e) => {
    const fileUrl =  URL.createObjectURL(e.target.files[0]);
    uploadAsset(fileUrl);
  };

  function uploadAsset(fileUrl){
    const form = new FormData();
    form.append('fileUpload',fileUrl);
    for (var key of form.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
  
  fetch(`${import.meta.env.VITE_GRAPHCMS_URL}/upload`, {
    method: 'POST',
    headers: {
      Authorization: `${import.meta.env.VITE_GRAPHCMS_AUTH}`,
    },
    body: form
  });
  }
  return (
    <div>
      <input type="file" onChange={handleTestUpload} />
    </div>
  )
} 
