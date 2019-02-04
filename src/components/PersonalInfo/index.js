//@flow
import React from "react";
import styled from "styled-components";

import { JOB_TITLES, DEPARTMENT_NAMES } from "../../constants/entities";

const StyledPersonalInfo = styled.div`
    display: flex;
    align-items: center;
`;

const UserImage = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: ${props => props.theme.fontSizeSmall};
    font-weight: ${props => props.theme.fontWeightBold};
    color: #fff;
    line-height: 30px;
    text-align: center;
    background: #fdbd52;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const UserNameAndRol = styled.div`
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

type PropsType = {
    ImageURL: string,
    Acronym: string,
    FirstName: string,
    LastName: string,
    DepartmentId: number,
    JobTitleId: number
};

class PersonalInfo extends React.Component<PropsType, { useAcronym: boolean }> {
    constructor(props: Object) {
        super(props);
        this.state = {
            useAcronym: true
        };
    }

    loadImage() {
        if (this.props.ImageURL) {
            var img = new Image(1, 1);
            img.src = this.props.ImageURL;
            img.onload = () => {
                this.setState({ useAcronym: false });
            };
        }
    }

    componentDidMount() {
        this.loadImage();
    }

    componentDidUpdate(prevProps: Object) {
        if (this.props.ImageURL !== prevProps.ImageURL) {
            this.setState({ useAcronym: true });
            this.loadImage();
        }
    }

    render() {
        const {
            ImageURL,
            Acronym,
            FirstName,
            LastName,
            DepartmentId,
            JobTitleId
        } = this.props;
        const { useAcronym } = this.state;
        const jobTitle = JOB_TITLES[JobTitleId];
        const departmentName = DEPARTMENT_NAMES[DepartmentId];
        return (
            <StyledPersonalInfo>
                <UserImage
                    style={
                        (useAcronym && {}) || {
                            backgroundImage: `url("${ImageURL}")`
                        }
                    }
                >
                    {useAcronym && <span>{Acronym}</span>}
                </UserImage>
                <UserNameAndRol>
                    {FirstName} {LastName}
                    <span>
                        {jobTitle}
                        {jobTitle && departmentName && " | "}
                        {departmentName}
                    </span>
                </UserNameAndRol>
            </StyledPersonalInfo>
        );
    }
}

export default PersonalInfo;
