import React, { useState, useEffect } from 'react'
import Container from '../../Wrappers/Container'
import IntroSection from '../../PageSections/IntroSection';
import StaticContent from'../../../StaticContent/content-En.js';
import { usersQuery } from '../../../Queries/usersQuery';
import {useCms } from '../../../Contexts/cmsContext';
import { FaPencilAlt } from "react-icons/fa";
const sc =  StaticContent.UserPages.AdminUsers;
export default function AdminUsers() {
  const {getData} = useCms();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData(usersQuery,{}).then(
      (data)=>{
        setUsers(data.app_Users);
      }
    );  
  }, []);


  return (
    <Container>
      <IntroSection line={sc.introLine} title={sc.title}/>
      <table class="table-auto w-full">
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
      { users.map(user=>{
        return(
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.userRoles}</td>
            <td> 
              <button> <FaPencilAlt/></button> 
            </td>
          </tr>

        )
      })}
      </tbody>
      </table>
    </Container>
  )
}
