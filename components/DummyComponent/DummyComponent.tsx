import React from 'react';

export interface DummyProps {
	dummyText: string;
}

const DummyComponent = ({ dummyText }: DummyProps): JSX.Element => {
	return (
		<div>
			<h1>Hello! 👋 I am Dummy Component</h1>
			<h2>{dummyText}</h2>
			<p>Check my story in storybook! And then delete me 💸</p>
		</div>
	);
};

export default DummyComponent;
