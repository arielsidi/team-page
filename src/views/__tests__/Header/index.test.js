import React from "react";
import Header from "../../Header";
import renderer from "react-test-renderer";

describe("Header", () => {
    it("Should render properly.", () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
