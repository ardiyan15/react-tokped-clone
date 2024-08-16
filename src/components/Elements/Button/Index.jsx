const Button = (props) => {
    const {children, classname, customStyle} = props
    return (
        <button className={classname} style={customStyle}>
            {children}
        </button>
    )
}

export default Button;