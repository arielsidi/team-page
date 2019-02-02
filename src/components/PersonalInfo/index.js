//@flow
import React from "react";
import styled from "styled-components";

const StyledPersonalInfo = styled.div`
    display: flex;
    align-items: center;
`;

const MemberImage = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: ${props => props.theme.fontSizeSmall};
    font-weight: ${props => props.theme.fontWeightBold};
    color: #fff;
    line-height: 30px;
    text-align: center;
    background: #fdbd52;
`;

const MemberNameAndRol = styled.div`
    margin-left: ${props => props.theme.panelSpacing * 2}px;
    font-size: ${props => props.theme.fontSizeSmall};
    span {
        display: block;
        color: ${props => props.theme.secondaryColor};
        font-weight: ${props => props.theme.fontWeightLight};
        font-size: ${props => props.theme.fontSizeXsmall};
        padding-top: 3px;
    }
`;

const PersonalInfo = props => (
    <StyledPersonalInfo>
        <MemberImage>JM</MemberImage>
        <MemberNameAndRol>
            Alberto García
            <span>Head of SEO | Marketing</span>
        </MemberNameAndRol>
    </StyledPersonalInfo>
);

export default PersonalInfo;
