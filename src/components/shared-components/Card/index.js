import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

/**
 * Card Component
 * @param {*} props
 */
function Card(props) {
  const classes = useStyles();
  let className = props.className ? `${classes.card} ${props.className}` : classes.card;
  return (
    <React.Fragment>
      <div className={className} data-testid="card">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Card;
