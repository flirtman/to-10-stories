import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';

import Story from "../../../pages/story";


const setUp = (props={}) => {
    const component = shallow(<Story {...props} />);
    return component;
};

describe('Story page', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'story');
        expect(wrapper.length).toBe(1);
    });

});