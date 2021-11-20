import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div className={classes.Input}>
            <label className="pb-3" htmlFor={props.id}>{props.label}</label>
            <input type={props.type || 'text'}
                    id={props.id} 
                    name={props.name || props.id} 
                    value={props.value}
                    onChange={props.onChange}/>
        </div>
    )
};

export default Input;