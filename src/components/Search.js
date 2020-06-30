import M from 'materialize-css';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            depart: '',
            arrivee: '',
            travelDate: '',
            heure: '',
            foundTravels: ['tut']
        }
    }

    DateValue = React.createRef();

    componentDidMount() {
        var context = this
     document.addEventListener('DOMContentLoaded', function() {
        M.Datepicker.init(
            document.querySelectorAll('.datepicker'), 
            {
                format: "dd/mm/yyyy",
                autoClose: true,
                container: document.getElementById('calendar'),
                onSelect: (date) => context.handleDate(date)
            });
        }); 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("[Search] TravelsToFind ==> ", this.props.travelsList)
        const {depart, arrivee, travelDate} = this.state;
        const foundTravels = this.props.travelsList.travels.find(travel => {
            return travel.from.toLowerCase() === depart && travel.to.toLowerCase() === arrivee})
            console.log('result ==>', foundTravels)

        console.log("Recherche: ", depart, " - ", arrivee, " - ", travelDate);
        if (foundTravels != undefined) {
            this.setState({
                foundTravels: foundTravels
            })
            console.log(':-) Corresponding travels => ', foundTravels);
        }
        else {
            console.log(`:-( No travels found from ${depart} to ${arrivee}`)
        }
        
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value.toLowerCase()
        })
    }

    handleDate = (date) => {
        //console.log('Date choisie => ', e.target.value)
        //console.log("DDate => ", this.instances[0].el.date);
        console.log("Date en cours de selection => ", date)
        this.setState({
            travelDate: date
        })
    }

    render () {
        return (
            <div className = "container searchForm" >
                <form className = "" onSubmit = {this.handleSubmit}>
                        <div className = "row">
                            <div className = "col iconField">
                                <i className ="material-icons prefix">flight_takeoff</i>
                            </div>
                            <div className = "col">
                                <input placeholder = "Ville de départ" id="depart" required={true} type="text" onChange = {this.handleChange}/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col iconField">
                                <i className = "material-icons prefix">flight_land</i>
                            </div>
                            <div className = "col">
                                <input placeholder = "Ville d'arrivée" id="arrivee" required={true} type="text" onChange = {this.handleChange}/>
                            </div>
                        </div>
                        <div className="row calendar" id="calendar">
                            <div className = "col iconField">
                                <i className="material-icons white-text prefix">date_range</i>
                            </div>
                            <div className = "col">
                                <input type = "text" placeholder="Date" id="travelDate" value={this.state.travelDate} ref={this.DateValue} className="datepicker" onChange = {this.handleChange}/>
                            </div>
                            <div className = "col  m12 s12 l12">
                                <button className="btn right indigo" type="submit">valider</button>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
    

}


const mapStateToProps = (state) => {
    return {
        travelsList: state.travels.travelsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
