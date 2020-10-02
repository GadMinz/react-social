import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Мой профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>Друзья</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/photos" activeClassName={s.active}>Фотографии</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/groups" activeClassName={s.active}>Сообщества</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Настройка</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;