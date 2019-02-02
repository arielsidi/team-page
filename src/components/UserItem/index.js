//@flow
import React from "react";
import styled from "styled-components";

import PersonalInfo from "../PersonalInfo";
import ProgressBar from "../ProgressBar";

const ProgressBarContainer = styled.div`
    width: 150px;
    height: 18px;
`;

type PropsType = {
    ImageURL: string,
    Acronym: string,
    FirstName: string,
    LastName: string,
    DepartmentId: number,
    JobTitleId: number,
    UserKey: number,
    UsedDays: number,
    AvailableDays: number,
    EmployeeStartDate: string
};

const UserItem = (props: PropsType) => {
    const personalInfo = (({
        ImageURL,
        Acronym,
        FirstName,
        LastName,
        DepartmentId,
        JobTitleId
    }) => ({
        ImageURL,
        Acronym,
        FirstName,
        LastName,
        DepartmentId,
        JobTitleId
    }))(props);
    const { UserKey, UsedDays, AvailableDays, EmployeeStartDate } = props;

    return (
        <tr>
            <td>
                <PersonalInfo {...personalInfo} />
            </td>
            <td>{UserKey}</td>
            <td>
                <ProgressBarContainer>
                    <ProgressBar value={UsedDays} maxValue={AvailableDays} />
                </ProgressBarContainer>
            </td>
            <td>
                {new Date(EmployeeStartDate).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                })}
            </td>
        </tr>
    );
};

export default UserItem;
