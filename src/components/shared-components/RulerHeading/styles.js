/**
 * RulerHeading Stylesheet in JSS
 */
const headingUnderlineColor = "#c1bdbc";
const styles = {
  headingDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "&>div": {
      width: "auto",
      padding: "0px 5px 2px 5px",
      border: "0px",
      textAlign: "center",
      borderBottom: `2px solid ${headingUnderlineColor}`,
      "& span": {
        letterSpacing: "1px",
      },
    },
  },
};

export default styles;
