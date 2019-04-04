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
	header: {
		padding: "40px 0",
		width: "100vw",
		// height: "100vh",
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
		paddingBottom: "20px"
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
			<div className={classes.header}>
				<Typography className={classes.myNameArea} >
					<span className={classes.myName}>Skill</span>
				</Typography>
				<Typography className={classes.myContentArea} >
					Like:<br/>
					React, Redux, Laravel, Ruby on Rails<br/><br/>
					Interesting:<br/>
					Golang, Swift
				</Typography>
				<Typography className={classes.myNameSubArea} >
					Products
				</Typography>

				<Grid
					spacing={40}
					container
					direction="row"
					justify="center"
					alignItems="flex-start"
				>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardActionArea>
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
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button size="small" color="primary">
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardActionArea>
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
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button size="small" color="primary">
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item sm={6} md={4} lg={3}>
						<Card className={classes.card}>
							<CardActionArea>
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
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Skill);
