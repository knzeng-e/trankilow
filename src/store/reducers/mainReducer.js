import axios from 'axios';

const getUsers = () => {
    // axios.get("http://localhost:5000/users")
    //     .then(users => {
    //         console.log("initial users ==> ", users.data)
    //         if (users.data.length)
    //         {
    //             console.log('OK')
    //             return users.data;
    //         }
    //         console.log('NOT OK ')
    //         return []
    //     })
    //     .catch(error => console.log('getUsers Error : ', error));
}

const initialState = {
    //Use axios to get the data from the database
    // users: [
    //     {
    //         id: 1,
    //         nom: 'Nzeng',
    //         prenom: 'Kevin',
    //         adresse: '3 Rue Edith Piaf',
    //         tel: '0767576964',
    //         mail: 'kevin.nzeng@gmail.com',
    //         nbProposals: 21,
    //         nbSent: 4,
    //     },
    //     {
    //         id: 2,
    //         nbSent: 2,
    //         nbProposals: 42,
    //         prenom: 'Glenn',
    //         nom: 'Manfoumbi',
    //         tel: '0767576964',
    //         adresse: '3 rue Edith Piaf',
    //         mail: 'glenn.manfoumbi@gmail.com',
    //     },
    //     {
    //         id: 3,
    //         nom: 'Endama Mba',
    //         prenom: 'David',
    //         adresse: '3 rue Edith Piaf',
    //         tel: '0767576964',
    //         nbProposals: 42,
    //         nbSent: 2,
    //         mail: 'david.endama@gmail.com',

    //     },
    //     {
    //         id: 4,
    //         nom: 'Ogandaga',
    //         prenom: 'Randolph',
    //         adresse: '3 rue Edith Piaf',
    //         tel: '0767576964',
    //         nbProposals: 42,
    //         nbSent: 2,
    //         mail: 'randolph.ogandaga@gmail.com',

    //     },
    // ],
    users: getUsers(),
    travels: [
        {
            userId: 1,
            from: 'paris',
            to: 'madrid',
            date: '20/02/2020',
            capacity: 23,
            status: 'active',
        },
        {
            userId: 2,
            from: 'libreville',
            to: 'toulouse',
            date: '20/02/2020',
            capacity: 21,
            status: 'active',
        },
        {
            userId: 4,
            from: 'bordeaux',
            to: 'ouagadougou',
            date: '09/07/2020',
            capacity: 12,
            status: 'active',
        },
        {
            userId: 3,
            from: 'nantes',
            to: 'grenoble',
            date: '10/05/2020',
            capacity: 5,
            status: 'active',
        },
        {
            userId: 2,
            from: 'libreville',
            to: 'le mans',
            date: '29/01/2020',
            capacity: 42,
            status: 'active',
        },
    ] 
}

const mainReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TRAVEL':
            const newTravel = {
                ...state,
                travels: [...state.travels, action.payload]
            }
            console.log("ADD_TRAVEL to STore ==> ", newTravel)
            return newTravel
        
        case 'ADD_USER':
            console.log('Adding User reducer ==> ', action.payload)
            return {
                //...state,
                //users: [...state.users, action.payload]
                users: action.payload

            }
        default: return state;
    }

}
export default mainReducer;