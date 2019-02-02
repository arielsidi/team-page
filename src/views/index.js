// @flow
import React from "react";
import Header from "./Header";
import Main from "./Main";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../styles/theme.woffu";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700');
  body {
    background-color: ${props => props.theme.appBgColor};
    font-family: ${props => props.theme.defaultFontFamily};
    font-weight: ${props => props.theme.fontWeightRegular};
    font-size: ${props => props.theme.fontSizeMedium};
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

const MainContainer = styled.div`
    padding: ${props => props.theme.panelSpacing * 4}px;
`;

const Application = () => (
    <ThemeProvider theme={theme}>
        <ApplicationContainer>
            <GlobalStyle />
            <Header />
            <MainContainer>
                <Main />
            </MainContainer>
        </ApplicationContainer>
    </ThemeProvider>
);

export default Application;
