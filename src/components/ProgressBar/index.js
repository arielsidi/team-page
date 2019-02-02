//@flow
import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
    background: ${props => props.theme.appBgColor};
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
    height: 100%;
    div {
        background: ${props => props.theme.primaryColor};
        height: 100%;
        border-top-left-radius: ${props => props.theme.borderRadius};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
    }
`;

const ProgressBar = (props: { value: number, maxValue: number }) => {
    const { value, maxValue } = props;
    const progress = maxValue ? Math.round((value * 100) / maxValue) : 0;
    const title = `${value}/${maxValue}`;
    return (
        <StyledProgressBar title={title}>
            <div style={{ width: progress + "%" }} title={title} />
        </StyledProgressBar>
    );
};

export default ProgressBar;
