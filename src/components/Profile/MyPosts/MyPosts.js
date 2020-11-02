import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormElement} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const Textarea = FormElement("textarea");

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

function MyPosts(props) {

    let postsElements = props.posts.map((p,i) => <Post message={p.message} likesCount={p.likesCount} key={i}/>)

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return <div>
        <h3>My Post</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}


export default MyPosts