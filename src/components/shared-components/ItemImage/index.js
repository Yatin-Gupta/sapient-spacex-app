import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

/**
 * Image component used in every spaceX Program Item
 * @param {*} props
 */
function ItemImage(props) {
  const classes = useStyles();
  if (!props.src) {
    return <React.Fragment />;
  }
  const imgDivClassName = props.className ? `${classes.imgDiv} ${props.className}` : classes.imgDiv;
  return (
    <React.Fragment>
      <div {...props} className={imgDivClassName} role="img" aria-label={props.imgDesc ? props.imgDesc : ""}>
        <img src={props.src} alt={props.alt ? props.alt : "spacex-launch-program-image"} />
      </div>
    </React.Fragment>
  );
}

export default ItemImage;
