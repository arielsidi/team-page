//@flow
import React from "react";
import styled from "styled-components";

import PersonalInfo from "../PersonalInfo";

const HolidaysBar = styled.div`
    background: #ecedf2;
    border-radius: ${props => props.theme.borderRadius};
    width: 150px;
    height: 18px;
    div {
        background: ${props => props.theme.primaryColor};
        height: 100%;
        width: 50%;
        border-top-left-radius: ${props => props.theme.borderRadius};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
    }
`;

const MemberItem = props => {
    // const {personalInfo: }
    return (
        <tr>
            <td>
                <PersonalInfo />
            </td>
            <td>53231</td>
            <td>
                <HolidaysBar>
                    <div />
                </HolidaysBar>
            </td>
            <td>12/02/2018</td>
        </tr>
    );
};

export default MemberItem;
