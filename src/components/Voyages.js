import React from 'react';
import Users from './Users';
import Search from './search';
import Travels from './Travels';
import { connect } from 'react-redux';



const Voyages = (props) => {

    console.log('Props ==> ', props)
    return (
        <div>
            <Search />
            <div className='Voyage_list container'>
                <Travels travelsList = {props.travels} usersList={props.users}/>
            </div>
              
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        travels: state.travels,

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Voyages);