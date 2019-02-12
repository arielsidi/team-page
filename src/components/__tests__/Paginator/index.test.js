import React from "react";
import Paginator from "../../Paginator";
import { shallow } from "enzyme";
import { MAX_PAGE_BUTTONS } from "../../../util/pagination";

describe("Paginator", () => {
    const pageChangeHandlerMock = jest.fn();
    const wrapper = shallow(
        <Paginator
            pageCount="10"
            currentPage="2"
            pageChange={pageChangeHandlerMock}
        />
    );

    it("Should render a paginator with 10 pages and current page 2.", () => {
        expect(wrapper).toMatchSnapshot();
        expect(
            wrapper.find("#prevPageButton").hasClass("disabled")
        ).toBeFalsy();
        expect(
            wrapper.find("#nextPageButton").hasClass("disabled")
        ).toBeFalsy();
        expect(wrapper.find("a.active").text()).toEqual("2");
    });

    it("Click handlers are called to change the page", () => {
        wrapper.find("a").forEach(pageButton => {
            pageButton.simulate("click");
        });
        // Subtract 1 for the active page and add 2 for left and right buttons
        expect(pageChangeHandlerMock).toHaveBeenCalledTimes(
            MAX_PAGE_BUTTONS + 1
        );
        [1, 1, 3, 4, 5, 6, 7, 3].forEach((page, index) => {
            expect(pageChangeHandlerMock).toHaveBeenNthCalledWith(
                index + 1,
                page
            );
        });
    });

    it("Left Button disabled when current page is the first one.", () => {
        let wrapper = shallow(
            <Paginator pageCount="10" currentPage="1" pageChange={() => {}} />
        );
        expect(
            wrapper.find("#prevPageButton").hasClass("disabled")
        ).toBeTruthy();
        expect(
            wrapper.find("#nextPageButton").hasClass("disabled")
        ).toBeFalsy();
    });

    it("Right Button disabled when current page is the last one.", () => {
        let wrapper = shallow(
            <Paginator pageCount="10" currentPage="10" pageChange={() => {}} />
        );
        expect(
            wrapper.find("#prevPageButton").hasClass("disabled")
        ).toBeFalsy();
        expect(
            wrapper.find("#nextPageButton").hasClass("disabled")
        ).toBeTruthy();
    });
});
