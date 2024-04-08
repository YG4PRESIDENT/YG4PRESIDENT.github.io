import React from "react";
import { ThemeProvider } from "@emotion/react";
import GameBoard from "./components/GameBoard";
import theme from "../theme";    

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GameBoard />
        </ThemeProvider>        
    );
};

export default App;