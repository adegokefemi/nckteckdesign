import classes from './PurchaseHistory.module.css';

const PurchaseHistory = () => {
    return (
        <div className="flex flex-column pt-3">
            <div className={classes.purchase}>
                <div className="flex">
                    <h4 className="m-0">Subtotal</h4>
                    <span>#2,497.00</span>
                </div>
                <div className="flex">
                    <h4 className="m-0">Estimated TAX</h4>
                    <span>#119.64</span>
                </div>
                <div className="flex">
                    <h4 className="m-0">Promotional Code:Z4KXLM94</h4>
                    <span>#-60.00</span>
                </div>
            </div>

            <hr className="hr"/> 
        </div>

    );
};

export default PurchaseHistory;