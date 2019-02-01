import React from "react";
import styled from "styled-components";

import logoImage from "../../assets/woffu-logo.png";

const StyledHeader = styled.header`
    background: ${props => props.theme.primaryColor};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

const Logo = styled.h1`
    margin: 0;
    padding-top: 5px;
    > img {
        width: 91px;
        height: 25px;
    }
    > span {
        color: #ffffff;
        margin-left: 4px;
        font-size: ${props => props.theme.fontSizeXsmall};
        font-weight: normal;
        opacity: 0.7;
    }
`;

const Header = () => (
    <StyledHeader>
        <Logo>
            <img src={logoImage} alt="Woffu HR Suite" />
            <span>HR Suite</span>
        </Logo>
    </StyledHeader>
);

export default Header;
