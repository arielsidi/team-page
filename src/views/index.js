// @flow
import React from "react";
import Header from "./Header";
import Main from "./Main";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../styles/theme.woffu";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.appBgColor};
    font-family: ${props => props.theme.defaultFontFamily};
    font-weight: normal;
    color: ${props => props.theme.textColor};
    padding: 0;
    margin: 0;
  }
`;

const ApplicationContainer = styled.div`
    padding: 0;
    margin: 0;
    height: 100vh;
`;

const Application = () => (
    <ThemeProvider theme={theme}>
        <ApplicationContainer>
            <GlobalStyle />
            <Header />
            <Main />
        </ApplicationContainer>
    </ThemeProvider>
);

export default Application;
