import axios from 'axios';
// const add_user = (newUser) => {
//     return ({
//         type: 'ADD_USER',
//         payload: newUser
//     })
// }

const add_user = (newUser) => {
    return (dispatch, getState) => {
        // Make async call to the MongoDb database
        console.log("sending newUser to te database => ", newUser)
        axios.post("http://localhost:5000/users/add", newUser)
        .then(() => {
            console.log('IN addUser_action.js line 14: user added => ', newUser)
            axios.get("http://localhost:5000/users")
                .then((users) => {
                    dispatch({
                        type: 'ADD_USER',
                        payload: users
                    })
                })
        })
        .catch(error => console.log('ERROR ==> ', error))
    }
}

export default add_user;