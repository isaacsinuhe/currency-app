import 'raf/polyfill';
import { configure, shallow, render, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};