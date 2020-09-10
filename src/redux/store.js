import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Jopa', likesCount: 23},
                {id: 2, message: 'Jopas', likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Povel'},
                {id: 2, name: 'Donil'},
                {id: 3, name: 'POMOYKA'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Jopa'},
                {id: 3, message: 'Govno'},
                {id: 4, message: 'Ti Huilo'},
                {id: 5, message: 'Net, ti'}
            ],
            newMessageBody:''
        },
        sideBar: {

        }

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}


export default store
window.store = store