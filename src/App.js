import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import Groups from "./components/Groups/Groups";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Headers/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/groups' render={() => <Groups/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
