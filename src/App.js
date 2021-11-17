import React from "react";
import { createBrowserHistory } from "history";
import Rotes from "./routes";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

export const history = createBrowserHistory();

function App() {
  return (
  <>
  <ThemeProvider theme={theme}>
    <TopBar />
    <br/>
    <br/>
    <Header/>
    <br/>
    <br/>  
    <Rotes history={history} />
    </ThemeProvider>
  </>
  );
}

export default App;
