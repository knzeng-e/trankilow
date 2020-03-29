import 'moment/locale/fr';
import M from 'materialize-css';
import { connect } from 'react-redux';
import moment, { locale } from 'moment';
import React, { Component } from 'react';
import addTravelAction from '../store/actions/addTravel_action'; 

class AddTravel extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: 1,
            from: '',
            to: '',
            date: '',
            capacity: ''
        }
    }
    componentDidMount() {
        var context = this
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
        e.preventDefault();
        console.log("NOUVEAU VOYAGE ==> ", this.state)
        this.props.addTravel(this.state);
        this.props.history.push('/')
    }

    handleDate = (selectedDate) => {
        this.setState({
            date: moment(selectedDate).format('L')
        })
    }
    render(){
        
        return (
            <div className="newTravel Search">
                <form className="" onSubmit = {this.handleAddTravel}>
                    <div className="row">
                        <div className="col input-field">
                            <i className="material-icons prefix">flight_takeoff</i>
                            <input type="text" id='from' placeholder="Départ" required={true} onChange={this.handleChange}/>
                        </div>
                        <div className="col input-field">
                            <i className="material-icons prefix">flight_land</i>
                            <input type="text" id='to' placeholder="Arrivée" required={true} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" className="datepicker" required={true} placeholder="Date"/>
                        </div>
                        <div className="col input-field">
                            <i className="material-icons prefix">fitness_center</i>
                            <input type="text" id='capacity' required={true} placeholder="Capacité disponible (kg)" required={true} onChange={this.handleChange}/>
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

const mapStateToProps = state => {
    return {
        travels: state.travels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTravel: (newTravel) => dispatch(addTravelAction(newTravel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTravel);