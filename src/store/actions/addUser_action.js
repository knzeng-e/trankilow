const add_user = (newUser) => {
    return ({
        type: 'ADD_USER',
        payload: newUser
    })
}

export default add_user;