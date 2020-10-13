import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://www.pngkey.com/png/full/19-195490_png-poop-black-and-white-download-poop-emoji.png'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;