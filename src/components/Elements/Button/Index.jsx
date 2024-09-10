const Button = (props) => {
    const {children, classname, customStyle, onCLick} = props
    return (
        <button className={classname} style={customStyle}>
            {children}
        </button>
    )
}

export default Button;