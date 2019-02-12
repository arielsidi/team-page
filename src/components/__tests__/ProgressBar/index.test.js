import React from "react";
import ProgressBar from "../../ProgressBar";
import renderer from "react-test-renderer";

describe("Progress bar", () => {
    it("Should render a progress bar with value 50 and maxvalue 100.", () => {
        const tree = renderer
            .create(<ProgressBar value="50" maxValue="100" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
