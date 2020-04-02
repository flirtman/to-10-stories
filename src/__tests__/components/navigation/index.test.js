import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';

import Navigation from "../../../components/navigation";


const setUp = (props={}) => {
    const component = shallow(<Navigation {...props} />);
    return component;
};

describe('Navigation component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'navigation');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const logo = findByTestAttr(component, 'logo');
        expect(logo.length).toBe(1);
    });

});