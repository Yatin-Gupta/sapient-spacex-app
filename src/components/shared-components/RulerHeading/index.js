import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

/**
 * Ruler Heading Component
 * @param {*} props
 */
function RulerHeading(props) {
  const classes = useStyles();
  let className = props.className ? `${classes.headingDiv} ${props.className}` : classes.headingDiv;

  return (
    <React.Fragment>
      <div {...props} className={className}>
        <div role="heading" aria-level="2">
          <span>{props.text}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RulerHeading;
