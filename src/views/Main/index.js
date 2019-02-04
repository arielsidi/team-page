//@flow
import React from "react";
import styled from "styled-components";

import { getUsersPaginated } from "../../api/users";
import TeamListPanel from "../../components/TeamListPanel";

const STATUS_LOADING = "LOADING";
const STATUS_READY = "READY";
const STATUS_FAILED = "FAILED";

const ITEMS_PER_PAGE = 15;

const NotificationPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-weight: ${props => props.theme.fontWeightBold};
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
            currentPage: 1,
            totalPages: 0,
            status: STATUS_LOADING
        };
    }

    componentDidMount() {
        this.pageChange(1);
    }

    pageChange = page => {
        getUsersPaginated(ITEMS_PER_PAGE, page)
            .then(result => {
                this.setState({
                    users: result.users,
                    pageCount: result.pageCount,
                    status: STATUS_READY,
                    currentPage: page
                });
            })
            .catch(() => this.setState({ status: STATUS_FAILED }));
    };

    render() {
        switch (this.state.status) {
        case STATUS_READY:
            return (
                <TeamListPanel
                    users={this.state.users}
                    pageCount={this.state.pageCount}
                    currentPage={this.state.currentPage}
                    pageChange={this.pageChange}
                />
            );
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
