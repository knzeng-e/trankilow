import React from 'react';
import Search from './Search';
import Travels from "./Travels";
import pre from "../images/pre.jpg";
import { connect } from 'react-redux';
import plane from "../images/plane.jpg";
import deep_blue from "../images/deep_blue.jpg";
import sky from "../images/Sky_with_Sun_Background.jpg"
import plane_take_off from "../images/plane_take_off.jpg";


const Home = (props) => {
    return (
            <div className="home">
                <div className="section white center">
                    <Search />
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src={sky}/></div>
                </div>
                <div className="section white center">
                    <div className="row container">
                        <h5 className="center">Derniers voyages</h5>
                    <Travels travelsList = {props.travels} usersList={props.users}/>
                    </div>
                </div>
                <div className="parallax-container parallax-text">
                        <p className="white-text text-darken-3 lighten-3">Envoyez rapidement et simplement votre colis.</p>
                        <p className="white-text right text-darken-3 lighten-3">Trouvez votre transporteur.</p>
                    <h4 className="white-text center">Trankilow</h4>
                    <p className="white-text text-darken-3 lighten-3">Vos Kilos ont de la valeur.</p>
                    <p className="white-text right text-darken-3 lighten-3">Renforcez la communauté de voyageurs.</p>

                    <div className="parallax"><img src={plane}/>
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        travels: state.travels
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);