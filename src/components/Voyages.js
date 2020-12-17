import React from 'react';
import Users from './Users';
import Search from './Search';
import Travels from './Travels';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions/users_action';
import { fetchTravels } from '../store/actions/travels_action';



const Voyages = (props) => {

    console.log('Props ==> ', props)
    return (
        <div className="container">
            <Search />
            <div className='Voyage_list'>
                <Travels travelsList = {props.travelsList} usersList={props.usersList}/>
            </div>
              
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        travelsError: state.travels.error,
        travelsLoading: state.travels.loading,
        travelsList: state.travels.travelsList,
        
        usersError: state.users.error,
        usersLoading: state.users.loading,
        usersList: state.users.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTravels: () => dispatch(fetchTravels()),
        getUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Voyages);