import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
	root1: {
		width: "100vw",
		height: "100vh",
		color: "#8f8ecb",
		backgroundColor: "#ffffe6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	root2: {
		width: "100vw",
		padding: "150px 0px",
		color: "#8f8ecb",
		backgroundColor: "#ffffe6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	myNameArea: {
		fontSize: "10vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: "60px"
		},
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	myNameSubArea: {
		fontSize: "6vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: "40px"
		},
	},
	myContentArea: {
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: "20px"
		},
		padding: "40px 0px",
	},
	myContentSubArea: {
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: "20px"
		},
		padding: "10px 0px",
	},
	button: {
		color: "#8f8ecb",
		margin: theme.spacing.unit,
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: "20px"
		},
	},
});


const Academic = (props) => {
	const matches = useMediaQuery('(min-height:600px)');
	const { classes } = props;
	return (
		<div className={matches ? classes.root1 : classes.root2} id="academic">
			<div className={classes.myNameArea} >
				<span className={classes.myName}>Academic</span>
			</div>
			<div className={classes.myContentArea} >
				2015 / 04　東京工業大学 理学部 情報科学科<br />
				2019 / 03　東京工業大学 理学部 情報科学科 卒業<br />
				2019 / 04　東京工業大学 情報理工学院 数理計算科学系<br />
			</div>
			<div className={classes.myNameSubArea} >
				Major
			</div>
			<div className={classes.myContentSubArea} >
				量子計算、量子アルゴリズム、量子情報、線形代数、数理統計学<br />
				Quantum Computing, Quantum Algorithm, Quantum Information<br /><br />
			</div>
			<div className={classes.myContentSubArea} style={{ textAlign: "center" }}>
				卒業論文「光干渉計を用いた一般的な量子位相推定」<br />
				A general quantum phase estimation using optical interferometer
				<br />
				<Button variant="outlined" className={classes.button} href='https://firebasestorage.googleapis.com/v0/b/portfolio-43cec.appspot.com/o/abstract.pdf?alt=media&token=26332ea3-679a-42ad-9216-1ad52150fe57' target='_blank'>
					概要
				</Button>
				<Button variant="outlined" className={classes.button} href='https://firebasestorage.googleapis.com/v0/b/portfolio-43cec.appspot.com/o/15B02057.pdf?alt=media&token=dbcc2023-05f7-4525-9124-1180a9d81b1e' target='_blank'>
					PDF
				</Button>
			</div>
		</div>
	);
}

export default withStyles(styles)(Academic);
