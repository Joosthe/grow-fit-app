import StaticContent from '../staticContent/content-En';
// here can we later play with language


export default function useStaticContent(objectName){
  return objectName.split('.').reduce((o,i)=>o[i], StaticContent);
}
