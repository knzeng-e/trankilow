import $ from 'jquery';
import M from 'materialize-css';
import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            depart: '',
            arrivee: '',
            date: '',
            heure: "",
        }
    }

    options = {
        autoClose: true,
        container: document.getElementById('calendar'),
        onSelect: (date) => {console.log("selceted date =====> ", date)}
        
    }

    componentWillMount() {
        console.log("Ready set go")
    }
    componentDidMount() {
     document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, this.options);
        }); 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {depart, arrivee, date} = this.state;
        console.log("Recherche: ", depart, " - ", arrivee, " - ", date)
    }

    handleDeparture = (event) => {
        event.preventDefault();
        this.setState({
            depart: event.target.value
        })
    }

    handleArrival = (event) => {
        event.preventDefault();
        this.setState({
            arrivee: event.target.value,
        })
    }

    handleDate = (e) => {
        e.preventDefault();
        console.log('Date choisie => ', e.target.value)
        console.log("DDate => ", this.instances[0].el.date);
        this.setState({date: e.target.value })
    }

    render () {
        return (
            <div className = "Search container" style = {searchBarStyle}>
                <form className="" onSubmit = {this.handleSubmit}>
                        <div className=" row">
                            <div className="col">
                                <input placeholder="Ville de départ" type="text" onChange = {this.handleDeparture}/>
                                <input placeholder = "Ville d'arrivée" type="text" onChange = {this.handleArrival}/>
                                <div className="row calendar" id="calendar">
                                    <div className = "col">
                                        <input type = "text" placeholder="Date" className="datepicker" onChange = {this.handleDate}/>
                                    </div>
                                    <div className = "col  m12 s12 l12">
                                        <button className="btn right indigo" type="submit">valider</button>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </form>
            </div>
        )
    }
    

}

const searchBarStyle = {
    marginTop: '2.1%',
}

export default Search;