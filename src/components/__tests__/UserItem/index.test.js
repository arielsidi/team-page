import React from "react";
import UserItem from "../../UserItem";
import { shallow } from "enzyme";

describe("User item", () => {
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
        it(`Should render item with data: ${JSON.stringify(data)}.`, () => {
            let wrapper = shallow(<UserItem {...data} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
