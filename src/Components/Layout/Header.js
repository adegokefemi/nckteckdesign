import React, {Fragment} from 'react';
import pics from '../../Assets/images/Logo.png';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h4 className="px-3 m-0">TRIPS</h4>
                <h4 className="px-3 m-0">RECENTLT VIEWEWD</h4>
                <h4 className="px-3 m-0">BOOKINGS</h4>
                <div>
                 <img src={pics} className={classes.logo} alt="A square pics"/>
                </div>
            </header>
            <hr className="hr"/>
        </Fragment>
    );

};

export default Header;