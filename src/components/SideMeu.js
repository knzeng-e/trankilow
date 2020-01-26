import React from 'react';
import Voyages from './Voyages';
import { Switch, BrowserRouter, Link} from 'react-router-dom';

const sidePanel = () => {
    return (
        <div className="SideMenu">
            <BrowserRouter>
                <Switch>
                    <Link to = {Voyages}>
                        Consulter les derniers voyages
                    </Link>
                </Switch>
                <Switch>
                    <Link to = {Voyages}>
                        Consulter les autres voyages
                    </Link>
                </Switch>
                <Switch>
                    <Link to = {Voyages}>
                        Consulter les derniers voyages
                    </Link>
                </Switch>
                <Switch>
                    <Link to = {Voyages}>
                        Consulter les autres voyages
                    </Link>
                </Switch>
         </BrowserRouter>
        </div>
        
    )
}

export default sidePanel;