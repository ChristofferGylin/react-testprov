const Button = (props) => {

    const { title, callback } = props;

    return (
        <button onClick={callback}>{title}</button>
    )

}

export default Button;