/**
 * Button Stylesheet in JSS
 */
const buttonColor = "#c5e09b";
const buttonHoverColor = "#a6d05a";
const buttonActiveColor = "#7cba01";

const styles = {
  button: {
    backgroundColor: buttonColor,
    borderRadius: "5px",
    width: "80px",
    padding: "10px",
    textAlign: "center",
    border: "0px",
    fontWeight: "600",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: buttonHoverColor,
    },
  },
  activeButton: {
    backgroundColor: buttonActiveColor,
  },
};

export default styles;
