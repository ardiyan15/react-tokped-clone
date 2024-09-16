const Button = (props) => {
  const { children, classname, customStyle, buttonHandler } = props;

  let button = (
    <button className={classname} style={customStyle}>
      {children}
    </button>
  );

  if (buttonHandler) {
    button = (
      <button onClick={buttonHandler} className={classname} style={customStyle}>
        {children}
      </button>
    );
  }

  return button;
};

export default Button;
