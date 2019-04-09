import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Index from './components/Index';
import Academic from './components/Academic';
import Hobby from './components/Hobby';
import Skill from './components/Skill';
import Tracko from './components/Tracko';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
	// <Tracko />,
	<BrowserRouter>
		<ScrollToTop>
			<Switch>
				<Route path='/Tracko' component={Tracko} />
				<Index />
			</Switch>
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById('root')
);
