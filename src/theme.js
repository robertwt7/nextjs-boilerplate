import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#07748B",
    },
    secondary: {
      main: "#FF9000",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
    },
    error: red,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
