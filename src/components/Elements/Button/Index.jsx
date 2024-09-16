const Button = (props) => {
  const { children, classname, customStyle, buttonHandler, isdisabled } = props;

  let isDisabled = isdisabled;

  if(isdisabled === undefined) {
    isDisabled = false
  }

  let button = (
    <button disabled={isDisabled} className={classname} style={customStyle}>
      {children}
    </button>
  );

  if (buttonHandler) {
    button = (
      <button disabled={isDisabled} onClick={buttonHandler} className={classname} style={customStyle}>
        {children}
      </button>
    );
  }

  return button;
};

export default Button;
