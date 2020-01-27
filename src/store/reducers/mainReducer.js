const initialState = {
    users: [
        {
            id: 1,
            nom: 'Nzeng',
            prenom: 'Kevin',
            adresse: '3 Rue Edith Piaf',
            tel: '0767576964',
            mail: 'kevin.nzeng@gmail.com',
            nbProposals: 21,
            nbSent: 4,
        },
        {
            id: 2,
            nbSent: 2,
            nbProposals: 42,
            prenom: 'Glenn',
            nom: 'Manfoumbi',
            tel: '0767576964',
            adresse: '3 rue Edith Piaf',
            mail: 'glenn.manfoumbi@gmail.com',
        },
        {
            id: 3,
            nom: 'Endama Mba',
            prenom: 'David',
            adresse: '3 rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 42,
            nbSent: 2,
            mail: 'david.endama@gmail.com',

        },
        {
            id: 4,
            nom: 'Ogandaga',
            prenom: 'Randolph',
            adresse: '3 rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 42,
            nbSent: 2,
            mail: 'randolph.ogandaga@gmail.com',

        },
    ],
    travels: [
        {
            userId: 1,
            from: 'Paris',
            to: 'Madrid',
            date: '20/02/2020',
            capacity: 23
        },
        {
            user_id: 2,
            from: 'Libreville',
            to: 'Toulouse',
            date: '20/02/2020',
            capacity: 21
        },
    ] 
}

const mainReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TRAVEL':
            return {
                ...state,
                travels: [...state.voyages, action.payload]
            }
        
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default: return state;
    }

}
export default mainReducer;