import { checkPropTypes } from "prop-types";

export const findByTestAttr = (component, attr) => {
    const elem = component.find(`[data-test='${attr}']`);
    return elem;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(
        component.propTypes,
        expectedProps,
        'props',
        component.name
    );
    return propsErr;
};