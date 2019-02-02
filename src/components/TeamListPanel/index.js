//@flow
import React from "react";
import styled from "styled-components";

import UserItem from "../UserItem";

const PanelContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px #c3c2c6;
    border-radius: ${props => props.theme.borderRadius};
`;

const HeaderPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.panelSpacing}px;
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

const TeamListPanel = (props: { users: Array<Object> }) => (
    <PanelContainer>
        <HeaderPanel>
            <h2>Equipo</h2>
            <div>
                Filtrar por fecha de incorporaci&oacute;n
                <input id="dateFrom" type="date" />
                <input id="dateTo" type="date" />
            </div>
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
                {props.users.map((userData: Object, index: number) => (
                    <UserItem {...userData} key={index} />
                ))}
            </tbody>
        </Table>
    </PanelContainer>
);

export default TeamListPanel;
