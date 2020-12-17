import 'moment/locale/fr';
import M from 'materialize-css';
import { connect } from 'react-redux';
import moment, { locale } from 'moment';
import React, { Component } from 'react';
import { fetchUsers } from '../store/actions/users_action';
import addTravelAction from '../store/actions/addTravel_action'; 

class AddTravel extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: props.userId,
            from: '',
            to: '',
            date: '',
            capacity: ''
        }
    }
    componentDidMount() {
        let context = this;
        this.props.getUsers();

     document.addEventListener('DOMContentLoaded', function() {
        M.Datepicker.init(
            document.querySelectorAll('.datepicker'), 
            {
                format: "dd/mm/yyyy",
                autoClose: true,
                container: document.getElementById('calendar'),
                onSelect: (selectedDate) => context.handleDate(selectedDate)
            });
        });
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleAddTravel = (e) => {
        const {usersError, usersLoading, usersList} = this.props;
        const newTravel = this.state;
        e.preventDefault();
        console.log("NOUVEAU VOYAGE ==> ", this.state);
        if (!usersLoading && !usersError){
            console.log("first user Id => ", usersList.users[3]._id)
            newTravel.userId = usersList.users[3]._id;
            newTravel.date = new Date();
            // const userId = getUserId(usersList, )
            console.log('[in handleTravel]: Travel to add ==> ', newTravel);
            this.props.addTravel(newTravel)
                // window.location = '/';
        }
        this.props.history.push('/')
    }

    handleDate = (selectedDate) => {
        this.setState({
            date: moment(selectedDate).format('L')
        })
    }

    render(){
        const {usersError, usersLoading, usersList} = this.props;

        if (usersError){
            return <div>Impossible de récupérer l'utilisateur ! {usersError.message}</div>
        }
        if (usersLoading){
            return <div className = "loading">Chargement des données ...</div>
        }
        return (
            <div className="container Form z-depth-5">
                <form className="" onSubmit = {this.handleAddTravel}>
                        <div className="row">
                            <div className="col iconField">
                                <i className="material-icons prefix">flight_takeoff</i>
                            </div>
                            <div className="col input-field">
                                <input type="text" id='from' placeholder="Départ" required={true} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col iconField">
                                <i className="material-icons prefix">flight_land</i>
                            </div>
                            <div className="col input-field">
                                <input type="text" id='to' placeholder="Arrivée" required={true} onChange={this.handleChange}/>
                            </div>
                        </div>
                    
                    <div className="row">
                        <div className="col iconField">
                            <i className="material-icons prefix">date_range</i>
                        </div>
                        <div className = "col input-field">
                            <input type="text" className="datepicker" required={true} placeholder="Date"/>
                        </div>
                    </div>
                    <div className = "row">
                        <div className="col iconField">
                            <i className="material-icons prefix">fitness_center</i>
                        </div>
                        <div className = "col inputField">
                            <input type="text" id='capacity'  pattern="[0-9]*" required={true} placeholder="Capacité disponible (kg)" required={true} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row center">
                        <button className="btn center indigo" type="submit">Enregistrer</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("[in add_travel] : state = ", state);
    return {
        usersError: state.users.error,
        usersLoading: state.users.loading,
        usersList: state.users.usersList,
        travels: state.travels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(fetchUsers()),
        addTravel: (newTravel) => dispatch(addTravelAction(newTravel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTravel);