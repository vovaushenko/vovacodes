import { shallow } from 'enzyme';
import React from 'react';
import DummyComponent from './DummyComponent';

describe('Button', () => {
	const wrap = shallow(<DummyComponent dummyText="dummy Text" />);

	it('should render without throwing an error', () => {
		expect(wrap);
		expect(wrap.find('h2').text()).toBe('dummy Text');
	});
});
