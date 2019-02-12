import React from "react";
import ProgressBar from "../../ProgressBar";
import { shallow } from "enzyme";

describe("Progress bar", () => {
    it("Should render a progress bar with value 50 and maxvalue 100.", () => {
        let wrapper = shallow(<ProgressBar value="50" maxValue="100" />);
        expect(wrapper).toMatchSnapshot();
    });
});
