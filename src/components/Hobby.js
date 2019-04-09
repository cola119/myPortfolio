import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
	root1: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#8f8ecb",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	root2: {
		width: "100vw",
		padding: "150px 0px",
		backgroundColor: "#8f8ecb",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	myNameArea: {
		color: "#ffffe6",
		// fontSize: "3rem",
		fontSize: "10vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: `60px`
		},
		// paddingBottom: "30px"
	},
	myNameSubArea: {
		color: "#ffffe6",
		// fontSize: "2rem"
		fontSize: "6vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: `40px`
		},
	},
	myContentArea: {
		color: "#ffffe6",
		fontSize: `calc(100vw / 40)+20`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		padding: "40px 0px",
	},
	myContentSubArea: {
		color: "#ffffe6",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		lineHeight: 2,
		padding: "20px 0px",
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	button: {
		margin: theme.spacing.unit,
		color: "#ffffe6",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
	},
});

const Hobby = (props) => {
	const matches = useMediaQuery('(min-height:600px)');
	const { classes } = props;
	return (
		<div className={ matches ? classes.root1 : classes.root2} id="interest">
			<Typography className={classes.myNameArea} >
				<span className={classes.myName}>Interest</span>
			</Typography>
			<Typography className={classes.myContentArea} >
				オリエンテーリング・ボルダリング・登山
			</Typography>
			<Typography className={classes.myNameSubArea} >
				Experiences
			</Typography>
			<Typography className={classes.myContentSubArea} >
				2015 / 04　東京工業大学オリエンテーリング部 入部<br />
				2016 / 04　関東学生オリエンテーリング連盟 広報記録部長<br />
				2017 / 04　関東学生オリエンテーリング連盟 幹事長<br />
				2017 / 09　ジュニア世界オリエンテーリング選手権大会 日本代表<br />
				2018 / 04　日本学生オリエンテーリング連盟幹事<br />
				2018 / 09　リアルタイムGPSトラッキングシステム等を開発
			</Typography>
		</div>
	);
}


export default withStyles(styles)(Hobby);
