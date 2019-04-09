import React, { Component } from 'react';

import Header from './Header.js';
import Academic from './Academic.js';
import Hobby from './Hobby.js';
import Skill from './Skill.js';

class Index extends Component {
	render() {
		return (
			<div>
				<Header />
				<Academic />
				<Hobby />
				<Skill />
			</div>
		);
	}
}

export default Index;
