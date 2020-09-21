import React from "react";

/**
 * Loader Component with white overlay
 * @param {*} props
 */
function Loader(props) {
  return props.show ? (
    <div className="overlay">
      <div className="loader" data-testid="loader"></div>
    </div>
  ) : (
    <React.Fragment />
  );
}

export default Loader;
