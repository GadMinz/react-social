import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import Groups from "./components/Groups/Groups";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/groups' render={() => <Groups/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
