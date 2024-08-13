const Button = (props) => {
    const {children, classname, customStyle} = props
    console.log(customStyle)
    return (
        <button className={classname} style={customStyle}>
            {children}
        </button>
    )
}

export default Button;