const add_travel = (newTravel) => {
    return ({
        type: 'ADD_TRAVEL',
        payload: newTravel
    })
}

export default add_travel;