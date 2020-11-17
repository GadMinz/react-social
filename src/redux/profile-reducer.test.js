import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Test 1', likesCount: 23},
        {id: 2, message: 'Test 2', likesCount: 12}
    ]
}

it('length of post should be incremented', () => {
    let action = addPostActionCreator('Test text')
    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(3)
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('Test text')
    let newState = profileReducer(state,action)

    expect(newState.posts[2].message).toBe('Test text')
});

it('after deleting length of messages should be incremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(1)
});

it(`after deleting length of messages shouldn't be incremented if id is incorrect`, () => {
    let action = deletePost(999999999)
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(2)
});
