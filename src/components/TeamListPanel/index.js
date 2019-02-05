//@flow
import React from "react";
import styled from "styled-components";

import UserItem from "../UserItem";
import Paginator from "../Paginator";
import { getPage } from "../../util/pagination";

const ITEMS_PER_PAGE = 15;

const PanelContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px #c3c2c6;
    border-radius: ${props => props.theme.borderRadius};
`;

const SectionPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.panelSpacing}px;
`;

const HeaderPanel = styled(SectionPanel)`
    justify-content: space-between;
    h2 {
        padding: ${props => props.theme.panelSpacing}px;
        margin: 0;
        font-size: ${props => props.theme.fontSizeLarge};
    }
    input {
        margin-left: ${props => props.theme.panelSpacing}px;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        background: #f9f9f9;
        color: ${props => props.theme.secondaryColor};
        font-weight: ${props => props.theme.fontWeightBold};
        font-size: ${props => props.theme.fontSizeSmall};
        opacity: 0.6;
        height: ${props => props.theme.panelSpacing * 2}px;
    }
    td,
    th {
        padding: ${props => props.theme.panelSpacing}px;
        border: 1px solid ${props => props.theme.appBgColor};
        border-left: none;
        border-right: none;
        text-align: left;
    }
    th:first-child,
    td:first-child {
        padding-left: ${props => props.theme.panelSpacing * 3}px;
    }

    td:not(:first-child),
    th:not(:first-child) {
        text-align: center;
        > div {
            margin: auto;
        }
    }

    @media only screen and (max-width: 760px),
        (min-device-width: 768px) and (max-device-width: 1024px) {
        /* Force table to not be like tables anymore */
        table,
        thead,
        tbody,
        th,
        td,
        tr {
            display: block;
        }

        tr {
            border: 1px solid #ccc;
        }

        /* Hide table headers (but not display: none;, for accessibility) */
        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
        }

        td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
        }
        th:first-child,
        td:first-child {
            padding-left: 50%;
        }
        td:not(:first-child),
        th:not(:first-child) {
            text-align: left;
            > div {
                margin: 0;
            }
        }

        /*
	Label the data
	*/
        td:nth-of-type(1):before {
            content: "Información personal";
        }
        td:nth-of-type(2):before {
            content: "ID";
        }
        td:nth-of-type(3):before {
            content: "Vacaciones";
        }
        td:nth-of-type(4):before {
            content: "Fecha de incorporación";
        }
    }
`;

const StyledDateRange = styled.div`
    input {
        border: 1px solid ${props => props.theme.textColor};
        color: ${props => props.theme.textColor};
        font-size: ${props => props.theme.fontSizeMedium};
        opacity: 0.5;
    }
`;

class TeamListPanel extends React.Component<
    { users: Array<Object> },
    {
        usersPage: Array<Object>,
        filteredUsers: Array<Object>,
        currentPage: number,
        dateFrom: ?Date,
        dateTo: ?Date,
        pageCount: number
    }
> {
    constructor(props: Object) {
        super(props);
        this.state = {
            currentPage: 1,
            filteredUsers: props.users,
            usersPage: getPage(props.users, ITEMS_PER_PAGE, 1),
            pageCount: Math.ceil(props.users.length / ITEMS_PER_PAGE),
            dateFrom: null,
            dateTo: null
        };
    }

    pageChange = (page: number) => {
        this.setState(state => ({
            usersPage: getPage(state.filteredUsers, ITEMS_PER_PAGE, page),
            currentPage: page
        }));
    };

    dateChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        this.setState((state, props) => {
            const dateRange = {
                dateFrom: state.dateFrom,
                dateTo: state.dateTo
            };
            dateRange[fieldName] = fieldValue;

            const filteredUsers = props.users.filter(user => {
                let validDate = true;
                let date = new Date(user.EmployeeStartDate);
                if (dateRange.dateFrom) {
                    validDate = date >= new Date(dateRange.dateFrom);
                }
                if (validDate && dateRange.dateTo) {
                    validDate = date <= new Date(dateRange.dateTo);
                }
                return validDate;
            });

            return {
                [fieldName]: fieldValue,
                filteredUsers,
                usersPage: getPage(filteredUsers, ITEMS_PER_PAGE, 1),
                pageCount: Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
            };
        });
    };

    render() {
        const { usersPage, currentPage, pageCount } = this.state;
        return (
            <PanelContainer>
                <HeaderPanel>
                    <h2>Equipo</h2>
                    <StyledDateRange>
                        Filtrar por fecha de incorporaci&oacute;n
                        <input
                            name="dateFrom"
                            type="date"
                            onChange={this.dateChange}
                        />
                        <input
                            name="dateTo"
                            type="date"
                            onChange={this.dateChange}
                        />
                    </StyledDateRange>
                </HeaderPanel>

                <Table>
                    <thead>
                        <tr>
                            <th>Informaci&oacute;n personal</th>
                            <th>ID</th>
                            <th>Vacaciones</th>
                            <th>Fecha de incorporaci&oacute;n a la empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersPage.map((userData: Object, index: number) => (
                            <UserItem {...userData} key={index} />
                        ))}
                    </tbody>
                </Table>
                {pageCount > 1 && (
                    <SectionPanel>
                        <Paginator
                            pageCount={pageCount}
                            currentPage={currentPage}
                            pageChange={this.pageChange}
                        />
                    </SectionPanel>
                )}
            </PanelContainer>
        );
    }
}

export default TeamListPanel;
