import { connect } from 'react-redux';
import React, {Component} from 'react';
import { fetchUsers } from '../store/actions/users_action';
import { fetchTravels } from '../store/actions/travels_action';

class TravelDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            web3: null,
            user: null,
        }
    }

    componentDidMount(){
        this.props.getTravels();
        this.props.getUsers();
    }

    render(){
       const travels = this.props.travelsList;
       console.log("My Travels ===> ", travels)
        return (
            <div className = "container travelDetails">
                <h5>{this.props.match.params.id}</h5>
                {console.log("Props: ", this.props)}
    
            </div>
        )
    }
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

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(fetchUsers()),
        getTravels: () => dispatch(fetchTravels()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelDetails);