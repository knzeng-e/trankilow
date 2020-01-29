import React from 'react';
import Users from './Users';
import Search from './Search';
import Travels from './Travels';
import { connect } from 'react-redux';



const Voyages = (props) => {

    console.log('Props ==> ', props)
    return (
        <div className="container">
            <Search />
            <div className='Voyage_list'>
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