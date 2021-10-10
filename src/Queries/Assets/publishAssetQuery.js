export function publishAsset(id){
  return `
  mutation{
    publishAsset(where:{id:"${id}"}){
      id
      fileName
      url
    }
  }
  `;
}
