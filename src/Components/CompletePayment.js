import classes from './CompletePayment.module.css';


const CompletePayment = () => {
    return (
        <div >
            <hr className="hr"/> 
            <div className={classes.complete}>
                <button className={classes.button} type="type">Completet payment</button>
                <span>AMOUNT:#2556.64</span>
            </div>
        </div>
    );
};

export default CompletePayment;