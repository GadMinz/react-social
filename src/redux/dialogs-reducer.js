const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer