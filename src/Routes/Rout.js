import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Image from '../Pages/Image';
import EditProfile from '../Pages/EditProfile';
import UploadPost from '../Pages/UploadPost';
import FollowersList from '../Pages/FollowersList';
import FollowedList from '../Pages/FollowedList';
import Search from '../Pages/Search';
import AdminUsers from '../Pages/AdminUsers';
import AdminUserEditInfo from '../Pages/AdminUserEditInfo';
import AddNewUser from '../Pages/AddNewUser';

function Rout() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/publicationDetails" element={<Image />} />
        <Route exact path="/editProfile" element={<EditProfile />} />
        <Route exact path="/uploadPost" element={<UploadPost />} />
        <Route exact path="/followers" element={<FollowersList />} />
        <Route exact path="/usersFollowing" element={<FollowedList />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/admin" element={<AdminUsers />} />
        <Route exact path="/userEditInfo" element={<AdminUserEditInfo />} />
        <Route exact path="/addNewUser" element={<AddNewUser />} />
        
        {/* <Route exact path="/search" element={<Search/>}/> */}
      </Routes>
    </Router>
  );
}

export default Rout;
