import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	header: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#ffffe6",
		display: "flex", /* 要素をflexboxに対応させる */
		alignItems: "center", /* 縦方向の中央揃え */
		justifyContent: "center", /* 横方向の中央揃え */
		flexDirection: "column",

	},
	myNameArea: {
		color: "#8f8ecb",
		// fontSize: "3rem",
		fontSize: "10vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: `60px`
		},
		// paddingBottom: "30px"
	},
	myNameSubArea: {
		color: "#8f8ecb",
		// fontSize: "2rem"
		fontSize: "6vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: `40px`
		},
	},
	myContentArea: {
		color: "#8f8ecb",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		padding: "40px 0px",
	},
	myContentSubArea: {
		color: "#8f8ecb",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		padding: "10px 0px",
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	button: {
		margin: theme.spacing.unit,
		color: "#8f8ecb",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
	},
});

class Academic extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.header}>
				<Typography className={classes.myNameArea} >
					<span className={classes.myName}>Academic</span>
				</Typography>
				<Typography className={classes.myContentArea} >
					2015 / 04　東京工業大学 理学部 情報科学科<br />
					2019 / 03　東京工業大学 理学部 情報科学科 卒業<br />
					2019 / 04　東京工業大学 情報理工学院 数理計算科学系<br />
				</Typography>
				<Typography className={classes.myNameSubArea} >
					Major
				</Typography>
				<Typography className={classes.myContentSubArea} >

					量子計算、量子アルゴリズム、量子情報、線形代数、数理統計学<br/>
					Quantum Computing, Quantum Algorithm, Quantum Information<br /><br />
				</Typography>
				<div className={classes.myContentSubArea} style={{textAlign: "center"}}>
					卒業論文「光干渉計を用いた一般的な量子位相推定」<br />
					A general quantum phase estimation using optical interferometer
					<br/>
					<Button variant="outlined" className={classes.button}>
						概要
					</Button>
					<Button variant="outlined" className={classes.button}>
						PDF
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Academic);
