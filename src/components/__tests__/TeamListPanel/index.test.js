import React from "react";
import TeamListPanel from "../../TeamListPanel";
import { shallow } from "enzyme";

describe("Team list panel", () => {
    const users = [
        {
            ImageURL: "",
            Acronym: "JR",
            FirstName: "John",
            LastName: "Rambo",
            DepartmentId: 1910,
            JobTitleId: 12332,
            UserKey: 31232,
            UsedDays: 11,
            AvailableDays: 8,
            EmployeeStartDate: "2005-01-03T00:00:00.000"
        },
        {
            ImageURL: "",
            Acronym: "JR",
            FirstName: "John",
            LastName: "Rambo",
            DepartmentId: 1910,
            JobTitleId: null,
            UserKey: 31232,
            UsedDays: 11,
            AvailableDays: 8,
            EmployeeStartDate: "2005-01-03T00:00:00.000"
        }
    ];
    it(`Should render panel with data: ${JSON.stringify(users)}.`, () => {
        let wrapper = shallow(<TeamListPanel users={users} />);
        expect(wrapper).toMatchSnapshot();
    });
});
