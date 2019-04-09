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
import ooo from '../img/ooo.jpg';
import lcsearch from '../img/lcsearch.png';
import trecamp from '../img/trecamp.png';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Tracko from './Tracko';
import { HashLink as Link } from 'react-router-hash-link';

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
		paddingBottom: "30px"
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
		// margin: theme.spacing.unit,
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
		height: 170,
	},
	myCardContentArea: {
		color: "#8f8ecb",
		fontSize: `calc(100vw / 25)`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `20px`
		},
		paddingBottom: 10,
	},
	myProductArea: {
		margin: "0px 20px"
	},
	link: {
		color: "8f8ecb",
		textDecoration: "none",
	},
});

class Skill extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root} id="skill">
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
				<div className={classes.myProductArea}>
					<Grid
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
									image={ooo}
									title="Tracko"
								/>
								<CardContent>
									<div className={classes.myCardContentArea}>
										<Link to="/Tracko" className={classes.link}>Realtime GPS tracking system</Link>
									</div>
									<Typography component="p">
										森の中を走るオリエンテーリング競技者の現在地を、リアルタイムで地図上に表示します。<br />
										React, Redux, Firebase Realtime Database, Swift
									</Typography>
								</CardContent>
								<CardActions>
									<Link to="/Tracko" className={classes.link}>
										<Button size="small" color="primary" href='https://tracko.o-app.net/' target='_blank'>
											詳細
										</Button>
									</Link>
									<Button size="small" color="primary" href='https://tracko.o-app.net/' target='_blank'>
										View
									</Button>
									<IconButton className={classes.button} aria-label="GitHub" href='https://github.com/cola119/tracko-react' target='_blank'>
										<GitHub nativeColor="#8f8ecb"/>
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
						<Grid item sm={6} md={4} lg={3}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image={lcsearch}
									title="LapCenter Search"
								/>
								<CardContent>
									<div className={classes.myCardContentArea}>
										LapCenter検索
									</div>
									<Typography component="p">
										オリエンテーリングの成績がまとまったLapCenterをスクレイピングしてデータ化。<br/>
										自由に成績を追加しグラフ化することで、時系列での成績推移を確認できる。<br />
										Laravel, Python(Beautiful Soup), D3.js
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary" href='https://lcsearch.o-app.net/' target='_blank'>
										View
									</Button>
									<IconButton className={classes.button} aria-label="GitHub" href='https://github.com/cola119/lcsearch' target='_blank'>
										<GitHub nativeColor="#8f8ecb"/>
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
						<Grid item sm={6} md={4} lg={3}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image={trecamp}
									title="Training Site"
								/>
								<CardContent>
									<div className={classes.myCardContentArea}>
										トレーニング管理サイトwith LINE bot
									</div>
									<Typography component="p">
										部内向けのトレーニング管理サイト。走行距離や筋トレ数を入力しポイント化、毎週のランキング表示。
										LINE botとのトークで成績追加が可能。<br/>
										Laravel, D3.js, LINE Messaging API
									</Typography>
								</CardContent>
								<CardActions>
									<IconButton className={classes.button} aria-label="GitHub" href='https://github.com/cola119/LINEbot_for_training' target='_blank'>
										<GitHub nativeColor="#8f8ecb"/>
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</div>
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

export default withStyles(styles)(Skill);
