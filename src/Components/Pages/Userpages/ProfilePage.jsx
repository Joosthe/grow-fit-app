import React, {useState, useRef} from 'react';
import { uploadAsset } from '../../../Connections/graphcsm';


import { useUser } from '../../../Contexts/UserContext';
import Button from '../../PageComponents/Buttons/Button';
import LogoutButton from '../../PageComponents/Buttons/LogoutButton';
import Container from '../../Wrappers/Container';
import './styles/ProfilePage.scss';

 function ProfilePage(){

  const { currentUser, userEdit } = useUser();
  const [editstate, seteditstate] = useState(false);
  const [file, setFile] = React.useState("");

  const editUserFirstName = useRef();
  const editUserlastName = useRef();
  const editUserUserName = useRef();
  const editUserNicknames = useRef();

  function saveUser(e){
    const id = e.target.getAttribute('data-id')
    const firstName = editUserFirstName.current.value;
    const lastName = editUserlastName.current.value;
    const userName = editUserUserName.current.value;
    const nickName =  editUserNicknames.current.value;
    //console.log({id, firstName, lastName, userName, nickName});
    userEdit(id,firstName, lastName, userName);
    seteditstate(false);
  }


  const handleUpload = async (e) => {
    const fileUrl =  URL.createObjectURL(e.target.files[0]);
    console.log(fileUrl);
    uploadAsset(fileUrl);
  };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  return(
    <Container>
      <section className="text-center py-4">
           <h1 className="text-4xl font-semibold">Hello {currentUser.userName}</h1>
      </section>
      <section className="profile__user__account">
        <div className="profile__user__account_img">
        <img src={ currentUser?.userprofileimg?.url 
          ? currentUser?.userprofileimg?.url
          : 'https://via.placeholder.com/150'
        } alt={'profile picture '+currentUser.username} />
          <div className="form-item">
          <input type="file" onChange={handleUpload} />
            <p>Filename: {file.name}</p>
          </div>
        </div>
        <div className="profile__user__account_info">
          <h2 className="section--label">
            <span className="font-semibold">
              Profile info
            </span>
          </h2>
          <div className={`profile__user__account_info__wrapper ${editstate ? "active-edit":""}`}>
            <div className="profile__user__account_info__inner">
              <div className="form-item">
                <p>First name: <span>{currentUser.firstName}</span> </p>
                <input type="text" ref={editUserFirstName} className="edit__user__input" defaultValue={currentUser.firstName}/>
              </div>
              <div className="form-item">
                <p>Last name: <span>{currentUser.lastName}</span></p>
                <input type="text" ref={editUserlastName} className="edit__user__input" defaultValue={currentUser.lastName}/>
              </div>
              <div className="form-item">
                <p>Username: <span>{currentUser.userName}</span></p>
                <input type="text" ref={editUserUserName} className="edit__user__input" defaultValue={currentUser.userName}/>
              </div>
            </div>
            <div className="profile__user__account_info__inner">
            <p className="no-edit">E-mail: <span>{currentUser.email}</span></p>
            <p className="no-edit">User role: <span>{currentUser.userRoles}</span></p>
              <div className="form-item">
              <p>Nickname: <span>{currentUser.nicknames}</span></p>
                <input type="text" ref={editUserNicknames} className="edit__user__input" defaultValue={currentUser.nicknames}/>
              </div>
            </div>
          </div>
        </div>
        <div className="profile__user__account_actions">
          {editstate 
          ?  <Button dataId={currentUser.id} onClick={saveUser} variant="btn--save">Save profile</Button>
          :  <Button onClick={()=>(seteditstate(true))} variant="btn--edit">Edit profile</Button>
          }
          
          
          <LogoutButton/>
        </div>

      </section>
      

     
     
    </Container>
  )
}
export default ProfilePage
