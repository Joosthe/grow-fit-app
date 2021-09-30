import axios from "axios";
import imageToBase64 from 'image-to-base64/browser';

export function configQuery(query){
   const dataQuery = JSON.stringify({
    query,
  });
  return {
    method: 'post',
    url: import.meta.env.VITE_GRAPHCMS_URL,
    headers: { 
      'Authorization': import.meta.env.VITE_GRAPHCMS_AUTH,
      'Content-Type': 'application/json'
    },
    data : dataQuery
  };
}

export async function getData(query){
  const response = await axios(configQuery(query))
  return response.data.data;
}

export function uploadAssetConfig(fileUrl){
  const form = new FormData();
  var file = new File([fileUrl], "test");
  form.append('fileUpload',file);
  return {
    url:import.meta.env.VITE_GRAPHCMS_URL+'/upload',
    method: 'POST',
    headers: {
      Authorization: import.meta.env.VITE_GRAPHCMS_AUTH,
    },
    body: {
      'fileUpload': form
    }
  }
}

// export const postPortfolio = ( portfolio) => {
//   const formData = new FormData()
//   formData.append("portfolio", portfolio)
//   return cvApi(`/document/${id}/portfolio`,  {
//     data: formData,
//     headers: {
//       "Content-Type": "multipart/form-data"
//     },
//     method: "POST"
//   })
// }


export async function uploadAsset(fileUrl){
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
