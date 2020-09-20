import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

/**
 * Button Component
 * @param {*} props
 */
function Button(props) {
  const classes = useStyles();
  const { isactive, children, className } = props;
  let buttonClasses = classes.button;
  // Set class name by active status
  buttonClasses = isactive ? `${buttonClasses} ${classes.activeButton}` : buttonClasses;
  buttonClasses = className ? `${buttonClasses} ${className}` : buttonClasses;
  return (
    <React.Fragment>
      <button onClick={props.onClick} className={buttonClasses} aria-pressed={isactive ? "true" : "false"}>
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;
