import React from "react";
import Paginator from "../../Paginator";
import renderer from "react-test-renderer";

describe("Paginator", () => {
    it("Should render a paginator with 10 pages and current page 2.", () => {
        const tree = renderer
            .create(<Paginator pageCount="10" currentPage="2" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
