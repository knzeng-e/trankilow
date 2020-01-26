import React from 'react';
import Users from './Users';
import Search from './search';
import { connect } from 'react-redux';



const Voyages = (props) => {

    console.log('Users ==> ', props.users)
    return (
        <div className="Voyages_list">
            <Search />
            <div className='container'>
                <Users usersList={props.users}/>
            </div>
              
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Voyages);