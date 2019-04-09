import React, { Component } from 'react';

import Header from './Header';
import Academic from './Academic';
import Hobby from './Hobby';
import Skill from './Skill';

import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';

const styles = theme => ({
	fab: {
		position: "fixed",
		bottom: theme.spacing.unit,
		right: theme.spacing.unit,
		margin: theme.spacing.unit,
	},
});


const Index = (props) => {
	const { classes } = props;
	return (
		<div>
			<Link smooth to="#top">
				<Fab aria-label="Top" className={classes.fab}>
					<UpIcon />
				</Fab>
			</Link>
			<Header />
			<Academic />
			<Hobby />
			<Skill />
		</div>
	);
}

export default withStyles(styles)(Index);
