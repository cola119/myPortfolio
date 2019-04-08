import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		padding: "80px 0",
		width: "100vw",
		backgroundColor: "#ffffe6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",

	},
	myNameArea: {
		color: "#8f8ecb",
		fontSize: "10vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: "60px"
		},
	},
	myNameSubArea: {
		color: "#8f8ecb",
		fontSize: "6vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: "40px"
		},
		paddingBottom: "20px"
	},
	myContentArea: {
		color: "#8f8ecb",
		fontSize: `calc(100vw / 40)+20`,
		[theme.breakpoints.up('sm')]: {
			fontSize: "25px"
		},
		padding: "40px 0px",
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	myIconArea: {
		paddingTop: 10,
		fontSize: "40px"
	},
	button: {
		margin: theme.spacing.unit,
		color: "#8f8ecb",
		fontSize: `calc(100vw / 40)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: "20px"
		},
	},
	card: {
		backgroundColor: "#ffffe6",
		maxWidth: 400,
	},
	media: {
		height: 140,
	},
	myCardContentArea: {
		color: "#8f8ecb",
		fontSize: `calc(100vw / 30)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		padding: "10px 0px",
	}
});

class Skill extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.myNameArea} >
					<span className={classes.myName}>Skill</span>
				</div>
				<div className={classes.myContentArea} >
					like:<br/>
					React, Laravel, Ruby on Rails<br/>
					<div className={classes.myIconArea}>
						<Grid container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={40}
						>
							<Grid item xs={3}>
								<i className="devicon-react-original"></i>
							</Grid>
							<Grid item xs={3}>
								<i className="devicon-laravel-plain"></i>
							</Grid>
							<Grid item xs={3}>
								<i className="devicon-rails-plain"></i>
							</Grid>
						</Grid>
					</div>
					<br />
					interesting:<br/>
					Golang, Swift<br/>
					<div className={classes.myIconArea}>
						<Grid container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={24}
						>
							<Grid item xs={3}>
								<i className="devicon-go-plain"></i>
							</Grid>
							<Grid item xs={3}>
								<i className="devicon-swift-plain"></i>
							</Grid>
						</Grid>
					</div>
				</div>
				<div className={classes.myNameSubArea} >
					Products
				</div>

				{/* <Grid
					spacing={40}
					container
					direction="row"
					justify="center"
					alignItems="flex-start"
				>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom className={classes.myCardContentArea}>
									Realtime GPS tracking system
								</Typography>
								<Typography component="p">
									森の中を走るオリエンテーリング競技者の現在地を、リアルタイムで地図上に表示します。<br />
									React, Redux, Firebase Realtime Database, Swift
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary" href='https://tracko.o-app.net/' target='_blank'>
									View
								</Button>
								<Button size="small" color="primary" href='https://github.com/cola119/tracko-react' target='_blank'>
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom className={classes.myCardContentArea}>
									LapCenter検索
								</Typography>
								<Typography component="p">
									オリエンテーリングの成績がまとまったLapCenterをスクレイピングしてデータ化。<br/>
									自由に成績を追加しグラフ化することで、時系列での成績推移を確認できる。<br />
									Laravel, Python(Beautiful Soup), D3.js
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary" href='https://lcsearch.o-app.net/' target='_blank'>
									View
								</Button>
								<Button size="small" color="primary" href='https://github.com/cola119/lcsearch' target='_blank'>
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom className={classes.myCardContentArea}>
									トレーニング管理サイトwith LINE bot
								</Typography>
								<Typography component="p">
									部内向けのトレーニング管理サイト。走行距離や筋トレ数を入力しポイント化、毎週のランキング表示。
									LINE botとのトークで成績追加が可能。<br/>
									Laravel, D3.js, LINE Messaging API
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary" href='https://github.com/cola119/LINEbot_for_training' target='_blank'>
									github
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid> */}
			</div>
		);
	}
}

export default withStyles(styles)(Skill);
