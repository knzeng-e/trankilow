const initialState = {
    users: [
        {
            id: 1,
            nom: 'Nzeng',
            prenom: 'Kevin',
            adresse: '3 Rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 21,
            nbSent: 4,
        },
        {
            id: 2,
            nom: 'Manfoumbi',
            prenom: 'Glenn',
            adresse: '3 rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 42,
            nbSent: 2,
        },
        {
            id: 3,
            nom: 'Endama Mba',
            prenom: 'David',
            adresse: '3 rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 42,
            nbSent: 2,
        },
        {
            id: 4,
            nom: 'Ogandaga',
            prenom: 'Randolph',
            adresse: '3 rue Edith Piaf',
            tel: '0767576964',
            nbProposals: 42,
            nbSent: 2,
        },
    ],
    travels: [] 
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