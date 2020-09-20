const itemHeadingColor = "#425196";
const itemRowColor = "#425196";
const itemLabelColor = "#000";
const styles = {
  mainContent: {
    display: "flex",
    flexDirection: "column",
    "&>aside": {
      width: "100%",
    },
    "&>section": {
      width: "100%",
    },
    "@media screen and (min-width:700px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      "&>aside": {
        width: "250px",
      },
      "&>section": {
        width: "calc(100% - 260px)",
      },
    },
  },
  btnRow: {
    width: "100%",
    display: "flex",
    "&:not(:last-child)": {
      marginBottom: "5px",
    },
    "& button:nth-child(1)": {
      marginRight: "auto",
    },
    "& button:nth-child(2)": {
      marginLeft: "auto",
    },
  },
  itemRow: {
    width: "100%",
    color: itemRowColor,
    fontWeight: 500,
    "& label": {
      fontWeight: 700,
      maxWidth: "50px",
      color: itemLabelColor,
      fontSize: "15px",
    },
    "& ul": {
      listStylePosition: "inside",
    },
  },
  itemDescription: {
    "& h4": {
      color: itemHeadingColor,
      marginBottom: "20px",
    },
  },
  footer: {
    textAlign: "center",
    padding: "10px",
  },
};

export default styles;
