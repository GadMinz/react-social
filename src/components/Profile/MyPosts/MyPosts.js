import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTexActionCreator} from "../../../redux/profile-reducer";

function MyPosts(props) {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTexActionCreator(text))
    }

    return <div>
        <h3>My Post</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Опубликовать</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts