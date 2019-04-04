import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

// #ffffe6 : #8f8ecb
const styles = theme => ({
	header: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#8f8ecb",
		display: "flex", /* 要素をflexboxに対応させる */
		alignItems: "center", /* 縦方向の中央揃え */
		justifyContent: "center", /* 横方向の中央揃え */
		flexDirection: "column",
	},
	myNameArea: {
		color: "#ffffe6",
		fontSize: "10vw",
		[theme.breakpoints.up('lg')]: {
			fontSize: `70px`
		},
	},
	mySchoolArea: {
		color: "#ffffe6",
		fontSize: "3vw",
		[theme.breakpoints.up('lg')]: {
			fontSize: `30px`
		},
		padding: "10px 30px",
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class Header extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.header}>
				<Typography className={classes.myNameArea} >
					<span className={classes.myName}>上野　康平</span>
				</Typography>
				<Typography className={classes.mySchoolArea} >
					Master's degree in computer science.
				</Typography>
				<Typography align="center" color="textSecondary" component="p">
					<IconButton className={classes.button} aria-label="GitHub">
						<GitHub nativeColor="#ffffe6" fontSize="large"/>
					</IconButton>
					<IconButton className={classes.button} aria-label="Twitter">
						<Twitter nativeColor="#ffffe6" fontSize="large"/>
					</IconButton>
					<IconButton className={classes.button} aria-label="Hatena">
						<Hatena nativeColor="#ffffe6" fontSize="large"/>
					</IconButton>
				</Typography>
			</div>
		);
	}
}
function GitHub(props: Object) {
	return (
	<SvgIcon {...props}>
		<path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
	</SvgIcon>
	);
}
function Twitter(props: Object) {
	return (
	<SvgIcon {...props}>
		<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
	</SvgIcon>
	);
}
function Hatena(props: Object) {
	return (
	<SvgIcon {...props}>
		<path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z"/>
	</SvgIcon>
	);
}
export default withStyles(styles)(Header);
