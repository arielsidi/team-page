//@flow
import React from "react";
import styled from "styled-components";

import { createPages } from "../../util/pagination";

const Pages = styled.div`
    display: inline-block;
    border: 1px solid ${props => props.theme.appBgColor};

    a {
        color: ${props => props.theme.primaryColor};
        font-size: 15px;
        float: left;
        padding: 8px 13px;
        text-decoration: none;
        transition: background-color 0.3s;
    }

    a:not(:first-child) {
        border-left: 1px solid ${props => props.theme.appBgColor};
    }

    a.active {
        background-color: ${props => props.theme.primaryColor};
        color: white;
        border: 1px solid ${props => props.theme.primaryColor};
    }

    a.disabled {
        color: ${props => props.theme.textColor};
        opacity: 0.7;
    }

    a:hover:not(.active):not(.disabled) {
        background-color: ${props => props.theme.appBgColor};
    }

    a.active,
    a.disabled {
        cursor: default;
    }
`;

type PropsType = {
    pageCount: number,
    currentPage: number,
    pageChange: (page: number) => void
};

const Paginator = ({ pageCount, currentPage, pageChange }: PropsType) => {
    pageCount = Number(pageCount);
    currentPage = Number(currentPage);
    const pages = createPages(pageCount, currentPage);

    return (
        <Pages>
            <a
                href="#"
                id="prevPageButton"
                {...(currentPage == 1 && { className: "disabled" }) || {
                    onClick: () => pageChange(currentPage - 1)
                }}
            >
                &lt;
            </a>
            {pages.map((number, index) => (
                <a
                    href="#"
                    key={number}
                    {...(currentPage == number && { className: "active" }) || {
                        onClick: () => pageChange(number)
                    }}
                >
                    {(number !== 1 && index == 0 && "..") ||
                        (number !== pageCount &&
                            index == pages.length - 1 &&
                            "..") ||
                        number}
                </a>
            ))}
            <a
                href="#"
                id="nextPageButton"
                {...(currentPage == pageCount && { className: "disabled" }) || {
                    onClick: () => pageChange(currentPage + 1)
                }}
            >
                &gt;
            </a>
        </Pages>
    );
};

export default Paginator;
