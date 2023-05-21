import React, {useState, useContext} from 'react';
import JoblyApi from './api';
import userContext from './userContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Profile.css'

function Profile() {
  const {userInfo, currentUser} = useContext(userContext);
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await JoblyApi.updateUser(formData, currentUser);
      console.log('Update successful!', res);
      alert("Profile Updated");
    } catch (e) {
      alert(e);
    }
  }
    return (
      <>
      <div className='ProfileForm'>
        <h1 id='ProfileHeader'>Profile</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="firstName"
            id="firstName"
            type="text"
            placeholder={userInfo.firstName}
            onChange={handleChange}
            value={formData.firstName}
          />
          <Form.Control
            name="lastName"
            id="lastName"
            type="text"
            placeholder={userInfo.lastName}
            onChange={handleChange}
            value={formData.lastName}
          />
          <Form.Control
            name="email"
            id="email"
            type="text"
            placeholder={userInfo.email}
            onChange={handleChange}
            value={formData.email}
          />
          <Form.Control
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <Button id="EditProfileButton" type='submit'>Edit</Button>
        </Form>
      </div>
      </>
    )
  }
  
  export default Profile;