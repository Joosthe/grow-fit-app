import React, {useState, useEffect} from 'react'
import Container from '../../Wrappers/Container'
import IntroSection from '../../PageSections/IntroSection';
import { usersQuery } from '../../../Queries/usersQuery';
import {deleteUserQuery} from '../../../Queries/deleteUserQuery';
import useStaticContent from '../../../hooks/useStaticContent';
import { getData } from '../../../Connections/graphcsm';
export default function AdminUsers() {
  const [userId, setUserId] = useState(null);
  const sc = useStaticContent('UserPages.AdminUsers');
  const [cmsData, setCmsData ]= useState(null);
  const [loadingCsmData , setLoadingCsmData ]= useState(null);
  
    useEffect(()=>{
      const fetchData = async ()=> {
        setLoadingCsmData(true);
        try{
          const response = await getData(usersQuery);
          setCmsData(response);
        }catch(err){
          console.log(err)
        }
        setLoadingCsmData(false);
      }
      getData(deleteUserQuery(userId)).then(
        fetchData
      );
    } , [userId])
  



  async function deleteUser(e){
    e.preventDefault();
     setUserId(e.target.dataset.remove);
  }
  return (
    <Container>
      <IntroSection line={sc.introLine} title={sc.title}/>
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr>
            <th >First name</th>
            <th>Last name</th>
            <th>E-mail</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
       { 
        loadingCsmData? (
         <tr><td>loading</td></tr>
         ): 
        cmsData && ( 
         cmsData.app_Users.map(user=>{
           return(
             <tr key={user.id}>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.userRoles}</td>
               <td> 
                 <button onClick={deleteUser} >
                   <span data-remove={user.id}>
                    x
                   </span>

                 </button> 
               </td>
             </tr>
           )
         })
      )}
      </tbody>
      </table>
    </Container>
  )
}
