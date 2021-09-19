import React from 'react'
import Container from '../../Wrappers/Container'
import IntroSection from '../../PageSections/IntroSection';
import { usersQuery } from '../../../Queries/usersQuery';
import { FaTrash } from "react-icons/fa";
import useCmsData from '../../../hooks/useCsmData';
import useStaticContent from '../../../hooks/useStaticContent';
export default function AdminUsers() {
  const {cmsData ,loadingCsmData} = useCmsData(usersQuery);
  const sc = useStaticContent('UserPages.AdminUsers');

  function deleteUser(e){
    e.preventDefault();
    const removeId = e.target;
    console.log(removeId);
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
       { loadingCsmData? (
        <tr><td>loading</td></tr>
        ): cmsData && ( 
        cmsData.data.data.app_Users.map(user=>{
          return(
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.userRoles}</td>
              <td> 
                <button onClick={deleteUser} >
                  <span data-remove={user.id}>
                  <FaTrash/>
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
