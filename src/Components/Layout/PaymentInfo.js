import React, {Fragment} from 'react';
import Logo2 from '../../Assets/images/Logo2.PNG';
import classes from './PaymentInfo.module.css';
import card from '../../Assets/images/atmCard.PNG';
import Input from '../UI/Input'

const PaymentInfo = props => {
    return (
        <Fragment>
          <div className={classes.payment}>
            <div className="flex flex-column">
                <h3>Payment Information</h3>
                <h6>Choose your method of payment.</h6>
                <div>
                    <img src={card}  alt="Atm card icon" />   
                </div>
            </div>

            <div className="flex flex-column">
                <div className={classes.PaymentImage}>
                    <img src={Logo2} alt=" Payment platform icon"/>
                </div>
                <div className="flex flex-column pt-3">
                    <div className="flex">
                        <Input id="card_number" label="Credit Card Number" type="number"/>
                        <Input id="expiration_date" label="Expiration Date"/>
                    </div>
                    <div className="flex">
                        <Input id="security_code" label="Security Code" type="number"/>
                        <Input id="postal_code" label="Postal Code" type="number"/>
                    </div> 
                    <div className={classes.radio}>
                        <input type="radio" name="input" value="input" id="input"/>
                        <label for="input">Use this card for next time purchase</label>
                    </div> 
                    <button className={classes.button} type="submit">Add card</button>                 
                </div>
            </div>
          </div> 
          <hr className="hr"/> 
        </Fragment>
    );

};

export default PaymentInfo;