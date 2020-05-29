import 'moment/locale/fr';
import M from 'materialize-css';
import { connect } from 'react-redux';
import moment, { locale } from 'moment';
import React, { Component } from 'react';
import AddUser from '../store/actions/addUser_action';

class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName : '',
            lastName: '',
            email: '',
            birthDate: '',
            address: '',
            phoneNumber: '',
            // ethereumAccount: ''
        }
    }

    componentDidMount() {
        console.log("'existing users before adding => ", this.props.existingUsers)
        var context = this
     document.addEventListener('DOMContentLoaded', function() {
        M.Datepicker.init(
            document.querySelectorAll('.datepicker'), 
            {
                //format: "dd/mm/yyyy",
                autoClose: true,
                container: document.getElementById('calendar'),
                onSelect: (selectedDate) => context.handleDate(selectedDate)
            });
        }); 
    }

    handleDate = (selectedDate) => {
        this.setState({
            // birthDate: moment(selectedDate).format('L')
            birthDate: moment(selectedDate).format()

        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser({
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName,
            "email" : this.state.email,
            "birthDate" : this.state.birthDate,
            "address": this.state.address,
            "phoneNumber": this.state.phoneNumber
        });
        //Redirect to the main page
        window.location = '/';
    }
    render() {
        return (
            <div className="newUser Form">
                <form className="" onSubmit = {this.handleSubmit}>
                    <div className="row">
                        <div className="col input-field">
                            <i className="material-icons prefix">person</i>
                            <input type="text" id='firstName' value={this.state.firstName} placeholder="Prénom" required={true} onChange={this.handleChange}/>
                        </div>
                        <div className="col input-field">
                            <i className="material-icons prefix">person</i>
                            <input type="text" id='lastName' value={this.state.lastName} placeholder="Nom" required={true} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col input-field">
                            <i className="material-icons prefix">home</i>
                            <input type="text" id='address' value={this.state.address} placeholder="Adresse" required={true} onChange={this.handleChange}/>
                        </div>
                        <div className="col input-field">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" className="datepicker" id="birthDate" placeholder="Date de naissance" required={true}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col input-field">
                            <i className="material-icons prefix">mail</i>
                            <input type="email" id="email" value={this.state.email} required={true} placeholder="email" onChange={this.handleChange}/>
                        </div>
                        <div className="col input-field">
                            <i className="material-icons prefix">phone</i>
                            <input type="tel" id="phoneNumber" value={this.state.phoneNumber}  pattern="[0-9]{10,14}" required={true} placeholder="Téléphone" required={true} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="center row">
                        <button className="btn center indigo" type="submit">Enregistrer</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (newUser) => dispatch(AddUser(newUser))
    }
}

export default connect(null, mapDispatchToProps)(CreateUser);
