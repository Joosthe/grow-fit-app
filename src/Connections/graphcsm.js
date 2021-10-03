import axios from "axios";

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


export function uploadAsset(file){
  return fetch(`${import.meta.env.VITE_GRAPHCMS_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `${import.meta.env.VITE_GRAPHCMS_AUTH}`
    },
    body: file
  })
}
