import axios from 'axios';
import Search from './Search';
import Travels from "./Travels";
import pre from "../images/pre.jpg";
import { connect } from 'react-redux';
import plane from "../images/plane.jpg";
import React, { Component } from 'react';
import airport from '../images/airport.jpg';
import deep_blue from "../images/deep_blue.jpg";
import sky from "../images/Sky_with_Sun_Background.jpg"
import plane_take_off from "../images/plane_take_off.jpg";
import { fetchUsers } from '../store/actions/users_action';
import { fetchTravels } from '../store/actions/travels_action';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            travels: props.travelsList,
            users: ''
        }
    }

    componentDidMount() {
        this.props.getTravels();
        this.props.getUsers();
    }

    render(){
        const {travelsError, travelsLoading, travelsList} = this.props;
        const {usersError, usersLoading, usersList} = this.props;

        if (travelsError) {
            return <div>Error ! {travelsError.message}</div>
        }
        if (usersError){
            return <div>Error ! {usersError.message}</div>
        }
        if (travelsLoading || usersLoading || travelsList.length === 0 || usersList.length === 0){
            return <div className = "home loading">Chargement des données ...</div>
        }
        return (    
                <div className="home">
                    <section>
                        <Search />
                    </section>
                    
                    {/* <div className="parallax-container">
                        <div className="parallax"><img src={sky}/></div>
                    </div> */}
                    <div className="section white center">
                        <div className="row container">
                            <h5 className="center">Derniers voyages</h5>
                        <Travels travelsList = {travelsList.travels} usersList={usersList.users}/>
                        </div>
                    </div>
                    <div className="description parallax-container parallax-text">
                            <p className="white-text text-darken-3 lighten-3">Envoyez rapidement et simplement votre colis.</p>
                            <p className="white-text right text-darken-3 lighten-3">Trouvez votre transporteur.</p>
                        <h4 className="white-text center">Trankilow</h4>
                        <p className="white-text text-darken-3 lighten-3">Vos Kilos ont de la valeur.</p>
                        <p className="white-text right text-darken-3 lighten-3">Renforcez la communauté de voyageurs.</p>

                        <div className="parallax"><img src={airport}/>
                        </div>
                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getTravels: () => dispatch(fetchTravels()),
        getUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);