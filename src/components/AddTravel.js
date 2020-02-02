import React from 'react';

const AddTravel = () => {
    return (
        <div className="newTravel Search">
            <form>
                <div className="row">
                    <div className="col input-field">
                        <i className="material-icons prefix">flight_takeoff</i>
                        <input type="text" placeholder="Départ"/>
                    </div>
                    <div className="col input-field">
                        <i className="material-icons prefix">flight_land</i>
                        <input type="text" placeholder="Arrivée"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field">
                        <i className="material-icons prefix">date_range</i>
                        <input type="text" className="datepicker" placeholder="Date"/>
                    </div>
                    <div className="col input-field">
                        <i className="material-icons prefix">fitness_center</i>
                        <input type="text" placeholder="Capacité (kg)"/>
                    </div>
                </div>
                <div className="center row">
                        <button className="btn center indigo" type="submit">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}

export default AddTravel;