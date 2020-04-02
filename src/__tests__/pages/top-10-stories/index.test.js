import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';

import Top10Stories from "../../../pages/top-10-stories";


const setUp = (props={}) => {
    const component = shallow(<Top10Stories {...props} />);
    return component;
};

describe('Top10stories page', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'top10stories');
        expect(wrapper.length).toBe(1);
    });

});