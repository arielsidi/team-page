// @flow
import React from "react";
import styled from "styled-components";

import { getUsers } from "../../api/users";

const STATUS_LOADING = "LOADING";
const STATUS_READY = "READY";
const STATUS_FAILED = "FAILED";

const NotificationPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FailedPanel = styled(NotificationPanel)`
    color: ${props => props.theme.failedTextColor};
`;

class Main extends React.Component<
    {},
    { users: Array<Object>, status: string }
> {
    constructor(props: Object) {
        super(props);
        this.state = {
            users: [],
            status: STATUS_LOADING
        };
    }
    componentDidMount() {
        getUsers()
            .then(users => {
                this.setState({ users, status: STATUS_READY });
            })
            .catch(() => this.setState({ status: STATUS_FAILED }));
    }

    render() {
        switch (this.state.status) {
        case STATUS_READY:
            return <NotificationPanel>Team list ready</NotificationPanel>;
        case STATUS_FAILED:
            return (
                <FailedPanel>
                        Data load failed. Please verify your connection and
                        reload.
                </FailedPanel>
            );
        default:
            return (
                <NotificationPanel>
                        Loading team members list, please wait...
                </NotificationPanel>
            );
        }
    }
}

export default Main;
