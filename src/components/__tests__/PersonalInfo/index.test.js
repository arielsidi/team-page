import React from "react";
import PersonalInfo from "../../PersonalInfo";
import { shallow } from "enzyme";

describe("PersonalInfo", () => {
    const userData = [
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
    userData.forEach(data => {
        it(`Should render panel with data: ${JSON.stringify(data)}.`, () => {
            let wrapper = shallow(<PersonalInfo {...data} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
