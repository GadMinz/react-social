import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import Groups from "./components/Groups/Groups";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/groups' render={() => <Groups/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
