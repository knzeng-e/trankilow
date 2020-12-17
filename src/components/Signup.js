import React from 'react';
import { connect } from 'react-redux';
import CreateUser from './CreateUser';

const Signup = (props) =>  {
    return (
        <CreateUser existingUsers={props.existingUsers}/>
    )
}

const mapStateToProps = (state) => {
    return {
        existingUsers: state.users
    }
}

export default connect(mapStateToProps, null)(Signup);