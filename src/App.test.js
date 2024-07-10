import React from 'react';
import renderer from 'react-test-renderer';
import { LoginForm } from "./components/LoginForm";


test('renders correctly', () => {
const component = renderer.create(<LoginForm />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});