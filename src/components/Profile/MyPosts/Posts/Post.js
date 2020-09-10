import React from "react";
import s from './Post.module.css'

function Post(props) {
    return <div className={s.item}>
        <img src='https://sun7-7.userapi.com/c308231/v308231164/5c2c/7oQAggVBm5U.jpg'/>
        {props.message}
        <div>
            <span>Likes {props.likesCount}</span>
        </div>
    </div>
}

export default Post