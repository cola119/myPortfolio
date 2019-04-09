import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Index from './components/Index';
import Academic from './components/Academic';
import Hobby from './components/Hobby';
import Skill from './components/Skill';

ReactDOM.render(
	// <HashRouter hashType="noslash">
	// 	<Switch>
	// 		<Route exact path="/" component={Index} />
	// 		{/* <Route path="#academic" component={Academic} /> */}
	// 		<Route path="#hobby" component={Hobby} />
	// 		<Route path="#skill" component={Skill} />
	// 	</Switch>
	// </HashRouter>,
	<BrowserRouter>
		<Index />
	</BrowserRouter>,
	document.getElementById('root')
);
