import axios from 'axios';

 export async function uploadingImg(file, preset){
    const fD =  new FormData;
    fD.append('file', file);
    fD.append('upload_preset', preset);
    return await axios.post('https://api.cloudinary.com/v1_1/paujoost/image/upload', fD);
  }