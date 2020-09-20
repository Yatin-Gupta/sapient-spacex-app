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
  return (
    <React.Fragment>
      <div className={classes.card}>{props.children}</div>
    </React.Fragment>
  );
}

export default Card;
